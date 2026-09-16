import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const pages = [
  {
    path: 'src/pages/index.astro',
    required: ['grid-cols-1', 'lg:grid-cols-', 'w-[calc(100%-2rem)]', 'max-w-[1120px]'],
  },
  {
    path: 'src/pages/papers/attention-is-all-you-need.astro',
    required: ['grid-cols-1', 'md:grid-cols-', 'w-[calc(100%-2rem)]', 'max-w-[1120px]'],
  },
];
const failures = [];

for (const page of pages) {
  const source = readFileSync(join(process.cwd(), page.path), 'utf8');
  for (const token of page.required) {
    if (!source.includes(token)) {
      failures.push(`${page.path}: required responsive utility “${token}” is missing`);
    }
  }
  if (/(?:^|\s)w-\[[0-9]+px\](?=\s|["'`])/.test(source)) {
    failures.push(
      `${page.path}: fixed-width utility found; use a fluid width with max-width instead`,
    );
  }
}

if (failures.length > 0) {
  console.error('Responsive layout check failed');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Responsive layout check passed for ${pages.length} source pages.`);
}
