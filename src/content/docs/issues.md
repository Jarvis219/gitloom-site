---
title: Issues
group: Accounts & hosting
order: 30
summary: Create and browse GitHub and GitLab issues, and start a branch from one.
updated: 2026-11-18
---

With a GitHub or GitLab account added, GitLoom shows the repository's issues in the sidebar.

## Create and browse

- **Repository ▸ GitHub / GitLab ▸ New Issue…** creates an issue.
- Browse the repository's issues in the sidebar's Issues group. You can filter them by label and milestone.
- Right-click an issue for *Create Branch from Issue*, *Open in Browser* or *Copy Link*.
- In the command palette (<kbd>⌘K</kbd>), type `#` to find pull requests and issues.
- **Launchpad** (<kbd>⇧⌘K</kbd>) lists the issues waiting for you across repositories.

## Start a branch from an issue

*Create Branch from Issue* makes a branch named after the issue. The name follows the template in **Settings ▸ Git ▸ Branch from an issue**, by default `{type}/{number}-{slug}`, where `{type}` is `fix` or `feat`. A team's `.gitloom/team.json` template wins over yours.
