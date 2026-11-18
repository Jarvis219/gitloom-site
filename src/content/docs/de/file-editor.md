---
title: "Dateieditor"
group: Tools
order: 20
summary: "Jede Datei des Repositorys in GitLoom ansehen und bearbeiten, dann in einem Schritt sichern und stagen."
updated: 2026-11-18
---

GitLoom kann die Dateien deines Repositorys anzeigen und bearbeiten, sodass du für eine kleine Korrektur keine andere App brauchst.

## Eine Datei öffnen

- <kbd>⌘P</kbd> (Schnell öffnen) öffnet jede Datei des Repositorys.
- Der Umschalter Refs/Dateien in der Seitenleiste zeigt den Dateibaum. Dort kannst du auch *Neue Datei…* oder *Neuer Ordner…* anlegen, *Umbenennen…* oder *In den Papierkorb legen* wählen und *Ignorierte Dateien anzeigen*.

Eine Datei wird zum Ansehen geöffnet. Drücke <kbd>⌘E</kbd> oder klicke auf *Datei bearbeiten*, um sie zu bearbeiten. Esc kehrt zum Graphen zurück.

## Tasten zum Bearbeiten

| Tasten | Aktion |
|---|---|
| <kbd>⌘S</kbd> | Sichern |
| <kbd>⌥⌘S</kbd> | Sichern und stagen |
| <kbd>⌘L</kbd> | Gehe zu Zeile |
| <kbd>⌥⌘F</kbd> | Suchen und ersetzen |
| <kbd>⌘/</kbd> | Ausgewählte Zeilen auskommentieren oder wieder einkommentieren |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> | Ausgewählte Zeilen einrücken / ausrücken |

Zu den Optionen des Editors gehören *Zeilen umbrechen*, *Leerzeichen und Tabs anzeigen*, *Klammern und Anführungszeichen schließen* und *Randleiste vergleicht mit HEAD*. Code-Schrift und Schriftgröße legst du unter **Einstellungen ▸ Erscheinungsbild** fest.

## Wenn sich die Datei auf der Festplatte ändert

Ändert eine andere App die Datei, während du ungesicherte Änderungen hast, weist GitLoom dich darauf hin und bietet *Meine behalten*, *Neu laden* oder *Vergleichen* an. Bei einer Datei mit Konfliktmarkern wird angezeigt, dass Sichern sie nicht als gelöst markiert; nutze dafür den [Konflikteditor](/de/docs/resolving-conflicts/).

GitLoom wartet außerdem mit der Installation eines Updates, solange eine Datei ungesicherte Änderungen hat.

## Ein anderer Editor

*Im externen Editor öffnen* öffnet die Datei in der App, die unter **Einstellungen ▸ Integrationen ▸ Dateien öffnen mit** gewählt ist. Ein *Eigener Befehl* dort hat Vorrang; `$FILE`, `$LINE` und `$REPO` werden eingesetzt, zum Beispiel:

```sh
code -g $FILE:$LINE
```
