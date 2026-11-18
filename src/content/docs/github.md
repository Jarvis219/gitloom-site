---
title: GitHub
group: Accounts & hosting
order: 27
summary: Sign in to GitHub to work with pull requests, issues, Actions and your organisations from GitLoom.
updated: 2026-11-18
---

Sign in to GitHub to use pull requests, issues, the Launchpad and Actions in GitLoom.

## Sign in

Open **Settings ▸ Hosting** and click *Sign In with GitHub…*. *Get a Code* gives you a code; *Copy Code & Open GitHub* copies it and opens the page where you enter it.

You can also use *Add Token…* and paste a personal access token, fine-grained or classic. GitLoom checks the scopes it can see.

Tokens are kept in the macOS Keychain only.

## What you can do

- Create, review and merge [pull requests](/docs/pull-requests-and-reviews/).
- Create and browse [issues](/docs/issues/).
- See GitHub [Actions](/docs/actions/) runs next to their commits.
- **Launchpad** (<kbd>⇧⌘K</kbd>) lists pull requests and issues waiting for you across repositories.
- **Window ▸ Organizations** shows your organisations, their teams and members.
- **Repository ▸ GitHub / GitLab** has *Publish Repository…*, which creates the repository on GitHub, adds it as `origin` and pushes the current branch, and *Fork on GitHub*.
- Clone from your accounts and organisations: <kbd>⇧⌘C</kbd> ▸ *Choose from Your Account…*.

## Your commit email

Before a commit, GitLoom warns when the email isn't one of your GitHub account's emails, because GitHub wouldn't link the commit to you.

## SSH keys

Signing in is for the API. Which SSH key pushes for which login is set in [SSH accounts](/docs/ssh-accounts/). An account's *SSH Keys…* in **Settings ▸ Hosting** shows the keys on GitHub and can upload yours.
