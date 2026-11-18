---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "Kết nối gitlab.com hoặc máy chủ GitLab của riêng bạn bằng token để làm việc với merge request và issue."
updated: 2026-11-18
---

GitLoom làm việc với gitlab.com và với máy chủ GitLab của riêng bạn, thông qua một personal access token.

## Thêm token

1. Mở **Cài đặt ▸ Hosting** và bấm *Thêm token GitLab…*.
2. Nhập host.
3. Dán một personal access token có các scope `api`, `read_user` và `write_repository`. *Tạo token…* mở đúng trang trên GitLab của bạn.

Token được lưu trong Chuỗi khoá của macOS. Các lần push qua HTTPS sẽ dùng nó.

## Bạn làm được gì

Sidebar hiện MERGE REQUEST và issue. Bạn có thể:

- tạo merge request, bình luận, duyệt và merge nó (có squash);
- xem merge request của bạn trong Launchpad (<kbd>⇧⌘K</kbd>);
- tạo và duyệt issue.

## Chưa được hỗ trợ

Với GitLab, GitLoom chưa hỗ trợ:

- CI pipeline (nhóm Actions bị ẩn);
- bình luận trên một dòng code;
- tổ chức;
- đăng nhập không cần token.
