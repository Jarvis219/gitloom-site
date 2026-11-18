---
title: "GitHub"
group: Accounts & hosting
order: 27
summary: "登录 GitHub，在 GitLoom 中处理拉取请求、议题、Actions 和你的组织。"
updated: 2026-11-18
---

登录 GitHub 后，即可在 GitLoom 中使用拉取请求、议题、Launchpad 和 Actions。

## 登录

打开 **设置 ▸ 托管**，点按*使用 GitHub 登录…*。*获取验证码* 会给你一个验证码；*拷贝代码并打开 GitHub* 会拷贝它并打开输入验证码的页面。

你也可以使用*添加令牌…*，粘贴一个个人访问令牌（细粒度或经典令牌均可）。GitLoom 会检查它能看到的权限范围。

令牌只保存在 macOS 钥匙串中。

## 你可以做什么

- 创建、审查和合并[拉取请求](/zh-hans/docs/pull-requests-and-reviews/)。
- 创建和浏览[议题](/zh-hans/docs/issues/)。
- 在提交旁查看 GitHub [Actions](/zh-hans/docs/actions/) 运行。
- **Launchpad**（<kbd>⇧⌘K</kbd>）列出跨仓库等待你处理的拉取请求和议题。
- **窗口 ▸ 组织** 显示你的组织及其团队和成员。
- **仓库 ▸ GitHub / GitLab** 中有*发布仓库…*（在 GitHub 上创建仓库，将其添加为 `origin` 并推送当前分支）和*在 GitHub 上复刻*。
- 从你的账户和组织克隆：<kbd>⇧⌘C</kbd> ▸ *从你的账户中选择…*。

## 你的提交邮箱

提交前，如果邮箱不是你 GitHub 账户的邮箱之一，GitLoom 会发出警告，因为 GitHub 将无法把该提交关联到你。

## SSH 密钥

登录是为了使用 API。哪个 SSH 密钥用于哪个登录名的推送，在 [SSH 账户](/zh-hans/docs/ssh-accounts/)中设置。**设置 ▸ 托管** 中账户的*SSH 密钥…* 会显示 GitHub 上的密钥，并可上传你的密钥。
