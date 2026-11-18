---
title: "Interaktiver Rebase"
group: History
order: 16
summary: "Commits in einem visuellen Plan neu ordnen, umformulieren, squashen, bearbeiten oder entfernen – es passiert nichts, bis du startest."
updated: 2026-11-18
---

Ein interaktiver Rebase schreibt eine Reihe von Commits neu. GitLoom zeigt den Plan als Liste, die du bearbeitest; am Repository ändert sich nichts, bis du startest.

## Den Editor öffnen

- Rechtsklick auf einen Commit ▸ *Interaktiver Rebase ab hier…*.
- Oder zieh einen Branch auf einen anderen und wähle *Interaktiver Rebase*.
- Sind mehrere Commits ausgewählt, öffnet *Ausgewählte Commits interaktiv rebasen…* den Editor mit diesen Commits ausgewählt.

Das funktioniert auch ab dem allerersten Commit (`--root`). Der Editor ersetzt den Graphen.

## Den Plan bearbeiten

Jede Zeile ist ein Commit, der älteste steht oben. Lege seine Aktion über das Menü oder mit einer Taste fest:

| Taste | Aktion |
|---|---|
| <kbd>P</kbd> | pick |
| <kbd>R</kbd> | reword |
| <kbd>E</kbd> | edit |
| <kbd>S</kbd> | squash |
| <kbd>F</kbd> | fixup |
| <kbd>C</kbd> | fixup -C |
| <kbd>D</kbd> | drop |

Zieh Zeilen oder nutze <kbd>⌥↑</kbd> und <kbd>⌥↓</kbd>, um die Reihenfolge zu ändern. <kbd>⌘Z</kbd> widerruft eine Änderung am Plan.

- Neue Nachrichten für reword lassen sich vorab schreiben, sodass der Rebase ohne Unterbrechung durchläuft.
- Das Menü einer Zeile enthält *Befehl danach einfügen…*, um an dieser Stelle einen Befehl auszuführen (eine `exec`-Zeile, etwa ein Test, der den Rebase stoppt, wenn er fehlschlägt).
- Branches, die auf den rebasten Commits aufbauen, wandern mit (`--update-refs`), es sei denn, du deaktivierst das.
- Merges im Bereich werden standardmäßig abgeflacht. Aktiviere *Merges beibehalten*, um sie zu behalten (`--rebase-merges`). Der Plan zeigt dann auch, wo jede Seite eines Merges beginnt und wo der Merge erneut erstellt wird, und Commits lassen sich nur innerhalb ihrer eigenen Seite verschieben.

## Starten oder abbrechen

<kbd>⌘↩</kbd> startet, Esc bricht ab. Danach ist der gesamte Rebase ein einziger Widerrufen-Schritt.

## Schnellere Änderungen

Ohne den Editor zu öffnen:

- mehrere benachbarte Commits auswählen ▸ *N Commits squashen* (läuft sofort, die Nachrichten werden zusammengeführt, die älteste zuerst; mit *…und Nachricht bearbeiten* schreibst du sie selbst) oder *N Commits entfernen…*;
- Rechtsklick auf einen Commit ▸ *Nachricht bearbeiten…*, *Commit entfernen…*, *Nach oben/Nach unten*.
