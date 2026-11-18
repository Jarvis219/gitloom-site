import { locales, type Locale } from './locales';

/** "/docs/" in a language: "/docs/" for English, "/vi/docs/" for Vietnamese. */
export const lp = (l: Locale, path: string) => (l.path ? `/${l.path}${path}` : path);

/** Non-English locales, for getStaticPaths of the /[lang]/… routes. */
export const otherLocales = () => locales.slice(1).map((l) => ({ params: { lang: l.path }, props: { locale: l } }));


/** Replace {name} tokens. */
export const fmt = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));

export const formatDate = (iso: string, l: Locale) =>
  new Date(iso.length === 10 ? `${iso}T00:00:00Z` : iso).toLocaleDateString(l.hreflang, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
