import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const rootDir = process.cwd();
const srcDir = join(rootDir, 'src');

/**
 * 1. Prohibited mainland / transliterated terminology:
 * [badTerm, suggestion, regex]
 */
const prohibitedTerms = [
  {
    term: '香農',
    suggestion: 'Shannon（英文原名，嚴禁音譯）',
    pattern: /香農/g,
  },
  {
    term: '夏農',
    suggestion: 'Shannon（英文原名，嚴禁音譯）',
    pattern: /夏農/g,
  },
  {
    term: '向農',
    suggestion: 'Shannon（英文原名，嚴禁音譯）',
    pattern: /向農/g,
  },
  {
    term: '範式',
    suggestion: '典範（台灣學術標準譯名）',
    pattern: /範式/g,
  },
  {
    term: '瓦斯瓦尼',
    suggestion: 'Vaswani（外國人名嚴禁音譯）',
    pattern: /瓦斯瓦尼/g,
  },
  {
    term: '卡普蘭',
    suggestion: 'Kaplan（外國人名嚴禁音譯）',
    pattern: /卡普蘭/g,
  },
  {
    term: '雷德福',
    suggestion: 'Radford（外國人名嚴禁音譯）',
    pattern: /雷德福/g,
  },
  {
    term: '蘇茨克維',
    suggestion: 'Sutskever（外國人名嚴禁音譯）',
    pattern: /蘇茨克維/g,
  },
  {
    term: '阿莫迪',
    suggestion: 'Amodei（外國人名嚴禁音譯）',
    pattern: /阿莫迪/g,
  },
  {
    term: '戴夫林',
    suggestion: 'Devlin（外國人名嚴禁音譯）',
    pattern: /戴夫林/g,
  },
  {
    term: '魯棒',
    suggestion: '強健（Robust / Robustness）',
    pattern: /魯棒/g,
  },
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
    `✅ Editorial policy check passed: verified ${targetFiles.length} files. Zero prohibited transliterations, zero leaky ASCII math expressions.`,
  );
}
