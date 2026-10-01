import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://giorgiovanini.eu',
  output: 'static',
  // Keep Astro 5/6 HTML-aware whitespace handling (Astro 7 defaults to 'jsx',
  // which can glue adjacent inline elements like "... at <a>jojo.news</a>")
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
