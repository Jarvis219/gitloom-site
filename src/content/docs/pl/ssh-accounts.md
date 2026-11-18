---
title: "Konta SSH"
group: Accounts & hosting
order: 26
summary: "Używaj właściwego klucza SSH dla każdego konta, gdy masz kilka kont na tym samym hoście — w GitLoom i w terminalu."
updated: 2026-11-18
---

Jeśli masz kilka kont na tym samym hoście, na przykład służbowe i prywatne konto GitHub, konto SSH mówi GitLoom, który klucz należy do którego loginu i które repozytoria go używają.

## Konfigurowanie konta

Otwórz **Ustawienia ▸ Konta** i kliknij *Dodaj konto SSH…*. Dla każdego konta:

- podaj host i swój login na nim;
- dodaj jego klucze: *Importuj klucze…* wyświetla klucze z `~/.ssh`, ssh-agent, 1Password i Secretive, a *Generuj* tworzy nowy;
- w sekcji *Używaj dla repozytoriów* dodaj właścicieli lub foldery, które mają go używać (*Dodaj folder…*), albo ustaw je jako *Default account* dla hosta.

Pobieranie, ściąganie, wypychanie i klonowanie używają wtedy właściwego klucza. Gdy opcja *Zapisz też core.sshCommand w każdym repozytorium, aby terminal działał tak samo* jest włączona, ustawiany jest `core.sshCommand` repozytorium, więc zwykłe `git push` w terminalu robi to samo.

Repozytoria z własnym `core.sshCommand`, aliasem w `~/.ssh/config` z `IdentityFile` lub z `GIT_SSH_COMMAND` w powłoce pozostają nietknięte.

## Aliasy hostów

Jeśli używasz aliasów hostów z `~/.ssh/config` (na przykład `github-work`), **Repozytorium ▸ Repozytoria zdalne… ▸ Alias SSH** przełącza na taki alias repozytorium zdalne.

## Wymiana klucza

*Wymień…* przy kluczu tworzy nowy klucz, przesyła go na konto i usuwa stary, gdy nowy zadziała.

## Konta SSH a logowanie do hostingu

Konto SSH wybiera tylko, który klucz wypycha i ściąga. Logowanie do GitHub lub GitLab, potrzebne do pull requestów i przesyłania kluczy, to osobna sprawa i znajduje się w **Ustawienia ▸ Hosting** (zobacz [GitHub](/pl/docs/github/) i [GitLab](/pl/docs/gitlab/)).
