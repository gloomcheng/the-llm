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
- Type roles: the Taiwan Traditional Chinese serif stack for display moments,
  with `Jigmo` as the rare-Han webfont fallback; `LINE Seed TW` for interface and
  body text; the system monospace stack for dates, equations, labels, and paper
  metadata.
- Spacing follows a 4px base scale. Substantive paper prose uses the standard
  Tailwind `text-base leading-8` scale with a `max-w-2xl` reading measure and
  `mb-10` paragraph rhythm.
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
