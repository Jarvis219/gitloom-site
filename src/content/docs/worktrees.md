---
title: Worktrees
group: Tools
order: 21
summary: Check out a second branch in its own folder, so you can work on it without stashing what you are doing.
updated: 2026-11-18
---

A worktree is a second working folder for the same repository. You can work on another branch there without stashing what you're doing in the first one.

## Create one

Right-click a branch in the sidebar ▸ *Open in New Worktree…*. Choose the folder, and tick *Create a new branch from…* if you want a fresh branch. *Create & Open* makes the worktree and opens it in a new tab.

## The WORKTREES group

When a repository has more than one worktree, the sidebar shows a WORKTREES group. Each row shows the worktree's branch; the one in the current tab is marked *this tab*. A worktree whose folder is gone is marked *missing*, and *Prune* forgets those.

Right-click a worktree for:

- *Open in New Tab* or *Open*;
- *Show in Finder*;
- *Lock* or *Unlock*;
- *Remove Worktree…*.

## A branch in another worktree

Git keeps a branch checked out in one worktree at a time. If you check out a branch that is open elsewhere, GitLoom offers *Open That Worktree*, or the same commit in this worktree without the branch.

## Remove one

*Remove Worktree…* deletes the worktree's folder; the branch stays. You can't remove the worktree open in the current tab.

> **Caution** If the worktree has uncommitted changes, GitLoom says so and they are deleted with the folder when you choose *Remove Anyway*.
