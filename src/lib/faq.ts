// Support answers: ids and links here, text in src/i18n/pages/<lang>.ts (support.faq).
// One source for the accordion, the FAQPage JSON-LD and the search index. Every answer is checked
// against the app (docs/user and the Settings tabs in the app repo).
import type { Locale } from '../i18n/locales';
import { lp } from '../i18n/paths';
import { pagesCopy } from '../i18n/pages';

const items = [
  { id: 'apple-could-not-verify', doc: '/docs/install/' },
  { id: 'git-not-found', doc: '/docs/install/' },
  { id: 'owned-by-another-user' },
  { id: 'ssh-key-or-sign-in', doc: '/docs/ssh-accounts/' },
  { id: 'link-asks-before-opening', doc: '/security/#trust' },
  { id: 'ai-does-not-work', doc: '/docs/choosing-a-provider/' },
  { id: 'updates', doc: '/docs/updates/' },
] as const;

export const faqFor = (l: Locale) => {
  const text = pagesCopy(l.code).support.faq;
  return items.map((it) => ({ id: it.id, ...text[it.id], doc: 'doc' in it ? lp(l, it.doc) : undefined }));
};
