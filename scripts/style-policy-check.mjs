import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const sourceRoot = join(process.cwd(), 'src');
const forbiddenClassNames = new Set([
  'page-shell',
  'site-header',
  'site-footer',
  'paper-meta',
  'story-rail',
  'paper-hero',
  'paper-page',
  'hero-grid',
  'hero-index',
  'method-note',
  'source-card',
]);
const failures = [];

/** @param {string} directory @returns {string[]} */
const filesIn = (directory) =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? filesIn(path) : [path];
  });

for (const filePath of filesIn(sourceRoot)) {
  if (!filePath.endsWith('.astro') && !filePath.endsWith('.css')) continue;
  const source = readFileSync(filePath, 'utf8');
  const relativePath = filePath.replace(`${process.cwd()}/`, '');

  for (const match of source.matchAll(/class(?:\s*:\s*list)?\s*=\s*["']([^"']+)["']/g)) {
    for (const token of match[1].split(/\s+/).filter(Boolean)) {
      if (forbiddenClassNames.has(token)) {
        failures.push(`${relativePath}: custom class “${token}” is not allowed`);
      }
    }
  }

  if (filePath.endsWith('.css')) {
    for (const match of source.matchAll(/^\s*\.([A-Za-z][\w-]*)/gm)) {
      failures.push(`${relativePath}: custom CSS selector “.${match[1]}” is not allowed`);
    }
  }
}

if (failures.length > 0) {
  console.error('Tailwind style policy failed');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(
    'Tailwind style policy passed: no legacy custom classes or CSS class selectors found.',
  );
}
