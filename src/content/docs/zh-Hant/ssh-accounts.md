---
title: "SSH 帳號"
group: Accounts & hosting
order: 26
summary: "在同一主機上有多個帳號時，為每個帳號使用正確的 SSH 金鑰，在 GitLoom 和終端機中都是如此。"
updated: 2026-11-18
---

如果你在同一主機上有多個帳號（例如工作用和個人用的 GitHub 帳號），SSH 帳號會告訴 GitLoom 哪把金鑰屬於哪個登入名稱，以及哪些存放庫使用它。

## 設定帳號

打開 **設定 ▸ 帳號**，按一下*新增 SSH 帳號…*。對每個帳號：

- 填寫主機和你在該主機上的登入名稱；
- 加入它的金鑰：*匯入金鑰…* 會列出來自 `~/.ssh`、ssh-agent、1Password 和 Secretive 的金鑰，或用*產生…* 建立一把新的；
- 在*用於存放庫*下，加入應該使用它的擁有者或資料夾（*新增資料夾…*），或將它設為該主機的預設帳號。

之後，抓取、拉取、推送和複製都會使用正確的金鑰。開啟*同時將 core.sshCommand 寫入每個存放庫*後，會設定存放庫的 `core.sshCommand`，讓終端機中直接執行 `git push` 也有同樣的效果。

已有自己的 `core.sshCommand`、含 `IdentityFile` 的 `~/.ssh/config` 別名，或在 Shell 中設定了 `GIT_SSH_COMMAND` 的存放庫不受影響。

## 主機別名

如果你使用 `~/.ssh/config` 中的主機別名（例如 `github-work`），**存放庫 ▸ 遠端… ▸ SSH 別名** 可以將遠端切換為使用某個別名。

## 輪換金鑰

金鑰的*輪換…* 會產生新金鑰並上傳到帳號，新金鑰可用後再移除舊金鑰。

## SSH 帳號與託管登入

SSH 帳號只決定用哪把金鑰推送和拉取。登入 GitHub 或 GitLab（用於拉取請求和上傳金鑰）是另一回事，位於 **設定 ▸ 託管**（請參閱 [GitHub](/zh-hant/docs/github/) 和 [GitLab](/zh-hant/docs/gitlab/)）。
