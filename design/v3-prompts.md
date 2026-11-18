> **Mới hơn: `v4-prompts.md`** (dựng bằng skill `design-styles`: GITLOOM-DESIGN.md + G0–G7). v3 vẫn dùng được làm tham khảo.

# GitLoom site — design prompts v3 (2026 direction)

Thay thế `bold-prompts.md` và phần phong cách trong `pages-prompts.md`. Hai file cũ vẫn dùng được cho cấu trúc
trang và dữ kiện, nhưng nhìn đã cũ: sợi chỉ phát sáng, chơi chữ "woven", quầng màu, bento, mọi thứ căn giữa.

**Cách dùng:**
1. Dán **D0** (design system) **một lần đầu phiên** làm việc với công cụ AI.
2. Sau đó dán từng prompt trang (L1 cho landing, rồi S1–S6). Mỗi prompt đã có khối FACTS và ANTI-CLICHÉ.
3. **Nên đính kèm ảnh tham chiếu thật** khi dán: chụp trang chủ linear.app, raycast.com, vercel.com và một cửa sổ
   Finder/Settings của macOS 26 Tahoe. Công cụ AI bám ảnh tốt hơn bám chữ rất nhiều.
4. Đính kèm thêm ảnh chụp GitLoom thật, cả sáng lẫn tối. Cần thêm góc nào thì nhờ tôi chụp từ repo mẫu.

---

## Shared blocks (đã chèn sẵn vào từng prompt)

```
FACTS (true as of 2026-11-18 — use only these, never invent numbers, logos, quotes, users or awards):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu. Interactive rebase by drag. Stage single lines.
  Undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery. Three-way conflict editor.
  File history (follows renames), blame, search. Profiles (own tabs, recent repos, identity). SSH accounts (right
  key per repo). GitHub & GitLab: PRs, reviews, issues, Actions. Built-in terminal and file editor. Worktrees,
  submodules, bisect, Git LFS. AI with the user's own provider (off by default). MCP server for AI agents (off by
  default). Themes, layout, shortcuts. 16 languages incl. Arabic RTL. `gitloom` command-line tool.
- Distributed from the website; first open needs System Settings ▸ Privacy & Security ▸ Open Anyway (not notarized
  yet); updates are EdDSA-signed and verified. No account, no telemetry.
- Brand: app icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle (use as-is, small).
```

```
ANTI-CLICHÉ (hard rules — reject your own output if it does any of these):
- No glowing orbs, blurred gradient blobs, aurora backgrounds, purple-to-blue gradients, neon lines, starfields.
- No bento grid of equal-ish cards as the main feature section; no "three icons in three columns" rows.
- No generic 3D illustrations, isometric scenes, mascots in the UI, emoji, stock photos, fake device mockups
  (no MacBook frame — show the app window itself, the macOS way).
- No centred-everything layout; no hero with a centred headline + centred button + screenshot below.
- No thread/weave/loom puns or visual metaphors in copy or graphics. The name is enough.
- No marketing filler ("revolutionary", "supercharge", "seamless", "next-level", "blazing"), no exclamation marks.
- No drop shadows heavier than the macOS window shadow; no gradient text; no glassmorphism cards on busy blur.
- No carousel, no autoplay video with sound, no cookie banner (there are no cookies).
```

---

## D0 — Design system (dán đầu phiên)

>>>
You are a senior product designer at a studio known for Linear, Raycast and Apple-quality marketing sites. Set up
the design system for GitLoom's website. The feeling: quiet, precise, expensive, native to macOS — like Apple's
macOS 26 (Tahoe) and its Liquid Glass material, used sparingly. The product UI is the star; the page is the frame.

Typography (the main design tool):
- Display: "SF Pro Display" via system stack, fallback "Inter Display"/Inter (variable). Body: SF Pro Text / Inter.
  Mono: "SF Mono", fallback "JetBrains Mono" — for branch names, hashes, commands, numbers.
- Scale (desktop / mobile, px): hero 88/48 weight 600 tracking −0.035em line 0.95 · h2 56/34 tracking −0.03em ·
  h3 24/20 · lead 21/18 line 1.45 · body 17/16 line 1.55 · small 14 · micro (eyebrow, mono, caps) 12 tracking
  +0.06em. Max line length 62ch for prose.
- Numbers in mono with tabular figures. Headlines in sentence case, left-aligned.

Colour (neutral-first, one accent):
- Light: background #FBFAF8 (warm white), surface #FFFFFF, ink #16161A, secondary ink #5C5F70, hairline #E7E5E0.
- Dark: background #0C0D10, surface #15161B, raised #1C1E25, ink #F2F1EE, secondary #9A9DAE, hairline #262832.
- Accent: amber #F6B17A used ONLY for the primary button, focus-adjacent highlights and one data highlight per
  section. Indigo #424769 / navy #2D3250 only inside product UI and as deep dark-mode tint, never as page wash.
- Graph lane colours (inside screenshots only): #4C9BFF #F0649F #2FD08C #FF9F2E #A684FF.
- Contrast: WCAG 2.2 AA for all text; amber button text is #16161A.

Material and depth:
- Liquid Glass only for: the sticky nav bar and one floating control (e.g. the hero's mini toolbar). Translucent,
  12–16px blur, 1px inner highlight, no coloured tint. Everything else is flat surfaces with hairlines.
- Radius: 10 (controls), 14 (cards), 22 (feature panels), 12 for app-window corners like macOS.
- Shadow: only the macOS window shadow on product shots (0 24px 64px rgba(0,0,0,.18) light / .5 dark).

Layout:
- 12-column grid, 1200px content (1360 for product shots), 24px gutters, 16px side margin on mobile.
- Asymmetry: text in columns 1–5, product in 6–12 (alternating). Generous vertical rhythm: 160px between sections
  desktop, 96 mobile. Hairline rules between sections instead of background colour bands.

Motion (purposeful, short, interruptible; CSS first):
- Entrances: 12px rise + fade, 360ms, cubic-bezier(.2,.8,.2,1), staggered 40ms; triggered once by scroll
  (CSS scroll-driven animations / IntersectionObserver).
- Product shots: subtle parallax (≤ 24px) and a crisp cursor that performs the action (drag, click) in a loop.
- View transitions between pages (View Transitions API). prefers-reduced-motion → no movement, static frames.

Components: nav (glass), primary button (amber, 44px, radius 10, label weight 600), secondary (hairline outline),
text link with arrow →, eyebrow (mono caps), "kbd" keycaps, code block with copy, data figure (big mono number +
label), product window frame (traffic lights, real title bar), callouts, accordion, language menu, footer.
Deliver: a token sheet (light/dark), type specimen, component sheet with states, grid overlay examples.
FACTS (true as of 2026-11-18 — use only these, never invent numbers, logos, quotes, users or awards):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu. Interactive rebase by drag. Stage single lines.
  Undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery. Three-way conflict editor.
  File history (follows renames), blame, search. Profiles (own tabs, recent repos, identity). SSH accounts (right
  key per repo). GitHub & GitLab: PRs, reviews, issues, Actions. Built-in terminal and file editor. Worktrees,
  submodules, bisect, Git LFS. AI with the user's own provider (off by default). MCP server for AI agents (off by
  default). Themes, layout, shortcuts. 16 languages incl. Arabic RTL. `gitloom` command-line tool.
- Distributed from the website; first open needs System Settings ▸ Privacy & Security ▸ Open Anyway (not notarized
  yet); updates are EdDSA-signed and verified. No account, no telemetry.
- Brand: app icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle (use as-is, small).
ANTI-CLICHÉ (hard rules — reject your own output if it does any of these):
- No glowing orbs, blurred gradient blobs, aurora backgrounds, purple-to-blue gradients, neon lines, starfields.
- No bento grid of equal-ish cards as the main feature section; no "three icons in three columns" rows.
- No generic 3D illustrations, isometric scenes, mascots in the UI, emoji, stock photos, fake device mockups
  (no MacBook frame — show the app window itself, the macOS way).
- No centred-everything layout; no hero with a centred headline + centred button + screenshot below.
- No thread/weave/loom puns or visual metaphors in copy or graphics. The name is enough.
- No marketing filler ("revolutionary", "supercharge", "seamless", "next-level", "blazing"), no exclamation marks.
- No drop shadows heavier than the macOS window shadow; no gradient text; no glassmorphism cards on busy blur.
- No carousel, no autoplay video with sound, no cookie banner (there are no cookies).
<<<

---

## L1 — Landing page

>>>
Using the GitLoom design system from earlier in this session, design the landing page (desktop 1440, mobile
390, light and dark). Structure:

1. HERO — left-aligned, product-forward. Eyebrow (mono): "Git client for macOS · Free". Headline (2 lines max),
   e.g. "See every branch. Change history by hand." (write 3 options in this register: plain, confident, short).
   Lead: one sentence on native speed + undo. Buttons: amber "Download for macOS" + text link "Watch it work →".
   Small meta line in mono: "macOS 14+ · Apple silicon · 42 MB".
   Right side, bleeding off the grid edge: the real GitLoom window (dark theme) at a slight 3D perspective
   (≤ 6°), a live mini loop: a cursor drags `feature/sync` onto `main`, the native drop menu appears, "Rebase"
   is chosen, the lane straightens. Loop 6 s, starts in view, pauses off-screen.
2. PROOF STRIP — three data figures in mono, separated by hairlines, left-aligned: "0.15 s — first rows of a
   100,000-commit repository", "42 MB — native app, not Electron", "⌘Z — undo for almost everything".
3. FEATURE CHAPTERS (not cards) — 5 full-width chapters, each: eyebrow, h2, 2-sentence lead, 3 short facts as a
   hairline list, and a large product crop with one focused interaction (no decoration):
   a) History you can read (graph, search, blame) · b) Change history by dragging (drag & drop, interactive rebase)
   · c) Commit exactly what you mean (line staging, word diff) · d) Mistakes are cheap (undo timeline, reflog)
   · e) Work and personal, kept apart (profiles, SSH keys per repo). Alternate text-left / product-right.
4. INTEGRATIONS ROW — GitHub and GitLab panels inside the app (PR with checks, Actions run) as one wide crop;
   caption only.
5. FOR POWER USERS — a dense, quiet two-column list (terminal, editor, worktrees, submodules, bisect, LFS,
   `gitloom` CLI with a real command line, MCP for agents, AI with your own key). Text, monochrome symbols.
6. LANGUAGES & THEMES — one line of the 16 language names in their scripts, scrolling slowly; a light/dark split
   screenshot.
7. INSTALL — 3 steps in a row with tiny real macOS dialog crops; honest one-liner about notarization.
8. FINAL CTA — left-aligned headline + amber button on plain background; nothing else.
9. FOOTER from the shared shell.
Write the copy too (English), in the voice of Apple/Linear: short, concrete, no hype. Every claim must come from
FACTS. Provide responsive behaviour, RTL notes, and the motion spec per section.
FACTS (true as of 2026-11-18 — use only these, never invent numbers, logos, quotes, users or awards):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu. Interactive rebase by drag. Stage single lines.
  Undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery. Three-way conflict editor.
  File history (follows renames), blame, search. Profiles (own tabs, recent repos, identity). SSH accounts (right
  key per repo). GitHub & GitLab: PRs, reviews, issues, Actions. Built-in terminal and file editor. Worktrees,
  submodules, bisect, Git LFS. AI with the user's own provider (off by default). MCP server for AI agents (off by
  default). Themes, layout, shortcuts. 16 languages incl. Arabic RTL. `gitloom` command-line tool.
- Distributed from the website; first open needs System Settings ▸ Privacy & Security ▸ Open Anyway (not notarized
  yet); updates are EdDSA-signed and verified. No account, no telemetry.
- Brand: app icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle (use as-is, small).
ANTI-CLICHÉ (hard rules — reject your own output if it does any of these):
- No glowing orbs, blurred gradient blobs, aurora backgrounds, purple-to-blue gradients, neon lines, starfields.
- No bento grid of equal-ish cards as the main feature section; no "three icons in three columns" rows.
- No generic 3D illustrations, isometric scenes, mascots in the UI, emoji, stock photos, fake device mockups
  (no MacBook frame — show the app window itself, the macOS way).
- No centred-everything layout; no hero with a centred headline + centred button + screenshot below.
- No thread/weave/loom puns or visual metaphors in copy or graphics. The name is enough.
- No marketing filler ("revolutionary", "supercharge", "seamless", "next-level", "blazing"), no exclamation marks.
- No drop shadows heavier than the macOS window shadow; no gradient text; no glassmorphism cards on busy blur.
- No carousel, no autoplay video with sound, no cookie banner (there are no cookies).
<<<

---

## L2 — The hero interaction (spec for the developer)

>>>
Spec the hero mini-loop of GitLoom's landing page as an SVG + vanilla JS island (≤ 30 KB, no libraries) that
renders a faithful, simplified copy of GitLoom's graph: three lanes (blue main, pink feature/sync, green
fix/login), avatar dots, branch chips in rounded pills, a native-looking macOS context menu. Storyboard with
exact timings and easing: idle → cursor enters → grab chip (chip lifts 2px, shadow) → drag along a gentle arc →
hover target (main chip gets accent ring) → drop → menu fades in at cursor (120ms) → "Rebase feature/sync onto
main" highlights → commits lift, slide, re-land on main (stagger 60ms) → lane straightens → 1.2s hold → reset
with a quick ⌘Z keycap flash. Must pause off-screen, respect reduced motion (show before/after), be keyboard
accessible as a "Play" toggle, theme-aware, and mirror in RTL. Deliver SVG structure, state machine, CSS.
FACTS (true as of 2026-11-18 — use only these, never invent numbers, logos, quotes, users or awards):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu. Interactive rebase by drag. Stage single lines.
  Undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery. Three-way conflict editor.
  File history (follows renames), blame, search. Profiles (own tabs, recent repos, identity). SSH accounts (right
  key per repo). GitHub & GitLab: PRs, reviews, issues, Actions. Built-in terminal and file editor. Worktrees,
  submodules, bisect, Git LFS. AI with the user's own provider (off by default). MCP server for AI agents (off by
  default). Themes, layout, shortcuts. 16 languages incl. Arabic RTL. `gitloom` command-line tool.
- Distributed from the website; first open needs System Settings ▸ Privacy & Security ▸ Open Anyway (not notarized
  yet); updates are EdDSA-signed and verified. No account, no telemetry.
- Brand: app icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle (use as-is, small).
<<<

---

## S1 — Docs (hub + article)

>>>
Using the design system, design GitLoom's docs like a modern product docs site (think Linear Docs / Raycast
Manual): hub with a search field (⌘K / "/" opens a command-palette style search), "Start here" as a short
numbered path (not cards), topic index as a clean two-column list grouped by section (Getting started, Everyday
work, History, Tools, Accounts & hosting, AI, Personalise, Help). Article template: left nav (quiet, 14px),
readable column (62ch), right "On this page", product screenshots framed as macOS windows, callouts as a thin
left rule + icon (no coloured boxes), <kbd> keycaps, code blocks with copy, prev/next, "Last updated",
"Report an issue". Mobile: nav as a sheet. Light/dark, RTL.
FACTS (true as of 2026-11-18 — use only these, never invent numbers, logos, quotes, users or awards):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu. Interactive rebase by drag. Stage single lines.
  Undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery. Three-way conflict editor.
  File history (follows renames), blame, search. Profiles (own tabs, recent repos, identity). SSH accounts (right
  key per repo). GitHub & GitLab: PRs, reviews, issues, Actions. Built-in terminal and file editor. Worktrees,
  submodules, bisect, Git LFS. AI with the user's own provider (off by default). MCP server for AI agents (off by
  default). Themes, layout, shortcuts. 16 languages incl. Arabic RTL. `gitloom` command-line tool.
- Distributed from the website; first open needs System Settings ▸ Privacy & Security ▸ Open Anyway (not notarized
  yet); updates are EdDSA-signed and verified. No account, no telemetry.
- Brand: app icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle (use as-is, small).
ANTI-CLICHÉ (hard rules — reject your own output if it does any of these):
- No glowing orbs, blurred gradient blobs, aurora backgrounds, purple-to-blue gradients, neon lines, starfields.
- No bento grid of equal-ish cards as the main feature section; no "three icons in three columns" rows.
- No generic 3D illustrations, isometric scenes, mascots in the UI, emoji, stock photos, fake device mockups
  (no MacBook frame — show the app window itself, the macOS way).
- No centred-everything layout; no hero with a centred headline + centred button + screenshot below.
- No thread/weave/loom puns or visual metaphors in copy or graphics. The name is enough.
- No marketing filler ("revolutionary", "supercharge", "seamless", "next-level", "blazing"), no exclamation marks.
- No drop shadows heavier than the macOS window shadow; no gradient text; no glassmorphism cards on busy blur.
- No carousel, no autoplay video with sound, no cookie banner (there are no cookies).
<<<

---

## S2 — Download + changelog

>>>
Using the design system: /download — left column: version (mono), date, requirements, amber button, "Older
versions" link; right column: the 3 first-open steps as tiny real macOS dialog crops with numbered captions; a
calm note on why "Open Anyway" is needed and that updates are signed. /changelog — timeline in a single column:
version (mono, large), date, channel tag (stable/beta as a quiet outline tag), grouped notes New / Improved /
Fixed as tight lists, anchor links, RSS link. No invented notes — placeholder structure only.
FACTS (true as of 2026-11-18 — use only these, never invent numbers, logos, quotes, users or awards):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu. Interactive rebase by drag. Stage single lines.
  Undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery. Three-way conflict editor.
  File history (follows renames), blame, search. Profiles (own tabs, recent repos, identity). SSH accounts (right
  key per repo). GitHub & GitLab: PRs, reviews, issues, Actions. Built-in terminal and file editor. Worktrees,
  submodules, bisect, Git LFS. AI with the user's own provider (off by default). MCP server for AI agents (off by
  default). Themes, layout, shortcuts. 16 languages incl. Arabic RTL. `gitloom` command-line tool.
- Distributed from the website; first open needs System Settings ▸ Privacy & Security ▸ Open Anyway (not notarized
  yet); updates are EdDSA-signed and verified. No account, no telemetry.
- Brand: app icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle (use as-is, small).
ANTI-CLICHÉ (hard rules — reject your own output if it does any of these):
- No glowing orbs, blurred gradient blobs, aurora backgrounds, purple-to-blue gradients, neon lines, starfields.
- No bento grid of equal-ish cards as the main feature section; no "three icons in three columns" rows.
- No generic 3D illustrations, isometric scenes, mascots in the UI, emoji, stock photos, fake device mockups
  (no MacBook frame — show the app window itself, the macOS way).
- No centred-everything layout; no hero with a centred headline + centred button + screenshot below.
- No thread/weave/loom puns or visual metaphors in copy or graphics. The name is enough.
- No marketing filler ("revolutionary", "supercharge", "seamless", "next-level", "blazing"), no exclamation marks.
- No drop shadows heavier than the macOS window shadow; no gradient text; no glassmorphism cards on busy blur.
- No carousel, no autoplay video with sound, no cookie banner (there are no cookies).
<<<

---

## S3 — Support

>>>
Using the design system, design /support as a problem-solving page: search field; "Common fixes" as an accordion
with these real answers (write them concisely): Apple could not verify GitLoom (Open Anyway; why); Git isn't
found (`xcode-select --install`, or choose git in Settings ▸ Git); repository owned by another user
(safe.directory, GitLoom offers to trust it); push uses the wrong SSH key (Settings ▸ Accounts) or needs sign-in
(Settings ▸ Hosting); a link asks before opening a folder (why); AI doesn't work (off by default, add your own
key in Settings ▸ AI); updates (Settings ▸ General; GitLoom ▸ Check for Updates…). Then "Report a bug" and
"Request a feature" as two plain rows linking to GitHub Issues (Jarvis219/gitloom-site) with what to include and
what never to paste (tokens, private code). Crash reports: offered after a crash, nothing sent automatically.
Contact: [OWNER FILLS]. FAQPage JSON-LD.
FACTS (true as of 2026-11-18 — use only these, never invent numbers, logos, quotes, users or awards):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu. Interactive rebase by drag. Stage single lines.
  Undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery. Three-way conflict editor.
  File history (follows renames), blame, search. Profiles (own tabs, recent repos, identity). SSH accounts (right
  key per repo). GitHub & GitLab: PRs, reviews, issues, Actions. Built-in terminal and file editor. Worktrees,
  submodules, bisect, Git LFS. AI with the user's own provider (off by default). MCP server for AI agents (off by
  default). Themes, layout, shortcuts. 16 languages incl. Arabic RTL. `gitloom` command-line tool.
- Distributed from the website; first open needs System Settings ▸ Privacy & Security ▸ Open Anyway (not notarized
  yet); updates are EdDSA-signed and verified. No account, no telemetry.
- Brand: app icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle (use as-is, small).
ANTI-CLICHÉ (hard rules — reject your own output if it does any of these):
- No glowing orbs, blurred gradient blobs, aurora backgrounds, purple-to-blue gradients, neon lines, starfields.
- No bento grid of equal-ish cards as the main feature section; no "three icons in three columns" rows.
- No generic 3D illustrations, isometric scenes, mascots in the UI, emoji, stock photos, fake device mockups
  (no MacBook frame — show the app window itself, the macOS way).
- No centred-everything layout; no hero with a centred headline + centred button + screenshot below.
- No thread/weave/loom puns or visual metaphors in copy or graphics. The name is enough.
- No marketing filler ("revolutionary", "supercharge", "seamless", "next-level", "blazing"), no exclamation marks.
- No drop shadows heavier than the macOS window shadow; no gradient text; no glassmorphism cards on busy blur.
- No carousel, no autoplay video with sound, no cookie banner (there are no cookies).
<<<

---

## S4 — Privacy, Terms, Security (legal-grade pages that still look designed)

>>>
Using the design system, design three text-first pages that feel as considered as the landing page:
- Shared layout: title, "Last updated [DATE]", a summary panel with 3–4 one-line statements and monochrome
  symbols, numbered sections with anchor links, a sticky mini-TOC on desktop, print-friendly CSS.
- /privacy: summary "No account. No telemetry. Your keys stay in your Keychain. Your code goes only where you
  send it." Then a table "What leaves your Mac — when — to whom" using ONLY: your Git remotes (fetch/pull/push);
  GitHub/GitLab APIs when signed in (your token); avatars only if Gravatar (SHA-256 of email) or GitHub is chosen
  (default avatars are local); AI provider you choose, only when you use AI (off by default, preview before the
  first send, obvious secrets redacted); update feed + downloads (checks on by default, no system profile);
  crash report only if you submit it. Website: static, no cookies, no analytics; hosting (Vercel) and downloads
  (GitHub) keep standard request logs. Local data paths. Rights, contact [OWNER FILLS].
- /terms: plain-language licence for a free closed-source app [owner confirms terms], your responsibility for
  pushes and history rewrites, third-party services, AI output may be wrong, no warranty, open-source
  acknowledgements list, governing law [OWNER FILLS].
- /security: how updates are protected (EdDSA signatures, downgrade refused), safe defaults (Keychain, MCP and AI
  off by default, links and folder opens ask first, imports can't redirect your tokens), "open only repositories
  you trust", how to report a vulnerability [contact OWNER FILLS], how to verify the app signature; plus a
  /.well-known/security.txt.
Write the copy; mark every placeholder; note that a lawyer must review /privacy and /terms.
FACTS (true as of 2026-11-18 — use only these, never invent numbers, logos, quotes, users or awards):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu. Interactive rebase by drag. Stage single lines.
  Undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery. Three-way conflict editor.
  File history (follows renames), blame, search. Profiles (own tabs, recent repos, identity). SSH accounts (right
  key per repo). GitHub & GitLab: PRs, reviews, issues, Actions. Built-in terminal and file editor. Worktrees,
  submodules, bisect, Git LFS. AI with the user's own provider (off by default). MCP server for AI agents (off by
  default). Themes, layout, shortcuts. 16 languages incl. Arabic RTL. `gitloom` command-line tool.
- Distributed from the website; first open needs System Settings ▸ Privacy & Security ▸ Open Anyway (not notarized
  yet); updates are EdDSA-signed and verified. No account, no telemetry.
- Brand: app icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle (use as-is, small).
ANTI-CLICHÉ (hard rules — reject your own output if it does any of these):
- No glowing orbs, blurred gradient blobs, aurora backgrounds, purple-to-blue gradients, neon lines, starfields.
- No bento grid of equal-ish cards as the main feature section; no "three icons in three columns" rows.
- No generic 3D illustrations, isometric scenes, mascots in the UI, emoji, stock photos, fake device mockups
  (no MacBook frame — show the app window itself, the macOS way).
- No centred-everything layout; no hero with a centred headline + centred button + screenshot below.
- No thread/weave/loom puns or visual metaphors in copy or graphics. The name is enough.
- No marketing filler ("revolutionary", "supercharge", "seamless", "next-level", "blazing"), no exclamation marks.
- No drop shadows heavier than the macOS window shadow; no gradient text; no glassmorphism cards on busy blur.
- No carousel, no autoplay video with sound, no cookie banner (there are no cookies).
<<<

---

## S5 — Press, compare, 404

>>>
Using the design system: /press — one-line and one-paragraph descriptions, icon downloads (PNG/SVG), real
screenshots (light/dark), colour tokens, "logo do/don't", fact sheet, contact [OWNER FILLS]; layout as a clean
asset table with download buttons. /compare (optional) — "GitLoom and other ways to use Git": a neutral table vs
"Electron-based Git clients" and "the command line" (named products only with owner-supplied sources and a date),
plus an honest "GitLoom may not be for you if…" (macOS only, Apple silicon only, not notarized yet). 404 — a
single line "This page doesn't exist." with search and links to Home, Docs, Download, Support; the app icon small,
no illustration.
FACTS (true as of 2026-11-18 — use only these, never invent numbers, logos, quotes, users or awards):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu. Interactive rebase by drag. Stage single lines.
  Undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery. Three-way conflict editor.
  File history (follows renames), blame, search. Profiles (own tabs, recent repos, identity). SSH accounts (right
  key per repo). GitHub & GitLab: PRs, reviews, issues, Actions. Built-in terminal and file editor. Worktrees,
  submodules, bisect, Git LFS. AI with the user's own provider (off by default). MCP server for AI agents (off by
  default). Themes, layout, shortcuts. 16 languages incl. Arabic RTL. `gitloom` command-line tool.
- Distributed from the website; first open needs System Settings ▸ Privacy & Security ▸ Open Anyway (not notarized
  yet); updates are EdDSA-signed and verified. No account, no telemetry.
- Brand: app icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle (use as-is, small).
ANTI-CLICHÉ (hard rules — reject your own output if it does any of these):
- No glowing orbs, blurred gradient blobs, aurora backgrounds, purple-to-blue gradients, neon lines, starfields.
- No bento grid of equal-ish cards as the main feature section; no "three icons in three columns" rows.
- No generic 3D illustrations, isometric scenes, mascots in the UI, emoji, stock photos, fake device mockups
  (no MacBook frame — show the app window itself, the macOS way).
- No centred-everything layout; no hero with a centred headline + centred button + screenshot below.
- No thread/weave/loom puns or visual metaphors in copy or graphics. The name is enough.
- No marketing filler ("revolutionary", "supercharge", "seamless", "next-level", "blazing"), no exclamation marks.
- No drop shadows heavier than the macOS window shadow; no gradient text; no glassmorphism cards on busy blur.
- No carousel, no autoplay video with sound, no cookie banner (there are no cookies).
<<<

---

## S6 — Copy pass (run after layouts)

>>>
Rewrite all headlines, leads and button labels of the GitLoom site in the voice of Apple's and Linear's product
pages: concrete verbs, present tense, second person, ≤ 7 words per headline, ≤ 18 words per lead, no puns, no
hype words, no exclamation marks, nothing that isn't in FACTS. Give 3 options per headline (plain / confident /
short) and pick one. Flag any phrase that won't translate well into the 15 other languages.
FACTS (true as of 2026-11-18 — use only these, never invent numbers, logos, quotes, users or awards):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu. Interactive rebase by drag. Stage single lines.
  Undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery. Three-way conflict editor.
  File history (follows renames), blame, search. Profiles (own tabs, recent repos, identity). SSH accounts (right
  key per repo). GitHub & GitLab: PRs, reviews, issues, Actions. Built-in terminal and file editor. Worktrees,
  submodules, bisect, Git LFS. AI with the user's own provider (off by default). MCP server for AI agents (off by
  default). Themes, layout, shortcuts. 16 languages incl. Arabic RTL. `gitloom` command-line tool.
- Distributed from the website; first open needs System Settings ▸ Privacy & Security ▸ Open Anyway (not notarized
  yet); updates are EdDSA-signed and verified. No account, no telemetry.
- Brand: app icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle (use as-is, small).
ANTI-CLICHÉ (hard rules — reject your own output if it does any of these):
- No glowing orbs, blurred gradient blobs, aurora backgrounds, purple-to-blue gradients, neon lines, starfields.
- No bento grid of equal-ish cards as the main feature section; no "three icons in three columns" rows.
- No generic 3D illustrations, isometric scenes, mascots in the UI, emoji, stock photos, fake device mockups
  (no MacBook frame — show the app window itself, the macOS way).
- No centred-everything layout; no hero with a centred headline + centred button + screenshot below.
- No thread/weave/loom puns or visual metaphors in copy or graphics. The name is enough.
- No marketing filler ("revolutionary", "supercharge", "seamless", "next-level", "blazing"), no exclamation marks.
- No drop shadows heavier than the macOS window shadow; no gradient text; no glassmorphism cards on busy blur.
- No carousel, no autoplay video with sound, no cookie banner (there are no cookies).
<<<
