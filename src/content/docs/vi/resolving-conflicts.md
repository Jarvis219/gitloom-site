---
title: "Giải quyết xung đột"
group: Everyday work
order: 10
summary: "Dùng trình sửa merge ba chiều để chọn một bên cho từng xung đột hoặc từng dòng, sửa kết quả rồi tiếp tục."
updated: 2026-11-18
---

Khi merge, rebase, cherry-pick hay pull gặp xung đột, thao tác sẽ dừng và một banner giải thích chuyện gì đang xảy ra. Các file bị xung đột được liệt kê trong panel chi tiết.

![Trình sửa xung đột ba chiều hiện bên của bạn, bên kia và kết quả](/shots/conflict-light.png)

## Trình sửa merge

Mở một file bị xung đột để vào trình sửa merge ba chiều: bên của bạn, bên kia và kết quả.

- Chọn một bên cho từng xung đột, hoặc từng dòng.
- Sửa trực tiếp phần kết quả.
- <kbd>⌥⌘↑</kbd> và <kbd>⌥⌘↓</kbd> di chuyển giữa các xung đột.
- Đánh dấu *Cả file* để xem mỗi bên dưới dạng toàn bộ file với các xung đột tại chỗ. Các cột thẳng hàng và cuộn cùng nhau.

Khi file đã đúng, bấm *Lưu & đánh dấu đã giải quyết* (<kbd>⌘S</kbd>).

## Trường hợp đặc biệt

- Xung đột do đổi tên (đổi tên ở cả hai bên, hoặc đổi tên ở một bên và xoá ở bên kia) sẽ được ghi rõ.
- File nhị phân có thể được xem trước ở cả hai bên trước khi bạn chọn.
- Một banner cảnh báo khi hai bên chỉ khác nhau ở ký tự xuống dòng (CRLF / LF).

## Merge tool của riêng bạn

Bạn cũng có thể mở file trong merge tool bên ngoài. GitLoom dùng `merge.tool` của git, hoặc công cụ bạn chọn trong **Cài đặt ▸ Tích hợp ▸ Merge tool**.

## Hoàn tất hoặc dừng

Khi mọi file đã được giải quyết, bấm *Tiếp tục* trên banner. *Bỏ qua* bỏ qua commit hiện tại của rebase hoặc cherry-pick; *Huỷ bỏ* trả mọi thứ về như cũ. Repository bị bỏ dở giữa chừng một lần rebase hay merge sẽ hiện lại banner sau khi khởi động lại GitLoom.
