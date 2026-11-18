---
title: SSH accounts
group: Accounts & hosting
order: 26
summary: Use the right SSH key for each account when you have several on the same host, in GitLoom and the terminal.
updated: 2026-11-18
---

If you have several accounts on the same host, such as a work and a personal GitHub account, an SSH account tells GitLoom which key belongs to which login, and which repositories use it.

## Set up an account

Open **Settings ▸ Accounts** and click *Add SSH Account…*. For each account:

- give the host and your login on it;
- add its keys: *Import Keys…* lists keys from `~/.ssh`, ssh-agent, 1Password and Secretive, or *Generate…* makes a new one;
- under *Use for repositories*, add the owners or folders that should use it (*Add Folder…*), or make it the *Default account* for the host.

Fetch, pull, push and clone then use the right key. With *Also write core.sshCommand to each repository* on, the repository's `core.sshCommand` is set so a plain `git push` in the terminal does the same.

Repositories with their own `core.sshCommand`, an `~/.ssh/config` alias with `IdentityFile`, or `GIT_SSH_COMMAND` in your shell are left alone.

## Host aliases

If you use host aliases from `~/.ssh/config` (such as `github-work`), **Repository ▸ Remotes… ▸ SSH Alias** switches a remote to one.

## Rotate a key

A key's *Rotate…* makes a new key, uploads it to the account, and removes the old one once the new one works.

## SSH accounts and hosting sign-ins

An SSH account only picks which key pushes and pulls. Signing in to GitHub or GitLab, for pull requests and uploading keys, is separate and lives in **Settings ▸ Hosting** (see [GitHub](/docs/github/) and [GitLab](/docs/gitlab/)).
