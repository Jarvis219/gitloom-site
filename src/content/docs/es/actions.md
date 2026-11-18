---
title: "Actions"
group: Accounts & hosting
order: 31
summary: "Sigue las ejecuciones de GitHub Actions junto a sus commits, lee los registros, vuelve a ejecutar jobs, inicia workflows y descarga artefactos."
updated: 2026-11-18
---

Con una cuenta de GitHub añadida, GitLoom muestra las ejecuciones de GitHub Actions en el grupo ACCIONES de la barra lateral y junto a sus commits en la columna CI del grafo.

![La barra lateral con un pull request y ejecuciones de GitHub Actions, y el job build de una ejecución abierto](/shots/actions-light.png)

## Ejecuciones y registros

Abre una ejecución para ver sus jobs, anotaciones y artefactos. Abre un job para leer su registro. La vista del registro puede mostrar marcas de tiempo, ajustar las líneas o mostrar solo los errores, y *Guardar registro…* guarda una copia.

## Volver a ejecutar, cancelar e iniciar

- *Volver a ejecutar todos los jobs*, *Volver a ejecutar los jobs fallidos* o *Volver a ejecutar este job*.
- *Cancelar ejecución*.
- *Ejecutar workflow…* inicia un workflow que tiene un disparador `workflow_dispatch`, con sus entradas.
- Descarga los artefactos de una ejecución.

Una ejecución desde un fork que espera aprobación lo indica, muestra los archivos de workflow que cambia su pull request y ofrece *Aprobar y ejecutar…*. Revisa antes los cambios: los workflows aprobados se ejecutan con los ajustes del repositorio.

## Notificaciones

GitLoom puede avisarte cuando termina una ejecución que iniciaste. Elige cuándo en **Ajustes ▸ Git ▸ GitHub Actions ▸ Notificar cuando termine una CI que yo inicié**: nunca, solo cuando falla (el valor por defecto) o siempre.

> **Note** Actions es solo para GitHub. Con GitLab, los pipelines de CI aún no son compatibles y el grupo ACCIONES está oculto.
