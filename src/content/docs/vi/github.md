---
title: "GitHub"
group: Accounts & hosting
order: 27
summary: "Đăng nhập GitHub để làm việc với pull request, issue, Actions và các tổ chức của bạn ngay trong GitLoom."
updated: 2026-11-18
---

Đăng nhập GitHub để dùng pull request, issue, Launchpad và Actions trong GitLoom.

## Đăng nhập

Mở **Cài đặt ▸ Hosting** và bấm *Đăng nhập bằng GitHub…*. *Lấy mã* cho bạn một mã; *Sao chép mã & mở GitHub* sao chép mã đó và mở trang để bạn nhập.

Bạn cũng có thể dùng *Thêm token…* và dán một personal access token, loại fine-grained hoặc classic. GitLoom kiểm tra các scope mà nó thấy được.

Token chỉ được lưu trong Chuỗi khoá của macOS.

## Bạn làm được gì

- Tạo, review và merge [pull request](/vi/docs/pull-requests-and-reviews/).
- Tạo và duyệt [issue](/vi/docs/issues/).
- Xem các lần chạy GitHub [Actions](/vi/docs/actions/) cạnh commit của chúng.
- **Launchpad** (<kbd>⇧⌘K</kbd>) liệt kê pull request và issue đang chờ bạn trên mọi repository.
- **Cửa sổ ▸ Tổ chức** hiện các tổ chức của bạn, cùng team và thành viên của chúng.
- **Repository ▸ GitHub / GitLab** có *Publish repository…*, tạo repository trên GitHub, thêm nó làm `origin` và push branch hiện tại, cùng *Fork trên GitHub*.
- Clone từ tài khoản và tổ chức của bạn: <kbd>⇧⌘C</kbd> ▸ *Chọn từ tài khoản của bạn…*.

## Email commit của bạn

Trước khi commit, GitLoom cảnh báo khi email không phải một trong các email của tài khoản GitHub, vì khi đó GitHub sẽ không liên kết commit với bạn.

## Khoá SSH

Việc đăng nhập là dành cho API. Khoá SSH nào push cho tài khoản nào được đặt trong [Tài khoản SSH](/vi/docs/ssh-accounts/). Mục *Khoá SSH…* của một tài khoản trong **Cài đặt ▸ Hosting** hiện các khoá trên GitHub và có thể tải khoá của bạn lên.
