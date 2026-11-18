---
title: "Wyszukiwanie"
group: History
order: 15
summary: "Znajduj commity po opisie, autorze, SHA, ścieżce lub zawartości i przechodź w dowolne miejsce za pomocą palety poleceń i Szybkiego otwierania."
updated: 2026-11-18
---

GitLoom ma trzy sposoby wyszukiwania: Znajdź dla commitów, paletę poleceń dla wszystkiego i Szybkie otwieranie dla plików.

## Szukanie commitów

<kbd>⌘F</kbd> przeszukuje opisy commitów, autorów, SHA, ścieżki plików lub zmiany (`-S`, czyli commity, które dodają lub usuwają dany fragment tekstu). Może zawęzić graf do wyników. <kbd>⌘G</kbd> i <kbd>⇧⌘G</kbd> przechodzą do następnego i poprzedniego wyniku.

- Znaki diakrytyczne nie mają znaczenia: „nguoi” znajduje „người”.
- `re:` przyjmuje wyrażenie regularne dla całego opisu, na przykład `re:^fix(ed)?:`.

## Paleta poleceń

<kbd>⌘K</kbd> uruchamia dowolne polecenie i przechodzi do gałęzi, plików, commitów, autorów i pull requestów. Zacznij od znaku, aby szukać jednego rodzaju elementów:

| Prefiks | Szuka |
|---|---|
| `>` | poleceń |
| `/` | plików |
| `:` | commitów |
| `@` | autorów |
| `#` | pull requestów i zgłoszeń |

## Szybkie otwieranie

<kbd>⌘P</kbd> otwiera dowolny plik repozytorium. Gdy jest otwarty, <kbd>⌘E</kbd> pozwala go edytować (zobacz [Edytor plików](/pl/docs/file-editor/)).
