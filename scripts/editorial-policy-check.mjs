import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const rootDir = process.cwd();
const srcDir = join(rootDir, 'src');

/**
 * 1. Prohibited mainland / transliterated terminology:
 * [badTerm, suggestion, regex]
 */
const prohibitedTerms = [
  // 1. Foreign person names transliterations (strict English original required)
  { term: '香農', suggestion: 'Shannon（英文原名，嚴禁音譯）', pattern: /香農/g },
  { term: '夏農', suggestion: 'Shannon（英文原名，嚴禁音譯）', pattern: /夏農/g },
  { term: '向農', suggestion: 'Shannon（英文原名，嚴禁音譯）', pattern: /向農/g },
  { term: '瓦斯瓦尼', suggestion: 'Vaswani（外國人名嚴禁音譯）', pattern: /瓦斯瓦尼/g },
  { term: '卡普蘭', suggestion: 'Kaplan（外國人名嚴禁音譯）', pattern: /卡普蘭/g },
  { term: '雷德福', suggestion: 'Radford（外國人名嚴禁音譯）', pattern: /雷德福/g },
  { term: '蘇茨克維', suggestion: 'Sutskever（外國人名嚴禁音譯）', pattern: /蘇茨克維/g },
  { term: '阿莫迪', suggestion: 'Amodei（外國人名嚴禁音譯）', pattern: /阿莫迪/g },
  { term: '戴夫林', suggestion: 'Devlin（外國人名嚴禁音譯）', pattern: /戴夫林/g },
  { term: '奈奎斯特', suggestion: 'Nyquist（外國人名嚴禁音譯）', pattern: /奈奎斯特/g },
  { term: '哈特萊', suggestion: 'Hartley（外國人名嚴禁音譯）', pattern: /哈特萊/g },
  { term: '多索維茨基', suggestion: 'Dosovitskiy（外國人名嚴禁音譯）', pattern: /多索維茨基/g },
  { term: '霍夫曼', suggestion: 'Hoffmann（外國人名嚴禁音譯）', pattern: /霍夫曼/g },
  { term: '圖夫隆', suggestion: 'Touvron（外國人名嚴禁音譯）', pattern: /圖夫隆/g },
  { term: '托夫龍', suggestion: 'Touvron（外國人名嚴禁音譯）', pattern: /托夫龍/g },
  { term: '拉法伊洛夫', suggestion: 'Rafailov（外國人名嚴禁音譯）', pattern: /拉法伊洛夫/g },
  { term: '舒爾曼', suggestion: 'Schulman（外國人名嚴禁音譯）', pattern: /舒爾曼/g },

  // 2. Machine Learning & Artificial Intelligence
  { term: '範式', suggestion: '典範（Paradigm，台灣學術標準譯名）', pattern: /範式/g },
  { term: '魯棒', suggestion: '強健（Robust / Robustness，台灣學術標準譯名）', pattern: /魯棒/g },
  { term: '數據集', suggestion: '資料集（Dataset，台灣標準譯名）', pattern: /數據集/g },
  { term: '數據庫', suggestion: '資料庫（Database，台灣標準譯名）', pattern: /數據庫/g },
  { term: '數據中心', suggestion: '資料中心（Data Center，台灣標準譯名）', pattern: /數據中心/g },
  {
    term: '數據結構',
    suggestion: '資料結構（Data Structure，台灣標準譯名）',
    pattern: /數據結構/g,
  },
  { term: '訓練數據', suggestion: '訓練資料（Training Data，台灣標準譯名）', pattern: /訓練數據/g },
  {
    term: '實驗數據',
    suggestion: '實驗資料（Experimental Data，台灣標準譯名）',
    pattern: /實驗數據/g,
  },
  {
    term: '神經網絡',
    suggestion: '神經網路（Neural Network，台灣標準譯名）',
    pattern: /神經網絡/g,
  },
  { term: '卷積網絡', suggestion: '卷積網路（CNN，台灣標準譯名）', pattern: /卷積網絡/g },
  { term: '深層網絡', suggestion: '深層網路（Deep Network，台灣標準譯名）', pattern: /深層網絡/g },
  {
    term: '歸納偏置',
    suggestion: '歸納偏向 / 歸納偏好（Inductive Bias，台灣標準譯名）',
    pattern: /歸納偏置/g,
  },
  { term: '過擬合', suggestion: '過度擬合（Overfitting，台灣標準譯名）', pattern: /過擬合/g },
  { term: '欠擬合', suggestion: '擬合不足（Underfitting，台灣標準譯名）', pattern: /欠擬合/g },
  { term: '正則化', suggestion: '正規化（Regularization，台灣標準譯名）', pattern: /正則化/g },
  {
    term: '歸一化',
    suggestion: '正規化 / 標準化（Normalization，台灣標準譯名）',
    pattern: /歸一化/g,
  },
  {
    term: '激活函數',
    suggestion: '激勵函數 / 活化函數（Activation Function，台灣標準譯名）',
    pattern: /激活函數/g,
  },
  { term: '激活值', suggestion: '活化值 / 激勵值（Activation Value）', pattern: /激活值/g },
  { term: '激活狀態', suggestion: '活化狀態', pattern: /激活狀態/g },
  { term: '特徵激活', suggestion: '特徵活化', pattern: /特徵激活/g },
  {
    term: '最優',
    suggestion: '最佳 / 最佳化（Optimal / Optimization，最優雅除外）',
    pattern: /最優(?!雅)/g,
  },
  { term: '優化器', suggestion: '最佳化器（Optimizer）', pattern: /優化器/g },
  { term: '優化目標', suggestion: '最佳化目標（Optimization Objective）', pattern: /優化目標/g },
  { term: '優化問題', suggestion: '最佳化問題（Optimization Problem）', pattern: /優化問題/g },
  { term: '步長', suggestion: '步幅（Stride） / 步伐', pattern: /(?:滑動|卷積|更新)?步長/g },
  { term: '條件概率', suggestion: '條件機率（Conditional Probability）', pattern: /條件概率/g },
  { term: '全局注意力', suggestion: '全域注意力（Global Attention）', pattern: /全局注意力/g },
  {
    term: '全局',
    suggestion: '全域（Global，如全域特徵、全域視野、全域最佳化）',
    pattern: /全局/g,
  },
  { term: '智能體', suggestion: '智慧代理（Intelligent Agent）', pattern: /智能體/g },
  { term: '人工智能', suggestion: '人工智慧（Artificial Intelligence）', pattern: /人工智能/g },
  { term: '位置信息', suggestion: '位置資訊（Positional Information）', pattern: /位置信息/g },
  { term: '動態信息', suggestion: '動態資訊', pattern: /動態信息/g },
  { term: '信息論', suggestion: '資訊理論（Information Theory）', pattern: /信息論/g },
  { term: '信息熵', suggestion: '資訊熵（Information Entropy）', pattern: /信息熵/g },
  { term: '互信息', suggestion: '互資訊（Mutual Information）', pattern: /互信息/g },
  {
    term: '單獨「算法」',
    suggestion: '演算法（Algorithm，請補上「演」字）',
    pattern: /(?<!演)算法/g,
  },

  // 3. Hardware, Systems & Software
  { term: '顯存', suggestion: '視訊記憶體 / VRAM（Video RAM）', pattern: /顯存/g },
  { term: '顯卡', suggestion: '顯示卡（Graphics Card / GPU）', pattern: /顯卡/g },
  { term: '隊列', suggestion: '佇列（Queue，台灣資料結構標準譯名）', pattern: /隊列/g },
  { term: '標量', suggestion: '純量（Scalar，台灣標準譯名）', pattern: /標量/g },
  { term: '互聯網', suggestion: '網際網路 / 網路（Internet）', pattern: /互聯網/g },
  { term: '代碼生成', suggestion: '程式碼生成（Code Generation）', pattern: /代碼生成/g },
  {
    term: '代碼',
    suggestion: '程式碼（Code，除摩斯電碼外）',
    pattern: /(?:編寫|生成|合成|修復|複雜|爬蟲|原始)?代碼/g,
  },
  { term: '編程', suggestion: '程式設計 / 寫程式（Programming）', pattern: /(?:即時|進行)?編程/g },
  { term: '程序員', suggestion: '程式設計師 / 工程師（Programmer）', pattern: /程序員/g },
  { term: '未登錄詞', suggestion: '未收錄詞（OOV, Out-Of-Vocabulary）', pattern: /未登錄詞/g },
  {
    term: '質量（品質）',
    suggestion: '品質（Quality，除物理學「質量/機率質量」外）',
    pattern: /(?:低|高|數據|資料)質量/g,
  },

  // 4. Mainland Jargon & Buzzwords
  { term: '降維打擊', suggestion: '跨界顛覆 / 壓倒性打擊', pattern: /降維打擊/g },
  { term: '訓練閉環', suggestion: '閉迴路 / 完整的自監督訓練循環', pattern: /訓練閉環/g },
  { term: '文檔級別', suggestion: '文本層級 / 文件層級', pattern: /文檔級別/g },
  { term: '賦能', suggestion: '賦予能力 / 支援 / 促成', pattern: /賦能/g },
  { term: '抓手', suggestion: '著力點 / 切入點', pattern: /抓手/g },
  { term: '顆粒度', suggestion: '精細度 / 細緻度', pattern: /顆粒度/g },
  { term: '彎道超車', suggestion: '後發先至 / 突破', pattern: /彎道超車/g },
  { term: '脫敏', suggestion: '去識別化（De-identification）', pattern: /脫敏/g },
];

/**
 * 2. Prohibited raw ASCII math approximations in reader-facing prose/SVG:
 * e.g., L_inf, W_y, B_crit, d_k outside of code blocks/import statements.
 */
const prohibitedMathPatterns = [
  {
    name: 'L_inf',
    suggestion: 'L_∞ 或 MathML <msub><mi>L</mi><mi>∞</mi></msub> / HTML L<sub>∞</sub>',
    pattern: /\bL_inf\b/g,
  },
  {
    name: 'ASCII subscript with underscore in prose (e.g. W_y, B_crit)',
    suggestion: 'MathML <msub> 或 HTML <sub>',
    pattern: /(?:[\u4e00-\u9fa5]|[\s（(])[A-Z]_[a-z0-9]+(?:[\u4e00-\u9fa5]|[\s）)])/g,
  },
];

/**
 * @param {string} dir
 * @param {string[]} exts
 * @returns {string[]}
 */
function getAllFiles(dir, exts) {
  /** @type {string[]} */
  const files = [];
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath, exts));
    } else if (exts.includes(extname(fullPath))) {
      files.push(fullPath);
    }
  }
  return files;
}

const targetFiles = getAllFiles(srcDir, ['.astro', '.ts']);
/** @type {string[]} */
const failures = [];

for (const filePath of targetFiles) {
  const relPath = filePath.replace(rootDir + '/', '');
  const content = readFileSync(filePath, 'utf8');

  // Strip code blocks and script imports from math check to avoid false positives on variable names
  const proseLines = content.split('\n');

  proseLines.forEach((line, index) => {
    const lineNum = index + 1;

    // Check 1: Prohibited terms
    for (const item of prohibitedTerms) {
      if (item.pattern.test(line)) {
        failures.push(
          `[${relPath}:${lineNum}] 發現禁用詞彙「${item.term}」！建議修正為：「${item.suggestion}」\n  行內容：${line.trim()}`,
        );
      }
      // reset lastIndex for global regex
      item.pattern.lastIndex = 0;
    }

    // Check 2: Raw ASCII math notation leaks (only on lines that look like prose / svg / titles)
    if (
      !line.trim().startsWith('import ') &&
      !line.trim().startsWith('//') &&
      !line.trim().startsWith('*') &&
      !line.includes('class=') &&
      !line.includes('id:') &&
      !line.includes('type:')
    ) {
      for (const mathItem of prohibitedMathPatterns) {
        if (mathItem.pattern.test(line)) {
          failures.push(
            `[${relPath}:${lineNum}] 發現非正規數學表示式「${mathItem.name}」！請改用 ${mathItem.suggestion}\n  行內容：${line.trim()}`,
          );
        }
        mathItem.pattern.lastIndex = 0;
      }
    }

    // Check 3: Minimum readable font size policy (prohibit text-xs and text-[10-12px] on Chinese narrative prose)
    // Paragraphs <p>, lists <li>, or description terms/details with text-xs or text-[10-12px] must not be used for narrative prose.
    if (
      filePath.endsWith('.astro') &&
      !filePath.includes('/components/') &&
      (line.includes('text-xs') || /text-\[\s*1[0-2]px\s*\]/.test(line))
    ) {
      if (
        (/<p\b[^>]*class="[^"]*text-xs[^"]*"/.test(line) ||
          /<li\b[^>]*class="[^"]*text-xs[^"]*"/.test(line) ||
          /<dd\b[^>]*class="[^"]*text-xs[^"]*"/.test(line) ||
          /text-\[\s*1[0-2]px\s*\]/.test(line)) &&
        !line.includes('font-mono') &&
        !line.includes('uppercase') &&
        !line.includes('tracking-') &&
        !line.includes('font-bold text-red') &&
        !line.includes('font-bold text-blue') &&
        !line.includes('font-bold text-ink')
      ) {
        failures.push(
          `[${relPath}:${lineNum}] 違規使用過小字級（text-xs / 12px 以下）於閱讀內文！繁體中文內文段落最低應為 text-sm (14px) 或 text-base (16px)。\n  行內容：${line.trim()}`,
        );
      }
    }

    // Check 4: Strict flat narrative prose policy in paper chapters (DESIGN.md)
    // Prohibit arbitrary paragraph magnification (text-lg, text-xl, font-serif) on opening narrative paragraphs in paper chapters.
    if (filePath.includes('/src/pages/papers/') && !filePath.endsWith('[slug].astro')) {
      if (
        /<p\b[^>]*class="[^"]*(?:text-(?:lg|xl|2xl)\s+leading-relaxed\s+text-ink|leading-relaxed\s+text-ink\s+font-serif|text-lg\s+leading-relaxed\s+text-ink|font-display\s+text-2xl\s+text-ink|text-lg\s+leading-8\s+text-ink)[^"]*"/.test(
          line,
        )
      ) {
        failures.push(
          `[${relPath}:${lineNum}] 違規放大章節敘事段落！根據 DESIGN.md 嚴格扁平段落規範，所有正文敘事段落一律使用預設 <p>（繼承 text-base leading-8 text-ink），嚴禁任意套用 text-lg、font-serif 等放大樣式。\n  行內容：${line.trim()}`,
        );
      }
    }
  });
}

if (failures.length > 0) {
  console.error('\n❌ EDITORIAL POLICY CHECK FAILED:');
  for (const failure of failures) {
    console.error(`  - ${failure}`);
  }
  process.exit(1);
} else {
  console.log(
    `✅ Editorial policy check passed: verified ${targetFiles.length} files. Zero prohibited transliterations, zero leaky ASCII math expressions, zero unflat narrative paragraph magnifications.`,
  );
}
