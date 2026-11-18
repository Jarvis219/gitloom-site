---
title: Submodules
group: Tools
order: 22
summary: See the state of each submodule, initialise and update them, open one in its own tab, add or remove them.
updated: 2026-11-18
---

When a repository has submodules, the sidebar shows a SUBMODULES group with each one and its state.

## Reading the list

Each row shows the submodule's path and its state:

- a ✓ and the checked-out commit when it is up to date, or *modified content* / *untracked content* when it has changes;
- *Update* when it is out of sync: the checked-out commit is not the one the main repository records (hover to see both);
- *Init* when it isn't initialised yet;
- *conflict* when the recorded commit is in conflict.

## Working with a submodule

Double-click a submodule to open it in its own tab. Right-click it for:

- *Open in New Tab*;
- *Update to Recorded Commit*, or *Update to Latest Remote*;
- *Init*, for one that isn't initialised;
- *Show in Finder*;
- *Remove Submodule…*.

If a submodule has uncommitted changes, updating asks first. git stops if your changes are in the way; nothing is forced.

To update submodules after every pull that brings new commits, turn on *Update submodules after pulling* in **Settings ▸ Git**.

## Add a submodule

**Repository ▸ Advanced ▸ Add Submodule…** asks for the URL, the path and, optionally, a branch.

## Remove a submodule

*Remove Submodule…* deinitialises the submodule and removes it from the index. Its repository data (`.git/modules/<name>`) goes to the Trash, so its commits stay recoverable. Commit afterwards to finish. If the submodule has uncommitted changes, commits on no remote or stashes, GitLoom lists them first.
