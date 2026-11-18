---
title: "SSH 계정"
group: Accounts & hosting
order: 26
summary: "같은 호스트에 계정이 여러 개 있을 때 GitLoom과 터미널에서 계정마다 올바른 SSH 키를 사용합니다."
updated: 2026-11-18
---

업무용과 개인용 GitHub 계정처럼 같은 호스트에 계정이 여러 개 있다면, SSH 계정이 GitLoom에 어떤 키가 어떤 로그인에 속하고 어떤 저장소가 그 키를 쓰는지 알려 줍니다.

## 계정 설정

**설정 ▸ 계정**을 열고 *SSH 계정 추가…* 를 클릭하세요. 계정마다:

- 호스트와 그 호스트의 로그인 이름을 입력합니다;
- 키를 추가합니다: *키 가져오기…* 는 `~/.ssh`, ssh-agent, 1Password, Secretive의 키를 나열하고, *생성…* 은 새 키를 만듭니다;
- *적용할 저장소*에 이 계정을 사용할 소유자나 폴더를 추가하거나(*폴더 추가…*), 이 계정을 호스트의 *기본 계정*으로 지정합니다.

그러면 페치, 풀, 푸시, 복제에 올바른 키가 사용됩니다. *각 저장소에 core.sshCommand도 기록*을 켜면 저장소의 `core.sshCommand`가 설정되어, 터미널에서 일반 `git push`를 해도 같게 동작합니다.

자체 `core.sshCommand`가 있는 저장소, `IdentityFile`이 있는 `~/.ssh/config` 별칭, 셸의 `GIT_SSH_COMMAND`는 건드리지 않습니다.

## 호스트 별칭

`~/.ssh/config`의 호스트 별칭(예: `github-work`)을 쓴다면 **저장소 ▸ 원격… ▸ SSH 별칭**으로 원격을 별칭으로 바꿀 수 있습니다.

## 키 교체

키의 *교체…* 는 새 키를 만들어 계정에 업로드하고, 새 키가 작동하면 이전 키를 제거합니다.

## SSH 계정과 호스팅 로그인

SSH 계정은 푸시와 풀에 쓸 키만 정합니다. 풀 리퀘스트와 키 업로드를 위한 GitHub 또는 GitLab 로그인은 별개이며 **설정 ▸ 호스팅**에 있습니다([GitHub](/ko/docs/github/)와 [GitLab](/ko/docs/gitlab/) 참고).
