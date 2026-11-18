---
title: "Suchen"
group: History
order: 15
summary: "Finde Commits nach Nachricht, Autor, SHA, Pfad oder Inhalt und spring mit der Befehlspalette und „Schnell öffnen“ überallhin."
updated: 2026-11-18
---

GitLoom bietet drei Wege, Dinge zu finden: „Suchen“ für Commits, die Befehlspalette für alles und „Schnell öffnen“ für Dateien.

## Commits finden

<kbd>⌘F</kbd> durchsucht Commit-Nachrichten, Autoren, SHAs, Dateipfade oder Änderungen (`-S`, die Commits, die ein Stück Text hinzufügen oder entfernen). Die Suche kann den Graphen auf die Treffer filtern. <kbd>⌘G</kbd> und <kbd>⇧⌘G</kbd> springen zum nächsten und vorherigen Treffer.

- Akzente spielen keine Rolle: „nguoi“ findet „người“.
- `re:` nimmt einen regulären Ausdruck für die ganze Nachricht, zum Beispiel `re:^fix(ed)?:`.

## Befehlspalette

<kbd>⌘K</kbd> führt jeden Befehl aus und springt zu Branches, Dateien, Commits, Autoren und Pull-Requests. Beginne mit einem Zeichen, um nur eine Art von Dingen zu durchsuchen:

| Präfix | Durchsucht |
|---|---|
| `>` | Befehle |
| `/` | Dateien |
| `:` | Commits |
| `@` | Autoren |
| `#` | Pull-Requests und Issues |

## Schnell öffnen

<kbd>⌘P</kbd> öffnet jede Datei des Repositorys. Ist sie geöffnet, kannst du sie mit <kbd>⌘E</kbd> bearbeiten (siehe [Dateieditor](/de/docs/file-editor/)).
