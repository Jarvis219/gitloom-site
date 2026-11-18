# GitLoom site — design prompts v4 (built with the `design-styles` skill)

Dùng bộ skill [awesome-design-skills](https://github.com/bergside/awesome-design-skills), đã cài thành skill
`design-styles` trong `~/.claude-acc3/skills/`. Bộ v4 gồm hai phần:
- **`GITLOOM-DESIGN.md`** (phần A bên dưới): design system của GitLoom viết theo định dạng TypeUI. Có token dạng
  YAML, quy tắc component đủ trạng thái, tiêu chí accessibility kiểm chứng được, danh sách cấm và checklist QA.
- **Prompt từng trang** (phần B): luôn dán phần A kèm theo.

Ba hướng thiết kế lấy từ skill, đã chỉnh cho hợp thương hiệu (icon chim cam trên nền xanh hoàng gia, nút amber):

| Hướng | Gốc skill | Cảm giác | Khi nào chọn |
|---|---|---|---|
| **W — Warm Poster** (khuyên dùng) | `impeccable` | Poster biên tập, ấm: nền kem xen các mảng cam cháy, accent amber, chữ hiển thị Chakra Petch kiểu "kỹ thuật" | Muốn nổi bật, có cá tính, khác hẳn trang Git GUI khác; amber trùng màu thương hiệu |
| **P — Premium** | `premium` | Kiểu Apple: Inter, khoảng cách chính xác, trung tính, gọn | Muốn an toàn, cao cấp, "native Mac" |
| **C — Canvas** | `codex` | Tối giản triệt để: trắng/đen, chữ gánh toàn bộ, nút hình viên thuốc, không bóng, không gradient | Muốn kiểu công cụ dành cho dev, rất "kỹ" |

**Cách dùng:**
1. Dán **G0** kèm phần A, rồi ghi rõ hướng đã chọn (W, P hoặc C).
2. Dán lần lượt G1–G6 cho từng trang.
3. Sau mỗi trang, dán **G7** để công cụ tự chấm bản thiết kế theo checklist QA, rồi sửa theo kết quả.
4. **Ảnh GitLoom thật** (chụp từ repo mẫu, 2026-11-18) nằm ở `design/shots/`, mỗi cảnh có `-dark` và `-light`:
   `graph` (graph + chi tiết commit), `diff` (diff để stage từng dòng), `conflict` (trình giải xung đột),
   `actions` (Actions run + PR/Issues ở sidebar, dữ liệu mock). Cảnh kéo-thả + menu merge/rebase cần chụp tay:
   kéo một branch lên branch khác trong app rồi ⌘⇧4. Dặn công cụ AI: "use these screenshots as-is, do not redraw".
5. Nên đính kèm thêm ảnh mẫu của phong cách. Ảnh mẫu đã chép sẵn vào `design/refs/`:
   `impeccable-marketing.png`, `premium-marketing.png`, `codex-marketing.png` (MIT, từ awesome-design-skills).

Độ tương phản đã kiểm: W chữ/kem 16.5 · muted/kem 7.05 · kem/cam cháy 4.84 (đã chỉnh từ 4.33) · ink/amber 9.87 ·
W tối 16.2 / 8.19 · P muted 6.05 · C muted 4.83, đều ≥ 4.5.

---

## A. GITLOOM-DESIGN.md

```markdown
---
name: GitLoom Site
extends: [impeccable | premium | codex]   # pick one direction: W | P | C
directions:
  W:   # Warm Poster (from impeccable)
    colors: { primary: "#F6B17A", primaryStrong: "#CC8800", secondary: "#B94C1E", ink: "#16161A",
              cream: "#FBF4E8", creamDeep: "#F3E6D0", burnt: "#B94C1E", onBurnt: "#FFF8EE",   # impeccable #C55221 darkened: 4.33 → 4.84:1 for body text
              surface: "#FFFFFF", muted: "#5C5148", hairline: "#E7D9C2",
              darkBg: "#14110E", darkSurface: "#1E1A15", darkInk: "#F5EDE2", darkMuted: "#B8A994" }
    fonts: { display: "Chakra Petch", body: "Inter", mono: "JetBrains Mono" }
    radius: { sm: 4px, md: 8px, panel: 14px, pill: 999px }
  P:   # Premium (from premium)
    colors: { primary: "#F6B17A", ink: "#111827", surface: "#FFFFFF", bg: "#FBFAF8", muted: "#5C5F70",
              hairline: "#E7E5E0", darkBg: "#0C0D10", darkSurface: "#15161B", darkInk: "#F2F1EE", darkMuted: "#9A9DAE" }
    fonts: { display: "Inter Display / SF Pro Display", body: "Inter / SF Pro Text", mono: "JetBrains Mono / SF Mono" }
    radius: { sm: 4px, md: 8px, panel: 22px, window: 12px }
  C:   # Canvas (from codex)
    colors: { primary: "#000000", onPrimary: "#FFFFFF", accent: "#F6B17A", surface: "#FFFFFF", ink: "#111827",
              muted: "#6B7280", card: "#000000", onCard: "#FFFFFF" }
    fonts: { display: "Open Sans", body: "Open Sans", mono: "JetBrains Mono" }
    radius: { image: 8px, pill: 999px }    # no shadows, no gradients
typeScale: { micro: 12, small: 14, body: 16, lead: 20, h3: 24, h2: 32, display: [56, 72, 88] }   # px; mobile display 40–48
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 160]
grid: { columns: 12, content: 1200px, wide: 1360px, gutter: 24px, mobileMargin: 16px }
motion: { enter: "360ms cubic-bezier(.2,.8,.2,1), 12px rise", stagger: 40ms, hover: 120ms, reduced: "none" }
---

## 1. Context and goals
GitLoom is a free, native macOS Git client. The site must make a developer understand within 5 seconds that it is
fast, native and safe to try, show every major feature working (not described), and get a click on
"Download for macOS". It ships in 16 languages (Arabic RTL), light and dark, static (Astro on Vercel).

## 2. Design tokens and foundations
- Use only the tokens of the chosen direction above. Brand accent amber `#F6B17A` is the only CTA colour in W and P;
  in C the CTA is black pill, amber appears only as a 2px focus/selection accent.
- The app icon (orange-yellow bird in a nest on a royal-blue squircle) appears small (24–112px), never redrawn.
- Product screenshots are real GitLoom windows with macOS traffic lights; lane colours inside them are untouched.
- W only: sections alternate `cream` and `burnt` backgrounds (poster rhythm); text on burnt uses `onBurnt` (AA).
- Contrast must be ≥ 4.5:1 for body text, ≥ 3:1 for large text and UI boundaries — verify every pair.

## 3. Component rules
Each component must define default, hover, focus-visible, active, disabled and (where relevant) loading/error.
- **Primary button**: height 44, padding 0 22, label 16/600; W/P amber fill + ink label; C black pill + white label.
  Focus-visible: 2px ring offset 2px (W/P ink ring, C amber ring). Disabled: 40% opacity + not-allowed cursor.
- **Secondary**: hairline outline (W/P) or text link with "→" (C). Never two primary buttons side by side.
- **Nav**: logo, Features, Docs, Download (primary, compact), Support, language menu. Sticky; W/P translucent bg
  with 1px bottom hairline; C solid white with black 1px rule. Mobile: sheet menu, focus trapped, Esc closes.
- **Language menu**: button shows globe + current language; list of 16 native names; current item marked with
  aria-current; works without JS (details/summary); RTL mirrors alignment.
- **Product window frame**: radius 12, macOS shadow (W/P only), title bar with traffic lights; caption below in
  small/muted; optional cursor animation loop (6s, pauses off-screen, reduced-motion = static frame).
- **Data figure**: mono number at display size + label in small; tabular figures.
- **Feature chapter**: eyebrow (mono caps 12), h2, lead (≤ 2 sentences), 3-item fact list, product crop.
- **Code block / kbd**: mono 14, copy button with "Copied" state announced via aria-live; kbd keycaps 1px border.
- **Accordion (FAQ/support)**: whole row is the button, chevron rotates, aria-expanded, keyboard Enter/Space.
- **Footer**: 4 columns (Product, Help, Legal, Project) → 2 on tablet → 1 on mobile; language menu repeated.
- Long labels (German/Russian +35%) must wrap, never truncate buttons; CJK uses `word-break: keep-all` where
  appropriate; RTL mirrors layout, arrows and chevrons.

## 4. Accessibility (testable acceptance criteria)
- All text pairs meet WCAG 2.2 AA (list each pair and its ratio in the output).
- Every interactive element reachable by Tab in visual order; visible focus on each; no keyboard traps.
- Animations stop under `prefers-reduced-motion: reduce`; loops pause off-screen; nothing flashes > 3/s.
- Images have meaningful alt; decorative ones `alt=""`; one h1 per page; headings never skip levels.
- Language menu and accordions work without JavaScript; `lang` and `dir` set per page.

## 5. Content and tone
Concise, confident, helpful (the skill's tone) — Apple/Linear register: concrete verbs, present tense, second
person, ≤ 7 words per headline, ≤ 18 per lead, sentence case, no exclamation marks, no puns, no hype words.
Example — do: "Undo almost anything." Don't: "Supercharge your Git workflow!"

## 6. Anti-patterns (prohibited)
Glowing orbs, gradient blobs, aurora/purple-blue gradients, neon lines; bento grid as the feature section;
three-icons-in-a-row; generic 3D or isometric illustration; mascots in UI; emoji; stock photos; device mockups;
everything centred; thread/weave/loom puns; gradient text; heavy shadows (C: no shadows at all); carousels;
autoplay video with sound; cookie banner (no cookies exist); invented numbers, logos, testimonials or user counts.

## 7. QA checklist (run in review)
- [ ] Only tokens of the chosen direction are used (no raw colours).
- [ ] Every claim maps to FACTS; no invented figures.
- [ ] Contrast table included and all pairs pass AA.
- [ ] Each component shows all required states.
- [ ] Mobile 390px: no horizontal scroll, 16px margins, tap targets ≥ 44px.
- [ ] RTL (Arabic) and longest-language (German) variants checked.
- [ ] Reduced-motion variant specified.
- [ ] No item from the anti-pattern list appears.

## 8. Facts (use only these)
- Free native macOS Git client (Swift/AppKit, not Electron), 42 MB, macOS 14+, Apple silicon.
- 100k-commit repo: first rows ~0.15 s, full history ~0.7 s, ~170 MB RAM.
- Drag a branch onto another → merge / rebase / cherry-pick menu; interactive rebase by drag; stage single lines;
  undo/redo for commits, checkouts, merges, resets, branch changes + reflog recovery; three-way conflict editor;
  file history (follows renames), blame, search; profiles (own tabs, recent repos, identity); SSH accounts (right
  key per repo); GitHub & GitLab (PRs, reviews, issues, Actions); built-in terminal and file editor; worktrees,
  submodules, bisect, Git LFS; AI with the user's own provider (off by default); MCP server (off by default);
  themes, layout, shortcuts; 16 languages; `gitloom` command-line tool.
- From the website, not the App Store; first open: System Settings ▸ Privacy & Security ▸ Open Anyway (not
  notarized yet); updates EdDSA-signed and verified; no account, no telemetry.
- Downloads: https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg ·
  Site: https://gitloom-site.vercel.app · Support: GitHub Issues on Jarvis219/gitloom-site.
```

---

## B. Prompts

### G0 — Set up the session

>>>
You are a senior product designer. Follow the design system below exactly (it uses the TypeUI design-skill
format: tokens first, then component rules with all states, testable accessibility criteria, tone, prohibited
patterns and a QA checklist). Direction for this session: **[W | P | C]** — use only that direction's tokens.
Before designing anything, restate the design intent in one sentence, list the tokens you will use, and the
contrast ratio of every text/background pair. Then wait for the page prompts.

[PASTE SECTION A — GITLOOM-DESIGN.md]
<<<

### G1 — Landing page

>>>
Design the GitLoom landing page (desktop 1440 + mobile 390, light + dark; W direction also shows the
cream/burnt section rhythm). Sections, in order:
1. Hero, left-aligned: eyebrow "Git client for macOS · Free" (mono caps), headline (write 3 options, pick one),
   one-sentence lead, primary "Download for macOS" + secondary "See it work →", meta line "macOS 14+ · Apple
   silicon · 42 MB". Right: real GitLoom window bleeding off the grid, cursor loop dragging `feature/sync` onto
   `main` → menu → Rebase → lane straightens.
2. Proof row: three data figures — "0.15 s" first rows of a 100,000-commit repo · "42 MB" native, not Electron ·
   "⌘Z" undo for almost everything.
3. Five feature chapters (not cards), alternating sides: history you can read · change history by dragging ·
   commit exactly what you mean · mistakes are cheap · work and personal kept apart.
4. GitHub & GitLab inside the app (one wide crop: PR with checks + Actions run).
5. For power users: quiet two-column list (terminal, editor, worktrees, submodules, bisect, LFS, `gitloom` CLI,
   MCP, AI with your own key).
6. Languages & themes: 16 language names in their scripts, light/dark split screenshot.
7. Install in three steps (tiny real macOS dialog crops) + honest notarization line.
8. Final CTA, then footer.
Output per the design system: layout specs per breakpoint, component states used, motion spec, copy, contrast
table, and the QA checklist ticked with notes.
<<<

### G2 — Docs (hub + article)

>>>
Design /docs (hub) and /docs/<topic>/ (article). Hub: search (⌘K or "/"), a numbered "Start here" path (Install,
First steps, The window), a two-column topic index grouped as Getting started · Everyday work · History · Tools ·
Accounts & hosting · AI · Personalise · Help. Article: left nav, 62ch content column, right "On this page",
framed screenshots, callouts as a thin left rule + icon, kbd, code with copy, prev/next, "Last updated",
"Report an issue". Mobile: nav sheet + TOC dropdown. Use placeholders [CONTENT FROM GUIDE] and [SCREENSHOT: …];
do not invent menus or shortcuts. Output as for G1.
<<<

### G3 — Download + changelog

>>>
Design /download (version + date from the latest release, requirements, primary button, 3 first-open steps with
real dialog crops, why "Open Anyway" and that updates are signed, older versions link, verify-download link)
and /changelog (single-column timeline: version in mono, date, stable/beta tag, New / Improved / Fixed lists,
anchors, feed link https://gitloom-site.vercel.app/appcast.xml). Placeholder structure only — no invented
notes. Output as for G1.
<<<

### G4 — Support

>>>
Design /support: search; "Common fixes" accordion with accurate short answers — Apple could not verify GitLoom
(Open Anyway, why) · Git isn't found (`xcode-select --install` or choose git in Settings ▸ Git) · repository owned
by another user (safe.directory; GitLoom offers to trust it) · wrong SSH key (Settings ▸ Accounts) or sign-in
needed (Settings ▸ Hosting) · a link asks before opening a folder (opening a repository runs the programs its
Git settings name) · AI doesn't work (off by default; add your own key in Settings ▸ AI) · updates (Settings ▸
General; GitLoom ▸ Check for Updates…). Then "Report a bug" / "Request a feature" rows to GitHub Issues
(Jarvis219/gitloom-site) with what to include and never to paste (tokens, private code); crash reports are
offered, never sent automatically; contact [OWNER FILLS]. FAQPage JSON-LD. Output as for G1.
<<<

### G5 — Privacy, Terms, Security

>>>
Design /privacy, /terms and /security as text-first pages in the chosen direction: title, "Last updated
[DATE]", summary panel (3–4 statements), numbered sections with anchors, sticky mini-TOC on desktop, print CSS.
Privacy facts (only these): no account, no telemetry; Git traffic only to your remotes; GitHub/GitLab APIs only
when signed in (token in your Keychain); avatars local by default, Gravatar (SHA-256 of email) or GitHub only if
chosen; AI only when you use it (off by default, preview before first send, obvious secrets redacted) to the
provider you choose; update checks on by default with no system profile; crash reports only if you submit them;
website static, no cookies, no analytics, Vercel and GitHub keep standard request logs. Terms: free closed-source
licence [owner confirms], your responsibility for pushes and rewrites, third-party services, AI can be wrong, no
warranty, open-source acknowledgements, governing law [OWNER FILLS]. Security: signed updates, downgrades refused,
safe defaults (Keychain; MCP and AI off by default; non-web links and link-opened folders ask first; imports
can't redirect tokens), "open only repositories you trust", how to report [OWNER FILLS], verify the signature,
plus /.well-known/security.txt. Mark that a lawyer must review privacy and terms. Output as for G1.
<<<

### G6 — Press, compare, 404

>>>
Design /press (descriptions, icon and screenshot downloads, colour tokens, logo do/don't, fact sheet, contact
[OWNER FILLS]), optional /compare (neutral table vs "Electron-based Git clients" and "the command line"; named
products only with owner-supplied dated sources; honest "GitLoom may not be for you if…": macOS only, Apple
silicon only, not notarized yet) and a 404 ("This page doesn't exist." + search + links; small app icon, no
illustration). Output as for G1.
<<<

### G7 — Review against the design system (run after each page)

>>>
Act as a strict design reviewer. Audit the design you just produced against GITLOOM-DESIGN.md: (1) list every
raw colour or value not from the chosen direction's tokens; (2) list every claim not in Facts; (3) re-check all
text contrast pairs and report failures with ratios; (4) list components missing required states; (5) list any
anti-pattern found; (6) check 390px mobile, Arabic RTL and German length; (7) check reduced motion. Output a
table of issues (severity, where, fix) and then the corrected design. Use "must" for blocking issues.
<<<
