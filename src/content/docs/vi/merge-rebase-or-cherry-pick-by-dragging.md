---
title: "Merge, rebase hoặc cherry-pick bằng cách kéo thả"
group: Everyday work
order: 9
summary: "Kéo branch và commit trên graph để merge, rebase, fast-forward, cherry-pick hoặc push."
updated: 2026-11-18
---

Trên graph, bạn có thể kéo một branch hoặc các commit tới chỗ khác, và GitLoom hiện một menu những gì lần thả đó có thể làm. Không có gì xảy ra cho tới khi bạn chọn.

## Bạn kéo được gì

- **Nhãn branch lên branch khác hoặc lên một commit**: merge, rebase hoặc fast-forward. Menu cũng có thể bắt đầu một [interactive rebase](/vi/docs/interactive-rebase/).
- **Commit lên một branch**: cherry-pick chúng. Chọn nhiều commit trước bằng <kbd>⇧</kbd>-click hoặc <kbd>⌘</kbd>-click.
- **Branch lên một remote** trong sidebar: push nó.
- **Branch lên branch khác**, khi có tài khoản GitHub hoặc GitLab: tạo pull request (xem [Pull request và review](/vi/docs/pull-requests-and-reviews/)).

## Không cần kéo thả

Mỗi thao tác kéo thả đều có lệnh tương ứng trong menu chuột phải. Menu Repository cũng có *Merge vào branch hiện tại* và *Rebase branch hiện tại lên*.

## Khi có xung đột

Xung đột sẽ dừng thao tác và một banner hiện ra. Giải quyết chúng, rồi chọn *Tiếp tục*, *Bỏ qua* hoặc *Huỷ bỏ*. Xem [Giải quyết xung đột](/vi/docs/resolving-conflicts/).

## Đổi ý

Merge, rebase hay cherry-pick đều có thể hoàn tác bằng <kbd>⌘Z</kbd>. Xem [Hoàn tác và làm lại](/vi/docs/undo-and-redo/).
