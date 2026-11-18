---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "用令牌连接 gitlab.com 或你自己的 GitLab 服务器，处理合并请求和议题。"
updated: 2026-11-18
---

GitLoom 使用个人访问令牌，可配合 gitlab.com 和你自己的 GitLab 服务器使用。

## 添加令牌

1. 打开 **设置 ▸ 托管**，点按*添加 GitLab 令牌…*。
2. 输入主机。
3. 粘贴一个具有 `api`、`read_user` 和 `write_repository` 权限范围的个人访问令牌。*创建令牌…* 会在你的 GitLab 上打开相应页面。

令牌保存在 macOS 钥匙串中。HTTPS 推送会使用它。

## 你可以做什么

侧边栏显示“合并请求”和议题。你可以：

- 创建合并请求、发表评论、批准并合并（可压缩）；
- 在 Launchpad（<kbd>⇧⌘K</kbd>）中查看你的合并请求；
- 创建和浏览议题。

## 尚不支持

对于 GitLab，GitLoom 尚不支持：

- CI 流水线（Actions 组会隐藏）；
- 针对某一行代码的评论；
- 组织；
- 不使用令牌登录。
