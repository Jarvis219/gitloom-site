---
title: "Bisect"
group: History
order: 18
summary: "Den Commit finden, der etwas kaputt gemacht hat: ein paar Commits testen und mit Good oder Bad antworten."
updated: 2026-11-18
---

Bisect findet den Commit, der ein Problem eingeführt hat. Du nennst GitLoom einen Commit, bei dem alles funktioniert hat, und einen, bei dem es nicht funktioniert, und testest dann die Commits, die es dazwischen auswählt.

## Starten

Committe oder stashe vorher deine Arbeit: Beim Auschecken der Commits ändern sich Dateien.

Wähle **Repository ▸ Bisect…** oder klicke mit der rechten Maustaste auf einen älteren Commit, der noch funktioniert hat, ▸ *Bisect: Dieser Commit ist gut…*. GitLoom fragt nach einem schlechten und einem guten Commit.

## Testen und antworten

GitLoom checkt einen Commit zwischen den beiden aus. Teste ihn und antworte dann in der Leiste über dem Graphen:

- *Good*, wenn das Problem nicht auftritt;
- *Bad*, wenn es auftritt;
- *Überspringen*, wenn sich dieser Commit nicht testen lässt.

Nach ein paar Antworten nennt die Leiste den ersten schlechten Commit. Wenn übersprungene Commits eine weitere Eingrenzung verhindern, listet sie die infrage kommenden Commits auf.

## Einen Befehl testen lassen

Wenn ein Befehl einen guten von einem schlechten Commit unterscheiden kann, etwa ein einzelner Test, klicke in der Leiste auf *Skript ausführen…* (`git bisect run`). git checkt dann einen Commit nach dem anderen aus und führt den Befehl im Repository aus. Er muss mit 0 enden, wenn der Commit gut ist, und mit 1, wenn er schlecht ist; 125 bedeutet, dass sich der Commit nicht testen lässt.

## Abschließen

*Abschließen* bringt dich dorthin zurück, wo du angefangen hast. *Stoppen* beendet den Bisect jederzeit und kehrt ebenfalls zum Ausgangspunkt zurück.
