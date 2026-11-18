---
title: "Lịch sử file"
group: History
order: 13
summary: "Xem mọi commit đã thay đổi một file, theo được cả khi đổi tên, và xem hoặc khôi phục bất kỳ phiên bản cũ nào."
updated: 2026-11-18
---

Lịch sử file hiện mọi commit đã thay đổi một file, lần theo nó qua các lần đổi tên.

## Mở Lịch sử file

Chọn một file rồi nhấn <kbd>⌥⌘Y</kbd>, hoặc chọn **Repository ▸ Lịch sử file…**. Nếu chưa chọn file nào, bảng lệnh sẽ mở ra để bạn chọn. Từ terminal, `gitloom log <file>` cũng mở nó (xem [Công cụ dòng lệnh gitloom](/vi/docs/the-gitloom-command-line-tool/)).

## Cách đọc

Mỗi mục là một commit đã thay đổi file, kèm tác giả và ngày. Một lần đổi tên cho biết file trước đó tên là gì. Có thể tắt *Theo dõi đổi tên*. Chọn hai phiên bản để xem diff giữa chúng.

<kbd>⌘[</kbd> và <kbd>⌘]</kbd> lùi lại và tiến tới. Esc quay lại graph.

## Phiên bản cũ

Nhấp chuột phải vào một mục để chọn:

- *Xem phiên bản này*, hoặc *Mở phiên bản này trong trình soạn thảo ngoài*;
- *Hiện trong graph*;
- *Blame tại commit này* (xem [Blame](/vi/docs/blame/));
- *Khôi phục file về phiên bản này…*. Nếu file có thay đổi chưa commit, chúng sẽ bị thay thế; <kbd>⌘Z</kbd> đưa chúng trở lại.

## Shallow clone

Trong một shallow clone, lịch sử dừng ở nơi bản clone dừng, và danh sách sẽ ghi rõ điều đó.
