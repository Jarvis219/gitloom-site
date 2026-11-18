---
title: Reading the history
group: History
order: 12
summary: Find your way around the commit graph, choose its columns and look inside any commit.
updated: 2026-11-18
---

The graph in the middle of the window shows every commit with its branches, each branch in its own coloured lane.

![The commit graph with branch lanes, the sidebar and the selected commit's detail](/shots/graph-light.png)

## Moving around

- <kbd>↑</kbd> <kbd>↓</kbd> or <kbd>J</kbd> <kbd>K</kbd> move to the previous or next commit.
- <kbd>⇧</kbd>-click selects a range and <kbd>⌘</kbd>-click selects several commits, for example to compare, squash or cherry-pick them.
- <kbd>⌘C</kbd> copies the selected commit's SHA.

Select a commit to see its files and diffs in the detail panel.

## Columns

Right-click the graph's column header to show more columns: author, date, SHA, CI and *Changes* (lines added and removed). That choice applies to the current repository. **View ▸ Graph Columns** and **Settings ▸ Layout ▸ Graph columns** change them for every repository.

## How it looks

In **Settings ▸ Appearance** you can choose:

- the row density (also in **View ▸ Density**);
- relative dates for the last week or always absolute dates, a custom date format, and commit or author date;
- whether stashes appear on the graph;
- the lane colours: from the theme, colour-blind friendly or monochrome;
- the avatars: birds, coloured initials, Gravatar, GitHub or none.

## Find a commit

<kbd>⌘F</kbd> searches the history and can filter the graph down to the matches. See [Search](/docs/search/).
