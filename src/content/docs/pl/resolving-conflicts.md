---
title: "Rozwiązywanie konfliktów"
group: Everyday work
order: 10
summary: "Użyj trójstronnego edytora scalania, aby wybrać stronę dla każdego konfliktu lub linii, edytować wynik i kontynuować."
updated: 2026-11-18
---

Gdy scalenie, rebase, cherry-pick lub ściąganie natrafi na konflikt, operacja się zatrzymuje, a baner wyjaśnia, co się dzieje. Pliki z konfliktami są wymienione w panelu szczegółów.

![Trójstronny edytor konfliktów z Twoją stroną, ich stroną i wynikiem](/shots/conflict-light.png)

## Edytor scalania

Otwórz plik z konfliktem, aby zobaczyć trójstronny edytor scalania: Twoją stronę, ich stronę i wynik.

- Wybierz stronę dla każdego konfliktu lub każdej linii.
- Edytuj wynik bezpośrednio.
- <kbd>⌥⌘↑</kbd> i <kbd>⌥⌘↓</kbd> przechodzą między konfliktami.
- Zaznacz *Cały plik*, aby zobaczyć każdą stronę jako cały plik z konfliktami na miejscu. Kolumny są wyrównane i przewijają się razem.

Gdy plik jest poprawny, kliknij *Zapisz i oznacz jako rozwiązany* (<kbd>⌘S</kbd>).

## Przypadki szczególne

- Konflikt wynikający ze zmiany nazwy (nazwa zmieniona po obu stronach albo zmieniona po jednej, a plik usunięty po drugiej) jest tak opisany.
- Plik binarny można podejrzeć po obu stronach, zanim dokonasz wyboru.
- Baner ostrzega, gdy obie strony różnią się tylko końcami linii (CRLF / LF).

## Własne narzędzie scalania

Plik możesz też otworzyć w zewnętrznym narzędziu scalania. GitLoom używa ustawienia gita `merge.tool` lub narzędzia wybranego w **Ustawienia ▸ Integracje ▸ Narzędzie scalania**.

## Dokończenie lub przerwanie

Gdy wszystkie pliki są rozwiązane, kliknij *Kontynuuj* na banerze. *Pomiń* pomija bieżący commit rebase lub cherry-picka; *Przerwij* przywraca wszystko do poprzedniego stanu. Repozytorium pozostawione w trakcie rebase lub scalania ponownie pokazuje baner po ponownym uruchomieniu GitLoom.
