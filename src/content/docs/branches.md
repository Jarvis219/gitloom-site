---
title: Branches
group: Everyday work
order: 8
summary: Create, check out and manage branches and tags, and fetch, pull and push them.
updated: 2026-11-18
---

Branches and tags are in the sidebar and on the graph. Most actions are one right-click away.

## Create and check out

<kbd>⌘B</kbd> creates a branch at the selected commit. Double-click a branch to check it out. Right-click branches, tags and commits for everything else: rename, delete, set upstream, tag, reset, revert, cherry-pick and more.

Deleting a branch that isn't merged asks first and can be undone with <kbd>⌘Z</kbd>.

## Fetch, pull and push

- <kbd>⇧⌘L</kbd> fetches every remote. GitLoom also fetches in the background, every 5 minutes by default (change it in **Settings ▸ General**). It never fetches in the background on battery below 20 %, in Low Power Mode or on expensive networks.
- <kbd>⇧⌘↓</kbd> pulls. **Repository ▸ Pull With** picks a strategy for a single pull.
- <kbd>⇧⌘↑</kbd> pushes. Tick *Set upstream* for a new branch.

A force push is always explicit and uses `--force-with-lease`. **Repository ▸ Push with Tags** also pushes the annotated tags on the pushed commits.

## Clean up

**Repository ▸ Delete Merged Branches…** removes local branches already merged into the current one. Protected branches are left alone; set their patterns in **Settings ▸ Git ▸ Protected branches** (for example `main master release/*`).

## Stash

<kbd>⇧⌘S</kbd> stashes everything. *Stash Changes…* lets you name the stash and choose files. Stashes are in the sidebar and, by default, on the graph. *Recover Dropped Stash…* finds a stash you dropped by mistake.

## Branch folders

Local branches named like `prefix/…` show as folders in the sidebar. Turn that off in **Settings ▸ Layout**.
