---
title: "Serwer MCP"
group: Tools
order: 25
summary: "Pozwól narzędziom AI, takim jak Claude Code, Cursor czy VS Code, czytać Twoje repozytoria przez GitLoom i opcjonalnie wprowadzać bezpieczne zmiany."
updated: 2026-11-18
---

Inne narzędzia AI (Claude Code, Claude Desktop, Cursor, VS Code i inne) mogą pracować z Twoimi repozytoriami przez serwer MCP GitLoom. Jest wyłączony, dopóki go nie włączysz.

## Włączanie

W **Ustawienia ▸ Integracje ▸ Serwer MCP** ustaw *Zewnętrzne narzędzia AI mogą* na jedną z opcji:

- *Nic nie rób (wyłączone)*;
- *Odczyt: status, historia, diffy, blame*;
- *Odczyt i zmiany: także commit, branch, stash, pull, push*.

Następnie podłącz swoje narzędzie. W przypadku Claude Code skopiuj pokazany tam wiersz i uruchom go w terminalu; wygląda tak:

```sh
claude mcp add gitloom -- "/Applications/GitLoom.app/Contents/Helpers/gitloom-mcp"
```

W przypadku innych narzędzi skopiuj pokazany tam JSON do konfiguracji MCP danego narzędzia. GitLoom nigdy nie edytuje plików innych narzędzi. Serwer uruchamia też polecenie `gitloom mcp` (zobacz [Narzędzie wiersza poleceń gitloom](/pl/docs/the-gitloom-command-line-tool/)).

## Odczyt

Narzędzia widzą status, historię, diffy, blame, gałęzie i stashe repozytoriów, które są otwarte lub znajdują się na liście ostatnich na stronie startowej. Gdy GitLoom działa, mogą też zapytać, na co właśnie patrzysz, na przykład o zaznaczony commit lub otwarty plik. Nie mogą niczego zmienić.

## Odczyt i zmiany

Narzędzia mogą też dodawać do indeksu, commitować, tworzyć i przełączać gałęzie, używać stasha, pobierać (fetch), ściągać (tylko fast-forward) i wypychać — w repozytoriach otwartych w karcie, gdy GitLoom działa. Każda zmiana pojawia się w oknie z nazwą narzędzia i przyciskiem *Cofnij* oraz w Historii operacji.

Gdy opcja *Pytaj przed wypchnięciem* jest włączona, wypchnięcie czeka na Twoją odpowiedź w oknie repozytorium; po 60 sekundach zostaje odrzucone.

Żadne narzędzie nie może wymusić wypchnięcia (force-push), zrobić resetu, odrzucić zmian, usunąć niczego ani przepisać historii.

## Pull requesty, zgłoszenia i CI

Gdy opcja *Pull requesty, zgłoszenia i CI przez moje konta* jest włączona, narzędzia mogą czytać pull requesty, zgłoszenia i uruchomienia CI repozytorium przez konto połączone w GitLoom. W trybie *Odczyt i zmiany* mogą też otworzyć pull request dla bieżącej gałęzi i dodać do niego komentarz. Nigdy nie widzą Twojego tokenu i nie mogą niczego scalić, zatwierdzić ani zamknąć.

Ustawienia pokazują ostatnie wywołania w sekcji *Ostatnia aktywność*.
