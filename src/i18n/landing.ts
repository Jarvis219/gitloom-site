// Copy of the landing page (design "Warm Poster", 2026-11-18). One object per language; a language
// without its own copy yet falls back to English.
export interface Chapter { id: string; eyebrow: string; title: string; lead: string; facts: string[]; caption: string; alt: string }
export interface LandingCopy {
  title: string;
  description: string;
  skip: string;
  nav: { features: string; install: string; download: string; support: string; menu: string };
  eyebrow: string;
  h1: string;
  lead: string;
  download: string;
  seeIt: string;
  meta: string;
  heroAlt: string;
  heroCaption: string;
  heroMenu: [string, string, string];
  proofLabel: string;
  figs: [string, string][];
  chapters: Chapter[];
  gh: { eyebrow: string; title: string; lead: string; facts: string[]; caption: string; alt: string };
  /** AI section (2026-11-19). Every line is a feature of the app (F17, F26). */
  ai: { eyebrow: string; title: string; lead: string; facts: string[]; privacy: string; mcp: string; caption: string; alt: string };
  power: { eyebrow: string; title: string; items: [string, string][] };
  langs: { eyebrow: string; title: string; lead: string; caption: string; alt: string };
  install: {
    eyebrow: string; title: string;
    steps: { n: string; title: string; text: string }[];
    art: { dmg: string; apps: string; dialogTitle: string; dialogText: string; done: string; pane: string; paneText: string; openAnyway: string };
    honest: string; terminal: string; copy: string; copied: string;
  };
  cta: { title: string; lead: string; guide: string };
  footer: { product: string; help: string; trust: string; project: string; features: string; download: string; releases: string; install: string; support: string; noAccount: string; noTelemetry: string; signed: string; bug: string; feature: string; tagline: string };
  language: string;
}

const en: LandingCopy = {
  title: 'GitLoom — a free, native Git client for macOS, with AI',
  description: 'Free, native Git client for macOS: a fast commit graph, drag-and-drop merge and rebase, line staging, undo, AI commit messages and code review with your own key, GitHub and GitLab.',
  skip: 'Skip to content',
  nav: { features: 'Features', install: 'Install', download: 'Download', support: 'Support', menu: 'Open menu' },
  eyebrow: 'Git client for macOS · Free',
  h1: 'See your history. Change it by dragging.',
  lead: 'A free, native Git client for macOS that lets you drag branches, stage lines and undo mistakes.',
  download: 'Download for macOS',
  seeIt: 'See it work →',
  meta: 'macOS 14+ · Apple silicon · 46 MB',
  heroAlt: 'GitLoom showing the atlas repository: branch lanes for main, release, dark-theme and sync-engine, with commit details on the right.',
  heroCaption: 'Drop one branch onto another to merge, rebase or cherry-pick.',
  heroMenu: ['Merge feature/sync-engine into main', 'Rebase feature/sync-engine onto main', 'Cherry-pick commits onto main'],
  proofLabel: 'GitLoom in numbers',
  figs: [['0.15 s', 'First rows of a 100,000-commit repo'], ['46 MB', 'Native Swift and AppKit, not Electron'], ['⌘Z', 'Undo for almost everything']],
  chapters: [
    { id: 'features', eyebrow: '01 · History', title: 'History you can read.', lead: 'Every branch keeps its own lane and colour, even in a 100,000-commit repo.',
      facts: ['Full history in about 0.7 s, using about 170 MB of memory', 'File history that follows renames', 'Blame and search across every commit'],
      caption: 'The atlas repository, every lane in view.', alt: 'Commit graph with coloured branch lanes, tags and commit messages.' },
    { id: 'drag', eyebrow: '02 · Drag', title: 'Change history by dragging.', lead: 'Drop a branch onto another, then choose merge, rebase or cherry-pick.',
      facts: ['Merge, rebase or cherry-pick from one drop', 'Reorder an interactive rebase by dragging commits', 'A three-way editor when a conflict needs you'],
      caption: 'Conflicts open in a three-way editor. Take ours, theirs or both.', alt: 'Three-way conflict editor: ours and theirs side by side above an editable output.' },
    { id: 'staging', eyebrow: '03 · Staging', title: 'Commit exactly what you mean.', lead: 'Stage one line at a time and write the message beside the diff.',
      facts: ['Stage single lines, not just whole files', 'Fix a line in the built-in file editor', 'Commit as the identity of your current profile'],
      caption: 'A split diff with the working tree beside it.', alt: 'Split diff of CommitList.swift with the staging panel and commit form.' },
    { id: 'undo', eyebrow: '04 · Undo', title: 'Mistakes are cheap.', lead: 'Undo and redo commits, checkouts, merges, resets and branch changes. The reflog backs you up.',
      facts: ['<kbd>⌘Z</kbd>&nbsp;undoes, <kbd>⇧⌘Z</kbd>&nbsp;redoes', 'Works for commits, checkouts, merges, resets and branch changes', 'Reflog recovery for anything older'],
      caption: 'Undo and redo live in the toolbar.', alt: 'GitLoom toolbar with undo and redo buttons above the commit graph.' },
    { id: 'profiles', eyebrow: '05 · Profiles', title: 'Work and personal, kept apart.', lead: 'Each profile keeps its own tabs, recent repos and identity.',
      facts: ['Separate tabs and recent repositories per profile', 'The right name and email on every commit', 'SSH accounts pick the right key for each repo'],
      caption: 'The profile menu sits top right in every window.', alt: 'The profile menu at the top right of the GitLoom window.' },
  ],
  gh: { eyebrow: 'GitHub & GitLab', title: 'Pull requests and Actions, inside the app.', lead: 'Review, track issues and rerun workflows next to the history they touch.',
    facts: ['Pull requests and reviews', 'Issues, filtered to yours or all', 'Actions runs and their jobs'],
    caption: 'A pull request with checks, and an Actions run open on the right.', alt: 'Sidebar listing a pull request with a passing check and Actions runs; a run is open showing its build job.' },
  ai: { eyebrow: 'AI · Off until you turn it on', title: 'AI writes the commit message. You decide.', lead: 'Commit messages, code review, conflict suggestions and explanations from the AI provider you choose — or a model on your own Mac.',
    facts: [
      'Commit messages from your changes in one click (<kbd>⌥⌘G</kbd>), shorter or rewritten on demand',
      'Splits a large change into separate commits that you review before anything is committed',
      'Reviews a diff line by line and suggests fixes you can apply',
      'Suggests a resolution for each merge conflict',
      'Explains a commit, a branch or your uncommitted work; drafts pull request descriptions and stash messages',
      'Anthropic, OpenAI, Gemini, OpenRouter, Groq, Mistral, DeepSeek, Qwen, xAI, Together, or a local model in Ollama or LM Studio',
    ],
    privacy: 'Your own key, kept in your Keychain. You see exactly what is sent the first time in each repository, obvious secrets are redacted, and AI can be turned off per repository.',
    mcp: 'Use Claude Code, Cursor or VS Code? Through GitLoom’s MCP server they can read your repositories and, if you allow it, stage, commit and push — each change shown in GitLoom with an Undo button.',
    caption: 'The ✨ button wrote this message from the diff beside it.',
    alt: 'GitLoom with a diff of CommitList.swift and, in the commit form, a message the AI wrote from that change.' },
  power: { eyebrow: 'For power users', title: 'The rest of Git, close at hand.', items: [
    ['Terminal', 'Built in'], ['File editor', 'Built in'], ['Worktrees', 'Several checkouts of one repo'], ['Submodules', 'Supported'],
    ['Bisect', 'Find the commit that broke it'], ['Git LFS', 'Supported'], ['<code>gitloom</code>', 'Command-line tool'], ['MCP server', 'Off by default'],
    ['AI', 'Your own provider and key. Off by default'], ['Themes, layout, shortcuts', 'Yours to change']] },
  langs: { eyebrow: 'Languages & themes', title: 'Sixteen languages. Light and dark.', lead: 'Arabic reads right to left. Themes, layout and shortcuts are yours to change.',
    caption: 'The same window in light and dark.', alt: 'The same GitLoom window in the light theme (left half) and the dark theme (right half).' },
  install: {
    eyebrow: 'Install', title: 'Install in three steps.',
    steps: [
      { n: 'STEP 01', title: 'Download, then drag to Applications.', text: 'One 46 MB disk image from the website, not the App Store.' },
      { n: 'STEP 02', title: 'Open it once.', text: 'macOS stops the first launch because GitLoom isn’t notarized yet. Click Done.' },
      { n: 'STEP 03', title: 'Choose Open Anyway.', text: 'System Settings ▸ Privacy & Security ▸ Open Anyway. You only do this once.' },
    ],
    art: { dmg: 'GitLoom.dmg', apps: 'Applications', dialogTitle: '“GitLoom” Not Opened', dialogText: 'Apple could not verify “GitLoom” is free of malware…', done: 'Done',
      pane: 'Privacy & Security', paneText: '“GitLoom” was blocked to protect your Mac.', openAnyway: 'Open Anyway' },
    honest: 'GitLoom isn’t notarized yet, which is why macOS asks once. Updates are EdDSA-signed and verified before they install. No account, no telemetry.',
    terminal: 'Or download from Terminal', copy: 'Copy', copied: 'Copied',
  },
  cta: { title: 'Try it on your own repo.', lead: 'Free, 46 MB, no account.', guide: 'Install guide →' },
  footer: { product: 'Product', help: 'Help', trust: 'Trust', project: 'Project', features: 'Features', download: 'Download', releases: 'Releases',
    install: 'Install guide', support: 'Support on GitHub Issues', noAccount: 'No account', noTelemetry: 'No telemetry', signed: 'Signed updates',
    bug: 'Report a bug', feature: 'Request a feature', tagline: 'Free · macOS 14+ · Apple silicon' },
  language: 'Language',
};

/** Compact form for translations: arrays in a fixed order; numbers, ids and code stay from English. */
export interface Compact {
  /** eyebrow, title, lead, 6 facts, privacy, mcp, caption, alt — optional: English until translated */
  ai?: string[];
  title: string; description: string; skip: string; language: string; meta: string;
  nav: [string, string, string, string, string];                       // features, install, download, support, menu
  hero: [string, string, string, string, string, string, string];      // eyebrow, h1, lead, download, seeIt, alt, caption
  heroMenu: [string, string, string];
  proof: [string, string, string, string];                             // label, three figure captions
  chapters: [string, string, string, string, string, string, string, string][];   // eyebrow, title, lead, 3 facts, caption, alt
  gh: [string, string, string, string, string, string, string, string];
  power: [string, string, [string, string][]];
  langs: [string, string, string, string, string];                     // eyebrow, title, lead, caption, alt
  install: string[];   // eyebrow, title, s1 title, s1 text, s2 title, s2 text, s3 title, s3 text, apps, dialog title, dialog text, done, pane, pane text, open anyway, honest, terminal, copy, copied
  cta: [string, string, string];
  footer: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string];
}

export function build(c: Compact): LandingCopy {
  const i = c.install;
  return {
    title: c.title, description: c.description, skip: c.skip, language: c.language, meta: c.meta,
    nav: { features: c.nav[0], install: c.nav[1], download: c.nav[2], support: c.nav[3], menu: c.nav[4] },
    eyebrow: c.hero[0], h1: c.hero[1], lead: c.hero[2], download: c.hero[3], seeIt: c.hero[4], heroAlt: c.hero[5], heroCaption: c.hero[6],
    heroMenu: c.heroMenu, proofLabel: c.proof[0],
    figs: en.figs.map(([n], k) => [n, c.proof[k + 1]] as [string, string]),
    chapters: en.chapters.map((e, k) => {
      const x = c.chapters[k];
      return { id: e.id, eyebrow: x[0], title: x[1], lead: x[2], facts: [x[3], x[4], x[5]], caption: x[6], alt: x[7] };
    }),
    gh: { eyebrow: c.gh[0], title: c.gh[1], lead: c.gh[2], facts: [c.gh[3], c.gh[4], c.gh[5]], caption: c.gh[6], alt: c.gh[7] },
    ai: c.ai && c.ai.length === 13
      ? { eyebrow: c.ai[0], title: c.ai[1], lead: c.ai[2], facts: c.ai.slice(3, 9), privacy: c.ai[9], mcp: c.ai[10], caption: c.ai[11], alt: c.ai[12] }
      : en.ai,
    power: { eyebrow: c.power[0], title: c.power[1], items: c.power[2] },
    langs: { eyebrow: c.langs[0], title: c.langs[1], lead: c.langs[2], caption: c.langs[3], alt: c.langs[4] },
    install: {
      eyebrow: i[0], title: i[1],
      steps: [{ n: 'STEP 01', title: i[2], text: i[3] }, { n: 'STEP 02', title: i[4], text: i[5] }, { n: 'STEP 03', title: i[6], text: i[7] }],
      art: { dmg: 'GitLoom.dmg', apps: i[8], dialogTitle: i[9], dialogText: i[10], done: i[11], pane: i[12], paneText: i[13], openAnyway: i[14] },
      honest: i[15], terminal: i[16], copy: i[17], copied: i[18],
    },
    cta: { title: c.cta[0], lead: c.cta[1], guide: c.cta[2] },
    footer: { product: c.footer[0], help: c.footer[1], trust: c.footer[2], project: c.footer[3], features: c.footer[4], download: c.footer[5],
      releases: c.footer[6], install: c.footer[7], support: c.footer[8], noAccount: c.footer[9], noTelemetry: c.footer[10], signed: c.footer[11],
      bug: c.footer[12], feature: c.footer[13], tagline: c.footer[14] },
  };
}

import { vi, ja, zhHans, zhHant, ko } from './landing-a';
import { de, fr, es, it, ptBR } from './landing-b';
import { ru, uk, pl, tr, ar } from './landing-c';

export const landing: Record<string, LandingCopy> = {
  en, vi: build(vi), ja: build(ja), 'zh-Hans': build(zhHans), 'zh-Hant': build(zhHant), ko: build(ko),
  de: build(de), fr: build(fr), es: build(es), it: build(it), 'pt-BR': build(ptBR),
  ru: build(ru), uk: build(uk), pl: build(pl), tr: build(tr), ar: build(ar),
};

export function landingCopy(code: string): LandingCopy {
  return landing[code] ?? en;
}

export { en };
