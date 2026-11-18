---
title: "SSH 账户"
group: Accounts & hosting
order: 26
summary: "在同一主机上有多个账户时，为每个账户使用正确的 SSH 密钥，在 GitLoom 和终端中都是如此。"
updated: 2026-11-18
---

如果你在同一主机上有多个账户（例如工作用和个人用的 GitHub 账户），SSH 账户会告诉 GitLoom 哪个密钥属于哪个登录名，以及哪些仓库使用它。

## 设置账户

打开 **设置 ▸ 账户**，点按*添加 SSH 账户…*。对每个账户：

- 填写主机和你在该主机上的登录名；
- 添加它的密钥：*导入密钥…* 会列出来自 `~/.ssh`、ssh-agent、1Password 和 Secretive 的密钥，或用*生成…* 新建一个；
- 在*用于仓库*下，添加应使用它的所有者或文件夹（*添加文件夹…*），或将它设为该主机的默认账户。

之后，抓取、拉取、推送和克隆都会使用正确的密钥。开启*同时将 core.sshCommand 写入每个仓库*后，会设置仓库的 `core.sshCommand`，让终端中直接运行 `git push` 也是同样的效果。

已有自己的 `core.sshCommand`、带 `IdentityFile` 的 `~/.ssh/config` 别名，或在 Shell 中设置了 `GIT_SSH_COMMAND` 的仓库不受影响。

## 主机别名

如果你使用 `~/.ssh/config` 中的主机别名（例如 `github-work`），**仓库 ▸ 远程… ▸ SSH 别名** 可以将远程切换为使用某个别名。

## 轮换密钥

密钥的*轮换…* 会生成新密钥并上传到账户，新密钥可用后再移除旧密钥。

## SSH 账户与托管登录

SSH 账户只决定用哪个密钥推送和拉取。登录 GitHub 或 GitLab（用于拉取请求和上传密钥）是另一回事，位于 **设置 ▸ 托管**（参阅 [GitHub](/zh-hans/docs/github/) 和 [GitLab](/zh-hans/docs/gitlab/)）。
