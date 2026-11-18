---
title: "설치"
group: Getting started
order: 1
summary: "GitLoom에 필요한 것, 다운로드 방법, 처음 여는 방법."
updated: 2026-11-18
---

GitLoom은 Mac용 무료 Git 클라이언트입니다. 사용자의 `git`을 그대로 실행하므로 설정, 훅, 자격 증명, 별칭이 모두 적용됩니다.

## 요구 사항

- Apple 실리콘 Mac의 macOS 14 Sonoma 이상.
- git 2.40 이상. Xcode 명령줄 도구에 포함된 git도, Homebrew의 git도 사용할 수 있습니다.

Apple의 git을 설치하려면 터미널에서 다음을 실행하세요:

```sh
xcode-select --install
```

충분히 최신인 git을 찾지 못하면 GitLoom이 실행 시 알려 줍니다. git을 특이한 위치에 두었다면 **설정 ▸ Git**에서 선택하세요.

## 다운로드

[최신 릴리스](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg)에서 `GitLoom.dmg`(42 MB)를 다운로드하거나, 터미널에서 받으세요:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

디스크 이미지를 열고 GitLoom을 응용 프로그램 폴더로 드래그하세요.

## 처음 열기

GitLoom은 아직 Apple의 공증을 받지 않았기 때문에 macOS가 첫 실행을 막습니다. 여는 방법:

1. GitLoom을 한 번 엽니다. macOS가 열 수 없다고 알립니다.
2. **시스템 설정 ▸ 개인정보 보호 및 보안**으로 이동해 GitLoom에 관한 메시지 옆의 *확인 없이 열기*를 클릭합니다.
3. 확인합니다. 이후로는 GitLoom이 평소처럼 열립니다.

이 작업은 한 번만 하면 됩니다. 이후 버전은 GitLoom 자체 업데이트 기능으로 받습니다([업데이트](/ko/docs/updates/) 참고).

## 선택 사항: 명령줄 도구

**GitLoom ▸ 명령줄 도구 설치…** 를 선택하면 `gitloom` 명령이 추가되어 `gitloom .`으로 현재 폴더를 열 수 있습니다. [gitloom 명령줄 도구](/ko/docs/the-gitloom-command-line-tool/)를 참고하세요.
