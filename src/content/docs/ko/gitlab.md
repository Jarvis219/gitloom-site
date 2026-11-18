---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "토큰으로 gitlab.com이나 자체 GitLab 서버에 연결해 머지 리퀘스트와 이슈를 다룹니다."
updated: 2026-11-18
---

GitLoom은 개인 액세스 토큰으로 gitlab.com과 자체 GitLab 서버에서 작동합니다.

## 토큰 추가

1. **설정 ▸ 호스팅**을 열고 *GitLab 토큰 추가…* 를 클릭합니다.
2. 호스트를 입력합니다.
3. `api`, `read_user`, `write_repository` 범위가 있는 개인 액세스 토큰을 붙여 넣습니다. *토큰 만들기…* 는 내 GitLab의 해당 페이지를 엽니다.

토큰은 macOS 키체인에 보관됩니다. HTTPS 푸시에 이 토큰이 사용됩니다.

## 할 수 있는 일

사이드바에 머지 리퀘스트와 이슈가 표시됩니다. 다음을 할 수 있습니다:

- 머지 리퀘스트를 만들고, 댓글을 달고, 승인하고, 병합(스쿼시 포함)합니다;
- Launchpad(<kbd>⇧⌘K</kbd>)에서 내 머지 리퀘스트를 봅니다;
- 이슈를 만들고 둘러봅니다.

## 아직 지원되지 않는 기능

GitLab에서는 GitLoom이 아직 다음을 지원하지 않습니다:

- CI 파이프라인(Actions 그룹이 숨겨짐);
- 코드 줄에 다는 댓글;
- 조직;
- 토큰 없이 로그인.
