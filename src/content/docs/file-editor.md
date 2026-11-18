---
title: File editor
group: Tools
order: 20
summary: View and edit any file of the repository inside GitLoom, then save and stage it in one step.
updated: 2026-11-18
---

GitLoom can show and edit the files of your repository, so a small fix doesn't need another app.

## Open a file

- <kbd>⌘P</kbd> (Quick Open) opens any file of the repository.
- The sidebar's Refs/Files switch shows the file tree. There you can also make a *New File…* or *New Folder…*, *Rename…* or *Move to Trash*, and *Show Ignored Files*.

A file opens for viewing. Press <kbd>⌘E</kbd>, or click *Edit File*, to edit it. Esc goes back to the graph.

## Editing keys

| Keys | Action |
|---|---|
| <kbd>⌘S</kbd> | Save |
| <kbd>⌥⌘S</kbd> | Save and stage |
| <kbd>⌘L</kbd> | Go to line |
| <kbd>⌥⌘F</kbd> | Find and replace |
| <kbd>⌘/</kbd> | Comment or uncomment the selected lines |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> | Indent / outdent the selected lines |

The editor's options include *Wrap Lines*, *Show Spaces and Tabs*, *Close Brackets and Quotes* and *Gutter Compares with HEAD*. The code font and its size are set in **Settings ▸ Appearance**.

## When the file changes on disk

If another app changes the file while you have unsaved edits, GitLoom tells you and offers *Keep Mine*, *Reload* or *Compare*. A file with conflict markers says that saving it doesn't mark it resolved; use the [conflict editor](/docs/resolving-conflicts/) for that.

GitLoom also waits to install an update while a file has unsaved changes.

## Another editor

*Open in External Editor* opens the file in the app chosen in **Settings ▸ Integrations ▸ Open files with**. A *Custom command* there overrides it; `$FILE`, `$LINE` and `$REPO` are filled in, for example:

```sh
code -g $FILE:$LINE
```
