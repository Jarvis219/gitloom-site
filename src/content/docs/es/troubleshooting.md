---
title: "Solución de problemas"
group: Help
order: 38
summary: "Qué probar cuando algo va mal: deshacer, encontrar commits perdidos, ver qué ejecutó git y resolver problemas de configuración habituales."
updated: 2026-11-18
---

La mayoría de los problemas en GitLoom se pueden deshacer o explicar. Empieza por aquí.

## Algo ha salido mal en el repositorio

- **Deshaz primero**: <kbd>⌘Z</kbd> o **Edición ▸ Historial de operaciones…**. La mayoría de las operaciones se pueden deshacer (consulta [Deshacer y rehacer](/es/docs/undo-and-redo/)).
- **Los commits parecen haber desaparecido**: **Repositorio ▸ Reflog…** y **Buscar commits perdidos…** los encuentran (consulta [Recuperación con reflog](/es/docs/reflog-recovery/)).
- **Atascado en un rebase o un merge**: un repositorio que se quedó a mitad de uno muestra un aviso con *Continuar* y *Abortar*, también después de reiniciar GitLoom.

## Ver qué ha hecho GitLoom

**Ventana ▸ Registro de Git** (<kbd>⌥⇧⌘L</kbd>) muestra todos los comandos git que ha ejecutado GitLoom: el repositorio, el comando, cuánto tardó y su código de salida. Solo se guarda la línea de comando, nunca su salida, su entrada ni las credenciales.

Una línea fina en movimiento bajo la barra de herramientas significa que git se está comunicando con un remoto; pasa el puntero por encima para ver qué hace. El mensaje de una operación lenta tiene *Cancelar*.

## Problemas habituales

- **GitLoom no encuentra git o dice que es demasiado antiguo.** Instala git 2.40 o posterior (consulta [Instalación](/es/docs/install/)), o elige otro git en **Ajustes ▸ Git ▸ Binario de Git**.
- **Un hook no encuentra node, python o un linter.** Añade las carpetas que necesita a *PATH adicional* en **Ajustes ▸ Git ▸ Hooks**. Se aplica a los repositorios que abras después.
- **Un hook se queda colgado.** Un commit cuyo hook sigue en marcha después de un minuto lo indica y ofrece *Detener*. *Detener un hook después de* en **Ajustes ▸ Git ▸ Hooks** lo detiene automáticamente (pasados 10 minutos, por defecto).
- **Se usa la clave SSH equivocada.** Configura [cuentas SSH](/es/docs/ssh-accounts/).

## Registros y cachés

En **Ajustes ▸ Avanzado**:

- *Escribir un registro de depuración* registra los comandos git que ejecuta GitLoom, con su estado de salida y su duración, en un archivo de la carpeta de registros. Las contraseñas y los tokens de las URL se ocultan. *Mostrar carpeta de registros* la abre.
- *Borrar cachés…* elimina los pull requests y los issues guardados para usarlos sin conexión y las versiones de archivos en caché. Se vuelven a descargar cuando hacen falta.
- Si no se puede leer tu archivo de ajustes, GitLoom lo aparta, empieza con los valores por defecto y lo indica aquí.

Si nada de esto ayuda, [informa de un problema](/es/docs/report-an-issue/).
