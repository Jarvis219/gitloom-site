---
title: "议题"
group: Accounts & hosting
order: 30
summary: "创建和浏览 GitHub 和 GitLab 议题，并从议题开始一个分支。"
updated: 2026-11-18
---

添加 GitHub 或 GitLab 账户后，GitLoom 会在侧边栏中显示仓库的议题。

## 创建和浏览

- **仓库 ▸ GitHub / GitLab ▸ 新建议题…** 创建一个议题。
- 在侧边栏的“议题”组中浏览仓库的议题。你可以按标签和里程碑筛选。
- 右键点按议题可选择*从议题创建分支*、*在浏览器中打开*或*拷贝链接*。
- 在命令面板（<kbd>⌘K</kbd>）中输入 `#` 可查找拉取请求和议题。
- **Launchpad**（<kbd>⇧⌘K</kbd>）列出跨仓库等待你处理的议题。

## 从议题开始一个分支

*从议题创建分支* 会创建一个以该议题命名的分支。名称遵循 **设置 ▸ Git ▸ 从议题创建分支** 中的模板，默认为 `{type}/{number}-{slug}`，其中 `{type}` 为 `fix` 或 `feat`。团队 `.gitloom/team.json` 中的模板优先于你的模板。
