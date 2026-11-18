---
title: "議題"
group: Accounts & hosting
order: 30
summary: "建立和瀏覽 GitHub 和 GitLab 議題，並從議題開始一個分支。"
updated: 2026-11-18
---

加入 GitHub 或 GitLab 帳號後，GitLoom 會在側邊欄中顯示存放庫的議題。

## 建立和瀏覽

- **存放庫 ▸ GitHub / GitLab ▸ 新增議題…** 建立一個議題。
- 在側邊欄的「議題」群組中瀏覽存放庫的議題。你可以依標籤和里程碑篩選。
- 在議題上按右鍵可選擇*從議題建立分支*、*在瀏覽器中開啟*或*複製連結*。
- 在命令面板（<kbd>⌘K</kbd>）中輸入 `#` 可尋找拉取請求和議題。
- **Launchpad**（<kbd>⇧⌘K</kbd>）列出跨存放庫等你處理的議題。

## 從議題開始一個分支

*從議題建立分支* 會建立一個以該議題命名的分支。名稱依照 **設定 ▸ Git ▸ 從議題建立分支** 中的範本，預設為 `{type}/{number}-{slug}`，其中 `{type}` 為 `fix` 或 `feat`。團隊 `.gitloom/team.json` 中的範本優先於你的範本。
