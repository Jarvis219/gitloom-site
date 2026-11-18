---
title: "Submódulos"
group: Tools
order: 22
summary: "Ve el estado de cada submódulo, inicialízalos y actualízalos, abre uno en su propia pestaña, y añádelos o elimínalos."
updated: 2026-11-18
---

Cuando un repositorio tiene submódulos, la barra lateral muestra un grupo SUBMÓDULOS con cada uno y su estado.

## Cómo leer la lista

Cada fila muestra la ruta del submódulo y su estado:

- una ✓ y el commit con checkout cuando está al día, o *contenido modificado* / *contenido sin seguimiento* cuando tiene cambios;
- *Actualizar* cuando no está sincronizado: el commit con checkout no es el que registra el repositorio principal (pasa el puntero por encima para ver ambos);
- *Inicializar* cuando aún no está inicializado;
- *conflicto* cuando el commit registrado está en conflicto.

## Trabajar con un submódulo

Haz doble clic en un submódulo para abrirlo en su propia pestaña. Haz clic derecho en él para:

- *Abrir en una pestaña nueva*;
- *Actualizar al commit registrado* o *Actualizar al último remoto*;
- *Inicializar*, para uno que no está inicializado;
- *Mostrar en Finder*;
- *Eliminar submódulo…*.

Si un submódulo tiene cambios sin commit, la actualización pregunta primero. git se detiene si tus cambios estorban; no se fuerza nada.

Para actualizar los submódulos después de cada pull que traiga commits nuevos, activa *Actualizar los submódulos tras hacer pull* en **Ajustes ▸ Git**.

## Añadir un submódulo

**Repositorio ▸ Avanzado ▸ Añadir submódulo…** pide la URL, la ruta y, opcionalmente, una rama.

## Eliminar un submódulo

*Eliminar submódulo…* desinicializa el submódulo y lo quita del índice. Los datos de su repositorio (`.git/modules/<name>`) van a la Papelera, así que sus commits siguen siendo recuperables. Haz commit después para terminar. Si el submódulo tiene cambios sin commit, commits que no están en ningún remoto o stashes, GitLoom los enumera primero.
