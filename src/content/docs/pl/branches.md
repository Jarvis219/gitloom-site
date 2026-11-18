---
title: "Gałęzie"
group: Everyday work
order: 8
summary: "Twórz, przełączaj i zarządzaj gałęziami oraz tagami, a także pobieraj, ściągaj i wypychaj je."
updated: 2026-11-18
---

Gałęzie i tagi są na pasku bocznym i w grafie. Większość działań jest pod prawym przyciskiem myszy.

## Tworzenie i przełączanie

<kbd>⌘B</kbd> tworzy gałąź w zaznaczonym commicie. Kliknij gałąź dwukrotnie, aby na nią przełączyć. Wszystko inne znajdziesz, klikając prawym przyciskiem gałęzie, tagi i commity: zmianę nazwy, usuwanie, ustawianie upstream, tagowanie, reset, revert, cherry-pick i więcej.

Usunięcie gałęzi, która nie jest scalona, wymaga potwierdzenia i można je cofnąć skrótem <kbd>⌘Z</kbd>.

## Pobieranie, ściąganie i wypychanie

- <kbd>⇧⌘L</kbd> pobiera ze wszystkich zdalnych repozytoriów. GitLoom pobiera też w tle, domyślnie co 5 minut (zmienisz to w **Ustawienia ▸ Ogólne**). Nigdy nie pobiera w tle przy zasilaniu z baterii poniżej 20 %, w trybie niskiego zużycia energii ani w sieciach z ograniczonym transferem.
- <kbd>⇧⌘↓</kbd> ściąga zmiany. **Repozytorium ▸ Ściągnij z** wybiera strategię dla pojedynczego ściągnięcia.
- <kbd>⇧⌘↑</kbd> wypycha. Dla nowej gałęzi zaznacz *Ustaw upstream*.

Wymuszone wypchnięcie jest zawsze jawne i używa `--force-with-lease`. **Repozytorium ▸ Wypchnij z tagami** wypycha też tagi z adnotacją na wypychanych commitach.

## Porządki

**Repozytorium ▸ Usuń scalone gałęzie…** usuwa gałęzie lokalne już scalone z bieżącą. Chronione gałęzie pozostają nietknięte; ich wzorce ustawisz w **Ustawienia ▸ Git ▸ Chronione gałęzie** (na przykład `main master release/*`).

## Stash

<kbd>⇧⌘S</kbd> odkłada wszystko do stash. *Odłóż zmiany do stash…* pozwala nazwać stash i wybrać pliki. Stashe są na pasku bocznym i domyślnie w grafie. *Odzyskaj usunięty stash…* odnajduje stash usunięty przez pomyłkę.

## Foldery gałęzi

Gałęzie lokalne o nazwach w rodzaju `prefix/…` są pokazywane na pasku bocznym jako foldery. Możesz to wyłączyć w **Ustawienia ▸ Układ**.
