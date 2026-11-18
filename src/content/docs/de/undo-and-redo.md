---
title: "Widerrufen und Wiederholen"
group: Everyday work
order: 11
summary: "Widerrufe fast jeden Git-Vorgang mit ⌘Z, wiederhole ihn mit ⇧⌘Z oder kehre zu einem beliebigen Punkt im Vorgangsverlauf zurück."
updated: 2026-11-18
---

<kbd>⌘Z</kbd> widerruft den letzten Git-Vorgang, und <kbd>⇧⌘Z</kbd> wiederholt ihn. Wenn etwas schiefgeht, versuch zuerst, es zu widerrufen.

## Was sich widerrufen lässt

Commit, Amend, Checkout, Änderungen an Branches und Tags, Verwerfen, Reset, Stash, Pull, Merge, Rebase, Cherry-Pick und mehr.

Ein Merge, Rebase oder Reset wird nur wiederholt, solange das Arbeitsverzeichnis sauber ist.

## Vorgangsverlauf

**Bearbeiten ▸ Vorgangsverlauf…** listet alles, was GitLoom getan hat. Du kannst bis zu jedem beliebigen Punkt darin zurück widerrufen.

## Bevor Arbeit verloren geht

Vor einem Widerrufen, das Arbeit verwerfen würde – etwa nachdem du neue Änderungen vorgenommen hast –, sagt dir GitLoom, was passieren wird, und fragt nach.

## Text und der Rebase-Editor

In einem Textfeld widerruft <kbd>⌘Z</kbd> wie gewohnt die Eingabe. Im Editor für den [interaktiven Rebase](/de/docs/interactive-rebase/) widerruft es Änderungen am Plan.

Scheint ein Commit auch nach dem Widerrufen verschwunden, sieh unter [Wiederherstellen mit dem Reflog](/de/docs/reflog-recovery/) nach.
