---
title: "Chọn provider"
group: AI
order: 32
summary: "Bật tính năng AI, chọn provider đám mây hoặc cục bộ, thêm key và chọn những gì AI viết giúp bạn."
updated: 2026-11-18
---

Tính năng AI tắt theo mặc định. Khi bật lên, bạn chọn ai sẽ trả lời: một provider đám mây với key của chính bạn, hoặc một model chạy trên máy Mac của bạn.

## Bật AI

Mở **Cài đặt ▸ AI** và bật *Tính năng AI*. GitLoom trước tiên sẽ giải thích những gì sẽ được gửi và gửi cho ai.

Chọn một *Provider*:

- Anthropic, OpenAI, Google Gemini, OpenRouter, Groq, Mistral, DeepSeek, Qwen (Alibaba Cloud), xAI hoặc Together AI;
- Ollama hoặc LM Studio chạy cục bộ, khi đó dữ liệu không rời khỏi máy Mac của bạn;
- một provider tuỳ chỉnh: bất kỳ máy chủ nào dùng API của Anthropic, OpenAI, Gemini hoặc Ollama, chẳng hạn gateway của công ty. Thêm bằng *Thêm provider tuỳ chỉnh…*.

Dán API key và bấm *Lưu key*. Key được lưu trong Chuỗi khoá. *Kiểm tra* kiểm tra key và tải danh sách model của provider để bạn chọn.

## AI làm được gì

- Viết commit message (<kbd>⌥⌘G</kbd>), mô tả pull request và message cho stash.
- Giải thích một commit, một branch hoặc các thay đổi của bạn, kèm câu hỏi tiếp theo.
- Gợi ý cách giải quyết xung đột.

Không có gì được gửi cho tới khi bạn yêu cầu. Khi không có mạng, các nút ✨ bị làm mờ; model cục bộ vẫn hoạt động.

## Tinh chỉnh cách viết

Trong *Viết*, chọn ngôn ngữ (English hoặc Tiếng Việt) và kiểu commit: Conventional Commits, giống lịch sử của repository, hoặc tự do.

*Hiện cài đặt theo từng tính năng* cho mỗi tính năng model và *Hướng dẫn tuỳ chỉnh* riêng. Menu **Mẫu** bên cạnh điền sẵn một bộ có sẵn, chẳng hạn Conventional Commits, mã ticket lấy từ tên branch, dàn ý pull request hoặc review chỉ tìm lỗi, để bạn chỉnh lại cho hợp với team.

## Tắt AI cho một repository

Chọn *Tắt AI cho repository này* từ menu ✨ cạnh commit message. Bật lại trong **Cài đặt ▸ AI ▸ Đã tắt AI cho**.

Trước khi gửi bất cứ thứ gì, bạn có thể xem chính xác yêu cầu sẽ được gửi. Xem [Những gì được gửi](/vi/docs/what-gets-sent/).
