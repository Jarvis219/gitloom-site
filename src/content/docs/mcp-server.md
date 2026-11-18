---
title: MCP server
group: Tools
order: 25
summary: Let AI tools such as Claude Code, Cursor or VS Code read your repositories through GitLoom, and optionally make safe changes.
updated: 2026-11-18
---

Other AI tools (Claude Code, Claude Desktop, Cursor, VS Code and others) can work with your repositories through GitLoom's MCP server. It is off until you turn it on.

## Turn it on

In **Settings ▸ Integrations ▸ MCP server**, set *Outside AI tools may* to one of:

- *Do nothing (off)*;
- *Read: status, history, diffs, blame*;
- *Read and change: also commit, branch, stash, pull, push*.

Then connect your tool. For Claude Code, copy the line shown there and run it in a terminal; it looks like this:

```sh
claude mcp add gitloom -- "/Applications/GitLoom.app/Contents/Helpers/gitloom-mcp"
```

For other tools, copy the JSON shown there into the tool's MCP configuration. GitLoom never edits another tool's files. The `gitloom mcp` command also runs the server (see [The gitloom command-line tool](/docs/the-gitloom-command-line-tool/)).

## Read

Tools can see status, history, diffs, blame, branches and stashes of the repositories that are open or in the recent list on the start page. While GitLoom is running, they can also ask what you are looking at, such as the selected commit or the open file. They cannot change anything.

## Read and change

Tools can also stage, commit, create and switch branches, stash, fetch, pull (fast-forward only) and push, in repositories open in a tab, while GitLoom is running. Each change appears in the window with the tool's name and an *Undo* button, and in Operation History.

With *Ask before pushing* on, a push waits for your answer in the repository's window; after 60 seconds it is refused.

No tool can force-push, reset, discard, delete or rewrite history.

## Pull requests, issues and CI

With *Pull requests, issues and CI through my accounts* on, tools can read the repository's pull requests, issues and CI runs through the account connected in GitLoom. With *Read and change*, they can also open a pull request for the current branch and comment on one. They never see your token, and cannot merge, approve or close anything.

The settings show the most recent calls under *Recent activity*.
