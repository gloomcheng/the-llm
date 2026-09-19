import type { PaperRecord, SourceRecord } from '../paper-schema';
import type { TimelineEpoch } from '../../components/EvidenceList.astro';

export const shannonSources: SourceRecord[] = [
  {
    id: 'paper-1948-shannon',
    kind: 'paper',
    title: 'A Mathematical Theory of Communication',
    publisher: 'The Bell System Technical Journal (Vol. 27)',
    published: '1948-07-01',
    accessed: '2026-09-19',
    url: 'https://doi.org/10.1002/j.1538-7305.1948.tb01338.x',
    supports: [
      '首次將「資訊」定義為可量化的數學對象，引入以 2 為底的對數計量單位「bit（位元）」',
      '提出離散無雜訊通道與有雜訊通道模型，推導通道容量公式 C = lim (log N) / T',
      '定義資訊熵公式 H = −∑ p log p，奠定今日現代語言模型 Cross-Entropy Loss 的數學基石',
      '利用馬可夫鏈建構首個統計語言生成模型，證明人類自然語言本質上是帶有統計結構的隨機過程',
    ],
    limits:
      '資訊理論開山之作。嚴格將通訊聚焦於語法與統計層次之信號保真傳輸，明確排除語義理解與意圖哲學問題。',
  },
  {
    id: 'paper-1928-hartley',
    kind: 'paper',
    title: 'Transmission of Information',
    publisher: 'The Bell System Technical Journal (Vol. 7)',
    published: '1928-07-01',
    accessed: '2026-09-19',
    url: 'https://doi.org/10.1002/j.1538-7305.1928.tb01236.x',
    supports: [
      '首次提出以對數標度 H = n log s 量化符號序列中的資訊承載能力',
      '為 Shannon 1948 年引入機率分佈並推廣至熵（Entropy）提供了直接的代數起點',
    ],
    limits: '假設所有符號出現機率均等，缺乏機率統計框架，無法處理自然語言的不均勻分佈。',
  },
  {
    id: 'paper-1928-nyquist',
    kind: 'paper',
    title: 'Certain Topics in Telegraph Transmission Theory',
    publisher: 'Transactions of the American Institute of Electrical Engineers',
    published: '1928-04-01',
    accessed: '2026-09-19',
    url: 'https://doi.org/10.1109/T-AIEE.1928.5055024',
    supports: [
      '提出Nyquist 極限定理，確定在頻寬 W 條件下無碼間干擾的最大脈衝傳輸速率為 2W',
      '為連續信號的離散取樣定理與通道容量推導提供了物理硬體邊界',
    ],
    limits: '僅探討信號傳輸的波形物理特性，尚未建立抽象資訊量與編碼壓縮的數學理論。',
  },
  {
    id: 'paper-1949-weaver',
    kind: 'authorial-account',
    title: 'Recent Contributions to the Mathematical Theory of Communication',
    publisher: 'University of Illinois Press',
    published: '1949-09-01',
    accessed: '2026-09-19',
    url: 'https://archive.org/details/mathematicaltheo00shan',
    supports: [
      '與 Shannon 合著專著，提出著名的通訊三層次分類：技術問題（Level A）、語義問題（Level B）與效能問題（Level C）',
      '向全球跨領域學界（語言學、心理學、控制論）普及 Shannon 資訊理論之哲學與實踐意涵',
    ],
    limits: '屬於詮釋性專著與導論，為 Shannon 原理提供哲學框架，而非原創數學證明。',
  },
  {
    id: 'paper-1951-shannon-prediction',
    kind: 'paper',
    title: 'Prediction and Entropy of Printed English',
    publisher: 'The Bell System Technical Journal (Vol. 30)',
    published: '1951-01-01',
    accessed: '2026-09-19',
    url: 'https://doi.org/10.1002/j.1538-7305.1951.tb03666.x',
    supports: [
      '首創「猜下一個字母」實驗協議，利用人類受試者估算英語的極限資訊熵',
      '計算出英文的極限資訊熵約為 1.0 至 1.5 bits/character，證實自然語言具備 50% 以上的極高冗餘度',
      '奠定今日大型語言模型以困惑度（Perplexity = 2^H）評估模型品質的行業標準協議',
    ],
    limits: '受限於 1950 年代手動受試者統計，長距離上下文估算存在樣本方差。',
  },
  {
    id: 'paper-1951-kullback-leibler',
    kind: 'paper',
    title: 'On Information and Sufficiency',
    publisher: 'The Annals of Mathematical Statistics (Vol. 22)',
    published: '1951-03-01',
    accessed: '2026-09-19',
    url: 'https://doi.org/10.1214/aoms/1177729694',
    supports: [
      '定義相對熵（KL 散度 D_KL(P || Q) = ∑ P log(P / Q)），量化兩個機率分佈之間的資訊損失',
      '確立了現代生成式語言模型交叉熵微調、知識蒸餾以及 RLHF/DPO 對齊約束的數學核心工具',
    ],
    limits: '純粹統計檢定與充份性理論，非直接針對語言建模或神經網路。',
  },
];

export const shannonTimelineEpochs: TimelineEpoch[] = [
  {
    id: 'epoch-1928',
    year: '1928–1940',
    epochNumber: '01',
    title: '資訊量化前夜：電報頻寬極限與對數度量探索',
    subtitle: 'THE DAWN OF QUANTIFICATION & BANDWIDTH BOUNDS',
    summary:
      '在 1948 年之前，「資訊」僅是哲學與工程術語的模糊交織。Nyquist確立了無雜訊電報頻寬的物理極限，Hartley則首次提出以對數標度計算信號符號容量。然而，因尚未引入機率分佈與統計模型，通訊界依然無法回答「一段不確定訊息究竟包含多少資訊」。',
    sources: [
      {
        refCode: 'S02',
        source: shannonSources[1],
        role: '理論先驅',
        takeaway: '首次以對數標度量化通信容量，啟發 Shannon 引入機率分佈將其推廣至熵。',
      },
      {
        refCode: 'S03',
        source: shannonSources[2],
        role: '物理邊界',
        takeaway: '奠定無碼間干擾的最大符號傳輸極限，為取樣定理提供理論邊界。',
      },
    ],
    navTitle: '1928 年前夜',
  },
  {
    id: 'epoch-1948',
    year: '1948–1949',
    epochNumber: '02',
    title: '劃時代創世紀：機率熵、位元定義與通訊數學理論',
    subtitle: 'THE GENESIS: BITS, ENTROPY & CHANNEL CAPACITY',
    summary:
      '任職於貝爾實驗室的 Claude E. Shannon 發表震驚世界的長文，以極致精簡的數學結構重塑了整個通訊文明。他創造了「bit（位元）」一詞，用熱力學熵的對偶形式定義資訊不確定性 H = −∑ p log p，並以馬可夫過程首次證明：人類自然語言是一個可以被統計機率模型精確量化與生成的隨機過程。',
    sources: [
      {
        refCode: 'S01',
        source: shannonSources[0],
        isFeatured: true,
        role: '核心奠基文獻',
        takeaway: '全書開山鼻祖：定義資訊熵、通道容量定理與第一個統計自回歸語言模型。',
      },
      {
        refCode: 'S04',
        source: shannonSources[3],
        role: '哲學推廣',
        takeaway: '拆解通訊三層次（語法、語義、效能），確立資訊理論的跨領域哲學座標。',
      },
    ],
    navTitle: '1948 年創世紀',
  },
  {
    id: 'epoch-1951',
    year: '1951–',
    epochNumber: '03',
    title: '語言模型血緣：人類預測實驗與相對熵分佈距離',
    subtitle: 'THE LEGACY: PREDICTION, PERPLEXITY & RELATIVE ENTROPY',
    summary:
      'Shannon 隨後將資訊理論應用於人類書面語實驗，透過「預測下一個字」首度測得英語的極限熵與高達 50% 的統計冗餘度，奠定了 Perplexity 評估指標；而 Kullback 與 Leibler 提出的相對熵（KL 散度），則成為七十年後大語言模型預訓練、Cross-Entropy 損失與 RLHF/DPO 對齊的核心演算法基石。',
    sources: [
      {
        refCode: 'S05',
        source: shannonSources[4],
        role: '實證協議',
        takeaway: '首創「猜下一個詞」實驗協議，確立人類語言極限資訊熵與模型困惑度基準。',
      },
      {
        refCode: 'S06',
        source: shannonSources[5],
        role: '對齊數學',
        takeaway: '定義 KL 散度，成為當代大語言模型交叉熵損失與對齊約束之數學原點。',
      },
    ],
    navTitle: '1951 年遺產',
  },
];

export const paper: PaperRecord = {
  id: 'a-mathematical-theory-of-communication',
  researchStatus: 'published',
  lastChecked: '2026-09-19',
  coverageNote: '經 Bell System Technical Journal 原著及 1949 年合著專著完整考證。',
  title: 'A Mathematical Theory of Communication',
  chineseTitle: '通訊的數學理論：資訊熵與語言機率建模的創世紀',
  year: 1948,
  submitted: '1948-07-01',
  venue: 'The Bell System Technical Journal, 27(3), 379–423 & 27(4), 623–656',
  pages: '379–423, 623–656',
  arxivId: 'historical/bstj-1948',
  doi: {
    value: '10.1002/j.1538-7305.1948.tb01338.x',
    url: 'https://doi.org/10.1002/j.1538-7305.1948.tb01338.x',
    status: 'verified',
    verificationNote: '經 IEEE Xplore 與 Wiley Online Library 雙重交叉檢驗。',
    sourceId: 'paper-1948-shannon',
  },
  authors: ['Claude E. Shannon'],
  authorBriefs: [
    {
      name: 'Claude E. Shannon',
      affiliationAtPublication: 'Bell Telephone Laboratories, Murray Hill, New Jersey',
      roleInPaper: '資訊理論之父，獨立完成全篇論文概念構思、定理證明與統計語言模型架構',
      verifiedContext:
        '在貝爾實驗室研究二戰密碼學與開關繼電器電路理論期間，獨立構思出將資訊量化為機率熵的完整數學體系，以一己之力催生了現代數位通訊、編碼學與計算機科學時代。',
      evidenceIds: ['paper-1948-shannon', 'paper-1949-weaver'],
      confidence: 'direct',
      unknowns: [],
    },
  ],
  abstractSummary:
    'Claude E. Shannon 於 1948 年發表的奠基之作。論文將通訊本質定義為「在接收端精確或近似重現發送端所選訊息」，引入對數度量「bit」、定義資訊熵 H = −∑ p log p、提出通道編碼定理，並首次利用馬可夫鏈建立了自回歸統計語言模型，成為七十年後所有大語言模型（LLM）的共同哲學與數學原點。',
  historicalQuestion:
    '資訊究竟能否被客觀度量？人類語言是否能被數學機率精確捕捉？Shannon 如何在一篇論文中同時催生數位時代與現代自回歸語言模型的數學骨幹？',
  motivationClaims: [
    {
      id: 'claim-1',
      claim: '資訊是可以被嚴格量化的客觀物理/數學量，其度量單位為 bit。',
      explanation: 'Shannon 證明任何具有不確定性的選擇過程都可以用對數度量，奠定數位通訊架構。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-1948-shannon'],
    },
    {
      id: 'claim-2',
      claim: '人類自然語言本質上是一個受制於統計規律的隨機過程，可用機率分佈建模。',
      explanation:
        'Shannon 在論文第二節以馬可夫鏈生成不同階數的英文近似序列，成為所有自回歸 LLM 的始祖。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-1948-shannon', 'paper-1951-shannon-prediction'],
    },
  ],
  unknowns: [],
  sourceIds: shannonSources.map((s) => s.id),
};
