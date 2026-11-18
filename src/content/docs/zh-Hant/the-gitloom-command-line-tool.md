---
title: "gitloom 命令列工具"
group: Tools
order: 24
summary: "安裝 gitloom 指令，從終端機開啟存放庫、差異、檔案歷史和追溯。"
updated: 2026-11-18
---

`gitloom` 指令可以從終端機開啟 GitLoom。需要時它會啟動 GitLoom。

## 安裝

選擇 **GitLoom ▸ 安裝命令列工具…**。這會在 `~/.local/bin/gitloom` 加入一個連結，不需要管理者密碼。如果 `~/.local/bin` 還不在你的 PATH 中，GitLoom 會告訴你；請將這一行加入 `~/.zshrc`：

```sh
export PATH="$HOME/.local/bin:$PATH"
```

要為所有 Shell 安裝而不更改 PATH，請使用 **設定 ▸ 整合 ▸ 命令列工具** 中的*安裝到 /usr/local/bin…*。macOS 會要求輸入管理者密碼。該部分也會顯示 `gitloom` 的安裝位置。

GitLoom 只會取代它自己的連結。如果那裡已有另一個名為 `gitloom` 的檔案，它會保持不動，GitLoom 會告訴你。

## 指令

| 指令 | 作用 |
|---|---|
| `gitloom [path]` | 開啟包含 `path` 的存放庫（預設：目前的資料夾） |
| `gitloom clone <url> [dir]` | 開啟已填好內容的複製對話框 |
| `gitloom diff [<rev>]` | 開啟你所在的存放庫並選取 `<rev>`（預設：未提交的更改那一列） |
| `gitloom log <file>` | 開啟該檔案的歷史 |
| `gitloom blame <file>[:<line>]` | 在該行開啟檔案的追溯 |
| `gitloom mcp` | 在 stdio 上執行 GitLoom 的 MCP 伺服器（請參閱 [MCP 伺服器](/zh-hant/docs/mcp-server/)） |

例如：

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
