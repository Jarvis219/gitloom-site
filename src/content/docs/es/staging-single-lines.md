---
title: "Preparar líneas sueltas"
group: Everyday work
order: 6
summary: "Prepara archivos enteros, bloques sueltos o solo las líneas que elijas, y deja el resto para un commit posterior."
updated: 2026-11-18
---

No tienes que hacer commit de un archivo de una sola vez. GitLoom te permite preparar un archivo entero, un bloque o solo las líneas que elijas.

![Un diff dividido de un archivo modificado, con el panel de preparación y el formulario de commit](/shots/diff-light.png)

## Preparar archivos y bloques

Selecciona la fila *Uncommitted changes* en la parte superior del grafo. El panel de detalles muestra tus archivos sin preparar y preparados. Prepara un archivo entero, o abre su diff y usa *Stage Hunk* en un bloque de cambios. <kbd>⇧⌘A</kbd> lo prepara todo y <kbd>⌥⇧⌘A</kbd> lo quita todo de preparados.

## Preparar líneas

1. Abre el diff del archivo.
2. Haz clic en las líneas que quieras. Una barra muestra cuántas líneas hay seleccionadas.
3. Haz clic en *Preparar líneas* o pulsa <kbd>S</kbd>.

En el diff preparado, selecciona líneas y haz clic en *Quitar líneas de preparados* (<kbd>U</kbd>) para sacarlas otra vez. La ✕ de la barra borra la selección.

## Descartar líneas

En el diff sin preparar, *Descartar líneas* (<kbd>⌫</kbd>) desecha las líneas seleccionadas. GitLoom pregunta primero, y <kbd>⌘Z</kbd> las recupera (consulta [Deshacer y rehacer](/es/docs/undo-and-redo/)).

## Moverse por el diff

<kbd>⌥↑</kbd> y <kbd>⌥↓</kbd> van al cambio anterior o siguiente del archivo; <kbd>⌥⌘↑</kbd> y <kbd>⌥⌘↓</kbd> van al archivo anterior o siguiente.
