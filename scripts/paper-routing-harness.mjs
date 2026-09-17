import { readdirSync, readFileSync } from 'node:fs';
import { join, basename } from 'node:path';

// Canonical title slug generator
/** @param {string} title */
export function slugifyPaperTitle(title) {
  return title
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const rootDir = process.cwd();
const pagesDir = join(rootDir, 'src/pages/papers');
const contentDir = join(rootDir, 'src/content/papers');
const milestonesFile = join(contentDir, 'milestones.ts');

const failures = [];

// 1. Read milestones.ts to extract all papers
const milestonesContent = readFileSync(milestonesFile, 'utf8');

// Parse papers from milestones.ts
const paperBlockRegex =
  /\{[\s\S]*?id:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?url:\s*'([^']+)'[\s\S]*?\}/g;
const papers = [];
let match;
while ((match = paperBlockRegex.exec(milestonesContent)) !== null) {
  papers.push({
    id: match[1],
    title: match[2],
    url: match[3],
  });
}

if (papers.length === 0) {
  failures.push('Failed to parse any papers from src/content/papers/milestones.ts');
}

const canonicalSlugs = new Set();
const titleMap = new Map();

for (const paper of papers) {
  const expectedSlug = slugifyPaperTitle(paper.title);
  canonicalSlugs.add(expectedSlug);
  titleMap.set(expectedSlug, paper.title);

  // Check 1: Milestone ID must match paper title slug
  if (paper.id !== expectedSlug) {
    failures.push(
      `[milestones.ts] Paper "${paper.title}" has invalid id "${paper.id}". Must strictly match title slug: "${expectedSlug}"`,
    );
  }

  // Check 2: Milestone URL must match /papers/${expectedSlug}
  const expectedUrl = `/papers/${expectedSlug}`;
  if (paper.url !== expectedUrl) {
    failures.push(
      `[milestones.ts] Paper "${paper.title}" has invalid url "${paper.url}". Must strictly match: "${expectedUrl}"`,
    );
  }
}

// Check 3: Standalone paper page files under src/pages/papers/
const pageFiles = readdirSync(pagesDir).filter(
  (file) => file.endsWith('.astro') && file !== '[slug].astro',
);

for (const file of pageFiles) {
  const pageSlug = basename(file, '.astro');
  if (!canonicalSlugs.has(pageSlug)) {
    failures.push(
      `[src/pages/papers/${file}] Illegal paper page filename! Standalone paper page files MUST be named after the canonical paper title slug.\n` +
        `  Observed: "${file}"\n` +
        `  Allowed slugs based on paper titles:\n    - ` +
        Array.from(canonicalSlugs).join('\n    - '),
    );
  }
}

// Check 4: Content files under src/content/papers/
const contentFiles = readdirSync(contentDir).filter(
  (file) => file.endsWith('.ts') && file !== 'paper-schema.ts' && file !== 'milestones.ts',
);

for (const file of contentFiles) {
  const contentSlug = basename(file, '.ts');
  if (!canonicalSlugs.has(contentSlug)) {
    failures.push(
      `[src/content/papers/${file}] Illegal content filename! Paper content files MUST be named after the canonical paper title slug.\n` +
        `  Observed: "${file}"\n` +
        `  Allowed slugs based on paper titles:\n    - ` +
        Array.from(canonicalSlugs).join('\n    - '),
    );
  }
}

// Check 5: Disallow legacy shorthand nicknames across all paper pages and navigation
const forbiddenShortSlugs = [
  'gpt-1',
  'gpt-2',
  'gpt-3',
  'bert',
  'chinchilla',
  'instructgpt',
  'llama',
  'dpo',
  'vit',
  'clip',
  'latent-diffusion',
  'llava',
  'var',
];

const filesToScanForDeadLinks = [
  'src/components/SiteHeader.astro',
  'src/pages/papers/attention-is-all-you-need.astro',
  'src/pages/papers/improving-language-understanding-by-generative-pre-training.astro',
];

for (const relPath of filesToScanForDeadLinks) {
  const fullPath = join(rootDir, relPath);
  try {
    const text = readFileSync(fullPath, 'utf8');
    for (const shortSlug of forbiddenShortSlugs) {
      const forbiddenPattern = new RegExp(`href=["']\\/papers\\/${shortSlug}["']`, 'g');
      if (forbiddenPattern.test(text)) {
        failures.push(
          `[${relPath}] Contains obsolete shorthand link to "/papers/${shortSlug}". Must use canonical paper title slug.`,
        );
      }
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    failures.push(`Failed to read file ${relPath}: ${message}`);
  }
}

if (failures.length > 0) {
  console.error('\n❌ PAPER ROUTING & FILENAME HARNESS CHECK FAILED:');
  for (const failure of failures) {
    console.error(`  - ${failure}`);
  }
  process.exit(1);
} else {
  console.log(
    `\n✅ Paper routing and filename harness passed: verified ${papers.length} milestones, ${pageFiles.length} page files, and ${contentFiles.length} content files against canonical paper title slugs.`,
  );
}
