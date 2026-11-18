# GitLoom landing page — bold prompt set (v2)

Cách dùng: mỗi mục `## P…` là một prompt độc lập, copy nguyên khối (từ dòng `>>>` đến `<<<`) vào công cụ
AI (v0 / Lovable / Figma Make / Claude / Midjourney / GPT-image). Nên chạy theo thứ tự:
P0 (chọn hướng) → P1 (cả trang) → P2 (hero chơi được) → P3–P6 (từng phần) → P7 (ảnh minh hoạ) → P8 (chữ).
Các trang khác (Docs, Support, Privacy, Terms, Security, Download, Changelog, Compare, Press, 404): xem `pages-prompts.md` (P9–P17).
Mọi con số trong đây là số đo thật của app; cấm AI thêm số liệu, logo khách hàng, testimonial.

Facts block — already pasted into every prompt below (edit here and in the prompts together):

```
FACTS (true, measured — use only these):
- GitLoom: free, native macOS Git client written in Swift/AppKit. Not Electron. App size 42 MB.
- 100,000-commit repository: first rows of the graph in ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → menu: merge / rebase / cherry-pick / create PR. Interactive rebase by drag.
- Stage files, hunks or single lines; side-by-side or unified diff with word-level highlights.
- Undo/redo for commits, checkouts, merges, resets, branch changes; reflog recovery.
- Three-way conflict editor. File history (follows renames), blame, search.
- Profiles: each has its own tabs, recent repos and commit identity; automatic SSH key per repo.
- GitHub & GitLab: PRs, reviews, issues, GitHub Actions runs and logs, inside the app.
- Built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes.
- AI commit messages with the user's own provider; MCP server so agents can drive GitLoom.
- 16 languages (incl. Arabic RTL), light/dark, themes. macOS 14+, Apple silicon. Auto-updates (signed).
- No account, no subscription, no telemetry of your code.
BRAND: icon = orange-yellow bird in a nest woven from colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1, amber #F6B17A
(+ the app's real graph lane colours, dark theme: #4C9BFF blue, #F0649F pink, #2FD08C green,
#FF9F2E orange, #A684FF violet; light theme: #2F7CF6, #D94F8C, #179A66, #DB7300, #7C4DEB).
Tagline: "Git, woven clearly."
```

---

## P0 — Pick an art direction (run first, choose one)

>>>
You are an award-winning creative director (Awwwards / FWA level) for developer tools. Most Git GUI
sites look the same: dark SaaS template, a screenshot, a feature grid, a pricing table. GitLoom must look
nothing like that. Propose THREE radically different art directions for its landing page, each built on
the metaphor "branches are threads on a loom; GitLoom weaves them clearly".

For each direction give: a name, a one-line concept, mood references (describe, don't link), colour usage
of the palette, typography pairing (one display face from Google Fonts or system + SF Mono), texture,
signature visual element, signature interaction, hero composition sketch in words, and why a developer
would screenshot it and share it.

Must explore at least these three territories:
A. "Woven Craft" — tactile, editorial, warm: paper/linen grain, amber thread, serif display type,
   macro-photography feel of real woven threads that turn into commit graph lanes.
B. "Night Loom" — deep navy space, glowing thread-lanes like fibre optics, 3D woven ribbon in the hero
   that untangles as you scroll, cinematic.
C. "Precision Grid" — Swiss/brutalist, huge type, strict grid, monochrome navy/off-white with a single
   amber accent, data-viz energy (benchmarks as giant numbers).

FACTS (true, measured — use only these):
- GitLoom: free, native macOS Git client written in Swift/AppKit. Not Electron. App size 42 MB.
- 100,000-commit repository: first rows of the graph in ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → menu: merge / rebase / cherry-pick / create PR. Interactive rebase by drag.
- Stage files, hunks or single lines; side-by-side or unified diff with word-level highlights.
- Undo/redo for commits, checkouts, merges, resets, branch changes; reflog recovery.
- Three-way conflict editor. File history (follows renames), blame, search.
- Profiles: each has its own tabs, recent repos and commit identity; automatic SSH key per repo.
- GitHub & GitLab: PRs, reviews, issues, GitHub Actions runs and logs, inside the app.
- Built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes.
- AI commit messages with the user's own provider; MCP server so agents can drive GitLoom.
- 16 languages (incl. Arabic RTL), light/dark, themes. macOS 14+, Apple silicon. Auto-updates (signed).
- No account, no subscription, no telemetry of your code.
BRAND: icon = orange-yellow bird in a nest woven from colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1, amber #F6B17A
(+ the app's real graph lane colours, dark theme: #4C9BFF blue, #F0649F pink, #2FD08C green,
#FF9F2E orange, #A684FF violet; light theme: #2F7CF6, #D94F8C, #179A66, #DB7300, #7C4DEB).
Tagline: "Git, woven clearly."
End with your recommendation and the reason in 3 bullets.
<<<

---

## P1 — The whole page (master prompt)

>>>
Design a landing page for GitLoom that wins attention against every other Git client site. Direction:
[PASTE THE DIRECTION CHOSEN IN P0]. Desktop 1440 and mobile 390, light and dark.

Principles:
1. The product is the hero — but ALIVE: interactive, not a static screenshot.
2. One idea per screen, cinematic scroll. Each section is a "scene" that the woven thread passes through:
   a single continuous SVG thread (amber) starts in the hero and weaves down the whole page, crossing
   and knotting at each section — it becomes the graph lane of the next demo.
3. Proof over adjectives: real numbers set huge.
4. Every feature shown doing its job (micro-demos), never as an icon + paragraph.

Scenes, in order:
1. HERO — "Git, woven clearly." + a PLAYABLE mini-graph (see P2). Primary CTA amber pill
   "Download for macOS" + "Free · macOS 14+ · Apple silicon". Secondary: "Watch the 40-second tour".
2. SPEED — a full-bleed scene: "100,000 commits. 0.15 seconds." A racing visual: graph rows pouring in,
   a stopwatch stopping at 0.15 s; small print "first rows of a 100k-commit repo on an M-series Mac;
   full history in 0.7 s, ~170 MB". Side note: "42 MB native app. Not Electron."
3. DRAG & DROP — split scene: left a branch being dragged onto main, the drop menu (Merge / Rebase /
   Cherry-pick / Create PR); right the history re-weaving. Caption: "Rebase is a drag, not a ritual."
4. UNDO — a time-scrubber: a row of operation chips (Commit, Merge, Reset…) with a big ⌘Z keycap;
   scrubbing rewinds the graph. "Made a mess? ⌘Z."
5. PRECISION — line staging: a diff where individual lines light up amber as they get staged;
   word-level highlights; "Stage 3 lines" button. "Commit exactly what you meant."
6. CONFLICTS — three panes (Theirs / Result / Yours) resolving with smooth line moves. "Conflicts, calmly."
7. TWO LIVES, ONE MAC — profiles: a toggle Work ↔ Personal; tabs, recent repos, avatar and commit email
   swap with a weave transition. "Work and personal never cross threads."
8. YOUR HOST, INSIDE — bento grid: PR with checks, review comments, Issues, GitHub Actions run with
   live job steps, GitLab badge.
9. POWER DRAWER — a dense bento of small animated tiles: terminal, editor, blame, file history,
   worktrees, submodules, bisect, LFS, stash preview, search.
10. AI & AGENTS — commit box with "Suggest message" streaming text; an MCP panel showing an agent
    calling GitLoom tools. "Bring your own AI."
11. EVERYWHERE — a ring of the 16 language names in their scripts rotating slowly, with Arabic mirrored;
    theme swatches flipping light/dark.
12. COMPARE — honest table: GitLoom / typical Electron Git GUI / command line on native speed, app size,
    visual history editing, undo, account required, price. No competitor names or logos.
13. INSTALL — 3 steps with a mini macOS dialog illustration, reassuring tone (not notarized yet; updates
    signed and verified).
14. FAQ.
15. FINALE — the amber thread ties a knot into the GitLoom icon; "Weave your next commit." + CTA.

Hard rules: WCAG 2.2 AA; prefers-reduced-motion = static frames; Astro static site, JS only as small
islands (target < 90 KB JS total, the playable hero ≤ 40 KB); no autoplay sound; Lighthouse ≥ 95;
16 languages with +35% string length and full RTL mirroring; one h1; real copy only.
FACTS (true, measured — use only these):
- GitLoom: free, native macOS Git client written in Swift/AppKit. Not Electron. App size 42 MB.
- 100,000-commit repository: first rows of the graph in ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → menu: merge / rebase / cherry-pick / create PR. Interactive rebase by drag.
- Stage files, hunks or single lines; side-by-side or unified diff with word-level highlights.
- Undo/redo for commits, checkouts, merges, resets, branch changes; reflog recovery.
- Three-way conflict editor. File history (follows renames), blame, search.
- Profiles: each has its own tabs, recent repos and commit identity; automatic SSH key per repo.
- GitHub & GitLab: PRs, reviews, issues, GitHub Actions runs and logs, inside the app.
- Built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes.
- AI commit messages with the user's own provider; MCP server so agents can drive GitLoom.
- 16 languages (incl. Arabic RTL), light/dark, themes. macOS 14+, Apple silicon. Auto-updates (signed).
- No account, no subscription, no telemetry of your code.
BRAND: icon = orange-yellow bird in a nest woven from colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1, amber #F6B17A
(+ the app's real graph lane colours, dark theme: #4C9BFF blue, #F0649F pink, #2FD08C green,
#FF9F2E orange, #A684FF violet; light theme: #2F7CF6, #D94F8C, #179A66, #DB7300, #7C4DEB).
Tagline: "Git, woven clearly."
Deliver: art-directed frames for every scene (desktop + mobile, light + dark), component sheet, design
tokens, motion spec per scene (trigger, duration, easing, reduced-motion fallback).
<<<

---

## P2 — The playable hero (the thing nobody else has)

>>>
Design and spec a small interactive "toy" for the hero of GitLoom's landing page: a living commit graph
the visitor can play with in the browser — the moment that makes people say "oh, that's nice".

Behaviour:
- A mini graph: `main` (blue lane) and two branches `feature/sync` (pink) and `fix/login` (green) with
  4–6 commits each, drawn as smooth woven curves with avatar dots.
- Hint chip pulsing once: "Drag feature/sync onto main".
- On drop: a native-looking macOS menu appears: "Merge feature/sync into main", "Rebase feature/sync onto
  main", "Cherry-pick 3 commits". Choosing one animates the threads re-weaving (merge = two lanes knot
  into a merge node; rebase = commits lift and re-land on top of main, lane straightens).
- A ⌘Z keycap appears: clicking it (or pressing ⌘Z / Ctrl+Z) rewinds the animation. "Everything in
  GitLoom can be undone like this."
- After one action, a soft CTA slides in: "That's GitLoom. Download for macOS."
- Keyboard accessible: Tab to a branch chip, Enter to pick it up, arrows to choose the target, Enter to drop.
- Reduced motion: shows before/after frames with a toggle instead of animation. Mobile: tap branch, tap target.
- Tech: inline SVG + vanilla JS (or Preact island) ≤ 40 KB, no canvas libraries; colours from tokens;
  works in both themes; labels translatable; RTL mirrors the graph.

Provide: the frame-by-frame storyboard (idle, hover, drag, menu, merge result, rebase result, undo), exact
easing curves and durations, SVG structure, and component states.
FACTS (true, measured — use only these):
- GitLoom: free, native macOS Git client written in Swift/AppKit. Not Electron. App size 42 MB.
- 100,000-commit repository: first rows of the graph in ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → menu: merge / rebase / cherry-pick / create PR. Interactive rebase by drag.
- Stage files, hunks or single lines; side-by-side or unified diff with word-level highlights.
- Undo/redo for commits, checkouts, merges, resets, branch changes; reflog recovery.
- Three-way conflict editor. File history (follows renames), blame, search.
- Profiles: each has its own tabs, recent repos and commit identity; automatic SSH key per repo.
- GitHub & GitLab: PRs, reviews, issues, GitHub Actions runs and logs, inside the app.
- Built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes.
- AI commit messages with the user's own provider; MCP server so agents can drive GitLoom.
- 16 languages (incl. Arabic RTL), light/dark, themes. macOS 14+, Apple silicon. Auto-updates (signed).
- No account, no subscription, no telemetry of your code.
BRAND: icon = orange-yellow bird in a nest woven from colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1, amber #F6B17A
(+ the app's real graph lane colours, dark theme: #4C9BFF blue, #F0649F pink, #2FD08C green,
#FF9F2E orange, #A684FF violet; light theme: #2F7CF6, #D94F8C, #179A66, #DB7300, #7C4DEB).
Tagline: "Git, woven clearly."
<<<

---

## P3 — Speed scene (benchmark as spectacle)

>>>
Design a full-bleed "benchmark as art" section for GitLoom. Headline: "100,000 commits. 0.15 seconds."
Visual: thousands of thin coloured graph rows streaming in from the top like threads on a loom, freezing
the instant a large stopwatch (SF Mono digits) hits 0.15 s. Below, three huge numbers with labels:
"0.15 s first rows", "0.7 s full history", "42 MB native app". Footnote with the honest conditions
(100k-commit repository, Apple silicon Mac). Make the numbers the typography — 160–220 px display size on
desktop, tabular figures. Dark: navy with lanes glowing; light: off-white with ink-like lanes. Reduced
motion: the final frame only.
FACTS (true, measured — use only these):
- GitLoom: free, native macOS Git client written in Swift/AppKit. Not Electron. App size 42 MB.
- 100,000-commit repository: first rows of the graph in ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → menu: merge / rebase / cherry-pick / create PR. Interactive rebase by drag.
- Stage files, hunks or single lines; side-by-side or unified diff with word-level highlights.
- Undo/redo for commits, checkouts, merges, resets, branch changes; reflog recovery.
- Three-way conflict editor. File history (follows renames), blame, search.
- Profiles: each has its own tabs, recent repos and commit identity; automatic SSH key per repo.
- GitHub & GitLab: PRs, reviews, issues, GitHub Actions runs and logs, inside the app.
- Built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes.
- AI commit messages with the user's own provider; MCP server so agents can drive GitLoom.
- 16 languages (incl. Arabic RTL), light/dark, themes. macOS 14+, Apple silicon. Auto-updates (signed).
- No account, no subscription, no telemetry of your code.
BRAND: icon = orange-yellow bird in a nest woven from colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1, amber #F6B17A
(+ the app's real graph lane colours, dark theme: #4C9BFF blue, #F0649F pink, #2FD08C green,
#FF9F2E orange, #A684FF violet; light theme: #2F7CF6, #D94F8C, #179A66, #DB7300, #7C4DEB).
Tagline: "Git, woven clearly."
<<<

---

## P4 — Feature micro-demos (one prompt per feature, reuse)

>>>
Design a self-contained "micro-demo" card for GitLoom's landing page, 560×420 desktop, full-width mobile.
Feature: [Drag & drop merge | Undo time-scrubber | Line staging | Three-way conflicts | Profiles switch |
PR & Actions inside | Blame & file history | Terminal + editor | AI commit message | MCP agent].
The card shows a cropped, simplified recreation of GitLoom's real UI (dark mac window chrome, 8 px radius,
SF Pro/SF Mono, lane colours) performing ONE action in a 4–6 s loop that starts when scrolled into view
and pauses when out of view. Include: a 3-word kicker (amber, caps), a ≤ 8-word headline, ≤ 30-word body,
the loop storyboard (keyframes with timing), and a static poster frame for reduced motion.
Never show fake data that looks real (use sample repo "atlas", authors Mai, Duc, Sara, Alex).
FACTS (true, measured — use only these):
- GitLoom: free, native macOS Git client written in Swift/AppKit. Not Electron. App size 42 MB.
- 100,000-commit repository: first rows of the graph in ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → menu: merge / rebase / cherry-pick / create PR. Interactive rebase by drag.
- Stage files, hunks or single lines; side-by-side or unified diff with word-level highlights.
- Undo/redo for commits, checkouts, merges, resets, branch changes; reflog recovery.
- Three-way conflict editor. File history (follows renames), blame, search.
- Profiles: each has its own tabs, recent repos and commit identity; automatic SSH key per repo.
- GitHub & GitLab: PRs, reviews, issues, GitHub Actions runs and logs, inside the app.
- Built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes.
- AI commit messages with the user's own provider; MCP server so agents can drive GitLoom.
- 16 languages (incl. Arabic RTL), light/dark, themes. macOS 14+, Apple silicon. Auto-updates (signed).
- No account, no subscription, no telemetry of your code.
BRAND: icon = orange-yellow bird in a nest woven from colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1, amber #F6B17A
(+ the app's real graph lane colours, dark theme: #4C9BFF blue, #F0649F pink, #2FD08C green,
#FF9F2E orange, #A684FF violet; light theme: #2F7CF6, #D94F8C, #179A66, #DB7300, #7C4DEB).
Tagline: "Git, woven clearly."
<<<

---

## P5 — Bento "power drawer"

>>>
Design a bento grid (12-column desktop, 2-column mobile) titled "Everything else you reach for" for
GitLoom. Tiles of mixed sizes, each with a tiny live element: Terminal (cursor blinking, `git status`),
File editor (syntax-highlighted Swift), Blame (author colour bars), File history (rename arrow), Worktrees
(three folders stacked), Submodules (nested rings), Bisect (binary search bar narrowing good/bad),
Git LFS (large file badge), Stash preview (peek card), Search (query + highlighted commits), Themes
(swatches flipping), 16 languages (scripts cycling). Tiles lift 2 px and show amber edge on hover; the
woven amber thread passes behind the grid. Keep it calm, not noisy.
FACTS (true, measured — use only these):
- GitLoom: free, native macOS Git client written in Swift/AppKit. Not Electron. App size 42 MB.
- 100,000-commit repository: first rows of the graph in ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → menu: merge / rebase / cherry-pick / create PR. Interactive rebase by drag.
- Stage files, hunks or single lines; side-by-side or unified diff with word-level highlights.
- Undo/redo for commits, checkouts, merges, resets, branch changes; reflog recovery.
- Three-way conflict editor. File history (follows renames), blame, search.
- Profiles: each has its own tabs, recent repos and commit identity; automatic SSH key per repo.
- GitHub & GitLab: PRs, reviews, issues, GitHub Actions runs and logs, inside the app.
- Built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes.
- AI commit messages with the user's own provider; MCP server so agents can drive GitLoom.
- 16 languages (incl. Arabic RTL), light/dark, themes. macOS 14+, Apple silicon. Auto-updates (signed).
- No account, no subscription, no telemetry of your code.
BRAND: icon = orange-yellow bird in a nest woven from colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1, amber #F6B17A
(+ the app's real graph lane colours, dark theme: #4C9BFF blue, #F0649F pink, #2FD08C green,
#FF9F2E orange, #A684FF violet; light theme: #2F7CF6, #D94F8C, #179A66, #DB7300, #7C4DEB).
Tagline: "Git, woven clearly."
<<<

---

## P6 — Install + finale (convert the hesitant)

>>>
Design two closing sections for GitLoom.
1) "Install in a minute": three steps as a horizontal storyboard with small, accurate macOS illustrations
   (Finder drag to Applications; the "can't verify the developer" dialog with Done highlighted; System
   Settings ▸ Privacy & Security with "Open Anyway" highlighted). Friendly reassurance line: "GitLoom isn't
   notarized yet. Updates are still signed and checked before they install." Make it feel safe and
   transparent, not like a warning.
2) Finale: the continuous amber thread from the top of the page ties a knot that resolves into the GitLoom
   bird icon; headline "Weave your next commit."; amber pill "Download for macOS"; small "Free · macOS 14+ ·
   Apple silicon · 16 languages". Navy → indigo gradient with faint woven texture.
FACTS (true, measured — use only these):
- GitLoom: free, native macOS Git client written in Swift/AppKit. Not Electron. App size 42 MB.
- 100,000-commit repository: first rows of the graph in ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → menu: merge / rebase / cherry-pick / create PR. Interactive rebase by drag.
- Stage files, hunks or single lines; side-by-side or unified diff with word-level highlights.
- Undo/redo for commits, checkouts, merges, resets, branch changes; reflog recovery.
- Three-way conflict editor. File history (follows renames), blame, search.
- Profiles: each has its own tabs, recent repos and commit identity; automatic SSH key per repo.
- GitHub & GitLab: PRs, reviews, issues, GitHub Actions runs and logs, inside the app.
- Built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes.
- AI commit messages with the user's own provider; MCP server so agents can drive GitLoom.
- 16 languages (incl. Arabic RTL), light/dark, themes. macOS 14+, Apple silicon. Auto-updates (signed).
- No account, no subscription, no telemetry of your code.
BRAND: icon = orange-yellow bird in a nest woven from colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1, amber #F6B17A
(+ the app's real graph lane colours, dark theme: #4C9BFF blue, #F0649F pink, #2FD08C green,
#FF9F2E orange, #A684FF violet; light theme: #2F7CF6, #D94F8C, #179A66, #DB7300, #7C4DEB).
Tagline: "Git, woven clearly."
<<<

---

## P7 — Illustration / image-generation prompts

Use for hero backgrounds, section art and social images (Midjourney, GPT-image, Ideogram). Keep text out
of generated images; put text in HTML.

>>>
Macro photograph of colourful threads on a wooden hand loom, threads in electric blue, pink, mint green,
amber and violet running parallel then crossing and merging like a git commit graph, soft studio light,
shallow depth of field, deep navy background (#2D3250), warm amber rim light (#F6B17A), tactile linen
texture, premium editorial, 16:9, no text, no logos
<<<

>>>
Abstract 3D render of glowing fibre-optic threads weaving through each other in dark navy space, five
lanes (blue, pink, green, amber, violet) braiding into one clean straight line on the right, subtle
volumetric light, Apple keynote aesthetic, minimal, high contrast, 21:9 ultra-wide hero background,
negative space on the left for a headline, no text
<<<

>>>
Isometric illustration of a tiny orange-yellow bird building a nest from colourful threads that look like
git branches with small round commit nodes, royal blue and navy palette with amber accents, clean vector
style with soft grain, friendly and premium, square 1:1, no text
<<<

>>>
Open Graph social card background 1200x630: dark navy #2D3250 gradient to indigo #424769, a single amber
thread curving across and tying a small knot on the right third, faint woven texture, generous empty
space on the left for a title, no text
<<<

---

## P8 — Copy that punches (rewrite headlines)

>>>
You are a copywriter for premium developer tools (think Linear, Raycast, Arc). Rewrite the headlines
and 1-line subheads for each scene of GitLoom's landing page (hero, speed, drag & drop, undo, line
staging, conflicts, profiles, host integration, power drawer, AI & agents, languages, compare, install,
finale). For each: 3 options — one witty, one confident, one plain-spoken. Max 7 words per headline,
max 16 words per subhead. Use the loom/thread/weave metaphor at most in 3 places total so it stays
special. No hype words (revolutionary, blazing, supercharge, seamless), no exclamation marks, no claims
outside the facts. Then pick a final set and explain the rhythm of the page in 3 bullets.
Everything must translate well into 15 other languages (avoid idioms that don't translate; flag puns).
FACTS (true, measured — use only these):
- GitLoom: free, native macOS Git client written in Swift/AppKit. Not Electron. App size 42 MB.
- 100,000-commit repository: first rows of the graph in ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → menu: merge / rebase / cherry-pick / create PR. Interactive rebase by drag.
- Stage files, hunks or single lines; side-by-side or unified diff with word-level highlights.
- Undo/redo for commits, checkouts, merges, resets, branch changes; reflog recovery.
- Three-way conflict editor. File history (follows renames), blame, search.
- Profiles: each has its own tabs, recent repos and commit identity; automatic SSH key per repo.
- GitHub & GitLab: PRs, reviews, issues, GitHub Actions runs and logs, inside the app.
- Built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes.
- AI commit messages with the user's own provider; MCP server so agents can drive GitLoom.
- 16 languages (incl. Arabic RTL), light/dark, themes. macOS 14+, Apple silicon. Auto-updates (signed).
- No account, no subscription, no telemetry of your code.
BRAND: icon = orange-yellow bird in a nest woven from colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1, amber #F6B17A
(+ the app's real graph lane colours, dark theme: #4C9BFF blue, #F0649F pink, #2FD08C green,
#FF9F2E orange, #A684FF violet; light theme: #2F7CF6, #D94F8C, #179A66, #DB7300, #7C4DEB).
Tagline: "Git, woven clearly."
<<<
