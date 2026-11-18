---
title: "Atajos"
group: Personalise
order: 36
summary: "Todos los atajos de teclado de GitLoom, y cómo cambiar los de la barra de menús."
updated: 2026-11-18
---

Los 35 atajos marcados con ✎, todos los de la barra de menús, se pueden cambiar en **Ajustes ▸ Teclado**. Los demás (los del sistema, como <kbd>⌘W</kbd> y <kbd>⌘Z</kbd>, y las teclas que solo funcionan dentro de una hoja o un editor) son fijos. El menú siempre muestra la tecla actual, y todo lo que aparece aquí también está en la paleta de comandos (<kbd>⌘K</kbd>).

## En cualquier sitio

| Teclas | Acción |
|---|---|
| <kbd>⌘K</kbd> ✎ | Paleta de comandos: `>` comandos, `/` archivos, `:` commits, `@` autores, `#` pull requests e issues |
| <kbd>⌘P</kbd> ✎ | Apertura rápida de un archivo del repositorio |
| <kbd>⌘F</kbd> / <kbd>⌘G</kbd> / <kbd>⇧⌘G</kbd> ✎ | Buscar commits / coincidencia siguiente / coincidencia anterior |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Deshacer / rehacer la última operación de Git (en un campo de texto: deshacer lo escrito) |
| <kbd>⌘T</kbd> ✎ | Nueva pestaña |
| <kbd>⌘W</kbd> | Cerrar pestaña |
| <kbd>⌃⇥</kbd> / <kbd>⌃⇧⇥</kbd> ✎ | Pestaña siguiente / anterior |
| <kbd>⇧⌘C</kbd> ✎ | Clonar un repositorio |
| <kbd>⌘O</kbd> ✎ | Abrir un repositorio (en una pestaña nueva si esta ya muestra uno) |
| <kbd>⇧⌘R</kbd> ✎ | Mostrar el repositorio en Finder |
| <kbd>⌥⌘T</kbd> ✎ | Abrir el repositorio en tu app de terminal |
| <kbd>⇧⌘K</kbd> | Launchpad (pull requests e issues de tus cuentas de GitHub y GitLab) |
| <kbd>⌥⇧⌘L</kbd> ✎ | Registro de Git (todos los comandos git que ha ejecutado GitLoom) |
| <kbd>⌘,</kbd> | Ajustes |
| <kbd>⌘?</kbd> | Ayuda de GitLoom |

## Repositorio

| Teclas | Acción |
|---|---|
| <kbd>⇧⌘L</kbd> ✎ | Fetch de todos los remotos |
| <kbd>⇧⌘↓</kbd> ✎ | Pull |
| <kbd>⇧⌘↑</kbd> ✎ | Push |
| <kbd>⌘B</kbd> ✎ | Crear una rama en el commit seleccionado |
| <kbd>⇧⌘S</kbd> ✎ | Guardar todos los cambios en el stash |
| <kbd>⌥⌘Y</kbd> ✎ | Historial del archivo seleccionado |
| <kbd>⌥⌘B</kbd> ✎ | Blame del archivo seleccionado |
| <kbd>⌘0</kbd> ✎ | Mostrar u ocultar la barra lateral |
| <kbd>⌥⌘0</kbd> ✎ | Mostrar u ocultar el panel de detalles |
| <kbd>⌥⌘L</kbd> ✎ | Mover el panel de detalles abajo / otra vez a la derecha |

## Grafo, cambios y diff

| Teclas | Acción |
|---|---|
| <kbd>↑</kbd> <kbd>↓</kbd> o <kbd>J</kbd> <kbd>K</kbd> | Commit anterior / siguiente |
| <kbd>⇧</kbd>-clic, <kbd>⌘</kbd>-clic | Seleccionar un intervalo / varios commits (comparar, squash, cherry-pick) |
| <kbd>⌘C</kbd> | Copiar el SHA del commit seleccionado |
| <kbd>⌘Y</kbd> | Vista rápida del archivo seleccionado |
| <kbd>⇧⌘A</kbd> | Preparar todo |
| <kbd>⌥⇧⌘A</kbd> | Quitar todo de preparados |
| <kbd>⌘↩</kbd> | Hacer commit (en el mensaje del commit) |
| <kbd>⌥⌘G</kbd> | Escribir el mensaje del commit con IA (cuando la IA está activada) |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Cambio anterior / siguiente del archivo |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Archivo anterior / siguiente |

## Editores

| Teclas | Acción |
|---|---|
| <kbd>⌘E</kbd> ✎ | Editar el archivo abierto |
| <kbd>⌘S</kbd> ✎ | Guardar |
| <kbd>⌥⌘S</kbd> ✎ | Guardar y preparar |
| <kbd>⌘L</kbd> ✎ | Ir a la línea |
| <kbd>⌥⌘F</kbd> ✎ | Buscar y reemplazar |
| <kbd>⌘/</kbd> ✎ | Comentar o descomentar las líneas seleccionadas |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> ✎ | Aumentar / reducir la sangría de las líneas seleccionadas |
| <kbd>P</kbd> <kbd>R</kbd> <kbd>E</kbd> <kbd>S</kbd> <kbd>F</kbd> <kbd>C</kbd> <kbd>D</kbd> | Rebase interactivo: pick, reword, edit, squash, fixup, fixup -C, drop para las filas seleccionadas |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Rebase interactivo: mover las filas seleccionadas (con *Conservar fusiones*, solo dentro de su propia rama) |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Rebase interactivo: deshacer / rehacer un cambio en el plan (git no se toca hasta que empiezas) |
| <kbd>⌘↩</kbd> | Rebase interactivo: iniciar el rebase (o guardar el plan restante) |
| Esc | Rebase interactivo: cerrar el editor sin hacer nada |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Conflictos de fusión: conflicto anterior / siguiente |
| <kbd>⌘S</kbd> | Conflictos de fusión: guardar y marcar el archivo como resuelto |
| <kbd>⌘[</kbd> / <kbd>⌘]</kbd> | Historial del archivo: atrás / adelante |

## Terminal

| Teclas | Acción |
|---|---|
| <kbd>⌃`</kbd> ✎ | Mostrar u ocultar el terminal (lo oculta cuando tiene el foco) |
| <kbd>⌃⇧`</kbd> ✎ | Nueva sesión de terminal |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> ✎ | Texto del terminal más grande / más pequeño |
| <kbd>⇥</kbd> o <kbd>→</kbd> | Insertar la sugerencia seleccionada |
| <kbd>↑</kbd> <kbd>↓</kbd> | Elegir una sugerencia |
| Esc | Cerrar las sugerencias; en un prompt vacío, volver al grafo (ocultar el terminal hace lo mismo) |
| <kbd>⌘</kbd>-clic | Abrir lo que hay bajo el puntero: un SHA selecciona el commit, una ruta abre el archivo, una URL abre el navegador |
