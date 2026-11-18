---
title: "Commit"
group: Everyday work
order: 7
summary: "Viết message, amend, thêm đồng tác giả, theo dõi hook chạy, và xử lý những file git không hiện ra."
updated: 2026-11-18
---

Chọn dòng *Thay đổi chưa commit*, stage những gì bạn muốn (xem [Stage từng dòng](/vi/docs/staging-single-lines/)), viết message rồi nhấn <kbd>⌘↩</kbd>.

## Form commit

- *Amend* sửa commit cuối cùng thay vì tạo commit mới. Khi ô này được đánh dấu, các file mà commit đó đã thay đổi cũng được liệt kê.
- *Đồng tác giả* gợi ý những người trong lịch sử gần đây, kể cả các đồng tác giả bạn đã thêm trước đó.
- Trong lúc commit chạy, những gì hook của bạn in ra (linter `pre-commit`, test) hiện dưới message. Nếu một hook vẫn chạy sau một phút, GitLoom sẽ báo và cho chọn *Dừng*.
- Một dòng cho biết bạn đang commit với tư cách ai. Nó cảnh báo khi email không khớp với [profile](/vi/docs/profiles/) của repository, hoặc không phải một trong các email của tài khoản GitHub của bạn (khi đó GitHub sẽ không liên kết commit với bạn).

Khi đã bật AI, <kbd>⌥⌘G</kbd> viết message giúp bạn (xem [Chọn provider](/vi/docs/choosing-a-provider/)).

## Cài đặt message

Trong **Cài đặt ▸ Git ▸ Commit message**, bạn có thể đặt một mẫu để form bắt đầu với nó, và độ dài dòng tóm tắt mà tại đó bộ đếm chuyển sang vàng và đỏ (mặc định 50 và 72 ký tự). Nó chỉ cảnh báo; không có gì bị cắt. `commit.template` riêng của repository được ưu tiên hơn mẫu này.

## Những file git không hiện ra

- *Ignore* một file đã được track, GitLoom sẽ đề nghị *Ngừng theo dõi* (`git rm --cached`): file rời khỏi repository ở commit tiếp theo và vẫn nằm trên ổ đĩa.
- Nhấp chuột phải vào một file đã thay đổi ▸ *Ẩn thay đổi cục bộ* cho file được track mà bạn cố ý sửa, chẳng hạn file cấu hình cục bộ. Một dòng phía trên danh sách file cho biết có bao nhiêu file đang bị ẩn, và *Xem…* hiện lại chúng.
- Trên ổ đĩa của Mac, đổi tên `readme.md` thành `README.md` trong Finder thì git không thấy. GitLoom nhận ra và đề nghị *Ghi nhận đổi tên*.

## Hoàn tác một commit

<kbd>⌘Z</kbd> hoàn tác lần commit hoặc amend cuối cùng. Xem [Hoàn tác và làm lại](/vi/docs/undo-and-redo/).
