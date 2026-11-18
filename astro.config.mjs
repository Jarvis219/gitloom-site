import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://jarvis219.github.io/gitloom-site/
export default defineConfig({
  site: 'https://jarvis219.github.io',
  base: '/gitloom-site',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
