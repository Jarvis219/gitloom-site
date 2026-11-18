---
title: File history
group: History
order: 13
summary: See every commit that changed a file, following renames, and view or restore any older version.
updated: 2026-11-18
---

File History shows every commit that changed one file, following it through renames.

## Open it

Select a file and press <kbd>⌥⌘Y</kbd>, or choose **Repository ▸ File History…**. If no file is selected, the command palette opens so you can pick one. From the terminal, `gitloom log <file>` opens it too (see [The gitloom command-line tool](/docs/the-gitloom-command-line-tool/)).

## Reading it

Each entry is a commit that changed the file, with its author and date. A rename shows where the file came from. *Follow renames* can be turned off. Select two versions to see the diff between them.

<kbd>⌘[</kbd> and <kbd>⌘]</kbd> go back and forward. Esc goes back to the graph.

## Older versions

Right-click an entry for:

- *View This Version*, or *Open This Version in External Editor*;
- *Show in Graph*;
- *Blame at This Commit* (see [Blame](/docs/blame/));
- *Restore File to This Version…*. If the file has uncommitted changes, they are replaced; <kbd>⌘Z</kbd> brings them back.

## Shallow clones

In a shallow clone, the history stops where the clone does, and the list says so.
