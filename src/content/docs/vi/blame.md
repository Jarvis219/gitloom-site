---
title: "Blame"
group: History
order: 14
summary: "Xem ai đã sửa từng dòng của một file lần cuối, và lần theo một dòng ngược qua các commit cũ hơn."
updated: 2026-11-18
---

Blame cho biết, với mỗi dòng của một file, commit nào đã sửa nó lần cuối.

## Mở Blame

Chọn một file rồi nhấn <kbd>⌥⌘B</kbd>, hoặc chọn **Repository ▸ Blame…**. Từ terminal, `gitloom blame <file>:<line>` mở nó ngay tại dòng đó (xem [Công cụ dòng lệnh gitloom](/vi/docs/the-gitloom-command-line-tool/)). Từ [Lịch sử file](/vi/docs/file-history/), *Blame tại commit này* hiện file như ở thời điểm đó.

## Lần theo một dòng

Bấm vào một dòng để xem commit của nó, rồi:

- *Hiện commit* chọn commit đó trên graph;
- *Blame parent* hiện blame ngay trước commit đó, để xem ai đã viết dòng ấy trước đó.

## Tuỳ chọn

Thanh phía trên file có:

- *Bỏ qua khoảng trắng*;
- *Heatmap*, tô màu các dòng theo độ cũ;
- trong *Thêm*: *Phát hiện dòng di chuyển trong file (-M)* và *Phát hiện dòng sao chép từ file khác (-C)*;
- *Bỏ qua rev*, khi repository có file `.git-blame-ignore-revs` (hoặc đã đặt `blame.ignoreRevsFile`). Nó bỏ qua các commit được liệt kê ở đó, chẳng hạn các thay đổi định dạng.

Với file rất dài, blame có thể mất một lúc. GitLoom báo trước cho bạn, các dòng được điền dần khi tìm thấy, và bạn có thể rời đi bất cứ lúc nào.
