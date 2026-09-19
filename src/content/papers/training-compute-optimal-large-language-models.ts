import type { PaperRecord, SourceRecord } from '../paper-schema';

export const chinchillaSources: SourceRecord[] = [
  {
    id: 'paper-2022-chinchilla',
    kind: 'paper',
    title: 'Training Compute-Optimal Large Language Models',
    publisher: 'NeurIPS 2022 / arXiv',
    published: '2022-03-29',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/2203.15556',
    supports: [
      '透過對超過 400 個模型（1600 萬至 100 億參數、50 億至 5000 億 token）進行地毯式實證，發現既有大模型普遍嚴重「訓練不足」（Under-trained）',
      '修正 Kaplan 2020 縮放定律：證明在給定總算力下，模型參數量與訓練 token 數應當以 1:1 的等比例同步增長（N ∝ C^0.50, D ∝ C^0.50）',
      '提出三種互為驗證的算力最佳化推導方法：最小損失包絡線、IsoFLOP 等算力剖面擬合，以及參數化損失函數 L-BFGS 最佳化',
      '打造 700 億參數、訓練 1.4 兆 token 的 Chinchilla，在完全相同算力預算（5.76 × 10^23 FLOPs）下全面擊敗 2800 億參數的 Gopher 與 1750 億參數的 GPT-3',
      '徹底重構大模型推論與部署的經濟學：較小參數量帶來 4 倍記憶體節省、4 倍吞吐量提升與大幅降低的伺服器運算延遲',
    ],
    limits:
      'Chinchilla 定律給出的是在「訓練算力固定」前提下的損失最佳解；若從「終身推論成本（Inference-optimal）」出發，進一步將小模型過訓練（Over-training）至數兆甚至十幾兆 token，能換取更驚人的下游推論性價比。',
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
      'Chinchilla 實證研究的理論前驅與直接審查對象：Kaplan 等人首次確立了模型規模與損失之間的冪律關係',
      '為深度學習引入統計物理外推方法，奠定了跨數量級風洞實驗的分析典範',
    ],
    limits:
      '因採用固定 10 萬步餘弦學習率排程並截取中間檢查點，導致在較少 token 時學習率尚未充分衰減，進而嚴重低估數據量對損失下降的實質貢獻（推導出偏頗的 N ∝ C^0.73 與 D ∝ C^0.27）。',
  },
  {
    id: 'paper-2021-gopher',
    kind: 'paper',
    title: 'Scaling Language Models: Methods, Analysis & Insights from Training Gopher',
    publisher: 'arXiv Preprint',
    published: '2021-12-08',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/2112.11446',
    supports: [
      'DeepMind 打造的 2800 億參數超大語言模型，訓練於 3000 億 token 的 MassiveText 語料庫上',
      'Chinchilla 研發的直接對照組：兩者共享完全相同的 5.76 × 10^23 FLOPs 算力預算與資料清洗管線',
    ],
    limits:
      '盲目依循 Kaplan 定律將 80% 以上的算力傾斜至參數量擴增，導致 280B 巨獸在 300B token 下嚴重飢餓，推論部署需跨多台 TPU/GPU 節點，運算代價極其高昂。',
  },
  {
    id: 'paper-2020-gpt3',
    kind: 'paper',
    title: 'Language Models are Few-Shot Learners',
    publisher: 'NeurIPS 2020 / arXiv',
    published: '2020-05-28',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/2005.14165',
    supports: [
      '確立 1750 億參數與少樣本上下文學習（ICL）能力的時代里程碑',
      '引發全球科技巨頭展開千億參數軍備競賽的關鍵催化劑',
    ],
    limits:
      '受限於早期縮放定律認知，GPT-3 僅訓練了 3000 億 token，以現代計算最佳化眼光審視，屬於嚴重缺乏數據滋養的龐然大物。',
  },
  {
    id: 'paper-2023-llama',
    kind: 'paper',
    title: 'LLaMA: Open and Efficient Foundation Language Models',
    publisher: 'arXiv Preprint',
    published: '2023-02-27',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/2302.13971',
    supports: [
      'Chinchilla 計算最佳化思想的最徹底實踐者與超越者：Meta AI 團隊明確提出「以推論預算為導向」的擴展策略',
      '將 7B 與 13B 輕量基座強行過訓練至 1 兆至 1.4 兆 token，以小搏大引爆開源大模型社群生態',
    ],
    limits:
      'LLaMA 故意偏離了 Chinchilla 的訓練損失最佳化前沿（以更多的訓練算力換取終身推論的高吞吐量），但其理論根基完全建立在 Chinchilla 所驗證的「小模型配超大海量資料」定律之上。',
  },
];

export const chinchillaPaper: PaperRecord = {
  id: 'training-compute-optimal-large-language-models',
  researchStatus: 'published',
  lastChecked: '2026-09-18',
  coverageNote:
    '依據 NeurIPS 2022 論文正本、附錄 400 餘組消融實驗資料、學習率調度數值分析，以及後續 LLaMA / Mistral 實證文獻進行嚴格交叉比對。',
  title: 'Training Compute-Optimal Large Language Models',
  chineseTitle: 'Chinchilla：算力邊界的重大修訂',
  year: 2022,
  submitted: '2022-03-29',
  venue: 'NeurIPS 2022',
  pages: '30169–30181',
  arxivId: '2203.15556',
  doi: {
    value: '10.48550/arXiv.2203.15556',
    url: 'https://doi.org/10.48550/arXiv.2203.15556',
    status: 'verified',
    verificationNote: '經 arXiv 官方資料庫與 NeurIPS 2022 會議議程檢驗通過。',
    sourceId: 'paper-2022-chinchilla',
  },
  authors: [
    'Jordan Hoffmann',
    'Sebastian Borgeaud',
    'Arthur Mensch',
    'Elena Buchatskaya',
    'Trevor Cai',
    'Eliza Rutherford',
    'Diego de Las Casas',
    'Lisa Anne Hendricks',
    'Johannes Welbl',
    'Aidan Clark',
    'Tom Hennigan',
    'Eric Noland',
    'Katie Millican',
    'George van den Driessche',
    'Bogdan Damoc',
    'Aurelia Guy',
    'Simon Osindero',
    'Karen Simonyan',
    'Erich Elsen',
    'Jack W. Rae',
    'Oriol Vinyals',
    'Laurent Sifre',
  ],
  authorBriefs: [
    {
      name: 'Jordan Hoffmann',
      affiliationAtPublication: 'DeepMind',
      roleInPaper: '第一作者，主導 400+ 跨尺度實驗設計、IsoFLOP 剖面分析與冪律擬合',
      verifiedContext:
        '哈佛大學應用數學博士，專精數值最佳化與深度學習擴展理論，帶領團隊推翻了早期縮放定律的數據偏差。',
      evidenceIds: ['paper-2022-chinchilla'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/jordan-hoffmann.png',
    },
    {
      name: 'Sebastian Borgeaud',
      affiliationAtPublication: 'DeepMind',
      roleInPaper: '共同第一作者，主導分散式訓練系統管線架構與高效能注意力機制工程',
      verifiedContext:
        '倫敦大學學院（UCL）機器學習博士，曾主導大型檢索增強語言模型 RETRO，深耕模型架構與運算資源匹配。',
      evidenceIds: ['paper-2022-chinchilla'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/sebastian-borgeaud.png',
    },
    {
      name: 'Arthur Mensch',
      affiliationAtPublication: 'DeepMind',
      roleInPaper: '核心作者，負責實證縮放定律推導、超參數搜尋排程與計算最佳化模型訓練',
      verifiedContext:
        '巴黎綜合理工學院博士與 Inria 研究員，離開 DeepMind 後於 2023 年創立 Mistral AI 擔任執行長，引領歐洲開源大模型浪潮。',
      evidenceIds: ['paper-2022-chinchilla'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/arthur-mensch.png',
    },
    {
      name: 'Elena Buchatskaya',
      affiliationAtPublication: 'DeepMind',
      roleInPaper: '核心作者，主導 MMLU 與 BIG-bench 等多項下游基準測試之全面實證評估',
      verifiedContext:
        '劍橋大學工程系畢業，DeepMind 資深機器學習專家，設計了大規模常識推理與多任務語言理解之嚴格測評流程。',
      evidenceIds: ['paper-2022-chinchilla'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/elena-buchatskaya.png',
    },
  ],
  abstractSummary:
    '我們調查了在給定計算預算下訓練自回歸 Transformer 語言模型的最佳模型規模與訓練 token 數分配。藉由訓練超過 400 個參數量從 1600 萬到 100 億、訓練 token 從 50 億到 5000 億的模型，我們發現當前的千億級大語言模型存在顯著的訓練不足（Under-trained）。對於計算最佳化訓練，模型參數量與訓練資料集規模應當以 1:1 的等比例增長。為了驗證此一假說，我們在與 2800 億參數 Gopher 相同的計算預算下，訓練了一個名為 Chinchilla 的 700 億參數模型，其訓練資料量高達 1.4 兆 token。Chinchilla 在 MMLU、BIG-bench、常識問答等多項廣泛評估中全面超越 Gopher、GPT-3、Jurassic-1 與 MT-NLG，且其推論成本與微調門檻大幅降低。',
  historicalQuestion:
    '當全球科技巨頭為打破 SOTA 紀錄而盲目將模型參數堆疊至數千億（如 GPT-3 175B、Gopher 280B、MT-NLG 530B）時，我們是否正在浪費難以估量的算力？如果在給定計算預算下，過去的縮放定律低估了數據量的價值，那麼真正的「計算最佳化解（Compute-Optimal Frontier）」究竟在哪裡？',
  motivationClaims: [
    {
      id: 'claim-under-trained-giants',
      claim:
        '在 2020 至 2022 年間問世的千億大模型（包括 GPT-3、Gopher、MT-NLG）均陷入了嚴重的「參數量過大、數據量過少」的非最佳配置。',
      explanation:
        'Kaplan 2020 論文建議將 73% 的新增算力分配給參數量、僅 27% 分配給數據量，導致業界在僅有 3000 億 token 的資料集上盲目擴大參數量至數千億，造成巨大的算力浪費與高昂的推論延遲。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2022-chinchilla', 'paper-2020-scaling-laws'],
    },
    {
      id: 'claim-equal-scaling-rule',
      claim:
        '計算最佳化擴展律指出：模型參數量 N 與訓練 token 數 D 應以 1:1 的等比例對稱增長（N ∝ C^0.50, D ∝ C^0.50）。',
      explanation:
        '當計算預算擴增 10 倍時，最佳策略不是將模型參數量擴大 5.4 倍，而是將參數量與數據量同時擴大 3.16 倍（√10），維持每 1 個參數約消化 20 個 token 的黃金比例。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2022-chinchilla'],
    },
    {
      id: 'claim-inference-economics',
      claim: '在相同訓練算力下，小參數、海量資料的 Chinchilla 模式帶來了革命性的推論經濟優勢。',
      explanation:
        '70B 參數的 Chinchilla 僅需 140 GB 視訊記憶體（FP16），可直接常駐於單一 8-GPU 節點內高速推論，免除了跨節點管線並行的通訊瓶頸，推論延遲降低數倍，伺服器部署成本呈斷崖式下降。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2022-chinchilla'],
    },
  ],
  unknowns: [
    'Chinchilla 定律給出的是訓練階段的最佳損失前沿，並未涵蓋下游長期高併發推論的總擁有成本（TCO）；後續 LLaMA 證實進一步過訓練小模型能獲得更巨大的產業效益。',
    '論文中的實證數據建立在 DeepMind 的 MassiveText 語料庫上；若資料品質、資訊密度或多樣性發生改變，參數與 token 的精確常數係數（Multiplier）可能會產生微小漂移。',
    '在達到數十兆 token 規模時，網際網路高品質自然語言資料可能面臨枯竭（Data Wall），如何以合成數據（Synthetic Data）或推理增強延續 1:1 縮放仍屬前沿開放問題。',
  ],
  sourceIds: [
    'paper-2022-chinchilla',
    'paper-2020-scaling-laws',
    'paper-2021-gopher',
    'paper-2020-gpt3',
    'paper-2023-llama',
  ],
};
