---
title: "Konflikte lösen"
group: Everyday work
order: 10
summary: "Übernimm im Drei-Wege-Merge-Editor pro Konflikt oder pro Zeile eine Seite, bearbeite das Ergebnis und setze fort."
updated: 2026-11-18
---

Stößt ein Merge, Rebase, Cherry-Pick oder Pull auf einen Konflikt, hält er an, und ein Banner erklärt, was los ist. Dateien mit Konflikten werden im Detailbereich aufgelistet.

![Der Drei-Wege-Konflikteditor mit deiner Seite, ihrer Seite und dem Ergebnis](/shots/conflict-light.png)

## Der Merge-Editor

Öffne eine Datei mit Konflikten, um den Drei-Wege-Merge-Editor zu sehen: deine Seite, ihre Seite und das Ergebnis.

- Übernimm pro Konflikt oder pro Zeile eine Seite.
- Bearbeite das Ergebnis direkt.
- <kbd>⌥⌘↑</kbd> und <kbd>⌥⌘↓</kbd> springen zwischen Konflikten.
- Aktiviere *Ganze Datei*, um jede Seite als ganze Datei mit den Konflikten an Ort und Stelle zu sehen. Die Spalten sind aneinander ausgerichtet und scrollen gemeinsam.

Ist die Datei richtig, klicke auf *Sichern & als gelöst markieren* (<kbd>⌘S</kbd>).

## Sonderfälle

- Ein Konflikt, der von einer Umbenennung herrührt (auf beiden Seiten umbenannt oder auf einer umbenannt und auf der anderen gelöscht), wird als solcher angezeigt.
- Eine Binärdatei lässt sich auf beiden Seiten in der Vorschau ansehen, bevor du wählst.
- Ein Banner warnt, wenn sich die beiden Seiten nur in den Zeilenenden unterscheiden (CRLF / LF).

## Dein eigenes Merge-Tool

Du kannst die Datei auch in deinem externen Merge-Tool öffnen. GitLoom verwendet Gits `merge.tool` oder das Tool, das du unter **Einstellungen ▸ Integrationen ▸ Merge-Tool** auswählst.

## Abschließen oder abbrechen

Sind alle Dateien gelöst, klicke im Banner auf *Fortsetzen*. *Überspringen* überspringt den aktuellen Commit eines Rebase oder Cherry-Pick; *Abbrechen* stellt alles wieder so her, wie es war. Ein Repository, das mitten in einem Rebase oder Merge verlassen wurde, zeigt das Banner nach einem Neustart von GitLoom wieder an.
