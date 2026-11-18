---
title: "Leer el historial"
group: History
order: 12
summary: "Muévete por el grafo de commits, elige sus columnas y mira dentro de cualquier commit."
updated: 2026-11-18
---

El grafo, en el centro de la ventana, muestra todos los commits con sus ramas, cada rama en su propio carril de color.

![El grafo de commits con carriles de rama, la barra lateral y los detalles del commit seleccionado](/shots/graph-light.png)

## Moverse

- <kbd>↑</kbd> <kbd>↓</kbd> o <kbd>J</kbd> <kbd>K</kbd> van al commit anterior o siguiente.
- <kbd>⇧</kbd>-clic selecciona un intervalo y <kbd>⌘</kbd>-clic selecciona varios commits, por ejemplo para compararlos, hacer squash o cherry-pick.
- <kbd>⌘C</kbd> copia el SHA del commit seleccionado.

Selecciona un commit para ver sus archivos y diffs en el panel de detalles.

## Columnas

Haz clic derecho en la cabecera de las columnas del grafo para mostrar más columnas: autor, fecha, SHA, CI y *Cambios* (líneas añadidas y eliminadas). Esa elección se aplica al repositorio actual. **Visualización ▸ Columnas del grafo** y **Ajustes ▸ Disposición ▸ Columnas del gráfico** las cambian para todos los repositorios.

## Aspecto

En **Ajustes ▸ Apariencia** puedes elegir:

- la densidad de las filas (también en **Visualización ▸ Densidad**);
- fechas relativas durante la última semana o siempre absolutas, un formato de fecha personalizado, y la fecha de commit o la de autor;
- si los stashes aparecen en el grafo;
- los colores de los carriles: del tema, aptos para daltónicos o monocromo;
- los avatares: pájaros, iniciales en color, Gravatar, GitHub o ninguno.

## Buscar un commit

<kbd>⌘F</kbd> busca en el historial y puede filtrar el grafo para mostrar solo las coincidencias. Consulta [Búsqueda](/es/docs/search/).
