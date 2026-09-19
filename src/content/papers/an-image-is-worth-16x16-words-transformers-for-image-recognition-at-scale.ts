import type { PaperRecord, SourceRecord } from '../paper-schema';
import type { TimelineEpoch } from '../../components/EvidenceList.astro';

export const vitSources: SourceRecord[] = [
  {
    id: 'paper-2020-vit',
    kind: 'paper',
    title: 'An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale',
    publisher: 'ICLR 2021 (Oral) / arXiv:2010.11929',
    published: '2020-10-22',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2010.11929',
    supports: [
      '首次證明直接將標準純粹的 Transformer 架構應用於圖像 Patch 序列，無需任何卷積層，能在充足大數據預訓練下全面超越頂級 CNN',
      '提出將輸入影像分割為 16x16 像素的非重疊圖塊（Patches），經線性投影拉平為視覺 Token 序列，成功規避像素級自注意力高達 O(N²) 的記憶體爆炸',
      '發現歸納偏向（Inductive Bias）的數據分水嶺：在 ImageNet-1K（1.3M）等中小型數據上，缺乏空間先驗的 ViT 表現遜於 ResNet；但在 JFT-300M（3 億張影像）超大資料集上，ViT 打破效能天花板，且預訓練算力節省 2 至 4 倍',
      '驗證 1D 可學習位置編碼能在自回歸/自注意力訓練中自主學會 2D 空間拓撲幾何，並可透過二維雙三次插值（Bicubic Interpolation）直接適應更高解析度微調',
    ],
    limits:
      '視覺 Transformer 開山奠基之作。因其完全捨棄卷積之平移等變性與局部性，對預訓練資料規模極度飢渴；若缺乏千萬級以上大數據或強力數據增強，模型容易發生嚴重的過度擬合。',
  },
  {
    id: 'paper-2015-resnet',
    kind: 'paper',
    title: 'Deep Residual Learning for Image Recognition',
    publisher: 'CVPR 2016 / arXiv:1512.03385',
    published: '2015-12-10',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/1512.03385',
    supports: [
      '殘差跳躍連接（Residual Connections x + F(x)）解決了極深層卷積神經網路的梯度消失與退化問題，確立了 CNN 在電腦視覺領域長達五年的絕對統治地位',
      '為 ViT 論文提供了最關鍵的核心對照基準（ResNet-50、ResNet-101、ResNet-152）',
    ],
    limits:
      '卷積核受限於固定的局部感受野（Receptive Field），跨越整張圖片的長程語意關聯必須依賴數十層卷積與池化操作緩慢傳遞，且靜態權重無法動態自適應內容。',
  },
  {
    id: 'paper-2020-bit',
    kind: 'paper',
    title: 'Big Transfer (BiT): General Purpose Vision Representation Learning',
    publisher: 'ECCV 2020 / arXiv:1912.11370',
    published: '2019-12-24',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/1912.11370',
    supports: [
      '同由 Google Brain 蘇黎世團隊打造之超大規模卷積預訓練典範（BiT-L，基於 JFT-300M 訓練之 ResNet-152x4）',
      '作為 ViT 論文的核心對手：證明在相同 JFT-300M 數據與下游遷移評測下，ViT-H/14 能以顯著更低的 TPU 訓練算力擊敗 BiT-L',
    ],
    limits:
      '代表了經典卷積神經網路架構在超大規模數據下的頂峰，但其參數擴展效率與記憶體計算開銷在超大模型上逐漸遭遇瓶頸。',
  },
  {
    id: 'paper-2017-transformer',
    kind: 'paper',
    title: 'Attention Is All You Need',
    publisher: 'NeurIPS 2017 / arXiv:1706.03762',
    published: '2017-06-12',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/1706.03762',
    supports: [
      'ViT 所完全繼承之純粹標準 Transformer Encoder 架構，包含多頭自注意力（MSA）、前饋多層感知機（MLP）與層正規化（LayerNorm）',
      '提供 O(1) 循序操作的全域成對關聯計算引擎，使視覺信號得以直接在第一層便建立跨全圖任意兩點的即時通訊',
    ],
    limits:
      '原始設計完全針對一維離散文字符號序列；未直接考慮二維高維連續像素矩陣的計算複雜度爆炸問題。',
  },
  {
    id: 'paper-2018-bert',
    kind: 'paper',
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    publisher: 'NAACL 2019 / arXiv:1810.04805',
    published: '2018-10-11',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/1810.04805',
    supports: [
      'ViT 借鑑之 [CLS] 類別代表標記機制：在序列前端插入一個虛擬可學習向量，作為全域圖像特徵的最終匯聚池',
      '避免在特徵圖上進行人為設定的空間平均池化（Global Average Pooling），確保模型自由學習最佳表徵聚集方式',
    ],
    limits: '預訓練任務依賴離散符號之克漏字遮罩（MLM），而原始 ViT 仍採用監督式標籤預訓練。',
  },
  {
    id: 'paper-2021-swin',
    kind: 'paper',
    title: 'Swin Transformer: Hierarchical Vision Transformer using Shifted Windows',
    publisher: 'ICCV 2021 (Marr Prize / Best Paper) / arXiv:2103.14030',
    published: '2021-03-25',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2103.14030',
    supports: [
      '將 ViT 的全域注意力改良為階層式特徵圖與滑動視窗自注意力（Shifted Window Self-Attention）',
      '將全圖注意力計算複雜度從圖像大小的平方 O(N²) 降低至線性 O(N)，使 Transformer 能無縫取代 CNN 成為物件偵測與語意分割骨幹',
    ],
    limits:
      '引入了人為設定的局部視窗先驗與階層合併操作，相較於原始 ViT 的純粹無歸納偏向極簡架構略顯複雜。',
  },
  {
    id: 'paper-2021-mae',
    kind: 'paper',
    title: 'Masked Autoencoders Are Scalable Vision Learners',
    publisher: 'CVPR 2022 / arXiv:2111.06377',
    published: '2021-11-11',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2111.06377',
    supports: [
      '證明 ViT 的非重疊 Patch 切割天生完美適配非對稱自監督遮罩重建：隨機遮蔽 75% 的 Patch，僅對剩餘 25% 圖塊進行編碼',
      '徹底解決了 ViT 仰賴 JFT-300M 私有標註數據的痛點，使純視覺 Transformer 得以在無標註圖像上進行純自監督超大規模擴展',
    ],
    limits: '專注於自監督預訓練表徵學習，下游特定任務仍需微調解碼器。',
  },
];

export const vitTimelineEpochs: TimelineEpoch[] = [
  {
    id: 'epoch-1998-cnn-monopoly',
    year: '1998–2015',
    epochNumber: '01',
    title: '卷積歸納偏向的絕對統治：從 LeNet 到 ResNet',
    subtitle: 'THE CONVOLUTIONAL INDUCTIVE BIAS MONOPOLY',
    summary:
      '長達二十餘年間，電腦視覺領域被一條鐵律牢牢統治：圖像具有平移等變性與二維空間局部性。卷積核（CNN）透過滑動窗口與權重共享，將這兩項物理世界先驗深深刻入網路骨髓，並在 AlexNet 與 ResNet 的推進下攀上神壇。',
    sources: [
      {
        refCode: 'S01',
        source: vitSources.find((s) => s.id === 'paper-2015-resnet')!,
        role: 'CNN 統治巔峰',
        takeaway:
          'ResNet 藉由殘差跳躍連接攻克百層網路訓練，確立卷積神經網路在所有電腦視覺基準測試上的絕對統治地位。',
      },
    ],
    navTitle: '1998–2015',
  },
  {
    id: 'epoch-2017-attention-crossing',
    year: '2017–2019',
    epochNumber: '02',
    title: '自注意力跨足視覺的前奏：瓶頸、折衷與軸向妥協',
    subtitle: 'THE PRELUDE OF VISUAL ATTENTION (2017–2019)',
    summary:
      'Transformer 在 NLP 領域引爆全域比對革命後，視覺學者無不渴望廢黜卷積。然而，將每個像素視為 Token 的直接代價是難以承受的 O(N²) 二次方計算爆炸；學界嘗試了非局部神經網路（Non-local）與軸向注意力（Axial Attention），但繁瑣的特化算子始終無法撼動標準 CNN。',
    sources: [
      {
        refCode: 'S02',
        source: vitSources.find((s) => s.id === 'paper-2017-transformer')!,
        role: '全域架構基石',
        takeaway:
          'Transformer 宣告廢除循環結構以成對自注意力重構全域關係，為通用序列建模提供了純粹的數學引擎。',
      },
      {
        refCode: 'S03',
        source: vitSources.find((s) => s.id === 'paper-2018-bert')!,
        role: '代表標記借鑑',
        takeaway:
          'BERT 確立利用 [CLS] 類別代表標記聚合雙向序列全域特徵，啟發了 ViT 免除空間池化的讀出機制。',
      },
      {
        refCode: 'S04',
        source: vitSources.find((s) => s.id === 'paper-2020-bit')!,
        role: '超大卷積對手',
        takeaway:
          'Google Brain 打造之 Big Transfer (BiT-L) 展現了超大規模數據下卷積網路的極限，成為 ViT 的直接對照組。',
      },
    ],
    navTitle: '2017–2019',
  },
  {
    id: 'epoch-2020-vit-revolution',
    year: '2020–2022',
    epochNumber: '03',
    title: 'ViT 橫空出世與視覺典範的大一統',
    subtitle: 'THE ViT REVOLUTION & MULTIMODAL CONVERGENCE',
    summary:
      'Dosovitskiy 等人提出石破天驚的極簡洞察：一張圖片等於 16x16 個單字。直接將標準 Transformer Encoder 應用於 Patch 序列，在 3 億張圖像的大數據洗禮下打破 CNN 的神話，進而引爆 Swin、MAE 與現代多模態大模型（CLIP, LLaVA）的全面統一。',
    sources: [
      {
        refCode: 'S05',
        source: vitSources.find((s) => s.id === 'paper-2020-vit')!,
        isFeatured: true,
        role: '核心奠基之作',
        takeaway:
          'ViT 證明只要預訓練資料充足，完全不含任何空間先驗的純 Transformer 能夠徹底壓制最強 CNN，且算力效率大幅提升。',
      },
      {
        refCode: 'S06',
        source: vitSources.find((s) => s.id === 'paper-2021-swin')!,
        role: '密集預測擴展',
        takeaway:
          'Swin Transformer 引入階層式滑動視窗，將計算複雜度降至線性，使視覺 Transformer 橫掃檢測與分割任務。',
      },
      {
        refCode: 'S07',
        source: vitSources.find((s) => s.id === 'paper-2021-mae')!,
        role: '自監督大擴展',
        takeaway:
          'MAE 證明 ViT 的 Patch 架構完美適配 75% 高比例非對稱遮罩重建，開啟視覺無監督預訓練新紀元。',
      },
    ],
    navTitle: '2020–2022',
  },
];

export const vitPaper: PaperRecord = {
  id: 'an-image-is-worth-16x16-words-transformers-for-image-recognition-at-scale',
  researchStatus: 'published',
  lastChecked: '2026-09-19',
  coverageNote:
    '完整涵蓋原始論文、ICLR 2021 口頭報告錄影、Big Vision 官方開源庫與後續視覺大一統文獻。',
  title: 'An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale',
  chineseTitle: 'ViT：一張圖片等於 16x16 個單字——視覺大一統',
  year: 2020,
  submitted: '2020-10-22',
  venue: 'ICLR 2021 (Oral)',
  pages: '1–22',
  arxivId: '2010.11929',
  doi: {
    value: '10.48550/arXiv.2010.11929',
    url: 'https://doi.org/10.48550/arXiv.2010.11929',
    status: 'verified',
    verificationNote: 'arXiv.org permanent DOI repository',
    sourceId: 'paper-2020-vit',
  },
  authors: [
    'Alexey Dosovitskiy',
    'Lucas Beyer',
    'Alexander Kolesnikov',
    'Dirk Weissenborn',
    'Xiaohua Zhai',
    'Thomas Unterthiner',
    'Mostafa Dehghani',
    'Matthias Minderer',
    'Georg Heigold',
    'Sylvain Gelly',
    'Jakob Uszkoreit',
    'Neil Houlsby',
  ],
  authorBriefs: [
    {
      name: 'Alexey Dosovitskiy',
      affiliationAtPublication: 'Google Research, Brain Team (Berlin)',
      roleInPaper: '第一作者 / 核心演算法與模型架構主導',
      verifiedContext:
        '主導 Vision Transformer 之概念提出與原型設計，率先論證以 16x16 Patch 投影序列將標準 Transformer Encoder 直接套用於影像之可行性。',
      evidenceIds: ['paper-2020-vit'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Lucas Beyer',
      affiliationAtPublication: 'Google Research, Brain Team (Zurich)',
      roleInPaper: '共同核心作者 / 基礎設施與大規模訓練',
      verifiedContext:
        'Google Brain Big Vision 團隊核心成員，主導 JFT-300M 萬級影像集群之分散式 TPU 訓練架構與超參數穩定化策略。',
      evidenceIds: ['paper-2020-vit', 'paper-2020-bit'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Alexander Kolesnikov',
      affiliationAtPublication: 'Google Research, Brain Team (Zurich)',
      roleInPaper: '共同核心作者 / 評測基準與遷移學習消融',
      verifiedContext:
        '主導 Big Transfer (BiT) 與 ViT 在 ImageNet、CIFAR、VTAB-1k 等數十個下游遷移資料集上的跨尺度比較實驗。',
      evidenceIds: ['paper-2020-vit', 'paper-2020-bit'],
      confidence: 'direct',
      unknowns: [],
    },
    {
      name: 'Neil Houlsby',
      affiliationAtPublication: 'Google Research, Brain Team (Zurich)',
      roleInPaper: '通訊作者 / 視覺團隊負責人',
      verifiedContext:
        '時任 Google Brain 蘇黎世視覺研究小組負責人，規劃整體研究路徑，推動自然語言與電腦視覺跨模態技術之大一統。',
      evidenceIds: ['paper-2020-vit'],
      confidence: 'direct',
      unknowns: [],
    },
  ],
  abstractSummary:
    '儘管 Transformer 架構已成為自然語言處理的事實標準，其在電腦視覺領域的應用依然有限。在以往的嘗試中，注意力機制若非與卷積網路結合，便是用來取代卷積網路中的特定組件，同時保留整體結構。我們證明對 CNN 的這種依賴並非必要：直接將純粹的 Transformer 應用於圖像圖塊（Patches）序列，在圖像分類任務上能達到極佳效果。當在海量資料上預訓練並遷移至中小型圖像識別基準時，Vision Transformer (ViT) 取得了與最先進卷積網路相媲美甚至更優的成果，同時所需的訓練算力大幅減少。',
  historicalQuestion:
    '電腦視覺是否天生必須依賴卷積網路內建的空間局部性與平移等變性歸納偏向？在超大規模數據時代，純粹通用的自注意力架構能否憑藉數據與算力，自主學會甚至超越人類強加的視覺先驗？',
  motivationClaims: [
    {
      id: 'claim-pixel-attention-cost',
      claim: '像素級自注意力運算代價高達 O(N²)，無法直接應用於現代高解析度影像。',
      explanation:
        '標準圖像像素動輒數萬至數百萬，直接以像素為 Token 會導致自注意力矩陣膨脹至數億甚至數兆個元素，超出任何單機硬體記憶體承受極限。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2020-vit'],
    },
    {
      id: 'claim-inductive-bias-tradeoff',
      claim: '卷積神經網路的歸納偏向在小規模資料上是護城河，但在極大規模數據下成為阻礙擴展的枷鎖。',
      explanation:
        'CNN 強制假設鄰近像素相關且權重空間共享。當訓練樣本達到上億級別時，無歸納偏向的 Transformer 能自由擬合更豐富、更複雜的非局部全域視覺規律。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2020-vit', 'paper-2020-bit'],
    },
  ],
  unknowns: ['Google 內部 JFT-300M 與 JFT-3B 資料集的精確標籤分佈與過濾清單未完全公開對外開源。'],
  sourceIds: [
    'paper-2020-vit',
    'paper-2015-resnet',
    'paper-2020-bit',
    'paper-2017-transformer',
    'paper-2018-bert',
    'paper-2021-swin',
    'paper-2021-mae',
  ],
};
