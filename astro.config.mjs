import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://llm-field-notes.local',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'directory',
  },
});
