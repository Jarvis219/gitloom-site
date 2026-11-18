---
title: "Recuperación con reflog"
group: History
order: 17
summary: "Recupera commits que parecen perdidos tras un reset, un rebase o una rama eliminada, con el reflog y Buscar commits perdidos."
updated: 2026-11-18
---

En git es difícil perder commits. Si uno parece haber desaparecido, prueba primero <kbd>⌘Z</kbd> o **Edición ▸ Historial de operaciones…** (consulta [Deshacer y rehacer](/es/docs/undo-and-redo/)). Si eso no ayuda, busca en el reflog.

## El reflog

Elige **Repositorio ▸ Reflog…**. Muestra todas las posiciones que ha tenido HEAD, de la más reciente a la más antigua, así que ahí están los commits que perdiste con un reset o un rebase. Elige una rama arriba para ver en su lugar el reflog de esa rama, y escribe en el filtro para buscar por SHA, acción o mensaje.

También puedes hacer clic derecho en una rama ▸ *Mostrar reflog* para abrir el reflog de esa rama.

## Commits perdidos

**Repositorio ▸ Buscar commits perdidos…** (o la pestaña *Commits perdidos*) busca commits a los que no llega ninguna rama, etiqueta ni reflog, por ejemplo los commits de una rama que se eliminó.

## Recuperar un commit

Selecciona un commit en cualquiera de las dos listas y luego:

- *Crear rama aquí…* pone una rama nueva en él;
- *Cherry-pick* lo copia en tu rama actual;
- *Restablecer la rama actual aquí…* mueve tu rama actual a él.
