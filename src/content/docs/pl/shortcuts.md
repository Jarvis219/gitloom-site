---
title: "Skróty klawiszowe"
group: Personalise
order: 36
summary: "Wszystkie skróty klawiszowe w GitLoom i sposób zmiany tych z paska menu."
updated: 2026-11-18
---

35 skrótów oznaczonych ✎ — wszystkie z paska menu — można zmienić w **Ustawienia ▸ Klawiatura**. Pozostałe (systemowe, takie jak <kbd>⌘W</kbd> i <kbd>⌘Z</kbd>, oraz klawisze działające tylko w arkuszu lub edytorze) są stałe. Menu zawsze pokazuje bieżący klawisz, a wszystko, co tu opisano, jest też dostępne w palecie poleceń (<kbd>⌘K</kbd>).

## Wszędzie

| Klawisze | Działanie |
|---|---|
| <kbd>⌘K</kbd> ✎ | Paleta poleceń: `>` polecenia, `/` pliki, `:` commity, `@` autorzy, `#` pull requesty i zgłoszenia |
| <kbd>⌘P</kbd> ✎ | Szybkie otwieranie pliku repozytorium |
| <kbd>⌘F</kbd> / <kbd>⌘G</kbd> / <kbd>⇧⌘G</kbd> ✎ | Szukaj commitów / następny wynik / poprzedni wynik |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Cofnij / ponów ostatnią operację Git (w polu tekstowym: cofnij pisanie) |
| <kbd>⌘T</kbd> ✎ | Nowa karta |
| <kbd>⌘W</kbd> | Zamknij kartę |
| <kbd>⌃⇥</kbd> / <kbd>⌃⇧⇥</kbd> ✎ | Następna / poprzednia karta |
| <kbd>⇧⌘C</kbd> ✎ | Klonuj repozytorium |
| <kbd>⌘O</kbd> ✎ | Otwórz repozytorium (w nowej karcie, jeśli bieżąca już je pokazuje) |
| <kbd>⇧⌘R</kbd> ✎ | Pokaż repozytorium w Finderze |
| <kbd>⌥⌘T</kbd> ✎ | Otwórz repozytorium w aplikacji terminala |
| <kbd>⇧⌘K</kbd> | Launchpad (pull requesty i zgłoszenia z Twoich kont GitHub i GitLab) |
| <kbd>⌥⇧⌘L</kbd> ✎ | Dziennik Git (każde polecenie git uruchomione przez GitLoom) |
| <kbd>⌘,</kbd> | Ustawienia |
| <kbd>⌘?</kbd> | Pomoc GitLoom |

## Repozytorium

| Klawisze | Działanie |
|---|---|
| <kbd>⇧⌘L</kbd> ✎ | Pobierz ze wszystkich repozytoriów zdalnych |
| <kbd>⇧⌘↓</kbd> ✎ | Ściągnij |
| <kbd>⇧⌘↑</kbd> ✎ | Wypchnij |
| <kbd>⌘B</kbd> ✎ | Utwórz gałąź w zaznaczonym commicie |
| <kbd>⇧⌘S</kbd> ✎ | Przenieś wszystkie zmiany do stasha |
| <kbd>⌥⌘Y</kbd> ✎ | Historia zaznaczonego pliku |
| <kbd>⌥⌘B</kbd> ✎ | Blame zaznaczonego pliku |
| <kbd>⌘0</kbd> ✎ | Pokaż lub ukryj pasek boczny |
| <kbd>⌥⌘0</kbd> ✎ | Pokaż lub ukryj panel szczegółów |
| <kbd>⌥⌘L</kbd> ✎ | Przenieś panel szczegółów na dół / z powrotem na prawo |

## Graf, zmiany i diff

| Klawisze | Działanie |
|---|---|
| <kbd>↑</kbd> <kbd>↓</kbd> lub <kbd>J</kbd> <kbd>K</kbd> | Poprzedni / następny commit |
| Kliknięcie z <kbd>⇧</kbd>, kliknięcie z <kbd>⌘</kbd> | Zaznacz zakres / kilka commitów (porównanie, squash, cherry-pick) |
| <kbd>⌘C</kbd> | Kopiuj SHA zaznaczonego commita |
| <kbd>⌘Y</kbd> | Szybki podgląd zaznaczonego pliku |
| <kbd>⇧⌘A</kbd> | Dodaj wszystko do indeksu |
| <kbd>⌥⇧⌘A</kbd> | Usuń wszystko z indeksu |
| <kbd>⌘↩</kbd> | Commit (w opisie commita) |
| <kbd>⌥⌘G</kbd> | Napisz opis commita z pomocą AI (gdy AI jest włączone) |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Poprzednia / następna zmiana w pliku |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Poprzedni / następny plik |

## Edytory

| Klawisze | Działanie |
|---|---|
| <kbd>⌘E</kbd> ✎ | Edytuj otwarty plik |
| <kbd>⌘S</kbd> ✎ | Zapisz |
| <kbd>⌥⌘S</kbd> ✎ | Zapisz i dodaj do indeksu |
| <kbd>⌘L</kbd> ✎ | Przejdź do wiersza |
| <kbd>⌥⌘F</kbd> ✎ | Znajdź i zastąp |
| <kbd>⌘/</kbd> ✎ | Zakomentuj lub odkomentuj zaznaczone wiersze |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> ✎ | Zwiększ / zmniejsz wcięcie zaznaczonych wierszy |
| <kbd>P</kbd> <kbd>R</kbd> <kbd>E</kbd> <kbd>S</kbd> <kbd>F</kbd> <kbd>C</kbd> <kbd>D</kbd> | Interaktywny rebase: pick, reword, edit, squash, fixup, fixup -C, drop dla zaznaczonych wierszy |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Interaktywny rebase: przenieś zaznaczone wiersze (z *Zachowaj scalenia* tylko w obrębie ich gałęzi) |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Interaktywny rebase: cofnij / ponów zmianę planu (git nie jest ruszany, dopóki nie zaczniesz) |
| <kbd>⌘↩</kbd> | Interaktywny rebase: rozpocznij rebase (lub zapisz pozostały plan) |
| Esc | Interaktywny rebase: zamknij edytor bez wykonywania czegokolwiek |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Konflikty scalania: poprzedni / następny konflikt |
| <kbd>⌘S</kbd> | Konflikty scalania: zapisz i oznacz plik jako rozwiązany |
| <kbd>⌘[</kbd> / <kbd>⌘]</kbd> | Historia pliku: wstecz / dalej |

## Terminal

| Klawisze | Działanie |
|---|---|
| <kbd>⌃`</kbd> ✎ | Pokaż lub ukryj terminal (ukrywa go, gdy ma fokus) |
| <kbd>⌃⇧`</kbd> ✎ | Nowa sesja terminala |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> ✎ | Większy / mniejszy tekst terminala |
| <kbd>⇥</kbd> lub <kbd>→</kbd> | Wstaw zaznaczoną sugestię |
| <kbd>↑</kbd> <kbd>↓</kbd> | Wybierz sugestię |
| Esc | Zamknij sugestie; przy pustym znaku zachęty wróć do grafu (tak samo działa ukrycie terminala) |
| Kliknięcie z <kbd>⌘</kbd> | Otwórz to, co jest pod wskaźnikiem: SHA zaznacza commit, ścieżka otwiera plik, URL otwiera przeglądarkę |
