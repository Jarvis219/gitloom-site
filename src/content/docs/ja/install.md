---
title: "インストール"
group: Getting started
order: 1
summary: "GitLoom に必要な環境、ダウンロード方法、初めて開くときの手順。"
updated: 2026-11-18
---

GitLoom は Mac 用の無料 Git クライアントです。お使いの `git` をそのまま実行するので、設定、フック、認証情報、エイリアスがすべてそのまま使えます。

## 必要なシステム

- macOS 14 Sonoma 以降、Apple シリコン搭載の Mac。
- git 2.40 以降。Xcode Command Line Tools に含まれるもの、または Homebrew のものが使えます。

Apple から git を入手するには、ターミナルで次を実行します:

```sh
xcode-select --install
```

十分に新しい git が見つからない場合は、起動時に GitLoom が知らせます。git を一般的でない場所に置いている場合は、**設定 ▸ Git** で選択してください。

## ダウンロード

[最新リリース](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg)から `GitLoom.dmg`（46 MB）をダウンロードするか、ターミナルから次を実行します:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

ディスクイメージを開き、GitLoom を「アプリケーション」フォルダにドラッグします。

## 初めて開く

GitLoom はまだ Apple の公証を受けていないため、最初の起動は macOS にブロックされます。開くには:

1. GitLoom を一度開きます。macOS が開けないことを知らせます。
2. **システム設定 ▸ プライバシーとセキュリティ** を開き、GitLoom についてのメッセージの横にある*このまま開く*をクリックします。
3. 確認します。以降、GitLoom は通常どおり開きます。

この操作は一度だけです。新しいバージョンは GitLoom 自身のアップデート機能で届きます（[アップデート](/ja/docs/updates/)を参照）。

## オプション: コマンドラインツール

**GitLoom ▸ コマンドラインツールをインストール…** を選ぶと `gitloom` コマンドが追加され、`gitloom .` で今いるフォルダを開けます。[gitloom コマンドラインツール](/ja/docs/the-gitloom-command-line-tool/)を参照してください。
