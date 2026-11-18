---
title: "Profile"
group: Getting started
order: 4
summary: "Giữ tên, email, khoá ký, tab và danh sách gần đây riêng cho từng loại công việc."
updated: 2026-11-18
---

Một profile chứa danh tính bạn dùng để commit: tên, email và khoá ký (tuỳ chọn). Ví dụ, dùng một profile cho công việc và một cho dự án cá nhân. Thiết lập chúng trong **Cài đặt ▸ Profile**.

## Profile chứa gì

Mỗi profile có:

- tên profile, cùng tên commit (`user.name`) và email (`user.email`);
- phương thức ký: không ký, SSH, GPG hoặc X.509, và có ký commit theo mặc định hay không;
- một tài khoản tuỳ chọn để push, khi các quy tắc [Tài khoản SSH](/vi/docs/ssh-accounts/) không quyết định được;
- các tab đang mở và repository gần đây của riêng nó.

GitLoom ghi tên, email và khoá ký vào git config của từng repository, để terminal cũng khớp với GitLoom.

## Chuyển profile

Chuyển profile từ nút ở góc trên bên phải cửa sổ. Một profile là mặc định: GitLoom khởi động với nó, và quay về nó khi profile đang dùng bị xoá. Dùng *Đặt làm mặc định* để đổi profile mặc định.

## Sai danh tính

Phía trên nút commit, GitLoom cho biết bạn đang commit với tư cách ai. Nếu email đó không phải email của profile gắn với repository, dòng này sẽ có cảnh báo; chọn đúng profile từ nút trên thanh công cụ để sửa.

## Xoá một profile

Chọn nó rồi bấm −. Các tab đang mở và repository gần đây của nó sẽ bị quên. Git config đã ghi vào các repository được giữ nguyên. Luôn có ít nhất một profile.
