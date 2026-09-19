const basePath = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Prefix an internal URL path with the configured base path for GitHub Pages deployment.
 * Leaves absolute URLs, protocol-relative URLs, and hashes untouched.
 */
export function withBase(path: string): string {
  if (!path) return basePath || '/';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('#') ||
    path.startsWith('mailto:')
  ) {
    return path;
  }
  if (path.startsWith('/#')) {
    return `${basePath || ''}${path}`;
  }
  const relativePath = path.replace(/^\/+/, '');
  return relativePath ? `${basePath}/${relativePath}` : `${basePath}/`;
}
