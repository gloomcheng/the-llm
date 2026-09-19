# THE LLM: From Information to Generation

A Traditional Chinese, paper-first learning site that traces the milestones behind
contemporary language and multimodal models, starting from primary scientific
sources. Each chapter begins with one landmark paper: first the problem that made
it necessary, then a sentence-by-sentence unpacking of what the paper actually
showed, and finally how later work changed its meaning.

## Audience

Graduate students at the start of their research life, in any department. Basic
programming and linear algebra are enough to begin; no machine-learning
vocabulary is assumed.

## Editorial method

Every chapter follows three turns — history, theory, flood — a respectful nod to
James Gleick's _The Information_. History covers the problem and research culture
that made the paper necessary. Theory unpacks the paper's actual claims in plain
language. Flood traces the later scale-up and paradigm shifts that reframed it.

## Research standard

Long-form chapters are assembled from a versioned source ledger. A paper record
must include its DOI (or an explicit DOI-not-found state), the author list with
briefs, motivation claims, source IDs, confidence levels, and explicit unknowns.
Historical reconstruction is allowed only when its evidence chain is visible; a
compelling story is never a license to invent private conversations or
single-genius origins.

## Content boundary

The site explains papers in their original language and links to the
authoritative source. It does not reproduce entire papers. Quotations stay short
and appear only when the exact wording is part of the lesson.

## Commands

```bash
npm install
npm run dev
npm run quality
```

`quality` is the merge gate: formatting, ESLint, Astro's TypeScript analysis, a
production build, the deterministic production-HTML accessibility check, and the
editorial copy check (Taiwan academic terminology, original-language personal
names, no emoji glyphs), plus routing and portrait-calibration harnesses.

Layout and spacing use Tailwind utilities throughout; there is no
project-specific class layer. The research layer lives in `src/content/` and its
evidence boundary lives in `research/sources/`. Every chapter can carry paper
identifiers, author briefs, motivation claims, source links, confidence levels,
and explicit unknowns.

## First chapter

The opening paper is Vaswani et al., "Attention Is All You Need" (2017). The
Transformer is the shared structural ancestor of most modern LLM families, even
though the paper itself is an encoder-decoder translation system rather than a
chat model.
