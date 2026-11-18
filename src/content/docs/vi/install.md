---
title: "Cài đặt"
group: Getting started
order: 1
summary: "GitLoom cần gì, cách tải về và cách mở lần đầu."
updated: 2026-11-18
---

GitLoom là Git client miễn phí cho máy Mac. Nó chạy chính `git` của bạn, nên config, hook, thông tin đăng nhập và alias của bạn đều được áp dụng.

## Yêu cầu

- macOS 14 Sonoma trở lên, trên máy Mac dùng Apple silicon.
- git 2.40 trở lên. Bản đi kèm Xcode Command Line Tools dùng được, bản từ Homebrew cũng vậy.

Để cài git từ Apple, chạy lệnh sau trong Terminal:

```sh
xcode-select --install
```

Khi khởi động, GitLoom sẽ báo nếu không tìm thấy git đủ mới. Nếu bạn để git ở chỗ không thông thường, hãy chọn nó trong **Cài đặt ▸ Git**.

## Tải về

Tải `GitLoom.dmg` (42 MB) từ [bản phát hành mới nhất](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg), hoặc từ Terminal:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

Mở file ảnh đĩa rồi kéo GitLoom vào thư mục Applications.

## Mở lần đầu

GitLoom chưa được Apple notarize, nên macOS chặn lần mở đầu tiên. Để mở nó:

1. Mở GitLoom một lần. macOS báo rằng không thể mở app.
2. Vào **Cài đặt hệ thống ▸ Quyền riêng tư & bảo mật** và bấm *Vẫn mở* cạnh thông báo về GitLoom.
3. Xác nhận. Từ đó trở đi GitLoom mở bình thường.

Bạn chỉ cần làm việc này một lần. Các phiên bản sau được cập nhật qua trình cập nhật của chính GitLoom (xem [Cập nhật](/vi/docs/updates/)).

## Tuỳ chọn: công cụ dòng lệnh

Chọn **GitLoom ▸ Cài đặt công cụ dòng lệnh…** để thêm lệnh `gitloom`, khi đó `gitloom .` sẽ mở thư mục bạn đang đứng. Xem [Công cụ dòng lệnh gitloom](/vi/docs/the-gitloom-command-line-tool/).
