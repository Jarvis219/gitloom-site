---
title: "Actions"
group: Accounts & hosting
order: 31
summary: "Śledź uruchomienia GitHub Actions obok ich commitów, czytaj dzienniki, uruchamiaj ponownie zadania, startuj workflowy i pobieraj artefakty."
updated: 2026-11-18
---

Po dodaniu konta GitHub GitLoom pokazuje uruchomienia GitHub Actions w grupie ACTIONS paska bocznego oraz obok ich commitów w kolumnie CI grafu.

![Pasek boczny z pull requestem i uruchomieniami GitHub Actions; jedno uruchomienie otwarte na zadaniu build](/shots/actions-light.png)

## Uruchomienia i dzienniki

Otwórz uruchomienie, aby zobaczyć jego zadania, adnotacje i artefakty. Otwórz zadanie, aby przeczytać jego dziennik. Widok dziennika może pokazywać znaczniki czasu, zawijać wiersze lub pokazywać tylko błędy, a *Zachowaj dziennik…* zapisuje kopię.

## Ponowne uruchamianie, anulowanie i start

- *Uruchom ponownie wszystkie zadania*, *Uruchom ponownie nieudane zadania* lub *Uruchom ponownie to zadanie*.
- *Anuluj przebieg*.
- *Uruchom workflow…* startuje workflow z wyzwalaczem `workflow_dispatch`, wraz z jego danymi wejściowymi.
- Pobierz artefakty uruchomienia.

Uruchomienie z forka, które czeka na zatwierdzenie, informuje o tym, wymienia pliki workflow zmieniane przez jego pull request i proponuje *Zaakceptuj i uruchom…*. Najpierw sprawdź zmiany: zatwierdzone workflowy działają z ustawieniami repozytorium.

## Powiadomienia

GitLoom może powiadomić Cię, gdy zakończy się uruchomiony przez Ciebie przebieg. Wybierz, kiedy, w **Ustawienia ▸ Git ▸ GitHub Actions ▸ Powiadamiaj, gdy uruchomione przeze mnie CI się zakończy**: nigdy, tylko w razie niepowodzenia (domyślnie) lub zawsze.

> **Note** Actions działają tylko z GitHubem. W przypadku GitLaba potoki CI nie są jeszcze obsługiwane, a grupa Actions jest ukryta.
