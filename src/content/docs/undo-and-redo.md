---
title: Undo and redo
group: Everyday work
order: 11
summary: Undo almost any Git operation with ⌘Z, redo it with ⇧⌘Z, or go back to any point in the Operation History.
updated: 2026-11-18
---

<kbd>⌘Z</kbd> undoes the last Git operation and <kbd>⇧⌘Z</kbd> redoes it. When something goes wrong, try undo first.

## What can be undone

Commit, amend, checkout, branch and tag changes, discard, reset, stash, pull, merge, rebase, cherry-pick and more.

A merge, rebase or reset is redone only while the working tree is clean.

## Operation History

**Edit ▸ Operation History…** lists everything GitLoom did. You can undo back to any point in it.

## Before losing work

Before an undo that would throw away work, for example after you made new changes, GitLoom tells you what will happen and asks.

## Text and the rebase editor

In a text field, <kbd>⌘Z</kbd> undoes typing as usual. In the [interactive rebase](/docs/interactive-rebase/) editor, it undoes changes to the plan.

If a commit seems gone even after undo, see [Reflog recovery](/docs/reflog-recovery/).
