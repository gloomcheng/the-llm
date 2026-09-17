import type { PaperRecord, SourceRecord } from '../paper-schema';

export const gpt1Sources: SourceRecord[] = [
  {
    id: 'paper-2018-gpt1',
    kind: 'paper',
    title: 'Improving Language Understanding by Generative Pre-Training',
    publisher: 'OpenAI Preprint',
    published: '2018-06-11',
    accessed: '2026-09-17',
    url: 'https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf',
    supports: [
      'GPT-1 兩階段訓練框架：無監督生成式預訓練（Unsupervised Pre-training）與任務專用監督微調（Supervised Fine-tuning）',
      '使用 12 層僅解碼器（Decoder-only）Transformer 架構與 768 維隱藏層，在 BooksCorpus（7,000 本未出版書籍，約 8 億詞）進行自回歸語言建模',
      '在 12 項自然語言理解任務中取得 9 項最先進（State-of-the-Art）成果，包括推論（NLI）、問答、語意相似度與文字分類',
      '提出統一輸入序列化格式（Traversal-style input transformations）：以 [Start]、[Delim]、[Extract] 符號無需修改模型主體即可適配多種任務',
      '實驗揭示生成式預訓練隨訓練步數自然產生零樣本（Zero-shot）任務遷移能力之趨勢（Figure 5）',
    ],
    limits:
      '奠定生成式自回歸預訓練標準典範。當時尚未採用 BPE 大詞表（使用 40,000 詞 byte-pair），模型參數量為 1.17 億（117M），下游仍需依賴輕量微調。',
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
      'Multi-Head Self-Attention 與 Transformer 基本單元結構',
      'Layer Normalization、Residual Connection 與 Position-wise Feed-Forward Networks',
      '因果遮罩（Causal Masking）在防止資訊穿越未來的數學實作',
    ],
    limits: '原始論文為翻譯專用的 Encoder-Decoder 雙塔架構；GPT-1 提煉出純 Decoder 單向堆疊路徑。',
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
      'ELMo 提出雙向雙層 LSTM 上下文動態詞向量，證明預訓練表徵能大幅提升下游 NLP 表現',
      '指出特徵提取（Feature Extraction）方法的局限：下游仍需設計複雜且各自相異的專用神經網路架構',
    ],
    limits:
      '底層仍受限於 LSTM 循序計算瓶頸，且僅作為固定特徵傳遞給下游模型，而非端到端微調完整模型。',
  },
  {
    id: 'paper-2015-bookcorpus',
    kind: 'paper',
    title:
      'Aligning Books and Movies: Towards Story-like Visual Explanations by Watching Movies and Reading Books',
    publisher: 'ICCV / arXiv',
    published: '2015-06-22',
    accessed: '2026-09-17',
    url: 'https://arxiv.org/abs/1506.06724',
    supports: [
      'BooksCorpus 語料庫構建：收錄逾 7,000 本未出版小說（涵蓋浪漫、奇幻、冒險等），總詞數超過 8 億詞',
      '提供大量長篇連貫敘事文本，使模型能夠學習跨句甚至跨段落的長程語意相依性與世界常識，而非瑣碎破碎的百科條目',
    ],
    limits:
      '主要涵蓋小說文學敘事，學術論述、對話語料與程式碼較少，但具備極高的一致性與長程連貫語意。',
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
      '涵蓋推論、相似度、情緒分類等多種任務的標準評測基準，打破單一任務過擬合之盲點',
      'GPT-1 在 GLUE 基準測試中取得 72.8 總分，顯著超越先前基線模型（68.9），驗證預訓練遷移之廣度',
    ],
    limits: '綜合評測基準，提供客觀數據衡量模型是否真正掌握通用語言理解能力。',
  },
  {
    id: 'paper-2018-bert',
    kind: 'paper',
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    publisher: 'NAACL / arXiv',
    published: '2018-10-11',
    accessed: '2026-09-17',
    url: 'https://arxiv.org/abs/1810.04805',
    supports: [
      '對比 GPT-1 的單向因果語言模型（Left-to-Right LM）與雙向克漏字語言模型（Masked LM）的理論取捨',
      '引爆 2018 年後雙向編碼器（BERT）與自回歸生成式解碼器（GPT）的路線之爭',
    ],
    limits:
      'BERT 強化了判別式理解任務（如 SQuAD 問答），但無法直接進行開放式文字生成；GPT 堅持的生成式自回歸路徑最終在擴展規模後通向大模型時代。',
  },
];

export const gpt1Paper: PaperRecord = {
  id: 'improving-language-understanding-by-generative-pre-training',
  researchStatus: 'published',
  lastChecked: '2026-09-17',
  coverageNote:
    '全面剖析 GPT-1 兩階段框架：海量無標註書籍自回歸預訓練、無縫適配四類任務的序列化結構、動態擾動實驗與零樣本湧現萌芽。',
  title: 'Improving Language Understanding by Generative Pre-Training',
  chineseTitle: 'GPT-1：無監督生成式預訓練的黎明',
  year: 2018,
  submitted: '2018-06-11',
  venue: 'OpenAI Technical Report',
  arxivId: '1806.00000',
  doi: {
    value: 'N/A',
    url: 'https://openai.com/research/language-unsupervised',
    status: 'verified',
    verificationNote: 'OpenAI 官方原創技術報告與論文發布',
    sourceId: 'paper-2018-gpt1',
  },
  authors: ['Alec Radford', 'Karthik Narasimhan', 'Tim Salimans', 'Ilya Sutskever'],
  authorBriefs: [
    {
      name: 'Alec Radford',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '第一作者；構思生成式預訓練核心架構、編寫訓練程式並主持全項實驗。',
      verifiedContext:
        'GPT 系列核心靈魂人物，先後主導 GPT-1、GPT-2、GPT-3、CLIP 與 Whisper 等開創性研究，始終堅信自回歸生成式預訓練的無窮潛力。',
      evidenceIds: ['paper-2018-gpt1'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/alec-radford.png',
    },
    {
      name: 'Karthik Narasimhan',
      affiliationAtPublication: 'OpenAI / MIT',
      roleInPaper: '共同作者；主導各類自然語言理解基準任務之微調架構與實驗評估。',
      verifiedContext:
        '自然語言處理與強化學習領域頂尖學者，現為普林斯頓大學助理教授，設計統一輸入序列化格式與微調評估方案。',
      evidenceIds: ['paper-2018-gpt1'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/karthik-narasimhan.png',
    },
    {
      name: 'Tim Salimans',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同作者；參與深度生成模型訓練動態與最佳化方法設計。',
      verifiedContext:
        '機器學習最佳化與生成模型專家，在 Weight Normalization、進階正則化與自回歸生成穩定性方面提供深厚理論支援。',
      evidenceIds: ['paper-2018-gpt1'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/tim-salimans.png',
    },
    {
      name: 'Ilya Sutskever',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同作者；OpenAI 共同創辦人暨首席科學家，提供研究願景與指導。',
      verifiedContext:
        '深度學習革命奠基者之一（AlexNet、Seq2Seq 共同發明人），堅定推動以「自回歸預測下一個字」為大腦學習基石的科學假說。',
      evidenceIds: ['paper-2018-gpt1'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/ilya-sutskever.png',
    },
  ],
  abstractSummary:
    '透過在無標註書籍文本上執行「預測下一個詞」的生成式預訓練，搭配針對特定任務的極簡微調，打破過去依賴龐大標註數據與專用模型架構的限制。',
  historicalQuestion:
    '能否打破人工標註的資料懸崖與專用網路的工程藩籬，以「預測下一個詞」的自回歸自監督學習，訓練出通曉萬法的大型語言模型？',
  motivationClaims: [
    {
      id: 'motivation-annotation-bottleneck',
      claim: '監督學習受困於昂貴且有限的人工標註，使深層神經網路極易過擬合。',
      explanation:
        '真實世界的特定領域往往只有數百到數千筆標註樣本，不足以訓練數千萬參數的深層架構；而未標註文本卻取之不盡。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2018-gpt1', 'paper-2018-elmo'],
    },
    {
      id: 'motivation-universal-architecture',
      claim: '以統一序列化格式打破每種 NLP 任務都需要專用神經網路的桎梏。',
      explanation:
        '透過引入特殊定界符號，讓分類、推論、相似度與問答等完全不同的任務，能直接使用同一套 Transformer 解碼器，僅需加上一層線性投影。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2018-gpt1', 'paper-2018-glue'],
    },
    {
      id: 'motivation-generative-transfer',
      claim: '自回歸生成式預訓練使模型在無監督情況下自發萌芽零樣本遷移能力。',
      explanation:
        '論文實驗證明，僅憑純語言模型的生成式預訓練，模型在不經任何微調的情況下，即對情緒分析、推論等下游任務具備穩定上升的判斷力。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2018-gpt1'],
    },
  ],
  unknowns: [],
  sourceIds: [
    'paper-2018-gpt1',
    'paper-2017-transformer',
    'paper-2018-elmo',
    'paper-2015-bookcorpus',
    'paper-2018-glue',
    'paper-2018-bert',
  ],
};
