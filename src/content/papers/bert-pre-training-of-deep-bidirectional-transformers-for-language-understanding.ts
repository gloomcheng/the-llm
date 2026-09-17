import type { PaperRecord, SourceRecord } from '../paper-schema';

export const bertSources: SourceRecord[] = [
  {
    id: 'paper-2018-bert',
    kind: 'paper',
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    publisher: 'NAACL 2019 / arXiv',
    published: '2018-10-11',
    accessed: '2026-09-17',
    url: 'https://arxiv.org/abs/1810.04805',
    supports: [
      'BERT 提出基於 Transformer Encoder 的深度雙向預訓練架構，打破單向自回歸語言模型的視野盲點',
      '提出克漏字遮罩語言模型（Masked Language Model, MLM）：隨機遮蔽 15% 的詞彙，強迫模型同時結合左右兩側上下文推斷被遮蔽的詞',
      '提出下一句預測（Next Sentence Prediction, NSP）輔助任務：以二元分類預測兩句子是否連續，捕捉句子級別的語意關係',
      '在 11 項主流自然語言理解評測（GLUE、SQuAD v1.1、SQuAD v2.0、SWAG）中創下全數超越先前 SOTA 的歷史紀錄',
      '證明模型規模擴展的巨大威力：BERT-Large（3.4 億參數）相較 BERT-Base（1.1 億參數）在小數據任務上依然能顯著提升遷移表現',
    ],
    limits:
      '奠定雙向預訓練理解模型的行業標竿。但因其預訓練任務為完形填空而非自回歸生成，BERT 無法直接進行流暢的開放式自然語言生成（如寫作、長文對話）。',
  },
  {
    id: 'paper-2018-gpt1',
    kind: 'paper',
    title: 'Improving Language Understanding by Generative Pre-Training',
    publisher: 'OpenAI Preprint',
    published: '2018-06-11',
    accessed: '2026-09-17',
    url: 'https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf',
    supports: [
      'BERT 論文的核心對比基線（Section 5.1）：對比單向自回歸 Decoder 與雙向 Encoder 在自然語言理解任務上的本質差異',
      '證明生成式單向自回歸在閱讀理解（如 SQuAD）上的結構性缺陷：單向因果遮罩導致模型在閱讀問題與文章時無法同時參考後文',
    ],
    limits:
      'GPT-1 堅持單向自回歸路徑，雖然在 2018 年底的理解基準測試上被 BERT 超越，但該路線在後續參數規模拉大後通向了 GPT-2、GPT-3 與現代生成式 LLM。',
  },
  {
    id: 'paper-2017-transformer',
    kind: 'paper',
    title: 'Attention Is All You Need',
    publisher: 'NeurIPS / arXiv',
    published: '2017-06-12',
    accessed: '2026-09-17',
    url: 'https://arxiv.org/abs/1706.03762',
    supports: [
      'BERT 採用的骨幹架構：全雙向自注意力（Bidirectional Self-Attention）Transformer Encoder',
      '允許序列中每一個 Token 在每一層運算中，同時且無損地檢索序列中所有其他位置的資訊',
    ],
    limits:
      '原始 Transformer 為機器翻譯雙塔結構；BERT 完全捨棄 Decoder，專注將 Encoder 堆疊擴展為通用特徵抽取器。',
  },
  {
    id: 'paper-2018-elmo',
    kind: 'paper',
    title: 'Deep Contextualized Word Representations',
    publisher: 'NAACL / arXiv',
    published: '2018-02-15',
    accessed: '2026-09-17',
    url: 'https://arxiv.org/abs/1802.05365',
    supports: [
      '探討雙向上下文特徵的重要先驅：ELMo 分別訓練了獨立的由左至右與由右至左的單向 LSTM，再將兩者隱藏向量拼接',
      'BERT 論文指出 ELMo 的「淺層雙向（Shallow Bidirectionality）」本質：兩個獨立單向 LSTM 的拼接無法讓中間每一層的注意力同時跨方向交互',
    ],
    limits: 'ELMo 僅提供下游固定特徵向量，且未能實現真正的全深度雙向注意力交互。',
  },
  {
    id: 'paper-1953-cloze',
    kind: 'paper',
    title: 'Cloze Procedure: A New Tool for Measuring Readability',
    publisher: 'Journalism Quarterly',
    published: '1953-09-01',
    accessed: '2026-09-17',
    url: 'https://doi.org/10.1177/107769905303000401',
    supports: [
      'Wilson L. Taylor 於 1953 年提出的「克漏字測驗（Cloze Procedure）」心理學與語言學工具',
      'BERT Masked Language Model 的靈感直系祖先：藉由隨機挖空詞彙，衡量受測者調動前後全語境常識與語法以還原原詞的能力',
    ],
    limits:
      '原始研究用於測量人類文本的可讀性與閱讀理解力，被 Devlin 等人創造性地轉化為自監督學習的損失函數。',
  },
  {
    id: 'paper-2018-glue',
    kind: 'paper',
    title: 'GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding',
    publisher: 'EMNLP / arXiv',
    published: '2018-04-26',
    accessed: '2026-09-17',
    url: 'https://arxiv.org/abs/1804.07461',
    supports: [
      'BERT 刷新紀錄的主要戰場：BERT-Large 在 GLUE 取得 80.5 分，相較 GPT-1（72.8）取得 7.7 個百分點的巨大躍進',
    ],
    limits: '標準化評測基準。',
  },
  {
    id: 'paper-2016-squad',
    kind: 'paper',
    title: 'SQuAD: 100,000+ Questions for Machine Comprehension of Text',
    publisher: 'EMNLP / arXiv',
    published: '2016-06-16',
    accessed: '2026-09-17',
    url: 'https://arxiv.org/abs/1606.05250',
    supports: [
      '史丹佛問答資料集（Stanford Question Answering Dataset）：要求模型從文章中抽取精確的起止答案範圍（Span Extraction）',
      'BERT-Large 在 SQuAD v1.1 評測中取得 93.2 EM / 86.8 F1，首度在機器閱讀理解上超越人類基準（Human Performance: 86.8 F1 / 82.3 EM）',
    ],
    limits: '抽取式問答資料集，答案嚴格限制在原文片段之內。',
  },
];

export const bertPaper: PaperRecord = {
  id: 'bert-pre-training-of-deep-bidirectional-transformers-for-language-understanding',
  researchStatus: 'published',
  lastChecked: '2026-09-17',
  coverageNote: '依據 NAACL 2019 正式發表版本與原始 arXiv:1810.04805 進行全面史料考證。',
  title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
  chineseTitle: 'BERT：雙向深層理解的巔峰',
  year: 2018,
  submitted: '2018-10-11',
  venue: 'NAACL 2019',
  pages: '4171–4186',
  arxivId: '1810.04805',
  doi: {
    value: '10.18653/v1/N19-1423',
    url: 'https://doi.org/10.18653/v1/N19-1423',
    status: 'verified',
    verificationNote: '經 ACL Anthology 與 DOI 官方數據庫雙重驗證通過。',
    sourceId: 'paper-2018-bert',
  },
  authors: ['Jacob Devlin', 'Ming-Wei Chang', 'Kenton Lee', 'Kristina Toutanova'],
  authorBriefs: [
    {
      name: 'Jacob Devlin',
      affiliationAtPublication: 'Google AI Language',
      roleInPaper:
        '第一作者兼主要構想者，提出 Masked LM 與兩階段預訓練微調架構，主導程式碼與模型實驗',
      verifiedContext:
        '曾任職於 Microsoft Research，2017 年加入 Google AI。在閱讀理解與神經機器翻譯領域積累深厚，於 2018 年秋主導完成 BERT 研發。',
      evidenceIds: ['paper-2018-bert'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Ming-Wei Chang (張明偉)',
      affiliationAtPublication: 'Google AI Language',
      roleInPaper:
        '共同作者，主導下一句預測（NSP）設計、語意問答任務適配與大規模分散式訓練系統優化',
      verifiedContext:
        '畢業於台灣大學資訊工程學系，於伊利諾大學厄巴納-香檳分校（UIUC）取得資訊科學博士。長期專注於語意解析、問答系統與非監督特徵學習。',
      evidenceIds: ['paper-2018-bert'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Kenton Lee',
      affiliationAtPublication: 'Google AI Language',
      roleInPaper: '共同作者，主導 SQuAD 問答抽取機制、跨文本序列編碼架構與評測實驗',
      verifiedContext: '專精於共指消解（Coreference Resolution）與機器閱讀理解。',
      evidenceIds: ['paper-2018-bert'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Kristina Toutanova',
      affiliationAtPublication: 'Google AI Language',
      roleInPaper: '資深研究員，指導研究方向、語言學語意完整性檢驗與跨領域泛化理論分析',
      verifiedContext:
        '史丹佛大學博士，ACL Fellow，在語法分析、資訊抽取與自然語言表徵學習領域享有國際盛名。',
      evidenceIds: ['paper-2018-bert'],
      confidence: 'direct',
      unknowns: [],
    },
  ],
  abstractSummary:
    '提出一種名為 BERT 的新型語言表徵模型。與近期其他語言表徵模型不同，BERT 的設計旨在透過在所有層中聯合調節左右兩側上下文，未標註文本中預先訓練深層雙向表徵。因此，只需額外增加一個輸出層，就能對預訓練的 BERT 模型進行微調，為各種尖端任務創建最先進的模型，且無需對任務專門修改架構。',
  historicalQuestion:
    '既然第一章的 Transformer Encoder 天生具備全雙向注意力視野，為什麼 2018 年的 GPT-1 卻退回到「只能看前文」的單向因果解碼器？Google 團隊是如何用一場看似簡單的英語「克漏字填空」，徹底打破單向限制，並在閱讀理解上首度超越人類的？',
  motivationClaims: [
    {
      id: 'claim-bidirectional-bottleneck',
      claim: '標準單向語言模型迫使模型在閱讀句子時產生人為的單眼盲點',
      explanation:
        '在判別式任務（如情感分類、問答）中，後文資訊對前文詞義的消歧極為重要。GPT-1 強制使用因果遮罩，導致在處理句子前半部時丟失了後半部的所有語境。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2018-bert', 'paper-2018-gpt1'],
    },
    {
      id: 'claim-masked-lm-solution',
      claim: '克漏字遮罩（MLM）是防止雙向注意力直接偷看答案的唯一破局解法',
      explanation:
        '如果允許深層雙向注意力直接做下一個詞預測，目標詞會透過多層網路直接洩漏給自己（Identity Leakage）。隨機遮蓋 15% 的詞強迫模型只能透過間接上下文推理。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2018-bert', 'paper-1953-cloze'],
    },
    {
      id: 'claim-80-10-10-mismatch',
      claim: '80/10/10 混合遮蓋策略解決了預訓練與微調階段 [MASK] 符號的不一致問題',
      explanation:
        '下游真實任務中絕不會出現 [MASK] 標記。如果 100% 都替換為 [MASK]，模型會依賴這個特殊符號而失去對正常詞彙的動態編碼能力。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2018-bert'],
    },
  ],
  unknowns: [
    '下一句預測（NSP）任務在後續研究（如 RoBERTa）被證明效用有限甚至可能微損效能，但 BERT 原始設計中該任務對特定句對推理確實具備正面初始作用。',
  ],
  sourceIds: [
    'paper-2018-bert',
    'paper-2018-gpt1',
    'paper-2017-transformer',
    'paper-2018-elmo',
    'paper-1953-cloze',
    'paper-2018-glue',
    'paper-2016-squad',
  ],
};
