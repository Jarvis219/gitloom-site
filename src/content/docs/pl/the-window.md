---
title: "Okno"
group: Getting started
order: 3
summary: "Pasek boczny, graf commitów, panel szczegółów, pasek narzędzi, karty, banery i komunikaty."
updated: 2026-11-18
---

Okno repozytorium ma trzy główne części: pasek boczny po lewej, graf commitów pośrodku i panel szczegółów po prawej lub na dole.

![Okno GitLoom: pasek boczny z gałęziami, graf commitów z kolorowymi liniami gałęzi i szczegóły zaznaczonego commita](/shots/graph-light.png)

## Pasek boczny

Pasek boczny wyświetla gałęzie lokalne i zdalne, tagi, stashe, submoduły i worktree. Przełącznik Referencje/Pliki pokazuje zamiast tego drzewo plików repozytorium. Kliknij gałąź lub tag prawym przyciskiem i wybierz *Przypnij na górze*, aby trzymać je w grupie PRZYPIĘTE nad pozostałymi. Pasek boczny ukryjesz przyciskiem w jego nagłówku lub skrótem <kbd>⌘0</kbd>.

## Graf i panel szczegółów

Graf pokazuje każdy commit wraz z gałęziami. Górny wiersz, *Niezatwierdzone zmiany*, to Twój katalog roboczy. Kliknij prawym przyciskiem nagłówek kolumn, aby pokazać więcej kolumn: autora, datę, SHA, CI i *Zmiany* (dodane i usunięte linie).

Panel szczegółów pokazuje zaznaczony commit z jego plikami i diffami albo obszar indeksu, gdy zaznaczony jest wiersz katalogu roboczego. <kbd>⌥⌘0</kbd> pokazuje go lub ukrywa, a <kbd>⌥⌘L</kbd> przenosi go między prawą stroną a dołem.

## Pasek narzędzi i karty

Pasek narzędzi ma przyciski Cofnij/Ponów, Ściągnij, Wypchnij, Pobierz, Gałąź, Stash, terminal i panele. Przytrzymaj wskaźnik nad przyciskiem przez chwilę, aby zobaczyć, co robi, i jaki ma skrót. Przyciski i ich kolejność wybierzesz w **Ustawienia ▸ Układ**.

Każde repozytorium ma własną kartę. **Repozytorium ▸ Kolor karty** nadaje repozytorium własny kolor, widoczny też jako cienka linia pod paskiem narzędzi. **Plik ▸ Otwórz ostatnie** i menu ikony w Docku wyświetlają ostatnie repozytoria. Karta, na którą nie patrzysz od 10 minut, zwalnia pamięć grafu i wczytuje go ponownie, gdy do niej wrócisz.

## Banery i komunikaty

Baner pod paskiem narzędzi wyjaśnia każdy nietypowy stan, na przykład trwający rebase lub scalenie, konflikty albo odłączony HEAD, i ma przyciski do kontynuowania lub przerwania.

Krótkie komunikaty pojawiają się u góry okna, w kolorze zależnym od rodzaju: zielone, gdy coś zostało zrobione, niebieskie z informacją, pomarańczowe, gdy coś wymaga Twojej uwagi, i czerwone, gdy coś się nie powiodło. Problemy pozostają dłużej; ✕ je zamyka.
