import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://giorgiovanini.eu',
  output: 'static',
  build: {
    format: 'directory',
  },
});
