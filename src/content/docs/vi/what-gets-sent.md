---
title: "Những gì được gửi"
group: AI
order: 33
summary: "GitLoom gửi gì tới provider AI, những gì bị bỏ ra hoặc che đi, và cách xem trước chính xác yêu cầu."
updated: 2026-11-18
---

GitLoom không gửi gì tới provider AI cho tới khi bạn yêu cầu một việc, chẳng hạn viết commit message. Những gì được gửi là các diff và commit message mà yêu cầu đó cần, sau khi đã lọc.

## Bản xem trước

Lần đầu bạn dùng AI trong một repository, GitLoom hiện dữ liệu trước khi gửi:

- provider, model và địa chỉ yêu cầu được gửi tới; provider cục bộ được đánh dấu là không rời khỏi máy Mac của bạn;
- từng file, được đánh dấu là có gửi, bị cắt bớt, chỉ gửi tên (file nhị phân, file được sinh ra như lock file, hoặc vượt giới hạn dung lượng) hoặc bị loại trừ;
- các bí mật đã bị che đi;
- ước tính số token, và nội dung chính xác của yêu cầu.

Bấm *Gửi* hoặc *Huỷ*. Đánh dấu *Không hỏi lại cho repository này* để bỏ qua bản xem trước ở đó vào lần sau. Để xem lại sau này, chọn *Xem trước dữ liệu…* từ menu ✨ cạnh commit message.

## File bị loại trừ

File khớp với các mẫu *Loại trừ* trong **Cài đặt ▸ AI ▸ Những gì được gửi** không bao giờ được gửi. Đó là các mẫu kiểu gitignore, phân cách bằng dấu phẩy; mặc định là:

```text
.env*, *.pem, *.key, *.p12, secrets/**, id_rsa*, id_ed25519*
```

Bật *Ẩn cả tên các file bị loại trừ* để bỏ luôn tên của chúng. `.gitloom/team.json` của team có thể thêm mẫu khác. *Đầu vào tối đa* giới hạn lượng dữ liệu được gửi.

## Bí mật bị che

Trước khi gửi, GitLoom thay các chuỗi trông giống bí mật bằng `[REDACTED]`: AWS access key, key và token của GitHub, Slack, Anthropic, OpenRouter, OpenAI, Google và Groq, khối private key, giá trị gán cho các tên như `password`, `secret`, `api_key` hoặc `token`, và các token dài trông ngẫu nhiên khác. Bản xem trước liệt kê những gì đã bị che.

> **Caution** Việc che bí mật dựa trên mẫu và có thể bỏ sót. Hãy thêm các file chứa bí mật vào *Loại trừ*, và kiểm tra bản xem trước.

## Debug log

*Debug log: ghi prompt và câu trả lời ra file* trong **Cài đặt ▸ AI** lưu mọi thứ được gửi (sau khi lọc) và mọi câu trả lời vào một file trên máy Mac của bạn. API key không bao giờ được ghi. Hãy tắt nó khi đã xong.
