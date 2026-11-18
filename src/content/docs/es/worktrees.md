---
title: "Worktrees"
group: Tools
order: 21
summary: "Haz checkout de una segunda rama en su propia carpeta, para trabajar en ella sin guardar en el stash lo que estás haciendo."
updated: 2026-11-18
---

Un worktree es una segunda carpeta de trabajo del mismo repositorio. Puedes trabajar ahí en otra rama sin guardar en el stash lo que estás haciendo en la primera.

## Crear uno

Haz clic derecho en una rama de la barra lateral ▸ *Abrir en un nuevo worktree…*. Elige la carpeta y marca *Crear una rama nueva desde…* si quieres una rama nueva. *Crear y abrir* crea el worktree y lo abre en una pestaña nueva.

## El grupo WORKTREES

Cuando un repositorio tiene más de un worktree, la barra lateral muestra un grupo WORKTREES. Cada fila muestra la rama del worktree; el de la pestaña actual aparece marcado como *esta pestaña*. Un worktree cuya carpeta ya no existe aparece marcado como *falta*, y *Podar* los olvida.

Haz clic derecho en un worktree para:

- *Abrir en una pestaña nueva* o *Abrir*;
- *Mostrar en Finder*;
- *Bloquear* o *Desbloquear*;
- *Eliminar worktree…*.

## Una rama en otro worktree

Git mantiene una rama con checkout en un solo worktree a la vez. Si haces checkout de una rama que está abierta en otro sitio, GitLoom ofrece *Abrir ese worktree*, o el mismo commit en este worktree sin la rama.

## Eliminar uno

*Eliminar worktree…* borra la carpeta del worktree; la rama se queda. No puedes eliminar el worktree abierto en la pestaña actual.

> **Caution** Si el worktree tiene cambios sin commit, GitLoom te lo indica, y se eliminan junto con la carpeta cuando eliges *Eliminar de todos modos*.
