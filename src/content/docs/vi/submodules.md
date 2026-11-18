---
title: "Submodule"
group: Tools
order: 22
summary: "Xem trạng thái từng submodule, init và cập nhật chúng, mở một submodule trong tab riêng, thêm hoặc gỡ chúng."
updated: 2026-11-18
---

Khi repository có submodule, sidebar hiện nhóm SUBMODULE với từng submodule và trạng thái của nó.

## Đọc danh sách

Mỗi dòng hiện đường dẫn và trạng thái của submodule:

- dấu ✓ và commit đang checkout khi nó đã cập nhật, hoặc *nội dung đã sửa đổi* / *nội dung untracked* khi có thay đổi;
- *Cập nhật* khi nó lệch: commit đang checkout không phải commit mà repository chính ghi nhận (rê chuột để xem cả hai);
- *Init* khi nó chưa được init;
- *xung đột* khi commit được ghi nhận đang bị xung đột.

## Làm việc với submodule

Nhấp đúp vào một submodule để mở nó trong tab riêng. Nhấp chuột phải để chọn:

- *Mở trong tab mới*;
- *Cập nhật về commit đã ghi nhận*, hoặc *Cập nhật lên bản mới nhất trên remote*;
- *Init*, cho submodule chưa được init;
- *Hiện trong Finder*;
- *Gỡ submodule…*.

Nếu submodule có thay đổi chưa commit, việc cập nhật sẽ hỏi trước. git sẽ dừng nếu thay đổi của bạn cản đường; không có gì bị ép buộc.

Để cập nhật submodule sau mỗi lần pull mang về commit mới, bật *Cập nhật submodule sau khi pull* trong **Cài đặt ▸ Git**.

## Thêm submodule

**Repository ▸ Nâng cao ▸ Thêm submodule…** hỏi URL, đường dẫn và, tuỳ chọn, một branch.

## Gỡ submodule

*Gỡ submodule…* deinit submodule và gỡ nó khỏi index. Dữ liệu repository của nó (`.git/modules/<name>`) được chuyển vào Thùng rác, nên các commit của nó vẫn khôi phục được. Sau đó hãy commit để hoàn tất. Nếu submodule có thay đổi chưa commit, commit chưa có trên remote nào, hoặc stash, GitLoom sẽ liệt kê chúng trước.
