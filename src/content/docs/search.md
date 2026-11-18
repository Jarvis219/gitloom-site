---
title: Search
group: History
order: 15
summary: Find commits by message, author, SHA, path or content, and jump anywhere with the command palette and Quick Open.
updated: 2026-11-18
---

GitLoom has three ways to find things: Find for commits, the command palette for anything, and Quick Open for files.

## Find commits

<kbd>⌘F</kbd> searches commit messages, authors, SHAs, file paths or changes (`-S`, the commits that add or remove a piece of text). It can filter the graph down to the matches. <kbd>⌘G</kbd> and <kbd>⇧⌘G</kbd> go to the next and previous match.

- Accents don't matter: "nguoi" finds "người".
- `re:` takes a regular expression for the whole message, for example `re:^fix(ed)?:`.

## Command palette

<kbd>⌘K</kbd> runs any command and jumps to branches, files, commits, authors and pull requests. Start with a character to search one kind of thing:

| Prefix | Searches |
|---|---|
| `>` | commands |
| `/` | files |
| `:` | commits |
| `@` | authors |
| `#` | pull requests and issues |

## Quick Open

<kbd>⌘P</kbd> opens any file of the repository. Once it is open, <kbd>⌘E</kbd> lets you edit it (see [File editor](/docs/file-editor/)).
