---
title: Merge, rebase or cherry-pick by dragging
group: Everyday work
order: 9
summary: Drag branches and commits on the graph to merge, rebase, fast-forward, cherry-pick or push.
updated: 2026-11-18
---

On the graph you can drag a branch or commits onto another place, and GitLoom shows a menu of what that drop can do. Nothing happens until you choose.

## What you can drag

- **A branch label onto another branch or a commit**: merge, rebase or fast-forward. The menu can also start an [interactive rebase](/docs/interactive-rebase/).
- **Commits onto a branch**: cherry-pick them. Select several with <kbd>⇧</kbd>-click or <kbd>⌘</kbd>-click first.
- **A branch onto a remote** in the sidebar: push it.
- **A branch onto another branch**, with a GitHub or GitLab account: create a pull request (see [Pull requests and reviews](/docs/pull-requests-and-reviews/)).

## Without dragging

Every drag has the same command in a right-click menu. The Repository menu also has *Merge into Current Branch* and *Rebase Current Branch onto*.

## When there are conflicts

Conflicts stop the operation and a banner appears. Resolve them, then choose *Continue*, *Skip* or *Abort*. See [Resolving conflicts](/docs/resolving-conflicts/).

## Changed your mind

A merge, rebase or cherry-pick can be undone with <kbd>⌘Z</kbd>. See [Undo and redo](/docs/undo-and-redo/).
