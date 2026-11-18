---
title: "GitHub"
group: Accounts & hosting
order: 27
summary: "GitHub에 로그인해 GitLoom에서 풀 리퀘스트, 이슈, Actions, 조직을 다룹니다."
updated: 2026-11-18
---

GitHub에 로그인하면 GitLoom에서 풀 리퀘스트, 이슈, Launchpad, Actions를 사용할 수 있습니다.

## 로그인

**설정 ▸ 호스팅**을 열고 *GitHub로 로그인…* 을 클릭하세요. *코드 받기*로 코드를 받고, *코드 복사 후 GitHub 열기*로 코드를 복사해 입력할 페이지를 엽니다.

*토큰 추가…* 를 사용해 세분화된 토큰이나 클래식 개인 액세스 토큰을 붙여 넣을 수도 있습니다. GitLoom이 확인할 수 있는 범위를 검사합니다.

토큰은 macOS 키체인에만 보관됩니다.

## 할 수 있는 일

- [풀 리퀘스트](/ko/docs/pull-requests-and-reviews/)를 만들고, 리뷰하고, 병합합니다.
- [이슈](/ko/docs/issues/)를 만들고 둘러봅니다.
- GitHub [Actions](/ko/docs/actions/) 실행을 해당 커밋 옆에서 봅니다.
- **Launchpad**(<kbd>⇧⌘K</kbd>)는 여러 저장소에 걸쳐 나를 기다리는 풀 리퀘스트와 이슈를 나열합니다.
- **윈도우 ▸ 조직**은 조직과 그 팀, 멤버를 보여 줍니다.
- **저장소 ▸ GitHub / GitLab**에는 GitHub에 저장소를 만들어 `origin`으로 추가하고 현재 브랜치를 푸시하는 *저장소 게시…* 와 *GitHub에서 포크*가 있습니다.
- 계정과 조직에서 복제: <kbd>⇧⌘C</kbd> ▸ *내 계정에서 선택…*.

## 커밋 이메일

커밋 전에 이메일이 GitHub 계정의 이메일이 아니면 GitLoom이 경고합니다. GitHub가 커밋을 본인과 연결하지 못하기 때문입니다.

## SSH 키

로그인은 API용입니다. 어떤 SSH 키로 어떤 로그인으로 푸시할지는 [SSH 계정](/ko/docs/ssh-accounts/)에서 설정합니다. **설정 ▸ 호스팅**에서 계정의 *SSH 키…* 를 열면 GitHub에 있는 키를 보고 내 키를 업로드할 수 있습니다.
