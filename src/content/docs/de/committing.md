---
title: "Committen"
group: Everyday work
order: 7
summary: "Eine Nachricht schreiben, nachbessern, Co-Autoren hinzufügen, deine Hooks laufen sehen und mit Dateien umgehen, die git nicht zeigt."
updated: 2026-11-18
---

Wähle die Zeile *Uncommitted changes* aus, stage, was du möchtest (siehe [Einzelne Zeilen stagen](/de/docs/staging-single-lines/)), schreib die Nachricht und drücke <kbd>⌘↩</kbd>.

## Das Commit-Formular

- *Nachbessern* ändert den letzten Commit, statt einen neuen anzulegen. Solange die Option aktiviert ist, werden auch die Dateien aufgelistet, die dieser Commit bereits ändert.
- *Co-Autoren* schlägt die Personen aus dem jüngsten Verlauf vor, einschließlich früher hinzugefügter Co-Autoren.
- Während ein Commit läuft, erscheint unter der Nachricht, was deine Hooks ausgeben (ein `pre-commit`-Linter, Tests). Läuft ein Hook nach einer Minute noch, weist GitLoom darauf hin und bietet *Stoppen* an.
- Eine Zeile zeigt, als wer du committest. Sie warnt, wenn die E-Mail nicht zum [Profil](/de/docs/profiles/) des Repositorys passt oder keine der E-Mails deines GitHub-Accounts ist (GitHub würde den Commit dann nicht mit dir verknüpfen).

Bei eingeschalteter KI schreibt <kbd>⌥⌘G</kbd> die Nachricht für dich (siehe [Einen Anbieter wählen](/de/docs/choosing-a-provider/)).

## Einstellungen für Nachrichten

Unter **Einstellungen ▸ Git ▸ Commit-Nachricht** kannst du eine Vorlage festlegen, mit der das Formular beginnt, sowie die Längen der Zusammenfassung, ab denen der Zähler gelb und rot wird (standardmäßig 50 und 72 Zeichen). Er warnt nur; abgeschnitten wird nichts. Ein eigenes `commit.template` des Repositorys hat Vorrang vor der Vorlage.

## Dateien, die git nicht zeigt

- Wenn du eine bereits verfolgte Datei *ignorierst*, bietet GitLoom *Nicht mehr verfolgen* an (`git rm --cached`): Die Datei verlässt mit dem nächsten Commit das Repository und bleibt auf der Festplatte.
- Rechtsklick auf eine geänderte Datei ▸ *Lokale Änderungen ausblenden* für eine verfolgte Datei, die du absichtlich änderst, etwa eine lokale Konfiguration. Eine Zeile über der Dateiliste zeigt, wie viele ausgeblendet sind, und *Anzeigen…* holt sie zurück.
- Auf einem Mac-Volume ist das Umbenennen von `readme.md` in `README.md` im Finder für git unsichtbar. GitLoom bemerkt es und bietet *Umbenennung erfassen* an.

## Einen Commit widerrufen

<kbd>⌘Z</kbd> widerruft den letzten Commit oder die letzte Nachbesserung. Siehe [Widerrufen und wiederholen](/de/docs/undo-and-redo/).
