---
title: Built-in terminal
group: Tools
order: 19
summary: A terminal under the graph, in the repository's folder, that refreshes GitLoom and suggests git commands.
updated: 2026-11-18
---

<kbd>⌃`</kbd> opens a terminal under the graph, in the repository's folder, with your own login shell. The graph refreshes as soon as a git command in it finishes.

## Suggestions and links

While you type a git command, GitLoom suggests subcommands, branches, remotes and aliases. <kbd>↑</kbd> <kbd>↓</kbd> choose a suggestion, <kbd>⇥</kbd> or <kbd>→</kbd> inserts it, and Esc closes the list.

<kbd>⌘</kbd>-click what's under the pointer: a SHA selects that commit, a path opens the file and a URL opens the browser.

## Keys

| Keys | Action |
|---|---|
| <kbd>⌃`</kbd> | Show or hide the terminal (hides it when it has focus) |
| <kbd>⌃⇧`</kbd> | New terminal session |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> | Bigger / smaller terminal text |
| Esc | At an empty prompt, go back to the graph |

If a command is still running when you close the tab, GitLoom asks first.

## Settings

**Settings ▸ Integrations ▸ Terminal** has:

- *Shell integration*: lets GitLoom see when a command finishes (instant refresh, suggestions). Turn it off and those stop. Your dotfiles are never edited either way.
- *Suggest git commands while typing*, to turn off only the suggestions.
- *Scrollback*: how many lines each session keeps (10,000 by default).
- *Echo the git commands GitLoom runs*: a dimmed line for each command the app runs, to learn git.
- *Secure Keyboard Entry*: while a terminal has the keyboard, other apps can't read what you type.
- *Shell* and *Arguments*: another shell for new sessions, such as `/opt/homebrew/bin/fish`. A path that can't be run falls back to your login shell.

Changes apply to new terminal sessions. The terminal uses the code font from **Settings ▸ Appearance**.

## Your usual terminal app

<kbd>⌥⌘T</kbd> opens the repository in your terminal app instead. Choose which app in **Settings ▸ Integrations ▸ Open in Terminal uses**.
