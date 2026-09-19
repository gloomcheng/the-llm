import type { PaperRecord, SourceRecord } from '../paper-schema';
import type { TimelineEpoch } from '../../components/EvidenceList.astro';

export const clipSources: SourceRecord[] = [
  {
    id: 'paper-2021-clip',
    kind: 'paper',
    title: 'Learning Transferable Visual Models From Natural Language Supervision',
    publisher: 'ICML 2021 / arXiv:2103.00020',
    published: '2021-02-26',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2103.00020',
    supports: [
      '提出對比語言-影像預訓練（CLIP，Contrastive Language-Image Pre-training），自網際網路抓取 4 億對圖文資料（WIT, WebImageText）進行雙塔對比學習',
      '打破 ImageNet 1,000 類固定封閉集合語意孤島，將文字與影像特徵映射至同一個 L2 正規化之超球體共用嵌入空間',
      '以極簡的對稱 InfoNCE 損失函數（Symmetric Cross-Entropy）與可學習溫度參數 τ，在 N × N 批次矩陣上最大化正樣本對餘弦相似度、最小化負樣本對相似度',
      '實現零樣本分類（Zero-shot Classification）：將文字編碼器作為動態分類器權重生成器，無需下游任務微調即可在超過 30 個不同視覺基準上展現強大競爭力',
      '揭示強健性分水嶺：相較於在 ImageNet 監督訓練之 ResNet-50，CLIP 零樣本模型在 ImageNet-V2、ImageNet-R、ImageNet-A 與 Sketch 等自然分佈漂移資料集上展現出顯著更優的強健性',
    ],
    limits:
      '對比學習天生存在細粒度屬性綁定缺陷（Bag-of-words 效應），難以精確區分空間相對位置、物體數量或複雜邏輯關係（如「紅色的球在藍色方塊左邊」）。零樣本遷移在密集像素級語意分割或精確幾何深度估計任務上表現較弱。此外，網路爬取資料包含廣泛的社會偏見與刻板印象。',
  },
  {
    id: 'paper-2020-vit',
    kind: 'paper',
    title: 'An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale',
    publisher: 'ICLR 2021 / arXiv:2010.11929',
    published: '2020-10-22',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2010.11929',
    supports: [
      '為 CLIP 提供了最高效的視覺主幹網路（ViT-B/32, ViT-B/16, ViT-L/14），相較於傳統 ResNet 在相同算力下獲得更高吞吐量與特徵表徵品質',
      '證明純 Transformer 能作為通用骨幹，使文字塔與影像塔能在底層計算結構上實現完全的對稱性與協同',
    ],
    limits: '專注於監督式單模態圖像分類；未探索如何利用豐富的自然語言監督信號對齊跨模態語意空間。',
  },
  {
    id: 'paper-2018-cpc',
    kind: 'paper',
    title: 'Representation Learning with Contrastive Predictive Coding',
    publisher: 'arXiv:1807.03748',
    published: '2018-07-10',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/1807.03748',
    supports: [
      '提出 InfoNCE 損失函數，從互資訊（Mutual Information）最大化之數學視角奠定了現代自監督對比學習的理論基石',
      '為 CLIP 的對稱交叉熵雙向對比學習提供了理論上界保證',
    ],
    limits: '原始實驗專注於時間序列語音、圖像局部補丁與文字預測，尚未擴展至十億級網路圖文對齊。',
  },
  {
    id: 'paper-2020-simclr',
    kind: 'paper',
    title: 'A Simple Framework for Contrastive Learning of Visual Representations',
    publisher: 'ICML 2020 / arXiv:2002.05709',
    published: '2020-02-13',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2002.05709',
    supports: [
      '揭示對比學習中超大批次（Batch Size）與合適溫度參數（Temperature τ）對防止特徵崩潰（Representation Collapse）與提升表徵品質的關鍵作用',
      '啟發了 CLIP 採用超大批次（32,768 個圖文對）與 GPU 跨卡對比矩陣聚合的工程架構',
    ],
    limits:
      '依賴單一圖像經由人為強烈數據增強（旋轉、色彩抖動、裁剪）產生正樣本對，本質仍是單模態視覺表徵學習。',
  },
  {
    id: 'paper-2022-dalle2',
    kind: 'paper',
    title: 'Hierarchical Text-Conditional Image Synthesis with CLIP Latents',
    publisher: 'arXiv:2204.06125',
    published: '2022-04-13',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2204.06125',
    supports: [
      'DALL-E 2 (unCLIP)：利用 CLIP 影像嵌入作為擴散模型（Diffusion Model）的先驗引導條件，實現高保真文字生圖',
      '確立了 CLIP 作為現代文字生圖與多模態生成系統之核心「語意羅盤」地位',
    ],
    limits:
      '依賴兩階段生成架構（Prior + Decoder），生成流程計算開銷較大，且繼承了 CLIP 的細粒度空間綁定缺陷。',
  },
  {
    id: 'paper-2023-llava',
    kind: 'paper',
    title: 'Visual Instruction Tuning',
    publisher: 'NeurIPS 2023 / arXiv:2304.08485',
    published: '2023-04-17',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2304.08485',
    supports: [
      '證明以凍結的 CLIP-ViT-L/14 作為視覺編碼器，僅需透過一個簡單的線性投影層即可將圖像特徵無縫接入開源大型語言模型（Vicuna / LLaMA）',
      '奠定現代多模態大語言模型（MLLM）以 CLIP 作為視覺感官輸入的標準架構典範',
    ],
    limits:
      '受限於 CLIP 視覺 Token 的解析度上限與離散對齊缺陷，在極細微物體辨識與多頁文件閱讀上表現受限。',
  },
];

export const clipTimelineEpochs: TimelineEpoch[] = [
  {
    id: 'epoch-2012-closed-set',
    year: '2012–2020',
    epochNumber: '01',
    title: '封閉標籤的語意孤島：ImageNet 1K 與專用分類器',
    subtitle: 'THE CLOSED-SET SEMANTIC ISLAND MONOPOLY',
    summary:
      '自 AlexNet 引爆深度學習革命以來，電腦視覺長期被封閉集合監督式學習牢牢統治。分類器輸出維度被固定為 ImageNet 的 1,000 個離散整數類別，無法理解類別之間的語意拓撲關聯，更無法處理任何未見過的開放詞彙描述。',
    sources: [
      {
        refCode: 'S01',
        source: clipSources.find((s) => s.id === 'paper-2021-clip')!,
        role: '封閉集合痛點回顧',
        takeaway:
          '指陳傳統監督式視覺模型將自然語言壓縮為 1-of-K 標籤，嚴重切斷了視覺與人類廣闊語言世界的語意聯繫。',
      },
    ],
    navTitle: '2012–2020',
  },
  {
    id: 'epoch-2018-contrastive-prelude',
    year: '2018–2020',
    epochNumber: '02',
    title: '自監督與對比學習前奏：從 CPC 到 SimCLR',
    subtitle: 'THE PRELUDE OF CONTRASTIVE REPRESENTATION LEARNING',
    summary:
      '學界逐漸意識到標註數據的昂貴瓶頸，對比學習（Contrastive Learning）強勢崛起。從 DeepMind 提出 InfoNCE 互資訊最大化，到 Google 透過 SimCLR 驗證超大批次與溫度參數的表徵威力，自監督特徵對齊的數學引擎已臻成熟。',
    sources: [
      {
        refCode: 'S02',
        source: clipSources.find((s) => s.id === 'paper-2018-cpc')!,
        role: 'InfoNCE 理論奠基',
        takeaway: '以互資訊下界推導出對比交叉熵損失，為跨模態表徵學習提供堅實的數學理論支撐。',
      },
      {
        refCode: 'S03',
        source: clipSources.find((s) => s.id === 'paper-2020-simclr')!,
        role: '超大批次實證經驗',
        takeaway:
          '證明對比學習依賴大量負樣本與精確溫度係數調節，為 CLIP 萬級批次分散式訓練提供重要工程借鑑。',
      },
      {
        refCode: 'S04',
        source: clipSources.find((s) => s.id === 'paper-2020-vit')!,
        role: '純視覺骨幹革新',
        takeaway:
          'ViT 廢黜卷積，以純 Transformer 處理影像圖塊，為 CLIP 提供了高吞吐量的視覺對稱雙塔。',
      },
    ],
    navTitle: '2018–2020',
  },
  {
    id: 'epoch-2021-clip-alignment',
    year: '2021',
    epochNumber: '03',
    title: 'CLIP 橫空出世：4 億圖文對齊，文字與視覺共享同一套世界座標',
    subtitle: 'THE CLIP REVOLUTION: CONTRASTIVE LANGUAGE-IMAGE ALIGNMENT',
    summary:
      'OpenAI 發表 CLIP，爬取網路 4 億對自然圖文資料，以極簡的對稱 InfoNCE 雙塔架構將文字與影像投影至同一個高維超球體向量空間。模型無需任何微調即可直接以自然語言進行零樣本分類，且在自然分佈漂移下展現壓倒性強健性。',
    sources: [
      {
        refCode: 'S05',
        source: clipSources.find((s) => s.id === 'paper-2021-clip')!,
        role: '核心革命成果',
        takeaway:
          '開創開放詞彙視覺表徵學習典範，將文字編碼器化為動態分類器權重生成器，零樣本性能直逼監督式 ResNet-50。',
      },
    ],
    navTitle: '2021',
  },
  {
    id: 'epoch-2022-multimodal-odyssey',
    year: '2022–至今',
    epochNumber: '04',
    title: '多模態大航海：從 DALL-E 2、Stable Diffusion 到 LLaVA 的視覺基石',
    subtitle: 'THE MULTIMODAL ODYSSEY: FROM DIFFUSION TO MLLMs',
    summary:
      'CLIP 建立的跨模態語意座標系迅速成為整個 AI 領域的通用語意燈塔。從擴散生圖模型（DALL-E 2、Stable Diffusion）以 CLIP 向量導航噪點，到多模態大語言模型（LLaVA）以 CLIP ViT 作為視覺眼睛，CLIP 奠定了現代多模態 AI 的底層大一統。',
    sources: [
      {
        refCode: 'S06',
        source: clipSources.find((s) => s.id === 'paper-2022-dalle2')!,
        role: '文字生圖語意羅盤',
        takeaway: '將 CLIP 影像嵌入作為生成先驗，引爆 2022 年擴散模型高保真圖像生成革命。',
      },
      {
        refCode: 'S07',
        source: clipSources.find((s) => s.id === 'paper-2023-llava')!,
        role: '多模態大模型感官起點',
        takeaway: '以凍結的 CLIP 視覺編碼器串接 LLM，確立開源多模態視覺指令微調的標準架構。',
      },
    ],
    navTitle: '2022–至今',
  },
];

export const paper: PaperRecord = {
  id: 'learning-transferable-visual-models-from-natural-language-supervision',
  researchStatus: 'published',
  lastChecked: '2026-09-19',
  coverageNote:
    '完整涵蓋 ImageNet 封閉標籤瓶頸、雙塔對比學習架構、InfoNCE 對稱交叉熵損失推導、零樣本動態分類器幾何本質與自然分佈漂移強健性分水嶺。',
  title: 'Learning Transferable Visual Models From Natural Language Supervision',
  chineseTitle: 'CLIP：文字與影像共享同一套世界座標',
  year: 2021,
  submitted: '2021-02-26',
  venue: 'ICML 2021',
  pages: '8748-8763',
  arxivId: '2103.00020',
  doi: {
    value: '10.48550/arXiv.2103.00020',
    url: 'https://doi.org/10.48550/arXiv.2103.00020',
    status: 'verified',
    verificationNote: '經 arXiv 與 ICML 2021 官方紀錄查核確認',
    sourceId: 'paper-2021-clip',
  },
  authors: [
    'Alec Radford',
    'Jong Wook Kim',
    'Chris Hallacy',
    'Aditya Ramesh',
    'Gabriel Goh',
    'Sandhini Agarwal',
    'Girish Sastry',
    'Amanda Askell',
    'Pamela Mishkin',
    'Jack Clark',
    'Gretchen Krueger',
    'Ilya Sutskever',
  ],
  authorBriefs: [
    {
      name: 'Alec Radford',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '第一作者 / 專案負責人與架構設計',
      portraitUrl: '/images/authors/alec-radford.png',
      verifiedContext:
        '主導 CLIP 研究方向與雙塔對比架構設計。此前為 GPT-1 與 GPT-2 之第一作者，將自監督預訓練思維成功從純文字擴展至跨模態圖文對齊。',
      evidenceIds: ['paper-2021-clip'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Jong Wook Kim',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同核心作者 / 視覺模型架構與大規模訓練',
      verifiedContext:
        'OpenAI 核心研究員，主導視覺主幹網路（ResNet 與 ViT）在大規模圖文資料集上的分散式訓練工程，後續主導 Whisper 語音模型研發。',
      evidenceIds: ['paper-2021-clip'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Chris Hallacy',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同核心作者 / 4 億圖文資料集構建與基礎設施',
      verifiedContext:
        '主導 WebImageText (WIT) 4 億圖文對資料庫之爬取、清洗、過濾與超大規模分散式資料管線開發。',
      evidenceIds: ['paper-2021-clip'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Aditya Ramesh',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同核心作者 / 多模態生成與對齊連結',
      verifiedContext:
        'OpenAI 視覺團隊負責人，主導 DALL-E 與 DALL-E 2 (unCLIP) 研發，深度參與 CLIP 在跨模態特徵幾何上的設計與驗證。',
      evidenceIds: ['paper-2021-clip', 'paper-2022-dalle2'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Gabriel Goh',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同核心作者 / 多模態神經元與可解釋性分析',
      verifiedContext:
        '深入探討 CLIP 雙塔在高維空間中的表徵機制，發現跨模態共享的神經元（Multimodal Neurons），揭示模型抽象語意概念之本質。',
      evidenceIds: ['paper-2021-clip'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Ilya Sutskever',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '通訊作者 / OpenAI 聯合創始人暨首席科學家',
      portraitUrl: '/images/authors/ilya-sutskever.png',
      verifiedContext:
        '奠定 OpenAI 追求超大規模自監督與對比學習擴展之戰略方向，指導整體研究架構，推動跨模態大一統目標。',
      evidenceIds: ['paper-2021-clip'],
      confidence: 'direct',
      unknowns: [],
    },
  ],
  abstractSummary:
    '最先進的電腦視覺系統長期受限於標準監督式學習：必須在預先指定、固定數量的離散類別集合上進行訓練。這種受限的監督形式嚴重限制了模型的通用性與可用性，因為要識別任何新類別都需要額外的標註資料。直接從圖像相關聯的自然語言中學習，是一種極具潛力且能利用海量廣泛監督信號的替代方案。我們證明了以極簡的對比學習預訓練任務預測「哪一段文字與哪一張圖像配對」，是一種在大規模網路抓取之 4 億圖文資料集（WIT）上學習 SOTA 影像表徵的高效方法。預訓練完成後，我們能直接使用自然語言來引導模型在下游任務上進行零樣本遷移（Zero-shot Transfer），在超過 30 個既有的電腦視覺資料集上取得優異成果，並在真實分佈漂移下展現出前所未有的強健性。',
  historicalQuestion:
    '電腦視覺是否必須永遠受限於 1,000 個封閉離散標籤的人工牢籠？在網路海量未清洗自然圖文的海洋中，能否僅憑極簡的雙塔對比幾何，讓視覺與文字共享同一套高維世界座標系，從而獲得面對未知世界的開放零樣本理解能力？',
  motivationClaims: [
    {
      id: 'claim-closed-set-bottleneck',
      claim: '傳統監督式分類器的 1-of-K 離散標籤切斷了視覺與人類廣泛語意世界的連續關聯。',
      explanation:
        'ImageNet 1,000 類模型輸出為一千維的 Softmax 向量，完全無法辨識「一隻戴著草帽在衝浪的柴犬」等複合開放概念，新增任何類別皆需重新標註與微調。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2021-clip'],
    },
    {
      id: 'claim-contrastive-efficiency',
      claim:
        '對比預測（Contrastive Learning）比自回歸生成式圖說預測（Image Captioning）計算效率高出一個數量級。',
      explanation:
        'OpenAI 初期實驗顯示，逐字自回歸預測圖像文字說明的計算代價極為高昂；改採預測「圖文成對與否」的對比學習，表徵學習效率提升了整整 12 倍。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2021-clip'],
    },
    {
      id: 'claim-distribution-shift-robustness',
      claim: '自然語言監督迫使模型學習廣泛的不變語意，賦予模型卓越的自然分佈漂移強健性。',
      explanation:
        '在 ImageNet 訓練之 ResNet 在對抗樣本（ImageNet-A）或風格繪畫（ImageNet-R）上準確率急劇腰斬，而 CLIP 零樣本模型維持極高強健性。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2021-clip'],
    },
  ],
  unknowns: [
    'OpenAI 內部 WebImageText (WIT) 4 億圖文資料集的精確網址來源與黑名單過濾細節未完全對外開源。',
    '對於空間幾何方位與細微數量的感知，雙塔對比架構存在天生的詞袋（Bag-of-words）模糊性，其精確幾何機制仍待更深入研究。',
  ],
  sourceIds: [
    'paper-2021-clip',
    'paper-2020-vit',
    'paper-2018-cpc',
    'paper-2020-simclr',
    'paper-2022-dalle2',
    'paper-2023-llava',
  ],
};
