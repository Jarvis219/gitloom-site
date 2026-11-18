---
title: Install
group: Getting started
order: 1
summary: What GitLoom needs, how to download it, and how to open it the first time.
updated: 2026-11-18
---

GitLoom is a free Git client for the Mac. It runs your own `git`, so your config, hooks, credentials and aliases all apply.

## Requirements

- macOS 14 Sonoma or later, on a Mac with Apple silicon.
- git 2.40 or later. The one from the Xcode Command Line Tools works, as does the one from Homebrew.

To get git from Apple, run this in Terminal:

```sh
xcode-select --install
```

GitLoom tells you at launch if it can't find a recent enough git. If you keep git somewhere unusual, choose it in **Settings ▸ Git**.

## Download

Download `GitLoom.dmg` (42 MB) from the [latest release](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg), or from Terminal:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

Open the disk image and drag GitLoom to your Applications folder.

## Open it the first time

GitLoom is not notarized by Apple yet, so macOS blocks the first launch. To open it:

1. Open GitLoom once. macOS says it can't be opened.
2. Go to **System Settings ▸ Privacy & Security** and click *Open Anyway* next to the message about GitLoom.
3. Confirm. From then on GitLoom opens normally.

You only need to do this once. Later versions arrive through GitLoom's own updater (see [Updates](/docs/updates/)).

## Optional: the command-line tool

Choose **GitLoom ▸ Install Command Line Tool…** to add a `gitloom` command, so `gitloom .` opens the folder you are in. See [The gitloom command-line tool](/docs/the-gitloom-command-line-tool/).
