---
title: "GitHub"
group: Accounts & hosting
order: 27
summary: "Bei GitHub anmelden, um in GitLoom mit Pull-Requests, Issues, Actions und deinen Organisationen zu arbeiten."
updated: 2026-11-18
---

Melde dich bei GitHub an, um Pull-Requests, Issues, das Launchpad und Actions in GitLoom zu nutzen.

## Anmelden

Öffne **Einstellungen ▸ Hosting** und klicke auf *Mit GitHub anmelden…*. *Code anfordern* gibt dir einen Code; *Code kopieren & GitHub öffnen* kopiert ihn und öffnet die Seite, auf der du ihn eingibst.

Alternativ kannst du mit *Token hinzufügen…* ein Personal Access Token einfügen, fein abgestuft oder klassisch. GitLoom prüft die Scopes, die es sehen kann.

Tokens werden ausschließlich im Schlüsselbund von macOS aufbewahrt.

## Was du tun kannst

- [Pull-Requests](/de/docs/pull-requests-and-reviews/) erstellen, reviewen und mergen.
- [Issues](/de/docs/issues/) erstellen und durchsuchen.
- Läufe von GitHub [Actions](/de/docs/actions/) neben ihren Commits sehen.
- **Launchpad** (<kbd>⇧⌘K</kbd>) listet Pull-Requests und Issues auf, die in allen Repositorys auf dich warten.
- **Fenster ▸ Organisationen** zeigt deine Organisationen, ihre Teams und Mitglieder.
- **Repository ▸ GitHub / GitLab** enthält *Repository veröffentlichen…*, das das Repository auf GitHub erstellt, es als `origin` hinzufügt und den aktuellen Branch pusht, sowie *Fork auf GitHub*.
- Aus deinen Accounts und Organisationen klonen: <kbd>⇧⌘C</kbd> ▸ *Aus Ihrem Account auswählen…*.

## Deine Commit-E-Mail

Vor einem Commit warnt GitLoom, wenn die E-Mail keine der E-Mails deines GitHub-Accounts ist, weil GitHub den Commit sonst nicht mit dir verknüpfen würde.

## SSH-Schlüssel

Die Anmeldung gilt für die API. Welcher SSH-Schlüssel für welches Login pusht, legst du unter [SSH-Accounts](/de/docs/ssh-accounts/) fest. *SSH-Schlüssel…* eines Accounts unter **Einstellungen ▸ Hosting** zeigt die Schlüssel auf GitHub und kann deine hochladen.
