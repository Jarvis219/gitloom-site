---
title: Bisect
group: History
order: 18
summary: Find the commit that broke something by testing a few commits and answering Good or Bad.
updated: 2026-11-18
---

Bisect finds the commit that introduced a problem. You tell GitLoom one commit where things worked and one where they don't, then test the commits it picks in between.

## Start

Commit or stash your work first: files change as commits are checked out.

Choose **Repository ▸ Bisect…**, or right-click an older commit that still worked ▸ *Bisect: This Commit Is Good…*. GitLoom asks for a bad and a good commit.

## Test and answer

GitLoom checks out a commit between the two. Test it, then answer in the bar above the graph:

- *Good* if the problem isn't there;
- *Bad* if it is;
- *Skip* if this commit can't be tested.

After a few answers the bar names the first bad commit. If skipped commits stop it from narrowing further, it lists the commits it could be.

## Let a command test for you

If a command can tell a good commit from a bad one, such as a single test, click *Run Script…* in the bar (`git bisect run`). git then checks out one commit after another and runs the command in the repository. It must exit 0 when the commit is good and 1 when it is bad; 125 means the commit can't be tested.

## Finish

*Finish* puts you back where you started. *Stop* ends the bisect at any time and also goes back to where it started.
