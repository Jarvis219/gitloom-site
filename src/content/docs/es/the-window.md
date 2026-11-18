---
title: "La ventana"
group: Getting started
order: 3
summary: "La barra lateral, el grafo de commits, el panel de detalles, la barra de herramientas, las pestañas, los avisos y los mensajes."
updated: 2026-11-18
---

La ventana de un repositorio tiene tres partes principales: la barra lateral a la izquierda, el grafo de commits en el centro y el panel de detalles a la derecha o abajo.

![La ventana de GitLoom: barra lateral con ramas, el grafo de commits con carriles de rama de colores y los detalles del commit seleccionado](/shots/graph-light.png)

## Barra lateral

La barra lateral muestra las ramas locales y remotas, las etiquetas, los stashes, los submódulos y los worktrees. El selector Refs/Archivos muestra en su lugar el árbol de archivos del repositorio. Haz clic derecho en una rama o etiqueta ▸ *Fijar arriba* para mantenerla en un grupo FIJADOS por encima del resto. Oculta la barra lateral con el botón de su cabecera o con <kbd>⌘0</kbd>.

## Grafo y panel de detalles

El grafo muestra todos los commits con sus ramas. La fila superior, *Uncommitted changes*, es tu árbol de trabajo. Haz clic derecho en la cabecera de las columnas para mostrar más columnas: autor, fecha, SHA, CI y *Cambios* (líneas añadidas y eliminadas).

El panel de detalles muestra el commit seleccionado con sus archivos y diffs, o el área de preparación cuando está seleccionada la fila del árbol de trabajo. <kbd>⌥⌘0</kbd> lo muestra u oculta, y <kbd>⌥⌘L</kbd> lo mueve entre la derecha y la parte inferior.

## Barra de herramientas y pestañas

La barra de herramientas tiene los botones Deshacer/Rehacer, Pull, Push, Fetch, Rama, Stash, terminal y paneles. Mantén el puntero un momento sobre un botón para ver qué hace y su atajo. Puedes elegir y ordenar los botones en **Ajustes ▸ Disposición**.

Cada repositorio tiene su propia pestaña. **Repositorio ▸ Color de la pestaña** da a un repositorio su propio color, que también aparece como una línea fina bajo la barra de herramientas. **Archivo ▸ Abrir recientes** y el menú del icono del Dock muestran los repositorios recientes. Una pestaña que no has mirado en 10 minutos libera la memoria de su grafo y la vuelve a cargar cuando regresas.

## Avisos y mensajes

Un aviso bajo la barra de herramientas explica cualquier estado inusual, como un rebase o un merge en curso, conflictos o un HEAD separado, y tiene los botones para continuar o abortar.

Los mensajes breves aparecen en la parte superior de la ventana, con un color según su tipo: verde cuando algo se ha completado, azul para información, naranja cuando algo requiere tu atención y rojo cuando algo ha fallado. Los problemas se quedan más tiempo; ✕ los cierra.
