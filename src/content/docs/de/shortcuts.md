---
title: "Tastaturkurzbefehle"
group: Personalise
order: 36
summary: "Alle Tastaturkurzbefehle von GitLoom und wie du die in der Menüleiste änderst."
updated: 2026-11-18
---

Die 35 mit ✎ markierten Kurzbefehle – alle, die in der Menüleiste stehen – lassen sich unter **Einstellungen ▸ Tastatur** ändern. Die übrigen (Systemkurzbefehle wie <kbd>⌘W</kbd> und <kbd>⌘Z</kbd> sowie Tasten, die nur in einem Sheet oder Editor funktionieren) sind fest. Das Menü zeigt immer die aktuelle Taste, und alles hier ist auch in der Befehlspalette (<kbd>⌘K</kbd>) verfügbar.

## Überall

| Tasten | Aktion |
|---|---|
| <kbd>⌘K</kbd> ✎ | Befehlspalette: `>` Befehle, `/` Dateien, `:` Commits, `@` Autoren, `#` Pull-Requests und Issues |
| <kbd>⌘P</kbd> ✎ | Eine Datei des Repositorys schnell öffnen |
| <kbd>⌘F</kbd> / <kbd>⌘G</kbd> / <kbd>⇧⌘G</kbd> ✎ | Commits suchen / nächster Treffer / vorheriger Treffer |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Letzten Git-Vorgang widerrufen / wiederholen (in einem Textfeld: Eingabe widerrufen) |
| <kbd>⌘T</kbd> ✎ | Neuer Tab |
| <kbd>⌘W</kbd> | Tab schließen |
| <kbd>⌃⇥</kbd> / <kbd>⌃⇧⇥</kbd> ✎ | Nächster / vorheriger Tab |
| <kbd>⇧⌘C</kbd> ✎ | Ein Repository klonen |
| <kbd>⌘O</kbd> ✎ | Ein Repository öffnen (in einem neuen Tab, wenn dieser schon eines zeigt) |
| <kbd>⇧⌘R</kbd> ✎ | Das Repository im Finder zeigen |
| <kbd>⌥⌘T</kbd> ✎ | Das Repository in deiner Terminal-App öffnen |
| <kbd>⇧⌘K</kbd> | Launchpad (Pull-Requests und Issues deiner GitHub- und GitLab-Accounts) |
| <kbd>⌥⇧⌘L</kbd> ✎ | Git-Log (jeder Git-Befehl, den GitLoom ausgeführt hat) |
| <kbd>⌘,</kbd> | Einstellungen |
| <kbd>⌘?</kbd> | GitLoom-Hilfe |

## Repository

| Tasten | Aktion |
|---|---|
| <kbd>⇧⌘L</kbd> ✎ | Alle Remotes fetchen |
| <kbd>⇧⌘↓</kbd> ✎ | Pull |
| <kbd>⇧⌘↑</kbd> ✎ | Push |
| <kbd>⌘B</kbd> ✎ | Einen Branch am ausgewählten Commit erstellen |
| <kbd>⇧⌘S</kbd> ✎ | Alle Änderungen stashen |
| <kbd>⌥⌘Y</kbd> ✎ | Verlauf der ausgewählten Datei |
| <kbd>⌥⌘B</kbd> ✎ | Blame der ausgewählten Datei |
| <kbd>⌘0</kbd> ✎ | Seitenleiste ein- oder ausblenden |
| <kbd>⌥⌘0</kbd> ✎ | Detailbereich ein- oder ausblenden |
| <kbd>⌥⌘L</kbd> ✎ | Detailbereich nach unten / zurück nach rechts verschieben |

## Graph, Änderungen und Diff

| Tasten | Aktion |
|---|---|
| <kbd>↑</kbd> <kbd>↓</kbd> oder <kbd>J</kbd> <kbd>K</kbd> | Vorheriger / nächster Commit |
| <kbd>⇧</kbd>-Klick, <kbd>⌘</kbd>-Klick | Einen Bereich / mehrere Commits auswählen (vergleichen, squashen, Cherry-Pick) |
| <kbd>⌘C</kbd> | SHA des ausgewählten Commits kopieren |
| <kbd>⌘Y</kbd> | Quick Look der ausgewählten Datei |
| <kbd>⇧⌘A</kbd> | Alle stagen |
| <kbd>⌥⇧⌘A</kbd> | Alle unstagen |
| <kbd>⌘↩</kbd> | Committen (in der Commit-Nachricht) |
| <kbd>⌥⌘G</kbd> | Commit-Nachricht mit KI schreiben (wenn KI eingeschaltet ist) |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Vorherige / nächste Änderung in der Datei |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Vorherige / nächste Datei |

## Editoren

| Tasten | Aktion |
|---|---|
| <kbd>⌘E</kbd> ✎ | Die geöffnete Datei bearbeiten |
| <kbd>⌘S</kbd> ✎ | Sichern |
| <kbd>⌥⌘S</kbd> ✎ | Sichern und stagen |
| <kbd>⌘L</kbd> ✎ | Gehe zu Zeile |
| <kbd>⌥⌘F</kbd> ✎ | Suchen und ersetzen |
| <kbd>⌘/</kbd> ✎ | Ausgewählte Zeilen aus- oder einkommentieren |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> ✎ | Ausgewählte Zeilen einrücken / ausrücken |
| <kbd>P</kbd> <kbd>R</kbd> <kbd>E</kbd> <kbd>S</kbd> <kbd>F</kbd> <kbd>C</kbd> <kbd>D</kbd> | Interaktiver Rebase: pick, reword, edit, squash, fixup, fixup -C, drop für die ausgewählten Zeilen |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Interaktiver Rebase: ausgewählte Zeilen verschieben (mit *Merges beibehalten* nur innerhalb ihres eigenen Branches) |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Interaktiver Rebase: eine Änderung am Plan widerrufen / wiederholen (Git wird erst angefasst, wenn du startest) |
| <kbd>⌘↩</kbd> | Interaktiver Rebase: den Rebase starten (oder den restlichen Plan sichern) |
| Esc | Interaktiver Rebase: den Editor schließen, ohne etwas zu tun |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Merge-Konflikte: vorheriger / nächster Konflikt |
| <kbd>⌘S</kbd> | Merge-Konflikte: sichern und die Datei als gelöst markieren |
| <kbd>⌘[</kbd> / <kbd>⌘]</kbd> | Dateiverlauf: zurück / vorwärts |

## Terminal

| Tasten | Aktion |
|---|---|
| <kbd>⌃`</kbd> ✎ | Terminal ein- oder ausblenden (blendet es aus, wenn es den Fokus hat) |
| <kbd>⌃⇧`</kbd> ✎ | Neue Terminalsitzung |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> ✎ | Terminaltext größer / kleiner |
| <kbd>⇥</kbd> oder <kbd>→</kbd> | Den ausgewählten Vorschlag einfügen |
| <kbd>↑</kbd> <kbd>↓</kbd> | Einen Vorschlag wählen |
| Esc | Vorschläge schließen; bei leerer Eingabezeile zurück zum Graphen (ebenso beim Ausblenden des Terminals) |
| <kbd>⌘</kbd>-Klick | Öffnen, was unter dem Zeiger ist: Ein SHA wählt den Commit aus, ein Pfad öffnet die Datei, eine URL öffnet den Browser |
