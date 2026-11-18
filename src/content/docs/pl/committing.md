---
title: "Tworzenie commitów"
group: Everyday work
order: 7
summary: "Napisz komunikat, popraw commit, dodaj współautorów, obserwuj działanie hooków i obsłuż pliki, których git nie pokazuje."
updated: 2026-11-18
---

Zaznacz wiersz *Niezatwierdzone zmiany*, dodaj do indeksu to, co chcesz (zobacz [Stage pojedynczych wierszy](/pl/docs/staging-single-lines/)), napisz komunikat i naciśnij <kbd>⌘↩</kbd>.

## Formularz commita

- *Popraw* zmienia ostatni commit zamiast tworzyć nowy. Gdy ta opcja jest zaznaczona, na liście pojawiają się też pliki, które ten commit już zmienia.
- *Współautorzy* podpowiada osoby z niedawnej historii, w tym współautorów dodanych wcześniej.
- Podczas tworzenia commita to, co wypisują Twoje hooki (linter `pre-commit`, testy), pojawia się pod komunikatem. Jeśli hook działa dłużej niż minutę, GitLoom o tym informuje i proponuje *Zatrzymaj*.
- Jeden wiersz pokazuje, jako kto tworzysz commit. Ostrzega, gdy e-mail nie pasuje do [profilu](/pl/docs/profiles/) repozytorium lub nie jest jednym z adresów Twojego konta GitHub (GitHub nie powiązałby wtedy commita z Tobą).

Gdy AI jest włączona, <kbd>⌥⌘G</kbd> pisze komunikat za Ciebie (zobacz [Wybór dostawcy](/pl/docs/choosing-a-provider/)).

## Ustawienia komunikatu

W **Ustawienia ▸ Git ▸ Komunikat commita** możesz ustawić szablon, od którego zaczyna się formularz, oraz długości podsumowania, przy których licznik zmienia kolor na żółty i czerwony (domyślnie 50 i 72 znaki). To tylko ostrzeżenie; nic nie jest obcinane. Własny `commit.template` repozytorium ma pierwszeństwo przed szablonem.

## Pliki, których git nie pokazuje

- *Ignoruj* plik, który jest już śledzony, a GitLoom zaproponuje *Przestań śledzić* (`git rm --cached`): plik zniknie z repozytorium w następnym commicie i pozostanie na dysku.
- Kliknij zmieniony plik prawym przyciskiem ▸ *Ukryj zmiany lokalne* w przypadku śledzonego pliku, który zmieniasz celowo, na przykład lokalnej konfiguracji. Wiersz nad listą plików mówi, ile jest ukrytych, a *Pokaż…* przywraca je.
- Na dysku Maca zmiana nazwy `readme.md` na `README.md` w Finderze jest dla gita niewidoczna. GitLoom to zauważa i proponuje *Zarejestruj zmianę nazwy*.

## Cofanie commita

<kbd>⌘Z</kbd> cofa ostatni commit lub poprawkę. Zobacz [Cofanie i ponawianie](/pl/docs/undo-and-redo/).
