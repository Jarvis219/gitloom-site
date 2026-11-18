---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "Conecta gitlab.com o tu propio servidor GitLab con un token para trabajar con merge requests e issues."
updated: 2026-11-18
---

GitLoom funciona con gitlab.com y con tu propio servidor GitLab, mediante un token de acceso personal.

## Añadir un token

1. Abre **Ajustes ▸ Hosting** y haz clic en *Añadir token de GitLab…*.
2. Introduce el host.
3. Pega un token de acceso personal con los permisos `api`, `read_user` y `write_repository`. *Crear un token…* abre la página adecuada de tu GitLab.

El token se guarda en el Llavero de macOS. Los push por HTTPS lo usan.

## Qué puedes hacer

La barra lateral muestra MERGE REQUESTS e issues. Puedes:

- crear un merge request, comentarlo, aprobarlo y fusionarlo (con squash);
- ver tus merge requests en el Launchpad (<kbd>⇧⌘K</kbd>);
- crear y consultar issues.

## Aún no compatible

Con GitLab, GitLoom aún no admite:

- pipelines de CI (el grupo ACCIONES está oculto);
- comentarios en una línea de código;
- organizaciones;
- iniciar sesión sin token.
