---
title: Troubleshooting
group: Help
order: 38
summary: "What to try when something goes wrong: undo, find lost commits, see what git ran, and fix common setup problems."
updated: 2026-11-18
---

Most problems in GitLoom can be undone or explained. Start here.

## Something went wrong in the repository

- **Undo first**: <kbd>⌘Z</kbd> or **Edit ▸ Operation History…**. Most operations can be undone (see [Undo and redo](/docs/undo-and-redo/)).
- **Commits seem gone**: **Repository ▸ Reflog…** and **Find Lost Commits…** find them (see [Reflog recovery](/docs/reflog-recovery/)).
- **Stuck in a rebase or merge**: a repository left in the middle of one shows a banner with *Continue* and *Abort*, also after restarting GitLoom.

## See what GitLoom did

**Window ▸ Git Log** (<kbd>⌥⇧⌘L</kbd>) lists every git command GitLoom ran: the repository, the command, how long it took and its exit code. Only the command line is kept, never its output, input or credentials.

A thin moving line under the toolbar means git is talking to a remote; hover it to see what. A slow operation's message has *Cancel*.

## Common problems

- **GitLoom can't find git, or says it is too old.** Install git 2.40 or later (see [Install](/docs/install/)), or choose another git in **Settings ▸ Git ▸ Git binary**.
- **A hook can't find node, python or a linter.** Add the folders it needs to *Extra PATH* in **Settings ▸ Git ▸ Hooks**. This applies to repositories opened afterwards.
- **A hook hangs.** A commit whose hook still runs after a minute says so and offers *Stop*. *Stop a hook after* in **Settings ▸ Git ▸ Hooks** stops it automatically (after 10 minutes by default).
- **The wrong SSH key is used.** Set up [SSH accounts](/docs/ssh-accounts/).

## Logs and caches

In **Settings ▸ Advanced**:

- *Write a debug log* records the git commands GitLoom runs, with their exit status and time, in a file in the logs folder. Passwords and tokens in URLs are hidden. *Show Logs Folder* opens it.
- *Clear Caches…* removes pull requests and issues kept for offline use and cached file versions. They are fetched again when needed.
- If your settings file can't be read, GitLoom moves it aside, starts with defaults and says so here.

If none of this helps, [report an issue](/docs/report-an-issue/).
