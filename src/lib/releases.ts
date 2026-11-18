// Releases of GitLoom, read once per build from the public GitHub releases of the site repository
// (release.sh publishes there). If GitHub can't be reached, pages show their "no release yet" state.
export interface Release {
  version: string;        // "1.0.0"
  date: string;           // ISO date
  beta: boolean;
  url: string;
  sections: { title: string; items: string[] }[];   // New · Improved · Fixed, or one untitled list
}

const REPO = 'Jarvis219/gitloom-site';
let cached: Promise<Release[]> | null = null;

export const getReleases = () => (cached ??= load());

async function load(): Promise<Release[]> {
  try {
    const headers: Record<string, string> = { Accept: 'application/vnd.github+json', 'User-Agent': 'gitloom-site-build' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=30`, { headers, signal: AbortSignal.timeout(8000) });
    if (!res.ok) return [];
    const list = (await res.json()) as { tag_name: string; published_at: string; prerelease: boolean; draft: boolean; html_url: string; body: string | null }[];
    return list.filter((r) => !r.draft).map((r) => ({
      version: r.tag_name.replace(/^v/, ''),
      date: r.published_at,
      beta: r.prerelease,
      url: r.html_url,
      sections: parseNotes(r.body ?? ''),
    }));
  } catch {
    return [];
  }
}

/** Release notes are the CHANGELOG section: bullet lists, optionally under ### New / Improved / Fixed. */
export function parseNotes(md: string) {
  const order = ['New', 'Improved', 'Fixed'];
  const sections: { title: string; items: string[] }[] = [];
  let cur = { title: '', items: [] as string[] };
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trimEnd();
    const h = line.match(/^#{2,4}\s+(.+)$/);
    if (h) { if (cur.items.length) sections.push(cur); cur = { title: h[1].trim(), items: [] }; continue; }
    const li = line.match(/^\s*[-*]\s+(.+)$/);
    if (li) cur.items.push(li[1]);
    else if (/^\s{2,}\S/.test(line) && cur.items.length) cur.items[cur.items.length - 1] += ` ${line.trim()}`;
  }
  if (cur.items.length) sections.push(cur);
  const known = sections.filter((s) => order.includes(s.title)).sort((a, b) => order.indexOf(a.title) - order.indexOf(b.title));
  return known.length ? known : sections.map((s) => ({ ...s, title: order.includes(s.title) ? s.title : '' }));
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
/** The little Markdown release notes use: `code`, **bold**, *italic*, [links](https://…). */
export const inline = (s: string) => esc(s)
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/(^|[\s(])\*([^*]+)\*/g, '$1<em>$2</em>')
  .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a href="$2">$1</a>');

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
