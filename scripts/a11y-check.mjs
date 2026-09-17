import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const pages = [
  'dist/index.html',
  'dist/papers/attention-is-all-you-need/index.html',
  'dist/papers/a-mathematical-theory-of-communication/index.html',
  'dist/papers/improving-language-understanding-by-generative-pre-training/index.html',
  'dist/papers/bert-pre-training-of-deep-bidirectional-transformers-for-language-understanding/index.html',
  'dist/papers/language-models-are-unsupervised-multitask-learners/index.html',
  'dist/papers/scaling-laws-for-neural-language-models/index.html',
];
/** @type {string[]} */
const failures = [];

/** @param {string} value */
const stripTags = (value) =>
  value
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

for (const relativePath of pages) {
  const filePath = join(process.cwd(), relativePath);
  const html = readFileSync(filePath, 'utf8');
  const pageName = relativePath.replace(/^dist\//, '');
  /** @param {string} message */
  const fail = (message) => failures.push(`${pageName}: ${message}`);

  if (!/<html\b[^>]*\blang="zh-Hant"/i.test(html)) {
    fail('document language must be zh-Hant');
  }
  if (!/<main\b[^>]*\bid="main-content"/i.test(html)) {
    fail('main landmark is missing');
  }

  const headings = [...html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
  if (headings[0] !== 1) {
    fail('first heading must be h1');
  }
  headings.slice(1).forEach((level, index) => {
    if (level - headings[index] > 1) {
      fail(`heading level jumps from h${headings[index]} to h${level}`);
    }
  });

  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const attributes = match[1];
    const text = stripTags(match[2]);
    const ariaLabel = attributes.match(/\baria-label="([^"]+)"/i)?.[1]?.trim();
    if (!text && !ariaLabel) {
      fail('link has no accessible name');
    }
  }

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\balt="[^"]*"/i.test(match[1])) {
      fail('image is missing alt text');
    }
  }

  if (
    /<figure\b[^>]*\brole="img"/i.test(html) &&
    !/<figure\b[^>]*\baria-labelledby="[^"]+"/i.test(html)
  ) {
    fail('diagram figure is missing an accessible name');
  }
  if (!/<ol\b[^>]*\btabindex="0"[^>]*\baria-label="[^"]+"/i.test(html)) {
    fail('story rail must expose a keyboard-scroll entry point and accessible name');
  }
}

if (failures.length > 0) {
  console.error('Accessibility check failed');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Accessibility check passed for ${pages.length} production pages.`);
}
