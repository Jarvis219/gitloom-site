---
title: "Czytanie historii"
group: History
order: 12
summary: "Poruszaj się po grafie commitów, wybieraj jego kolumny i zaglądaj do wnętrza dowolnego commita."
updated: 2026-11-18
---

Graf na środku okna pokazuje każdy commit wraz z gałęziami; każda gałąź ma własną, kolorową linię.

![Graf commitów z liniami gałęzi, pasek boczny i szczegóły zaznaczonego commita](/shots/graph-light.png)

## Poruszanie się

- <kbd>↑</kbd> <kbd>↓</kbd> lub <kbd>J</kbd> <kbd>K</kbd> przechodzą do poprzedniego lub następnego commita.
- Kliknięcie z <kbd>⇧</kbd> zaznacza zakres, a kliknięcie z <kbd>⌘</kbd> zaznacza kilka commitów, na przykład aby je porównać, połączyć (squash) lub przenieść przez cherry-pick.
- <kbd>⌘C</kbd> kopiuje SHA zaznaczonego commita.

Zaznacz commit, aby zobaczyć jego pliki i diffy w panelu szczegółów.

## Kolumny

Kliknij prawym przyciskiem nagłówek kolumn grafu, aby pokazać więcej kolumn: autora, datę, SHA, CI i *Zmiany* (dodane i usunięte linie). Ten wybór dotyczy bieżącego repozytorium. **Widok ▸ Kolumny grafu** oraz **Ustawienia ▸ Układ ▸ Kolumny grafu** zmieniają je dla wszystkich repozytoriów.

## Wygląd

W **Ustawienia ▸ Wygląd** możesz wybrać:

- gęstość wierszy (także w **Widok ▸ Gęstość**);
- daty względne dla ostatniego tygodnia lub zawsze daty bezwzględne, własny format daty oraz datę commita lub autora;
- czy stashe pojawiają się w grafie;
- kolory linii: z motywu, przyjazne dla daltonistów lub monochromatyczne;
- awatary: ptaki, kolorowe inicjały, Gravatar, GitHub lub brak.

## Szukanie commita

<kbd>⌘F</kbd> przeszukuje historię i może zawęzić graf do wyników. Zobacz [Wyszukiwanie](/pl/docs/search/).
