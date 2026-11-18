---
title: "Merge, rebase o cherry-pick arrastrando"
group: Everyday work
order: 9
summary: "Arrastra ramas y commits en el grafo para hacer merge, rebase, fast-forward, cherry-pick o push."
updated: 2026-11-18
---

En el grafo puedes arrastrar una rama o unos commits a otro lugar, y GitLoom muestra un menú con lo que puede hacer esa acción. No ocurre nada hasta que eliges.

## Qué puedes arrastrar

- **La etiqueta de una rama sobre otra rama o un commit**: merge, rebase o fast-forward. El menú también puede iniciar un [rebase interactivo](/es/docs/interactive-rebase/).
- **Commits sobre una rama**: cherry-pick. Antes, selecciona varios con <kbd>⇧</kbd>-clic o <kbd>⌘</kbd>-clic.
- **Una rama sobre un remoto** de la barra lateral: push.
- **Una rama sobre otra rama**, con una cuenta de GitHub o GitLab: crear un pull request (consulta [Pull requests y revisiones](/es/docs/pull-requests-and-reviews/)).

## Sin arrastrar

Cada arrastre tiene el mismo comando en un menú contextual. El menú Repositorio también tiene *Fusionar en la rama actual* y *Hacer rebase de la rama actual sobre*.

## Cuando hay conflictos

Los conflictos detienen la operación y aparece un aviso. Resuélvelos y luego elige *Continuar*, *Omitir* o *Abortar*. Consulta [Resolver conflictos](/es/docs/resolving-conflicts/).

## Si cambias de idea

Un merge, rebase o cherry-pick se puede deshacer con <kbd>⌘Z</kbd>. Consulta [Deshacer y rehacer](/es/docs/undo-and-redo/).
