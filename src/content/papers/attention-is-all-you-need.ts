import type { PaperRecord, SourceRecord } from '../paper-schema';

export const attentionSources: SourceRecord[] = [
  {
    id: 'paper-2017-arxiv',
    kind: 'paper',
    title: 'Attention Is All You Need',
    publisher: 'arXiv / DataCite',
    published: '2017-06-12',
    accessed: '2026-09-12',
    url: 'https://arxiv.org/abs/1706.03762',
    supports: [
      '論文 metadata、作者名單、提交日期，以及 arXiv 發出的 DOI',
      '翻譯任務、Transformer 提案、架構與實驗結果',
      '作者對平行化與訓練時間所提出的理由',
    ],
    limits: '論文交代了團隊做了什麼、量到了什麼；沒有交代每位作者如何走到這個想法的完整私下歷程。',
  },
  {
    id: 'paper-2014-seq2seq',
    kind: 'paper',
    title: 'Sequence to Sequence Learning with Neural Networks',
    publisher: 'arXiv / DataCite',
    published: '2014-09-10',
    accessed: '2026-09-13',
    url: 'https://arxiv.org/abs/1409.3215',
    supports: [
      'LSTM encoder 將可變長度的來源句子映射到固定維度向量，另一個 LSTM decoder 再從向量產生目標句子',
      'WMT 2014 English–French 的 BLEU 結果，以及把來源句子反轉後如何縮短輸入與輸出的依賴距離',
    ],
    limits:
      '論文展示固定向量 encoder–decoder 可以工作，也報告長句結果；它不是對所有長距離語言關係的普遍保證。',
  },
  {
    id: 'paper-2014-align-translate',
    kind: 'paper',
    title: 'Neural Machine Translation by Jointly Learning to Align and Translate',
    publisher: 'arXiv / DataCite',
    published: '2014-09-01',
    accessed: '2026-09-13',
    url: 'https://arxiv.org/abs/1409.0473',
    supports: [
      '作者明確指出固定長度向量是 basic encoder–decoder 的瓶頸',
      'decoder 產生每個目標詞時，對來源句子的 annotation vectors 做 soft search，並以權重形成當下的 context vector',
      '長句實驗與英法翻譯中的 soft alignment 分析',
    ],
    limits:
      '這個方法仍使用 bidirectional RNN encoder 與 recurrent decoder；它修補固定 context vector，沒有移除循序計算。',
  },
  {
    id: 'paper-2015-attention-nmt',
    kind: 'paper',
    title: 'Effective Approaches to Attention-based Neural Machine Translation',
    publisher: 'arXiv / DataCite',
    published: '2015-08-17',
    accessed: '2026-09-13',
    url: 'https://arxiv.org/abs/1508.04025',
    supports: [
      'global attention 與 local attention 如何選擇來源位置，以及兩者在 WMT English–German 任務上的比較',
      'attention 可以改善長句翻譯，但模型仍是 stacking recurrent architecture，decoder 仍逐詞產生輸出',
    ],
    limits:
      '論文比較的是 recurrent attention architectures，不是以 self-attention 完全取代 recurrence 的 Transformer。',
  },
  {
    id: 'google-uszkoreit-2017',
    kind: 'authorial-account',
    title: 'Transformer: A Novel Neural Network Architecture for Language Understanding',
    publisher: 'Google Research Blog / Jakob Uszkoreit',
    published: '2017-08-31',
    accessed: '2026-09-12',
    url: 'https://research.google/blog/transformer-a-novel-neural-network-architecture-for-language-understanding/',
    supports: [
      '同期對長串循環決策為何困難的說明',
      '作者當時認為 self-attention 適合 language understanding 的理由',
      '把 Transformer 放在 recurrent 與 convolutional sequence model 之間比較的說法',
    ],
    limits: '這是一位作者寫的短篇機構文章，不是全組設計會議的逐字紀錄。',
  },
  {
    id: 'gomez-time-2023',
    kind: 'interview',
    title: 'Aidan Gomez',
    publisher: 'TIME',
    published: '2023-09-07',
    accessed: '2026-09-12',
    url: 'https://qa.time.com/6310653/aidan-gomez/',
    supports: [
      'Gomez 在論文時期的年齡與 Google 實習背景',
      '他後來提到團隊當時專注於把翻譯做好',
      '他說作者當時沒有預見這項工作的後來影響',
    ],
    limits: '一位共同作者後來的回憶，不能代替八位作者的完整說法，也不能證明一條精確的起源故事。',
  },
  {
    id: 'gomez-ap-2024',
    kind: 'interview',
    title:
      'Tired of AI doomsday tropes, Cohere CEO says his goal is technology that’s additive to humanity',
    publisher: 'Associated Press',
    published: '2024-03-25',
    accessed: '2026-09-12',
    url: 'https://apnews.com/article/71d8618ccc5420aba19871d41eb81615',
    supports: [
      'Gomez 對 Transformer 如何跨多張晶片擴展的說明',
      '2017 年的翻譯問題與後來 large language model 之間的差別',
    ],
    limits: '這場訪談談的是後來的應用，無法確認每個元件最初由誰提出。',
  },
  {
    id: 'paper-review-record',
    kind: 'later-history',
    title: 'NeurIPS 2017 paper and review record',
    publisher: 'NeurIPS Proceedings',
    published: '2017',
    accessed: '2026-09-12',
    url: 'https://proceedings.neurips.cc/paper/7181-attention-is-all-you-need',
    supports: [
      '論文發表時的 conference context 與 review record',
      '論文原始發表情境與後來聲譽之間的差別',
    ],
    limits: 'review record 能說明評審如何看待論文，不能代替完整的思想源流。',
  },
];

export const attentionIsAllYouNeed: PaperRecord = {
  id: 'attention-is-all-you-need',
  researchStatus: 'research-draft',
  lastChecked: '2026-09-13',
  coverageNote:
    '這一版先說明架構與有資料支持的起源脈絡，還不是對 15 頁正文、圖表、附錄與引用前人工作的完整逐句註解。',
  title: 'Attention Is All You Need',
  chineseTitle: '注意力，就夠了',
  year: 2017,
  submitted: '2017-06-12',
  venue: 'NeurIPS 2017',
  pages: '5998–6008',
  arxivId: '1706.03762',
  doi: {
    value: '10.48550/arXiv.1706.03762',
    url: 'https://doi.org/10.48550/arXiv.1706.03762',
    status: 'verified',
    verificationNote:
      'The arXiv record explicitly labels this as an arXiv-issued DOI via DataCite. A publisher DOI is not asserted here.',
    sourceId: 'paper-2017-arxiv',
  },
  authors: [
    'Ashish Vaswani',
    'Noam Shazeer',
    'Niki Parmar',
    'Jakob Uszkoreit',
    'Llion Jones',
    'Aidan N. Gomez',
    'Łukasz Kaiser',
    'Illia Polosukhin',
  ],
  authorBriefs: [
    {
      name: 'Ashish Vaswani',
      affiliationAtPublication: 'Google Brain',
      roleInPaper: '第一作者；共同開發並評估 Transformer。',
      verifiedContext: '論文將 Vaswani 列為第一作者，所屬機構是 Google Brain。',
      evidenceIds: ['paper-2017-arxiv'],
      confidence: 'direct',
      unknowns: ['目前沒有查到他本人說明如何走到這個架構的可靠第一手資料。'],
    },
    {
      name: 'Noam Shazeer',
      affiliationAtPublication: 'Google Brain',
      roleInPaper: '共同作者，參與架構、attention mechanism 與實驗。',
      verifiedContext:
        '論文將 Shazeer 列在 Google Brain；單靠論文，無法把各元件的功勞分配給個別作者。',
      evidenceIds: ['paper-2017-arxiv'],
      confidence: 'direct',
      unknowns: ['沒有來源明確說明以前，不把任何一個元件歸給單一作者。'],
    },
    {
      name: 'Niki Parmar',
      affiliationAtPublication: 'Google Research',
      roleInPaper: '共同作者，參與架構與評估。',
      verifiedContext: '論文將 Parmar 列在 Google Research。',
      evidenceIds: ['paper-2017-arxiv'],
      confidence: 'direct',
      unknowns: ['完整 biography 與設計過程的第一手說法，仍需要其他來源。'],
    },
    {
      name: 'Jakob Uszkoreit',
      affiliationAtPublication: 'Google Research',
      roleInPaper: '共同作者；同期撰文解釋 Transformer。',
      verifiedContext:
        '他在 2017 年的 Google Research 文章說明 recurrent bottleneck，以及 self-attention 為何適合 language understanding。',
      evidenceIds: ['paper-2017-arxiv', 'google-uszkoreit-2017'],
      confidence: 'corroborated',
      unknowns: ['目前這篇文章沒有記錄完整的團隊討論，也沒有說明「Transformer」這個名字從何而來。'],
    },
    {
      name: 'Llion Jones',
      affiliationAtPublication: 'Google Research',
      roleInPaper: '共同作者；arXiv record 將 Jones 列為 v1 的提交者。',
      verifiedContext:
        '論文將 Jones 列在 Google Research，arXiv history 也在提交紀錄中列出他的名字。',
      evidenceIds: ['paper-2017-arxiv'],
      confidence: 'direct',
      unknowns: ['在找到可靠的公開來源前，不替他補寫個人設計故事。'],
    },
    {
      name: 'Aidan N. Gomez',
      affiliationAtPublication: 'University of Toronto；曾在 Google Brain 工作',
      roleInPaper: '共同作者；後來的公開訪談提供回顧。',
      verifiedContext:
        '論文列出 University of Toronto affiliation；TIME 報導 Gomez 當時 20 歲、是 Google 實習生，並引用他對團隊專注翻譯問題的回憶。',
      evidenceIds: ['paper-2017-arxiv', 'gomez-time-2023'],
      confidence: 'corroborated',
      unknowns: ['後來的個人回憶，無法確認每位合作者的精確貢獻。'],
    },
    {
      name: 'Łukasz Kaiser',
      affiliationAtPublication: 'Google Brain',
      roleInPaper: '共同作者，參與架構與評估。',
      verifiedContext: '論文將 Kaiser 列在 Google Brain。',
      evidenceIds: ['paper-2017-arxiv'],
      confidence: 'direct',
      unknowns: ['目前還沒有他本人談論過去工作與設計洞察的可靠第一手資料。'],
    },
    {
      name: 'Illia Polosukhin',
      affiliationAtPublication: '論文中的 independent affiliation',
      roleInPaper: '共同作者，參與架構與評估。',
      verifiedContext:
        '論文將 Polosukhin 列為 independent affiliation，而不是 Google 研究團隊的 affiliation。',
      evidenceIds: ['paper-2017-arxiv'],
      confidence: 'direct',
      unknowns: ['目前沒有查到他過去背景或設計角色的可靠公開說法。'],
    },
  ],
  abstractSummary:
    '這篇論文以 attention 建立 encoder–decoder 架構，取代 recurrent 與 convolutional 的序列處理，再用 machine translation 與 parsing 測試這個取捨。',
  historicalQuestion:
    '序列模型能不能連起相距很遠的 token，同時拿掉讓 recurrent system 訓練緩慢的循序計算？',
  motivationClaims: [
    {
      id: 'motivation-sequential-bottleneck',
      claim: '眼前的問題，是 recurrent sequence model 的循序瓶頸。',
      explanation:
        '論文指出 recurrent model 當時是主流，但下一個 state 依賴前一個 state，因此難以平行化。新的架構把 recurrence 與 convolution 從核心路徑拿掉。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2017-arxiv', 'google-uszkoreit-2017'],
    },
    {
      id: 'motivation-attention-as-context',
      claim: '作者保留 attention，因為它能直接連起不同位置。',
      explanation:
        '論文沿用已經使用 attention 的 encoder–decoder system，再讓 attention 從 recurrence 的配角變成主要運算。',
      status: 'documented',
      confidence: 'direct',
      evidenceIds: ['paper-2017-arxiv'],
    },
    {
      id: 'motivation-team-background',
      claim: 'Google 的翻譯研究環境，讓平行計算成為很實際的研究限制。',
      explanation:
        '這是根據論文的翻譯 benchmark、Google 的同期說明，以及 Gomez 後來的回憶所做的重建，不能當成某個單一「eureka moment」的證據。',
      status: 'inference',
      confidence: 'corroborated',
      evidenceIds: [
        'paper-2017-arxiv',
        'google-uszkoreit-2017',
        'gomez-time-2023',
        'gomez-ap-2024',
      ],
    },
    {
      id: 'motivation-unexpected-future',
      claim: '作者公開描述的起點是序列轉換與機器翻譯。',
      explanation:
        'Gomez 後來把原始任務描述成範圍明確的翻譯問題，也說作者當時不了解這個架構最後會變成什麼。後來的 LLM 血緣是結果，不是有文件支持的原始計畫。',
      status: 'documented',
      confidence: 'corroborated',
      evidenceIds: ['gomez-time-2023', 'gomez-ap-2024'],
    },
  ],
  unknowns: [
    '目前的來源無法確認，是哪位作者首先提議完全移除 recurrence。',
    '目前查到的公開資料，沒有留下內部實驗、爭論與被捨棄設計的完整順序。',
    '在找到第一手或清楚標註出處的來源前，不判定「Transformer」這個名字的由來。',
  ],
  sourceIds: attentionSources.map((source) => source.id),
};
