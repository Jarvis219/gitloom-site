// Docs articles: src/content/docs/<slug>.md, written from the app's user guide (docs/user in the app repo).
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
  headings: { slug: string; text: string }[];
  html: () => Promise<string>;
}

const modules = import.meta.glob<MdModule>('../content/docs/*.md', { eager: true });

export const docs: Doc[] = Object.entries(modules)
  .map(([file, m]) => {
    const slug = file.split('/').pop()!.replace(/\.md$/, '');
    const u = m.frontmatter.updated as unknown;   // YAML reads 2026-11-18 as a Date
    return {
      ...m.frontmatter,
      updated: (u instanceof Date ? u.toISOString() : String(u)).slice(0, 10),
      slug,
      url: `/docs/${slug}/`,
      headings: m.getHeadings().filter((h) => h.depth === 2).map(({ slug, text }) => ({ slug, text })),
      html: async () => enhance(await m.compiledContent()),
    };
  })
  .sort((a, b) => a.order - b.order);

export const byGroup = groups
  .map((g) => ({ group: g, id: groupId(g), items: docs.filter((d) => d.group === g) }))
  .filter((g) => g.items.length);

const icons = {
  note: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10" cy="10" r="8"></circle><path d="M10 9v5M10 6.2v.1" stroke-linecap="round"></path></svg>',
  caution: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M10 2.8l8 14H2z" stroke-linejoin="round"></path><path d="M10 8v4.2M10 14.6v.1" stroke-linecap="round"></path></svg>',
};

/** Callouts, light/dark screenshots, copy buttons and the article's own styles for tables. */
export function enhance(html: string): string {
  // > **Note** … / > **Caution** …  →  callout with a text label (meaning never relies on colour).
  html = html.replace(/<blockquote>\s*<p><strong>(Note|Caution)<\/strong>:?\s*([\s\S]*?)<\/blockquote>/g, (_, kind: string, body: string) => {
    const k = kind.toLowerCase() as 'note' | 'caution';
    return `<aside class="callout${k === 'caution' ? ' warn' : ''}" role="note">${icons[k]}<div><p class="ct">${kind}</p><p>${body.trim()}</div></aside>`;
  });
  // Screenshots: the light capture with its dark twin, in the window frame.
  html = html.replace(/<p><img src="\/shots\/([a-z]+)-light\.png" alt="([^"]*)"\s*\/?><\/p>/g, (_, name: string, alt: string) =>
    `<figure class="win"><div class="shot"><picture><source media="(prefers-color-scheme: dark)" srcset="/shots/${name}-dark.png" /><img src="/shots/${name}-light.png" alt="${alt}" width="1256" height="795" loading="lazy" /></picture></div></figure>`);
  // Code blocks get a copy button.
  html = html.replace(/<pre([^>]*)>([\s\S]*?)<\/pre>/g, (_, attrs: string, inner: string) =>
    `<div class="code"><pre${attrs}>${inner}</pre><button class="copybtn" type="button" data-copy-from="pre" aria-label="Copy code">Copy</button></div>`);
  // Wide tables scroll inside their own box.
  html = html.replace(/<table>/g, '<div class="tblw"><table class="tbl">').replace(/<\/table>/g, '</table></div>');
  return html;
}

/** Plain text of an article for the search index. */
export const plain = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
