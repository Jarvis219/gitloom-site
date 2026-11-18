---
title: "Hacer commit"
group: Everyday work
order: 7
summary: "Escribe un mensaje, modifica el último commit, añade coautores, sigue la ejecución de tus hooks y gestiona los archivos que git no muestra."
updated: 2026-11-18
---

Selecciona la fila *Uncommitted changes*, prepara lo que quieras (consulta [Preparar líneas sueltas](/es/docs/staging-single-lines/)), escribe el mensaje y pulsa <kbd>⌘↩</kbd>.

## El formulario de commit

- *Modificar* cambia el último commit en lugar de crear uno nuevo. Mientras está marcado, también se muestran los archivos que ese commit ya cambia.
- *Coautores* sugiere a las personas del historial reciente, incluidos los coautores que añadiste antes.
- Mientras se ejecuta un commit, lo que muestran tus hooks (un linter `pre-commit`, tests) aparece bajo el mensaje. Si un hook sigue en marcha después de un minuto, GitLoom te lo indica y ofrece *Detener*.
- Una línea muestra con qué identidad haces commit. Avisa cuando el correo no coincide con el [perfil](/es/docs/profiles/) del repositorio, o no es uno de los correos de tu cuenta de GitHub (GitHub no vincularía el commit contigo).

Con la IA activada, <kbd>⌥⌘G</kbd> escribe el mensaje por ti (consulta [Elegir un proveedor](/es/docs/choosing-a-provider/)).

## Ajustes del mensaje

En **Ajustes ▸ Git ▸ Mensaje del commit** puedes definir una plantilla con la que empieza el formulario, y las longitudes del resumen a partir de las cuales el contador se vuelve amarillo y rojo (50 y 72 caracteres por defecto). Solo avisa; no se recorta nada. El `commit.template` propio de un repositorio tiene prioridad sobre la plantilla.

## Archivos que git no muestra

- Al *Ignorar* un archivo que ya tiene seguimiento, GitLoom ofrece *Dejar de seguir* (`git rm --cached`): el archivo sale del repositorio con el siguiente commit y se queda en el disco.
- Haz clic derecho en un archivo modificado ▸ *Ocultar cambios locales* para un archivo con seguimiento que cambias a propósito, como una configuración local. Una línea encima de la lista de archivos indica cuántos hay ocultos, y *Mostrar…* los vuelve a mostrar.
- En un disco de Mac, renombrar `readme.md` a `README.md` en Finder es invisible para git. GitLoom lo detecta y ofrece *Registrar el cambio de nombre*.

## Deshacer un commit

<kbd>⌘Z</kbd> deshace el último commit o la última modificación. Consulta [Deshacer y rehacer](/es/docs/undo-and-redo/).
