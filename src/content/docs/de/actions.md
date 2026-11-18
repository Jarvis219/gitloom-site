---
title: "Actions"
group: Accounts & hosting
order: 31
summary: "GitHub-Actions-Läufe neben ihren Commits verfolgen, Logs lesen, Jobs erneut ausführen, Workflows starten und Artefakte laden."
updated: 2026-11-18
---

Sobald ein GitHub-Account hinzugefügt ist, zeigt GitLoom GitHub-Actions-Läufe in der Gruppe ACTIONS der Seitenleiste und neben ihren Commits in der CI-Spalte des Graphen.

![Die Seitenleiste mit einem Pull-Request und GitHub-Actions-Läufen, dazu der geöffnete Build-Job eines Laufs](/shots/actions-light.png)

## Läufe und Logs

Öffne einen Lauf, um seine Jobs, Annotationen und Artefakte zu sehen. Öffne einen Job, um sein Log zu lesen. Die Log-Ansicht kann Zeitstempel einblenden, Zeilen umbrechen oder nur Fehler zeigen, und *Protokoll sichern…* speichert eine Kopie.

## Erneut ausführen, abbrechen und starten

- *Alle Jobs erneut ausführen*, *Fehlgeschlagene Jobs erneut ausführen* oder *Diesen Job erneut ausführen*.
- *Lauf abbrechen*.
- *Workflow ausführen…* startet einen Workflow mit `workflow_dispatch`-Trigger, samt seinen Eingaben.
- Die Artefakte eines Laufs laden.

Ein Lauf aus einem Fork, der auf Genehmigung wartet, weist darauf hin, listet die Workflow-Dateien auf, die sein Pull-Request ändert, und bietet *Genehmigen und ausführen…* an. Prüfe die Änderungen vorher: Genehmigte Workflows laufen mit den Einstellungen des Repositorys.

## Mitteilungen

GitLoom kann dich benachrichtigen, wenn ein von dir gestarteter Lauf fertig ist. Wann, legst du unter **Einstellungen ▸ Git ▸ GitHub Actions ▸ Benachrichtigen, wenn eine von mir gestartete CI fertig ist** fest: nie, nur bei Fehlschlag (Standard) oder immer.

> **Note** Actions gibt es nur für GitHub. Für GitLab werden CI-Pipelines noch nicht unterstützt, und die Gruppe Actions ist ausgeblendet.
