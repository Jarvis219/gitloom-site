---
title: "Resolver conflictos"
group: Everyday work
order: 10
summary: "Usa el editor de fusión de tres vías para quedarte con un lado por conflicto o por línea, editar el resultado y continuar."
updated: 2026-11-18
---

Cuando un merge, rebase, cherry-pick o pull encuentra un conflicto, se detiene y un aviso explica qué está pasando. Los archivos en conflicto aparecen en el panel de detalles.

![El editor de conflictos de tres vías con tu lado, su lado y el resultado](/shots/conflict-light.png)

## El editor de fusión

Abre un archivo en conflicto para ver el editor de fusión de tres vías: tu lado, su lado y el resultado.

- Quédate con un lado por conflicto o por línea.
- Edita el resultado directamente.
- <kbd>⌥⌘↑</kbd> y <kbd>⌥⌘↓</kbd> te mueven entre conflictos.
- Marca *Archivo entero* para ver cada lado como el archivo completo con los conflictos en su sitio. Las columnas se alinean y se desplazan juntas.

Cuando el archivo esté bien, haz clic en *Guardar y marcar como resuelto* (<kbd>⌘S</kbd>).

## Casos especiales

- Un conflicto que viene de un cambio de nombre (renombrado en ambos lados, o renombrado en uno y eliminado en el otro) lo indica.
- Un archivo binario se puede previsualizar en ambos lados antes de elegir.
- Un aviso te advierte cuando los dos lados solo se diferencian en los finales de línea (CRLF / LF).

## Tu propia herramienta de fusión

También puedes abrir el archivo en tu herramienta de fusión externa. GitLoom usa el `merge.tool` de git, o la herramienta que elijas en **Ajustes ▸ Integraciones ▸ Herramienta de fusión**.

## Terminar o detener

Cuando todos los archivos estén resueltos, haz clic en *Continuar* en el aviso. *Omitir* se salta el commit actual de un rebase o cherry-pick; *Abortar* lo deja todo como estaba. Un repositorio que se quedó a mitad de un rebase o merge vuelve a mostrar el aviso tras reiniciar GitLoom.
