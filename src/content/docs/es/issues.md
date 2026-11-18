---
title: "Issues"
group: Accounts & hosting
order: 30
summary: "Crea y consulta issues de GitHub y GitLab, y crea una rama a partir de uno."
updated: 2026-11-18
---

Con una cuenta de GitHub o GitLab añadida, GitLoom muestra los issues del repositorio en la barra lateral.

## Crear y consultar

- **Repositorio ▸ GitHub / GitLab ▸ Nuevo issue…** crea un issue.
- Consulta los issues del repositorio en el grupo Issues de la barra lateral. Puedes filtrarlos por etiqueta y por hito.
- Haz clic derecho en un issue para *Crear rama desde issue*, *Abrir en el navegador* o *Copiar enlace*.
- En la paleta de comandos (<kbd>⌘K</kbd>), escribe `#` para buscar pull requests e issues.
- **Launchpad** (<kbd>⇧⌘K</kbd>) muestra los issues que te esperan en todos tus repositorios.

## Crear una rama a partir de un issue

*Crear rama desde issue* crea una rama con el nombre del issue. El nombre sigue la plantilla de **Ajustes ▸ Git ▸ Rama desde un issue**, por defecto `{type}/{number}-{slug}`, donde `{type}` es `fix` o `feat`. La plantilla del `.gitloom/team.json` de un equipo tiene prioridad sobre la tuya.
