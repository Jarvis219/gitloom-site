---
title: "Submoduły"
group: Tools
order: 22
summary: "Sprawdzaj stan każdego submodułu, inicjuj je i aktualizuj, otwieraj w osobnej karcie, dodawaj i usuwaj."
updated: 2026-11-18
---

Gdy repozytorium ma submoduły, pasek boczny pokazuje grupę SUBMODUŁY z każdym z nich i jego stanem.

## Czytanie listy

Każdy wiersz pokazuje ścieżkę submodułu i jego stan:

- ✓ i pobrany commit, gdy jest aktualny, albo *zmodyfikowana zawartość* / *nieśledzona zawartość*, gdy ma zmiany;
- *Uaktualnij*, gdy nie jest zsynchronizowany: pobrany commit nie jest tym, który zapisało główne repozytorium (najedź wskaźnikiem, aby zobaczyć oba);
- *Inicjuj*, gdy nie jest jeszcze zainicjowany;
- *konflikt*, gdy zapisany commit jest w konflikcie.

## Praca z submodułem

Kliknij dwukrotnie submoduł, aby otworzyć go w osobnej karcie. Kliknij go prawym przyciskiem, aby wybrać:

- *Otwórz w nowej karcie*;
- *Aktualizuj do zarejestrowanego commita* lub *Aktualizuj do najnowszego zdalnego*;
- *Inicjuj* — dla niezainicjowanego;
- *Pokaż w Finderze*;
- *Usuń submoduł…*.

Jeśli submoduł ma niezatwierdzone zmiany, aktualizacja najpierw pyta. git zatrzymuje się, jeśli Twoje zmiany przeszkadzają; nic nie jest wymuszane.

Aby aktualizować submoduły po każdym ściągnięciu, które przynosi nowe commity, włącz *Aktualizuj submoduły po ściągnięciu* w **Ustawienia ▸ Git**.

## Dodawanie submodułu

**Repozytorium ▸ Zaawansowane ▸ Dodaj submoduł…** pyta o URL, ścieżkę i opcjonalnie gałąź.

## Usuwanie submodułu

*Usuń submoduł…* deinicjuje submoduł i usuwa go z indeksu. Jego dane repozytorium (`.git/modules/<name>`) trafiają do Kosza, więc jego commity nadal można odzyskać. Aby zakończyć, utwórz potem commit. Jeśli submoduł ma niezatwierdzone zmiany, commity, których nie ma w żadnym repozytorium zdalnym, lub stashe, GitLoom najpierw je wyświetla.
