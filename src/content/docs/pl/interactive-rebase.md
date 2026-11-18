---
title: "Interaktywny rebase"
group: History
order: 16
summary: "Zmieniaj kolejność, przeredaguj, łącz (squash), edytuj lub usuwaj commity w wizualnym planie, który nic nie robi, dopóki go nie uruchomisz."
updated: 2026-11-18
---

Interaktywny rebase przepisuje serię commitów. GitLoom pokazuje plan jako edytowalną listę; z repozytorium nic się nie dzieje, dopóki nie zaczniesz.

## Otwieranie edytora

- Kliknij commit prawym przyciskiem ▸ *Interaktywny rebase od tego miejsca…*.
- Albo upuść jedną gałąź na drugą i wybierz *Interaktywny rebase*.
- Gdy zaznaczonych jest kilka commitów, *Interaktywny rebase zaznaczonych commitów…* otwiera edytor z tymi commitami zaznaczonymi.

Działa to także od samego pierwszego commita (`--root`). Edytor zastępuje graf.

## Edycja planu

Każdy wiersz to commit, najstarszy na górze. Ustaw jego akcję z menu lub klawiszem:

| Klawisz | Akcja |
|---|---|
| <kbd>P</kbd> | pick |
| <kbd>R</kbd> | reword |
| <kbd>E</kbd> | edit |
| <kbd>S</kbd> | squash |
| <kbd>F</kbd> | fixup |
| <kbd>C</kbd> | fixup -C |
| <kbd>D</kbd> | drop |

Przeciągaj wiersze lub używaj <kbd>⌥↑</kbd> i <kbd>⌥↓</kbd>, aby zmienić kolejność. <kbd>⌘Z</kbd> cofa zmianę w planie.

- Nowe komunikaty dla reword można napisać z góry, dzięki czemu rebase przebiega bez zatrzymywania się.
- Menu wiersza zawiera *Dodaj polecenie po…*, aby uruchomić polecenie w tym miejscu (wiersz `exec`, na przykład test, który zatrzymuje rebase, jeśli się nie powiedzie).
- Gałęzie ułożone na commitach objętych rebase przesuwają się razem z nimi (`--update-refs`), chyba że odznaczysz tę opcję.
- Scalenia w zakresie są domyślnie spłaszczane. Zaznacz *Zachowaj scalenia*, aby je zachować (`--rebase-merges`). Plan pokazuje wtedy również, gdzie zaczyna się każda strona scalenia i gdzie scalenie jest tworzone ponownie, a commity można przesuwać tylko w obrębie ich własnej strony.

## Start lub anulowanie

<kbd>⌘↩</kbd> uruchamia, a Esc anuluje. Potem cały rebase jest jednym krokiem cofania.

## Szybsze zmiany

Bez otwierania edytora:

- zaznacz kilka sąsiednich commitów ▸ *Połącz N commitów (squash)* (wykonuje się od razu z połączonymi komunikatami, od najstarszego; *…i edytuj komunikat*, aby napisać go samodzielnie) lub *Usuń N commitów…*;
- kliknij commit prawym przyciskiem ▸ *Edytuj komunikat…*, *Usuń commit…*, *Przenieś w górę/w dół*.
