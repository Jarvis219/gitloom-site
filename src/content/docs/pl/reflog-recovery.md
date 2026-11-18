---
title: "Odzyskiwanie z reflogu"
group: History
order: 17
summary: "Odzyskaj commity, które zniknęły po resecie, rebase lub usunięciu gałęzi, korzystając z reflogu i funkcji Znajdź utracone commity."
updated: 2026-11-18
---

W gicie trudno zgubić commit. Jeśli jakiś zniknął, najpierw spróbuj <kbd>⌘Z</kbd> lub **Edycja ▸ Historia operacji…** (zobacz [Cofanie i ponawianie](/pl/docs/undo-and-redo/)). Jeśli to nie pomoże, zajrzyj do reflogu.

## Reflog

Wybierz **Repozytorium ▸ Reflog…**. Wyświetla on każde położenie, jakie miał HEAD, od najnowszego, więc są tam commity utracone przez reset lub rebase. Wybierz gałąź u góry, aby zamiast tego zobaczyć reflog tej gałęzi, i wpisz tekst w filtrze, aby szukać po SHA, akcji lub opisie.

Reflog gałęzi możesz też otworzyć, klikając ją prawym przyciskiem i wybierając *Pokaż reflog*.

## Utracone commity

**Repozytorium ▸ Znajdź utracone commity…** (lub karta *Utracone commity*) szuka commitów, do których nie prowadzi żadna gałąź, tag ani reflog — na przykład commitów usuniętej gałęzi.

## Przywracanie commita

Zaznacz commit na jednej z list, a następnie:

- *Utwórz gałąź tutaj…* tworzy na nim nową gałąź;
- *Cherry-pick* kopiuje go na bieżącą gałąź;
- *Resetuj bieżącą gałąź tutaj…* przenosi na niego bieżącą gałąź.
