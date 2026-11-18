---
title: GitLab
group: Accounts & hosting
order: 28
summary: Connect gitlab.com or your own GitLab server with a token to work with merge requests and issues.
updated: 2026-11-18
---

GitLoom works with gitlab.com and with your own GitLab server, using a personal access token.

## Add a token

1. Open **Settings ▸ Hosting** and click *Add GitLab Token…*.
2. Enter the host.
3. Paste a personal access token with the `api`, `read_user` and `write_repository` scopes. *Create a Token…* opens the right page on your GitLab.

The token is kept in the macOS Keychain. HTTPS pushes use it.

## What you can do

The sidebar shows MERGE REQUESTS and issues. You can:

- create a merge request, comment on it, approve and merge it (with squash);
- see your merge requests in the Launchpad (<kbd>⇧⌘K</kbd>);
- create and browse issues.

## Not supported yet

For GitLab, GitLoom doesn't yet support:

- CI pipelines (the Actions group is hidden);
- comments on a line of code;
- organisations;
- signing in without a token.
