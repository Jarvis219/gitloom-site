---
title: Report an issue
group: Help
order: 39
summary: How to report a bug or ask for a feature, what to include, and what GitLoom does after a crash.
updated: 2026-11-18
---

Report bugs and ask for features on [GitHub Issues](https://github.com/Jarvis219/gitloom-site/issues).

## What to include

- Your GitLoom version (**GitLoom ▸ About GitLoom**, or **Settings ▸ General ▸ Updates**) and your macOS version.
- The steps that lead to the problem.
- What you expected, and what happened instead.
- A screenshot, if it shows the problem.

If the problem is about something git did, the commands in **Window ▸ Git Log** help (see [Troubleshooting](/docs/troubleshooting/)). For more detail, turn on *Write a debug log* in **Settings ▸ Advanced**; passwords and tokens in URLs are hidden there.

> **Caution** Issues are public. Never paste tokens, passwords, SSH keys or private code. Check logs and screenshots before you attach them.

## After a crash

If GitLoom quits unexpectedly, the next launch asks whether to report it. It offers:

- *Report on GitHub…*: your browser opens a new issue, filled in with the GitLoom and macOS versions, the error and the top of the crashed thread. Read it, add what you were doing, and send it yourself.
- *Show Report*: shows the crash report macOS saved, in Finder.
- *Not Now*.

Nothing is sent unless you send the issue yourself. Tick *Don't offer this again*, or turn off *Offer to report crashes* in **Settings ▸ Advanced**, to stop the question.

**Help ▸ Report a Problem…** opens an empty issue in your browser at any time.
