---
title: Committing
group: Everyday work
order: 7
summary: Write a message, amend, add co-authors, watch your hooks run, and handle files git doesn't show.
updated: 2026-11-18
---

Select the *Uncommitted changes* row, stage what you want (see [Staging single lines](/docs/staging-single-lines/)), write the message and press <kbd>⌘↩</kbd>.

## The commit form

- *Amend* changes the last commit instead of making a new one. While it is ticked, the files that commit already changes are listed too.
- *Co-authors* suggests the people in recent history, including co-authors you added before.
- While a commit runs, what your hooks print (a `pre-commit` linter, tests) shows under the message. If a hook is still running after a minute, GitLoom says so and offers *Stop*.
- A line shows who you are committing as. It warns when the email doesn't match the repository's [profile](/docs/profiles/), or isn't one of your GitHub account's emails (GitHub wouldn't link the commit to you).

With AI turned on, <kbd>⌥⌘G</kbd> writes the message for you (see [Choosing a provider](/docs/choosing-a-provider/)).

## Message settings

In **Settings ▸ Git ▸ Commit message** you can set a template the form starts with, and the summary lengths at which the counter turns yellow and red (50 and 72 characters by default). It only warns; nothing is cut. A repository's own `commit.template` wins over the template.

## Files git doesn't show

- *Ignore* a file that is already tracked and GitLoom offers *Stop Tracking* (`git rm --cached`): the file leaves the repository with the next commit and stays on disk.
- Right-click a changed file ▸ *Hide Local Changes* for a tracked file you change on purpose, such as a local config. A line above the file list says how many are hidden, and *Show…* brings them back.
- On a Mac disk, renaming `readme.md` to `README.md` in Finder is invisible to git. GitLoom notices and offers *Record Rename*.

## Undo a commit

<kbd>⌘Z</kbd> undoes the last commit or amend. See [Undo and redo](/docs/undo-and-redo/).
