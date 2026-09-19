import type { PaperRecord, SourceRecord } from '../paper-schema';

export const gpt2Sources: SourceRecord[] = [
  {
    id: 'paper-2019-gpt2',
    kind: 'paper',
    title: 'Language Models are Unsupervised Multitask Learners',
    publisher: 'OpenAI Technical Report',
    published: '2019-02-14',
    accessed: '2026-09-17',
    url: 'https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf',
    supports: [
      '提出無監督多任務學習核心假設：語言模型在足夠多樣的龐大文本上預測下一個字，自然會學會跨任務條件機率 P(output | input, task)',
      '展示零樣本遷移（Zero-shot Task Transfer）能力：完全不進行下游任務微調，僅靠輸入自然語言提示詞（Prompt），模型即可直接執行閱讀理解、問答、摘要與翻譯',
      '將參數量規模擴展至 15 億（1.5B，GPT-1 的 10 倍以上），並構建 40GB 高品質網路文本資料集 WebText（800 萬篇 Reddit 高讚連結文檔）',
      '改進 Transformer 架構穩定性：改用 Pre-Layer Normalization（Pre-LN）、殘差層權重初始化縮放 1/√(2N)，並引入 Byte-level BPE 分詞器徹底根除未收錄詞（OOV）（<unk>）',
      '在 CoQA 閱讀理解上取得 55 F1，在零樣本條件下匹敵或超越多個有監督基準模型，並展現震撼業界的長篇連貫文字生成品質',
    ],
    limits:
      '奠定 Prompt Engineering 與大模型零樣本學習之先河。但其 1.5B 規模在複雜推理與專業算術上依然吃力，且引發了史上首次「因生成偽造訊息風險過高而延遲開源」的爭議。',
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
      'GPT-2 的直接前身：確立了自回歸預訓練 Transformer Decoder 骨幹架構',
      'GPT-1 依賴「兩階段典範」（無監督預訓練 + 有監督微調），而 GPT-2 邁出關鍵一步：試圖徹底廢除第二階段的下游微調，實現通用零樣本學習',
    ],
    limits:
      'GPT-1 僅有 1.17 億參數與 512 上下文視窗，且每個下游任務都需要重新收集標註數據訓練專屬線性層。',
  },
  {
    id: 'paper-2018-bert',
    kind: 'paper',
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    publisher: 'NAACL 2019 / arXiv',
    published: '2018-10-11',
    accessed: '2026-09-17',
    url: 'https://arxiv.org/abs/1810.04805',
    supports: [
      'GPT-2 誕生的直接歷史競爭背景：BERT 在微調基準測試（GLUE / SQuAD）上對單向模型的全面壓制',
      '驅使 OpenAI 團隊放棄在個別有監督評測上與 BERT 糾纏微調細節，轉而走向以 10 倍參數規模探索「不需要微調的通用生成超集」',
    ],
    limits:
      'BERT 專精於判別式微調特徵提取，但雙向克漏字結構無法自主生成連貫長文；GPT-2 堅定守住單向自回歸，證實生成路線的通用擴展性。',
  },
  {
    id: 'paper-2016-bpe',
    kind: 'paper',
    title: 'Neural Machine Translation of Rare Words with Subword Units',
    publisher: 'ACL 2016 / arXiv',
    published: '2015-08-31',
    accessed: '2026-09-17',
    url: 'https://arxiv.org/abs/1508.07909',
    supports: [
      '字詞切分（Subword Tokenization）與 Byte-Pair Encoding（BPE）的經典演算法起源',
      'GPT-2 將其演進為 Byte-level BPE：以原始字節（Byte）為基本單元進行合併，構建 50,257 詞表，可在無須任何未知符號（<unk>）的情況下編碼任意 Unicode 文本',
    ],
    limits:
      '原始 BPE 容易跨越字元類別（例如將字母與標點合併）產生次優字詞片段；GPT-2 加入了規則限制以維持語義清晰。',
  },
  {
    id: 'paper-2018-coqa',
    kind: 'paper',
    title: 'CoQA: A Conversational Question Answering Challenge',
    publisher: 'TACL 2019 / arXiv',
    published: '2018-08-21',
    accessed: '2026-09-17',
    url: 'https://arxiv.org/abs/1808.07042',
    supports: [
      '對話式多輪問答資料集，被 GPT-2 作為檢驗 Zero-shot 閱讀理解能力的黃金基準',
      'GPT-2 在不使用該資料集 127,000 個問答訓練樣本的情況下，直接以閱讀文本與問答提示達到 55 F1 分數',
    ],
    limits:
      '傳統專用問答模型依然在微調下高於此分數（當時 SOTA 約 80+），但 GPT-2 證明了無需標註數據即可獲得實用等級理解的驚人潛力。',
  },
  {
    id: 'openai-2019-release',
    kind: 'institutional-article',
    title: 'Better Language Models and Their Implications',
    publisher: 'OpenAI Blog',
    published: '2019-02-14',
    accessed: '2026-09-17',
    url: 'https://openai.com/index/better-language-models/',
    supports: [
      'OpenAI 官方發布聲明：首度提出「分階段漸進式發布（Staged Release）」策略，理由為模型可能被用於惡意生成虛假新聞、釣魚攻擊或詐騙',
      '公開震驚全球的「安地斯山脈獨角獸（Ovid’s Unicorn）」合成新聞長文樣例，引發全球媒體與學術界關於 AI 安全性與開源倫理的激烈辯論',
    ],
    limits:
      '當時引發社群關於 OpenAI 是否藉由「危險行銷」進行公關炒作的質疑；但客觀上開啟了今日大型語言模型紅隊演練（Red-teaming）與濫用防護之先河。',
  },
];

export const gpt2Paper: PaperRecord = {
  id: 'language-models-are-unsupervised-multitask-learners',
  researchStatus: 'published',
  lastChecked: '2026-09-17',
  coverageNote:
    '完整涵蓋多任務條件機率、Byte-level BPE、Pre-LN 架構精修、WebText 語料庫、零樣本提示工程與分階段發布爭議。',
  title: 'Language Models are Unsupervised Multitask Learners',
  chineseTitle: 'GPT-2：非監督多任務學習與提示詞的萌芽',
  year: 2019,
  submitted: '2019-02-14',
  venue: 'OpenAI Technical Report',
  arxivId: 'not-on-arxiv',
  doi: {
    value: 'openai-report-20190214',
    url: 'https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf',
    status: 'secondary-catalogue',
    verificationNote: 'OpenAI 官方技術報告，直接託管於官方 CDN 伺服器',
    sourceId: 'paper-2019-gpt2',
  },
  authors: [
    'Alec Radford',
    'Jeffrey Wu',
    'Rewon Child',
    'David Luan',
    'Dario Amodei',
    'Ilya Sutskever',
  ],
  authorBriefs: [
    {
      name: 'Alec Radford',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '一作，GPT 系列核心設計者與架構師',
      verifiedContext:
        '主導 GPT-1、GPT-2、GPT-3 與 CLIP 的核心實驗，堅持以大規模無監督自回歸作為通用智慧的基石。',
      evidenceIds: ['paper-2019-gpt2'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/alec-radford.png',
    },
    {
      name: 'Ilya Sutskever',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同創辦人兼首席科學家，戰略方向制定者',
      verifiedContext:
        '在 BERT 雙向霸權威脅下，堅定支持將自回歸解碼器擴展至 15 億參數，堅信「預測下一個詞即是理解世界」。',
      evidenceIds: ['paper-2019-gpt2'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/ilya-sutskever.png',
    },
    {
      name: 'Dario Amodei',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: 'AI 安全研究主管，推動分階段發布政策',
      verifiedContext: '主導對 GPT-2 生成文字被濫用之風險評估，後創辦 Anthropic。',
      evidenceIds: ['openai-2019-release'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/dario-amodei.png',
    },
    {
      name: 'Jeffrey Wu',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '核心工程師，負責數據工程與零樣本評測管道',
      verifiedContext: '實現 CoQA、LAMBADA 等多任務評測腳本與 WebText 爬取去重工程。',
      evidenceIds: ['paper-2019-gpt2'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/jeffrey-wu.png',
    },
  ],
  abstractSummary:
    'QA、機器翻譯、閱讀理解與摘要等自然語言處理任務，向來依賴在特定任務資料集上進行有監督微調。本研究證明：當語言模型在包含數百萬網頁文檔的全新資料集 WebText 上訓練時，無需任何明確的參數微調，即可學會執行多種任務。當模型條件設定於文檔與提問時，在 CoQA 閱讀理解基準上獲得 55 F1，達到甚至超越三種專用有監督基準的表現。模型參數量對於零樣本任務轉移的成功至關重要，容量擴展可使跨任務表現呈現穩定的對數線性提升。這項 15 億參數的模型 GPT-2 展現出極富連貫性的文字生成能力，同時首次引發了關於強大生成模型潛在惡意用途與漸進式發布的廣泛關注。',
  historicalQuestion:
    '既然每個任務都要單獨收集標註數據微調依然太昂貴且狭隘，一個只被訓練「預測下一個字」的神經網路，能否在完全不改動任何參數的情況下，僅憑輸入一兩句「提示詞」，就通吃閱讀理解、翻譯、問答與寫作？',
  motivationClaims: [
    {
      id: 'claim-multitask-conditioning',
      claim:
        '自然語言具有天然的任務封裝能力，多任務學習可在單純的自回歸語言模型中以條件機率 P(output | input, task) 自然實現。',
      explanation:
        '人類可以用文字下達任何指令，因此只要在輸入前加上「translate to french」或「TL;DR:」，模型便能在同一套參數下執行多種任務。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2019-gpt2'],
    },
    {
      id: 'claim-zero-shot-scaling',
      claim: '模型容量是零樣本泛化能力的關鍵門檻，性能隨參數對數線性提升。',
      explanation:
        '在 1.17 億參數時零樣本表現極為微弱，但拉大到 15 億參數時，各項任務的表現跨越了實用臨界點，預示了日後 Scaling Laws 的物理規律。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2019-gpt2'],
    },
  ],
  unknowns: [
    'OpenAI 未公開 WebText 的完整原始文字語料，僅釋出用於構建其爬取清單的 Reddit 網址子集。',
    'GPT-2 完整版 1.5B 的確切訓練總 GPU 時數未在報告中給出精確硬體規格記錄。',
  ],
  sourceIds: [
    'paper-2019-gpt2',
    'paper-2018-gpt1',
    'paper-2018-bert',
    'paper-2016-bpe',
    'paper-2018-coqa',
    'openai-2019-release',
  ],
};
