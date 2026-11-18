---
title: "Git LFS"
group: Tools
order: 23
summary: "Sigue archivos grandes con Git LFS, descárgalos y bloquea archivos para que tus compañeros no los editen a la vez."
updated: 2026-11-18
---

GitLoom funciona con Git LFS cuando `git-lfs` está instalado en tu Mac. Sin él, GitLoom puede seguir mostrando los archivos LFS, pero no puede descargarlos ni bloquearlos.

## El grupo GIT LFS

En un repositorio que usa LFS, la barra lateral tiene un grupo GIT LFS con los archivos LFS. Un archivo que aún no se ha descargado, del que solo está el puntero en el disco, tiene un icono de descarga. Un archivo bloqueado muestra quién lo bloqueó. Haz doble clic en un archivo para abrirlo.

Haz clic derecho en un archivo para:

- *Abrir archivo*;
- *Descargar este archivo*, cuando aquí solo está su puntero;
- *Bloquear* o *Desbloquear*.

## Descargar todos los archivos LFS

**Repositorio ▸ Avanzado ▸ Descargar archivos de Git LFS** ejecuta `git lfs pull` y descarga los archivos grandes de este checkout.

## Seguir un nuevo tipo de archivo

Haz clic derecho en un archivo modificado del área de preparación ▸ *Seguir con LFS (\*.ext)* para seguir todos los archivos con esa extensión. En un repositorio que ya usa LFS, el mismo menú tiene *Bloquear (LFS)* y *Desbloquear (LFS)*.
