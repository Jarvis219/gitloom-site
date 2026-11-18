---
title: "Servidor MCP"
group: Tools
order: 25
summary: "Permite que herramientas de IA como Claude Code, Cursor o VS Code lean tus repositorios a través de GitLoom y, si quieres, hagan cambios seguros."
updated: 2026-11-18
---

Otras herramientas de IA (Claude Code, Claude Desktop, Cursor, VS Code y otras) pueden trabajar con tus repositorios a través del servidor MCP de GitLoom. Está desactivado hasta que lo activas.

## Activarlo

En **Ajustes ▸ Integraciones ▸ Servidor MCP**, define *Las herramientas de IA externas pueden* con una de estas opciones:

- *No hacer nada (desactivado)*;
- *Leer: estado, historial, diffs, blame*;
- *Leer y cambiar: también commit, branch, stash, pull, push*.

Después, conecta tu herramienta. Para Claude Code, copia la línea que aparece ahí y ejecútala en un terminal; tiene este aspecto:

```sh
claude mcp add gitloom -- "/Applications/GitLoom.app/Contents/Helpers/gitloom-mcp"
```

Para otras herramientas, copia el JSON que aparece ahí en la configuración MCP de la herramienta. GitLoom nunca edita los archivos de otra herramienta. El comando `gitloom mcp` también ejecuta el servidor (consulta [La herramienta de línea de comandos gitloom](/es/docs/the-gitloom-command-line-tool/)).

## Leer

Las herramientas pueden ver el estado, el historial, los diffs, el blame, las ramas y los stashes de los repositorios abiertos o de la lista de recientes de la página de inicio. Mientras GitLoom está en marcha, también pueden preguntar qué estás mirando, como el commit seleccionado o el archivo abierto. No pueden cambiar nada.

## Leer y cambiar

Las herramientas también pueden preparar, hacer commit, crear ramas y cambiar de rama, guardar en el stash, hacer fetch, pull (solo fast-forward) y push, en los repositorios abiertos en una pestaña, mientras GitLoom está en marcha. Cada cambio aparece en la ventana con el nombre de la herramienta y un botón *Deshacer*, y en el Historial de operaciones.

Con *Preguntar antes de hacer push* activado, un push espera tu respuesta en la ventana del repositorio; pasados 60 segundos, se rechaza.

Ninguna herramienta puede hacer force push, reset, descartar, eliminar ni reescribir el historial.

## Pull requests, issues y CI

Con *Pull requests, issues y CI a través de mis cuentas* activado, las herramientas pueden leer los pull requests, los issues y las ejecuciones de CI del repositorio a través de la cuenta conectada en GitLoom. Con *Leer y cambiar*, también pueden abrir un pull request para la rama actual y comentar en uno. Nunca ven tu token, y no pueden fusionar, aprobar ni cerrar nada.

Los ajustes muestran las llamadas más recientes en *Actividad reciente*.
