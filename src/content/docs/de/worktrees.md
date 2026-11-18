---
title: "Worktrees"
group: Tools
order: 21
summary: "Checke einen zweiten Branch in einem eigenen Ordner aus, damit du daran arbeiten kannst, ohne deine laufende Arbeit zu stashen."
updated: 2026-11-18
---

Ein Worktree ist ein zweiter Arbeitsordner für dasselbe Repository. Dort kannst du an einem anderen Branch arbeiten, ohne zu stashen, was du im ersten gerade tust.

## Worktree erstellen

Klicke in der Seitenleiste mit der rechten Maustaste auf einen Branch ▸ *In neuem Worktree öffnen…*. Wähle den Ordner und aktiviere *Neuen Branch aus … erstellen*, wenn du einen frischen Branch möchtest. *Erstellen & öffnen* legt den Worktree an und öffnet ihn in einem neuen Tab.

## Die Gruppe WORKTREES

Hat ein Repository mehr als einen Worktree, zeigt die Seitenleiste eine Gruppe WORKTREES. Jede Zeile zeigt den Branch des Worktrees; der im aktuellen Tab ist mit *dieser Tab* markiert. Ein Worktree, dessen Ordner nicht mehr existiert, ist mit *fehlt* markiert, und *Bereinigen* vergisst solche.

Klicke mit der rechten Maustaste auf einen Worktree für:

- *In neuem Tab öffnen* oder *Öffnen*;
- *Im Finder zeigen*;
- *Sperren* oder *Entsperren*;
- *Worktree entfernen…*.

## Ein Branch in einem anderen Worktree

Git hält einen Branch immer nur in einem Worktree gleichzeitig ausgecheckt. Checkst du einen Branch aus, der anderswo geöffnet ist, bietet GitLoom *Diesen Worktree öffnen* an oder denselben Commit in diesem Worktree ohne den Branch.

## Worktree entfernen

*Worktree entfernen…* löscht den Ordner des Worktrees; der Branch bleibt erhalten. Den im aktuellen Tab geöffneten Worktree kannst du nicht entfernen.

> **Caution** Hat der Worktree nicht committete Änderungen, weist GitLoom darauf hin, und sie werden mit dem Ordner gelöscht, wenn du *Trotzdem entfernen* wählst.
