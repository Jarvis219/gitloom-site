---
title: "Trình soạn file"
group: Tools
order: 20
summary: "Xem và sửa mọi file của repository ngay trong GitLoom, rồi lưu và stage chỉ trong một bước."
updated: 2026-11-18
---

GitLoom có thể hiện và sửa các file trong repository của bạn, nên một chỉnh sửa nhỏ không cần tới app khác.

## Mở một file

- <kbd>⌘P</kbd> (Mở nhanh) mở bất kỳ file nào của repository.
- Nút chuyển Ref/File trong sidebar hiện cây thư mục. Tại đó bạn cũng có thể tạo *File mới…* hoặc *Thư mục mới…*, *Đổi tên…* hoặc *Chuyển vào Thùng rác*, và *Hiện file bị ignore*.

File được mở ở chế độ xem. Nhấn <kbd>⌘E</kbd>, hoặc bấm *Sửa file*, để sửa. Esc quay lại graph.

## Phím khi sửa

| Phím | Thao tác |
|---|---|
| <kbd>⌘S</kbd> | Lưu |
| <kbd>⌥⌘S</kbd> | Lưu và stage |
| <kbd>⌘L</kbd> | Đi tới dòng |
| <kbd>⌥⌘F</kbd> | Tìm và thay thế |
| <kbd>⌘/</kbd> | Comment hoặc bỏ comment các dòng đã chọn |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> | Thụt lề / bỏ thụt lề các dòng đã chọn |

Tuỳ chọn của trình soạn gồm *Xuống dòng*, *Hiện dấu cách và tab*, *Tự đóng ngoặc và dấu nháy* và *Gutter so sánh với HEAD*. Font code và cỡ chữ được đặt trong **Cài đặt ▸ Giao diện**.

## Khi file thay đổi trên ổ đĩa

Nếu một app khác thay đổi file trong lúc bạn có chỉnh sửa chưa lưu, GitLoom sẽ báo và cho chọn *Giữ bản của tôi*, *Tải lại* hoặc *So sánh*. Với file có conflict marker, GitLoom nhắc rằng lưu file không có nghĩa là đánh dấu đã giải quyết; hãy dùng [trình sửa xung đột](/vi/docs/resolving-conflicts/) cho việc đó.

GitLoom cũng chờ, chưa cài bản cập nhật, khi một file còn thay đổi chưa lưu.

## Trình soạn thảo khác

*Mở trong trình soạn thảo ngoài* mở file trong app được chọn ở **Cài đặt ▸ Tích hợp ▸ Mở file bằng**. Một *Lệnh tuỳ chỉnh* ở đó sẽ được ưu tiên; `$FILE`, `$LINE` và `$REPO` được điền sẵn, ví dụ:

```sh
code -g $FILE:$LINE
```
