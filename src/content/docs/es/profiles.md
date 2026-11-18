---
title: "Perfiles"
group: Getting started
order: 4
summary: "Mantén un nombre, un correo, una clave de firma, pestañas y una lista de recientes distintos para cada tipo de trabajo."
updated: 2026-11-18
---

Un perfil contiene la identidad con la que haces commit: un nombre, un correo y, opcionalmente, una clave de firma. Por ejemplo, usa uno para el trabajo y otro para tus proyectos personales. Configúralos en **Ajustes ▸ Perfiles**.

## Qué contiene un perfil

Cada perfil tiene:

- un nombre de perfil, y el nombre (`user.name`) y el correo (`user.email`) de los commits;
- un método de firma: no firmar, SSH, GPG o X.509, y si se firman los commits por defecto;
- opcionalmente, una cuenta con la que hace push cuando las reglas de las [cuentas SSH](/es/docs/ssh-accounts/) no lo deciden;
- sus propias pestañas abiertas y repositorios recientes.

GitLoom escribe el nombre, el correo y la clave de firma en la configuración de git de cada repositorio, para que el terminal coincida con GitLoom.

## Cambiar de perfil

Cambia de perfil con el indicador de la parte superior derecha de la ventana. Un perfil es el predeterminado: GitLoom empieza con él y vuelve a él cuando se elimina el perfil en uso. Usa *Establecer como predeterminado* para cambiar cuál es.

## La identidad equivocada

Encima del botón de commit, GitLoom muestra con qué identidad haces commit. Si ese correo no es el del perfil del repositorio, la línea aparece marcada con un aviso; elige el perfil correcto en el indicador de la barra de herramientas para corregirlo.

## Eliminar un perfil

Selecciónalo y haz clic en −. Se olvidan sus pestañas abiertas y sus repositorios recientes. La configuración de git ya escrita en los repositorios se queda como está. Siempre hay al menos un perfil.
