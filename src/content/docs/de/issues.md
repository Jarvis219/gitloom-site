---
title: "Issues"
group: Accounts & hosting
order: 30
summary: "Issues auf GitHub und GitLab erstellen und durchsuchen und daraus einen Branch starten."
updated: 2026-11-18
---

Sobald ein GitHub- oder GitLab-Account hinzugefügt ist, zeigt GitLoom die Issues des Repositorys in der Seitenleiste.

## Erstellen und durchsuchen

- **Repository ▸ GitHub / GitLab ▸ Neues Issue…** erstellt ein Issue.
- Durchsuche die Issues des Repositorys in der Gruppe Issues der Seitenleiste. Du kannst sie nach Label und Meilenstein filtern.
- Rechtsklick auf ein Issue für *Branch aus Issue erstellen*, *Im Browser öffnen* oder *Link kopieren*.
- Tippe in der Befehlspalette (<kbd>⌘K</kbd>) `#`, um Pull-Requests und Issues zu finden.
- **Launchpad** (<kbd>⇧⌘K</kbd>) listet die Issues auf, die in allen Repositorys auf dich warten.

## Einen Branch aus einem Issue starten

*Branch aus Issue erstellen* legt einen Branch an, der nach dem Issue benannt ist. Der Name folgt der Vorlage unter **Einstellungen ▸ Git ▸ Branch aus einem Issue**, standardmäßig `{type}/{number}-{slug}`, wobei `{type}` `fix` oder `feat` ist. Eine Vorlage in der `.gitloom/team.json` eines Teams hat Vorrang vor deiner.
