---
title: "Instalación"
group: Getting started
order: 1
summary: "Qué necesita GitLoom, cómo descargarlo y cómo abrirlo la primera vez."
updated: 2026-11-18
---

GitLoom es un cliente Git gratuito para Mac. Ejecuta tu propio `git`, así que tu configuración, tus hooks, tus credenciales y tus alias se aplican igual.

## Requisitos

- macOS 14 Sonoma o posterior, en un Mac con Apple silicon.
- git 2.40 o posterior. Sirve el de las Xcode Command Line Tools, igual que el de Homebrew.

Para obtener git de Apple, ejecuta esto en Terminal:

```sh
xcode-select --install
```

Al arrancar, GitLoom te avisa si no encuentra una versión de git lo bastante reciente. Si tienes git en un lugar poco habitual, elígelo en **Ajustes ▸ Git**.

## Descarga

Descarga `GitLoom.dmg` (46 MB) desde la [última versión](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg), o desde Terminal:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

Abre la imagen de disco y arrastra GitLoom a tu carpeta Aplicaciones.

## Ábrelo por primera vez

GitLoom aún no está notarizado por Apple, así que macOS bloquea el primer arranque. Para abrirlo:

1. Abre GitLoom una vez. macOS indica que no se puede abrir.
2. Ve a **Ajustes del Sistema ▸ Privacidad y seguridad** y haz clic en *Abrir igualmente* junto al mensaje sobre GitLoom.
3. Confirma. A partir de entonces, GitLoom se abre con normalidad.

Solo tienes que hacerlo una vez. Las versiones posteriores llegan mediante el actualizador del propio GitLoom (consulta [Actualizaciones](/es/docs/updates/)).

## Opcional: la herramienta de línea de comandos

Elige **GitLoom ▸ Instalar herramienta de línea de comandos…** para añadir el comando `gitloom`, de modo que `gitloom .` abra la carpeta en la que estás. Consulta [La herramienta de línea de comandos gitloom](/es/docs/the-gitloom-command-line-tool/).
