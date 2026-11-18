---
title: Resolving conflicts
group: Everyday work
order: 10
summary: Use the three-way merge editor to take a side per conflict or per line, edit the result and continue.
updated: 2026-11-18
---

When a merge, rebase, cherry-pick or pull hits a conflict, it stops and a banner explains what is going on. Conflicted files are listed in the detail panel.

![The three-way conflict editor showing your side, their side and the result](/shots/conflict-light.png)

## The merge editor

Open a conflicted file for the three-way merge editor: your side, their side and the result.

- Take a side per conflict, or per line.
- Edit the result directly.
- <kbd>⌥⌘↑</kbd> and <kbd>⌥⌘↓</kbd> move between conflicts.
- Tick *Whole file* to see each side as the whole file with the conflicts in place. The columns line up and scroll together.

When the file is right, click *Save & Mark Resolved* (<kbd>⌘S</kbd>).

## Special cases

- A conflict that comes from a rename (renamed on both sides, or renamed on one and deleted on the other) says so.
- A binary file can be previewed on both sides before you choose.
- A banner warns when the two sides only differ in line endings (CRLF / LF).

## Your own merge tool

You can also open the file in your external merge tool. GitLoom uses git's `merge.tool`, or the tool you choose in **Settings ▸ Integrations ▸ Merge tool**.

## Finish or stop

Once every file is resolved, click *Continue* in the banner. *Skip* skips the current commit of a rebase or cherry-pick; *Abort* puts everything back as it was. A repository left in the middle of a rebase or merge shows the banner again after restarting GitLoom.
