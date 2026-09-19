"""Subset webfonts to glyphs actually used by the site.

Sources (full, canonical):  src/assets/fonts-full/{line-seed,jigmo}/*.woff2
Outputs (subset, served):    src/assets/fonts/{line-seed,jigmo}/*.woff2

Re-run whenever chapter copy changes, with .venv-fonttools active:
    ./.venv-fonttools/bin/python scripts/subset-fonts.py

The script fails loudly if any character rendered by src/ is missing from
the subset union, so tofu can never ship silently. Buffer ranges below cover
punctuation/symbols that future copy will plausibly need; CJK body text must
come from the used set (re-run the script).
"""

import pathlib
import sys

from fontTools.ttLib import TTFont
from fontTools import subset

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC_FULL = ROOT / 'src' / 'assets' / 'fonts-full'
SRC_OUT = ROOT / 'src' / 'assets' / 'fonts'

TARGETS = [
    ('line-seed', 'LINESeedTW_OTF_Rg.woff2'),
    ('line-seed', 'LINESeedTW_OTF_Bd.woff2'),
    ('line-seed', 'LINESeedTW_OTF_Eb.woff2'),
    ('jigmo', 'Jigmo.woff2'),
    ('jigmo', 'Jigmo2.woff2'),
    ('jigmo', 'Jigmo3.woff2'),
]

# Always-kept ranges: latin, punctuation, symbols, arrows, math, CJK
# punctuation, fullwidth forms. Small in bytes, high future value.
BUFFER_RANGES = [
    (0x0020, 0x007E),
    (0x00A0, 0x00FF),
    (0x2000, 0x206F),
    (0x20A0, 0x20CF),
    (0x2100, 0x214F),
    (0x2190, 0x21FF),
    (0x2200, 0x22FF),
    (0x3000, 0x303F),
    (0xFF00, 0xFFEF),
]


def collect_used() -> set[int]:
    chars: set[int] = set()
    for pattern in ('*.astro', '*.ts'):
        for path in (ROOT / 'src').rglob(pattern):
            chars.update(path.read_text(encoding='utf-8'))
    # Drop ASCII controls; keep every printable codepoint (including space).
    return {ord(c) for c in chars if ord(c) >= 0x20 or c in '\t\n'}


def main() -> int:
    used = collect_used()
    buffered: set[int] = set(used)
    for start, end in BUFFER_RANGES:
        buffered.update(range(start, end + 1))

    unicodes_opt = subset.Options()
    unicodes_opt.flavor = 'woff2'

    total_before = 0
    total_after = 0
    union_cmap: set[int] = set()
    for subdir, filename in TARGETS:
        src = SRC_FULL / subdir / filename
        if not src.exists():
            print(f'MISSING SOURCE: {src}', file=sys.stderr)
            return 1
        font = TTFont(src)
        opts = subset.Options()
        opts.flavor = 'woff2'
        ss = subset.Subsetter(opts)
        ss.populate(unicodes=sorted(buffered))
        ss.subset(font)
        out = SRC_OUT / subdir / filename
        out.parent.mkdir(parents=True, exist_ok=True)
        font.save(out)
        before = src.stat().st_size
        after = out.stat().st_size
        total_before += before
        total_after += after
        union_cmap.update(font.getBestCmap().keys())
        print(f'{subdir}/{filename}: {before / 1024:.0f}KB -> {after / 1024:.0f}KB')

    missing = sorted(c for c in used if c not in union_cmap and chr(c).strip())
    # Characters the FULL sources never covered were always system-rendered;
    # only a loss versus the full union is a failure.
    full_union: set[int] = set()
    for subdir, filename in TARGETS:
        full_union.update(TTFont(SRC_FULL / subdir / filename).getBestCmap().keys())
    lost = sorted(c for c in missing if c in full_union)
    always_fallback = sorted(c for c in missing if c not in full_union)
    if always_fallback:
        sample = ' '.join(chr(c) for c in always_fallback[:40])
        print(f'note: {len(always_fallback)} used chars were never in sources (system fallback, pre-existing): {sample}')
    if lost:
        sample = ' '.join(chr(c) for c in lost[:30])
        print(f'COVERAGE FAILURE: {len(lost)} used chars lost by subsetting: {sample}', file=sys.stderr)
        return 1

    print(f'total: {total_before / 1024 / 1024:.1f}MB -> {total_after / 1024:.0f}KB')
    print('coverage OK: every rendered character survives subsetting')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
