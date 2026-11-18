---
title: "Blame"
group: History
order: 14
summary: "Zobacz, kto ostatnio zmienił każdy wiersz pliku, i prześledź wiersz wstecz przez starsze commity."
updated: 2026-11-18
---

Blame pokazuje dla każdego wiersza pliku commit, który zmienił go jako ostatni.

## Otwieranie

Zaznacz plik i naciśnij <kbd>⌥⌘B</kbd> albo wybierz **Repozytorium ▸ Blame…**. Z terminala `gitloom blame <file>:<line>` otwiera go na danym wierszu (zobacz [Narzędzie wiersza poleceń gitloom](/pl/docs/the-gitloom-command-line-tool/)). W [historii pliku](/pl/docs/file-history/) polecenie *Blame w tym commicie* pokazuje plik w ówczesnej postaci.

## Śledzenie wiersza wstecz

Kliknij wiersz, aby zobaczyć jego commit, a następnie:

- *Pokaż commit* zaznacza ten commit w grafie;
- *Blame rodzica* pokazuje blame sprzed tego commita, aby sprawdzić, kto napisał ten wiersz wcześniej.

## Opcje

Pasek nad plikiem zawiera:

- *Ignoruj białe znaki*;
- *Mapa cieplna*, która koloruje wiersze według wieku;
- w menu *Więcej*: *Wykrywaj wiersze przeniesione w obrębie pliku (-M)* i *Wykrywaj wiersze skopiowane z innych plików (-C)*;
- *Ignorowane rewizje*, gdy repozytorium ma plik `.git-blame-ignore-revs` (lub ustawiono `blame.ignoreRevsFile`). Pomija commity tam wymienione, na przykład zmiany formatowania.

W przypadku bardzo długiego pliku blame może chwilę potrwać. GitLoom najpierw o tym uprzedza, wiersze uzupełniają się w miarę odnajdywania, a widok możesz opuścić w każdej chwili.
