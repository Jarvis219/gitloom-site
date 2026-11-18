---
title: Shortcuts
group: Personalise
order: 36
summary: Every keyboard shortcut in GitLoom, and how to change the ones in the menu bar.
updated: 2026-11-18
---

The 35 shortcuts marked ✎, every one in the menu bar, can be changed in **Settings ▸ Keyboard**. The others (system ones like <kbd>⌘W</kbd> and <kbd>⌘Z</kbd>, and keys that only work inside a sheet or editor) are fixed. The menu always shows the current key, and everything here is also in the command palette (<kbd>⌘K</kbd>).

## Everywhere

| Keys | Action |
|---|---|
| <kbd>⌘K</kbd> ✎ | Command palette: `>` commands, `/` files, `:` commits, `@` authors, `#` pull requests and issues |
| <kbd>⌘P</kbd> ✎ | Quick Open a file of the repository |
| <kbd>⌘F</kbd> / <kbd>⌘G</kbd> / <kbd>⇧⌘G</kbd> ✎ | Find commits / next match / previous match |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Undo / Redo the last Git operation (in a text field: undo typing) |
| <kbd>⌘T</kbd> ✎ | New tab |
| <kbd>⌘W</kbd> | Close tab |
| <kbd>⌃⇥</kbd> / <kbd>⌃⇧⇥</kbd> ✎ | Next / previous tab |
| <kbd>⇧⌘C</kbd> ✎ | Clone a repository |
| <kbd>⌘O</kbd> ✎ | Open a repository (in a new tab when this one already shows one) |
| <kbd>⇧⌘R</kbd> ✎ | Show the repository in Finder |
| <kbd>⌥⌘T</kbd> ✎ | Open the repository in your terminal app |
| <kbd>⇧⌘K</kbd> | Launchpad (pull requests and issues of your GitHub and GitLab accounts) |
| <kbd>⌥⇧⌘L</kbd> ✎ | Git Log (every git command GitLoom ran) |
| <kbd>⌘,</kbd> | Settings |
| <kbd>⌘?</kbd> | GitLoom Help |

## Repository

| Keys | Action |
|---|---|
| <kbd>⇧⌘L</kbd> ✎ | Fetch all remotes |
| <kbd>⇧⌘↓</kbd> ✎ | Pull |
| <kbd>⇧⌘↑</kbd> ✎ | Push |
| <kbd>⌘B</kbd> ✎ | Create a branch at the selected commit |
| <kbd>⇧⌘S</kbd> ✎ | Stash all changes |
| <kbd>⌥⌘Y</kbd> ✎ | History of the selected file |
| <kbd>⌥⌘B</kbd> ✎ | Blame of the selected file |
| <kbd>⌘0</kbd> ✎ | Show or hide the sidebar |
| <kbd>⌥⌘0</kbd> ✎ | Show or hide the detail panel |
| <kbd>⌥⌘L</kbd> ✎ | Move the detail panel to the bottom / back to the right |

## Graph, changes and diff

| Keys | Action |
|---|---|
| <kbd>↑</kbd> <kbd>↓</kbd> or <kbd>J</kbd> <kbd>K</kbd> | Previous / next commit |
| <kbd>⇧</kbd>-click, <kbd>⌘</kbd>-click | Select a range / several commits (compare, squash, cherry-pick) |
| <kbd>⌘C</kbd> | Copy the selected commit's SHA |
| <kbd>⌘Y</kbd> | Quick Look the selected file |
| <kbd>⇧⌘A</kbd> | Stage all |
| <kbd>⌥⇧⌘A</kbd> | Unstage all |
| <kbd>⌘↩</kbd> | Commit (in the commit message) |
| <kbd>⌥⌘G</kbd> | Write the commit message with AI (when AI is on) |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Previous / next change in the file |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Previous / next file |

## Editors

| Keys | Action |
|---|---|
| <kbd>⌘E</kbd> ✎ | Edit the open file |
| <kbd>⌘S</kbd> ✎ | Save |
| <kbd>⌥⌘S</kbd> ✎ | Save and stage |
| <kbd>⌘L</kbd> ✎ | Go to line |
| <kbd>⌥⌘F</kbd> ✎ | Find and replace |
| <kbd>⌘/</kbd> ✎ | Comment or uncomment the selected lines |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> ✎ | Indent / outdent the selected lines |
| <kbd>P</kbd> <kbd>R</kbd> <kbd>E</kbd> <kbd>S</kbd> <kbd>F</kbd> <kbd>C</kbd> <kbd>D</kbd> | Interactive rebase: pick, reword, edit, squash, fixup, fixup -C, drop for the selected rows |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Interactive rebase: move the selected rows (with *Keep merges*, only within their own branch) |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Interactive rebase: undo / redo a change to the plan (git isn't touched until you start) |
| <kbd>⌘↩</kbd> | Interactive rebase: start the rebase (or save the remaining plan) |
| Esc | Interactive rebase: close the editor without doing anything |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Merge conflicts: previous / next conflict |
| <kbd>⌘S</kbd> | Merge conflicts: save and mark the file resolved |
| <kbd>⌘[</kbd> / <kbd>⌘]</kbd> | File history: back / forward |

## Terminal

| Keys | Action |
|---|---|
| <kbd>⌃`</kbd> ✎ | Show or hide the terminal (hides it when it has focus) |
| <kbd>⌃⇧`</kbd> ✎ | New terminal session |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> ✎ | Bigger / smaller terminal text |
| <kbd>⇥</kbd> or <kbd>→</kbd> | Insert the selected suggestion |
| <kbd>↑</kbd> <kbd>↓</kbd> | Choose a suggestion |
| Esc | Close suggestions; at an empty prompt, go back to the graph (so does hiding the terminal) |
| <kbd>⌘</kbd>-click | Open what's under the pointer: a SHA selects the commit, a path opens the file, a URL opens the browser |
