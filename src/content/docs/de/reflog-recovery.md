---
title: "Wiederherstellen mit dem Reflog"
group: History
order: 17
summary: "Hol Commits zurück, die nach einem Reset, einem Rebase oder einem gelöschten Branch verschwunden scheinen – mit dem Reflog und „Verlorene Commits finden“."
updated: 2026-11-18
---

In Git gehen Commits nur schwer verloren. Scheint einer verschwunden, versuch zuerst <kbd>⌘Z</kbd> oder **Bearbeiten ▸ Vorgangsverlauf…** (siehe [Widerrufen und Wiederholen](/de/docs/undo-and-redo/)). Hilft das nicht, sieh im Reflog nach.

## Das Reflog

Wähle **Repository ▸ Reflog…**. Es listet jede Position, die HEAD je hatte, die neueste zuerst – Commits, die du durch einen Reset oder Rebase verloren hast, stehen also dort. Wähle oben einen Branch, um stattdessen das Reflog dieses Branches zu sehen, und tippe in das Filterfeld, um nach SHA, Aktion oder Nachricht zu suchen.

Du kannst auch mit der rechten Maustaste auf einen Branch klicken ▸ *Reflog anzeigen*, um das Reflog dieses Branches zu öffnen.

## Verlorene Commits

**Repository ▸ Verlorene Commits finden…** (oder der Tab *Verlorene Commits*) sucht nach Commits, die kein Branch, kein Tag und kein Reflog erreicht, zum Beispiel die Commits eines gelöschten Branches.

## Einen Commit zurückholen

Wähle in einer der beiden Listen einen Commit aus, dann:

- *Branch hier erstellen…* setzt einen neuen Branch darauf;
- *Cherry-Pick* kopiert ihn auf deinen aktuellen Branch;
- *Aktuellen Branch hierher zurücksetzen…* verschiebt deinen aktuellen Branch dorthin.
