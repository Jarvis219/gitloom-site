---
title: "安裝"
group: Getting started
order: 1
summary: "GitLoom 的系統需求、下載方法，以及第一次如何打開它。"
updated: 2026-11-18
---

GitLoom 是一款免費的 Mac Git 用戶端。它執行你自己的 `git`，所以你的設定、掛鉤、憑證和別名都照常生效。

## 系統需求

- macOS 14 Sonoma 或以上版本，搭載 Apple 晶片的 Mac。
- git 2.40 或以上版本。Xcode 命令列工具內附的 git 可以使用，Homebrew 安裝的也可以。

要從 Apple 取得 git，請在「終端機」中執行：

```sh
xcode-select --install
```

如果 GitLoom 找不到夠新的 git，會在啟動時告訴你。如果你把 git 放在不常見的位置，請在 **設定 ▸ Git** 中選擇它。

## 下載

從[最新版本](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg)下載 `GitLoom.dmg`（42 MB），或在「終端機」中下載：

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

打開磁碟映像檔，將 GitLoom 拖到「應用程式」資料夾。

## 第一次打開

GitLoom 尚未經過 Apple 公證，所以 macOS 會阻擋第一次啟動。要打開它：

1. 先打開一次 GitLoom。macOS 會顯示無法打開。
2. 前往 **系統設定 ▸ 隱私權與安全性**，在關於 GitLoom 的訊息旁按一下*強制打開*。
3. 確認。之後 GitLoom 就能正常打開了。

這個步驟只需做一次。之後的版本會透過 GitLoom 內建的更新程式取得（請參閱[更新](/zh-hant/docs/updates/)）。

## 選用：命令列工具

選擇 **GitLoom ▸ 安裝命令列工具…** 來加入 `gitloom` 指令，這樣 `gitloom .` 就會打開你所在的資料夾。請參閱[gitloom 命令列工具](/zh-hant/docs/the-gitloom-command-line-tool/)。
