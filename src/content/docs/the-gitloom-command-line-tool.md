---
title: The gitloom command-line tool
group: Tools
order: 24
summary: Install the gitloom command to open repositories, diffs, file history and blame from your terminal.
updated: 2026-11-18
---

The `gitloom` command opens GitLoom from a terminal. It starts GitLoom when needed.

## Install it

Choose **GitLoom ▸ Install Command Line Tool…**. This adds a link at `~/.local/bin/gitloom`, with no administrator password. If `~/.local/bin` is not on your PATH yet, GitLoom tells you; add this line to `~/.zshrc`:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

To install it for every shell without changing PATH, use *Install in /usr/local/bin…* in **Settings ▸ Integrations ▸ Command line tool**. macOS asks for an administrator's password. That section also shows where `gitloom` is installed.

GitLoom only replaces its own link. If another file named `gitloom` is already there, it is left alone and GitLoom tells you.

## Commands

| Command | Does |
|---|---|
| `gitloom [path]` | Opens the repository containing `path` (default: the current folder) |
| `gitloom clone <url> [dir]` | Opens the Clone dialog filled in |
| `gitloom diff [<rev>]` | Opens the repository you are in and selects `<rev>` (default: the uncommitted changes row) |
| `gitloom log <file>` | Opens the file's history |
| `gitloom blame <file>[:<line>]` | Opens the file's blame, at that line |
| `gitloom mcp` | Runs GitLoom's MCP server on stdio (see [MCP server](/docs/mcp-server/)) |

For example:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
