> **Phong cách: dùng `v3-prompts.md` (D0 + S1–S6).** File này vẫn đúng về cấu trúc trang và dữ kiện (đặc biệt bảng dữ liệu Privacy), nhưng phần mô tả giao diện đã cũ.

# GitLoom site — prompts for the other pages (v1)

## Cách dùng
- Mỗi mục `## P…` là một prompt riêng. Copy từ `>>>` đến `<<<` rồi dán vào công cụ AI (v0, Lovable, Figma Make, Claude…).
- Chạy **P9 trước**: P9 dựng khung chung (header, footer, sơ đồ URL), các trang sau dùng lại khung đó.
- Dán kèm phong cách đã chọn ở `bold-prompts.md` (P0) để mọi trang cùng một kiểu.
- Mọi dữ kiện trong file này đã được kiểm với mã nguồn ngày 2026-11-18.
- Ô `[…]` là phần **chủ repo phải tự điền**: tên, email liên hệ, quốc gia, ngày hiệu lực. Đừng để AI tự điền.
- Trang Privacy và Terms nên nhờ người có chuyên môn pháp lý đọc lại trước khi đăng.

---

## Facts block (đã chèn sẵn vào từng prompt bên dưới; sửa thì sửa cả hai chỗ)

```
PRODUCT FACTS (true as of 2026-11-18 — use only these):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB. macOS 14+, Apple silicon.
- Distributed from the website, not the Mac App Store. Not notarized yet: first open needs System Settings ▸
  Privacy & Security ▸ Open Anyway. Later updates install through the built-in updater (Sparkle), every update
  EdDSA-signed and verified before install; downgrades are refused.
- Downloads: GitHub Releases of the public repo Jarvis219/gitloom-site (stable link:
  https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg). Source code is private.
- Site: https://gitloom-site.vercel.app (Astro, static, 16 languages incl. Arabic RTL, Vercel hosting).
- Support channel to use: GitHub Issues on Jarvis219/gitloom-site (public). [CONTACT EMAIL — optional, owner fills].
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Features: commit graph; drag & drop merge/rebase/cherry-pick; interactive rebase; line staging; undo/redo +
  reflog recovery; three-way conflict editor; file history (follows renames), blame, search; profiles with own
  tabs/recent repos/identity; SSH accounts (right key per repo); GitHub & GitLab (PRs, reviews, issues, Actions);
  built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes; AI with the user's own
  provider; MCP server for AI agents; themes, layout, keyboard customisation; `gitloom` command-line tool.
BRAND: icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1 (decoration only on white), amber #F6B17A (CTA,
navy text on it). Light bg #F8F6F3, muted text #555B86; dark surfaces #383D5E, dark muted #C3C6DE.
Tagline: "Git, woven clearly." No fabricated numbers, logos, testimonials, awards or user counts.
```

---

## P9 — Information architecture and the shared shell (run first)

>>>
You are designing the multi-page website of GitLoom (facts below). The landing page already exists; design the
shared shell and the information architecture for every other page so they feel like one product site.

URL map (static site, every page in 16 languages: English at the root, others under /vi/, /ja/, /zh-hans/,
/zh-hant/, /ko/, /de/, /fr/, /es/, /it/, /pt-br/, /ru/, /uk/, /pl/, /tr/, /ar/ — Arabic is right-to-left):
- / (landing) · /download · /docs/ (hub) and /docs/<topic>/ articles · /changelog · /support ·
  /security · /privacy · /terms · /compare (optional) · /press (about + press kit) · 404.

Design:
1. Header: logo, Features, Docs, Download (amber pill), Support, language menu (globe + current language name),
   theme follows system. Mobile: a sheet menu.
2. Footer in 4 columns: Product (Features, Download, Changelog, Compare), Help (Docs, Support, Security),
   Legal (Privacy, Terms), Project (Press kit, GitHub releases). Bottom row: "© [YEAR] [OWNER NAME]",
   language menu, "Made for the Mac".
3. Breadcrumbs on docs and legal pages; "Last updated <date>" on legal pages; "Edit/report an issue" link on docs
   pointing to the public issue tracker.
4. Page templates: Marketing (wide, visual), Article (readable 68–72ch column + right TOC), Legal (single column,
   numbered sections, summary box at top), Hub (cards grid).
5. SEO for every page: unique title/description, canonical, hreflang alternates for the 16 locales + x-default,
   Open Graph image per template, JSON-LD (SoftwareApplication on landing/download, FAQPage on support,
   TechArticle + BreadcrumbList on docs, WebPage on legal), sitemap entries.
6. Accessibility: WCAG 2.2 AA, skip link, visible focus (slate ring), keyboard-only navigation, reduced motion.
Deliver: sitemap diagram, header/footer (desktop/mobile, light/dark, LTR/RTL), the four templates, tokens.
PRODUCT FACTS (true as of 2026-11-18 — use only these):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB. macOS 14+, Apple silicon.
- Distributed from the website, not the Mac App Store. Not notarized yet: first open needs System Settings ▸
  Privacy & Security ▸ Open Anyway. Later updates install through the built-in updater (Sparkle), every update
  EdDSA-signed and verified before install; downgrades are refused.
- Downloads: GitHub Releases of the public repo Jarvis219/gitloom-site (stable link:
  https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg). Source code is private.
- Site: https://gitloom-site.vercel.app (Astro, static, 16 languages incl. Arabic RTL, Vercel hosting).
- Support channel to use: GitHub Issues on Jarvis219/gitloom-site (public). [CONTACT EMAIL — optional, owner fills].
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Features: commit graph; drag & drop merge/rebase/cherry-pick; interactive rebase; line staging; undo/redo +
  reflog recovery; three-way conflict editor; file history (follows renames), blame, search; profiles with own
  tabs/recent repos/identity; SSH accounts (right key per repo); GitHub & GitLab (PRs, reviews, issues, Actions);
  built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes; AI with the user's own
  provider; MCP server for AI agents; themes, layout, keyboard customisation; `gitloom` command-line tool.
BRAND: icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1 (decoration only on white), amber #F6B17A (CTA,
navy text on it). Light bg #F8F6F3, muted text #555B86; dark surfaces #383D5E, dark muted #C3C6DE.
Tagline: "Git, woven clearly." No fabricated numbers, logos, testimonials, awards or user counts.
<<<

---

## P10 — Docs hub and article template

>>>
Design the GitLoom documentation: a hub page (/docs/) and an article template (/docs/<topic>/), clean and fast
like the docs of Linear, Raycast or Stripe, in the GitLoom brand.

Hub: a search box (client-side, small JS island, keyboard shortcut "/"), "Start here" cards (Install, First steps,
The window), then topic cards grouped as below, each with an icon and one line.
Topics (one article each, real content will be supplied from the app's user guide):
- Getting started: Requirements · Install & first open (Open Anyway) · First steps · The window
- Everyday work: Staging and committing (lines, hunks, amend, sign-off, signing) · Branches and tags ·
  Fetch, pull, push · Stashes
- History: Undo and redo · Rewriting history (drag & drop merge/rebase/cherry-pick, interactive rebase) ·
  Conflicts (three-way editor) · History, blame and search
- Tools: Terminal · File editor · Advanced Git (worktrees, submodules, bisect, LFS, reflog recovery) ·
  The `gitloom` command
- Accounts & hosting: Identities and profiles · SSH accounts and keys · GitHub and GitLab · Teams and workspaces
- AI: AI features with your own provider · AI tools (MCP server)
- Personalise: Appearance and themes · Keyboard shortcuts (full table) · Layout
- Help: Git Log · Updates · When something goes wrong (troubleshooting)

Article template: left sidebar (collapsible groups, current page highlighted), content column with H1, short
lead, real screenshots in a framed window, callouts (Tip, Note, Warning — amber/slate/indigo), keyboard keys
rendered as <kbd>, code blocks with copy button (shell commands like `gitloom --wait`), tables, "On this page"
TOC on the right, prev/next at the bottom, "Was this helpful? Report an issue" linking to the public tracker,
"Last updated". Mobile: sidebar becomes a drawer, TOC becomes a dropdown. RTL mirrors sidebar and TOC.
Do not invent features, menus or shortcuts — leave [SCREENSHOT: …] and [CONTENT FROM GUIDE] placeholders.
PRODUCT FACTS (true as of 2026-11-18 — use only these):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB. macOS 14+, Apple silicon.
- Distributed from the website, not the Mac App Store. Not notarized yet: first open needs System Settings ▸
  Privacy & Security ▸ Open Anyway. Later updates install through the built-in updater (Sparkle), every update
  EdDSA-signed and verified before install; downgrades are refused.
- Downloads: GitHub Releases of the public repo Jarvis219/gitloom-site (stable link:
  https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg). Source code is private.
- Site: https://gitloom-site.vercel.app (Astro, static, 16 languages incl. Arabic RTL, Vercel hosting).
- Support channel to use: GitHub Issues on Jarvis219/gitloom-site (public). [CONTACT EMAIL — optional, owner fills].
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Features: commit graph; drag & drop merge/rebase/cherry-pick; interactive rebase; line staging; undo/redo +
  reflog recovery; three-way conflict editor; file history (follows renames), blame, search; profiles with own
  tabs/recent repos/identity; SSH accounts (right key per repo); GitHub & GitLab (PRs, reviews, issues, Actions);
  built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes; AI with the user's own
  provider; MCP server for AI agents; themes, layout, keyboard customisation; `gitloom` command-line tool.
BRAND: icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1 (decoration only on white), amber #F6B17A (CTA,
navy text on it). Light bg #F8F6F3, muted text #555B86; dark surfaces #383D5E, dark muted #C3C6DE.
Tagline: "Git, woven clearly." No fabricated numbers, logos, testimonials, awards or user counts.
<<<

---

## P11 — Support

>>>
Design /support for GitLoom: help people solve problems fast, then tell them how to reach the developer.
Sections:
1. Search the docs (same search as /docs).
2. Top fixes as an accordion (real issues, write short accurate answers):
   - "Apple could not verify GitLoom" → System Settings ▸ Privacy & Security ▸ Open Anyway (why: not notarized
     yet; updates are still signed and verified).
   - "Git isn't found" → install Apple's command line tools (`xcode-select --install`) or point GitLoom to git in
     Settings ▸ Git.
   - "A repository owned by another user" → git's safe.directory; GitLoom offers to trust the folder.
   - "Push asks for a password / SSH key is wrong" → Settings ▸ Accounts: SSH accounts pick the key per
     repository; GitHub/GitLab sign-in in Settings ▸ Hosting.
   - "A link asks before opening a folder" → GitLoom asks before opening folders it doesn't know from a link,
     because opening a repository runs the programs its Git settings name.
   - "AI features don't work" → AI is off by default; choose a provider and add your own key in Settings ▸ AI.
   - "Updates" → checked automatically (channel and frequency in Settings ▸ General); GitLoom ▸ Check for Updates… checks now.
3. Report a bug / request a feature: button to GitHub Issues on Jarvis219/gitloom-site with two issue templates
   (Bug: macOS version, GitLoom version from About, steps, what happened; Feature request). Explain what to
   include and what NOT to include (no tokens, no private code).
4. Crash reports: after a crash GitLoom offers to open a pre-filled report — nothing is sent automatically.
5. Contact: [CONTACT EMAIL or "issues only"]. No promised response times.
Include FAQPage JSON-LD for section 2. Friendly, calm tone.
PRODUCT FACTS (true as of 2026-11-18 — use only these):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB. macOS 14+, Apple silicon.
- Distributed from the website, not the Mac App Store. Not notarized yet: first open needs System Settings ▸
  Privacy & Security ▸ Open Anyway. Later updates install through the built-in updater (Sparkle), every update
  EdDSA-signed and verified before install; downgrades are refused.
- Downloads: GitHub Releases of the public repo Jarvis219/gitloom-site (stable link:
  https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg). Source code is private.
- Site: https://gitloom-site.vercel.app (Astro, static, 16 languages incl. Arabic RTL, Vercel hosting).
- Support channel to use: GitHub Issues on Jarvis219/gitloom-site (public). [CONTACT EMAIL — optional, owner fills].
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Features: commit graph; drag & drop merge/rebase/cherry-pick; interactive rebase; line staging; undo/redo +
  reflog recovery; three-way conflict editor; file history (follows renames), blame, search; profiles with own
  tabs/recent repos/identity; SSH accounts (right key per repo); GitHub & GitLab (PRs, reviews, issues, Actions);
  built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes; AI with the user's own
  provider; MCP server for AI agents; themes, layout, keyboard customisation; `gitloom` command-line tool.
BRAND: icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1 (decoration only on white), amber #F6B17A (CTA,
navy text on it). Light bg #F8F6F3, muted text #555B86; dark surfaces #383D5E, dark muted #C3C6DE.
Tagline: "Git, woven clearly." No fabricated numbers, logos, testimonials, awards or user counts.
<<<

---

## P12 — Privacy policy (/privacy)

>>>
Write and design the privacy policy page for GitLoom. Accuracy matters more than length: use ONLY the data
inventory below; do not add analytics, cookies, account systems or data sales that don't exist. Start with a
plain-language summary box ("GitLoom doesn't collect your data…"), then numbered sections, "Last updated
[EFFECTIVE DATE]", controller "[OWNER NAME], [COUNTRY]", contact "[CONTACT EMAIL or the public issue tracker]".
Mark the page "This is not legal advice — have it reviewed" in your output notes (not on the page).

DATA INVENTORY (verified in source, 2026-11-18):
App (GitLoom on the user's Mac):
- No account, no telemetry, no analytics, no advertising identifiers. Repositories never leave the Mac except
  through the Git remotes the user configures (fetch/pull/push go to those servers).
- Settings, recent repositories, session, per-repository state live locally:
  ~/Library/Application Support/GitLoom/ and inside each repository's .git/gitloom/. Logs (only if the user turns
  on the debug log) in ~/Library/Logs/GitLoom/, with passwords/tokens in URLs masked.
- Secrets (GitHub/GitLab tokens, AI keys) are stored in the macOS Keychain, never in settings files or exports.
- GitHub/GitLab: only when the user signs in; GitLoom calls their APIs with the user's token (pull requests,
  issues, Actions, avatars of accounts). Governed by those services' privacy policies.
- Avatars: default styles (birds, initials) are generated locally. If the user picks "Gravatar", GitLoom requests
  images from gravatar.com using a SHA-256 hash of commit-author emails; if "GitHub", from GitHub for noreply
  addresses. These requests reveal the user's IP address to those services.
- AI: off by default. When enabled, the prompt (e.g. a diff, with obvious secrets redacted and a preview shown
  before the first send to a repository) goes to the provider the user chooses (Anthropic, OpenAI, Gemini, a
  local Ollama, or a custom endpoint) with the user's own key. Governed by that provider's policy.
- MCP server: off by default; local only (a Unix socket on the Mac). Calls are logged locally in
  mcp-activity.jsonl. AI tools the user connects act with the access level the user sets.
- Updates: the app downloads the update feed and update archives from the GitLoom site / GitHub Releases
  (automatic checks on by default, can be turned off). No system profile is sent (Sparkle system profiling off).
- Crash reports: after a crash, GitLoom can open a pre-filled issue in the browser (exception type and stack
  frames, no paths or repository data). Nothing is sent unless the user submits it; can be turned off.
Website (gitloom-site.vercel.app):
- Static pages, no cookies, no analytics scripts, no third-party trackers or fonts loaded from third parties
  [verify before publishing]. Hosted on Vercel, which processes standard request logs (IP address, user agent)
  under its own policy. Downloads are served by GitHub, which processes request data under its policy.
Rights section: explain that because GitLoom doesn't hold personal data on its servers, most rights are exercised
locally (delete the folders above, remove Keychain items, uninstall); requests to the contact above.
Also: children, changes to this policy, international transfers (only via the third parties above).
Design: Legal template from P9, summary box with icons (no account · no tracking · local first · your keys),
table "What leaves your Mac, when, to whom", anchor links per section.
PRODUCT FACTS (true as of 2026-11-18 — use only these):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB. macOS 14+, Apple silicon.
- Distributed from the website, not the Mac App Store. Not notarized yet: first open needs System Settings ▸
  Privacy & Security ▸ Open Anyway. Later updates install through the built-in updater (Sparkle), every update
  EdDSA-signed and verified before install; downgrades are refused.
- Downloads: GitHub Releases of the public repo Jarvis219/gitloom-site (stable link:
  https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg). Source code is private.
- Site: https://gitloom-site.vercel.app (Astro, static, 16 languages incl. Arabic RTL, Vercel hosting).
- Support channel to use: GitHub Issues on Jarvis219/gitloom-site (public). [CONTACT EMAIL — optional, owner fills].
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Features: commit graph; drag & drop merge/rebase/cherry-pick; interactive rebase; line staging; undo/redo +
  reflog recovery; three-way conflict editor; file history (follows renames), blame, search; profiles with own
  tabs/recent repos/identity; SSH accounts (right key per repo); GitHub & GitLab (PRs, reviews, issues, Actions);
  built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes; AI with the user's own
  provider; MCP server for AI agents; themes, layout, keyboard customisation; `gitloom` command-line tool.
BRAND: icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1 (decoration only on white), amber #F6B17A (CTA,
navy text on it). Light bg #F8F6F3, muted text #555B86; dark surfaces #383D5E, dark muted #C3C6DE.
Tagline: "Git, woven clearly." No fabricated numbers, logos, testimonials, awards or user counts.
<<<

---

## P13 — Terms of use / license (/terms)

>>>
Write and design /terms for GitLoom, a free closed-source macOS app distributed from its website. Plain language,
numbered sections, summary box. Placeholders: [OWNER NAME], [COUNTRY/GOVERNING LAW], [EFFECTIVE DATE],
[CONTACT]. Cover: license grant (free to use, personal and commercial, no redistribution or reverse engineering
beyond what law allows) [owner to confirm]; the user's responsibility for their repositories and remote actions
(push, force push, history rewrites — GitLoom offers undo but is not a backup); third-party services
(GitHub, GitLab, AI providers) under their own terms and the user's own credentials; AI output may be wrong;
updates delivered automatically and signed; no warranty / limitation of liability; open-source components and
their licenses (link to an "Acknowledgements" section listing Sparkle, SwiftTerm, swift-tree-sitter and the
tree-sitter grammars — exact list to be supplied); termination; changes to terms; contact.
Design: Legal template, short summary at top, "Last updated". Note in your output that a lawyer must review it.
PRODUCT FACTS (true as of 2026-11-18 — use only these):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB. macOS 14+, Apple silicon.
- Distributed from the website, not the Mac App Store. Not notarized yet: first open needs System Settings ▸
  Privacy & Security ▸ Open Anyway. Later updates install through the built-in updater (Sparkle), every update
  EdDSA-signed and verified before install; downgrades are refused.
- Downloads: GitHub Releases of the public repo Jarvis219/gitloom-site (stable link:
  https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg). Source code is private.
- Site: https://gitloom-site.vercel.app (Astro, static, 16 languages incl. Arabic RTL, Vercel hosting).
- Support channel to use: GitHub Issues on Jarvis219/gitloom-site (public). [CONTACT EMAIL — optional, owner fills].
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Features: commit graph; drag & drop merge/rebase/cherry-pick; interactive rebase; line staging; undo/redo +
  reflog recovery; three-way conflict editor; file history (follows renames), blame, search; profiles with own
  tabs/recent repos/identity; SSH accounts (right key per repo); GitHub & GitLab (PRs, reviews, issues, Actions);
  built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes; AI with the user's own
  provider; MCP server for AI agents; themes, layout, keyboard customisation; `gitloom` command-line tool.
BRAND: icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1 (decoration only on white), amber #F6B17A (CTA,
navy text on it). Light bg #F8F6F3, muted text #555B86; dark surfaces #383D5E, dark muted #C3C6DE.
Tagline: "Git, woven clearly." No fabricated numbers, logos, testimonials, awards or user counts.
<<<

---

## P14 — Security (/security) and security.txt

>>>
Design /security for GitLoom: how GitLoom protects users and how to report a vulnerability.
1. "How updates are protected": every update is signed with EdDSA and verified before install; downgrades are
   refused; the app is signed (ad-hoc today; Developer ID notarization planned) — be honest about notarization.
2. "Safe by default": secrets in the macOS Keychain; MCP off by default and local-only; AI off by default with a
   preview before sending code; links from other people that aren't web pages ask before opening; opening a
   folder from a link asks first; importing settings never changes where your tokens are sent.
3. "Opening untrusted repositories": like any Git tool, opening a repository runs programs its Git config names
   (hooks, fsmonitor); only open repositories you trust.
4. Reporting: private report via [SECURITY CONTACT EMAIL] or GitHub private vulnerability reporting on
   Jarvis219/gitloom-site [owner enables]; what to include; no bug bounty [unless owner adds one]; safe-harbour
   wording for good-faith research on your own machine only (no testing against other people's data).
5. Verify your download: how to check the app's signature in Terminal (`codesign -dv /Applications/GitLoom.app`)
   [and SHA-256 checksums if published].
Also output a /.well-known/security.txt with Contact, Expires, Preferred-Languages: en, vi, Canonical.
PRODUCT FACTS (true as of 2026-11-18 — use only these):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB. macOS 14+, Apple silicon.
- Distributed from the website, not the Mac App Store. Not notarized yet: first open needs System Settings ▸
  Privacy & Security ▸ Open Anyway. Later updates install through the built-in updater (Sparkle), every update
  EdDSA-signed and verified before install; downgrades are refused.
- Downloads: GitHub Releases of the public repo Jarvis219/gitloom-site (stable link:
  https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg). Source code is private.
- Site: https://gitloom-site.vercel.app (Astro, static, 16 languages incl. Arabic RTL, Vercel hosting).
- Support channel to use: GitHub Issues on Jarvis219/gitloom-site (public). [CONTACT EMAIL — optional, owner fills].
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Features: commit graph; drag & drop merge/rebase/cherry-pick; interactive rebase; line staging; undo/redo +
  reflog recovery; three-way conflict editor; file history (follows renames), blame, search; profiles with own
  tabs/recent repos/identity; SSH accounts (right key per repo); GitHub & GitLab (PRs, reviews, issues, Actions);
  built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes; AI with the user's own
  provider; MCP server for AI agents; themes, layout, keyboard customisation; `gitloom` command-line tool.
BRAND: icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1 (decoration only on white), amber #F6B17A (CTA,
navy text on it). Light bg #F8F6F3, muted text #555B86; dark surfaces #383D5E, dark muted #C3C6DE.
Tagline: "Git, woven clearly." No fabricated numbers, logos, testimonials, awards or user counts.
<<<

---

## P15 — Download and Changelog

>>>
Design two pages for GitLoom.
/download: big amber "Download for macOS" (stable link), version and date [filled at build time from the
latest release], requirements (macOS 14+, Apple silicon, ~42 MB), the 3-step first-open guide with small macOS
illustrations (drag to Applications; "could not verify" dialog → Done; Privacy & Security → Open Anyway),
"Beta channel" note (Settings ▸ General), "Older versions" link to GitHub Releases, verify-download link to
/security. SoftwareApplication JSON-LD with downloadUrl, operatingSystem, offers price 0.
/changelog: versions newest first, each with version, date, channel badge (stable/beta), grouped notes
(New, Improved, Fixed), anchor per version (/changelog#1-0-0), RSS/Atom link to the update feed
(https://gitloom-site.vercel.app/appcast.xml), "Download this version" link. Content is generated at build time
from the release notes — design the template with realistic placeholder structure, not invented notes.
PRODUCT FACTS (true as of 2026-11-18 — use only these):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB. macOS 14+, Apple silicon.
- Distributed from the website, not the Mac App Store. Not notarized yet: first open needs System Settings ▸
  Privacy & Security ▸ Open Anyway. Later updates install through the built-in updater (Sparkle), every update
  EdDSA-signed and verified before install; downgrades are refused.
- Downloads: GitHub Releases of the public repo Jarvis219/gitloom-site (stable link:
  https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg). Source code is private.
- Site: https://gitloom-site.vercel.app (Astro, static, 16 languages incl. Arabic RTL, Vercel hosting).
- Support channel to use: GitHub Issues on Jarvis219/gitloom-site (public). [CONTACT EMAIL — optional, owner fills].
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Features: commit graph; drag & drop merge/rebase/cherry-pick; interactive rebase; line staging; undo/redo +
  reflog recovery; three-way conflict editor; file history (follows renames), blame, search; profiles with own
  tabs/recent repos/identity; SSH accounts (right key per repo); GitHub & GitLab (PRs, reviews, issues, Actions);
  built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes; AI with the user's own
  provider; MCP server for AI agents; themes, layout, keyboard customisation; `gitloom` command-line tool.
BRAND: icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1 (decoration only on white), amber #F6B17A (CTA,
navy text on it). Light bg #F8F6F3, muted text #555B86; dark surfaces #383D5E, dark muted #C3C6DE.
Tagline: "Git, woven clearly." No fabricated numbers, logos, testimonials, awards or user counts.
<<<

---

## P16 — Compare (optional, SEO) — handle with care

>>>
Design /compare: "How GitLoom compares" for people searching "GitKraken alternative", "Git GUI for Mac".
Rules: only verifiable, neutral facts; date the page ("as of [DATE]"); link each competitor fact to its public
source; no disparaging language; let the reader decide. Compare GitLoom with "typical Electron-based Git
clients" and with the command line, plus optional named rows ONLY if the owner supplies sourced facts.
Criteria: native app (Swift/AppKit vs Electron), app size, price/license, account required, drag & drop
history editing, undo, line staging, GitHub/GitLab integration, AI with your own key, MCP server, languages.
Layout: hero sentence, comparison table with check/dash icons (with text alternatives), "When GitLoom may not be
for you" (honest: macOS only, Apple silicon only, not notarized yet), CTA.
PRODUCT FACTS (true as of 2026-11-18 — use only these):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB. macOS 14+, Apple silicon.
- Distributed from the website, not the Mac App Store. Not notarized yet: first open needs System Settings ▸
  Privacy & Security ▸ Open Anyway. Later updates install through the built-in updater (Sparkle), every update
  EdDSA-signed and verified before install; downgrades are refused.
- Downloads: GitHub Releases of the public repo Jarvis219/gitloom-site (stable link:
  https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg). Source code is private.
- Site: https://gitloom-site.vercel.app (Astro, static, 16 languages incl. Arabic RTL, Vercel hosting).
- Support channel to use: GitHub Issues on Jarvis219/gitloom-site (public). [CONTACT EMAIL — optional, owner fills].
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Features: commit graph; drag & drop merge/rebase/cherry-pick; interactive rebase; line staging; undo/redo +
  reflog recovery; three-way conflict editor; file history (follows renames), blame, search; profiles with own
  tabs/recent repos/identity; SSH accounts (right key per repo); GitHub & GitLab (PRs, reviews, issues, Actions);
  built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes; AI with the user's own
  provider; MCP server for AI agents; themes, layout, keyboard customisation; `gitloom` command-line tool.
BRAND: icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1 (decoration only on white), amber #F6B17A (CTA,
navy text on it). Light bg #F8F6F3, muted text #555B86; dark surfaces #383D5E, dark muted #C3C6DE.
Tagline: "Git, woven clearly." No fabricated numbers, logos, testimonials, awards or user counts.
<<<

---

## P17 — Press kit / About, and 404

>>>
Design /press: one-paragraph description (short and long), the icon in PNG/SVG sizes, light/dark screenshots,
brand colours with hex, typography, "Do / Don't" for the logo, facts sheet (platform, price, languages, first
release date [OWNER]), contact [CONTACT EMAIL]. Download-all ZIP button. Also a small "About" section: who makes
GitLoom [OWNER TO WRITE], why it exists (a fast, native, clear Git client), no invented history.
Design the 404 page: the bird looking at a broken thread, "This thread came loose." + links to Home, Docs,
Download, Support; search box; keep it light and on-brand.
PRODUCT FACTS (true as of 2026-11-18 — use only these):
- GitLoom: free native macOS Git client (Swift/AppKit, not Electron), 42 MB. macOS 14+, Apple silicon.
- Distributed from the website, not the Mac App Store. Not notarized yet: first open needs System Settings ▸
  Privacy & Security ▸ Open Anyway. Later updates install through the built-in updater (Sparkle), every update
  EdDSA-signed and verified before install; downgrades are refused.
- Downloads: GitHub Releases of the public repo Jarvis219/gitloom-site (stable link:
  https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg). Source code is private.
- Site: https://gitloom-site.vercel.app (Astro, static, 16 languages incl. Arabic RTL, Vercel hosting).
- Support channel to use: GitHub Issues on Jarvis219/gitloom-site (public). [CONTACT EMAIL — optional, owner fills].
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Features: commit graph; drag & drop merge/rebase/cherry-pick; interactive rebase; line staging; undo/redo +
  reflog recovery; three-way conflict editor; file history (follows renames), blame, search; profiles with own
  tabs/recent repos/identity; SSH accounts (right key per repo); GitHub & GitLab (PRs, reviews, issues, Actions);
  built-in terminal and file editor; worktrees, submodules, bisect, Git LFS, stashes; AI with the user's own
  provider; MCP server for AI agents; themes, layout, keyboard customisation; `gitloom` command-line tool.
BRAND: icon = orange-yellow bird in a nest of colourful threads on a royal-blue squircle.
Palette (Color Hunt): navy #2D3250, indigo #424769, slate #7077A1 (decoration only on white), amber #F6B17A (CTA,
navy text on it). Light bg #F8F6F3, muted text #555B86; dark surfaces #383D5E, dark muted #C3C6DE.
Tagline: "Git, woven clearly." No fabricated numbers, logos, testimonials, awards or user counts.
<<<
