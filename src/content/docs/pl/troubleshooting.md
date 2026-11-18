---
title: "Rozwiązywanie problemów"
group: Help
order: 38
summary: "Co zrobić, gdy coś pójdzie nie tak: cofnij, znajdź utracone commity, sprawdź, co uruchomił git, i napraw typowe problemy z konfiguracją."
updated: 2026-11-18
---

Większość problemów w GitLoom da się cofnąć lub wyjaśnić. Zacznij tutaj.

## Coś poszło nie tak w repozytorium

- **Najpierw cofnij**: <kbd>⌘Z</kbd> lub **Edycja ▸ Historia operacji…**. Większość operacji można cofnąć (zobacz [Cofanie i ponawianie](/pl/docs/undo-and-redo/)).
- **Commity zniknęły**: znajdziesz je przez **Repozytorium ▸ Reflog…** i **Znajdź utracone commity…** (zobacz [Odzyskiwanie z reflogu](/pl/docs/reflog-recovery/)).
- **Utknięcie w rebase lub scalaniu**: repozytorium pozostawione w trakcie takiej operacji pokazuje baner z przyciskami *Kontynuuj* i *Przerwij*, także po ponownym uruchomieniu GitLoom.

## Co zrobił GitLoom

**Okno ▸ Dziennik Git** (<kbd>⌥⇧⌘L</kbd>) wyświetla każde polecenie git uruchomione przez GitLoom: repozytorium, polecenie, czas trwania i kod wyjścia. Zachowywany jest tylko wiersz polecenia, nigdy jego wyjście, wejście ani dane uwierzytelniające.

Cienka ruchoma linia pod paskiem narzędzi oznacza, że git komunikuje się ze zdalnym repozytorium; najedź na nią, aby zobaczyć, z czym. Komunikat powolnej operacji ma przycisk *Anuluj*.

## Typowe problemy

- **GitLoom nie znajduje gita lub zgłasza, że jest za stary.** Zainstaluj git 2.40 lub nowszy (zobacz [Instalacja](/pl/docs/install/)) albo wybierz inny git w **Ustawienia ▸ Git ▸ Plik binarny git**.
- **Hook nie znajduje node, pythona lub lintera.** Dodaj potrzebne foldery do *Dodatkowy PATH* w **Ustawienia ▸ Git ▸ Hooki**. Dotyczy to repozytoriów otwartych później.
- **Hook się zawiesza.** Commit, którego hook wciąż działa po minucie, informuje o tym i proponuje *Zatrzymaj*. *Zatrzymaj hook po* w **Ustawienia ▸ Git ▸ Hooki** zatrzymuje go automatycznie (domyślnie po 10 minutach).
- **Używany jest niewłaściwy klucz SSH.** Skonfiguruj [konta SSH](/pl/docs/ssh-accounts/).

## Dzienniki i pamięć podręczna

W **Ustawienia ▸ Zaawansowane**:

- *Zapisuj dziennik debugowania* zapisuje polecenia git uruchamiane przez GitLoom, z ich statusem wyjścia i czasem, w pliku w folderze dzienników. Hasła i tokeny w adresach URL są ukryte. *Pokaż folder dzienników* go otwiera.
- *Wyczyść pamięć podręczną…* usuwa pull requesty i zgłoszenia przechowywane do użytku offline oraz zbuforowane wersje plików. W razie potrzeby zostaną pobrane ponownie.
- Jeśli pliku ustawień nie da się odczytać, GitLoom odkłada go na bok, uruchamia się z ustawieniami domyślnymi i informuje o tym tutaj.

Jeśli nic z tego nie pomoże, [zgłoś problem](/pl/docs/report-an-issue/).
