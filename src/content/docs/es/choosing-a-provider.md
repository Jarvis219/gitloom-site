---
title: "Elegir un proveedor"
group: AI
order: 32
summary: "Activa las funciones de IA, elige un proveedor en la nube o local, añade una clave y elige qué escribe la IA por ti."
updated: 2026-11-18
---

Las funciones de IA están desactivadas por defecto. Cuando las activas, eliges quién responde: un proveedor en la nube con tu propia clave o un modelo que se ejecuta en tu Mac.

## Activarla

Abre **Ajustes ▸ IA** y activa *Funciones de IA*. GitLoom explica primero qué se enviará y a quién.

Elige un *Proveedor*:

- Anthropic, OpenAI, Google Gemini, OpenRouter, Groq, Mistral, DeepSeek, Qwen (Alibaba Cloud), xAI o Together AI;
- Ollama o LM Studio ejecutándose localmente, donde los datos no salen de tu Mac;
- un proveedor personalizado: cualquier servidor que hable la API de Anthropic, OpenAI, Gemini u Ollama, como una pasarela de empresa. Añádelo con *Añadir proveedor personalizado…*.

Pega tu clave de API y haz clic en *Guardar clave*. Las claves se guardan en el Llavero. *Probar* comprueba la clave y carga los modelos del proveedor, para que puedas elegir uno.

## Qué puede hacer la IA

- Escribir mensajes de commit (<kbd>⌥⌘G</kbd>), descripciones de pull requests y mensajes de stash.
- Explicar un commit, una rama o tus cambios, con preguntas de seguimiento.
- Sugerir resoluciones de conflictos.

No se envía nada hasta que lo pides. Sin conexión, los botones ✨ aparecen atenuados; un modelo local sigue funcionando.

## Ajustar la redacción

En *Redacción*, elige el idioma (English o Tiếng Việt) y el estilo de los commits: Conventional Commits, como la historia del repositorio, o libre.

*Mostrar ajustes por función* da a cada función su propio modelo e *Instrucciones personalizadas*. El menú **Plantillas** que hay al lado rellena un conjunto ya preparado, como Conventional Commits, un ID de ticket tomado de la rama, un esquema de pull request o una revisión centrada solo en errores, que luego puedes adaptar a tu equipo.

## Desactivarla en un repositorio

Elige *Desactivar la IA en este repositorio* en el menú ✨ junto al mensaje del commit. Vuelve a activarla en **Ajustes ▸ IA ▸ IA desactivada para**.

Antes de enviar nada, puedes ver la petición exacta. Consulta [Qué se envía](/es/docs/what-gets-sent/).
