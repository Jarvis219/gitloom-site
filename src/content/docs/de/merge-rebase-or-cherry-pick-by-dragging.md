---
title: "Merge, Rebase oder Cherry-Pick per Drag & Drop"
group: Everyday work
order: 9
summary: "Branches und Commits im Graphen ziehen, um zu mergen, zu rebasen, vorzuspulen, zu cherry-picken oder zu pushen."
updated: 2026-11-18
---

Im Graphen kannst du einen Branch oder Commits an eine andere Stelle ziehen, und GitLoom zeigt ein Menü mit allem, was dieser Drop bewirken kann. Es passiert nichts, bis du eine Wahl triffst.

## Was du ziehen kannst

- **Ein Branch-Label auf einen anderen Branch oder einen Commit**: Merge, Rebase oder Fast-Forward. Das Menü kann auch einen [interaktiven Rebase](/de/docs/interactive-rebase/) starten.
- **Commits auf einen Branch**: Cherry-Pick. Wähle vorher mehrere mit <kbd>⇧</kbd>-Klick oder <kbd>⌘</kbd>-Klick aus.
- **Einen Branch auf ein Remote** in der Seitenleiste: pushen.
- **Einen Branch auf einen anderen Branch**, mit einem GitHub- oder GitLab-Account: einen Pull-Request erstellen (siehe [Pull-Requests und Reviews](/de/docs/pull-requests-and-reviews/)).

## Ohne Ziehen

Für jede Drag-Aktion gibt es denselben Befehl im Kontextmenü. Das Menü „Repository“ enthält außerdem *In aktuellen Branch mergen* und *Aktuellen Branch rebasen auf*.

## Bei Konflikten

Konflikte halten den Vorgang an, und ein Banner erscheint. Löse sie und wähle dann *Fortsetzen*, *Überspringen* oder *Abbrechen*. Siehe [Konflikte lösen](/de/docs/resolving-conflicts/).

## Doch anders entschieden

Ein Merge, Rebase oder Cherry-Pick lässt sich mit <kbd>⌘Z</kbd> widerrufen. Siehe [Widerrufen und wiederholen](/de/docs/undo-and-redo/).
