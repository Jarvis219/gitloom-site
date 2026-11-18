---
title: "Das Befehlszeilen-Tool gitloom"
group: Tools
order: 24
summary: "Installiere den Befehl gitloom, um Repositorys, Diffs, Dateiverläufe und Blame aus dem Terminal zu öffnen."
updated: 2026-11-18
---

Der Befehl `gitloom` öffnet GitLoom aus einem Terminal. Bei Bedarf startet er GitLoom.

## Installieren

Wähle **GitLoom ▸ Befehlszeilen-Tool installieren…**. Damit wird ein Link unter `~/.local/bin/gitloom` angelegt, ohne Administratorpasswort. Ist `~/.local/bin` noch nicht in deinem PATH, weist GitLoom dich darauf hin; füge diese Zeile zu `~/.zshrc` hinzu:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

Um es für jede Shell zu installieren, ohne den PATH zu ändern, verwende *In /usr/local/bin installieren…* unter **Einstellungen ▸ Integrationen ▸ Befehlszeilen-Tool**. macOS fragt nach einem Administratorpasswort. Dieser Abschnitt zeigt auch, wo `gitloom` installiert ist.

GitLoom ersetzt nur seinen eigenen Link. Liegt dort bereits eine andere Datei namens `gitloom`, bleibt sie unangetastet, und GitLoom weist dich darauf hin.

## Befehle

| Befehl | Wirkung |
|---|---|
| `gitloom [path]` | Öffnet das Repository, das `path` enthält (Standard: der aktuelle Ordner) |
| `gitloom clone <url> [dir]` | Öffnet den ausgefüllten Dialog zum Klonen |
| `gitloom diff [<rev>]` | Öffnet das Repository, in dem du dich befindest, und wählt `<rev>` aus (Standard: die Zeile mit den nicht committeten Änderungen) |
| `gitloom log <file>` | Öffnet den Verlauf der Datei |
| `gitloom blame <file>[:<line>]` | Öffnet das Blame der Datei, an dieser Zeile |
| `gitloom mcp` | Führt den MCP-Server von GitLoom über stdio aus (siehe [MCP-Server](/de/docs/mcp-server/)) |

Zum Beispiel:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
