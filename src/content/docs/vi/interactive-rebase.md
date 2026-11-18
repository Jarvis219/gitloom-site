---
title: "Interactive rebase"
group: History
order: 16
summary: "Sắp xếp lại, reword, squash, edit hoặc drop commit trong một kế hoạch trực quan, không có gì xảy ra cho tới khi bạn bắt đầu."
updated: 2026-11-18
---

Interactive rebase viết lại một chuỗi commit. GitLoom hiện kế hoạch dưới dạng một danh sách để bạn chỉnh sửa; repository không bị động tới cho tới khi bạn bắt đầu.

## Mở trình chỉnh sửa

- Nhấp chuột phải vào một commit ▸ *Interactive rebase từ đây…*.
- Hoặc thả một branch lên branch khác và chọn *Interactive rebase*.
- Khi đang chọn nhiều commit, *Interactive rebase các commit đã chọn…* mở trình chỉnh sửa với các commit đó được chọn sẵn.

Nó cũng chạy được từ commit đầu tiên (`--root`). Trình chỉnh sửa thế chỗ graph.

## Sửa kế hoạch

Mỗi dòng là một commit, cũ nhất ở trên cùng. Đặt thao tác cho nó từ menu hoặc bằng phím:

| Phím | Thao tác |
|---|---|
| <kbd>P</kbd> | pick |
| <kbd>R</kbd> | reword |
| <kbd>E</kbd> | edit |
| <kbd>S</kbd> | squash |
| <kbd>F</kbd> | fixup |
| <kbd>C</kbd> | fixup -C |
| <kbd>D</kbd> | drop |

Kéo các dòng, hoặc dùng <kbd>⌥↑</kbd> và <kbd>⌥↓</kbd>, để đổi thứ tự. <kbd>⌘Z</kbd> hoàn tác một thay đổi trên kế hoạch.

- Message cho reword có thể viết trước, để rebase chạy mà không phải dừng lại.
- Menu của một dòng có *Thêm lệnh phía sau…* để chạy một lệnh tại điểm đó (một dòng `exec`, chẳng hạn một bài test dừng rebase nếu thất bại).
- Các branch xếp chồng trên những commit được rebase sẽ di chuyển theo (`--update-refs`), trừ khi bạn bỏ đánh dấu.
- Các merge trong khoảng commit mặc định bị làm phẳng. Đánh dấu *Giữ merge* để giữ lại (`--rebase-merges`). Khi đó kế hoạch cũng cho thấy mỗi nhánh của merge bắt đầu từ đâu và merge được tạo lại ở đâu, và commit chỉ có thể di chuyển trong nhánh của chính nó.

## Bắt đầu hoặc huỷ

<kbd>⌘↩</kbd> bắt đầu và Esc huỷ. Sau đó, toàn bộ lần rebase là một bước hoàn tác.

## Sửa nhanh hơn

Không cần mở trình chỉnh sửa:

- chọn nhiều commit liền nhau ▸ *Squash N commit* (chạy ngay, gộp các message, cũ nhất trước; *…và sửa message* để tự viết) hoặc *Drop N commit…*;
- nhấp chuột phải vào một commit ▸ *Sửa message…*, *Drop commit…*, *Lên trên/Xuống dưới*.
