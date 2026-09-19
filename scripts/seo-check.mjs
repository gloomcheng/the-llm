import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const rootDir = process.cwd();
const distDir = join(rootDir, 'dist');
const failures = [];

/**
 * @param {string} dir
 * @returns {string[]}
 */
function getHtmlFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...getHtmlFiles(full));
    else if (full.endsWith('.html')) files.push(full);
  }
  return files;
}

// 1. robots.txt must exist and point at the sitemap.
const robotsPath = join(distDir, 'robots.txt');
if (!existsSync(robotsPath)) {
  failures.push('dist/robots.txt missing');
} else {
  const robots = readFileSync(robotsPath, 'utf8');
  if (!robots.includes('https://gloomcheng.github.io/the-llm/sitemap.xml')) {
    failures.push('robots.txt does not reference the sitemap URL');
  }
}

// 2. Every sitemap <loc> must resolve to a built file.
const sitemapPath = join(distDir, 'sitemap.xml');
if (!existsSync(sitemapPath)) {
  failures.push('dist/sitemap.xml missing');
} else {
  const locs = [...readFileSync(sitemapPath, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (m) => m[1],
  );
  if (locs.length === 0) failures.push('sitemap.xml contains no <loc> entries');
  for (const loc of locs) {
    const u = new URL(loc);
    if (u.origin !== 'https://gloomcheng.github.io' || !u.pathname.startsWith('/the-llm')) {
      failures.push(`sitemap <loc> outside deployed scope: ${loc}`);
      continue;
    }
    const rel = u.pathname.replace(/^\/the-llm/, '').replace(/^\/+/, '');
    const disk = rel === '' ? join(distDir, 'index.html') : join(distDir, rel, 'index.html');
    if (!existsSync(disk)) failures.push(`sitemap <loc> has no built file: ${loc}`);
  }
}

// 3. Every page needs canonical + OG + JSON-LD; no root-absolute asset refs.
const htmlFiles = getHtmlFiles(distDir);
for (const file of htmlFiles) {
  const rel = file.replace(`${rootDir}/`, '');
  const html = readFileSync(file, 'utf8');
  if (html.includes('http-equiv="refresh"')) continue; // redirect stubs carry no metadata
  for (const needle of ['rel="canonical"', 'property="og:title"', 'application/ld+json']) {
    if (!html.includes(needle)) failures.push(`[${rel}] missing ${needle}`);
  }
  for (const bad of ['src="/images/', 'src="/fonts/', "url('/fonts/", 'url("/fonts/']) {
    if (html.includes(bad))
      failures.push(`[${rel}] root-absolute asset ref ${bad} breaks under /the-llm base`);
  }
}

// 4. Every portrait PNG source must ship a WebP derivative.
const authorsDir = join(rootDir, 'public', 'images', 'authors');
if (existsSync(authorsDir)) {
  for (const entry of readdirSync(authorsDir)) {
    if (!entry.endsWith('.png')) continue;
    const webp = join(authorsDir, entry.replace(/\.png$/, '.webp'));
    if (!existsSync(webp)) failures.push(`[images/authors/${entry}] missing WebP derivative`);
  }
}

// 5. Built CSS must not reference root-absolute font paths either.
for (const entry of readdirSync(join(distDir, '_astro'))) {
  if (!entry.endsWith('.css')) continue;
  const css = readFileSync(join(distDir, '_astro', entry), 'utf8');
  if (css.includes('/fonts/') && !css.includes('/the-llm/fonts/')) {
    failures.push(`[_astro/${entry}] font URL not rebased under /the-llm base`);
  }
}

if (failures.length > 0) {
  console.error('\nSEO CHECK FAILED:');
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
} else {
  console.log(
    `SEO check passed: robots+sitemap OK, ${htmlFiles.length} pages carry canonical/OG/JSON-LD, zero root-absolute asset refs.`,
  );
}
