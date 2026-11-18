---
title: "GitHub"
group: Accounts & hosting
order: 27
summary: "Zaloguj się do GitHuba, aby pracować z pull requestami, zgłoszeniami, Actions i swoimi organizacjami w GitLoomie."
updated: 2026-11-18
---

Zaloguj się do GitHuba, aby korzystać w GitLoomie z pull requestów, zgłoszeń, Launchpada i Actions.

## Logowanie

Otwórz **Ustawienia ▸ Hosting** i kliknij *Zaloguj się przez GitHub…*. *Uzyskaj kod* wyświetla kod; *Kopiuj kod i otwórz GitHub* kopiuje go i otwiera stronę, na której go wpisujesz.

Możesz też użyć *Dodaj token…* i wkleić osobisty token dostępu, szczegółowy (fine-grained) lub klasyczny. GitLoom sprawdza zakresy, które widzi.

Tokeny są przechowywane wyłącznie w pęku kluczy macOS.

## Co możesz robić

- Tworzyć, recenzować i scalać [pull requesty](/pl/docs/pull-requests-and-reviews/).
- Tworzyć i przeglądać [zgłoszenia](/pl/docs/issues/).
- Widzieć uruchomienia GitHub [Actions](/pl/docs/actions/) obok ich commitów.
- **Launchpad** (<kbd>⇧⌘K</kbd>) wyświetla pull requesty i zgłoszenia czekające na Ciebie we wszystkich repozytoriach.
- **Okno ▸ Organizacje** pokazuje Twoje organizacje, ich zespoły i członków.
- **Repozytorium ▸ GitHub / GitLab** zawiera *Opublikuj repozytorium…*, które tworzy repozytorium na GitHubie, dodaje je jako `origin` i wypycha bieżącą gałąź, oraz *Fork na GitHub*.
- Klonować z kont i organizacji: <kbd>⇧⌘C</kbd> ▸ *Wybierz ze swojego konta…*.

## E-mail w commitach

Przed commitem GitLoom ostrzega, gdy e-mail nie jest jednym z adresów Twojego konta GitHub, ponieważ GitHub nie powiązałby wtedy commita z Tobą.

## Klucze SSH

Logowanie służy do API. To, który klucz SSH wypycha dla którego loginu, ustawia się w [kontach SSH](/pl/docs/ssh-accounts/). *Klucze SSH…* przy koncie w **Ustawienia ▸ Hosting** pokazują klucze na GitHubie i pozwalają przesłać Twój.
