import type { PaperRecord, SourceRecord } from '../paper-schema';

export const instructgptSources: SourceRecord[] = [
  {
    id: 'paper-2022-instructgpt',
    kind: 'paper',
    title: 'Training language models to follow instructions with human feedback',
    publisher: 'NeurIPS 2022 / arXiv',
    published: '2022-03-04',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/2203.02155',
    supports: [
      '提出以人類反饋強化學習（RLHF）解決語言模型「目標函數與人類真實意圖脫節」之對齊問題',
      '建立經典三階段對齊管線：人類示範監督微調（SFT）→ 成對偏好排序訓練獎勵模型（RM）→ 近端策略最佳化（PPO）強化學習',
      '實證證明 13 億（1.3B）參數的 InstructGPT 在人類滿意度、指令遵循度與真實性評估中，全面擊敗 1750 億（175B）未對齊的 GPT-3 基座模型',
      '在 PPO 目標函數中引入 token 等級的 KL 散度懲罰項（β D_KL），有效遏止「獎勵作弊（Reward Hacking）」與策略崩潰',
      '加入預訓練輔助梯度（PPO-ptx）以緩解對齊帶來的通用能力衰退（Alignment Tax）',
      '確立現代語言模型評估的 3H 標準：有用性（Helpful）、真實性（Honest）、無害性（Harmless）',
    ],
    limits:
      'RLHF 高度依賴 40 位全職標註者的價值觀與主觀偏好，存在文化與人口統計學偏差；且獎勵模型（RM）本身作為神經網路仍存在對抗性脆弱性，無法徹底杜絕越獄（Jailbreak）或諂媚（Sycophancy）現象。',
  },
  {
    id: 'paper-2017-deep-rl-human-preferences',
    kind: 'paper',
    title: 'Deep reinforcement learning from human preferences',
    publisher: 'NeurIPS 2017 / arXiv',
    published: '2017-06-12',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/1706.03741',
    supports: [
      'Christiano、Leike 與 Amodei 等人首次將成對偏好（Pairwise Comparison）引入深度強化學習，奠定 Bradley-Terry 偏好建模基礎',
      '證明透過人類對行為軌跡的二元比較，能學出比手工定義獎勵函數更符合人類期望的複雜策略',
    ],
    limits:
      '早期研究聚焦於 Atari 遊戲與物理模擬機器人後空翻等低維度動作空間，尚未驗證在高維度、離散自回歸文本序列生成上的擴展性。',
  },
  {
    id: 'paper-2017-ppo',
    kind: 'paper',
    title: 'Proximal Policy Optimization Algorithms',
    publisher: 'arXiv Preprint',
    published: '2017-07-20',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/1707.06347',
    supports: [
      'John Schulman 等人提出 PPO 演算法，透過剪裁機率比（Clipped Probability Ratio）確保策略更新步幅受限，大幅提升強化學習訓練穩定性',
      '成為日後 InstructGPT、ChatGPT 與幾乎所有前沿大語言模型 RLHF 階段的核心最佳化引擎',
    ],
    limits:
      '在語言模型數百億至千億參數的情境下，PPO 需同時在記憶體中維護 Actor、Critic、Reference 與 Reward 四個大型模型，工程開銷極大且超參數極其敏感。',
  },
  {
    id: 'paper-2020-summarization-human-feedback',
    kind: 'paper',
    title: 'Learning to summarize from human feedback',
    publisher: 'NeurIPS 2020 / arXiv',
    published: '2020-09-02',
    accessed: '2026-09-18',
    url: 'https://arxiv.org/abs/2009.01325',
    supports: [
      'Stiennon、Ouyang 與 Wu 等人首次將 RLHF 完整應用於 NLP 摘要生成任務，證明人類偏好訓練大幅超越 ROUGE 等自動化統計指標',
      '驗證了標註者間一致性、獎勵模型縮放定律與 KL 散度調控對文字生成品質的決定性影響',
    ],
    limits:
      '任務範疇侷限於單一摘要（TL;DR）場景，尚未推進至涵蓋開放問答、程式碼生成、創意寫作與多語言對話的全域指令分佈。',
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
      'InstructGPT 改造的直接基座原型：1750 億參數的未對齊自回歸基座模型',
      '展示了龐大的世界知識儲備與少樣本提示潛能，但也暴露了胡編亂造、不受控接話與偏見嚴重的致命缺陷',
    ],
    limits:
      '自回歸下一個 token 預測的目標函數僅要求「統計上看起來像網際網路文字」，對人類的使用者意圖、邏輯真偽與道德安全完全漠不關心。',
  },
];

export const paper: PaperRecord = {
  id: 'training-language-models-to-follow-instructions-with-human-feedback',
  researchStatus: 'published',
  lastChecked: '2026-09-18',
  coverageNote: '完整涵蓋 SFT、Reward Modeling、PPO 演算法與 3H 對齊評估標準。',
  title: 'Training language models to follow instructions with human feedback',
  chineseTitle: 'InstructGPT：讓人性引導機器——RLHF 對齊革命',
  year: 2022,
  submitted: '2022-03-04',
  venue: 'NeurIPS 2022',
  pages: '27730-27744',
  arxivId: '2203.02155',
  doi: {
    value: '10.48550/arXiv.2203.02155',
    url: 'https://doi.org/10.48550/arXiv.2203.02155',
    status: 'verified',
    verificationNote: '經 arXiv 官方資料庫與 NeurIPS 2022 會議議程核對通過。',
    sourceId: 'paper-2022-instructgpt',
  },
  authors: [
    'Long Ouyang',
    'Jeffrey Wu',
    'Xu Jiang',
    'Diogo Almeida',
    'Carroll L. Wainwright',
    'Pamela Mishkin',
    'Chong Zhang',
    'Sandhini Agarwal',
    'Katarina Slama',
    'Alex Ray',
    'John Schulman',
    'Jacob Hilton',
    'Fraser Kelton',
    'Luke Miller',
    'Maddie Simens',
    'Amanda Askell',
    'Peter Welinder',
    'Paul Christiano',
    'Jan Leike',
    'Ryan Lowe',
  ],
  authorBriefs: [
    {
      name: 'Long Ouyang',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '第一作者，主導 InstructGPT 實驗架構、人類標註管線與多輪對齊評估',
      verifiedContext:
        '史丹佛大學符號系統與認知科學背景，在 OpenAI 主導人類反饋強化學習管線工程與標註者偏好建模。',
      evidenceIds: ['paper-2022-instructgpt'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/long-ouyang.png',
    },
    {
      name: 'Jeffrey Wu',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同第一作者，主導 SFT 模型微調架構、API 資料分佈審查與偏好損失工程',
      verifiedContext:
        '哈佛大學數學與物理背景，GPT-2 與早期預訓練核心成員，在對齊團隊推動指令微調與自動化評估管線。',
      evidenceIds: ['paper-2022-instructgpt'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/jeffrey-wu.png',
    },
    {
      name: 'John Schulman',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同創辦人與核心作者，提出 PPO 近端策略最佳化演算法，主導 RLHF 訓練穩定性架構',
      verifiedContext:
        '加州大學柏克萊分校博士，策略梯度與強化學習領域先驅，其 PPO 與 GAE 架構為大模型強化學習奠定黃金基石。',
      evidenceIds: ['paper-2022-instructgpt', 'paper-2017-ppo'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/john-schulman.png',
    },
    {
      name: 'Jan Leike',
      affiliationAtPublication: 'OpenAI',
      roleInPaper: '共同資深作者，對齊團隊總負責人，奠定從人類反饋中學習的長期對齊理論',
      verifiedContext:
        '澳洲國立大學博士，曾任 DeepMind 安全研究員，在 OpenAI 擔任超級對齊（Superalignment）負責人，推動可擴展監督研究。',
      evidenceIds: ['paper-2022-instructgpt', 'paper-2017-deep-rl-human-preferences'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/jan-leike.png',
    },
  ],
  abstractSummary:
    '擴大語言模型的參數量並不會自動讓它們更擅長遵循使用者的意圖。未經對齊的基座模型（如 GPT-3）經常生成不實資訊、惡意偏見或直接忽略指令，這源自於預訓練目標函數（預測網際網路文字的下一個 token）與使用者真實目標（安全且有幫助地執行任務）之間的根本性脫節。在本研究中，我們展示了利用人類反饋強化學習（RLHF）在廣泛任務上微調語言模型的方法。首先，我們收集人類標註者撰寫的示範資料進行監督式微調（SFT）。接著，針對模型生成的數個候選輸出收集人類偏好排序，訓練獎勵模型（RM）。最後，利用近端策略最佳化（PPO）演算法對 SFT 模型進行強化學習微調。我們稱此系列模型為 InstructGPT。在人類評估中，僅 13 億參數的 InstructGPT 輸出顯著優於 1750 億參數的 GPT-3 基座輸出，且能大幅降低不真實輸出與毒性回應。這項突破確立了 RLHF 作為將通用基礎模型轉化為安全、有用產品的關鍵技術橋樑。',
  historicalQuestion:
    '當擁有 1750 億參數的龐然大物 GPT-3 依然像個滿嘴胡言的網路醉漢——使用者問它「如何向六歲小孩解釋重力」，它卻若無其事地接著續寫一篇深奧的廣義相對論學術論文摘要——我們該如何馴服這種「算力無比強大但動機完全失準」的機器？單靠繼續堆疊參數與預訓練資料，真能讓機器理解人類的心智與善意嗎？',
  motivationClaims: [
    {
      id: 'claim-alignment-gap',
      claim:
        '自回歸預訓練的數學目標（交叉熵損失最小化）與「人類期望的 AI 助手」存在本質上的目標失準（Misalignment）。',
      explanation:
        '網際網路文本充斥虛構小說、網路論戰、垃圾廣告與錯誤資訊。當模型最大化數據似然機率時，它學會的是完美模仿網路上的各種人類言論，包括偏見、謊言與無理取鬧，而不是成為有道德、聽指令的助手。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2022-instructgpt', 'paper-2020-gpt3'],
    },
    {
      id: 'claim-rlhf-trinity',
      claim:
        '三步式 RLHF 管線（SFT → RM → PPO）能夠以極小代價引導模型將龐大的預訓練知識「轉向」為使用者友善的互動模式。',
      explanation:
        'SFT 賦予模型指令遵循的語法骨架；獎勵模型以成對排序捕捉人類難以用數學公式精確描述的幽微偏好；PPO 則在保護模型語言流暢度的同時，將生成策略推向人類高評價區域。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: [
        'paper-2022-instructgpt',
        'paper-2017-ppo',
        'paper-2020-summarization-human-feedback',
      ],
    },
    {
      id: 'claim-1b-beats-175b',
      claim:
        '在真實使用者意圖滿足度上，經過 RLHF 對齊的 1.3B 模型勝過未對齊的 175B 基座模型，打破了「參數量即智慧品質」的粗放迷思。',
      explanation:
        '對齊並未向模型注入大量新知識，而是解鎖並重組了模型內部原有的知識提取能力，證明在模型實用性層面，後訓練（Post-training）對齊與預訓練同樣扮演決定性角色。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2022-instructgpt'],
    },
  ],
  unknowns: [
    'OpenAI 未公開 40 位全職標註者的具體篩選評分標準、詳細人口統計學分佈，以及 SFT / 偏好資料集的完整開源內容。',
    '在千億參數下 PPO 訓練過程中所遭遇的確切數值不穩定性除錯歷程與超參數敏感度詳情。',
  ],
  sourceIds: [
    'paper-2022-instructgpt',
    'paper-2017-deep-rl-human-preferences',
    'paper-2017-ppo',
    'paper-2020-summarization-human-feedback',
    'paper-2020-gpt3',
  ],
};
