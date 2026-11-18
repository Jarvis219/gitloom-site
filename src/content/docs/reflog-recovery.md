---
title: Reflog recovery
group: History
order: 17
summary: Get back commits that seem gone after a reset, rebase or deleted branch, using the reflog and Find Lost Commits.
updated: 2026-11-18
---

Commits are hard to lose in git. If one seems gone, try <kbd>⌘Z</kbd> or **Edit ▸ Operation History…** first (see [Undo and redo](/docs/undo-and-redo/)). If that doesn't help, look in the reflog.

## The reflog

Choose **Repository ▸ Reflog…**. It lists every position HEAD has had, newest first, so commits you lost with a reset or rebase are there. Pick a branch at the top to see that branch's reflog instead, and type in the filter to search by SHA, action or message.

You can also right-click a branch ▸ *Show Reflog* to open the reflog of that branch.

## Lost commits

**Repository ▸ Find Lost Commits…** (or the *Lost Commits* tab) searches for commits that no branch, tag or reflog reaches, for example the commits of a branch that was deleted.

## Bring a commit back

Select a commit in either list, then:

- *Create Branch Here…* puts a new branch on it;
- *Cherry-pick* copies it onto your current branch;
- *Reset Current Branch Here…* moves your current branch to it.
