---
title: "Hoàn tác và làm lại"
group: Everyday work
order: 11
summary: "Hoàn tác gần như mọi thao tác Git bằng ⌘Z, làm lại bằng ⇧⌘Z, hoặc quay về bất kỳ thời điểm nào trong Lịch sử thao tác."
updated: 2026-11-18
---

<kbd>⌘Z</kbd> hoàn tác thao tác Git cuối cùng và <kbd>⇧⌘Z</kbd> làm lại nó. Khi có gì đó không ổn, hãy thử hoàn tác trước.

## Những gì hoàn tác được

Commit, amend, checkout, thay đổi branch và tag, huỷ thay đổi, reset, stash, pull, merge, rebase, cherry-pick và nhiều thao tác khác.

Merge, rebase hoặc reset chỉ được làm lại khi working tree sạch.

## Lịch sử thao tác

**Sửa ▸ Lịch sử thao tác…** liệt kê mọi việc GitLoom đã làm. Bạn có thể hoàn tác về bất kỳ thời điểm nào trong đó.

## Trước khi mất công việc

Trước một lần hoàn tác sẽ làm mất công việc, chẳng hạn sau khi bạn đã có thay đổi mới, GitLoom cho biết điều gì sẽ xảy ra và hỏi bạn.

## Văn bản và trình chỉnh rebase

Trong ô nhập văn bản, <kbd>⌘Z</kbd> hoàn tác việc gõ như thường lệ. Trong trình chỉnh [interactive rebase](/vi/docs/interactive-rebase/), nó hoàn tác các thay đổi trên kế hoạch.

Nếu một commit vẫn có vẻ biến mất sau khi hoàn tác, xem [Khôi phục từ reflog](/vi/docs/reflog-recovery/).
