---
title: "Tài khoản SSH"
group: Accounts & hosting
order: 26
summary: "Dùng đúng khoá SSH cho từng tài khoản khi bạn có nhiều tài khoản trên cùng một host, trong GitLoom lẫn terminal."
updated: 2026-11-18
---

Nếu bạn có nhiều tài khoản trên cùng một host, chẳng hạn một tài khoản GitHub công việc và một tài khoản cá nhân, tài khoản SSH cho GitLoom biết khoá nào thuộc về login nào, và repository nào dùng nó.

## Thiết lập tài khoản

Mở **Cài đặt ▸ Tài khoản** và bấm *Thêm tài khoản SSH…*. Với mỗi tài khoản:

- nhập host và login của bạn trên host đó;
- thêm khoá: *Nhập khoá…* liệt kê các khoá từ `~/.ssh`, ssh-agent, 1Password và Secretive, hoặc *Tạo…* tạo một khoá mới;
- trong *Dùng cho các repository*, thêm các chủ sở hữu hoặc thư mục sẽ dùng tài khoản này (*Thêm thư mục…*), hoặc đặt nó làm *Tài khoản mặc định* cho host.

Khi đó fetch, pull, push và clone sẽ dùng đúng khoá. Khi bật *Ghi luôn core.sshCommand vào từng repository*, `core.sshCommand` của repository được đặt để một lệnh `git push` thông thường trong terminal cũng làm như vậy.

Các repository có `core.sshCommand` riêng, alias trong `~/.ssh/config` có `IdentityFile`, hoặc `GIT_SSH_COMMAND` trong shell của bạn sẽ được giữ nguyên.

## Alias host

Nếu bạn dùng alias host từ `~/.ssh/config` (chẳng hạn `github-work`), **Repository ▸ Remote… ▸ Alias SSH** chuyển một remote sang dùng alias đó.

## Xoay vòng khoá

*Xoay vòng…* của một khoá tạo khoá mới, tải nó lên tài khoản, và gỡ khoá cũ khi khoá mới đã hoạt động.

## Tài khoản SSH và đăng nhập hosting

Tài khoản SSH chỉ quyết định khoá nào dùng để push và pull. Đăng nhập GitHub hoặc GitLab, để dùng pull request và tải khoá lên, là việc riêng và nằm trong **Cài đặt ▸ Hosting** (xem [GitHub](/vi/docs/github/) và [GitLab](/vi/docs/gitlab/)).
