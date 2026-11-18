---
title: "Die Historie lesen"
group: History
order: 12
summary: "Finde dich im Commit-Graphen zurecht, wähle seine Spalten und sieh dir jeden Commit von innen an."
updated: 2026-11-18
---

Der Graph in der Mitte des Fensters zeigt jeden Commit mit seinen Branches, jeden Branch in einer eigenen farbigen Bahn.

![Der Commit-Graph mit Branch-Bahnen, der Seitenleiste und den Details des ausgewählten Commits](/shots/graph-light.png)

## Navigieren

- <kbd>↑</kbd> <kbd>↓</kbd> oder <kbd>J</kbd> <kbd>K</kbd> springen zum vorherigen oder nächsten Commit.
- <kbd>⇧</kbd>-Klick wählt einen Bereich aus, <kbd>⌘</kbd>-Klick mehrere Commits, etwa um sie zu vergleichen, zu squashen oder per Cherry-Pick zu übernehmen.
- <kbd>⌘C</kbd> kopiert den SHA des ausgewählten Commits.

Wähle einen Commit aus, um seine Dateien und Diffs im Detailbereich zu sehen.

## Spalten

Klicke mit der rechten Maustaste auf die Spaltenüberschrift des Graphen, um weitere Spalten einzublenden: Autor, Datum, SHA, CI und *Änderungen* (hinzugefügte und entfernte Zeilen). Diese Auswahl gilt für das aktuelle Repository. **Darstellung ▸ Graph-Spalten** und **Einstellungen ▸ Layout ▸ Graph-Spalten** ändern sie für alle Repositorys.

## Aussehen

Unter **Einstellungen ▸ Erscheinungsbild** kannst du wählen:

- die Zeilendichte (auch unter **Darstellung ▸ Dichte**);
- relative Daten für die letzte Woche oder immer absolute Daten, ein eigenes Datumsformat sowie Commit- oder Autordatum;
- ob Stashes im Graphen erscheinen;
- die Farben der Bahnen: vom Theme, farbenblindfreundlich oder einfarbig;
- die Avatare: Vögel, farbige Initialen, Gravatar, GitHub oder keine.

## Einen Commit finden

<kbd>⌘F</kbd> durchsucht die Historie und kann den Graphen auf die Treffer filtern. Siehe [Suchen](/de/docs/search/).
