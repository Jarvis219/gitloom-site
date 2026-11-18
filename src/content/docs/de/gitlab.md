---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "gitlab.com oder deinen eigenen GitLab-Server mit einem Token verbinden, um mit Merge-Requests und Issues zu arbeiten."
updated: 2026-11-18
---

GitLoom arbeitet mit gitlab.com und mit deinem eigenen GitLab-Server und verwendet dafür ein Personal Access Token.

## Ein Token hinzufügen

1. Öffne **Einstellungen ▸ Hosting** und klicke auf *GitLab-Token hinzufügen…*.
2. Gib den Host ein.
3. Füge ein Personal Access Token mit den Scopes `api`, `read_user` und `write_repository` ein. *Token erstellen…* öffnet die passende Seite auf deinem GitLab.

Das Token wird im Schlüsselbund von macOS aufbewahrt. HTTPS-Pushes verwenden es.

## Was du tun kannst

Die Seitenleiste zeigt MERGE-REQUESTS und Issues. Du kannst:

- einen Merge-Request erstellen, kommentieren, genehmigen und mergen (mit Squash);
- deine Merge-Requests im Launchpad sehen (<kbd>⇧⌘K</kbd>);
- Issues erstellen und durchsuchen.

## Noch nicht unterstützt

Für GitLab unterstützt GitLoom noch nicht:

- CI-Pipelines (die Gruppe Actions ist ausgeblendet);
- Kommentare zu einer Codezeile;
- Organisationen;
- die Anmeldung ohne Token.
