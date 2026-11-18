---
title: "Qué se envía"
group: AI
order: 33
summary: "Qué envía GitLoom a un proveedor de IA, qué omite u oculta, y cómo ver antes la petición exacta."
updated: 2026-11-18
---

GitLoom no envía nada a un proveedor de IA hasta que pides algo, como un mensaje de commit. Lo que envía son los diffs y los mensajes de commit que necesita esa petición, después de filtrarlos.

## La vista previa

La primera vez que usas la IA en un repositorio, GitLoom te muestra los datos antes de enviarlos:

- el proveedor, el modelo y la dirección a la que va la petición; un proveedor local aparece marcado como que no sale de tu Mac;
- cada archivo, marcado como incluido, recortado, enviado solo por su nombre (archivos binarios, archivos generados como los lockfiles, o por encima del límite de tamaño) o excluido;
- los secretos que se han ocultado;
- una estimación de los tokens y el cuerpo exacto de la petición.

Haz clic en *Enviar* o *Cancelar*. Marca *No volver a preguntar en este repositorio* para saltarte la vista previa ahí la próxima vez. Para volver a verla más adelante, elige *Vista previa de datos…* en el menú ✨ junto al mensaje del commit.

## Archivos excluidos

Los archivos que coinciden con los patrones de *Excluir* en **Ajustes ▸ IA ▸ Qué se envía** nunca se envían. Son patrones al estilo de gitignore, separados por comas; por defecto:

```text
.env*, *.pem, *.key, *.p12, secrets/**, id_rsa*, id_ed25519*
```

Activa *Ocultar también los nombres de los archivos excluidos* para omitir también sus nombres. El `.gitloom/team.json` de un equipo puede añadir más patrones. *Entrada máxima* limita cuánto se envía.

## Secretos ocultados

Antes de enviar, GitLoom sustituye las cadenas que parecen secretos por `[REDACTED]`: claves de acceso de AWS, claves y tokens de GitHub, Slack, Anthropic, OpenRouter, OpenAI, Google y Groq, bloques de claves privadas, valores asignados a nombres como `password`, `secret`, `api_key` o `token`, y otros tokens largos de aspecto aleatorio. La vista previa muestra lo que ha ocultado.

> **Caution** La ocultación se basa en patrones y puede pasar por alto algún secreto. Añade a *Excluir* los archivos que contienen secretos y revisa la vista previa.

## Registro de depuración

*Registro de depuración: escribir prompts y respuestas en un archivo* en **Ajustes ▸ IA** guarda todo lo enviado (después de filtrarlo) y todas las respuestas en un archivo de tu Mac. Las claves de API nunca se escriben. Desactívalo cuando termines.
