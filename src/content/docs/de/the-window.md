---
title: "Das Fenster"
group: Getting started
order: 3
summary: "Die Seitenleiste, der Commit-Graph, der Detailbereich, die Symbolleiste, Tabs, Banner und Meldungen."
updated: 2026-11-18
---

Ein Repository-Fenster hat drei Hauptteile: links die Seitenleiste, in der Mitte den Commit-Graphen und rechts oder unten den Detailbereich.

![Das GitLoom-Fenster: Seitenleiste mit Branches, der Commit-Graph mit farbigen Branch-Bahnen und die Details des ausgewählten Commits](/shots/graph-light.png)

## Seitenleiste

Die Seitenleiste listet lokale und entfernte Branches, Tags, Stashes, Submodule und Worktrees. Der Umschalter „Refs“/„Dateien“ zeigt stattdessen den Dateibaum des Repositorys. Klicke mit der rechten Maustaste auf einen Branch oder Tag ▸ *Oben anheften*, um ihn in einer Gruppe ANGEHEFTET über den übrigen zu halten. Blende die Seitenleiste mit der Taste in ihrer Kopfzeile oder mit <kbd>⌘0</kbd> aus.

## Graph und Detailbereich

Der Graph zeigt jeden Commit mit seinen Branches. Die oberste Zeile, *Uncommitted changes*, ist dein Arbeitsverzeichnis. Klicke mit der rechten Maustaste auf die Spaltenüberschrift, um weitere Spalten einzublenden: Autor, Datum, SHA, CI und *Änderungen* (hinzugefügte und entfernte Zeilen).

Der Detailbereich zeigt den ausgewählten Commit mit seinen Dateien und Diffs oder den Staging-Bereich, wenn die Zeile des Arbeitsverzeichnisses ausgewählt ist. <kbd>⌥⌘0</kbd> blendet ihn ein oder aus, und <kbd>⌥⌘L</kbd> verschiebt ihn zwischen rechts und unten.

## Symbolleiste und Tabs

Die Symbolleiste hat Tasten für Widerrufen/Wiederholen, Pull, Push, Fetchen, Branch, Stashen, Terminal und die Bereiche. Bewege den Zeiger kurz über eine Taste, um zu sehen, was sie tut und welchen Kurzbefehl sie hat. Unter **Einstellungen ▸ Layout** kannst du die Tasten auswählen und anordnen.

Jedes Repository hat einen eigenen Tab. **Repository ▸ Tab-Farbe** gibt einem Repository eine eigene Farbe, die auch als dünne Linie unter der Symbolleiste erscheint. **Datei ▸ Benutzte Dokumente** und das Menü des Dock-Symbols listen zuletzt benutzte Repositorys. Ein Tab, den du 10 Minuten lang nicht angesehen hast, gibt den Speicher seines Graphen frei und lädt ihn neu, wenn du zurückkommst.

## Banner und Meldungen

Ein Banner unter der Symbolleiste erklärt jeden ungewöhnlichen Zustand, etwa einen laufenden Rebase oder Merge, Konflikte oder einen losgelösten HEAD (detached HEAD), und bietet die Tasten zum Fortsetzen oder Abbrechen.

Kurze Meldungen erscheinen oben im Fenster, nach Art gefärbt: grün, wenn etwas erledigt ist, blau für Informationen, orange, wenn etwas deine Aufmerksamkeit braucht, und rot, wenn etwas fehlgeschlagen ist. Probleme bleiben länger stehen; ✕ schließt sie.
