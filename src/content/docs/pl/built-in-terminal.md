---
title: "Wbudowany terminal"
group: Tools
order: 19
summary: "Terminal pod grafem, w folderze repozytorium, który odświeża GitLoom i podpowiada polecenia git."
updated: 2026-11-18
---

<kbd>⌃`</kbd> otwiera terminal pod grafem, w folderze repozytorium, z Twoją powłoką logowania. Graf odświeża się, gdy tylko polecenie git w terminalu się zakończy.

## Podpowiedzi i łącza

Podczas wpisywania polecenia git GitLoom podpowiada podpolecenia, gałęzie, zdalne repozytoria i aliasy. <kbd>↑</kbd> <kbd>↓</kbd> wybierają podpowiedź, <kbd>⇥</kbd> lub <kbd>→</kbd> ją wstawia, a Esc zamyka listę.

Kliknij z <kbd>⌘</kbd> to, co jest pod wskaźnikiem: SHA zaznacza dany commit, ścieżka otwiera plik, a URL otwiera przeglądarkę.

## Klawisze

| Klawisze | Działanie |
|---|---|
| <kbd>⌃`</kbd> | Pokaż lub ukryj terminal (ukrywa go, gdy jest aktywny) |
| <kbd>⌃⇧`</kbd> | Nowa sesja terminala |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> | Większy / mniejszy tekst terminala |
| Esc | Przy pustym wierszu poleceń wraca do grafu |

Jeśli przy zamykaniu karty polecenie nadal działa, GitLoom najpierw pyta.

## Ustawienia

**Ustawienia ▸ Integracje ▸ Terminal** zawiera:

- *Integracja z powłoką*: pozwala GitLoomowi wiedzieć, kiedy polecenie się kończy (natychmiastowe odświeżanie, podpowiedzi). Po jej wyłączeniu te funkcje przestają działać. Twoje pliki konfiguracyjne (dotfiles) nie są edytowane w żadnym przypadku.
- *Podpowiadaj polecenia git podczas pisania*, aby wyłączyć tylko podpowiedzi.
- *Bufor przewijania*: ile wierszy przechowuje każda sesja (domyślnie 10 000).
- *Wyświetlaj polecenia git uruchamiane przez GitLoom*: przygaszony wiersz dla każdego polecenia uruchamianego przez aplikację, do nauki gita.
- *Bezpieczne wprowadzanie z klawiatury*: gdy terminal ma fokus klawiatury, inne aplikacje nie mogą odczytać tego, co piszesz.
- *Powłoka* i *Argumenty*: inna powłoka dla nowych sesji, na przykład `/opt/homebrew/bin/fish`. Jeśli ścieżki nie da się uruchomić, używana jest Twoja powłoka logowania.

Zmiany dotyczą nowych sesji terminala. Terminal używa czcionki kodu z **Ustawienia ▸ Wygląd**.

## Twoja zwykła aplikacja terminala

<kbd>⌥⌘T</kbd> otwiera repozytorium w Twojej aplikacji terminala. Wybierz aplikację w **Ustawienia ▸ Integracje ▸ Otwórz w Terminalu używa**.
