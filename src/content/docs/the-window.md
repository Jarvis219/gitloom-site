---
title: The window
group: Getting started
order: 3
summary: The sidebar, the commit graph, the detail panel, the toolbar, tabs, banners and messages.
updated: 2026-11-18
---

A repository window has three main parts: the sidebar on the left, the commit graph in the middle and the detail panel on the right or at the bottom.

![The GitLoom window: sidebar with branches, the commit graph with coloured branch lanes, and the selected commit's details](/shots/graph-light.png)

## Sidebar

The sidebar lists local and remote branches, tags, stashes, submodules and worktrees. The Refs/Files switch shows the repository's file tree instead. Right-click a branch or tag ▸ *Pin to Top* to keep it in a PINNED group above the rest. Hide the sidebar with the button in its header or <kbd>⌘0</kbd>.

## Graph and detail panel

The graph shows every commit with its branches. The top row, *Uncommitted changes*, is your working tree. Right-click the column header to show more columns: author, date, SHA, CI and *Changes* (lines added and removed).

The detail panel shows the selected commit with its files and diffs, or the staging area when the working tree row is selected. <kbd>⌥⌘0</kbd> shows or hides it, and <kbd>⌥⌘L</kbd> moves it between the right and the bottom.

## Toolbar and tabs

The toolbar has Undo/Redo, Pull, Push, Fetch, Branch, Stash, terminal and panel buttons. Hover a button for a moment to see what it does and its shortcut. You can choose and order the buttons in **Settings ▸ Layout**.

Each repository has its own tab. **Repository ▸ Tab Color** gives a repository its own colour, which also shows as a thin line under the toolbar. **File ▸ Open Recent** and the Dock icon's menu list recent repositories. A tab you haven't looked at for 10 minutes frees its graph's memory and loads it again when you come back.

## Banners and messages

A banner under the toolbar explains any unusual state, such as a rebase or merge in progress, conflicts or a detached HEAD, and has the buttons to continue or abort.

Short messages appear at the top of the window, coloured by kind: green when something is done, blue for information, orange when something needs your attention and red when it failed. Problems stay longer; ✕ closes them.
