---
title: "Tìm kiếm"
group: History
order: 15
summary: "Tìm commit theo message, tác giả, SHA, đường dẫn hoặc nội dung, và nhảy tới bất cứ đâu bằng bảng lệnh và Mở nhanh."
updated: 2026-11-18
---

GitLoom có ba cách để tìm: Tìm cho commit, bảng lệnh cho mọi thứ, và Mở nhanh cho file.

## Tìm commit

<kbd>⌘F</kbd> tìm trong commit message, tác giả, SHA, đường dẫn file hoặc nội dung thay đổi (`-S`, các commit thêm hoặc xoá một đoạn văn bản). Nó có thể lọc graph chỉ còn các kết quả khớp. <kbd>⌘G</kbd> và <kbd>⇧⌘G</kbd> chuyển tới kết quả tiếp theo và trước đó.

- Không phân biệt dấu: “nguoi” tìm được “người”.
- `re:` nhận một biểu thức chính quy cho toàn bộ message, ví dụ `re:^fix(ed)?:`.

## Bảng lệnh

<kbd>⌘K</kbd> chạy mọi lệnh và nhảy tới branch, file, commit, tác giả và pull request. Bắt đầu bằng một ký tự để chỉ tìm một loại:

| Tiền tố | Tìm |
|---|---|
| `>` | lệnh |
| `/` | file |
| `:` | commit |
| `@` | tác giả |
| `#` | pull request và issue |

## Mở nhanh

<kbd>⌘P</kbd> mở bất kỳ file nào của repository. Khi file đã mở, <kbd>⌘E</kbd> cho phép bạn sửa nó (xem [Trình soạn file](/vi/docs/file-editor/)).
