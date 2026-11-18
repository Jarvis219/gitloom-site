---
title: "Deshacer y rehacer"
group: Everyday work
order: 11
summary: "Deshaz casi cualquier operación de Git con ⌘Z, rehazla con ⇧⌘Z o vuelve a cualquier punto del Historial de operaciones."
updated: 2026-11-18
---

<kbd>⌘Z</kbd> deshace la última operación de Git y <kbd>⇧⌘Z</kbd> la rehace. Cuando algo sale mal, prueba primero a deshacer.

## Qué se puede deshacer

Commit, modificación del último commit, checkout, cambios de ramas y etiquetas, descartar, reset, stash, pull, merge, rebase, cherry-pick y más.

Un merge, rebase o reset solo se rehace mientras el árbol de trabajo está limpio.

## Historial de operaciones

**Edición ▸ Historial de operaciones…** muestra todo lo que ha hecho GitLoom. Puedes deshacer hasta cualquier punto de la lista.

## Antes de perder trabajo

Antes de un deshacer que desecharía trabajo, por ejemplo después de que hayas hecho cambios nuevos, GitLoom te dice qué va a pasar y te pregunta.

## Texto y el editor de rebase

En un campo de texto, <kbd>⌘Z</kbd> deshace lo escrito, como siempre. En el editor de [rebase interactivo](/es/docs/interactive-rebase/), deshace los cambios en el plan.

Si un commit parece haber desaparecido incluso después de deshacer, consulta [Recuperación con reflog](/es/docs/reflog-recovery/).
