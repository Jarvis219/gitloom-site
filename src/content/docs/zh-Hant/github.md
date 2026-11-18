---
title: "GitHub"
group: Accounts & hosting
order: 27
summary: "登入 GitHub，在 GitLoom 中處理拉取請求、議題、Actions 和你的組織。"
updated: 2026-11-18
---

登入 GitHub 後，即可在 GitLoom 中使用拉取請求、議題、Launchpad 和 Actions。

## 登入

打開 **設定 ▸ 託管**，按一下*使用 GitHub 登入…*。*取得驗證碼* 會給你一組驗證碼；*複製代碼並開啟 GitHub* 會拷貝它並打開輸入驗證碼的頁面。

你也可以使用*新增權杖…*，貼上一個個人存取權杖（細緻權限或傳統權杖皆可）。GitLoom 會檢查它能看到的範圍。

權杖只保存在 macOS 鑰匙圈中。

## 你可以做什麼

- 建立、審查和合併[拉取請求](/zh-hant/docs/pull-requests-and-reviews/)。
- 建立和瀏覽[議題](/zh-hant/docs/issues/)。
- 在提交旁查看 GitHub [Actions](/zh-hant/docs/actions/) 執行。
- **Launchpad**（<kbd>⇧⌘K</kbd>）列出跨存放庫等你處理的拉取請求和議題。
- **視窗 ▸ 組織** 顯示你的組織及其團隊和成員。
- **存放庫 ▸ GitHub / GitLab** 中有*發布存放庫…*（在 GitHub 上建立存放庫，將其加入為 `origin` 並推送目前的分支）和*在 GitHub 上分叉*。
- 從你的帳號和組織複製：<kbd>⇧⌘C</kbd> ▸ *從你的帳號中選擇…*。

## 你的提交電子郵件

提交前，如果電子郵件不是你 GitHub 帳號的電子郵件之一，GitLoom 會發出警告，因為 GitHub 將無法把該提交連結到你。

## SSH 金鑰

登入是為了使用 API。哪把 SSH 金鑰用於哪個登入名稱的推送，在 [SSH 帳號](/zh-hant/docs/ssh-accounts/)中設定。**設定 ▸ 託管** 中帳號的*SSH 金鑰…* 會顯示 GitHub 上的金鑰，並可上傳你的金鑰。
