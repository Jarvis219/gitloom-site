---
title: "安装"
group: Getting started
order: 1
summary: "GitLoom 的系统要求、下载方法，以及第一次如何打开它。"
updated: 2026-11-18
---

GitLoom 是一款免费的 Mac Git 客户端。它运行你自己的 `git`，所以你的配置、钩子、凭据和别名都照常生效。

## 系统要求

- macOS 14 Sonoma 或更高版本，搭载 Apple 芯片的 Mac。
- git 2.40 或更高版本。Xcode 命令行工具自带的 git 可以使用，Homebrew 安装的也可以。

要从 Apple 获取 git，请在“终端”中运行：

```sh
xcode-select --install
```

如果 GitLoom 找不到足够新的 git，会在启动时告诉你。如果你把 git 放在不常见的位置，请在 **设置 ▸ Git** 中选择它。

## 下载

从[最新版本](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg)下载 `GitLoom.dmg`（42 MB），或在“终端”中下载：

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

打开磁盘映像，将 GitLoom 拖到“应用程序”文件夹。

## 第一次打开

GitLoom 尚未经过 Apple 公证，所以 macOS 会阻止首次启动。要打开它：

1. 先打开一次 GitLoom。macOS 会提示无法打开。
2. 前往 **系统设置 ▸ 隐私与安全性**，在关于 GitLoom 的提示旁点按*仍要打开*。
3. 确认。之后 GitLoom 就能正常打开了。

这一步只需做一次。之后的版本会通过 GitLoom 自带的更新程序获取（参阅[更新](/zh-hans/docs/updates/)）。

## 可选：命令行工具

选择 **GitLoom ▸ 安装命令行工具…** 来添加 `gitloom` 命令，这样 `gitloom .` 就会打开你所在的文件夹。参阅[gitloom 命令行工具](/zh-hans/docs/the-gitloom-command-line-tool/)。
