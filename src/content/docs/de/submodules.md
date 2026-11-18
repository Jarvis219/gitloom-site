---
title: "Submodule"
group: Tools
order: 22
summary: "Sieh den Zustand jedes Submoduls, initialisiere und aktualisiere sie, öffne eines in einem eigenen Tab, füge sie hinzu oder entferne sie."
updated: 2026-11-18
---

Hat ein Repository Submodule, zeigt die Seitenleiste eine Gruppe SUBMODULE mit jedem Submodul und seinem Zustand.

## Die Liste lesen

Jede Zeile zeigt den Pfad des Submoduls und seinen Zustand:

- ein ✓ und den ausgecheckten Commit, wenn es aktuell ist, oder *geänderter Inhalt* / *nicht verfolgter Inhalt*, wenn es Änderungen hat;
- *Aktualisieren*, wenn es nicht synchron ist: Der ausgecheckte Commit ist nicht der, den das Hauptrepository erfasst hat (bewege den Zeiger darauf, um beide zu sehen);
- *Init*, wenn es noch nicht initialisiert ist;
- *Konflikt*, wenn der erfasste Commit in Konflikt steht.

## Mit einem Submodul arbeiten

Doppelklicke auf ein Submodul, um es in einem eigenen Tab zu öffnen. Klicke mit der rechten Maustaste darauf für:

- *In neuem Tab öffnen*;
- *Auf erfassten Commit aktualisieren* oder *Auf neuesten Remote-Stand aktualisieren*;
- *Init*, für eines, das noch nicht initialisiert ist;
- *Im Finder zeigen*;
- *Submodul entfernen…*.

Hat ein Submodul nicht committete Änderungen, fragt das Aktualisieren vorher nach. Git hält an, wenn deine Änderungen im Weg sind; nichts wird erzwungen.

Um Submodule nach jedem Pull zu aktualisieren, der neue Commits bringt, schalte *Submodule nach dem Pull aktualisieren* unter **Einstellungen ▸ Git** ein.

## Submodul hinzufügen

**Repository ▸ Erweitert ▸ Submodul hinzufügen…** fragt nach der URL, dem Pfad und optional einem Branch.

## Submodul entfernen

*Submodul entfernen…* deinitialisiert das Submodul und entfernt es aus dem Index. Seine Repository-Daten (`.git/modules/<name>`) kommen in den Papierkorb, sodass seine Commits wiederherstellbar bleiben. Committe anschließend, um den Vorgang abzuschließen. Hat das Submodul nicht committete Änderungen, Commits, die auf keinem Remote liegen, oder Stashes, listet GitLoom diese zuerst auf.
