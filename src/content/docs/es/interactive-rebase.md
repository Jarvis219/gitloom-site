---
title: "Rebase interactivo"
group: History
order: 16
summary: "Reordena, cambia el mensaje, haz squash, edita o descarta commits en un plan visual que no hace nada hasta que lo inicias."
updated: 2026-11-18
---

El rebase interactivo reescribe una serie de commits. GitLoom muestra el plan como una lista que editas; no le pasa nada al repositorio hasta que empiezas.

## Abrir el editor

- Haz clic derecho en un commit ▸ *Rebase interactivo desde aquí…*.
- O suelta una rama sobre otra y elige *Rebase interactivo*.
- Con varios commits seleccionados, *Rebase interactivo de los commits seleccionados…* abre el editor con ellos seleccionados.

También funciona desde el primer commit de todos (`--root`). El editor sustituye al grafo.

## Editar el plan

Cada fila es un commit, con el más antiguo arriba. Define su acción desde el menú o con una tecla:

| Tecla | Acción |
|---|---|
| <kbd>P</kbd> | pick |
| <kbd>R</kbd> | reword |
| <kbd>E</kbd> | edit |
| <kbd>S</kbd> | squash |
| <kbd>F</kbd> | fixup |
| <kbd>C</kbd> | fixup -C |
| <kbd>D</kbd> | drop |

Arrastra filas, o usa <kbd>⌥↑</kbd> y <kbd>⌥↓</kbd>, para reordenar. <kbd>⌘Z</kbd> deshace un cambio en el plan.

- Los mensajes de reword se pueden escribir de antemano, para que el rebase se ejecute sin detenerse.
- El menú de una fila tiene *Añadir un comando después…* para ejecutar un comando en ese punto (una línea `exec`, como un test que detiene el rebase si falla).
- Las ramas apiladas sobre los commits del rebase se mueven con ellos (`--update-refs`), salvo que lo desmarques.
- Los merges del intervalo se aplanan por defecto. Marca *Conservar fusiones* para mantenerlos (`--rebase-merges`). El plan muestra entonces también dónde empieza cada lado de un merge y dónde se vuelve a hacer el merge, y los commits solo pueden moverse dentro de su propio lado.

## Iniciar o cancelar

<kbd>⌘↩</kbd> inicia y Esc cancela. Después, todo el rebase es un solo paso de deshacer.

## Ediciones más rápidas

Sin abrir el editor:

- selecciona varios commits contiguos ▸ *Squash de N commits* (se ejecuta al momento combinando los mensajes, el más antiguo primero; *…y editar mensaje* para escribirlo tú) o *Descartar N commits…*;
- haz clic derecho en un commit ▸ *Editar mensaje…*, *Descartar commit…*, *Subir/Bajar*.
