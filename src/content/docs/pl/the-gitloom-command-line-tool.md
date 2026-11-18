---
title: "Narzędzie wiersza poleceń gitloom"
group: Tools
order: 24
summary: "Zainstaluj polecenie gitloom, aby otwierać repozytoria, diffy, historię plików i blame z terminala."
updated: 2026-11-18
---

Polecenie `gitloom` otwiera GitLoom z terminala. W razie potrzeby uruchamia GitLoom.

## Instalacja

Wybierz **GitLoom ▸ Zainstaluj narzędzie wiersza poleceń…**. Dodaje to dowiązanie w `~/.local/bin/gitloom` bez hasła administratora. Jeśli `~/.local/bin` nie ma jeszcze w PATH, GitLoom Cię o tym poinformuje; dodaj ten wiersz do `~/.zshrc`:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

Aby zainstalować je dla każdej powłoki bez zmieniania PATH, użyj *Zainstaluj w /usr/local/bin…* w **Ustawienia ▸ Integracje ▸ Narzędzie wiersza poleceń**. macOS poprosi o hasło administratora. Ta sekcja pokazuje też, gdzie zainstalowano `gitloom`.

GitLoom zastępuje tylko własne dowiązanie. Jeśli istnieje już inny plik o nazwie `gitloom`, pozostaje nietknięty, a GitLoom Cię o tym informuje.

## Polecenia

| Polecenie | Działanie |
|---|---|
| `gitloom [path]` | Otwiera repozytorium zawierające `path` (domyślnie: bieżący folder) |
| `gitloom clone <url> [dir]` | Otwiera wypełnione okno klonowania |
| `gitloom diff [<rev>]` | Otwiera repozytorium, w którym jesteś, i zaznacza `<rev>` (domyślnie: wiersz niezatwierdzonych zmian) |
| `gitloom log <file>` | Otwiera historię pliku |
| `gitloom blame <file>[:<line>]` | Otwiera blame pliku w podanym wierszu |
| `gitloom mcp` | Uruchamia serwer MCP GitLoom na stdio (zobacz [Serwer MCP](/pl/docs/mcp-server/)) |

Na przykład:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
