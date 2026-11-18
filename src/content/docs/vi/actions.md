---
title: "Actions"
group: Accounts & hosting
order: 31
summary: "Theo dõi các lần chạy GitHub Actions cạnh commit của chúng, đọc log, chạy lại job, khởi chạy workflow và tải artifact."
updated: 2026-11-18
---

Khi đã thêm tài khoản GitHub, GitLoom hiện các lần chạy GitHub Actions trong nhóm THAO TÁC của sidebar và cạnh commit tương ứng ở cột CI của graph.

![Sidebar với một pull request và các lần chạy GitHub Actions, cùng job build của một lần chạy đang mở](/shots/actions-light.png)

## Lần chạy và log

Mở một lần chạy để xem các job, annotation và artifact của nó. Mở một job để đọc log. Khung log có thể hiện dấu thời gian, tự xuống dòng hoặc chỉ hiện lỗi, và *Lưu log…* giữ lại một bản sao.

## Chạy lại, huỷ và khởi chạy

- *Chạy lại mọi job*, *Chạy lại các job thất bại* hoặc *Chạy lại job này*.
- *Huỷ run*.
- *Chạy workflow…* khởi chạy một workflow có trigger `workflow_dispatch`, kèm các input của nó.
- Tải artifact của một lần chạy.

Lần chạy từ một fork đang chờ duyệt sẽ báo rõ điều đó, liệt kê các file workflow mà pull request của nó thay đổi, và cho chọn *Duyệt và chạy…*. Hãy kiểm tra thay đổi trước: workflow được duyệt sẽ chạy với cài đặt của repository.

## Thông báo

GitLoom có thể thông báo khi một lần chạy do bạn khởi chạy kết thúc. Chọn khi nào trong **Cài đặt ▸ Git ▸ GitHub Actions ▸ Thông báo khi CI tôi khởi chạy hoàn tất**: không bao giờ, chỉ khi thất bại (mặc định), hoặc luôn luôn.

> **Note** Actions chỉ dành cho GitHub. Với GitLab, CI pipeline chưa được hỗ trợ và nhóm Actions bị ẩn.
