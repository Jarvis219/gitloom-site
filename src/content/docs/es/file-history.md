---
title: "Historial del archivo"
group: History
order: 13
summary: "Ve todos los commits que cambiaron un archivo, siguiendo los renombrados, y consulta o restaura cualquier versión anterior."
updated: 2026-11-18
---

El historial del archivo muestra todos los commits que cambiaron un archivo, siguiéndolo a través de los renombrados.

## Abrirlo

Selecciona un archivo y pulsa <kbd>⌥⌘Y</kbd>, o elige **Repositorio ▸ Historial del archivo…**. Si no hay ningún archivo seleccionado, se abre la paleta de comandos para que elijas uno. Desde el terminal, `gitloom log <file>` también lo abre (consulta [La herramienta de línea de comandos gitloom](/es/docs/the-gitloom-command-line-tool/)).

## Cómo leerlo

Cada entrada es un commit que cambió el archivo, con su autor y su fecha. Un cambio de nombre muestra de dónde viene el archivo. *Seguir renombrados* se puede desactivar. Selecciona dos versiones para ver el diff entre ellas.

<kbd>⌘[</kbd> y <kbd>⌘]</kbd> van hacia atrás y hacia delante. Esc vuelve al grafo.

## Versiones anteriores

Haz clic derecho en una entrada para:

- *Ver esta versión* o *Abrir esta versión en el editor externo*;
- *Mostrar en el gráfico*;
- *Blame en este commit* (consulta [Blame](/es/docs/blame/));
- *Restaurar el archivo a esta versión…*. Si el archivo tiene cambios sin commit, se reemplazan; <kbd>⌘Z</kbd> los recupera.

## Clones superficiales

En un clone superficial, el historial se detiene donde lo hace el clone, y la lista lo indica.
