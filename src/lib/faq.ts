// Support answers: one source for the accordion, the FAQPage JSON-LD and the search index.
// Every answer is checked against the app (docs/user and the Settings tabs in the app repo).
export interface Faq { id: string; q: string; a: string; doc?: string }

export const faq: Faq[] = [
  { id: 'apple-could-not-verify', q: 'Apple could not verify GitLoom',
    a: 'GitLoom isn’t notarized by Apple yet, so macOS stops the first launch. Open System Settings ▸ Privacy &amp; Security and choose Open Anyway. You only do this once, and updates are EdDSA-signed and verified.',
    doc: '/docs/install/' },
  { id: 'git-not-found', q: 'Git isn’t found',
    a: 'GitLoom needs git 2.40 or later. Install Apple’s command line tools with <code>xcode-select --install</code> (or git from Homebrew), or choose a git binary in Settings ▸ Git.',
    doc: '/docs/install/' },
  { id: 'owned-by-another-user', q: 'The repository is owned by another user',
    a: 'Git won’t open a repository owned by another account unless it’s listed in <code>safe.directory</code>. GitLoom offers to trust it for you. Accept only for repositories you trust.' },
  { id: 'ssh-key-or-sign-in', q: 'The wrong SSH key is used, or sign-in is needed',
    a: 'Choose the key for each account in Settings ▸ Accounts. To sign in to GitHub or GitLab, go to Settings ▸ Hosting.',
    doc: '/docs/ssh-accounts/' },
  { id: 'link-asks-before-opening', q: 'A link asks before opening a folder',
    a: 'Opening a repository runs the programs its Git settings name, so GitLoom asks before a link opens a folder. Open only repositories you trust.',
    doc: '/security/#trust' },
  { id: 'ai-does-not-work', q: 'AI doesn’t work',
    a: 'AI is off by default. Choose a provider and add your own key in Settings ▸ AI. Without a network the ✨ buttons are dimmed; a local model still works.',
    doc: '/docs/choosing-a-provider/' },
  { id: 'updates', q: 'Updates',
    a: 'Turn update checks on or off in Settings ▸ General. To check now, choose GitLoom ▸ Check for Updates…',
    doc: '/docs/updates/' },
];
