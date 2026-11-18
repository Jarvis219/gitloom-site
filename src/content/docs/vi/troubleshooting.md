---
title: "Khắc phục sự cố"
group: Help
order: 38
summary: "Nên thử gì khi có sự cố: hoàn tác, tìm commit bị mất, xem git đã chạy gì, và sửa các lỗi thiết lập thường gặp."
updated: 2026-11-18
---

Hầu hết sự cố trong GitLoom đều có thể hoàn tác hoặc giải thích được. Hãy bắt đầu từ đây.

## Có gì đó không ổn trong repository

- **Hoàn tác trước tiên**: <kbd>⌘Z</kbd> hoặc **Sửa ▸ Lịch sử thao tác…**. Hầu hết thao tác đều hoàn tác được (xem [Hoàn tác và làm lại](/vi/docs/undo-and-redo/)).
- **Commit có vẻ đã biến mất**: **Repository ▸ Reflog…** và **Tìm commit bị mất…** sẽ tìm ra chúng (xem [Khôi phục từ reflog](/vi/docs/reflog-recovery/)).
- **Kẹt giữa rebase hoặc merge**: repository bị bỏ dở giữa chừng sẽ hiện một banner với *Tiếp tục* và *Huỷ bỏ*, kể cả sau khi khởi động lại GitLoom.

## Xem GitLoom đã làm gì

**Cửa sổ ▸ Git Log** (<kbd>⌥⇧⌘L</kbd>) liệt kê mọi lệnh git GitLoom đã chạy: repository, lệnh, thời gian chạy và mã thoát. Chỉ dòng lệnh được giữ lại, không bao giờ giữ đầu ra, đầu vào hay thông tin đăng nhập.

Một đường mảnh chuyển động dưới thanh công cụ nghĩa là git đang liên lạc với một remote; rê chuột lên để xem là gì. Thông báo của một thao tác chậm có nút *Huỷ*.

## Lỗi thường gặp

- **GitLoom không tìm thấy git, hoặc báo git quá cũ.** Cài git 2.40 trở lên (xem [Cài đặt](/vi/docs/install/)), hoặc chọn git khác trong **Cài đặt ▸ Git ▸ File thực thi git**.
- **Hook không tìm thấy node, python hay linter.** Thêm các thư mục nó cần vào *PATH bổ sung* trong **Cài đặt ▸ Git ▸ Hook**. Thiết lập này áp dụng cho các repository được mở sau đó.
- **Hook bị treo.** Một lần commit có hook vẫn chạy sau một phút sẽ báo và cho chọn *Dừng*. *Dừng hook sau* trong **Cài đặt ▸ Git ▸ Hook** tự động dừng nó (mặc định sau 10 phút).
- **Dùng sai khoá SSH.** Thiết lập [Tài khoản SSH](/vi/docs/ssh-accounts/).

## Log và cache

Trong **Cài đặt ▸ Nâng cao**:

- *Ghi debug log* ghi lại các lệnh git GitLoom chạy, kèm trạng thái thoát và thời gian, vào một file trong thư mục log. Mật khẩu và token trong URL được ẩn đi. *Hiện thư mục log* mở thư mục đó.
- *Xoá cache…* xoá các pull request và issue được giữ để dùng offline và các phiên bản file đã lưu tạm. Chúng sẽ được fetch lại khi cần.
- Nếu không đọc được file cài đặt, GitLoom chuyển nó sang chỗ khác, khởi động với cài đặt mặc định và báo điều đó ở đây.

Nếu những cách trên không giúp được, hãy [báo lỗi](/vi/docs/report-an-issue/).
