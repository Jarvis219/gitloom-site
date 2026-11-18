---
title: "Terminal integrado"
group: Tools
order: 19
summary: "Un terminal bajo el grafo, en la carpeta del repositorio, que actualiza GitLoom y sugiere comandos git."
updated: 2026-11-18
---

<kbd>⌃`</kbd> abre un terminal bajo el grafo, en la carpeta del repositorio, con tu propia shell de inicio de sesión. El grafo se actualiza en cuanto termina un comando git ejecutado en él.

## Sugerencias y enlaces

Mientras escribes un comando git, GitLoom sugiere subcomandos, ramas, remotos y alias. <kbd>↑</kbd> <kbd>↓</kbd> eligen una sugerencia, <kbd>⇥</kbd> o <kbd>→</kbd> la insertan y Esc cierra la lista.

Haz <kbd>⌘</kbd>-clic en lo que hay bajo el puntero: un SHA selecciona ese commit, una ruta abre el archivo y una URL abre el navegador.

## Teclas

| Teclas | Acción |
|---|---|
| <kbd>⌃`</kbd> | Mostrar u ocultar el terminal (lo oculta cuando tiene el foco) |
| <kbd>⌃⇧`</kbd> | Nueva sesión de terminal |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> | Texto del terminal más grande / más pequeño |
| Esc | En un prompt vacío, volver al grafo |

Si un comando sigue en marcha cuando cierras la pestaña, GitLoom pregunta primero.

## Ajustes

**Ajustes ▸ Integraciones ▸ Terminal** tiene:

- *Integración con la shell*: permite a GitLoom saber cuándo termina un comando (actualización instantánea, sugerencias). Si la desactivas, eso deja de funcionar. Tus dotfiles nunca se editan, en ningún caso.
- *Sugerir comandos git mientras escribes*, para desactivar solo las sugerencias.
- *Historial de desplazamiento*: cuántas líneas conserva cada sesión (10.000 por defecto).
- *Mostrar los comandos git que ejecuta GitLoom*: una línea atenuada por cada comando que ejecuta la app, para aprender git.
- *Entrada segura por teclado*: mientras un terminal tiene el teclado, otras apps no pueden leer lo que escribes.
- *Shell* y *Argumentos*: otra shell para las sesiones nuevas, como `/opt/homebrew/bin/fish`. Si la ruta no se puede ejecutar, se vuelve a tu shell de inicio de sesión.

Los cambios se aplican a las sesiones de terminal nuevas. El terminal usa el tipo de letra del código de **Ajustes ▸ Apariencia**.

## Tu app de terminal habitual

<kbd>⌥⌘T</kbd> abre el repositorio en tu app de terminal. Elige qué app en **Ajustes ▸ Integraciones ▸ “Abrir en el terminal” usa**.
