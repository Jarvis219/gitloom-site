---
title: "Worktree"
group: Tools
order: 21
summary: "Checkout một branch thứ hai trong thư mục riêng, để làm việc trên nó mà không phải stash những gì bạn đang làm."
updated: 2026-11-18
---

Worktree là một thư mục làm việc thứ hai cho cùng một repository. Bạn có thể làm việc trên branch khác ở đó mà không phải stash những gì đang làm dở trong thư mục đầu tiên.

## Tạo worktree

Nhấp chuột phải vào một branch trong sidebar ▸ *Mở trong worktree mới…*. Chọn thư mục, và đánh dấu *Tạo branch mới từ…* nếu bạn muốn một branch mới. *Tạo & mở* tạo worktree và mở nó trong tab mới.

## Nhóm WORKTREE

Khi repository có nhiều hơn một worktree, sidebar hiện nhóm WORKTREE. Mỗi dòng hiện branch của worktree; worktree trong tab hiện tại được đánh dấu *tab này*. Worktree có thư mục không còn tồn tại được đánh dấu *thiếu*, và *Prune* sẽ quên chúng.

Nhấp chuột phải vào một worktree để chọn:

- *Mở trong tab mới* hoặc *Mở*;
- *Hiện trong Finder*;
- *Khoá* hoặc *Mở khoá*;
- *Gỡ worktree…*.

## Branch ở worktree khác

Git chỉ cho một branch được checkout ở một worktree tại một thời điểm. Nếu bạn checkout một branch đang mở ở nơi khác, GitLoom đề nghị *Mở worktree đó*, hoặc checkout cùng commit đó trong worktree này mà không kèm branch.

## Gỡ worktree

*Gỡ worktree…* xoá thư mục của worktree; branch vẫn còn. Bạn không thể gỡ worktree đang mở trong tab hiện tại.

> **Caution** Nếu worktree có thay đổi chưa commit, GitLoom sẽ báo, và chúng bị xoá cùng thư mục khi bạn chọn *Vẫn gỡ*.
