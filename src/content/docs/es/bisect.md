---
title: "Bisect"
group: History
order: 18
summary: "Encuentra el commit que rompió algo probando unos pocos commits y respondiendo Good o Bad."
updated: 2026-11-18
---

Bisect encuentra el commit que introdujo un problema. Le indicas a GitLoom un commit en el que todo funcionaba y otro en el que no, y luego pruebas los commits intermedios que elige.

## Empezar

Antes, haz commit de tu trabajo o guárdalo en el stash: los archivos cambian a medida que se hace checkout de los commits.

Elige **Repositorio ▸ Bisect…**, o haz clic derecho en un commit más antiguo que aún funcionaba ▸ *Bisect: este commit es bueno…*. GitLoom te pide un commit malo y uno bueno.

## Probar y responder

GitLoom hace checkout de un commit entre los dos. Pruébalo y responde en la barra encima del grafo:

- *Good* si el problema no está;
- *Bad* si está;
- *Omitir* si este commit no se puede probar.

Tras unas cuantas respuestas, la barra indica el primer commit malo. Si los commits omitidos impiden acotar más, muestra los commits que podrían ser.

## Deja que un comando pruebe por ti

Si un comando puede distinguir un commit bueno de uno malo, como un único test, haz clic en *Ejecutar script…* en la barra (`git bisect run`). git hace entonces checkout de un commit tras otro y ejecuta el comando en el repositorio. Debe salir con 0 cuando el commit es bueno y con 1 cuando es malo; 125 significa que el commit no se puede probar.

## Terminar

*Terminar* te devuelve al punto de partida. *Detener* finaliza el bisect en cualquier momento y también vuelve al punto de partida.
