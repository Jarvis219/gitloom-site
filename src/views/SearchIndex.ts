// The static search index of one language: docs articles, support answers and the main pages.
import type { Locale } from '../i18n/locales';
import { lp } from '../i18n/paths';
import { pagesCopy } from '../i18n/pages';
import { chromeWords } from '../i18n/chrome';
import { landingCopy } from '../i18n/landing';
import { docsFor, plain } from '../lib/docs';
import { faqFor } from '../lib/faq';

export async function searchIndex(l: Locale) {
  const t = pagesCopy(l.code);
  const w = chromeWords(l.code);
  const groups = t.docs.groups as Record<string, string>;
  const labels = { note: t.common.note, caution: t.common.caution, copy: t.common.copy, copyCode: t.common.copyCode };
  const pages = [
    { t: landingCopy(l.code).nav.download, g: t.search.groupSite, u: lp(l, '/download/'), s: t.download.lead, x: `${t.download.firstOpenTitle} ${t.download.step1} ${t.download.step2} ${t.download.step3} ${t.download.whyText} curl dmg` },
    { t: w.changelog, g: t.search.groupSite, u: lp(l, '/changelog/'), s: t.changelog.lead, x: 'appcast release' },
    { t: w.compare, g: t.search.groupSite, u: lp(l, '/compare/'), s: t.compare.lead, x: `${t.compare.electron} ${t.compare.cli}` },
    { t: w.press, g: t.search.groupSite, u: lp(l, '/press/'), s: t.press.lead, x: `${t.press.iconTitle} ${t.press.colours} ${t.press.factSheet}` },
    ...(['privacy', 'terms', 'security'] as const).map((k) => ({
      t: t[k].title, g: t.search.groupLegal, u: lp(l, `/${k}/`), s: t[k].short.join(' '),
      x: plain(Object.values(t[k].sections).map((s) => `${s.title} ${s.html}`).join(' ')),
    })),
  ];
  return [
    ...(await Promise.all(docsFor(l).map(async (d) => ({
      t: d.title, g: groups[d.group] ?? d.group, u: d.url, s: d.summary,
      x: `${d.headings.map((h) => h.text).join(' ')} ${plain(await d.html(labels))}`.slice(0, 4000),
    })))),
    ...faqFor(l).map((f) => ({ t: f.q, g: t.search.groupSupport, u: `${lp(l, '/support/')}#${f.id}`, s: plain(f.a).slice(0, 150), x: plain(f.a) })),
    ...pages,
  ];
}
