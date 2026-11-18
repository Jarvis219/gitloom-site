---
title: "gitloom コマンドラインツール"
group: Tools
order: 24
summary: "gitloom コマンドをインストールして、ターミナルからリポジトリ、差分、ファイルの履歴、Blame を開きます。"
updated: 2026-11-18
---

`gitloom` コマンドは、ターミナルから GitLoom を開きます。必要なら GitLoom を起動します。

## インストールする

**GitLoom ▸ コマンドラインツールをインストール…** を選びます。`~/.local/bin/gitloom` にリンクが追加され、管理者パスワードは不要です。`~/.local/bin` がまだ PATH に含まれていない場合は GitLoom が知らせるので、`~/.zshrc` に次の行を追加します:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

PATH を変えずにすべてのシェルで使えるようにするには、**設定 ▸ 連携 ▸ コマンドラインツール** の */usr/local/bin にインストール…* を使います。macOS が管理者のパスワードを求めます。このセクションには `gitloom` のインストール場所も表示されます。

GitLoom が置き換えるのは自分のリンクだけです。`gitloom` という名前の別のファイルがすでにある場合はそのまま残し、GitLoom がその旨を知らせます。

## コマンド

| コマンド | 動作 |
|---|---|
| `gitloom [path]` | `path` を含むリポジトリを開く（デフォルト: 現在のフォルダ） |
| `gitloom clone <url> [dir]` | 入力済みのクローンダイアログを開く |
| `gitloom diff [<rev>]` | 現在いるリポジトリを開き、`<rev>` を選択する（デフォルト: コミットされていない変更の行） |
| `gitloom log <file>` | ファイルの履歴を開く |
| `gitloom blame <file>[:<line>]` | ファイルの Blame をその行で開く |
| `gitloom mcp` | GitLoom の MCP サーバーを stdio で実行する（[MCP サーバー](/ja/docs/mcp-server/)を参照） |

例:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
