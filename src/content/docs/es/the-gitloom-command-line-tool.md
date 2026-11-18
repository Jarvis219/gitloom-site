---
title: "La herramienta de línea de comandos gitloom"
group: Tools
order: 24
summary: "Instala el comando gitloom para abrir repositorios, diffs, el historial de archivos y el blame desde tu terminal."
updated: 2026-11-18
---

El comando `gitloom` abre GitLoom desde un terminal. Inicia GitLoom cuando hace falta.

## Instalarla

Elige **GitLoom ▸ Instalar herramienta de línea de comandos…**. Esto añade un enlace en `~/.local/bin/gitloom`, sin contraseña de administrador. Si `~/.local/bin` aún no está en tu PATH, GitLoom te lo indica; añade esta línea a `~/.zshrc`:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

Para instalarla para todas las shells sin cambiar el PATH, usa *Instalar en /usr/local/bin…* en **Ajustes ▸ Integraciones ▸ Herramienta de línea de comandos**. macOS pide la contraseña de un administrador. Esa sección también muestra dónde está instalado `gitloom`.

GitLoom solo reemplaza su propio enlace. Si ya hay otro archivo llamado `gitloom`, no se toca y GitLoom te lo indica.

## Comandos

| Comando | Qué hace |
|---|---|
| `gitloom [path]` | Abre el repositorio que contiene `path` (por defecto: la carpeta actual) |
| `gitloom clone <url> [dir]` | Abre el diálogo Clonar ya rellenado |
| `gitloom diff [<rev>]` | Abre el repositorio en el que estás y selecciona `<rev>` (por defecto: la fila de cambios sin commit) |
| `gitloom log <file>` | Abre el historial del archivo |
| `gitloom blame <file>[:<line>]` | Abre el blame del archivo, en esa línea |
| `gitloom mcp` | Ejecuta el servidor MCP de GitLoom por stdio (consulta [Servidor MCP](/es/docs/mcp-server/)) |

Por ejemplo:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
