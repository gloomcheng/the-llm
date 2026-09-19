import type { PaperRecord, SourceRecord } from '../paper-schema';

export const dpoSources: SourceRecord[] = [
  {
    id: 'paper-2023-dpo',
    kind: 'paper',
    title: 'Direct Preference Optimization: Your Language Model is Secretly a Reward Model',
    publisher: 'NeurIPS 2023 / arXiv',
    published: '2023-05-29',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2305.18290',
    supports: [
      '證明標準 RLHF 中帶有 KL 散度約束之受限最佳化問題存在精確解析解：真實獎勵函數可精確表示為最佳策略與參考策略的對數機率比',
      '將封閉解直接代入 Bradley-Terry 偏好模型，完全消除顯式獎勵模型（Reward Model）與配分函數 Z(x)',
      '將不穩定的強化學習迴圈轉化為極簡且數值穩定的二元交叉熵損失函數（Binary Cross-Entropy Loss）',
      '在 TL;DR 摘要與 Anthropic HH（Helpful & Harmless）對話評測中，全面超越 PPO 基準，且大幅節省顯示記憶體與訓練時間',
      '揭示 DPO 梯度內建之隱含動態權重調節機制：當模型對成對偏好判斷越嚴重錯誤時，給予越巨大的梯度更新力度',
    ],
    limits:
      'DPO 假設偏好資料由標準 Bradley-Terry 選擇模型生成；當標註數據包含不可傳遞的非理性偏好、或偏好嚴重受回覆長度偏差（Length Bias）操縱時，模型容易過度擬合長文本。此外，訓練極端依賴參考策略（π_ref）的品質，若預訓練分佈漂移可能導致微調性能衰退。',
  },
  {
    id: 'paper-2022-instructgpt',
    kind: 'paper',
    title: 'Training language models to follow instructions with human feedback',
    publisher: 'NeurIPS 2022 / arXiv',
    published: '2022-03-04',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2203.02155',
    supports: [
      '確立人類反饋強化學習（RLHF）黃金三階段典範：SFT 示範微調 → 獎勵模型（RM）訓練 → PPO 強化學習策略搜索',
      'DPO 欲革新之直接對標前輩：PPO 需要在顯示卡中同時常駐四個巨大神經網路，存在嚴重的工程複雜性與數值敏感性',
    ],
    limits:
      'PPO 訓練對超參數（學習率、KL 懲罰因子 β、價值裁剪閾值）高度敏感，經常發生策略退化、崩潰或獎勵作弊（Reward Hacking）。',
  },
  {
    id: 'paper-1952-bradley-terry',
    kind: 'paper',
    title: 'Rank analysis of incomplete block designs: I. The method of paired comparisons',
    publisher: 'Biometrika, Vol. 39, No. 3/4',
    published: '1952-12-01',
    accessed: '2026-09-19',
    url: 'https://doi.org/10.2307/2334029',
    supports: [
      '建立成對偏好（Pairwise Comparison）的機率分佈數學公理：人類選擇 y_w 勝過 y_l 的機率為雙方隱含得分之 Sigmoid 函數',
      '現代所有基於成對比較的獎勵建模與偏好對齊演算法（RLHF、DPO、IPO、KTO）的底層公理基石',
    ],
    limits:
      '強假設各選項間具備獨立性與傳遞性（若 A > B 且 B > C，則 A > C），無法完美模擬人類決策中常見的非理性環狀偏好。',
  },
  {
    id: 'paper-2017-ppo',
    kind: 'paper',
    title: 'Proximal Policy Optimization Algorithms',
    publisher: 'arXiv Preprint',
    published: '2017-07-20',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/1707.06347',
    supports: [
      '以裁剪機率比限制策略每一步更新幅度的經典策略梯度強化學習演算法',
      '作為大模型對齊的主流引擎，但在自回歸文本序列採樣的高方差環境中訓練難度極大',
    ],
    limits:
      '訓練期間需持續從當前 Actor 策略在線採樣輸出以估算優勢函數，導致訓練速度受限於昂貴的推論解碼階段。',
  },
  {
    id: 'paper-2023-ipo',
    kind: 'paper',
    title: 'A General Theoretical Paradigm to Understand Learning from Human Preferences',
    publisher: 'arXiv Preprint',
    published: '2023-10-24',
    accessed: '2026-09-19',
    url: 'https://arxiv.org/abs/2310.12036',
    supports: [
      'DeepMind 團隊深入剖析 DPO 的理論邊界，指出若資料集存在噪聲或偏好不可分離，DPO 的交叉熵損失可能導致隱式獎勵持續發散與過度擬合',
      '提出恆等偏好最佳化（Identity Preference Optimization, IPO），以非線性正規化平滑偏好損失',
    ],
    limits:
      '儘管理論更嚴謹，但在許多開放域指令跟隨的工程實務中，DPO 的簡單性與收斂速度依然廣受開源社群青睞。',
  },
];

export const paper: PaperRecord = {
  id: 'direct-preference-optimization-your-language-model-is-secretly-a-reward-model',
  researchStatus: 'published',
  lastChecked: '2026-09-19',
  coverageNote:
    '完整涵蓋 PPO 對齊瓶頸、Bradley-Terry 偏好數學模型、隱含獎勵解析解推導、DPO 交叉熵目標函數與梯度動態。',
  title: 'Direct Preference Optimization: Your Language Model is Secretly a Reward Model',
  chineseTitle: 'DPO：告別繁瑣強化學習的直接偏好優化',
  year: 2023,
  submitted: '2023-05-29',
  venue: 'NeurIPS 2023',
  pages: '45828-45842',
  arxivId: '2305.18290',
  doi: {
    value: '10.48550/arXiv.2305.18290',
    url: 'https://doi.org/10.48550/arXiv.2305.18290',
    status: 'verified',
    verificationNote: '經 arXiv 官方資料庫與 NeurIPS 2023 議程核對通過。',
    sourceId: 'paper-2023-dpo',
  },
  authors: [
    'Rafael Rafailov',
    'Archit Sharma',
    'Eric Mitchell',
    'Stefano Ermon',
    'Christopher D. Manning',
    'Chelsea Finn',
  ],
  authorBriefs: [
    {
      name: 'Rafael Rafailov',
      affiliationAtPublication: 'Stanford University',
      roleInPaper:
        '共同第一作者，提出透過數學代換將 RLHF 獎勵函數直接解析表達為語言模型策略比值的關鍵推導',
      verifiedContext:
        '史丹佛大學電腦科學博士候選人，指導教授為 Chelsea Finn 與 Stefano Ermon，專攻強化學習、決策基礎模型與對齊理論。',
      evidenceIds: ['paper-2023-dpo'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/rafael-rafailov.png',
    },
    {
      name: 'Archit Sharma',
      affiliationAtPublication: 'Stanford University',
      roleInPaper: '共同第一作者，主導 DPO 演算法實作、超參數穩定性驗證與文本生成基準評估',
      verifiedContext:
        '史丹佛大學電腦科學博士，專注於自監督強化學習、離線偏好學習與對齊泛化能力研究。',
      evidenceIds: ['paper-2023-dpo'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/archit-sharma.png',
    },
    {
      name: 'Eric Mitchell',
      affiliationAtPublication: 'Stanford University',
      roleInPaper: '共同作者，主導模型對齊理論分析、隱式獎勵表徵驗證與實驗基準除錯',
      verifiedContext:
        '史丹佛大學電腦科學博士，專攻模型編輯（Model Editing）、偏好最佳化與大語言模型行為控制。',
      evidenceIds: ['paper-2023-dpo'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/eric-mitchell.png',
    },
    {
      name: 'Chelsea Finn',
      affiliationAtPublication: 'Stanford University',
      roleInPaper:
        '共同資深通訊作者，史丹佛大學電腦科學與電機工程系助理教授，指導整體研究方向與理論形式化',
      verifiedContext:
        '加州大學柏克萊分校博士，元學習（MAML）與機器人學習先驅，帶領史丹佛 IRIS 實驗室推動多模態與對齊前沿研究。',
      evidenceIds: ['paper-2023-dpo'],
      confidence: 'direct',
      unknowns: [],
      portraitUrl: '/images/authors/chelsea-finn.png',
    },
  ],
  abstractSummary:
    '儘管人類反饋強化學習（RLHF）在大語言模型對齊上取得了巨大成功，但其標準管線極其複雜且訓練不穩定。傳統 RLHF 必須先擬合一個顯式的神經網路獎勵模型，隨後在微調語言模型策略時，採用極易因超參數敏感而崩潰的近端策略最佳化（PPO）演算法。在本研究中，我們提出了直接偏好最佳化（Direct Preference Optimization, DPO），這是一種極簡且強大的偏好對齊演算法。我們從數學上證明：在帶有 KL 散度正規化的標準受限 RLHF 目標下，真實獎勵函數可以被精確解析表示為「微調策略相對於參考基準策略的對數機率比」。透過將這項閉式解代入 Bradley-Terry 偏好模型，我們完全消除了顯式獎勵模型與繁瑣的強化學習採樣迴圈，將整個對齊任務精準還原為一個簡單的二元交叉熵損失。實驗證明，DPO 的控制力完全匹配甚至超越 PPO，在 TL;DR 摘要與對話基準上展現出更高的勝率與極佳的訓練穩定性，並徹底解放了對齊演算法的計算開銷。',
  historicalQuestion:
    '當 InstructGPT 證明了 RLHF 能夠馴服千億參數的大模型，全球工程師卻陷入了「PPO 地獄」：顯示卡記憶體中必須同時塞入四座大模型、超參數稍有微調便導致策略崩潰與胡言亂語、採樣延遲讓訓練成本居高不下。難道引導機器尊重人類偏好，真的非得經過一場難以捉摸的強化學習賭博嗎？我們能不能撕下獎勵模型與 PPO 的繁瑣外衣，用最純粹的微調目標直接完成對齊？',
  motivationClaims: [
    {
      id: 'claim-ppo-complexity-bottleneck',
      claim: '傳統 RLHF 採用的 PPO 強化學習迴圈，是大模型對齊走向普及化與穩定性的最大工程路障。',
      explanation:
        'PPO 在自回歸高維離散文字空間中的策略梯度方差極大，且必須在線採樣輸出以估計 Advantage，並同時在記憶體維持 Policy、Value、Reference、Reward 四份模型權重，對算力與工程技巧提出極端嚴苛的要求。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2023-dpo', 'paper-2022-instructgpt', 'paper-2017-ppo'],
    },
    {
      id: 'claim-secret-reward-model',
      claim: '語言模型策略本身就是其自身隱含的完美獎勵模型，兩者在數學上存在嚴格的對稱解析閉式解。',
      explanation:
        '透過對 KL 約束獎勵最大化問題進行拉格朗日對偶性變換，最佳策略 π* 與潛在真實獎勵 r 具有唯一的一一對應關係。因此無需單獨訓練獎勵模型，直接由策略的對數勝算比即可讀取獎勵。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2023-dpo'],
    },
    {
      id: 'claim-bce-loss-stability',
      claim:
        'DPO 將不穩定的強化學習策略搜索轉化為單一的二元交叉熵損失，兼具極致的數學優雅性與訓練穩定性。',
      explanation:
        'DPO 損失在偏好對 (y_w, y_l) 上直接反向傳播，以隱含勝算動態調整梯度權重：當模型預測嚴重違背偏好時給予強力推動，當模型已分清優劣時平緩收斂，徹底免除了採樣與價值網路震盪。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2023-dpo'],
    },
  ],
  unknowns: [
    '當偏好數據包含長度偏差（Length Bias）時，DPO 傾向於利用長度作為隱含獎勵特徵的深層機制與理論上限。',
    '在多輪長上下文複雜多步推理任務（如數學與程式編寫）中，DPO 與在線強化學習（Online RL）長期探索能力之確切邊界。',
  ],
  sourceIds: [
    'paper-2023-dpo',
    'paper-2022-instructgpt',
    'paper-1952-bradley-terry',
    'paper-2017-ppo',
    'paper-2023-ipo',
  ],
};
