---
title: "gitloom 명령줄 도구"
group: Tools
order: 24
summary: "gitloom 명령을 설치해 터미널에서 저장소, diff, 파일 기록, blame을 엽니다."
updated: 2026-11-18
---

`gitloom` 명령은 터미널에서 GitLoom을 엽니다. 필요하면 GitLoom을 실행합니다.

## 설치

**GitLoom ▸ 명령줄 도구 설치…** 를 선택하세요. 관리자 암호 없이 `~/.local/bin/gitloom`에 링크를 추가합니다. `~/.local/bin`이 아직 PATH에 없으면 GitLoom이 알려 줍니다. `~/.zshrc`에 다음 줄을 추가하세요:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

PATH를 바꾸지 않고 모든 셸에서 쓰도록 설치하려면 **설정 ▸ 통합 ▸ 명령줄 도구**의 */usr/local/bin에 설치…* 를 사용하세요. macOS가 관리자 암호를 묻습니다. 같은 섹션에 `gitloom`이 설치된 위치도 표시됩니다.

GitLoom은 자신의 링크만 교체합니다. 이미 `gitloom`이라는 다른 파일이 있으면 그대로 두고 알려 줍니다.

## 명령

| 명령 | 기능 |
|---|---|
| `gitloom [path]` | `path`가 들어 있는 저장소를 엽니다(기본값: 현재 폴더) |
| `gitloom clone <url> [dir]` | 내용이 채워진 복제 대화상자를 엽니다 |
| `gitloom diff [<rev>]` | 현재 위치한 저장소를 열고 `<rev>`를 선택합니다(기본값: 커밋하지 않은 변경 사항 행) |
| `gitloom log <file>` | 파일의 기록을 엽니다 |
| `gitloom blame <file>[:<line>]` | 파일의 blame을 해당 줄에서 엽니다 |
| `gitloom mcp` | GitLoom의 MCP 서버를 stdio로 실행합니다([MCP 서버](/ko/docs/mcp-server/) 참고) |

예:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
