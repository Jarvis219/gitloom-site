---
title: "Khôi phục từ reflog"
group: History
order: 17
summary: "Lấy lại các commit tưởng đã mất sau reset, rebase hay xoá branch, bằng reflog và Tìm commit bị mất."
updated: 2026-11-18
---

Trong git, commit rất khó mất. Nếu một commit có vẻ đã biến mất, trước tiên hãy thử <kbd>⌘Z</kbd> hoặc **Sửa ▸ Lịch sử thao tác…** (xem [Hoàn tác và làm lại](/vi/docs/undo-and-redo/)). Nếu vẫn không được, hãy tìm trong reflog.

## Reflog

Chọn **Repository ▸ Reflog…**. Nó liệt kê mọi vị trí HEAD từng trỏ tới, mới nhất trước, nên các commit bạn mất do reset hay rebase đều có ở đó. Chọn một branch ở trên cùng để xem reflog của branch đó, và gõ vào ô lọc để tìm theo SHA, thao tác hoặc message.

Bạn cũng có thể nhấp chuột phải vào một branch ▸ *Xem reflog* để mở reflog của branch đó.

## Commit bị mất

**Repository ▸ Tìm commit bị mất…** (hoặc tab *Commit bị mất*) tìm các commit mà không branch, tag hay reflog nào trỏ tới, chẳng hạn các commit của một branch đã bị xoá.

## Lấy lại một commit

Chọn một commit ở một trong hai danh sách, rồi:

- *Tạo branch tại đây…* đặt một branch mới lên nó;
- *Cherry-pick* sao chép nó lên branch hiện tại của bạn;
- *Reset branch hiện tại về đây…* chuyển branch hiện tại của bạn tới nó.
