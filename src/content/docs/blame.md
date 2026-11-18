---
title: Blame
group: History
order: 14
summary: See who last changed each line of a file, and follow a line back through older commits.
updated: 2026-11-18
---

Blame shows, for each line of a file, the commit that last changed it.

## Open it

Select a file and press <kbd>⌥⌘B</kbd>, or choose **Repository ▸ Blame…**. From the terminal, `gitloom blame <file>:<line>` opens it at that line (see [The gitloom command-line tool](/docs/the-gitloom-command-line-tool/)). From [File history](/docs/file-history/), *Blame at This Commit* shows the file as it was then.

## Follow a line back

Click a line to see its commit, then:

- *Show Commit* selects that commit in the graph;
- *Blame Parent* shows the blame from just before that commit, to see who wrote the line before it.

## Options

The bar above the file has:

- *Ignore whitespace*;
- *Heatmap*, which colours lines by age;
- under *More*: *Detect lines moved within the file (-M)* and *Detect lines copied from other files (-C)*;
- *Ignore revs*, when the repository has a `.git-blame-ignore-revs` file (or `blame.ignoreRevsFile` is set). It skips the commits listed there, such as formatting changes.

On a very long file, blame can take a while. GitLoom tells you first, the lines fill in as they are found, and you can leave at any time.
