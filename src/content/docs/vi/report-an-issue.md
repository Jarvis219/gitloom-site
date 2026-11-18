---
title: "Báo lỗi"
group: Help
order: 39
summary: "Cách báo lỗi hoặc đề xuất tính năng, cần ghi kèm những gì, và GitLoom làm gì sau khi bị crash."
updated: 2026-11-18
---

Báo lỗi và đề xuất tính năng trên [GitHub Issues](https://github.com/Jarvis219/gitloom-site/issues).

## Cần ghi kèm những gì

- Phiên bản GitLoom (**GitLoom ▸ Giới thiệu về GitLoom**, hoặc **Cài đặt ▸ Chung ▸ Cập nhật**) và phiên bản macOS của bạn.
- Các bước dẫn tới lỗi.
- Điều bạn mong đợi, và điều thực sự xảy ra.
- Ảnh chụp màn hình, nếu nó cho thấy lỗi.

Nếu lỗi liên quan tới việc git đã làm, các lệnh trong **Cửa sổ ▸ Git Log** sẽ có ích (xem [Khắc phục sự cố](/vi/docs/troubleshooting/)). Để có thêm chi tiết, bật *Ghi debug log* trong **Cài đặt ▸ Nâng cao**; mật khẩu và token trong URL được ẩn đi ở đó.

> **Caution** Issue là công khai. Đừng bao giờ dán token, mật khẩu, khoá SSH hay mã nguồn riêng tư. Hãy kiểm tra log và ảnh chụp màn hình trước khi đính kèm.

## Sau khi bị crash

Nếu GitLoom thoát bất ngờ, lần khởi động sau sẽ hỏi bạn có muốn báo lỗi không. Nó đưa ra:

- *Báo cáo trên GitHub…*: trình duyệt mở một issue mới, đã điền sẵn phiên bản GitLoom và macOS, thông tin lỗi và phần đầu của luồng bị crash. Hãy đọc lại, thêm việc bạn đang làm, rồi tự gửi.
- *Hiện báo cáo*: hiện báo cáo crash mà macOS đã lưu, trong Finder.
- *Để sau*.

Không có gì được gửi trừ khi bạn tự gửi issue. Đánh dấu *Không đề xuất lại nữa*, hoặc tắt *Đề nghị báo lỗi khi app bị crash* trong **Cài đặt ▸ Nâng cao**, để không bị hỏi nữa.

**Trợ giúp ▸ Báo lỗi…** mở một issue trống trong trình duyệt bất cứ lúc nào.
