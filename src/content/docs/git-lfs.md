---
title: Git LFS
group: Tools
order: 23
summary: Track large files with Git LFS, download them, and lock files so teammates don't edit them at the same time.
updated: 2026-11-18
---

GitLoom works with Git LFS when `git-lfs` is installed on your Mac. Without it, GitLoom can still list LFS files but can't download or lock them.

## The GIT LFS group

In a repository that uses LFS, the sidebar has a GIT LFS group listing the LFS files. A file that hasn't been downloaded yet, where only the pointer is on disk, has a download icon. A locked file shows who locked it. Double-click a file to open it.

Right-click a file for:

- *Open File*;
- *Download This File*, when only its pointer is here;
- *Lock* or *Unlock*.

## Download every LFS file

**Repository ▸ Advanced ▸ Download Git LFS Files** runs `git lfs pull` and downloads the large files of this checkout.

## Track a new kind of file

Right-click a changed file in the staging area ▸ *Track with LFS (\*.ext)* to track every file with that extension. In a repository that already uses LFS, the same menu has *Lock (LFS)* and *Unlock (LFS)*.
