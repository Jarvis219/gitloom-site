---
title: "Recuperação pelo reflog"
group: History
order: 17
summary: "Recupere commits que parecem perdidos depois de um reset, rebase ou branch apagada, usando o reflog e Encontrar Commits Perdidos."
updated: 2026-11-18
---

É difícil perder commits no git. Se um parecer perdido, tente primeiro <kbd>⌘Z</kbd> ou **Editar ▸ Histórico de Operações…** (veja [Desfazer e refazer](/pt-br/docs/undo-and-redo/)). Se não resolver, procure no reflog.

## O reflog

Escolha **Repositório ▸ Reflog…**. Ele lista todas as posições que o HEAD já teve, da mais nova à mais antiga, então os commits que você perdeu com um reset ou rebase estão ali. Escolha uma branch no topo para ver o reflog dessa branch e digite no filtro para buscar por SHA, ação ou mensagem.

Você também pode clicar com o botão direito numa branch ▸ *Mostrar Reflog* para abrir o reflog dela.

## Commits perdidos

**Repositório ▸ Encontrar Commits Perdidos…** (ou a aba *Commits Perdidos*) busca commits que nenhuma branch, tag ou reflog alcança, por exemplo os commits de uma branch que foi apagada.

## Trazer um commit de volta

Selecione um commit em qualquer uma das listas e então:

- *Criar Branch Aqui…* coloca uma nova branch nele;
- *Cherry-pick* o copia para a sua branch atual;
- *Fazer Reset da Branch Atual Para Cá…* move sua branch atual para ele.
