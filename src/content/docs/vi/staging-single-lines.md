---
title: "Stage từng dòng"
group: Everyday work
order: 6
summary: "Stage cả file, từng hunk hoặc chỉ những dòng bạn chọn, và để dành phần còn lại cho commit sau."
updated: 2026-11-18
---

Bạn không cần commit cả file một lúc. GitLoom cho phép stage cả file, một hunk, hoặc chỉ những dòng bạn chọn.

![Diff chia đôi của một file đã thay đổi, cùng panel staging và form commit](/shots/diff-light.png)

## Stage file và hunk

Chọn dòng *Thay đổi chưa commit* ở đầu graph. Panel chi tiết liệt kê các file chưa stage và đã stage. Stage cả file, hoặc mở diff của nó và dùng *Stage Hunk* cho một khối thay đổi. <kbd>⇧⌘A</kbd> stage mọi thứ và <kbd>⌥⇧⌘A</kbd> unstage mọi thứ.

## Stage từng dòng

1. Mở diff của file.
2. Bấm vào những dòng bạn muốn. Một thanh cho biết đã chọn bao nhiêu dòng.
3. Bấm *Stage các dòng*, hoặc nhấn <kbd>S</kbd>.

Trong diff đã stage, chọn các dòng và bấm *Unstage các dòng* (<kbd>U</kbd>) để bỏ chúng ra. Dấu ✕ trên thanh xoá lựa chọn.

## Huỷ thay đổi từng dòng

Trong diff chưa stage, *Huỷ thay đổi các dòng* (<kbd>⌫</kbd>) bỏ đi các dòng đã chọn. GitLoom hỏi trước, và <kbd>⌘Z</kbd> đưa chúng trở lại (xem [Hoàn tác và làm lại](/vi/docs/undo-and-redo/)).

## Di chuyển trong diff

<kbd>⌥↑</kbd> và <kbd>⌥↓</kbd> chuyển tới thay đổi trước hoặc sau trong file; <kbd>⌥⌘↑</kbd> và <kbd>⌥⌘↓</kbd> chuyển tới file trước hoặc sau.
