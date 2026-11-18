---
title: "Cofanie i ponawianie"
group: Everyday work
order: 11
summary: "Cofnij prawie każdą operację Git skrótem ⌘Z, ponów ją skrótem ⇧⌘Z lub wróć do dowolnego punktu w Historii operacji."
updated: 2026-11-18
---

<kbd>⌘Z</kbd> cofa ostatnią operację Git, a <kbd>⇧⌘Z</kbd> ją ponawia. Gdy coś pójdzie nie tak, najpierw spróbuj cofnąć.

## Co można cofnąć

Commit, poprawkę commita (amend), przełączenie (checkout), zmiany gałęzi i tagów, odrzucenie zmian, reset, stash, ściągnięcie, scalenie, rebase, cherry-pick i więcej.

Scalenie, rebase lub reset można ponowić tylko wtedy, gdy katalog roboczy jest czysty.

## Historia operacji

**Edycja ▸ Historia operacji…** wyświetla wszystko, co zrobił GitLoom. Możesz cofnąć zmiany do dowolnego punktu na tej liście.

## Zanim stracisz pracę

Przed cofnięciem, które wyrzuciłoby pracę, na przykład gdy wprowadziłeś nowe zmiany, GitLoom mówi, co się stanie, i pyta o zgodę.

## Tekst i edytor rebase

W polu tekstowym <kbd>⌘Z</kbd> jak zwykle cofa wpisywanie. W edytorze [interaktywnego rebase](/pl/docs/interactive-rebase/) cofa zmiany w planie.

Jeśli commit zniknął nawet po cofnięciu, zobacz [Odzyskiwanie z reflogu](/pl/docs/reflog-recovery/).
