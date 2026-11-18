---
title: "Công cụ dòng lệnh gitloom"
group: Tools
order: 24
summary: "Cài lệnh gitloom để mở repository, diff, lịch sử file và blame từ terminal."
updated: 2026-11-18
---

Lệnh `gitloom` mở GitLoom từ terminal. Nó khởi động GitLoom khi cần.

## Cài đặt

Chọn **GitLoom ▸ Cài đặt công cụ dòng lệnh…**. Thao tác này thêm một liên kết tại `~/.local/bin/gitloom`, không cần mật khẩu quản trị viên. Nếu `~/.local/bin` chưa có trong PATH, GitLoom sẽ báo; hãy thêm dòng sau vào `~/.zshrc`:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

Để cài cho mọi shell mà không cần đổi PATH, dùng *Cài vào /usr/local/bin…* trong **Cài đặt ▸ Tích hợp ▸ Công cụ dòng lệnh**. macOS sẽ hỏi mật khẩu quản trị viên. Mục đó cũng cho biết `gitloom` được cài ở đâu.

GitLoom chỉ thay thế liên kết của chính nó. Nếu ở đó đã có một file khác tên `gitloom`, file đó được giữ nguyên và GitLoom sẽ báo cho bạn.

## Các lệnh

| Lệnh | Tác dụng |
|---|---|
| `gitloom [path]` | Mở repository chứa `path` (mặc định: thư mục hiện tại) |
| `gitloom clone <url> [dir]` | Mở hộp thoại Clone đã điền sẵn |
| `gitloom diff [<rev>]` | Mở repository bạn đang đứng và chọn `<rev>` (mặc định: dòng thay đổi chưa commit) |
| `gitloom log <file>` | Mở lịch sử của file |
| `gitloom blame <file>[:<line>]` | Mở blame của file, tại dòng đó |
| `gitloom mcp` | Chạy MCP server của GitLoom qua stdio (xem [MCP server](/vi/docs/mcp-server/)) |

Ví dụ:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
