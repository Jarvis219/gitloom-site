---
title: "Dodawanie pojedynczych wierszy do indeksu"
group: Everyday work
order: 6
summary: "Dodawaj do indeksu całe pliki, pojedyncze fragmenty lub tylko wybrane wiersze, a resztę zostaw na późniejszy commit."
updated: 2026-11-18
---

Nie musisz commitować pliku w całości. GitLoom pozwala dodać do indeksu cały plik, jeden fragment albo tylko wybrane wiersze.

![Podzielony diff zmienionego pliku z panelem indeksu i formularzem commita](/shots/diff-light.png)

## Dodawanie plików i fragmentów

Zaznacz wiersz *Niezatwierdzone zmiany* na górze grafu. Panel szczegółów wyświetla pliki spoza indeksu i pliki w indeksie. Dodaj do indeksu cały plik albo otwórz jego diff i użyj *Stage Hunk* na jednym bloku zmian. <kbd>⇧⌘A</kbd> dodaje wszystko do indeksu, a <kbd>⌥⇧⌘A</kbd> usuwa wszystko z indeksu.

## Dodawanie wierszy

1. Otwórz diff pliku.
2. Kliknij wiersze, które chcesz dodać. Pasek pokazuje, ile wierszy jest zaznaczonych.
3. Kliknij *Dodaj wiersze do indeksu* lub naciśnij <kbd>S</kbd>.

W diffie indeksu zaznacz wiersze i kliknij *Usuń wiersze z indeksu* (<kbd>U</kbd>), aby je z niego wycofać. ✕ na pasku czyści zaznaczenie.

## Odrzucanie wierszy

W diffie zmian spoza indeksu *Odrzuć wiersze* (<kbd>⌫</kbd>) usuwa zaznaczone wiersze. GitLoom najpierw pyta, a <kbd>⌘Z</kbd> je przywraca (zobacz [Cofanie i ponawianie](/pl/docs/undo-and-redo/)).

## Poruszanie się po diffie

<kbd>⌥↑</kbd> i <kbd>⌥↓</kbd> przechodzą do poprzedniej lub następnej zmiany w pliku; <kbd>⌥⌘↑</kbd> i <kbd>⌥⌘↓</kbd> przechodzą do poprzedniego lub następnego pliku.
