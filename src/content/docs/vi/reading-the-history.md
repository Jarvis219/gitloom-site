---
title: "Đọc lịch sử"
group: History
order: 12
summary: "Làm quen với graph commit, chọn các cột của nó và xem bên trong bất kỳ commit nào."
updated: 2026-11-18
---

Graph ở giữa cửa sổ hiện mọi commit cùng các branch của chúng, mỗi branch một làn màu riêng.

![Graph commit với các làn branch, sidebar và chi tiết của commit đang chọn](/shots/graph-light.png)

## Di chuyển

- <kbd>↑</kbd> <kbd>↓</kbd> hoặc <kbd>J</kbd> <kbd>K</kbd> chuyển tới commit trước hoặc sau.
- <kbd>⇧</kbd>-click chọn một khoảng và <kbd>⌘</kbd>-click chọn nhiều commit, chẳng hạn để so sánh, squash hoặc cherry-pick chúng.
- <kbd>⌘C</kbd> sao chép SHA của commit đang chọn.

Chọn một commit để xem file và diff của nó trong panel chi tiết.

## Cột

Nhấp chuột phải vào tiêu đề cột của graph để hiện thêm cột: tác giả, ngày, SHA, CI và *Thay đổi* (số dòng thêm và xoá). Lựa chọn đó áp dụng cho repository hiện tại. **Xem ▸ Cột của graph** và **Cài đặt ▸ Bố cục ▸ Cột của graph** thay đổi chúng cho mọi repository.

## Giao diện

Trong **Cài đặt ▸ Giao diện**, bạn có thể chọn:

- mật độ dòng (cũng có trong **Xem ▸ Mật độ**);
- ngày tương đối cho tuần vừa qua hoặc luôn dùng ngày tuyệt đối, định dạng ngày tuỳ chỉnh, và ngày commit hay ngày tác giả;
- có hiện stash trên graph hay không;
- màu làn: theo theme, thân thiện với người mù màu hoặc đơn sắc;
- avatar: chim, chữ viết tắt có màu, Gravatar, GitHub hoặc không có.

## Tìm một commit

<kbd>⌘F</kbd> tìm trong lịch sử và có thể lọc graph chỉ còn các kết quả khớp. Xem [Tìm kiếm](/vi/docs/search/).
