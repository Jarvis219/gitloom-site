---
title: "Branch"
group: Everyday work
order: 8
summary: "Tạo, checkout và quản lý branch và tag, cùng fetch, pull và push chúng."
updated: 2026-11-18
---

Branch và tag nằm trong sidebar và trên graph. Hầu hết thao tác chỉ cách bạn một cú nhấp chuột phải.

## Tạo và checkout

<kbd>⌘B</kbd> tạo một branch tại commit đang chọn. Nhấp đúp vào một branch để checkout nó. Nhấp chuột phải vào branch, tag và commit cho mọi thao tác khác: đổi tên, xoá, đặt upstream, gắn tag, reset, revert, cherry-pick và hơn thế nữa.

Xoá một branch chưa được merge sẽ hỏi trước và có thể hoàn tác bằng <kbd>⌘Z</kbd>.

## Fetch, pull và push

- <kbd>⇧⌘L</kbd> fetch mọi remote. GitLoom cũng fetch nền, mặc định mỗi 5 phút (đổi trong **Cài đặt ▸ Chung**). Nó không bao giờ fetch nền khi pin dưới 20 %, ở Chế độ nguồn điện thấp hay trên mạng tính phí cao.
- <kbd>⇧⌘↓</kbd> pull. **Repository ▸ Pull với** chọn chiến lược cho riêng một lần pull.
- <kbd>⇧⌘↑</kbd> push. Đánh dấu *Đặt upstream* cho branch mới.

Force push luôn phải được chọn rõ ràng và dùng `--force-with-lease`. **Repository ▸ Push kèm tag** cũng push các annotated tag nằm trên những commit được push.

## Dọn dẹp

**Repository ▸ Xoá các branch đã merge…** xoá các branch local đã được merge vào branch hiện tại. Branch được bảo vệ sẽ được giữ nguyên; đặt mẫu tên của chúng trong **Cài đặt ▸ Git ▸ Branch được bảo vệ** (ví dụ `main master release/*`).

## Stash

<kbd>⇧⌘S</kbd> stash mọi thứ. *Stash thay đổi…* cho phép bạn đặt tên stash và chọn file. Stash nằm trong sidebar và, theo mặc định, trên graph. *Khôi phục stash đã drop…* tìm lại stash bạn lỡ drop.

## Thư mục branch

Các branch local có tên dạng `prefix/…` hiện thành thư mục trong sidebar. Tắt tính năng này trong **Cài đặt ▸ Bố cục**.
