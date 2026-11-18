---
title: "Cuentas SSH"
group: Accounts & hosting
order: 26
summary: "Usa la clave SSH correcta para cada cuenta cuando tienes varias en el mismo host, en GitLoom y en el terminal."
updated: 2026-11-18
---

Si tienes varias cuentas en el mismo host, como una cuenta de GitHub del trabajo y otra personal, una cuenta SSH le dice a GitLoom qué clave corresponde a qué usuario y qué repositorios la usan.

## Configurar una cuenta

Abre **Ajustes ▸ Cuentas** y haz clic en *Añadir cuenta SSH…*. Para cada cuenta:

- indica el host y tu usuario en él;
- añade sus claves: *Importar claves…* muestra las claves de `~/.ssh`, ssh-agent, 1Password y Secretive, o *Generar…* crea una nueva;
- en *Usar para los repositorios*, añade los propietarios o carpetas que deben usarla (*Añadir carpeta…*), o conviértela en la *Cuenta predeterminada* del host.

A partir de ahí, fetch, pull, push y clone usan la clave correcta. Con *Escribir también core.sshCommand en cada repositorio* activado, se define el `core.sshCommand` del repositorio para que un simple `git push` en el terminal haga lo mismo.

Los repositorios con su propio `core.sshCommand`, un alias de `~/.ssh/config` con `IdentityFile` o `GIT_SSH_COMMAND` en tu shell no se tocan.

## Alias de host

Si usas alias de host de `~/.ssh/config` (como `github-work`), **Repositorio ▸ Remotos… ▸ Alias SSH** cambia un remoto para que use uno.

## Rotar una clave

*Rotar…* en una clave crea una clave nueva, la sube a la cuenta y elimina la antigua en cuanto la nueva funciona.

## Cuentas SSH e inicios de sesión de hosting

Una cuenta SSH solo elige qué clave hace push y pull. Iniciar sesión en GitHub o GitLab, para los pull requests y para subir claves, es algo aparte y está en **Ajustes ▸ Hosting** (consulta [GitHub](/es/docs/github/) y [GitLab](/es/docs/gitlab/)).
