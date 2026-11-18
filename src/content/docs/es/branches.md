---
title: "Ramas"
group: Everyday work
order: 8
summary: "Crea, cambia y gestiona ramas y etiquetas, y haz fetch, pull y push de ellas."
updated: 2026-11-18
---

Las ramas y las etiquetas están en la barra lateral y en el grafo. La mayoría de las acciones están a un clic derecho.

## Crear y cambiar de rama

<kbd>⌘B</kbd> crea una rama en el commit seleccionado. Haz doble clic en una rama para hacer checkout. Haz clic derecho en ramas, etiquetas y commits para todo lo demás: renombrar, eliminar, definir el upstream, etiquetar, reset, revert, cherry-pick y más.

Eliminar una rama sin fusionar pide confirmación y se puede deshacer con <kbd>⌘Z</kbd>.

## Fetch, pull y push

- <kbd>⇧⌘L</kbd> hace fetch de todos los remotos. GitLoom también hace fetch en segundo plano, cada 5 minutos por defecto (cámbialo en **Ajustes ▸ General**). Nunca hace fetch en segundo plano con la batería por debajo del 20 %, en modo de bajo consumo ni en redes caras.
- <kbd>⇧⌘↓</kbd> hace pull. **Repositorio ▸ Pull con** elige una estrategia para un único pull.
- <kbd>⇧⌘↑</kbd> hace push. Marca *Definir upstream* para una rama nueva.

Un force push siempre es explícito y usa `--force-with-lease`. **Repositorio ▸ Push con etiquetas** también hace push de las etiquetas anotadas de los commits enviados.

## Limpieza

**Repositorio ▸ Eliminar ramas fusionadas…** elimina las ramas locales ya fusionadas en la actual. Las ramas protegidas no se tocan; define sus patrones en **Ajustes ▸ Git ▸ Ramas protegidas** (por ejemplo, `main master release/*`).

## Stash

<kbd>⇧⌘S</kbd> lo guarda todo en el stash. *Guardar cambios en el stash…* te permite poner nombre al stash y elegir archivos. Los stashes están en la barra lateral y, por defecto, en el grafo. *Recuperar stash descartado…* encuentra un stash que descartaste por error.

## Carpetas de ramas

Las ramas locales con nombres como `prefix/…` aparecen como carpetas en la barra lateral. Desactívalo en **Ajustes ▸ Disposición**.
