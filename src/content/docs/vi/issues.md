---
title: "Issue"
group: Accounts & hosting
order: 30
summary: "Tạo và duyệt issue trên GitHub và GitLab, và tạo branch từ một issue."
updated: 2026-11-18
---

Khi đã thêm tài khoản GitHub hoặc GitLab, GitLoom hiện các issue của repository trong sidebar.

## Tạo và duyệt

- **Repository ▸ GitHub / GitLab ▸ Issue mới…** tạo một issue.
- Duyệt issue của repository trong nhóm Issue của sidebar. Bạn có thể lọc theo nhãn và milestone.
- Nhấp chuột phải vào một issue để chọn *Tạo branch từ issue*, *Mở trong trình duyệt* hoặc *Sao chép link*.
- Trong bảng lệnh (<kbd>⌘K</kbd>), gõ `#` để tìm pull request và issue.
- **Launchpad** (<kbd>⇧⌘K</kbd>) liệt kê các issue đang chờ bạn trên mọi repository.

## Tạo branch từ một issue

*Tạo branch từ issue* tạo một branch đặt tên theo issue. Tên tuân theo mẫu trong **Cài đặt ▸ Git ▸ Branch từ issue**, mặc định là `{type}/{number}-{slug}`, trong đó `{type}` là `fix` hoặc `feat`. Mẫu trong `.gitloom/team.json` của team được ưu tiên hơn mẫu của bạn.
