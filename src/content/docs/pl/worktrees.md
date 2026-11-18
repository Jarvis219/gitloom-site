---
title: "Worktree"
group: Tools
order: 21
summary: "Przełącz drugą gałąź w osobnym folderze, aby pracować nad nią bez odkładania bieżącej pracy do stasha."
updated: 2026-11-18
---

Worktree to drugi folder roboczy tego samego repozytorium. Możesz w nim pracować nad inną gałęzią bez odkładania do stasha tego, co robisz w pierwszym.

## Tworzenie

Kliknij gałąź na pasku bocznym prawym przyciskiem i wybierz *Otwórz w nowym worktree…*. Wybierz folder i zaznacz *Utwórz nową gałąź z…*, jeśli chcesz nową gałąź. *Utwórz i otwórz* tworzy worktree i otwiera go w nowej karcie.

## Grupa WORKTREE

Gdy repozytorium ma więcej niż jeden worktree, pasek boczny pokazuje grupę WORKTREE. Każdy wiersz pokazuje gałąź worktree; ten w bieżącej karcie jest oznaczony jako *ta karta*. Worktree, którego folder zniknął, jest oznaczony jako *brak*, a *Przytnij* je zapomina.

Kliknij worktree prawym przyciskiem, aby wybrać:

- *Otwórz w nowej karcie* lub *Otwórz*;
- *Pokaż w Finderze*;
- *Zablokuj* lub *Odblokuj*;
- *Usuń worktree…*.

## Gałąź w innym worktree

Git pozwala, by gałąź była przełączona tylko w jednym worktree naraz. Jeśli przełączysz się na gałąź otwartą gdzie indziej, GitLoom zaproponuje *Otwórz tamten worktree* albo ten sam commit w tym worktree bez gałęzi.

## Usuwanie

*Usuń worktree…* usuwa folder worktree; gałąź pozostaje. Nie można usunąć worktree otwartego w bieżącej karcie.

> **Caution** Jeśli worktree ma niezatwierdzone zmiany, GitLoom o tym informuje, a zmiany zostaną usunięte razem z folderem, gdy wybierzesz *Usuń mimo to*.
