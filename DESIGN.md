# Design system — the llm

## Direction

An original editorial research notebook with a clear cover-and-brief opening.
The left side restores the publication's own cover language — THE LLM: From
Information to Generation — while the right side reports the current paper's
task, date, mechanism, and later consequence. The three-part editorial rhythm —
history, theory, flood — nods to James Gleick's The Information without borrowing
its cover, mark, or typography. The page should feel like a research desk with a
front page attached, not a gallery of cards.

## Tokens

- Canvas: warm paper `#f6f1e7`; raised surfaces: `#fffdf8`.
- Ink: near-black `#1e2224`; muted ink `#5e625f`.
- Accent: vermilion `#b6412c`; cool note blue `#355b70`.
- Type roles: `Hiragino Mincho ProN` (ヒラギノ明朝 ProN) as the flagship literary
  Mincho for display moments, with `Yu Mincho` / `Shippori Mincho` and `Jigmo` as
  fallbacks; `LINE Seed TW` for interface and body text; the system monospace stack
  for dates, equations, labels, and paper metadata.
- Spacing follows a 4px base scale. Substantive paper prose uses the standard
  Tailwind `text-base leading-8` scale (`--text-body` in `@theme`) with a `max-w-2xl`
  reading measure and `space-y-6` paragraph rhythm.
- **Strict Flat Prose Rule (嚴格扁平段落規範)**: All narrative paragraphs inside
  `PaperReadingLayout` are strictly uniform `text-base leading-8 text-ink` (`LINE Seed TW`).
  - **No lead paragraph magnification**: The first paragraph of any narrative section
    MUST NOT be arbitrarily magnified or styled differently (strictly prohibiting `text-lg`,
    `text-xl`, `text-2xl`, `font-serif`, or `font-display` on opening `<p>` elements).
    All narrative paragraphs share the exact same font family, size, line-height, and color.
  - **Hierarchical ownership**: Section emphasis is carried exclusively by the section
    banner (`kicker` + `h2` + optional deck), never by distorting body paragraph scales.
- The paper supplement rail is a fixed `20rem` column at `lg` and above. It holds
  term dictionaries, evidence notes, and explanatory side material; it must not
  carry a premise required by the main narrative.

## Layout rules

The home page first pairs a recognizable cover with a reported chapter brief. The
cover establishes the title and editorial identity; the brief answers what the
first paper did and why it matters. The three facts remain visible in the opening
desktop viewport and reflow below the brief at narrow widths. The historical rail
then explains the sequence of decisions, followed by the reading method and one
clear path into the paper.

Article pages open with the paper's concrete problem, a complete worked example,
an ELI5 explanation, and an accessible teaching diagram before moving into
history, theory, results, and sources. Difficult points must be paired with the
actual words, data flow, or equation they explain; a metaphor cannot replace the
mechanism. Raster illustrations may accelerate scanning, but the exact explanation
must remain visible in HTML text and an accessible caption. Author information is intentionally placed after the evidence ledger
so the reader meets the research problem before the people attached to it. Layout,
spacing, and responsive behavior are expressed with Tailwind utilities; there is
no project-specific CSS class layer.

### Paper reading layout contract

`PaperReadingLayout` is the composable paper primitive. Its default slot contains
the main narrative followed by the supplemental rail. At `lg` and above it uses a
fluid main track plus a fixed `20rem` rail; below `lg` it becomes one column in
reading order, with the rail after the main text. The main slot owns the argument
and uses `max-w-2xl`; the rail owns optional dictionaries, evidence, and side
explanations. A rail card may repeat or extend the main text, but it cannot be the
only place where an indispensable definition appears.

The component follows the open-code, composable approach: layout responsibility
lives in a local Astro component, its visual hook is `data-slot="paper-reading-layout"`,
and callers compose content through the default slot. Do not create a semantic CSS
class layer around it. Keep the mobile stack free of horizontal overflow; figures
use `w-full h-auto`, and tables or long formulas receive an explicit overflow
treatment when needed.

### Shared component primitives contract (shadcn-ui style)

- `PaperReadingLayout`: Standard editorial two-column readable layout (`max-w-2xl` reading measure + fixed `20rem` right rail).
- `AuthorGrid`: Responsive 4-column author portrait grid with verified affiliations, roles, and historical notes.
- `PaperNavigation`: Bilateral chapter continuity navigation (`prev` and `next`) with volume badges, paper titles, reading status, and forward/backward summaries.
- `AsideCard`: Supplemental right-rail card (`surface`, `paper`, `deep`, `alert`) with mono kicker and display title.
- `PaperSectionHeader`: Section opener banner with volume index, kicker, and display title.
- `Callout`: Inline editorial and architectural callout component (`variant="note" | "editorial" | "paper" | "alert"`). Enforces unified padding (`p-5 sm:p-6`), left accent border (`border-l-2`), and harmonious background opacity across all chapters.

ELI5 is an editorial method, not a visible badge. The reader should encounter the
plain explanation directly; technical names appear only after the concrete action
they describe has been established.

## Interaction rules

Links use underlines or explicit hover contrast. Keyboard focus is always visible.
Motion is limited to small entrance shifts and respects `prefers-reduced-motion`.
There are no hidden facts behind hover-only interactions.

## Styling policy

`src/styles/global.css` is the Tailwind CSS 4 entrypoint. It owns `@theme`, font
faces, and element-level base rules only. `scripts/style-policy-check.mjs` fails the
quality gate if legacy project classes or class selectors return.

## Honest constraints

The design borrows editorial discipline, not a protected publication's logo,
wordmark, copy, or layout. Diagrams are native accessible HTML/SVG, not fake
screenshots. All example metrics are labeled with their paper and condition.

## Paper naming and routing harness contract

- **Canonical Slug Rule**: Every standalone paper page under `src/pages/papers/` and content file under `src/content/papers/` MUST be named exclusively using the lowercase, hyphen-separated canonical paper title slug (e.g. `improving-language-understanding-by-generative-pre-training.astro`, `improving-language-understanding-by-generative-pre-training.ts`).
- **Strict Prohibition of Nicknames**: Informal abbreviations or model nicknames (such as `gpt-1.astro`, `gpt-2.astro`, `bert.astro`, `llama.astro`) are strictly forbidden as file names or primary route URLs.
- **Milestone Registry Alignment**: In `src/content/papers/milestones.ts`, every milestone entry's `id` and `url` must strictly equal `slugifyPaperTitle(paper.title)` and `/papers/${slugifyPaperTitle(paper.title)}`.
- **Backward Compatibility**: Shorthand aliases (such as `/papers/gpt-1`) may only exist as redirects in `astro.config.mjs` to ensure incoming links do not break.
- **Automated Harness Gate**: `scripts/paper-routing-harness.mjs` is executed as part of `npm run quality` (`npm run harness:check`). Any deviation in file names, milestone IDs, or internal links will immediately abort the quality build.

## Author portrait geometric & vignette specification contract

- **Canvas Specification**:
  - Format: PNG, exactly $1024 \times 1024\text{px}$.
  - Background: Warm uncoated engraving paper texture (`#fbf9f5` / `#fcfaf6`).
- **Canonical Bust Vignette Ellipse**:
  - Model: Symmetrical vertical elliptical bust vignette (經典版畫垂直胸像橢圓包絡線).
  - Vignette Center $(X_c, Y_c)$: $(512\text{px}, 500\text{px})$.
  - Semi-Major Vertical Axis $b$: $420.0\text{px} \pm 10.0\text{px}$ (overall figure height $\approx 840\text{px}$).
  - Semi-Minor Horizontal Axis $a$: $360.0\text{px} \pm 10.0\text{px}$ (overall shoulder width $\approx 720\text{px}$).
  - Ellipticity / Aspect Ratio: $b / a = 1.17 \pm 0.03$.
  - Bottom Arc Parabolic Equation:
    $$Y_{\text{arc}}(x) = 875 - \left(\frac{|x - 512|}{340}\right)^2 \times 150$$
    Chest center terminates at $Y \approx 875\text{px}$, rising symmetrically to shoulders at $Y \approx 725\text{px}$.
- **Landmark & Feature Anchors**:
  - Eye Level ($Y_{\text{eyes}}$): Pinned at $Y = 384.0 \pm 4.0\text{px}$ (golden eye line, top 37.5%).
  - Horizontal Symmetry Axis ($X_{\text{mid}}$): Pinned at $X = 512.0 \pm 6.0\text{px}$.
  - Headroom: Distance from top of hair to top canvas edge $= 85.0 \pm 10.0\text{px}$.
  - Chin Line ($Y_{\text{chin}}$): Lower jawline falls within $Y = 625\text{px} \sim 655\text{px}$.
  - Corner Safety Margin: Bottom-left ($x < 150, y > 900$) and bottom-right ($x > 874, y > 900$) corner margins must have zero bleeding ink (no corner clipping or square cuts).
- **Edge Transition & Text Inscription**:
  - $25\text{px}$ organic feathering into paper grain along the elliptical envelope boundary.
  - Strict 0% baked-in text policy: verified by Apple Vision OCR in `scripts/portrait-harness.mjs`. Institutional affiliations and author names are rendered solely in HTML/CSS cards.

## Canonical paper outline reference architecture contract

Every paper chapter in THE LLM follows a unified, predictable, two-zone macro-architecture. Authors and editing agents must strictly adhere to this progression; arbitrary ad-hoc structuring, phantom part numbers, theatrical "幕" (Acts), or musical "樂章" (Movements) are strictly prohibited.

### 1. Architectural Zones & Section Progression

Every chapter is partitioned into two distinct, non-overlapping structural zones:

#### Zone A: 核心正文主幹 (Core Narrative Spine)

Follows a rigorous 4-stage / 5-stage intellectual arc depending on paper archetype:

- **章節 01 · 歷史轉折與問題緣起（The Impasse & Dilemma）**:
  - Technical and physical bottlenecks of prior paradigms (e.g. RNN recurrence, supervision cliff, compute scaling blind spots).
  - Concrete historical actors, hardware/data constraints, and why common sense solutions failed.
  - Kicker standard: `章節 01 · [核心主題] / [ENGLISH SUBTITLE]` (e.g. `章節 01 · 標註懸崖與無監督破局 / THE IMPASSE`).
- **章節 02 · 核心架構與數學機制（Architecture & Mechanics）**:
  - Deconstruction of mathematical formulations, dynamic perturbation, worked tensor computations, and architectural innovations.
  - Kicker standard: `章節 02 · [核心主題] / [ENGLISH SUBTITLE]` (e.g. `章節 02 · 自回歸因果解碼機制 / THE MECHANISM`).
- **章節 03 · 統一輸入與極簡微調 / 實驗消融（Engineering Synthesis & Findings）**:
  - Ablation studies, parameter scaling, data filtering, and benchmark comparisons.
  - Kicker standard: `章節 03 · [核心主題] / [ENGLISH SUBTITLE]` (e.g. `章節 03 · 零微調的奇蹟 / ZERO-SHOT TRANSFER`).
- **章節 04 · 時代分水嶺與典範開展（Paradigm Shift & Legacy）**:
  - SOTA impacts, paradigm clashes (e.g. GPT-1 vs BERT, Base vs Align), limitations, and historical legacy leading to subsequent milestones.
  - Kicker standard: `章節 04 · [核心主題] / [ENGLISH SUBTITLE]` (e.g. `章節 04 · 世紀分水嶺 / PARADIGM SHIFT`).

#### Zone B: 論文標準雙附錄 (Canonical Dual Appendices)

Documentary evidence and research personnel records are **always appended at the conclusion of the chapter** and **never numbered as narrative chapters**:

- **附錄 01：歷時溯源與一手文獻清單（Chronological Citation Ledger & Evidence）**:
  - Strict chronological timeline and source ledger contextualizing paper claims and technical boundaries.
  - Section placement: Precedes the Author Dossier Grid.
  - Kicker standard: `文獻清單 · 歷時溯源 / REFERENCES` (or `史料依據 / EVIDENCE & SOURCES`).
- **附錄 02：核心研發團隊檔案（Core Research Team Dossier）**:
  - Formally introduces the research team via `<AuthorGrid />`.
  - **Mandatory Lead-in Narrative Requirement**: Every author dossier section must provide 2–3 substantive paragraphs before the portrait grid explaining the team's historical composition, institutional division of labor, distributed systems or theoretical contributions, and why their collective effort was required for the breakthrough. Naked, zero-prose author grid sections are strictly prohibited.
  - Section placement: Follows the Citation Ledger, anchoring the chapter finale before page navigation.
  - Kicker standard: `研發團隊 · 核心檔案 / THE AUTHORS`.

### 2. Kicker & Heading Syntax Standard

- **Prohibition of Phantom Part Numbering**:
  Never label author dossiers or references with isolated ordinals such as `第四部分` when no `第一部分` ~ `第三部分` exist.
- **Prohibition of Theatrical and Musical Scaffolding**:
  Abolish arbitrary metaphors such as `第一～八樂章` (Movements) or `第一～三幕` (Acts). Use clean, authoritative `章節 XX · [主題] / [ENGLISH]` for narrative chapters and semantic labels (`文獻清單`, `研發團隊`) for appendices.
- **Prohibition of Trailing Full Stops**:
  Headings must never end with a period (`。`).
- **Personal Names Integrity**:
  Strictly preserve all foreign/Western author names in original English/Latin spelling across all kickers, headings, and lead-in prose without phonetic transliteration.
