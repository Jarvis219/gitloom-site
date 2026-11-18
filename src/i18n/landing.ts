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
  title: 'GitLoom — a free, native Git client for macOS',
  description: 'GitLoom is a free, native Git client for macOS: a commit graph for huge repositories, drag-and-drop merge and rebase, line staging, undo, profiles, and GitHub and GitLab built in.',
  skip: 'Skip to content',
  nav: { features: 'Features', install: 'Install', download: 'Download', support: 'Support', menu: 'Open menu' },
  eyebrow: 'Git client for macOS · Free',
  h1: 'See your history. Change it by dragging.',
  lead: 'A free, native Git client for macOS that lets you drag branches, stage lines and undo mistakes.',
  download: 'Download for macOS',
  seeIt: 'See it work →',
  meta: 'macOS 14+ · Apple silicon · 42 MB',
  heroAlt: 'GitLoom showing the atlas repository: branch lanes for main, release, dark-theme and sync-engine, with commit details on the right.',
  heroCaption: 'Drop one branch onto another to merge, rebase or cherry-pick.',
  heroMenu: ['Merge feature/sync-engine into main', 'Rebase feature/sync-engine onto main', 'Cherry-pick commits onto main'],
  proofLabel: 'GitLoom in numbers',
  figs: [['0.15 s', 'First rows of a 100,000-commit repo'], ['42 MB', 'Native Swift and AppKit, not Electron'], ['⌘Z', 'Undo for almost everything']],
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
  power: { eyebrow: 'For power users', title: 'The rest of Git, close at hand.', items: [
    ['Terminal', 'Built in'], ['File editor', 'Built in'], ['Worktrees', 'Several checkouts of one repo'], ['Submodules', 'Supported'],
    ['Bisect', 'Find the commit that broke it'], ['Git LFS', 'Supported'], ['<code>gitloom</code>', 'Command-line tool'], ['MCP server', 'Off by default'],
    ['AI', 'Your own provider and key. Off by default'], ['Themes, layout, shortcuts', 'Yours to change']] },
  langs: { eyebrow: 'Languages & themes', title: 'Sixteen languages. Light and dark.', lead: 'Arabic reads right to left. Themes, layout and shortcuts are yours to change.',
    caption: 'The same window in light and dark.', alt: 'The same GitLoom window in the light theme (left half) and the dark theme (right half).' },
  install: {
    eyebrow: 'Install', title: 'Install in three steps.',
    steps: [
      { n: 'STEP 01', title: 'Download, then drag to Applications.', text: 'One 42 MB disk image from the website, not the App Store.' },
      { n: 'STEP 02', title: 'Open it once.', text: 'macOS stops the first launch because GitLoom isn’t notarized yet. Click Done.' },
      { n: 'STEP 03', title: 'Choose Open Anyway.', text: 'System Settings ▸ Privacy & Security ▸ Open Anyway. You only do this once.' },
    ],
    art: { dmg: 'GitLoom.dmg', apps: 'Applications', dialogTitle: '“GitLoom” Not Opened', dialogText: 'Apple could not verify “GitLoom” is free of malware…', done: 'Done',
      pane: 'Privacy & Security', paneText: '“GitLoom” was blocked to protect your Mac.', openAnyway: 'Open Anyway' },
    honest: 'GitLoom isn’t notarized yet, which is why macOS asks once. Updates are EdDSA-signed and verified before they install. No account, no telemetry.',
    terminal: 'Or download from Terminal', copy: 'Copy', copied: 'Copied',
  },
  cta: { title: 'Try it on your own repo.', lead: 'Free, 42 MB, no account.', guide: 'Install guide →' },
  footer: { product: 'Product', help: 'Help', trust: 'Trust', project: 'Project', features: 'Features', download: 'Download', releases: 'Releases',
    install: 'Install guide', support: 'Support on GitHub Issues', noAccount: 'No account', noTelemetry: 'No telemetry', signed: 'Signed updates',
    bug: 'Report a bug', feature: 'Request a feature', tagline: 'Free · macOS 14+ · Apple silicon' },
  language: 'Language',
};

export const landing: Record<string, LandingCopy> = { en };
export const landingCopy = (code: string): LandingCopy => landing[code] ?? en;
