---
name: the-llm-editorial
description: Write, revise, or audit THE LLM paper chapters as source-bound historical reporting with complete worked explanations for Taiwan graduate readers.
---

# THE LLM editorial method

Write for graduate students from any discipline. Assume no machine-learning background; preserve the technical depth and supply the reasoning needed to reach it. Keep this skill and internal editorial records in English.

## Narrative and evidence

- Open with a concrete situation, action, or documented problem before introducing abstract claims. Develop connected paragraphs with people, circumstances, decisions, and consequences; headings and summary cards must not replace the story.
- Establish the causal chain: what the previous method could do, where it struggled, how that limitation arose, what the paper changed, what its experiments demonstrated, and what later researchers changed again. Name the relevant architecture and period; do not merge all earlier methods into one defective predecessor or present later success as inevitable.
- Explain why authors pursued an approach using their documented prior work, contemporary articles, interviews, or notes. Attribute later recollections and distinguish inference from recorded fact. Never invent conversations, motives, chronology, or author credit. Place author biographies after the main account.
- Attach sources to the claims they support, including experiment conditions and comparison baselines. A source list alone does not substantiate a causal claim. Keep provenance detail in citations or source notes; remove self-referential production notes and repeated declarations about how the article was written.

## Complete explanations and teaching cases

- Treat ELI5 as a method for making every necessary step understandable, with no visible ELI5 badge. Do not turn it into brevity, childish language, reduced scope, or an unexplained metaphor.
- Use long, realistic Chinese teaching cases grounded in situations familiar to Taiwan readers when distance or accumulated context matters. Include the complete passage, any translation, the exact words being connected, and why the connection changes the interpretation. Preserve the same people, objects, chronology, and wording throughout the explanation and diagrams.
- Distinguish constructed examples from historical evidence with a brief natural cue where needed, such as “假設”; never present an invented case, model output, or illustrative number as an observed result. Do not pad the narrative with defensive disclaimers.
- Explain each difficult operation through the case: its input, what changes, the resulting information, and how a later step uses it. Introduce technical names after their purpose is clear. When arithmetic is central, work through a small numerical example and connect it back to the actual mechanism.
- Distinguish information capacity, repeated state updates, learning signals, and sequential computation. Explain the actual advantage of a new method and its remaining costs; avoid equating attention scores with guaranteed understanding or treating plausible errors as measured failures.

## Paragraph continuity

Before revising a passage, read its preceding and following sections. In editorial notes, identify what the reader already knows, the unresolved question, the paragraph's answer, and the question that answer makes relevant. The next paragraph must develop that question or explicitly motivate a change of subject. Do not turn these notes into repetitive question-and-answer headings in the article.

- Begin from an established person, object, operation, or result. A transition such as “therefore,” “the new method,” or “during training” cannot supply a missing causal step. If the next claim requires an unexplained prerequisite, teach that prerequisite before making the claim.
- Give each paragraph one explanatory job. A paragraph about preserving earlier information must not silently switch to parameter learning and then hardware scheduling. Explain the forward computation, why its mistakes need correction, how correction travels, and which computations must wait as distinct connected steps.
- Define a term before its first explanatory use, including introductions, captions, cards, and timelines. A definition needs a familiar referent, its purpose, and its local meaning; replacing “hidden state” with “representation” does not explain either. Distinguish a token's sequence index from a coordinate inside its numerical vector, and both from a layer or time step.
- Preserve one worked example through case, representation, operation, result, and consequence. Keep the same candidates, index meanings, numbers, and units. When moving from grouped phrases to actual tokens, or from a simplified model to the paper's model, state the change before using it. Never give grouped events exact token indices or reuse the same state symbol for different events.
- Motivate an operation before naming it. For attention, establish why different source items should contribute different amounts, show comparison scores becoming weights, and show those weights mixing supplied values. Only then rely on the name. Treat “looks,” “asks,” and “remembers” as explanatory shorthand that must be connected to an actual computation.
- Carry numerical outputs into the next operation without restarting the example. For Q/K/V, explain the input vector and a worked learned transformation before relying on matrix notation; distinguish the query's comparison role, each key's comparison role, and each value's contribution. For softmax, motivate usable positive proportions, show exponentials and their total, divide, then use those weights in a worked sum. Explain any scaling before applying it. Identify what the resulting numbers feed next; do not claim they literally contain a named fact.
- Keep inference, training, and historical invention distinct. A translation error supplies a learning objective, not an annotated correct attention link. An illustrative successful lookup is not evidence that a head learned coreference. Explain encoder/decoder roles through source text and already-produced target text before introducing self-attention, cross-attention, masks, or parallel training within those roles.
- A dictionary inset supports the paragraph that needs the term. Place it before dependent arithmetic and return explicitly to that arithmetic afterward. Supply indispensable reasoning in reading order; a later glossary, repeated definition, or sidebar cannot repair an earlier dependency gap.
- Maintain a stable architecture hierarchy. Distinguish processing stages, sublayers, operations inside a sublayer, and selected design choices. A heading that promises a component count must match the inventory and diagram below it. Motivate each additional mechanism with a concrete limitation of what has just been explained.
- Make recaps serve a new purpose: applying a mechanism, testing a claim, or comparing a documented predecessor. Do not restart the same lesson after a figure. A chronological rewind needs a reason; words such as “first,” “later,” and “therefore” must not invent a historical sequence or causal relationship.

For example, after explaining a recurrent path, the reader can ask how earlier information could be available without being passed through every intervening update. Explain the available per-token data and direct weighted combination before claiming a shorter path. Later, after one weighted combination is understood, motivate multiple heads through the need to preserve different relationships. This is a dependency guide, not a mandatory chapter outline.

## Ten-thousand-whys audit harness

Before accepting formal course copy, run a bounded adversarial question pass with an inexpensive model, preferably `gpt-5.6-luna` (or `gpt-5.3-codex-spark` when that is the available low-cost route). The questioner must not rewrite the article or act as the final factual judge. Its job is to expose the premise a curious reader would ask for next.

- Give the questioner the target passage, its preceding and following sections, the relevant sources, and the audience. Ask it to begin from what the reader has actually learned, not from the writer's intended outline.
- For every new term, formula, numerical example, complexity claim, memory claim, architecture switch, or causal transition, keep asking why, how, who sets it, what it receives, what it produces, where the result goes next, how much it costs, and what it does not solve. Stop a chain only when the answer has a concrete actor, input, operation, output, scope, cost, remaining limit, or documented source boundary.
- Always include the question families that readers naturally ask about learned parameters, training versus inference, context-window scope, memory capacity, time and space complexity, and whether an illustrative number is a paper result. “All,” “direct,” “parallel,” “learned,” and “remember” are mandatory triggers, not proof that the explanation is complete.
- Require structured output: `question → missing premise → reader consequence → insertion point → source or boundary to verify`. A vague “transition is weak” is not an audit finding. The cheap model asks; the parent verifies sources and owns the repair.
- Run the pass after every substantive correction and before merging a chapter. Use a bounded question budget per pass, but pursue depth until the next question repeats an already answered premise. Conceptual depth, not a huge output, is the goal.

## Two-paragraph window audit harness

Run this local continuity harness on every pair of adjacent prose paragraphs in science-popularization copy. Each test input must contain exactly two paragraphs: the upper paragraph and the paragraph immediately below it. Strip headings, captions, sidebars, list labels, later sections, and all other article context before sending the pair to the auditor. Do not silently supply definitions, sources, intentions, or facts from elsewhere in the article.

Run two independent checks for each isolated pair. The second check must not receive the first check's reasoning or verdict.

1. **Forward check — upper paragraph to lower paragraph.** Show the auditor only the upper paragraph first. Ask: “Given only this paragraph, what unresolved question, required premise, next operation, or consequence should the immediately following paragraph address?” Record that expectation before revealing the lower paragraph. Then reveal only the lower paragraph and ask whether it is a supported continuation of the upper paragraph. Fail the pair when the lower paragraph changes subject without motivation, answers a question the upper paragraph did not create, introduces a prerequisite too late, or relies on a causal step that cannot be inferred from the upper paragraph.
2. **Backward check — lower paragraph to upper paragraph.** In a separate audit context, show the auditor only the lower paragraph first. Ask it to enumerate every fact, term, number, actor, referent, scope boundary, and causal link that the lower paragraph requires a reader to know. Then reveal only the upper paragraph and check whether it supplies every required premise. Fail the pair when any requirement depends on a heading, a later explanation, distant article context, or the writer's unstated intention.

For every failure, require one structured record with all fields present:

```text
pair_location: <upper paragraph location> -> <lower paragraph location>
direction: forward | backward
expected_continuation_or_missing_premise: <specific question, operation, consequence, or prerequisite>
reader_consequence: <what the reader cannot infer, distinguish, or understand>
repair: <what to add, remove, reorder, or reconnect, and in which paragraph>
source_boundary: <verified source, claim needing parent verification, illustrative-only boundary, or not applicable>
```

Local adjacency is necessary but not sufficient. A pair can pass both window checks while remaining globally wrong, repetitive, historically misplaced, inconsistent with a figure, or unsupported by evidence. Keep the existing whole-passage continuity, source, calculation, architecture, and historical audits.

Use an inexpensive model for the window audit when available. Its role is to ask questions, enumerate dependencies, and identify possible gaps; it must not rewrite the copy, certify factual accuracy, or invent missing support. The parent reads the complete article, verifies claims against sources, resolves conflicts between local and global structure, and makes every edit.

## Figure-decision rule

- Require a diagram or table whenever the reader must track three or more positions, an order or path across steps, a before-and-after state, or a numerical transformation. Choose the form that exposes the relationship: a diagram for paths and changes, or a table for aligned positions, states, and calculations.
- Label the inputs, positions, operations, and outputs with the case's actual terms. Show arrows for direction or sequence and make the resulting output explicit. In a table, make the input-to-output progression explicit in labeled columns and use arrows where direction matters. Trace the same case through every step without silently changing its wording or order.
- Explain the figure in adjacent prose: identify where to start, what each arrow or comparison means, what changes, and how the output is used next. Keep the explanation accessible outside the graphic; the figure must not carry essential reasoning alone.
- Reject decorative or unlabeled graphics. Boxes, colors, arrows, and metaphors without named case terms and explained outputs do not satisfy this rule.

## Language and typography

- Use Taiwan Traditional Chinese and natural Taiwanese usage. Retain English terms only when customary or necessary, explain them on first use, and insert half-width spaces between Chinese and English. Translate example passages so English proficiency is not a hidden prerequisite.
- Remove vague slogans, rhetorical filler, invented reader confusion, and redundant restatements. Expand missing reasoning rather than compressing paragraphs to fit the layout.
- Use only standard Tailwind font-size utilities: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, and `text-2xl` through `text-9xl`, with responsive variants as needed. Do not use arbitrary font sizes, inline font sizes, SVG numeric font sizes, or custom tokens to evade this rule. `xs` and `sm` name the permitted scale; they are not a requirement to make body text small. Keep substantive explanations at a comfortable body size and design the layout around readable text.

## Audit

Read the case, prose, diagrams, formulas, and cited evidence together. Prioritize contradictions and unsupported historical claims, then missing explanatory steps, narrative discontinuities, and typography. Report exact line references, the reader-facing consequence, and a concrete repair. An audit request does not authorize article edits. Respect the requested verification cadence; do not launch browsers or render harnesses during a copy-only pass.

### Continuity review checklist

- Read adjacent paragraphs without headings. Does the second answer or develop a question created by the first? Record the missing premise when it does not; do not merely request a smoother transition.
- At each first use, can the reader identify the term's concrete referent and purpose from text already read? Include symbols, captions, and introductory summaries in this check.
- Trace one case end to end. Do people, referents, event order, candidates, token/group indices, and state labels remain consistent across prose, tables, and figures?
- Recalculate the worked example. Does each output become the next input? Are matrix multiplication, dot product, scaling, exponentiation, normalization, and weighted addition explained where needed?
- Can the reader explain what changes after the calculation and which operation uses that result next, without assuming that a vector is a literal sentence or a score proves understanding?
- At every architecture or historical switch, are the model, source/target side, training/generation phase, and changed assumptions explicit?
- Do headings, diagrams, and component lists describe the same level of the architecture? Are newly introduced mechanisms motivated before their names appear?
- Does each repeated explanation add a comparison, result, or consequence? Can production commentary and unsupported chronological language be removed without losing evidence?
- Report remaining failures as location → missing knowledge or contradiction → reader consequence → concrete repair. Distinguish confirmed source contradictions from claims still needing verification. A passing formatter or typecheck is not editorial approval.
