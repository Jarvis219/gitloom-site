// Docs articles, written from the app's user guide (docs/user in the app repo).
// English: src/content/docs/<slug>.md · other languages: src/content/docs/<locale code>/<slug>.md.
// A missing translation falls back to the English article.
import type { Locale } from '../i18n/locales';
import { lp } from '../i18n/paths';

interface Frontmatter { title: string; group: string; order: number; summary: string; updated: string }
interface MdModule {
  frontmatter: Frontmatter;
  compiledContent: () => string | Promise<string>;
  getHeadings: () => { depth: number; slug: string; text: string }[];
}

export const groups = ['Getting started', 'Everyday work', 'History', 'Tools', 'Accounts & hosting', 'AI', 'Personalise', 'Help'];
export const groupId = (g: string) => g.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export interface Doc extends Frontmatter {
  slug: string;
  url: string;
  translated: boolean;
  headings: { slug: string; text: string }[];
  html: (labels: Labels) => Promise<string>;
}
export interface Labels { note: string; caution: string; copy: string; copyCode: string }

const modules = import.meta.glob<MdModule>('../content/docs/**/*.md', { eager: true });

function load(m: MdModule, slug: string, url: string, translated: boolean, base?: Frontmatter): Doc {
  const u = m.frontmatter.updated as unknown;   // YAML reads 2026-11-18 as a Date
  return {
    ...m.frontmatter,
    group: base?.group ?? m.frontmatter.group,   // groups and order always come from English
    order: base?.order ?? m.frontmatter.order,
    updated: (u instanceof Date ? u.toISOString() : String(u)).slice(0, 10),
    slug,
    url,
    translated,
    headings: m.getHeadings().filter((h) => h.depth === 2).map(({ slug, text }) => ({ slug, text })),
    html: async (labels) => enhance(await m.compiledContent(), labels),
  };
}

const english = Object.entries(modules)
  .filter(([file]) => /\/docs\/[^/]+\.md$/.test(file))
  .map(([file, m]) => ({ slug: file.split('/').pop()!.replace(/\.md$/, ''), m }))
  .sort((a, b) => a.m.frontmatter.order - b.m.frontmatter.order);

const cache = new Map<string, Doc[]>();
export function docsFor(l: Locale): Doc[] {
  if (cache.has(l.code)) return cache.get(l.code)!;
  const list = english.map(({ slug, m }) => {
    const url = lp(l, `/docs/${slug}/`);
    const tr = l.code === 'en' ? undefined : modules[`../content/docs/${l.code}/${slug}.md`];
    return tr ? load(tr, slug, url, true, m.frontmatter) : load(m, slug, url, l.code === 'en');
  });
  cache.set(l.code, list);
  return list;
}

export const byGroupFor = (l: Locale) => {
  const docs = docsFor(l);
  return groups.map((g) => ({ group: g, id: groupId(g), items: docs.filter((d) => d.group === g) })).filter((g) => g.items.length);
};

const icons = {
  note: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10" cy="10" r="8"></circle><path d="M10 9v5M10 6.2v.1" stroke-linecap="round"></path></svg>',
  caution: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M10 2.8l8 14H2z" stroke-linejoin="round"></path><path d="M10 8v4.2M10 14.6v.1" stroke-linecap="round"></path></svg>',
};

/** Callouts, light/dark screenshots, copy buttons and scrolling tables. */
export function enhance(html: string, labels: Labels): string {
  // > **Note** … / > **Caution** … (the keyword stays English in every language) → callout with a text label.
  html = html.replace(/<blockquote>\s*<p><strong>(Note|Caution)<\/strong>:?\s*([\s\S]*?)<\/blockquote>/g, (_, kind: string, body: string) => {
    const k = kind.toLowerCase() as 'note' | 'caution';
    return `<aside class="callout${k === 'caution' ? ' warn' : ''}" role="note">${icons[k]}<div><p class="ct">${labels[k]}</p><p>${body.trim()}</div></aside>`;
  });
  html = html.replace(/<p><img src="\/shots\/([a-z]+)-light\.png" alt="([^"]*)"\s*\/?><\/p>/g, (_, name: string, alt: string) =>
    `<figure class="win"><div class="shot"><picture><source media="(prefers-color-scheme: dark)" srcset="/shots/${name}-dark.png" /><img src="/shots/${name}-light.png" alt="${alt}" width="1256" height="795" loading="lazy" /></picture></div></figure>`);
  html = html.replace(/<pre([^>]*)>([\s\S]*?)<\/pre>/g, (_, attrs: string, inner: string) =>
    `<div class="code" dir="ltr"><pre${attrs}>${inner}</pre><button class="copybtn" type="button" data-copy-from="pre" aria-label="${labels.copyCode}">${labels.copy}</button></div>`);
  html = html.replace(/<table>/g, '<div class="tblw"><table class="tbl">').replace(/<\/table>/g, '</table></div>');
  return html;
}

/** Plain text of an article for the search index. */
export const plain = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
