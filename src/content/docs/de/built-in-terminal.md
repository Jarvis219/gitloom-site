---
title: "Integriertes Terminal"
group: Tools
order: 19
summary: "Ein Terminal unter dem Graphen, im Ordner des Repositorys, das GitLoom aktualisiert und git-Befehle vorschlägt."
updated: 2026-11-18
---

<kbd>⌃`</kbd> öffnet unter dem Graphen ein Terminal im Ordner des Repositorys, mit deiner eigenen Login-Shell. Der Graph wird aktualisiert, sobald ein git-Befehl darin fertig ist.

## Vorschläge und Links

Während du einen git-Befehl tippst, schlägt GitLoom Unterbefehle, Branches, Remotes und Aliase vor. Mit <kbd>↑</kbd> <kbd>↓</kbd> wählst du einen Vorschlag, <kbd>⇥</kbd> oder <kbd>→</kbd> fügt ihn ein, und Esc schließt die Liste.

<kbd>⌘</kbd>-Klick auf das, was unter dem Zeiger liegt: Ein SHA wählt diesen Commit aus, ein Pfad öffnet die Datei und eine URL öffnet den Browser.

## Tasten

| Tasten | Aktion |
|---|---|
| <kbd>⌃`</kbd> | Terminal ein- oder ausblenden (blendet es aus, wenn es den Fokus hat) |
| <kbd>⌃⇧`</kbd> | Neue Terminal-Sitzung |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> | Terminaltext größer / kleiner |
| Esc | Bei leerer Eingabezeile zurück zum Graphen |

Läuft beim Schließen des Tabs noch ein Befehl, fragt GitLoom vorher nach.

## Einstellungen

**Einstellungen ▸ Integrationen ▸ Terminal** enthält:

- *Shell-Integration*: Damit erkennt GitLoom, wann ein Befehl fertig ist (sofortige Aktualisierung, Vorschläge). Schaltest du sie aus, entfällt beides. Deine Dotfiles werden in keinem Fall bearbeitet.
- *git-Befehle beim Tippen vorschlagen*, um nur die Vorschläge auszuschalten.
- *Scrollback*: wie viele Zeilen jede Sitzung behält (standardmäßig 10.000).
- *Von GitLoom ausgeführte git-Befehle anzeigen*: eine abgedunkelte Zeile für jeden Befehl, den die App ausführt – so lernst du git.
- *Sichere Tastatureingabe*: Solange ein Terminal die Tastatur hat, können andere Apps nicht mitlesen, was du tippst.
- *Shell* und *Argumente*: eine andere Shell für neue Sitzungen, etwa `/opt/homebrew/bin/fish`. Lässt sich ein Pfad nicht ausführen, wird deine Login-Shell verwendet.

Änderungen gelten für neue Terminal-Sitzungen. Das Terminal verwendet die Code-Schrift aus **Einstellungen ▸ Erscheinungsbild**.

## Deine gewohnte Terminal-App

<kbd>⌥⌘T</kbd> öffnet das Repository stattdessen in deiner Terminal-App. Welche App das ist, wählst du unter **Einstellungen ▸ Integrationen ▸ „Im Terminal öffnen“ verwendet**.
