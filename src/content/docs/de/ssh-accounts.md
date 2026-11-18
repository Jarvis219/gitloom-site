---
title: "SSH-Accounts"
group: Accounts & hosting
order: 26
summary: "Verwende für jeden Account den richtigen SSH-Schlüssel, wenn du mehrere auf demselben Host hast – in GitLoom und im Terminal."
updated: 2026-11-18
---

Hast du mehrere Accounts auf demselben Host, etwa einen beruflichen und einen privaten GitHub-Account, teilt ein SSH-Account GitLoom mit, welcher Schlüssel zu welchem Login gehört und welche Repositorys ihn verwenden.

## Account einrichten

Öffne **Einstellungen ▸ Accounts** und klicke auf *SSH-Account hinzufügen…*. Für jeden Account:

- gib den Host und deinen Login dort an;
- füge seine Schlüssel hinzu: *Schlüssel importieren…* listet Schlüssel aus `~/.ssh`, ssh-agent, 1Password und Secretive, oder *Generieren…* erzeugt einen neuen;
- füge unter *Für Repositorys verwenden* die Eigentümer oder Ordner hinzu, die ihn verwenden sollen (*Ordner hinzufügen…*), oder mach ihn zum Standard-Account für den Host.

Fetch, Pull, Push und Klonen verwenden dann den richtigen Schlüssel. Ist *core.sshCommand auch in jedes Repository schreiben* eingeschaltet, wird `core.sshCommand` des Repositorys gesetzt, sodass ein einfaches `git push` im Terminal dasselbe tut.

Repositorys mit eigenem `core.sshCommand`, einem Alias in `~/.ssh/config` mit `IdentityFile` oder `GIT_SSH_COMMAND` in deiner Shell bleiben unangetastet.

## Host-Aliasse

Verwendest du Host-Aliasse aus `~/.ssh/config` (etwa `github-work`), stellt **Repository ▸ Remotes… ▸ SSH-Alias** ein Remote auf einen davon um.

## Schlüssel erneuern

*Erneuern…* bei einem Schlüssel erzeugt einen neuen Schlüssel, lädt ihn in den Account hoch und entfernt den alten, sobald der neue funktioniert.

## SSH-Accounts und Anmeldungen bei Hostern

Ein SSH-Account bestimmt nur, welcher Schlüssel pusht und pullt. Die Anmeldung bei GitHub oder GitLab – für Pull-Requests und das Hochladen von Schlüsseln – ist davon getrennt und befindet sich unter **Einstellungen ▸ Hosting** (siehe [GitHub](/de/docs/github/) und [GitLab](/de/docs/gitlab/)).
