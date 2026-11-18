---
title: "Blame"
group: History
order: 14
summary: "Ve quién cambió por última vez cada línea de un archivo y sigue una línea hacia atrás a través de commits anteriores."
updated: 2026-11-18
---

Blame muestra, para cada línea de un archivo, el commit que la cambió por última vez.

## Abrirlo

Selecciona un archivo y pulsa <kbd>⌥⌘B</kbd>, o elige **Repositorio ▸ Blame…**. Desde el terminal, `gitloom blame <file>:<line>` lo abre en esa línea (consulta [La herramienta de línea de comandos gitloom](/es/docs/the-gitloom-command-line-tool/)). Desde el [historial del archivo](/es/docs/file-history/), *Blame en este commit* muestra el archivo tal como era entonces.

## Seguir una línea hacia atrás

Haz clic en una línea para ver su commit y luego:

- *Mostrar commit* selecciona ese commit en el grafo;
- *Blame del padre* muestra el blame de justo antes de ese commit, para ver quién escribió la línea antes.

## Opciones

La barra encima del archivo tiene:

- *Ignorar espacios en blanco*;
- *Mapa de calor*, que colorea las líneas según su antigüedad;
- en *Más*: *Detectar líneas movidas dentro del archivo (-M)* y *Detectar líneas copiadas de otros archivos (-C)*;
- *Ignorar revisiones*, cuando el repositorio tiene un archivo `.git-blame-ignore-revs` (o está definido `blame.ignoreRevsFile`). Omite los commits que figuran allí, como los cambios de formato.

En un archivo muy largo, el blame puede tardar un rato. GitLoom te lo avisa antes, las líneas se van rellenando a medida que se encuentran y puedes salir en cualquier momento.
