# THE LLM: From Information to Generation

An Astro learning site that explains the papers behind contemporary language
models in Traditional Chinese. The first chapter is “Attention Is All You Need”.
Its editorial structure — history, theory, flood — is a nod to James Gleick's
_The Information_.

## Commands

```bash
npm install
npm run dev
npm run quality
```

`quality` is the merge gate: it checks formatting, ESLint, Astro's TypeScript
analysis, a production build, the deterministic production-HTML accessibility check,
and the editorial copy check.

The style policy also fails if a project-specific class selector or a legacy custom
class returns; layout and spacing are expected to use Tailwind utilities.

The quality gate also checks that each page keeps a mobile-first base, responsive
breakpoint utilities, and a fluid content shell.

The research layer lives in `src/content/` and its evidence boundary lives in
`research/sources/`. Every chapter can carry paper identifiers, author briefs,
motivation claims, source links, confidence levels, and explicit unknowns.

## Editorial method

Each paper gets four passes: the problem that made the paper necessary, the paper's
own mechanism, line-by-line ELI5 notes at the important claims, and a historical
verdict that says what the paper solved and what it left open.
