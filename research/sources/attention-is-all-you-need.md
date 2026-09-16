# Evidence dossier: Attention Is All You Need

Project: `the-llm`  
Evidence identity: `the-llm-source-ledger-v1`  
Last checked: 2026-09-13

This dossier is the source boundary for the first chapter. It separates what the
paper states, what a participant later remembers, and what the editor reconstructs.
The chapter must not turn a plausible reconstruction into a reported fact.

## Source map

### paper-2017-arxiv — primary paper and metadata

- Title: _Attention Is All You Need_
- Authors: Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones,
  Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin
- Submitted: 2017-06-12; arXiv record inspected 2026-09-12
- URL: <https://arxiv.org/abs/1706.03762>
- DOI: <https://doi.org/10.48550/arXiv.1706.03762>
- Use: metadata, architecture, experiments, stated comparison, limitations visible in
  the published method.
- Boundary: the paper cannot tell us everything that happened before the final
  prose, or privately assign intellectual credit to each author.

### paper-2014-seq2seq — fixed-vector sequence-to-sequence paper

- Title: _Sequence to Sequence Learning with Neural Networks_
- Authors: Ilya Sutskever, Oriol Vinyals, Quoc V. Le
- Submitted: 2014-09-10; arXiv record inspected 2026-09-13
- URL: <https://arxiv.org/abs/1409.3215>
- DOI: <https://doi.org/10.48550/arXiv.1409.3215>
- Use: the LSTM encoder maps a variable-length source sequence to a fixed-dimensional
  vector and an LSTM decoder generates the target sequence; the paper also reports
  source reversal as an optimization intervention and WMT'14 English–French results.
- Boundary: this paper shows that a fixed-vector approach can work on its reported
  task. Its claim that the LSTM did not have difficulty with long sentences is not a
  universal guarantee about all long-distance language dependencies.

### paper-2014-align-translate — attention as a recurrent-translation repair

- Title: _Neural Machine Translation by Jointly Learning to Align and Translate_
- Authors: Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio
- Submitted: 2014-09-01; arXiv record inspected 2026-09-13
- URL: <https://arxiv.org/abs/1409.0473>
- DOI: <https://doi.org/10.48550/arXiv.1409.0473>
- Use: the authors identify the fixed-length vector as a bottleneck and let the decoder
  soft-search encoder annotations for each target word; the paper reports long-sentence
  comparisons and interpretable soft alignments.
- Boundary: the encoder and decoder remain recurrent. This is attention added to an
  encoder–decoder system, not the later Transformer decision to remove recurrence.

### paper-2015-attention-nmt — global and local recurrent attention

- Title: _Effective Approaches to Attention-based Neural Machine Translation_
- Authors: Minh-Thang Luong, Hieu Pham, Christopher D. Manning
- Submitted: 2015-08-17; arXiv record inspected 2026-09-13
- URL: <https://arxiv.org/abs/1508.04025>
- DOI: <https://doi.org/10.48550/arXiv.1508.04025>
- Use: global attention that considers all source words, local attention that considers
  a subset, WMT English–German comparisons, and the continued recurrent architecture.
- Boundary: this paper documents design choices within recurrent attention-based NMT;
  it does not establish the private chronology that led to the 2017 Transformer.

### google-uszkoreit-2017 — contemporaneous authorial account

- Author: Jakob Uszkoreit
- Title: _Transformer: A Novel Neural Network Architecture for Language Understanding_
- Publisher: Google Research Blog; published 2017-08-31
- URL: <https://research.google/blog/transformer-a-novel-neural-network-architecture-for-language-understanding/>
- Use: contemporary framing of recurrent models, long dependency paths, and why
  self-attention was presented as a good fit for language understanding.
- Boundary: a short blog post is not meeting minutes or a complete lab notebook.

### gomez-time-2023 — retrospective interview

- Interviewee: Aidan Gomez
- Publisher: TIME; published 2023-09-07
- URL: <https://qa.time.com/6310653/aidan-gomez/>
- Use: Gomez’s age and internship context, the team’s translation focus, and his
  explicit surprise at the later consequences.
- Boundary: one coauthor’s later memory; useful, but not a universal team account.

### gomez-ap-2024 — later technical explanation

- Interviewee: Aidan Gomez
- Publisher: Associated Press; published 2024-03-25
- URL: <https://apnews.com/article/71d8618ccc5420aba19871d41eb81615>
- Use: a plain-language explanation of why Transformer scaled well across hardware,
  and the distinction between the original architecture and later LLM products.
- Boundary: later application-focused interview, not evidence for the exact origin of
  each architectural component.

### paper-review-record — publication context

- Publisher: NeurIPS Proceedings
- URL: <https://proceedings.neurips.cc/paper/7181-attention-is-all-you-need>
- Use: the conference publication and review context.
- Boundary: a review record shows evaluation, not the whole intellectual history.

## Editorial rules for the chapter

1. Say “the paper states” when the claim comes from the primary paper.
2. Say “Uszkoreit wrote at the time” or “Gomez later recalled” when the claim comes
   from an individual source.
3. Say “this suggests” when connecting the working conditions to the design choice.
4. Say “we do not know from the sources checked” when the public record is silent.
5. Do not write a single-genius origin story for an eight-author paper without direct
   evidence. The source record currently supports a team-level account, not a private
   chronology.
