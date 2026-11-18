import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL (the production domain, without https://) at build time;
// SITE_URL overrides it (a custom domain set before Vercel knows it).
const site = process.env.SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://gitloom-site.vercel.app');

const sitemapLocales = {
  en: 'en', vi: 'vi', ja: 'ja', 'zh-hans': 'zh-Hans', 'zh-hant': 'zh-Hant', ko: 'ko', de: 'de', fr: 'fr',
  es: 'es', it: 'it', 'pt-br': 'pt-BR', ru: 'ru', uk: 'uk', pl: 'pl', tr: 'tr', ar: 'ar',
};

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  // Docs code blocks take the site's own colours, not a syntax theme.
  markdown: { syntaxHighlight: false },
  integrations: [sitemap({
    i18n: { defaultLocale: 'en', locales: sitemapLocales },
    filter: (page) => !/\/(404|search)\/?$/.test(new URL(page).pathname),
  })],
});
