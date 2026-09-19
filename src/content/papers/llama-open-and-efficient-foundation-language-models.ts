import type { PaperRecord, SourceRecord } from '../paper-schema';

export const llamaSources: SourceRecord[] = [
  {
    id: 'paper-2023-llama',
    kind: 'paper',
    title: 'LLaMA: Open and Efficient Foundation Language Models',
    publisher: 'Meta AI / arXiv',
    published: '2023-02-27',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2302.13971',
    supports: [
      '證明僅使用公開可取得的資料集（Publicly Available Data）訓練 7B 至 65B 模型，完全能匹敵或超越封閉專利資料訓練的最強基座',
      '實踐「推論成本最佳化（Inference-optimal）」思維，刻意對小模型進行極致「過訓練（Over-training）」（13B 模型訓練 1.0 兆 token，65B 訓練 1.4 兆 token）',
      '實證 13B 參數的 LLaMA 在大部分學術基準測試上超越 1750 億（175B）的 GPT-3，且能在單張消費級 RTX 3090 顯示卡上運行',
      '整合現代 Transformer 三大結構最佳實踐：RMSNorm 預標準化、SwiGLU 門控激勵函數、旋轉位置編碼（RoPE）',
      '結合高效記憶體注意力運算（Rabe & Staats 2021）與活化值重算（Activation Checkpointing），在 2048 顆 A100-80GB GPU 上達成極高吞吐效率',
      '向全球學術與研究社群開源模型權重，直接引爆 Alpaca、Vicuna、llama.cpp 與開源大模型大航海時代',
    ],
    limits:
      '原始權重僅限非商業學術研究申請，且基座模型未經過指令微調與 RLHF 對齊，仍存在生成不實資訊、有毒言論或產生幻覺的風險；隨後權重洩漏至 BitTorrent，引發開源與模型安全治理的激烈辯論。',
  },
  {
    id: 'paper-2022-chinchilla',
    kind: 'paper',
    title: 'Training Compute-Optimal Large Language Models',
    publisher: 'NeurIPS 2022 / arXiv',
    published: '2022-03-29',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2203.15556',
    supports: [
      'LLaMA 核心設計哲學的直接理論來源：打破 Kaplan 參數膨脹迷思，指出數據量對大模型智力成長具有等同關鍵的決定性',
      '奠定「以海量 token 充分餵飽小模型」的學術共識',
    ],
    limits:
      'Chinchilla 的計算最佳化方程式僅考慮單次訓練算力（CapEx）的最小損失，未考慮模型部署後下游數百萬次推論累積的營運成本（OpEx）。',
  },
  {
    id: 'paper-2019-rmsnorm',
    kind: 'paper',
    title: 'Root Mean Square Normalization',
    publisher: 'NeurIPS 2019 / arXiv',
    published: '2019-10-29',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/1910.07467',
    supports: [
      'Biao Zhang 與 Rico Sennrich 提出均方根標準化（RMSNorm），捨棄 LayerNorm 的均值位移計算，僅保留均方根縮放',
      '在保持數值穩定與訓練收斂表現的同時，減少約 7% 至 64% 的標準化運算開銷，成為 LLaMA 提升訓練吞吐量的基石',
    ],
    limits:
      '假設特徵分佈的均值位移在神經網路內部表徵中非必要，在某些非 Transformer 視覺或語音架構中需謹慎評估。',
  },
  {
    id: 'paper-2020-swiglu',
    kind: 'paper',
    title: 'GLU Variants Improve Transformer',
    publisher: 'arXiv Preprint',
    published: '2020-02-12',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2002.05202',
    supports: [
      'Noam Shazeer 提出結合 Swish 激勵函數與門控線性單元（GLU）的 SwiGLU 結構',
      '相較於經典 ReLU 或 GeLU 前饋網路，SwiGLU 提供更平滑的非線性梯度流，實證上顯著降低自回歸語言模型困惑度',
    ],
    limits:
      'SwiGLU 將原本 FFN 的兩道權重矩陣增加為三道矩陣運算，必須將隱藏層維度縮減至 2/3 以維持相同的參數量與計算複雜度。',
  },
  {
    id: 'paper-2021-rope',
    kind: 'paper',
    title: 'RoFormer: Enhanced Transformer with Rotary Position Embedding',
    publisher: 'arXiv / Neurocomputing',
    published: '2021-04-20',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2104.09864',
    supports: [
      'Jianlin Su 等人提出旋轉位置編碼（Rotary Position Embedding, RoPE），以二維正交旋轉矩陣將絕對位置融入複數空間內積',
      '具備優雅的相對位置相對性、隨距離衰減的幾何性質，且天然具備外推（Length Extrapolation）至更長上下文的潛能',
    ],
    limits:
      '原始外推能力在未調整頻率基底（Base Frequency）時仍存在上下文邊界衰退，促使後續 RoPE-scaling 與 NTK-aware 內插技術的演進。',
  },
];

export const paper: PaperRecord = {
  id: 'llama-open-and-efficient-foundation-language-models',
  researchStatus: 'published',
  lastChecked: '2026-09-19',
  coverageNote: '完整涵蓋推論最佳化化過訓練哲學、RMSNorm、SwiGLU、RoPE 數學推導與開源生態衝擊。',
  title: 'LLaMA: Open and Efficient Foundation Language Models',
  chineseTitle: 'LLaMA：開源生態大爆炸的引線',
  year: 2023,
  submitted: '2023-02-27',
  venue: 'arXiv Preprint',
  arxivId: '2302.13971',
  doi: {
    value: '10.48550/arXiv.2302.13971',
    url: 'https://doi.org/10.48550/arXiv.2302.13971',
    status: 'verified',
    verificationNote: '經 arXiv 官方資料庫比對查核，Meta AI 基礎語言模型標誌性論文。',
    sourceId: 'paper-2023-llama',
  },
  authors: [
    'Hugo Touvron',
    'Thibaut Lavril',
    'Gautier Izacard',
    'Xavier Martinet',
    'Marie-Anne Lachaux',
    'Timothée Lacroix',
    'Baptiste Rozière',
    'Naman Goyal',
    'Eric Hambro',
    'Faisal Azhar',
    'Aurelien Rodriguez',
    'Armand Joulin',
    'Edouard Grave',
    'Guillaume Lample',
  ],
  authorBriefs: [
    {
      name: 'Hugo Touvron',
      affiliationAtPublication: 'Meta AI (FAIR Paris)',
      roleInPaper: '第一作者，主導 LLaMA 與 LLaMA-2 的模型架構設計、訓練調度與跨規模基準評測',
      verifiedContext:
        '索邦大學與法國國家資訊暨自動化研究院（INRIA）博士，聚焦高效電腦視覺與大規模自回歸語言模型基礎架構。',
      evidenceIds: ['paper-2023-llama'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/hugo-touvron.png',
    },
    {
      name: 'Thibaut Lavril',
      affiliationAtPublication: 'Meta AI (FAIR Paris)',
      roleInPaper: '共同第一作者，主導分散式訓練集群穩定性、百萬級數據管線工程與開源分詞系統',
      verifiedContext:
        '巴黎綜合理工學院背景，Meta AI 基礎架構工程師，負責超大規模 GPU 集群平行運算與記憶體優化。',
      evidenceIds: ['paper-2023-llama'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/thibaut-lavril.png',
    },
    {
      name: 'Gautier Izacard',
      affiliationAtPublication: 'Meta AI & ENS Paris',
      roleInPaper: '核心作者，負責預訓練語料混合配比審查、學術基準測試評估與檢索增強分析',
      verifiedContext:
        '巴黎高等師範學院（ENS）博士，在密集檢索、語料純化與多語言開放領域問答領域具備深厚造詣。',
      evidenceIds: ['paper-2023-llama'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/gautier-izacard.png',
    },
    {
      name: 'Xavier Martinet',
      affiliationAtPublication: 'Meta AI (FAIR Paris)',
      roleInPaper: '核心作者，主導 FlashAttention 整合、活化值檢查點機制與多節點模型平行通訊優化',
      verifiedContext:
        '巴黎綜合理工學院背景，長期投入大規模分散式深度學習工程、記憶體階層優化與開源系統構建。',
      evidenceIds: ['paper-2023-llama'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/xavier-martinet.png',
    },
  ],
  abstractSummary:
    '我們推出了 LLaMA 系列基礎語言模型，參數量涵蓋 7B 至 65B。不同於當時主流模型多採用專利或未公開資料訓練，我們的模型完全訓練自公開可得的數兆級資料集。透過將 13B 參數模型訓練至 1.0 兆 token、65B 模型訓練至 1.4 兆 token，我們證明了小模型在經過充分過訓練後，不僅能在大部分基準測試上全面追平甚至超越 175B 的 GPT-3，更能將前向推論成本大幅降低數倍，使其能在單張消費級顯示卡上順暢運行。我們將模型權重與架構細節向學術研究社群開放，旨在促進大語言模型研究的平民化與透明化。',
  historicalQuestion:
    '當科技巨頭們紛紛將千億大模型鎖在黑盒 API 與高昂計費的圍牆花園之後，普通學者與獨立開發者連權重都無法下載，全球 AI 研發是否注定淪為少數資本的特權遊戲？如何用最純粹的公開資料、最具性價比的小巧骨架，打破閉源壟斷，點燃全球開源社群的創新生態？',
  motivationClaims: [
    {
      id: 'claim-inference-economics',
      claim:
        '在真實商業世界中，推論累積的營運成本（OpEx）遠大於單次預訓練的資本支出（CapEx），因此訓練時應刻意追求「推論最佳化」而非單純「算力最佳化」。',
      explanation:
        'Chinchilla 給出的是給定算力下的最佳分配，但小模型在部署後每次前向傳播只需極少記憶體與計算。對 7B 和 13B 模型進行海量過訓練（超過 Chinchilla 最佳點 5 至 10 倍），能以極低代價換取終身微薄的推論延遲與伺服器成本。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2023-llama', 'paper-2022-chinchilla'],
    },
    {
      id: 'claim-public-data-sufficiency',
      claim:
        '完全依賴公開可得的無版權爭議文字（如 CommonCrawl、GitHub、Wikipedia、ArXiv 等），足以訓練出世界頂尖水準的基座模型。',
      explanation:
        'LLaMA 證明了無須依賴專利未公開的私有書籍或封閉資料庫，只要透過嚴謹的語料清洗、去重、語言過濾與格式化，公開網路數據蘊藏的智慧潛力足以匹敵任何千億封閉模型。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2023-llama'],
    },
    {
      id: 'claim-modern-architecture-trinity',
      claim:
        'RMSNorm 預標準化、SwiGLU 門控激勵函數與 RoPE 旋轉位置編碼的結合，構成現代開源大模型的黃金標準架構。',
      explanation:
        'RMSNorm 保障深層網路梯度流不爆炸；SwiGLU 提供更豐富的表示容量；RoPE 則以正交旋轉維持極佳的相對距離衰減與外推潛力。三者共同奠定了後續 Mistral、Qwen、Gemma 等幾乎所有主流開源模型的骨架。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: [
        'paper-2023-llama',
        'paper-2019-rmsnorm',
        'paper-2020-swiglu',
        'paper-2021-rope',
      ],
    },
  ],
  unknowns: [
    'Meta AI 內部對於學術權重外洩至 4chan 與 BitTorrent 的完整應對記錄與法務評估細節。',
    '65B 模型訓練末期各項子資料集去重權重調整與特定損失尖峰（Loss Spikes）的現場排障日誌。',
  ],
  sourceIds: [
    'paper-2023-llama',
    'paper-2022-chinchilla',
    'paper-2019-rmsnorm',
    'paper-2020-swiglu',
    'paper-2021-rope',
  ],
};
