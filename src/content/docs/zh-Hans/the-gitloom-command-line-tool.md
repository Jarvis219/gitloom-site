---
title: "gitloom 命令行工具"
group: Tools
order: 24
summary: "安装 gitloom 命令，从终端打开仓库、差异、文件历史和追溯。"
updated: 2026-11-18
---

`gitloom` 命令可以从终端打开 GitLoom。需要时它会启动 GitLoom。

## 安装

选择 **GitLoom ▸ 安装命令行工具…**。这会在 `~/.local/bin/gitloom` 添加一个链接，不需要管理员密码。如果 `~/.local/bin` 还不在你的 PATH 中，GitLoom 会告诉你；请将这一行添加到 `~/.zshrc`：

```sh
export PATH="$HOME/.local/bin:$PATH"
```

要为所有 Shell 安装而不更改 PATH，请使用 **设置 ▸ 集成 ▸ 命令行工具** 中的*安装到 /usr/local/bin…*。macOS 会要求输入管理员密码。该部分也会显示 `gitloom` 的安装位置。

GitLoom 只会替换它自己的链接。如果那里已有另一个名为 `gitloom` 的文件，它会保持不动，GitLoom 会告诉你。

## 命令

| 命令 | 作用 |
|---|---|
| `gitloom [path]` | 打开包含 `path` 的仓库（默认：当前文件夹） |
| `gitloom clone <url> [dir]` | 打开已填好内容的克隆对话框 |
| `gitloom diff [<rev>]` | 打开你所在的仓库并选中 `<rev>`（默认：未提交的更改那一行） |
| `gitloom log <file>` | 打开该文件的历史 |
| `gitloom blame <file>[:<line>]` | 在该行打开文件的追溯 |
| `gitloom mcp` | 在 stdio 上运行 GitLoom 的 MCP 服务器（参阅 [MCP 服务器](/zh-hans/docs/mcp-server/)） |

例如：

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
