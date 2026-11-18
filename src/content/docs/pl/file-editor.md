---
title: "Edytor plików"
group: Tools
order: 20
summary: "Przeglądaj i edytuj dowolny plik repozytorium w GitLoomie, a potem zachowaj go i dodaj do indeksu jednym krokiem."
updated: 2026-11-18
---

GitLoom potrafi wyświetlać i edytować pliki Twojego repozytorium, więc drobna poprawka nie wymaga innej aplikacji.

## Otwieranie pliku

- <kbd>⌘P</kbd> (Szybkie otwieranie) otwiera dowolny plik repozytorium.
- Przełącznik Referencje/Pliki na pasku bocznym pokazuje drzewo plików. Możesz tam też wybrać *Nowy plik…* lub *Nowy folder…*, *Zmień nazwę…* lub *Przenieś do Kosza* oraz *Pokaż pliki ignorowane*.

Plik otwiera się do podglądu. Naciśnij <kbd>⌘E</kbd> lub kliknij *Edytuj plik*, aby go edytować. Esc wraca do grafu.

## Klawisze edycji

| Klawisze | Działanie |
|---|---|
| <kbd>⌘S</kbd> | Zachowaj |
| <kbd>⌥⌘S</kbd> | Zachowaj i dodaj do indeksu |
| <kbd>⌘L</kbd> | Przejdź do wiersza |
| <kbd>⌥⌘F</kbd> | Znajdź i zastąp |
| <kbd>⌘/</kbd> | Zakomentuj lub odkomentuj zaznaczone wiersze |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> | Zwiększ / zmniejsz wcięcie zaznaczonych wierszy |

Opcje edytora obejmują *Zawijaj wiersze*, *Pokaż spacje i tabulatory*, *Domykaj nawiasy i cudzysłowy* oraz *Margines porównuje z HEAD*. Czcionkę kodu i jej rozmiar ustawisz w **Ustawienia ▸ Wygląd**.

## Gdy plik zmieni się na dysku

Jeśli inna aplikacja zmieni plik, gdy masz niezachowane zmiany, GitLoom Cię o tym informuje i proponuje *Zachowaj moje*, *Wczytaj ponownie* lub *Porównaj*. Plik ze znacznikami konfliktów informuje, że jego zachowanie nie oznacza konfliktu jako rozwiązanego; do tego służy [edytor konfliktów](/pl/docs/resolving-conflicts/).

GitLoom wstrzymuje też instalację aktualizacji, dopóki plik ma niezachowane zmiany.

## Inny edytor

*Otwórz w zewnętrznym edytorze* otwiera plik w aplikacji wybranej w **Ustawienia ▸ Integracje ▸ Otwieraj pliki za pomocą**. *Własne polecenie* ustawione w tym miejscu ma pierwszeństwo; `$FILE`, `$LINE` i `$REPO` są uzupełniane, na przykład:

```sh
code -g $FILE:$LINE
```
