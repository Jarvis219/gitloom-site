---
title: Staging single lines
group: Everyday work
order: 6
summary: Stage whole files, single hunks or just the lines you pick, and keep the rest for a later commit.
updated: 2026-11-18
---

You don't have to commit a file all at once. GitLoom lets you stage a whole file, one hunk, or only the lines you choose.

![A split diff of a changed file, with the staging panel and the commit form](/shots/diff-light.png)

## Stage files and hunks

Select the *Uncommitted changes* row at the top of the graph. The detail panel lists your unstaged and staged files. Stage a whole file, or open its diff and use *Stage Hunk* on one block of changes. <kbd>⇧⌘A</kbd> stages everything and <kbd>⌥⇧⌘A</kbd> unstages everything.

## Stage lines

1. Open the file's diff.
2. Click the lines you want. A bar shows how many lines are selected.
3. Click *Stage Lines*, or press <kbd>S</kbd>.

In the staged diff, select lines and click *Unstage Lines* (<kbd>U</kbd>) to take them back out. The ✕ in the bar clears the selection.

## Discard lines

In the unstaged diff, *Discard Lines* (<kbd>⌫</kbd>) throws the selected lines away. GitLoom asks first, and <kbd>⌘Z</kbd> brings them back (see [Undo and redo](/docs/undo-and-redo/)).

## Moving around the diff

<kbd>⌥↑</kbd> and <kbd>⌥↓</kbd> move to the previous or next change in the file; <kbd>⌥⌘↑</kbd> and <kbd>⌥⌘↓</kbd> move to the previous or next file.
