---
title: "Cửa sổ"
group: Getting started
order: 3
summary: "Sidebar, graph commit, panel chi tiết, thanh công cụ, tab, banner và thông báo."
updated: 2026-11-18
---

Cửa sổ repository có ba phần chính: sidebar bên trái, graph commit ở giữa và panel chi tiết bên phải hoặc ở dưới.

![Cửa sổ GitLoom: sidebar với các branch, graph commit với các làn branch nhiều màu, và chi tiết của commit đang chọn](/shots/graph-light.png)

## Sidebar

Sidebar liệt kê branch local và remote, tag, stash, submodule và worktree. Nút chuyển Ref/File hiện cây thư mục của repository thay vào đó. Nhấp chuột phải vào một branch hoặc tag ▸ *Ghim lên đầu* để giữ nó trong nhóm ĐÃ GHIM phía trên phần còn lại. Ẩn sidebar bằng nút ở tiêu đề của nó hoặc <kbd>⌘0</kbd>.

## Graph và panel chi tiết

Graph hiện mọi commit cùng các branch của chúng. Dòng trên cùng, *Thay đổi chưa commit*, là working tree của bạn. Nhấp chuột phải vào tiêu đề cột để hiện thêm cột: tác giả, ngày, SHA, CI và *Thay đổi* (số dòng thêm và xoá).

Panel chi tiết hiện commit đang chọn cùng file và diff của nó, hoặc vùng staging khi chọn dòng working tree. <kbd>⌥⌘0</kbd> hiện hoặc ẩn nó, và <kbd>⌥⌘L</kbd> chuyển nó giữa bên phải và bên dưới.

## Thanh công cụ và tab

Thanh công cụ có các nút Hoàn tác/Làm lại, Pull, Push, Fetch, Branch, Stash, terminal và panel. Rê chuột lên một nút một lúc để xem nó làm gì và phím tắt của nó. Bạn có thể chọn và sắp xếp các nút trong **Cài đặt ▸ Bố cục**.

Mỗi repository có tab riêng. **Repository ▸ Màu tab** cho repository một màu riêng, màu này cũng hiện thành một đường mảnh dưới thanh công cụ. **File ▸ Mở gần đây** và menu của biểu tượng trên Dock liệt kê các repository gần đây. Một tab bạn không xem trong 10 phút sẽ giải phóng bộ nhớ của graph và tải lại khi bạn quay lại.

## Banner và thông báo

Một banner dưới thanh công cụ giải thích mọi trạng thái bất thường, chẳng hạn rebase hoặc merge đang dở dang, xung đột hoặc detached HEAD, và có các nút để tiếp tục hoặc huỷ bỏ.

Thông báo ngắn hiện ở đầu cửa sổ, tô màu theo loại: xanh lá khi đã xong việc, xanh dương cho thông tin, cam khi cần bạn chú ý và đỏ khi thất bại. Thông báo lỗi ở lại lâu hơn; ✕ đóng chúng.
