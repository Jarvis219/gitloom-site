---
title: "MCP server"
group: Tools
order: 25
summary: "Cho các công cụ AI như Claude Code, Cursor hay VS Code đọc repository của bạn qua GitLoom, và tuỳ chọn cho chúng thực hiện các thay đổi an toàn."
updated: 2026-11-18
---

Các công cụ AI khác (Claude Code, Claude Desktop, Cursor, VS Code và nhiều công cụ khác) có thể làm việc với repository của bạn qua MCP server của GitLoom. Nó tắt cho tới khi bạn bật lên.

## Bật MCP server

Trong **Cài đặt ▸ Tích hợp ▸ MCP server**, đặt *Công cụ AI bên ngoài được phép* thành một trong:

- *Không làm gì (tắt)*;
- *Đọc: status, lịch sử, diff, blame*;
- *Đọc và thay đổi: thêm commit, branch, stash, pull, push*.

Sau đó kết nối công cụ của bạn. Với Claude Code, sao chép dòng hiện ở đó và chạy trong terminal; nó trông như sau:

```sh
claude mcp add gitloom -- "/Applications/GitLoom.app/Contents/Helpers/gitloom-mcp"
```

Với các công cụ khác, sao chép đoạn JSON hiện ở đó vào cấu hình MCP của công cụ. GitLoom không bao giờ sửa file của công cụ khác. Lệnh `gitloom mcp` cũng chạy server (xem [Công cụ dòng lệnh gitloom](/vi/docs/the-gitloom-command-line-tool/)).

## Đọc

Công cụ có thể xem status, lịch sử, diff, blame, branch và stash của các repository đang mở hoặc nằm trong danh sách gần đây ở trang bắt đầu. Khi GitLoom đang chạy, chúng cũng có thể hỏi bạn đang xem gì, chẳng hạn commit đang chọn hay file đang mở. Chúng không thể thay đổi gì cả.

## Đọc và thay đổi

Công cụ còn có thể stage, commit, tạo và chuyển branch, stash, fetch, pull (chỉ fast-forward) và push, trong các repository đang mở trong một tab, khi GitLoom đang chạy. Mỗi thay đổi hiện trong cửa sổ kèm tên công cụ và nút *Hoàn tác*, và trong Lịch sử thao tác.

Khi bật *Hỏi trước khi push*, một lần push sẽ chờ bạn trả lời trong cửa sổ của repository; sau 60 giây nó bị từ chối.

Không công cụ nào có thể force-push, reset, huỷ thay đổi, xoá hay viết lại lịch sử.

## Pull request, issue và CI

Khi bật *Pull request, issue và CI qua tài khoản của tôi*, công cụ có thể đọc pull request, issue và các lần chạy CI của repository qua tài khoản đã kết nối trong GitLoom. Với *Đọc và thay đổi*, chúng còn có thể mở pull request cho branch hiện tại và bình luận trên một pull request. Chúng không bao giờ thấy token của bạn, và không thể merge, duyệt hay đóng bất cứ thứ gì.

Phần cài đặt hiện các lần gọi gần nhất trong *Hoạt động gần đây*.
