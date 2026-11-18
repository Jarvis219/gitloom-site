---
title: "Installation"
group: Getting started
order: 1
summary: "Was GitLoom braucht, wie du es lädst und wie du es zum ersten Mal öffnest."
updated: 2026-11-18
---

GitLoom ist ein kostenloser Git-Client für den Mac. Er verwendet dein eigenes `git`, sodass deine Konfiguration, Hooks, Zugangsdaten und Aliase alle gelten.

## Voraussetzungen

- macOS 14 Sonoma oder neuer, auf einem Mac mit Apple silicon.
- git 2.40 oder neuer. Das git aus den Xcode Command Line Tools funktioniert ebenso wie das aus Homebrew.

Um git von Apple zu installieren, führe Folgendes im Terminal aus:

```sh
xcode-select --install
```

GitLoom meldet beim Start, wenn es kein ausreichend aktuelles git findet. Liegt dein git an einem ungewöhnlichen Ort, wähle es unter **Einstellungen ▸ Git** aus.

## Laden

Lade `GitLoom.dmg` (42 MB) vom [neuesten Release](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg) oder über das Terminal:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

Öffne das Image und zieh GitLoom in deinen Ordner „Programme“.

## Zum ersten Mal öffnen

GitLoom ist noch nicht von Apple notarisiert, deshalb blockiert macOS den ersten Start. So öffnest du es:

1. Öffne GitLoom einmal. macOS meldet, dass es nicht geöffnet werden kann.
2. Gehe zu **Systemeinstellungen ▸ Datenschutz & Sicherheit** und klicke neben der Meldung zu GitLoom auf *Dennoch öffnen*.
3. Bestätige. Ab dann öffnet sich GitLoom normal.

Das musst du nur einmal tun. Spätere Versionen kommen über GitLooms eigene Update-Funktion (siehe [Updates](/de/docs/updates/)).

## Optional: das Befehlszeilen-Tool

Wähle **GitLoom ▸ Befehlszeilen-Tool installieren…**, um einen Befehl `gitloom` hinzuzufügen, sodass `gitloom .` den Ordner öffnet, in dem du dich befindest. Siehe [Das Befehlszeilen-Tool gitloom](/de/docs/the-gitloom-command-line-tool/).
