---
title: "Editor de archivos"
group: Tools
order: 20
summary: "Consulta y edita cualquier archivo del repositorio dentro de GitLoom, y luego guárdalo y prepáralo en un solo paso."
updated: 2026-11-18
---

GitLoom puede mostrar y editar los archivos de tu repositorio, así que una pequeña corrección no necesita otra app.

## Abrir un archivo

- <kbd>⌘P</kbd> (Apertura rápida) abre cualquier archivo del repositorio.
- El selector Refs/Archivos de la barra lateral muestra el árbol de archivos. Ahí también puedes crear un *Nuevo archivo…* o una *Nueva carpeta…*, *Renombrar…* o *Mover a la Papelera*, y *Mostrar archivos ignorados*.

Un archivo se abre en modo de lectura. Pulsa <kbd>⌘E</kbd> o haz clic en *Editar archivo* para editarlo. Esc vuelve al grafo.

## Teclas de edición

| Teclas | Acción |
|---|---|
| <kbd>⌘S</kbd> | Guardar |
| <kbd>⌥⌘S</kbd> | Guardar y preparar |
| <kbd>⌘L</kbd> | Ir a la línea |
| <kbd>⌥⌘F</kbd> | Buscar y reemplazar |
| <kbd>⌘/</kbd> | Comentar o descomentar las líneas seleccionadas |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> | Aumentar / reducir la sangría de las líneas seleccionadas |

Las opciones del editor incluyen *Ajustar líneas*, *Mostrar espacios y tabulaciones*, *Cerrar paréntesis y comillas* y *El margen compara con HEAD*. El tipo de letra del código y su tamaño se definen en **Ajustes ▸ Apariencia**.

## Cuando el archivo cambia en el disco

Si otra app cambia el archivo mientras tienes cambios sin guardar, GitLoom te avisa y ofrece *Conservar lo mío*, *Recargar* o *Comparar*. Un archivo con marcadores de conflicto indica que guardarlo no lo marca como resuelto; para eso, usa el [editor de conflictos](/es/docs/resolving-conflicts/).

GitLoom también espera para instalar una actualización mientras un archivo tiene cambios sin guardar.

## Otro editor

*Abrir en el editor externo* abre el archivo en la app elegida en **Ajustes ▸ Integraciones ▸ Abrir archivos con**. Un *Comando personalizado* definido ahí tiene prioridad; `$FILE`, `$LINE` y `$REPO` se rellenan, por ejemplo:

```sh
code -g $FILE:$LINE
```
