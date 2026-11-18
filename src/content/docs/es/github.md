---
title: "GitHub"
group: Accounts & hosting
order: 27
summary: "Inicia sesión en GitHub para trabajar con pull requests, issues, Actions y tus organizaciones desde GitLoom."
updated: 2026-11-18
---

Inicia sesión en GitHub para usar pull requests, issues, el Launchpad y Actions en GitLoom.

## Iniciar sesión

Abre **Ajustes ▸ Hosting** y haz clic en *Iniciar sesión con GitHub…*. *Obtener un código* te da un código; *Copiar código y abrir GitHub* lo copia y abre la página donde lo introduces.

También puedes usar *Añadir token…* y pegar un token de acceso personal, detallado o clásico. GitLoom comprueba los permisos que puede ver.

Los tokens se guardan solo en el Llavero de macOS.

## Qué puedes hacer

- Crear, revisar y fusionar [pull requests](/es/docs/pull-requests-and-reviews/).
- Crear y consultar [issues](/es/docs/issues/).
- Ver las ejecuciones de GitHub [Actions](/es/docs/actions/) junto a sus commits.
- **Launchpad** (<kbd>⇧⌘K</kbd>) muestra los pull requests y los issues que te esperan en todos tus repositorios.
- **Ventana ▸ Organizaciones** muestra tus organizaciones, sus equipos y sus miembros.
- **Repositorio ▸ GitHub / GitLab** tiene *Publicar repositorio…*, que crea el repositorio en GitHub, lo añade como `origin` y hace push de la rama actual, y *Hacer fork en GitHub*.
- Clona desde tus cuentas y organizaciones: <kbd>⇧⌘C</kbd> ▸ *Elegir de tu cuenta…*.

## Tu correo de commit

Antes de un commit, GitLoom avisa cuando el correo no es uno de los de tu cuenta de GitHub, porque GitHub no vincularía el commit contigo.

## Claves SSH

El inicio de sesión es para la API. Qué clave SSH hace push para cada usuario se define en [Cuentas SSH](/es/docs/ssh-accounts/). *Claves SSH…* en una cuenta de **Ajustes ▸ Hosting** muestra las claves que hay en GitHub y puede subir las tuyas.
