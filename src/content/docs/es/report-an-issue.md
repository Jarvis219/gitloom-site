---
title: "Informar de un problema"
group: Help
order: 39
summary: "Cómo informar de un error o pedir una función, qué incluir y qué hace GitLoom tras un cierre inesperado."
updated: 2026-11-18
---

Informa de errores y pide funciones en [GitHub Issues](https://github.com/Jarvis219/gitloom-site/issues).

## Qué incluir

- Tu versión de GitLoom (**GitLoom ▸ Acerca de GitLoom**, o **Ajustes ▸ General ▸ Actualizaciones**) y tu versión de macOS.
- Los pasos que llevan al problema.
- Lo que esperabas y lo que ocurrió en su lugar.
- Una captura de pantalla, si muestra el problema.

Si el problema tiene que ver con algo que hizo git, los comandos de **Ventana ▸ Registro de Git** ayudan (consulta [Solución de problemas](/es/docs/troubleshooting/)). Para más detalle, activa *Escribir un registro de depuración* en **Ajustes ▸ Avanzado**; ahí se ocultan las contraseñas y los tokens de las URL.

> **Caution** Los issues son públicos. Nunca pegues tokens, contraseñas, claves SSH ni código privado. Revisa los registros y las capturas antes de adjuntarlos.

## Tras un cierre inesperado

Si GitLoom se cierra de forma inesperada, el siguiente arranque te pregunta si quieres informar de ello. Ofrece:

- *Informar en GitHub…*: tu navegador abre un issue nuevo, rellenado con las versiones de GitLoom y macOS, el error y la parte superior del hilo que falló. Léelo, añade lo que estabas haciendo y envíalo tú.
- *Mostrar informe*: muestra en Finder el informe de fallo que guardó macOS.
- *Ahora no*.

No se envía nada a menos que envíes tú el issue. Marca *No volver a ofrecerlo*, o desactiva *Ofrecer informar de los cierres inesperados* en **Ajustes ▸ Avanzado**, para que deje de preguntar.

**Ayuda ▸ Informar de un problema…** abre un issue vacío en tu navegador en cualquier momento.
