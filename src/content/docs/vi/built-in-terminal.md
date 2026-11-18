---
title: "Terminal có sẵn"
group: Tools
order: 19
summary: "Một terminal nằm dưới graph, mở sẵn trong thư mục của repository, tự làm mới GitLoom và gợi ý lệnh git."
updated: 2026-11-18
---

<kbd>⌃`</kbd> mở một terminal dưới graph, trong thư mục của repository, với login shell của chính bạn. Graph được làm mới ngay khi một lệnh git trong đó chạy xong.

## Gợi ý và liên kết

Khi bạn gõ một lệnh git, GitLoom gợi ý subcommand, branch, remote và alias. <kbd>↑</kbd> <kbd>↓</kbd> chọn gợi ý, <kbd>⇥</kbd> hoặc <kbd>→</kbd> chèn nó vào, và Esc đóng danh sách.

<kbd>⌘</kbd>-click vào thứ nằm dưới con trỏ: một SHA sẽ chọn commit đó, một đường dẫn sẽ mở file, và một URL sẽ mở trình duyệt.

## Phím tắt

| Phím | Thao tác |
|---|---|
| <kbd>⌃`</kbd> | Hiện hoặc ẩn terminal (ẩn khi terminal đang được focus) |
| <kbd>⌃⇧`</kbd> | Phiên terminal mới |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> | Phóng to / thu nhỏ chữ trong terminal |
| Esc | Ở dấu nhắc trống, quay lại graph |

Nếu một lệnh vẫn đang chạy khi bạn đóng tab, GitLoom sẽ hỏi trước.

## Cài đặt

**Cài đặt ▸ Tích hợp ▸ Terminal** có:

- *Shell integration*: cho GitLoom biết khi nào một lệnh kết thúc (làm mới tức thì, gợi ý). Tắt nó đi thì những tính năng đó cũng ngừng. Dù bật hay tắt, dotfile của bạn không bao giờ bị sửa.
- *Gợi ý lệnh git khi gõ*, để chỉ tắt phần gợi ý.
- *Scrollback*: số dòng mỗi phiên giữ lại (mặc định 10.000).
- *Hiện các lệnh git GitLoom chạy*: một dòng mờ cho mỗi lệnh app chạy, để học git.
- *Nhập liệu bàn phím bảo mật*: khi terminal đang nhận bàn phím, các app khác không đọc được những gì bạn gõ.
- *Shell* và *Tham số*: một shell khác cho các phiên mới, chẳng hạn `/opt/homebrew/bin/fish`. Nếu đường dẫn không chạy được, GitLoom quay về login shell của bạn.

Thay đổi áp dụng cho các phiên terminal mới. Terminal dùng font code đặt trong **Cài đặt ▸ Giao diện**.

## App terminal quen thuộc của bạn

<kbd>⌥⌘T</kbd> mở repository trong app terminal của bạn thay vào đó. Chọn app trong **Cài đặt ▸ Tích hợp ▸ “Mở trong Terminal” dùng**.
