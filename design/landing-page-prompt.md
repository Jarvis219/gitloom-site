# Prompt: design the GitLoom landing page

Paste everything below the line into an AI design tool (v0, Figma AI, Lovable, Galileo, Claude, …).
It is written in English on purpose — design tools follow English prompts best; the page itself is
translated into 16 languages afterwards. Every claim in it is true today; do not let the tool add
numbers, testimonials, logos or awards that are not listed here.

---

## Role and goal

You are a senior product designer for developer tools. Design a high-converting, single-page marketing
site for **GitLoom**, a native Git client for macOS. The one goal of the page: a developer who lands on
it understands within 5 seconds that GitLoom is a fast, beautiful, native Mac Git app, wants to try it,
and clicks **Download for macOS**. Secondary goal: every major feature is shown visually so the page
also ranks for searches like "git gui mac", "git client macos", "gitkraken alternative mac",
"visual git rebase", "git undo".

Deliver: a desktop design (1440 px wide) and a mobile design (390 px), both in light and dark mode,
plus the component styles (tokens, type scale, buttons, cards, chips). Annotate interactions and motion.

## The product in one paragraph

GitLoom is a free Git GUI for macOS, written natively in Swift (not Electron): a 42 MB app that opens
a 100,000-commit repository and shows the first rows of its commit graph in about 0.15 s and the whole
history in under a second, using about 170 MB of memory. You merge, rebase and cherry-pick by dragging
branches and commits on the graph, stage single lines, and undo almost anything. Work and personal
profiles keep their own tabs, recent repositories and commit identity. GitHub and GitLab pull requests,
reviews, issues and GitHub Actions live next to the code. It ships in 16 languages, with light and dark
themes, and updates itself.

## Audience

- Professional developers on Macs (Apple silicon) who use Git every day — from juniors who are
  afraid of rebase to seniors who live in the terminal but want a clear picture of history.
- People who tried other Git GUIs and found them slow, heavy (Electron) or subscription-only.
- Developers who juggle a work and a personal GitHub account on one machine.

Tone: confident, calm, precise, a little warm. No hype words ("revolutionary", "blazing"), no emoji in
headings. Short sentences. Show, don't tell.

## Brand

- **Name:** GitLoom (a loom weaves threads; branches are threads). Tagline in use: **"Git, woven clearly."**
- **Icon:** a small orange-yellow bird in a nest woven from colourful threads, on a royal-blue rounded
  square (macOS icon shape). Use it as the hero mark and favicon; don't redraw it.
- **Palette (Color Hunt `#2D3250 · #424769 · #7077A1 · #F6B17A`)** — matches the icon's indigo and amber:
  - `#2D3250` deep navy — dark-mode background, light-mode text
  - `#424769` indigo — dark-mode surfaces, light-mode links
  - `#7077A1` slate — borders, focus rings, decorative gradients (not for body text on white: 4.3:1)
  - `#F6B17A` amber — the one call-to-action colour (button with navy text, 6.8:1), highlights, numbers
  - light background `#F8F6F3` (warm off-white), surfaces `#FFFFFF`, muted text `#555B86`
  - dark muted text `#C3C6DE`, dark surfaces `#383D5E`, dark borders `#4A5075`
  - The graph inside screenshots uses its own lane colours (blue, pink, green, orange, purple) —
    that's fine; let the page's own chrome stay within the palette.
- **Type:** the system font stack (SF Pro on Mac) for a native feel; monospace (SF Mono) for branch
  names, commit hashes and commands. Large, tight headlines (−2 % tracking), generous line height for body.
- **Shape:** 12–14 px card radius, pill buttons, soft long shadows, thin 1 px borders. Subtle grain or
  soft radial glows (slate + amber) behind the hero only — no busy patterns elsewhere.
- **Motif:** woven threads. Use thin, colourful curved lines (like graph lanes) as section dividers or
  as a background accent that "weaves" between sections. Keep it subtle.

## Page structure (in this order)

### 1. Sticky header
Logo (icon + "GitLoom"), anchors: Features · Install · FAQ, a language menu (globe icon + current
language name, 16 options), and a small amber "Download" button that appears once the hero button
scrolls out of view.

### 2. Hero
- Eyebrow chip: "Free · Native macOS app".
- Headline: **Git, woven clearly.**
- Sub-headline: "A fast, native Git client for macOS. See every branch at a glance, merge and rebase by
  dragging, and undo almost anything."
- Primary button (amber, large, pill): **Download for macOS** · beneath it in small muted text:
  "Free · macOS 14 or later · Apple silicon".
- Secondary link: "See what's new" → release notes.
- Hero visual: the real app window (screenshot provided) in a framed device-less window with a gradient
  border (slate → indigo → amber), slightly tilted in 3D on desktop, flat on mobile. Animate the
  commit-graph lanes drawing in on load (stroke-dashoffset), once, ≤ 1.2 s; respect reduced motion.
- Three proof chips under the visual (real numbers only): **"100,000 commits, first rows in 0.15 s"**,
  **"42 MB native app — not Electron"**, **"16 languages"**.

### 3. "Why GitLoom" strip (3 columns, icon + one line each)
- **Native and fast** — Swift and AppKit, opens huge repositories in under a second.
- **Visual, not magical** — drag-and-drop asks what you mean before it runs anything.
- **Safe by default** — undo, reflog recovery, and a warning before anything destructive.

### 4. Feature deep-dives (the heart of the page)
Alternate left/right: text on one side, an illustrative UI vignette on the other (crop of the app or a
clean redrawn mock using the app's look). Each block: a small amber label, a headline, 2–3 sentences,
and 2–4 bullet "details". Suggested visuals in brackets.

1. **The commit graph — clear at any size.** Scroll and search repositories with 100,000+ commits.
   Branches, tags, merges, stashes and work in progress in one graph with coloured lanes and avatars.
   Details: search by message, author, hash or file · filter to one branch · jump to HEAD.
   [Graph crop with several coloured lanes, a highlighted search result.]
2. **Drag to merge, rebase, cherry-pick.** Drop one branch on another to merge or rebase; drag a commit
   to cherry-pick it. A menu asks which action you mean before anything runs.
   [Animated vignette: a branch chip dragged onto `main`, a small popover "Merge feature/login into main · Rebase instead".]
3. **Interactive rebase without a text editor.** Reorder commits by dragging, squash, fixup, reword
   and drop with buttons; autosquash for fixup! commits.
   [A vertical list of commits with drag handles and squash/reword chips.]
4. **Stage exactly what you mean.** Stage files, hunks or single lines from a side-by-side or unified
   diff with word-level highlights. Amend, sign off, sign with GPG or SSH, add co-authors.
   [Diff with a few lines selected and a "Stage 3 lines" button.]
5. **Undo for almost everything.** Undo and redo commits, checkouts, merges, resets and branch changes;
   recover lost commits from the reflog.
   [A timeline of operations with an "Undo Merge" button; ⌘Z keycap.]
6. **Conflicts without fear.** A three-way merge editor: theirs, yours and the result side by side,
   accept per line or per block, edit the result directly.
   [Three-pane editor with one conflict resolved in green.]
7. **Profiles and SSH accounts.** Work and personal profiles, each with its own open tabs, recent
   repositories and commit name/email. The right SSH key is picked for every repository automatically.
   [Profile switcher menu "Work / Personal" with avatars; tabs changing.]
8. **GitHub and GitLab, built in.** Pull requests, reviews and comments, issues, and GitHub Actions runs
   with their jobs and logs — next to the code, without a browser.
   [PR panel with checks; an Actions run with job steps.]
9. **History, blame and search.** File history that follows renames, line-by-line blame, and a fast
   search across commits.
   [Blame gutter with author colours.]
10. **Terminal and editor inside.** A built-in terminal tab and a file editor with syntax highlighting —
    fix a typo and commit without leaving the app.
11. **Power tools when you need them.** Worktrees, submodules, bisect, Git LFS, stashes with preview,
    tags.
    [A compact grid of small icon tiles.]
12. **AI on your terms.** Commit messages and explanations from the AI provider *you* choose (your own
    key), and an MCP server so other tools and agents can drive GitLoom.
    [Commit box with a "Suggest message" sparkle button.]
13. **Make it yours.** Light and dark themes, layout and keyboard customisation, 16 languages.
    [Theme swatches + a language list.]

### 5. Comparison band
A simple, honest table: GitLoom vs "typical Electron Git clients" vs "the command line" on: native
performance, app size, drag-and-drop history editing, undo, price (GitLoom: free). Do not name or
show logos of other products.

### 6. Install (3 steps, numbered amber circles)
1. Download GitLoom.dmg and drag GitLoom to Applications.
2. Open it. The first time, macOS says it can't verify the developer — click **Done**.
3. Open **System Settings ▸ Privacy & Security**, scroll down, click **Open Anyway**. Later versions
   install on their own.
Design this as a friendly, reassuring card (a small illustration of the macOS dialog helps), not as a
warning. Add a "Why?" tooltip: "This build isn't notarized by Apple yet; updates are still signed and
verified."

### 7. FAQ (accordion)
Is GitLoom free? · Which macOS versions are supported? (macOS 14+, Apple silicon) · Why does macOS say it
cannot verify GitLoom? · How do updates work? (automatic, signed, verified) · Does GitLoom send my code
anywhere? (No — only to the Git hosts you connect and, if enabled, the AI provider you choose.)

### 8. Final call to action
Big centered block on a navy → indigo gradient with the woven-thread motif: "Weave your next commit."
+ the amber Download button + "Free · macOS 14 or later".

### 9. Footer
Logo, Releases, language menu, "Made for the Mac."

## Content rules

- Real copy only: use the sentences above; do not invent statistics, user counts, company logos,
  testimonials, ratings, or "trusted by" rows. If a section feels empty, use product visuals instead.
- Price: free. Platform: macOS 14 or later, Apple silicon. Not on the Mac App Store; downloaded from the web.
- Every text block must survive translation: allow ~35 % longer strings (German, Russian), CJK line
  breaking, and a full **right-to-left mirror** for Arabic (layout, icons with direction, padding).
- Headlines ≤ 8 words, feature bodies ≤ 40 words.

## Accessibility, performance, SEO (hard requirements)

- WCAG 2.2 AA contrast for all text (pairs above are checked); visible focus rings in slate; every
  interactive element reachable by keyboard; `prefers-reduced-motion` disables all animation.
- The site is static HTML built with Astro, served from Vercel. Minimal JavaScript: animations in CSS,
  no carousel libraries, no autoplay video. Images in WebP/AVIF with width/height set, the hero image
  preloaded, everything else lazy-loaded. Target Lighthouse ≥ 95 in all four categories.
- One `h1` (the headline), one `h2` per section, descriptive alt text for every screenshot,
  meaningful link text ("Download GitLoom for macOS", not "click here").
- Light and dark mode follow the system (`prefers-color-scheme`).

## Assets available

- App icon (1254 × 1254 PNG).
- One real screenshot of the main window (1256 × 795): commit graph of a sample repository with
  feature/fix/release branches, a tag, merges and the working-tree panel, in dark mode.
- More real screenshots can be captured on request — list the exact views you need (for example: drag
  to merge popover, interactive rebase sheet, line staging, three-way merge editor, profile menu,
  pull request panel, Actions run, blame, terminal, settings themes) and in which mode (light/dark).

## Output format

1. Moodboard and rationale (3–5 bullets).
2. Design tokens (colour, type scale, spacing, radius, shadow) for light and dark.
3. Desktop and mobile layouts for every section above, light and dark.
4. Component sheet: header, language menu, buttons, chips, feature block, comparison table,
   install card, FAQ item, footer.
5. Motion notes (what animates, duration, easing, reduced-motion fallback).
6. A list of the screenshots you need from the real app.
