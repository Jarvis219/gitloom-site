---
title: "Desfazer e refazer"
group: Everyday work
order: 11
summary: "Desfaça quase qualquer operação do Git com ⌘Z, refaça com ⇧⌘Z ou volte a qualquer ponto do Histórico de Operações."
updated: 2026-11-18
---

<kbd>⌘Z</kbd> desfaz a última operação do Git e <kbd>⇧⌘Z</kbd> a refaz. Quando algo der errado, tente desfazer primeiro.

## O que pode ser desfeito

Commit, emenda, checkout, mudanças de branch e de tag, descarte, reset, stash, pull, merge, rebase, cherry-pick e mais.

Um merge, rebase ou reset só é refeito enquanto a árvore de trabalho está limpa.

## Histórico de Operações

**Editar ▸ Histórico de Operações…** lista tudo o que o GitLoom fez. Você pode desfazer até qualquer ponto dele.

## Antes de perder trabalho

Antes de um desfazer que jogaria trabalho fora, por exemplo depois de você ter feito novas alterações, o GitLoom diz o que vai acontecer e pergunta.

## Texto e o editor de rebase

Num campo de texto, <kbd>⌘Z</kbd> desfaz a digitação, como de costume. No editor de [rebase interativo](/pt-br/docs/interactive-rebase/), ele desfaz mudanças no plano.

Se um commit parecer perdido mesmo depois de desfazer, veja [Recuperação pelo reflog](/pt-br/docs/reflog-recovery/).
