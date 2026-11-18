---
title: "Fehlerbehebung"
group: Help
order: 38
summary: "Was du versuchen kannst, wenn etwas schiefgeht: widerrufen, verlorene Commits finden, sehen, was Git ausgeführt hat, und häufige Einrichtungsprobleme beheben."
updated: 2026-11-18
---

Die meisten Probleme in GitLoom lassen sich widerrufen oder erklären. Fang hier an.

## Im Repository ist etwas schiefgegangen

- **Zuerst widerrufen**: <kbd>⌘Z</kbd> oder **Bearbeiten ▸ Vorgangsverlauf…**. Die meisten Vorgänge lassen sich widerrufen (siehe [Widerrufen und Wiederholen](/de/docs/undo-and-redo/)).
- **Commits scheinen verschwunden**: **Repository ▸ Reflog…** und **Verlorene Commits finden…** finden sie (siehe [Wiederherstellen mit dem Reflog](/de/docs/reflog-recovery/)).
- **In einem Rebase oder Merge festgefahren**: Ein Repository, das mitten in einem davon verlassen wurde, zeigt ein Banner mit *Fortsetzen* und *Abbrechen*, auch nach einem Neustart von GitLoom.

## Sehen, was GitLoom getan hat

**Fenster ▸ Git-Log** (<kbd>⌥⇧⌘L</kbd>) listet jeden Git-Befehl, den GitLoom ausgeführt hat: das Repository, den Befehl, wie lange er gedauert hat und seinen Exit-Code. Gespeichert wird nur die Befehlszeile, niemals Ausgabe, Eingabe oder Anmeldedaten.

Eine dünne bewegte Linie unter der Symbolleiste bedeutet, dass Git mit einem Remote kommuniziert; bewege den Zeiger darauf, um zu sehen, womit. Die Meldung eines langsamen Vorgangs bietet *Abbrechen*.

## Häufige Probleme

- **GitLoom findet Git nicht oder meldet, es sei zu alt.** Installiere Git 2.40 oder neuer (siehe [Installieren](/de/docs/install/)) oder wähle ein anderes Git unter **Einstellungen ▸ Git ▸ Git-Binary**.
- **Ein Hook findet node, python oder einen Linter nicht.** Füge die benötigten Ordner unter *Zusätzlicher PATH* in **Einstellungen ▸ Git ▸ Hooks** hinzu. Das gilt für danach geöffnete Repositorys.
- **Ein Hook hängt.** Ein Commit, dessen Hook nach einer Minute noch läuft, meldet das und bietet *Stoppen* an. *Hook stoppen nach* unter **Einstellungen ▸ Git ▸ Hooks** stoppt ihn automatisch (standardmäßig nach 10 Minuten).
- **Der falsche SSH-Schlüssel wird verwendet.** Richte [SSH-Accounts](/de/docs/ssh-accounts/) ein.

## Protokolle und Caches

Unter **Einstellungen ▸ Erweitert**:

- *Debug-Protokoll schreiben* zeichnet die Git-Befehle, die GitLoom ausführt, mit Exit-Status und Zeit in einer Datei im Protokollordner auf. Passwörter und Tokens in URLs werden ausgeblendet. *Protokollordner anzeigen* öffnet ihn.
- *Caches leeren…* entfernt Pull-Requests und Issues, die für die Offline-Nutzung aufbewahrt werden, sowie zwischengespeicherte Dateiversionen. Sie werden bei Bedarf erneut geladen.
- Kann deine Einstellungsdatei nicht gelesen werden, legt GitLoom sie beiseite, startet mit Standardwerten und weist hier darauf hin.

Hilft nichts davon, [melde ein Problem](/de/docs/report-an-issue/).
