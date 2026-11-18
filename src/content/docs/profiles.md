---
title: Profiles
group: Getting started
order: 4
summary: Keep a separate name, email, signing key, tabs and recent list for each kind of work.
updated: 2026-11-18
---

A profile holds the identity you commit with: a name, an email and an optional signing key. Use one for work and one for personal projects, for example. Set them up in **Settings ▸ Profiles**.

## What a profile holds

Each profile has:

- a profile name, and the commit name (`user.name`) and email (`user.email`);
- a signing method: don't sign, SSH, GPG or X.509, and whether to sign commits by default;
- an optional account it pushes with, when the [SSH accounts](/docs/ssh-accounts/) rules don't decide;
- its own open tabs and recent repositories.

GitLoom writes the name, email and signing key to each repository's git config, so the terminal agrees with GitLoom.

## Switch profiles

Switch profiles from the chip at the top right of the window. One profile is the default: GitLoom starts with it, and goes back to it when the profile in use is deleted. Use *Make Default* to change which one it is.

## The wrong identity

Above the commit button GitLoom shows who you are committing as. If that email is not the one of the repository's profile, the line is marked with a warning; pick the right profile from the toolbar chip to fix it.

## Remove a profile

Select it and click −. Its open tabs and recent repositories are forgotten. Git config already written to repositories is left as it is. There is always at least one profile.
