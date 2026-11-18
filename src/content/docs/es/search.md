---
title: "Búsqueda"
group: History
order: 15
summary: "Busca commits por mensaje, autor, SHA, ruta o contenido, y salta a cualquier sitio con la paleta de comandos y la apertura rápida."
updated: 2026-11-18
---

GitLoom tiene tres formas de encontrar cosas: Buscar para los commits, la paleta de comandos para cualquier cosa y la apertura rápida para los archivos.

## Buscar commits

<kbd>⌘F</kbd> busca en los mensajes de commit, los autores, los SHA, las rutas de archivo o los cambios (`-S`, los commits que añaden o quitan un fragmento de texto). Puede filtrar el grafo para mostrar solo las coincidencias. <kbd>⌘G</kbd> y <kbd>⇧⌘G</kbd> van a la coincidencia siguiente y anterior.

- Los acentos no importan: “nguoi” encuentra “người”.
- `re:` acepta una expresión regular para todo el mensaje, por ejemplo `re:^fix(ed)?:`.

## Paleta de comandos

<kbd>⌘K</kbd> ejecuta cualquier comando y salta a ramas, archivos, commits, autores y pull requests. Empieza con un carácter para buscar un solo tipo de cosa:

| Prefijo | Busca |
|---|---|
| `>` | comandos |
| `/` | archivos |
| `:` | commits |
| `@` | autores |
| `#` | pull requests e issues |

## Apertura rápida

<kbd>⌘P</kbd> abre cualquier archivo del repositorio. Una vez abierto, <kbd>⌘E</kbd> te permite editarlo (consulta [Editor de archivos](/es/docs/file-editor/)).
