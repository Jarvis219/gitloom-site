---
title: "Einzelne Zeilen stagen"
group: Everyday work
order: 6
summary: "Stage ganze Dateien, einzelne Hunks oder nur die Zeilen, die du auswählst, und heb dir den Rest für einen späteren Commit auf."
updated: 2026-11-18
---

Du musst eine Datei nicht auf einmal committen. Mit GitLoom stagst du eine ganze Datei, einen Hunk oder nur die Zeilen, die du auswählst.

![Ein geteilter Diff einer geänderten Datei mit dem Staging-Bereich und dem Commit-Formular](/shots/diff-light.png)

## Dateien und Hunks stagen

Wähle oben im Graphen die Zeile *Uncommitted changes* aus. Der Detailbereich listet deine nicht gestagten und gestagten Dateien. Stage eine ganze Datei, oder öffne ihren Diff und verwende *Stage Hunk* für einen Block von Änderungen. <kbd>⇧⌘A</kbd> stagt alles, <kbd>⌥⇧⌘A</kbd> unstagt alles.

## Zeilen stagen

1. Öffne den Diff der Datei.
2. Klicke auf die gewünschten Zeilen. Eine Leiste zeigt, wie viele Zeilen ausgewählt sind.
3. Klicke auf *Zeilen stagen* oder drücke <kbd>S</kbd>.

Wähle im gestagten Diff Zeilen aus und klicke auf *Zeilen unstagen* (<kbd>U</kbd>), um sie wieder herauszunehmen. Das ✕ in der Leiste hebt die Auswahl auf.

## Zeilen verwerfen

Im nicht gestagten Diff wirft *Zeilen verwerfen* (<kbd>⌫</kbd>) die ausgewählten Zeilen weg. GitLoom fragt vorher, und <kbd>⌘Z</kbd> holt sie zurück (siehe [Widerrufen und Wiederholen](/de/docs/undo-and-redo/)).

## Im Diff navigieren

<kbd>⌥↑</kbd> und <kbd>⌥↓</kbd> springen zur vorherigen oder nächsten Änderung in der Datei; <kbd>⌥⌘↑</kbd> und <kbd>⌥⌘↓</kbd> springen zur vorherigen oder nächsten Datei.
