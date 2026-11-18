---
title: "Blame"
group: History
order: 14
summary: "Sehen, wer jede Zeile einer Datei zuletzt geändert hat, und eine Zeile durch ältere Commits zurückverfolgen."
updated: 2026-11-18
---

Blame zeigt für jede Zeile einer Datei den Commit, der sie zuletzt geändert hat.

## Öffnen

Wähle eine Datei aus und drücke <kbd>⌥⌘B</kbd> oder wähle **Repository ▸ Blame…**. Im Terminal öffnet `gitloom blame <file>:<line>` Blame an dieser Zeile (siehe [Das Befehlszeilen-Tool gitloom](/de/docs/the-gitloom-command-line-tool/)). Im [Dateiverlauf](/de/docs/file-history/) zeigt *Blame bei diesem Commit* die Datei so, wie sie damals war.

## Eine Zeile zurückverfolgen

Klicke auf eine Zeile, um ihren Commit zu sehen, und dann:

- *Commit anzeigen* wählt diesen Commit im Graphen aus;
- *Blame des Eltern-Commits* zeigt das Blame von kurz vor diesem Commit, damit du siehst, wer die Zeile davor geschrieben hat.

## Optionen

Die Leiste über der Datei enthält:

- *Leerzeichen ignorieren*;
- *Heatmap*, die Zeilen nach ihrem Alter einfärbt;
- unter *Mehr*: *Innerhalb der Datei verschobene Zeilen erkennen (-M)* und *Aus anderen Dateien kopierte Zeilen erkennen (-C)*;
- *Revisionen ignorieren*, wenn das Repository eine Datei `.git-blame-ignore-revs` hat (oder `blame.ignoreRevsFile` gesetzt ist). Damit werden die dort aufgeführten Commits übersprungen, etwa reine Formatierungsänderungen.

Bei sehr langen Dateien kann Blame eine Weile dauern. GitLoom weist dich vorher darauf hin, die Zeilen füllen sich, sobald sie gefunden werden, und du kannst jederzeit abbrechen.
