---
title: "Dateiverlauf"
group: History
order: 13
summary: "Jeden Commit sehen, der eine Datei geändert hat, auch über Umbenennungen hinweg, und jede ältere Version ansehen oder wiederherstellen."
updated: 2026-11-18
---

Der Dateiverlauf zeigt jeden Commit, der eine Datei geändert hat, und folgt ihr dabei durch Umbenennungen.

## Öffnen

Wähle eine Datei aus und drücke <kbd>⌥⌘Y</kbd> oder wähle **Repository ▸ Dateiverlauf…**. Ist keine Datei ausgewählt, öffnet sich die Befehlspalette, damit du eine auswählen kannst. Im Terminal öffnet ihn auch `gitloom log <file>` (siehe [Das Befehlszeilen-Tool gitloom](/de/docs/the-gitloom-command-line-tool/)).

## Lesen

Jeder Eintrag ist ein Commit, der die Datei geändert hat, mit Autor und Datum. Bei einer Umbenennung siehst du, woher die Datei kam. *Umbenennungen folgen* lässt sich ausschalten. Wähle zwei Versionen aus, um den Diff zwischen ihnen zu sehen.

<kbd>⌘[</kbd> und <kbd>⌘]</kbd> gehen zurück und vor. Esc kehrt zum Graphen zurück.

## Ältere Versionen

Klicke mit der rechten Maustaste auf einen Eintrag für:

- *Diese Version ansehen* oder *Diese Version im externen Editor öffnen*;
- *Im Graphen zeigen*;
- *Blame bei diesem Commit* (siehe [Blame](/de/docs/blame/));
- *Datei auf diese Version zurücksetzen…*. Hat die Datei nicht committete Änderungen, werden sie ersetzt; <kbd>⌘Z</kbd> holt sie zurück.

## Shallow Clones

In einem Shallow Clone endet der Verlauf dort, wo der Clone endet, und die Liste weist darauf hin.
