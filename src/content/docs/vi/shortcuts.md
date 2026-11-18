---
title: "Phím tắt"
group: Personalise
order: 36
summary: "Mọi phím tắt trong GitLoom, và cách đổi các phím tắt trên thanh menu."
updated: 2026-11-18
---

35 phím tắt có đánh dấu ✎, tức mọi phím tắt trên thanh menu, có thể đổi trong **Cài đặt ▸ Bàn phím**. Các phím còn lại (phím hệ thống như <kbd>⌘W</kbd> và <kbd>⌘Z</kbd>, và các phím chỉ hoạt động trong một sheet hoặc trình soạn) là cố định. Menu luôn hiện phím hiện tại, và mọi thứ ở đây cũng có trong bảng lệnh (<kbd>⌘K</kbd>).

## Ở mọi nơi

| Phím | Thao tác |
|---|---|
| <kbd>⌘K</kbd> ✎ | Bảng lệnh: `>` lệnh, `/` file, `:` commit, `@` tác giả, `#` pull request và issue |
| <kbd>⌘P</kbd> ✎ | Mở nhanh một file của repository |
| <kbd>⌘F</kbd> / <kbd>⌘G</kbd> / <kbd>⇧⌘G</kbd> ✎ | Tìm commit / kết quả tiếp theo / kết quả trước |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Hoàn tác / Làm lại thao tác Git cuối cùng (trong ô nhập văn bản: hoàn tác việc gõ) |
| <kbd>⌘T</kbd> ✎ | Tab mới |
| <kbd>⌘W</kbd> | Đóng tab |
| <kbd>⌃⇥</kbd> / <kbd>⌃⇧⇥</kbd> ✎ | Tab tiếp theo / trước |
| <kbd>⇧⌘C</kbd> ✎ | Clone một repository |
| <kbd>⌘O</kbd> ✎ | Mở một repository (trong tab mới nếu tab này đã có repository) |
| <kbd>⇧⌘R</kbd> ✎ | Hiện repository trong Finder |
| <kbd>⌥⌘T</kbd> ✎ | Mở repository trong app terminal của bạn |
| <kbd>⇧⌘K</kbd> | Launchpad (pull request và issue của các tài khoản GitHub và GitLab) |
| <kbd>⌥⇧⌘L</kbd> ✎ | Git Log (mọi lệnh git GitLoom đã chạy) |
| <kbd>⌘,</kbd> | Cài đặt |
| <kbd>⌘?</kbd> | Trợ giúp GitLoom |

## Repository

| Phím | Thao tác |
|---|---|
| <kbd>⇧⌘L</kbd> ✎ | Fetch mọi remote |
| <kbd>⇧⌘↓</kbd> ✎ | Pull |
| <kbd>⇧⌘↑</kbd> ✎ | Push |
| <kbd>⌘B</kbd> ✎ | Tạo branch tại commit đang chọn |
| <kbd>⇧⌘S</kbd> ✎ | Stash mọi thay đổi |
| <kbd>⌥⌘Y</kbd> ✎ | Lịch sử của file đang chọn |
| <kbd>⌥⌘B</kbd> ✎ | Blame của file đang chọn |
| <kbd>⌘0</kbd> ✎ | Hiện hoặc ẩn sidebar |
| <kbd>⌥⌘0</kbd> ✎ | Hiện hoặc ẩn panel chi tiết |
| <kbd>⌥⌘L</kbd> ✎ | Chuyển panel chi tiết xuống dưới / về lại bên phải |

## Graph, thay đổi và diff

| Phím | Thao tác |
|---|---|
| <kbd>↑</kbd> <kbd>↓</kbd> hoặc <kbd>J</kbd> <kbd>K</kbd> | Commit trước / sau |
| <kbd>⇧</kbd>-click, <kbd>⌘</kbd>-click | Chọn một khoảng / nhiều commit (so sánh, squash, cherry-pick) |
| <kbd>⌘C</kbd> | Sao chép SHA của commit đang chọn |
| <kbd>⌘Y</kbd> | Xem nhanh file đang chọn |
| <kbd>⇧⌘A</kbd> | Stage tất cả |
| <kbd>⌥⇧⌘A</kbd> | Unstage tất cả |
| <kbd>⌘↩</kbd> | Commit (trong ô commit message) |
| <kbd>⌥⌘G</kbd> | Viết commit message bằng AI (khi đã bật AI) |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Thay đổi trước / sau trong file |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | File trước / sau |

## Trình soạn

| Phím | Thao tác |
|---|---|
| <kbd>⌘E</kbd> ✎ | Sửa file đang mở |
| <kbd>⌘S</kbd> ✎ | Lưu |
| <kbd>⌥⌘S</kbd> ✎ | Lưu và stage |
| <kbd>⌘L</kbd> ✎ | Đi tới dòng |
| <kbd>⌥⌘F</kbd> ✎ | Tìm và thay thế |
| <kbd>⌘/</kbd> ✎ | Comment hoặc bỏ comment các dòng đã chọn |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> ✎ | Thụt lề / bỏ thụt lề các dòng đã chọn |
| <kbd>P</kbd> <kbd>R</kbd> <kbd>E</kbd> <kbd>S</kbd> <kbd>F</kbd> <kbd>C</kbd> <kbd>D</kbd> | Interactive rebase: pick, reword, edit, squash, fixup, fixup -C, drop cho các dòng đang chọn |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Interactive rebase: di chuyển các dòng đang chọn (khi bật *Giữ merge*, chỉ trong branch của chính chúng) |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Interactive rebase: hoàn tác / làm lại một thay đổi trên kế hoạch (git không bị động tới cho tới khi bạn bắt đầu) |
| <kbd>⌘↩</kbd> | Interactive rebase: bắt đầu rebase (hoặc lưu phần kế hoạch còn lại) |
| Esc | Interactive rebase: đóng trình chỉnh sửa mà không làm gì |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Xung đột merge: xung đột trước / sau |
| <kbd>⌘S</kbd> | Xung đột merge: lưu và đánh dấu file đã giải quyết |
| <kbd>⌘[</kbd> / <kbd>⌘]</kbd> | Lịch sử file: lùi lại / tiến tới |

## Terminal

| Phím | Thao tác |
|---|---|
| <kbd>⌃`</kbd> ✎ | Hiện hoặc ẩn terminal (ẩn khi terminal đang được focus) |
| <kbd>⌃⇧`</kbd> ✎ | Phiên terminal mới |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> ✎ | Phóng to / thu nhỏ chữ trong terminal |
| <kbd>⇥</kbd> hoặc <kbd>→</kbd> | Chèn gợi ý đang chọn |
| <kbd>↑</kbd> <kbd>↓</kbd> | Chọn gợi ý |
| Esc | Đóng gợi ý; ở dấu nhắc trống, quay lại graph (ẩn terminal cũng vậy) |
| <kbd>⌘</kbd>-click | Mở thứ nằm dưới con trỏ: SHA chọn commit, đường dẫn mở file, URL mở trình duyệt |
