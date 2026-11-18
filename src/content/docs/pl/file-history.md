---
title: "Historia pliku"
group: History
order: 13
summary: "Zobacz każdy commit, który zmienił plik, z uwzględnieniem zmian nazw, i wyświetl lub przywróć dowolną starszą wersję."
updated: 2026-11-18
---

Historia pliku pokazuje każdy commit, który zmienił dany plik, śledząc go także przez zmiany nazw.

## Otwieranie

Zaznacz plik i naciśnij <kbd>⌥⌘Y</kbd> albo wybierz **Repozytorium ▸ Historia pliku…**. Jeśli żaden plik nie jest zaznaczony, otworzy się paleta poleceń, w której go wybierzesz. Z terminala otwiera ją też `gitloom log <file>` (zobacz [Narzędzie wiersza poleceń gitloom](/pl/docs/the-gitloom-command-line-tool/)).

## Czytanie historii

Każdy wpis to commit, który zmienił plik, z autorem i datą. Przy zmianie nazwy widać, skąd plik pochodzi. Opcję *Śledź zmiany nazw* można wyłączyć. Zaznacz dwie wersje, aby zobaczyć diff między nimi.

<kbd>⌘[</kbd> i <kbd>⌘]</kbd> przechodzą wstecz i naprzód. Esc wraca do grafu.

## Starsze wersje

Kliknij wpis prawym przyciskiem, aby wybrać:

- *Wyświetl tę wersję* lub *Otwórz tę wersję w zewnętrznym edytorze*;
- *Pokaż w grafie*;
- *Blame w tym commicie* (zobacz [Blame](/pl/docs/blame/));
- *Przywróć plik do tej wersji…*. Jeśli plik ma niezatwierdzone zmiany, zostaną zastąpione; <kbd>⌘Z</kbd> je przywraca.

## Płytkie klony

W płytkim klonie historia kończy się tam, gdzie klon, i lista o tym informuje.
