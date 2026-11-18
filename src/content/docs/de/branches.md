---
title: "Branches"
group: Everyday work
order: 8
summary: "Branches und Tags erstellen, auschecken und verwalten sowie fetchen, pullen und pushen."
updated: 2026-11-18
---

Branches und Tags findest du in der Seitenleiste und im Graphen. Die meisten Aktionen sind nur einen Rechtsklick entfernt.

## Erstellen und auschecken

<kbd>⌘B</kbd> erstellt einen Branch am ausgewählten Commit. Doppelklicke auf einen Branch, um ihn auszuchecken. Für alles andere klickst du mit der rechten Maustaste auf Branches, Tags und Commits: umbenennen, löschen, Upstream festlegen, taggen, Reset, Revert, Cherry-Pick und mehr.

Das Löschen eines nicht gemergten Branches fragt vorher nach und lässt sich mit <kbd>⌘Z</kbd> widerrufen.

## Fetchen, pullen und pushen

- <kbd>⇧⌘L</kbd> fetcht alle Remotes. GitLoom fetcht außerdem im Hintergrund, standardmäßig alle 5 Minuten (änderbar unter **Einstellungen ▸ Allgemein**). Im Hintergrund wird nie gefetcht, wenn der Akku unter 20 % liegt, im Stromsparmodus oder in teuren Netzwerken.
- <kbd>⇧⌘↓</kbd> pullt. **Repository ▸ Pull mit** wählt eine Strategie für einen einzelnen Pull.
- <kbd>⇧⌘↑</kbd> pusht. Aktiviere bei einem neuen Branch *Upstream festlegen*.

Ein Force-Push erfolgt immer ausdrücklich und verwendet `--force-with-lease`. **Repository ▸ Mit Tags pushen** pusht zusätzlich die annotierten Tags auf den gepushten Commits.

## Aufräumen

**Repository ▸ Gemergte Branches löschen…** entfernt lokale Branches, die bereits in den aktuellen gemergt sind. Geschützte Branches bleiben unangetastet; ihre Muster legst du unter **Einstellungen ▸ Git ▸ Geschützte Branches** fest (zum Beispiel `main master release/*`).

## Stash

<kbd>⇧⌘S</kbd> stasht alles. Mit *Änderungen stashen…* kannst du den Stash benennen und Dateien auswählen. Stashes erscheinen in der Seitenleiste und standardmäßig auch im Graphen. *Gelöschten Stash wiederherstellen…* findet einen Stash, den du versehentlich gelöscht hast.

## Branch-Ordner

Lokale Branches mit Namen wie `prefix/…` erscheinen in der Seitenleiste als Ordner. Das kannst du unter **Einstellungen ▸ Layout** ausschalten.
