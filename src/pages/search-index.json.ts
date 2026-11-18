// The static search index: docs articles, support answers and the main pages.
import type { APIRoute } from 'astro';
import { docs, plain } from '../lib/docs';
import { faq } from '../lib/faq';

const pages = [
  { t: 'Download', g: 'Site', u: '/download/', s: 'Download GitLoom for macOS: requirements and the first open.', x: 'dmg install open anyway notarized requirements apple silicon terminal curl' },
  { t: 'Changelog', g: 'Site', u: '/changelog/', s: 'Every release, newest first.', x: 'release notes versions what’s new appcast' },
  { t: 'Compare', g: 'Site', u: '/compare/', s: 'GitLoom compared with Electron-based Git clients and the command line.', x: 'electron command line comparison alternatives' },
  { t: 'Press kit', g: 'Site', u: '/press/', s: 'Descriptions, the icon, screenshots and facts.', x: 'press icon screenshots colours fact sheet logo' },
  { t: 'Privacy', g: 'Legal', u: '/privacy/', s: 'No account and no telemetry.', x: 'privacy telemetry data collect avatars gravatar ai crash reports cookies' },
  { t: 'Terms of use', g: 'Legal', u: '/terms/', s: 'GitLoom is free to use, without warranty.', x: 'terms licence warranty open source acknowledgements' },
  { t: 'Security', g: 'Legal', u: '/security/', s: 'Signed updates, safe defaults and how to verify your download.', x: 'security signed updates eddsa keychain verify codesign vulnerability' },
];

export const GET: APIRoute = async () => {
  const entries = [
    ...(await Promise.all(docs.map(async (d) => ({
      t: d.title, g: d.group, u: d.url, s: d.summary,
      x: `${d.headings.map((h) => h.text).join(' ')} ${plain(await d.html())}`.slice(0, 4000),
    })))),
    ...faq.map((f) => ({ t: f.q, g: 'Support', u: `/support/#${f.id}`, s: plain(f.a).slice(0, 150), x: plain(f.a) })),
    ...pages,
  ];
  return new Response(JSON.stringify(entries), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
