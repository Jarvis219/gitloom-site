---
title: "Git LFS"
group: Tools
order: 23
summary: "Track file lớn bằng Git LFS, tải chúng về, và khoá file để đồng đội không sửa cùng lúc."
updated: 2026-11-18
---

GitLoom làm việc với Git LFS khi máy Mac của bạn đã cài `git-lfs`. Nếu chưa cài, GitLoom vẫn liệt kê được file LFS nhưng không tải về hay khoá chúng được.

## Nhóm GIT LFS

Trong repository có dùng LFS, sidebar có nhóm GIT LFS liệt kê các file LFS. File chưa được tải về, khi trên ổ đĩa chỉ có pointer, sẽ có biểu tượng tải xuống. File bị khoá cho biết ai đã khoá nó. Nhấp đúp vào một file để mở.

Nhấp chuột phải vào một file để chọn:

- *Mở file*;
- *Tải file này về*, khi ở đây chỉ có pointer của nó;
- *Khoá* hoặc *Mở khoá*.

## Tải mọi file LFS

**Repository ▸ Nâng cao ▸ Tải file Git LFS** chạy `git lfs pull` và tải các file lớn của bản checkout này về.

## Track một loại file mới

Nhấp chuột phải vào một file đã thay đổi trong vùng staging ▸ *Track bằng LFS (\*.ext)* để track mọi file có đuôi đó. Trong repository đã dùng LFS, cùng menu đó có *Khoá (LFS)* và *Mở khoá (LFS)*.
