---
title: Interactive rebase
group: History
order: 16
summary: Reorder, reword, squash, edit or drop commits in a visual plan that does nothing until you start it.
updated: 2026-11-18
---

Interactive rebase rewrites a series of commits. GitLoom shows the plan as a list you edit; nothing happens to the repository until you start.

## Open the editor

- Right-click a commit ▸ *Interactive Rebase from Here…*.
- Or drop a branch on another and choose *Interactive rebase*.
- With several commits selected, *Interactive Rebase Selected Commits…* opens the editor with them selected.

It also works from the very first commit (`--root`). The editor replaces the graph.

## Edit the plan

Each row is a commit, oldest at the top. Set its action from the menu or with a key:

| Key | Action |
|---|---|
| <kbd>P</kbd> | pick |
| <kbd>R</kbd> | reword |
| <kbd>E</kbd> | edit |
| <kbd>S</kbd> | squash |
| <kbd>F</kbd> | fixup |
| <kbd>C</kbd> | fixup -C |
| <kbd>D</kbd> | drop |

Drag rows, or use <kbd>⌥↑</kbd> and <kbd>⌥↓</kbd>, to reorder. <kbd>⌘Z</kbd> undoes a change to the plan.

- Reword messages can be written in advance, so the rebase runs without stopping.
- A row's menu has *Add Command After…* to run a command at that point (an `exec` line, such as a test that stops the rebase if it fails).
- Branches stacked on the rebased commits move with them (`--update-refs`), unless you untick it.
- Merges in the range are flattened by default. Tick *Keep merges* to keep them (`--rebase-merges`). The plan then also shows where each side of a merge starts and where the merge is made again, and commits can only move within their own side.

## Start or cancel

<kbd>⌘↩</kbd> starts and Esc cancels. Afterwards, the whole rebase is one undo step.

## Quicker edits

Without opening the editor:

- select several adjacent commits ▸ *Squash N Commits* (runs right away with the messages combined, oldest first; *…and Edit Message* to write it yourself) or *Drop N Commits…*;
- right-click a commit ▸ *Edit Message…*, *Drop Commit…*, *Move Up/Down*.
