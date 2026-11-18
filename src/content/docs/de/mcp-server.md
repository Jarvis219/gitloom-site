---
title: "MCP-Server"
group: Tools
order: 25
summary: "Lass KI-Tools wie Claude Code, Cursor oder VS Code deine Repositorys über GitLoom lesen und auf Wunsch sichere Änderungen vornehmen."
updated: 2026-11-18
---

Andere KI-Tools (Claude Code, Claude Desktop, Cursor, VS Code und weitere) können über den MCP-Server von GitLoom mit deinen Repositorys arbeiten. Er ist ausgeschaltet, bis du ihn einschaltest.

## Einschalten

Stelle unter **Einstellungen ▸ Integrationen ▸ MCP-Server** die Option *Externe KI-Tools dürfen* auf einen dieser Werte:

- *Nichts tun (aus)*;
- *Lesen: Status, Verlauf, Diffs, Blame*;
- *Lesen und ändern: auch Commit, Branch, Stash, Pull, Push*.

Verbinde dann dein Tool. Für Claude Code kopierst du die dort angezeigte Zeile und führst sie in einem Terminal aus; sie sieht so aus:

```sh
claude mcp add gitloom -- "/Applications/GitLoom.app/Contents/Helpers/gitloom-mcp"
```

Für andere Tools kopierst du das dort angezeigte JSON in die MCP-Konfiguration des Tools. GitLoom bearbeitet niemals die Dateien eines anderen Tools. Auch der Befehl `gitloom mcp` startet den Server (siehe [Das Befehlszeilen-Tool gitloom](/de/docs/the-gitloom-command-line-tool/)).

## Lesen

Tools sehen Status, Verlauf, Diffs, Blame, Branches und Stashes der Repositorys, die geöffnet sind oder in der Liste der zuletzt benutzten auf der Startseite stehen. Solange GitLoom läuft, können sie auch abfragen, was du gerade ansiehst, etwa den ausgewählten Commit oder die geöffnete Datei. Ändern können sie nichts.

## Lesen und ändern

Tools können außerdem stagen, committen, Branches erstellen und wechseln, stashen, fetchen, pullen (nur Fast-Forward) und pushen – in Repositorys, die in einem Tab geöffnet sind, solange GitLoom läuft. Jede Änderung erscheint im Fenster mit dem Namen des Tools und einer Taste *Widerrufen* sowie im Vorgangsverlauf.

Ist *Vor dem Pushen fragen* eingeschaltet, wartet ein Push im Fenster des Repositorys auf deine Antwort; nach 60 Sekunden wird er abgelehnt.

Kein Tool kann einen Force-Push ausführen, zurücksetzen, verwerfen, löschen oder die Historie umschreiben.

## Pull-Requests, Issues und CI

Ist *Pull-Requests, Issues und CI über meine Accounts* eingeschaltet, können Tools die Pull-Requests, Issues und CI-Läufe des Repositorys über den in GitLoom verbundenen Account lesen. Mit *Lesen und ändern* können sie außerdem einen Pull-Request für den aktuellen Branch eröffnen und einen kommentieren. Dein Token sehen sie nie, und sie können nichts mergen, genehmigen oder schließen.

Die Einstellungen zeigen die letzten Aufrufe unter *Letzte Aktivität*.
