---
title: "Profile"
group: Getting started
order: 4
summary: "Nutze für jede Art von Arbeit einen eigenen Namen, eine eigene E-Mail, einen Signaturschlüssel, Tabs und eine Liste zuletzt benutzter Repositorys."
updated: 2026-11-18
---

Ein Profil enthält die Identität, mit der du committest: einen Namen, eine E-Mail-Adresse und optional einen Signaturschlüssel. Nutze zum Beispiel eines für die Arbeit und eines für private Projekte. Richte sie unter **Einstellungen ▸ Profile** ein.

## Was ein Profil enthält

Jedes Profil hat:

- einen Profilnamen sowie den Commit-Namen (`user.name`) und die E-Mail (`user.email`);
- eine Signaturmethode – nicht signieren, SSH, GPG oder X.509 – und die Angabe, ob Commits standardmäßig signiert werden;
- optional einen Account, mit dem gepusht wird, wenn die Regeln der [SSH-Accounts](/de/docs/ssh-accounts/) nicht entscheiden;
- eigene geöffnete Tabs und zuletzt benutzte Repositorys.

GitLoom schreibt Namen, E-Mail und Signaturschlüssel in die Git-Konfiguration jedes Repositorys, damit das Terminal mit GitLoom übereinstimmt.

## Profil wechseln

Wechsle das Profil über den Chip oben rechts im Fenster. Ein Profil ist das Standardprofil: GitLoom startet damit und kehrt dorthin zurück, wenn das verwendete Profil gelöscht wird. Mit *Als Standard festlegen* änderst du, welches es ist.

## Die falsche Identität

Über der Commit-Taste zeigt GitLoom, als wer du committest. Stimmt diese E-Mail nicht mit der des Repository-Profils überein, wird die Zeile mit einer Warnung markiert; wähle das richtige Profil über den Chip in der Symbolleiste, um das zu beheben.

## Profil entfernen

Wähle es aus und klicke auf −. Seine geöffneten Tabs und zuletzt benutzten Repositorys werden vergessen. Bereits in Repositorys geschriebene Git-Konfiguration bleibt unverändert. Es gibt immer mindestens ein Profil.
