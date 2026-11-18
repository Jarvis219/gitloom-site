---
title: "Git LFS"
group: Tools
order: 23
summary: "Große Dateien mit Git LFS verfolgen, sie laden und Dateien sperren, damit niemand im Team sie gleichzeitig bearbeitet."
updated: 2026-11-18
---

GitLoom arbeitet mit Git LFS, wenn `git-lfs` auf deinem Mac installiert ist. Ohne das kann GitLoom LFS-Dateien zwar auflisten, aber weder laden noch sperren.

## Die Gruppe GIT LFS

In einem Repository, das LFS nutzt, hat die Seitenleiste eine Gruppe GIT LFS mit den LFS-Dateien. Eine Datei, die noch nicht geladen ist und von der nur der Pointer auf der Festplatte liegt, hat ein Download-Symbol. Bei einer gesperrten Datei siehst du, wer sie gesperrt hat. Doppelklicke auf eine Datei, um sie zu öffnen.

Klicke mit der rechten Maustaste auf eine Datei für:

- *Datei öffnen*;
- *Diese Datei laden*, wenn nur ihr Pointer vorhanden ist;
- *Sperren* oder *Entsperren*.

## Alle LFS-Dateien laden

**Repository ▸ Erweitert ▸ Git LFS-Dateien laden** führt `git lfs pull` aus und lädt die großen Dateien dieses Checkouts.

## Einen neuen Dateityp verfolgen

Rechtsklick auf eine geänderte Datei im Staging-Bereich ▸ *Mit LFS verfolgen (\*.ext)*, um jede Datei mit dieser Endung zu verfolgen. In einem Repository, das bereits LFS nutzt, enthält dasselbe Menü *Sperren (LFS)* und *Entsperren (LFS)*.
