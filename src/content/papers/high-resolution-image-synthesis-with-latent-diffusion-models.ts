import type { PaperRecord, SourceRecord } from '../paper-schema';
import type { TimelineEpoch } from '../../components/EvidenceList.astro';

export const ldmSources: SourceRecord[] = [
  {
    id: 'paper-2021-ldm',
    kind: 'paper',
    title: 'High-Resolution Image Synthesis with Latent Diffusion Models',
    publisher: 'CVPR 2022 (Oral) / arXiv:2112.10752',
    published: '2021-12-20',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2112.10752',
    supports: [
      '提出潛在擴散模型（LDM，Latent Diffusion Models），將擴散過程從高維畫素空間解耦至低維感知隱空間（Latent Space）',
      '透過預訓練的自動編碼器（Autoencoder with perceptual and adversarial loss）實現 f=8 的空間下採樣，將資料維度壓縮 48 倍、序列長度縮減 64 倍',
      '在 U-Net 去噪骨幹的跨層特徵圖中引入交叉注意力機制（Cross-Attention），建立可容納文字、語意分割圖、邊界框等多元多模態條件的通用條件引導架構',
      '催生了現象級開源文字生圖模型 Stable Diffusion，使高解析度影像生成首度能在消費級個人顯示卡（如 RTX 3060）上普及運算',
      '在無條件影像生成、文字到影像合成（Text-to-Image）、超解析度（Super-resolution）與局部重繪（Inpainting）等多項任務中達到 SOTA 水準',
    ],
    limits:
      '生成軌跡本質為全域連續隨機去噪過程，存在牽一髮動全身的全域隨機漂移問題；對文字指令中的細粒度局部修改（如僅替換顏色或特定物體）難以精準局部約束。此外，早期版本對英文字符拼寫與手指解剖細節常出現結構性失真。',
  },
  {
    id: 'paper-2020-ddpm',
    kind: 'paper',
    title: 'Denoising Diffusion Probabilistic Models',
    publisher: 'NeurIPS 2020 / arXiv:2006.11239',
    published: '2020-06-19',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2006.11239',
    supports: [
      '確立去噪擴散機率模型（DDPM）的現代簡化損失函數，證明預測添加的高斯噪點相當於在分數匹配（Score-based generative modeling）框架下估計對數機率密度梯度',
      '證明基於馬可夫鏈的前向加噪與反向 U-Net 去噪過程能生成極具多樣性且訓練極度穩定的高品質影像，徹底免除 GAN 模式崩潰（Mode Collapse）之苦',
    ],
    limits:
      '所有加噪與去噪運算均直接在原始高維畫素空間（如 256x256x3）進行，計算開銷與推論步數（通常需 1000 步）極其高昂，難以直接擴展至百萬畫素高解析度。',
  },
  {
    id: 'paper-2021-taming',
    kind: 'paper',
    title: 'Taming Transformers for High-Resolution Image Synthesis',
    publisher: 'CVPR 2021 / arXiv:2012.09841',
    published: '2020-12-17',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2012.09841',
    supports: [
      '提出結合感知損失（LPIPS）與 PatchGAN 對抗損失的 VQGAN，證明可將高解析度影像有效壓縮為離散或連續的豐富隱空間表徵',
      '為 LDM 的第一階段感知壓縮自動編碼器（Autoencoder KL / VQ）奠定了關鍵架構基礎與預訓練權重',
    ],
    limits:
      '第二階段採用自回歸 Transformer 依序預測離散碼本索引，受到光柵掃描（Raster-scan）計算複雜度限制，推論速度緩慢且缺乏擴散模型的全域結構一致性。',
  },
  {
    id: 'paper-2021-clip',
    kind: 'paper',
    title: 'Learning Transferable Visual Models From Natural Language Supervision',
    publisher: 'ICML 2021 / arXiv:2103.00020',
    published: '2021-02-26',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2103.00020',
    supports: [
      '提供預訓練的 CLIP ViT-L/14 文字編碼器，將開放詞彙文字提示映射為語意豐富的高維特徵向量序列',
      '作為 LDM 跨模態條件引導的核心語言大腦，透過 Cross-Attention 注入 U-Net 各層特徵',
    ],
    limits:
      '對比學習的詞袋效應導致對空間方位、前後遮擋與精確數量關係的引導信號較弱，影響生圖時的空間邏輯一致性。',
  },
  {
    id: 'paper-2022-cfg',
    kind: 'paper',
    title: 'Classifier-Free Diffusion Guidance',
    publisher: 'NeurIPS 2021 Workshop / arXiv:2207.12598',
    published: '2022-07-26',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2207.12598',
    supports: [
      '提出無分類器引導（Classifier-Free Guidance, CFG）技術，在訓練中以一定機率隨機丟棄條件信號，同時學習條件與無條件去噪軌跡',
      '在取樣時透過推移差值方向放大條件信號權重（Guidance Scale w），顯著提升生成影像對文字提示的語意遵循度與細節清晰度',
    ],
    limits:
      '過大的引導係數（w > 12）會導致影像色彩過度飽和、對比度極端畸變與動態範圍崩潰（Color oversaturation）。',
  },
  {
    id: 'paper-2023-controlnet',
    kind: 'paper',
    title: 'Adding Conditional Control to Text-to-Image Diffusion Models',
    publisher: 'ICCV 2023 / arXiv:2302.05543',
    published: '2023-02-10',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2302.05543',
    supports: [
      '利用 LDM 的隱空間 U-Net 結構，透過零卷積（Zero Convolution）外掛空間條件（邊緣圖、人體骨架、深度圖），解決純文字引導難以精準控制空間姿態的痛點',
      '確立 Stable Diffusion 作為工業級生成設計底座的可擴充性與生態繁榮',
    ],
    limits:
      '需額外訓練副本網路，增加推論與顯示卡記憶體開銷；對複雜重疊遮擋場景的控制精度仍有極限。',
  },
];

export const ldmTimelineEpochs: TimelineEpoch[] = [
  {
    id: 'epoch-2015-thermodynamic-prelude',
    year: '2015–2020',
    epochNumber: '01',
    title: '物理熱力學的逆行：從非平衡態統計到 DDPM 畫素去噪',
    subtitle: 'THE THERMODYNAMIC PRELUDE: FROM NON-EQUILIBRIUM PHYSICS TO DDPM',
    summary:
      'Sohl-Dickstein 等人於 2015 年首度將非平衡態熱力學的擴散過程引入機器學習；2020 年 Jonathan Ho 等人發表 DDPM，將前向馬可夫鏈加噪與反向神經網路去噪結合，徹底打破 GAN 模式崩潰的噩夢，但數千步的畫素級暴力運算使高解析度生圖成為巨額算力的專利。',
    sources: [
      {
        refCode: 'S01',
        source: ldmSources.find((s) => s.id === 'paper-2020-ddpm')!,
        role: '擴散理論奠基',
        takeaway:
          '確立預測高斯噪點的極簡損失函數，證明基於機率擴散過程能實現穩定、多樣的高品質影像生成。',
      },
    ],
    navTitle: '2015–2020',
  },
  {
    id: 'epoch-2020-perceptual-compression',
    year: '2020–2021',
    epochNumber: '02',
    title: '感知壓縮前奏：VQGAN 與語意空間的兩階段分離',
    subtitle: 'PERCEPTUAL COMPRESSION: VQGAN AND THE TWO-STAGE SEPARATION',
    summary:
      'Esser 與 Ommer 等人提出 Taming Transformers (VQGAN)，指出影像包含「不可察覺的高頻細節」與「深層語意感知結構」。透過感知損失與對抗損失訓練的自動編碼器，能將影像壓縮至緊湊的隱空間，為後續擴散模型擺脫畫素泥淖鋪平道路。',
    sources: [
      {
        refCode: 'S02',
        source: ldmSources.find((s) => s.id === 'paper-2021-taming')!,
        role: '隱空間壓縮基礎',
        takeaway:
          '證明兩階段解耦架構能有效分離感知壓縮與生成建模，大幅降低後續生成網路的空間解析度負擔。',
      },
      {
        refCode: 'S03',
        source: ldmSources.find((s) => s.id === 'paper-2021-clip')!,
        role: '跨模態語意羅盤',
        takeaway:
          'CLIP 提供了對齊良好的跨模態文字特徵，為後續擴散模型接受自然語言引導備妥關鍵編碼器。',
      },
    ],
    navTitle: '2020–2021',
  },
  {
    id: 'epoch-2021-latent-diffusion-revolution',
    year: '2021.12–2022',
    epochNumber: '03',
    title: '潛在擴散模型 (LDM) 橫空出世：隱空間去噪與 Cross-Attention 條件引導',
    subtitle: 'THE LDM REVOLUTION: LATENT DENOISING AND CROSS-ATTENTION CONDITIONING',
    summary:
      '慕尼黑大學與 Runway 團隊提出 LDM，將擴散過程完全搬至經由 Autoencoder 壓縮 8 倍的隱空間中進行，並以 Cross-Attention 靈活注入文字條件。計算複雜度暴跌數十倍，催生現象級開源模型 Stable Diffusion，個人電腦顯示卡生圖時代正式引爆。',
    sources: [
      {
        refCode: 'S04',
        source: ldmSources.find((s) => s.id === 'paper-2021-ldm')!,
        role: '核心革命成果',
        takeaway:
          '將生成建模與感知壓縮徹底解耦，以 f=8 隱空間搭配 Cross-Attention 實現高解析度影像與多元條件合成。',
      },
      {
        refCode: 'S05',
        source: ldmSources.find((s) => s.id === 'paper-2022-cfg')!,
        role: '無分類器引導增益',
        takeaway:
          '無分類器引導（CFG）大幅增強生成影像對文字提示的語意貼合度，成為 Stable Diffusion 的標準取樣技巧。',
      },
    ],
    navTitle: '2021.12–2022',
  },
  {
    id: 'epoch-2022-open-source-tsunami',
    year: '2022–至今',
    epochNumber: '04',
    title: '開源風暴與邊界：從 Stable Diffusion 生態到自回歸精準修圖',
    subtitle: 'THE OPEN-SOURCE TSUNAMI AND ITS BOUNDARIES: FROM STABLE DIFFUSION TO VAR',
    summary:
      'Stable Diffusion 開源引爆全球 AI 生圖熱潮，ControlNet、LoRA 與 WebUI 等工具百花齊放。然而，連續噪點去噪帶來的「全域隨機漂移」與文字渲染缺陷，促使學界進一步探索下一代原生自回歸生圖模型（VAR、GPT-4o）。',
    sources: [
      {
        refCode: 'S06',
        source: ldmSources.find((s) => s.id === 'paper-2023-controlnet')!,
        role: '空間結構精確控制',
        takeaway:
          '以零卷積鎖定預訓練主幹並接入空間幾何條件，奠定擴散生圖在工業級插畫與室內設計中的控制標準。',
      },
    ],
    navTitle: '2022–至今',
  },
];

export const paper: PaperRecord = {
  id: 'high-resolution-image-synthesis-with-latent-diffusion-models',
  researchStatus: 'published',
  lastChecked: '2026-09-19',
  coverageNote:
    '完整涵蓋畫素空間暴力去噪的算力極限、兩階段感知壓縮與隱空間解耦幾何、Cross-Attention 跨模態條件注入機制、無分類器引導（CFG）數學推導與開源生態的歷史影響與局限。',
  title: 'High-Resolution Image Synthesis with Latent Diffusion Models',
  chineseTitle: '潛在擴散模型 (Stable Diffusion)：從混沌噪點中雕刻圖像',
  year: 2022,
  submitted: '2021-12-20',
  venue: 'CVPR 2022 (Oral)',
  pages: '10684-10695',
  arxivId: '2112.10752',
  doi: {
    value: '10.1109/CVPR52688.2022.01042',
    url: 'https://doi.org/10.1109/CVPR52688.2022.01042',
    status: 'verified',
    verificationNote: 'CVPR 2022 官方論文紀錄與 IEEE Xplore 查核確認',
    sourceId: 'paper-2021-ldm',
  },
  authors: ['Robin Rombach', 'Andreas Blattmann', 'Dominik Lorenz', 'Patrick Esser', 'Björn Ommer'],
  authorBriefs: [
    {
      name: 'Robin Rombach',
      affiliationAtPublication: 'LMU Munich',
      roleInPaper: '第一作者 / 潛在擴散架構核心設計與主要訓練實驗',
      verifiedContext:
        '慕尼黑大學博士生（師從 Björn Ommer），主導潛在擴散模型（LDM）與後續 Stable Diffusion 的核心演算法研發，後共同創辦 Black Forest Labs 並發表 FLUX 系列模型。',
      evidenceIds: ['paper-2021-ldm'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Andreas Blattmann',
      affiliationAtPublication: 'LMU Munich',
      roleInPaper: '共同核心作者 / 隱空間自動編碼器訓練與超解析度實驗',
      verifiedContext:
        '慕尼黑大學博士生，專注於生成模型之感知壓縮架構與高品質條件生成，後續持續參與 Stable Diffusion 系列研發與 Black Forest Labs 創立。',
      evidenceIds: ['paper-2021-ldm'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Dominik Lorenz',
      affiliationAtPublication: 'LMU Munich',
      roleInPaper: '共同核心作者 / 跨模態條件引導與注意力機制整合',
      verifiedContext:
        '慕尼黑大學研究員，深度參與 U-Net 跨層 Cross-Attention 條件模組設計與局部重繪（Inpainting）實驗管線建構。',
      evidenceIds: ['paper-2021-ldm'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Patrick Esser',
      affiliationAtPublication: 'Runway / LMU Munich',
      roleInPaper: '共同資深作者 / 兩階段生成架構與 VQGAN 核心經驗遷移',
      verifiedContext:
        'Runway 研發主管與前慕尼黑大學博士後，為 Taming Transformers (VQGAN) 第一作者，為 LDM 提供了關鍵的感知壓縮自動編碼器理論與工程基石。',
      evidenceIds: ['paper-2021-ldm', 'paper-2021-taming'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Björn Ommer',
      affiliationAtPublication: 'LMU Munich',
      roleInPaper: '通訊作者 / 慕尼黑大學電腦視覺與學習實驗室主持人',
      verifiedContext:
        '慕尼黑大學（現任教於蘇黎世大學）教授，主持整體研究專案，倡導「以兩階段解耦實現生成模型平民化」的宏觀科研戰略。',
      evidenceIds: ['paper-2021-ldm'],
      confidence: 'direct',
      unknowns: [],
    },
  ],
  abstractSummary:
    '擴散模型（Diffusion Models）透過將生成過程分解為一系列去噪自編碼器，在影像生成等領域展現出卓越的生成品質。然而，由於這些模型直接在原始高維畫素空間中運作，評估與訓練最佳化需要龐大的運算資源與極慢的推論時間。為了在有限的運算資源上訓練擴散模型而不損害其生成品質，我們提出將擴散過程引入強大的預訓練自動編碼器（Autoencoder）所學習到的隱空間（Latent Space）中。與先前的作品相比，在這種隱空間中訓練擴散模型首次實現了複雜度降低與細節保留之間的最佳平衡點，顯著增強了視覺逼真度。透過在模型架構中引入交叉注意力層（Cross-Attention Layers），我們將擴散模型轉化為強大且靈活的生成器，能夠順暢接受文字描述、邊界框與語意分割圖等多種通用輸入條件，實現高解析度文字到影像的逼真生成，並在各項基準測試上創下新紀錄。',
  historicalQuestion:
    '高解析度影像生成是否必須受制於數十萬畫素的暴力矩陣運算與龐大伺服器集群？能否透過嚴格的感知壓縮幾何，將畫面中不可見的冗餘噪聲剝離，在僅有六十四分之一大小的語意隱空間中，以優雅的熱力學逆向去噪雕刻出驚豔全人類的真實光影？',
  motivationClaims: [
    {
      id: 'claim-pixel-space-computational-abyss',
      claim: '原始畫素空間的擴散訓練將絕大部分運算力浪費在難以察覺的高頻噪聲細節上。',
      explanation:
        '一張 512x512 的 RGB 影像包含超過 78 萬個數值，直接在畫素層級進行 1000 步 U-Net 評估，其梯度更新與反向傳播讓訓練數月且難以在消費級硬體上推論。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2021-ldm', 'paper-2020-ddpm'],
    },
    {
      id: 'claim-latent-perceptual-decoupling',
      claim:
        '兩階段解耦：將感知壓縮與語意生成分離，能在保留視覺逼真度的同時將計算複雜度降低數十倍。',
      explanation:
        '先以結合感知損失（LPIPS）與對抗損失的 Autoencoder 將影像降採樣 8 倍（f=8），使隱空間特徵維度大幅收斂，後續擴散模型專注於巨觀語意與結構生成。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2021-ldm', 'paper-2021-taming'],
    },
    {
      id: 'claim-cross-attention-conditioning',
      claim: 'Cross-Attention 機制為擴散去噪提供了通用、對齊良好的跨模態條件引導彈性。',
      explanation:
        '透過將文字編碼（如 CLIP）作為 Key 和 Value，將隱空間去噪特徵作為 Query，U-Net 能在去噪的每一步驟精準捕捉文字提示的語意脈絡。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2021-ldm', 'paper-2021-clip'],
    },
  ],
  unknowns: [
    '早期 LAION-5B 網路爬取訓練資料集中的品質過濾規則、浮水印噪聲殘留與版權歸屬界線在發表初期未有完整法律定論。',
    '隱空間特徵在經過多次空間降採樣後，對於極小字體之精準文字排版與密集微小結構（如手指關節）的幾何感知仍存在先天的頻寬極限。',
  ],
  sourceIds: [
    'paper-2021-ldm',
    'paper-2020-ddpm',
    'paper-2021-taming',
    'paper-2021-clip',
    'paper-2022-cfg',
    'paper-2023-controlnet',
  ],
};
