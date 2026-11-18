---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "用權杖連接 gitlab.com 或你自己的 GitLab 伺服器，處理合併請求和議題。"
updated: 2026-11-18
---

GitLoom 使用個人存取權杖，可搭配 gitlab.com 和你自己的 GitLab 伺服器使用。

## 加入權杖

1. 打開 **設定 ▸ 託管**，按一下*新增 GitLab 權杖…*。
2. 輸入主機。
3. 貼上一個具備 `api`、`read_user` 和 `write_repository` 範圍的個人存取權杖。*建立權杖…* 會在你的 GitLab 上打開對應的頁面。

權杖保存在 macOS 鑰匙圈中。HTTPS 推送會使用它。

## 你可以做什麼

側邊欄會顯示「合併請求」和議題。你可以：

- 建立合併請求、留言、批准並合併（可壓縮）；
- 在 Launchpad（<kbd>⇧⌘K</kbd>）中查看你的合併請求；
- 建立和瀏覽議題。

## 尚未支援

對於 GitLab，GitLoom 尚未支援：

- CI 管線（Actions 群組會隱藏）；
- 針對某一行程式碼的留言；
- 組織；
- 不使用權杖登入。
