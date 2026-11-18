---
title: "Bisect"
group: History
order: 18
summary: "Tìm commit đã làm hỏng thứ gì đó bằng cách kiểm tra vài commit và trả lời Good hoặc Bad."
updated: 2026-11-18
---

Bisect tìm ra commit đã gây ra một vấn đề. Bạn cho GitLoom biết một commit mà mọi thứ còn chạy tốt và một commit đã hỏng, rồi kiểm tra các commit nó chọn ở giữa.

## Bắt đầu

Hãy commit hoặc stash công việc của bạn trước: file sẽ thay đổi khi các commit được checkout.

Chọn **Repository ▸ Bisect…**, hoặc nhấp chuột phải vào một commit cũ hơn vẫn chạy tốt ▸ *Bisect: Commit này là Good…*. GitLoom sẽ hỏi một commit bad và một commit good.

## Kiểm tra và trả lời

GitLoom checkout một commit nằm giữa hai commit đó. Hãy kiểm tra nó, rồi trả lời trên thanh phía trên graph:

- *Good* nếu vấn đề không xuất hiện;
- *Bad* nếu có;
- *Bỏ qua* nếu không thể kiểm tra commit này.

Sau vài câu trả lời, thanh sẽ chỉ ra commit bad đầu tiên. Nếu các commit bị bỏ qua khiến nó không thu hẹp thêm được, nó sẽ liệt kê những commit có thể là thủ phạm.

## Để một lệnh kiểm tra thay bạn

Nếu một lệnh có thể phân biệt commit good với commit bad, chẳng hạn một bài test, hãy bấm *Chạy script…* trên thanh (`git bisect run`). git sẽ lần lượt checkout từng commit và chạy lệnh trong repository. Lệnh phải thoát với mã 0 khi commit good và 1 khi commit bad; 125 nghĩa là không thể kiểm tra commit đó.

## Kết thúc

*Kết thúc* đưa bạn về chỗ đã bắt đầu. *Dừng* kết thúc bisect bất cứ lúc nào và cũng đưa bạn về chỗ bắt đầu.
