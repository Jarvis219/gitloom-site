---
title: "Bisect"
group: History
order: 18
summary: "Encontre o commit que quebrou algo testando alguns commits e respondendo Bom ou Ruim."
updated: 2026-11-18
---

O bisect encontra o commit que introduziu um problema. Você indica ao GitLoom um commit em que tudo funcionava e outro em que não funciona, e depois testa os commits que ele escolhe entre os dois.

## Iniciar

Faça commit ou stash do seu trabalho antes: os arquivos mudam conforme os commits passam por checkout.

Escolha **Repositório ▸ Bisect…**, ou clique com o botão direito num commit mais antigo que ainda funcionava ▸ *Bisect: Este Commit Está Bom…*. O GitLoom pede um commit ruim e um bom.

## Testar e responder

O GitLoom faz checkout de um commit entre os dois. Teste-o e responda na barra acima do grafo:

- *Bom* se o problema não está lá;
- *Ruim* se está;
- *Pular* se este commit não pode ser testado.

Depois de algumas respostas, a barra indica o primeiro commit ruim. Se commits pulados impedirem de restringir mais, ela lista os commits que podem ser o culpado.

## Deixe um comando testar por você

Se um comando consegue distinguir um commit bom de um ruim, como um único teste, clique em *Executar Script…* na barra (`git bisect run`). O git então faz checkout de um commit após o outro e executa o comando no repositório. Ele deve sair com 0 quando o commit está bom e 1 quando está ruim; 125 significa que o commit não pode ser testado.

## Concluir

*Concluir* leva você de volta ao ponto de partida. *Parar* encerra o bisect a qualquer momento e também volta para onde ele começou.
