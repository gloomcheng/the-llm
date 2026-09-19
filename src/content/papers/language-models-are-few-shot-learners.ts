import type { PaperRecord, SourceRecord } from '../paper-schema';

export const fewShotSources: SourceRecord[] = [
  {
    id: 'paper-2020-gpt3',
    kind: 'paper',
    title: 'Language Models are Few-Shot Learners',
    publisher: 'NeurIPS 2020 / arXiv',
    published: '2020-05-28',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/2005.14165',
    supports: [
      '提出 1750 億參數的 GPT-3，證實超大規模語言模型無須更新任何權重（ΔW = 0），僅憑提示詞中的上下文範例（In-Context Learning）即可執行多元下游任務',
      '跨越 8 個模型尺度（1.25 億至 1750 億參數）系統性評估，發現小模型難以處理的複雜任務（如三位數加減法、單字重組）在達到百億與千億規模時出現劇烈的能力湧現（Emergence）',
      '建立以高品質 Common Crawl 篩選資料為核心的 3000 億 token 預訓練語料庫，展示數據提煉對自回歸預訓練的關鍵影響',
      '在 SuperGLUE、TriviaQA、WebQuestions 等多項基準測試上展現與微調 SOTA 匹敵甚至超越的少樣本推論表現',
      '開創提示詞工程（Prompt Engineering）與無微調模型即服務（Model-as-a-Service）的全新商業與研發典範',
    ],
    limits:
      '模型仍受限於 2048 token 的上下文窗口，且身為未對齊的原始預訓練基座模型（Base Model），極易產生事實性幻覺、有害言論偏見，並缺乏精確遵循指令與誠實表達不知情的能力。',
  },
  {
    id: 'paper-2020-scaling-laws',
    kind: 'paper',
    title: 'Scaling Laws for Neural Language Models',
    publisher: 'arXiv Preprint',
    published: '2020-01-23',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/2001.08361',
    supports: [
      'GPT-3 研發的直接科學導航地圖：Jared Kaplan 等人的縮放定律讓團隊在耗資數百萬美元訓練 1750 億模型前，即精確預測其收斂損失',
      '證實自回歸語言模型的交叉熵損失跨越 6 個數量級嚴格遵循平滑冪律，給予團隊擴展參數量 116 倍的工程決心',
    ],
    limits:
      'Kaplan 定律僅預測了平均預訓練損失的平滑下降，但未能預測特定下游任務能力何時以非線性「相變」方式爆發湧現。',
  },
  {
    id: 'paper-2019-gpt2',
    kind: 'paper',
    title: 'Language Models are Unsupervised Multitask Learners',
    publisher: 'OpenAI Technical Report',
    published: '2019-02-14',
    accessed: '2026-09-18',
    url: 'https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf',
    supports: [
      'GPT-3 少樣本學習的心智前驅：首次提出「以語言模型進行零樣本多任務學習」的概念，證明提示詞可用於引導模型',
      '證明不需修改模型架構，自然語言本身即是最通用的任務輸入介面',
    ],
    limits:
      'GPT-2（1.5B）在純 Zero-shot 任務下表現依然極度脆弱，在翻譯與問答等複雜語義任務上距離實用標竿仍有巨大鴻溝。',
  },
  {
    id: 'paper-2022-chinchilla',
    kind: 'paper',
    title: 'Training Compute-Optimal Large Language Models',
    publisher: 'NeurIPS 2022 / arXiv',
    published: '2022-03-29',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/2203.15556',
    supports: [
      '對 GPT-3 資源分配邊界的歷史性反思：指出 GPT-3（175B 配 300B token）因受早期 Kaplan 定律誤導而嚴重訓練不足（Under-trained）',
      '證明若將計算資源以 1:1 等比例分配至參數與 token，只需 70B 參數（訓練 1.4 兆 token）即可在各維度擊敗 GPT-3',
    ],
    limits:
      'Chinchilla 雖然推翻了 GPT-3 的算力分配效率，但更加確立了 GPT-3 所開拓的 Transformer 自回歸擴展主線。',
  },
  {
    id: 'paper-2022-instructgpt',
    kind: 'paper',
    title: 'Training language models to follow instructions with human feedback',
    publisher: 'NeurIPS 2022 / arXiv',
    published: '2022-03-04',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/2203.02155',
    supports: [
      'GPT-3 未竟之功的直接解答：針對 GPT-3 原始模型「懂很多但不會聽指令」的核心缺陷，提出基於人類反饋的強化學習（RLHF）',
      '證實 1.3B 的 InstructGPT 輸出偏好度足以戰勝 175B 的原始 GPT-3，將生成式 AI 從「機率續寫」推向「意圖遵循」',
    ],
    limits:
      'RLHF 解決了對齊與遵循問題，但其推論基礎與少樣本常識底蘊完全依賴 GPT-3 奠定的自回歸預訓練矩陣。',
  },
];

export const fewShotPaper: PaperRecord = {
  id: 'language-models-are-few-shot-learners',
  researchStatus: 'published',
  lastChecked: '2026-09-18',
  coverageNote:
    '依據 NeurIPS 2020 論文正本、附錄實驗資料，以及 2022 Chinchilla 與 InstructGPT 等後續文獻進行交叉驗證。',
  title: 'Language Models are Few-Shot Learners',
  chineseTitle: 'GPT-3：少樣本學習與湧現能力的爆發',
  year: 2020,
  submitted: '2020-05-28',
  venue: 'NeurIPS 2020',
  pages: '1877–1901',
  arxivId: '2005.14165',
  doi: {
    value: '10.48550/arXiv.2005.14165',
    url: 'https://doi.org/10.48550/arXiv.2005.14165',
    status: 'verified',
    verificationNote: '經 arXiv 官方資料庫與 NeurIPS 2020 會議議程檢驗通過。',
    sourceId: 'paper-2020-gpt3',
  },
  authors: [
    'Tom B. Brown',
    'Benjamin Mann',
    'Nick Ryder',
    'Melanie Subbiah',
    'Jared Kaplan',
    'Prafulla Dhariwal',
    'Arvind Neelakantan',
    'Pranav Shyam',
    'Girish Sastry',
    'Amanda Askell',
    'Sandhini Agarwal',
    'Ariel Herbert-Voss',
    'Gretchen Krueger',
    'Tom Henighan',
    'Rewon Child',
    'Aditya Ramesh',
    'Daniel M. Ziegler',
    'Jeffrey Wu',
    'Clemens Winter',
    'Christopher Hesse',
    'Mark Chen',
    'Eric Sigler',
    'Mateusz Litwin',
    'Scott Gray',
    'Benjamin Chess',
    'Jack Clark',
    'Christopher Berner',
    'Sam McCandlish',
    'Alec Radford',
    'Ilya Sutskever',
    'Dario Amodei',
  ],
  authorBriefs: [
    {
      name: 'Tom B. Brown',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '第一作者，帶領 GPT-3 核心研發團隊，設計評估框架與少樣本實驗',
      verifiedContext:
        '前 Google 機器學習工程師，加入 OpenAI 後主導大模型分散式系統設計，後參與創立由大模型驅動的新創生態。',
      evidenceIds: ['paper-2020-gpt3'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/tom-brown.png',
    },
    {
      name: 'Melanie Subbiah',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同第一作者，主導龐大評估基準套件與 Common Crawl 語料去重清洗工程',
      verifiedContext:
        '哥倫比亞大學計算機科學碩士，專精自然語言處理與生成模型評估，設計了 GPT-3 橫跨數十項基準的系統性測試流程。',
      evidenceIds: ['paper-2020-gpt3'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/melanie-subbiah.png',
    },
    {
      name: 'Jared Kaplan',
      affiliationAtPublication: 'Johns Hopkins University / OpenAI',
      roleInPaper: '資深作者，理論物理學家，將縮放定律科學指引直接應用於 GPT-3 規模外推',
      verifiedContext:
        '物理學教授，確立了神經語言模型跨越數個數量級的冪律行為，後共同創立 Anthropic 並擔任首席科學家。',
      evidenceIds: ['paper-2020-scaling-laws', 'paper-2020-gpt3'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/jared-kaplan.png',
    },
    {
      name: 'Dario Amodei',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '資深通訊作者，前 OpenAI 研究副總裁，主持 GPT 系列擴展戰略與算力集群投資',
      verifiedContext:
        '普林斯頓生物物理博士，堅定推動大模型物理規模突破，奠定 GPT-3 工業級地位後，創辦 Anthropic 擔任執行長。',
      evidenceIds: ['paper-2020-gpt3'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/dario-amodei.png',
    },
  ],
  abstractSummary:
    '近年自然語言處理普遍依賴在任務專用標註集上的微調，但人類僅需少數範例或純文字說明即可執行全新語言任務。我們訓練了參數量高達 1750 億的自回歸語言模型 GPT-3，並在完全不進行梯度更新或微調（無權重修改）的條件下測試其表現。GPT-3 在少樣本（Few-shot）、單樣本（One-shot）與零樣本（Zero-shot）設定下，在多項 NLP 基準、翻譯、問答、語法糾錯以及算術運算中展現強大實力，甚至能生成人類難以分辨真偽的新聞報導。結果證實：語言模型透過純粹的擴大規模，能夠自發湧現出驚人的多任務適應力與少樣本學習特徵。',
  historicalQuestion:
    '我們能否擺脫為每個任務收集標註數據並微調模型權重的繁重枷鎖？當神經網路的物理規模擴展至千億參數時，機器是否能在完全不更新任何權重（ΔW = 0）的前提下，僅透過提示詞中的上下文範例，就學會此前從未見過的全新任務？',
  motivationClaims: [
    {
      id: 'claim-in-context-learning',
      claim:
        '大語言模型能在無須反向傳播梯度更新（ΔW = 0）的前提下，僅透過上下文範例（In-Context Learning）即時適應新任務。',
      explanation:
        '模型利用 Transformer 的注意力機制，在推論期間將輸入序列中的示範範例作為動態條件，在隱藏維度內完成任務規則的推導與模式對齊。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2020-gpt3'],
    },
    {
      id: 'claim-emergent-abilities',
      claim:
        '許多複雜推論與運算能力在中小模型上近乎不存在，但在達到 1750 億參數規模時出現了斷崖式的相變湧現（Emergence）。',
      explanation:
        '例如在三位數加法與單字重組任務中，小於 100 億參數的模型準確率接近 0%，但在 1750 億參數時性能突然躍升至 80% 以上，顯示規模化能引發量變到質變的飛躍。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2020-gpt3'],
    },
    {
      id: 'claim-prompt-as-interface',
      claim:
        '自然語言本身就是最通用的程式介面，提示工程（Prompt Engineering）正式取代專用微調成為人機互動新標準。',
      explanation:
        '不需為文字分類、翻譯、程式碼生成分別訓練專用頭部，使用者只需透過自然語言設計「指令 + 範例」，就能指揮同一個模型完成百種任務。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2020-gpt3'],
    },
  ],
  unknowns: [
    'GPT-3 論文中採用的 3000 億 token 預訓練規模，在 2022 年被 DeepMind Chinchilla 證明嚴重受限於訓練不足，若增加訓練資料至數兆 token 可獲得更高的算力效益比。',
    '上下文學習（ICL）在 Transformer 矩陣層次上的確切數學運作機理（如隱式元學習或內置梯度下降動態）在原論文中尚未給出完整的理論閉式解。',
    '身為無監督基座模型，GPT-3 缺乏明確的人類意圖對齊，導致其無法穩定拒絕危險請求，需要後續 InstructGPT 與 RLHF 進行行為修正。',
  ],
  sourceIds: [
    'paper-2020-gpt3',
    'paper-2020-scaling-laws',
    'paper-2019-gpt2',
    'paper-2022-chinchilla',
    'paper-2022-instructgpt',
  ],
};
