---
title: "Fazer commit"
group: Everyday work
order: 7
summary: "Escreva uma mensagem, emende, adicione coautores, acompanhe seus hooks e lide com arquivos que o git não mostra."
updated: 2026-11-18
---

Selecione a linha *Alterações sem commit*, adicione ao stage o que quiser (veja [Stage de linhas individuais](/pt-br/docs/staging-single-lines/)), escreva a mensagem e pressione <kbd>⌘↩</kbd>.

## O formulário de commit

- *Emendar* altera o último commit em vez de criar um novo. Enquanto estiver marcado, os arquivos que esse commit já altera também aparecem na lista.
- *Coautores* sugere as pessoas do histórico recente, incluindo coautores que você adicionou antes.
- Enquanto um commit está em andamento, o que os seus hooks imprimem (um linter de `pre-commit`, testes) aparece abaixo da mensagem. Se um hook ainda estiver rodando depois de um minuto, o GitLoom avisa e oferece *Parar*.
- Uma linha mostra com qual identidade você está fazendo commit. Ela avisa quando o e-mail não corresponde ao [perfil](/pt-br/docs/profiles/) do repositório ou não é um dos e-mails da sua conta do GitHub (o GitHub não associaria o commit a você).

Com a IA ativada, <kbd>⌥⌘G</kbd> escreve a mensagem por você (veja [Escolher um provedor](/pt-br/docs/choosing-a-provider/)).

## Ajustes da mensagem

Em **Ajustes ▸ Git ▸ Mensagem do commit** você pode definir um modelo com que o formulário começa e os tamanhos de resumo em que o contador fica amarelo e vermelho (50 e 72 caracteres por padrão). Ele só avisa; nada é cortado. O `commit.template` do próprio repositório tem prioridade sobre o modelo.

## Arquivos que o git não mostra

- Use *Ignorar* num arquivo que já é rastreado e o GitLoom oferece *Parar de Rastrear* (`git rm --cached`): o arquivo sai do repositório no próximo commit e continua no disco.
- Clique com o botão direito num arquivo alterado ▸ *Ocultar Alterações Locais* para um arquivo rastreado que você altera de propósito, como uma configuração local. Uma linha acima da lista de arquivos diz quantos estão ocultos, e *Mostrar…* os traz de volta.
- Num disco de Mac, renomear `readme.md` para `README.md` no Finder é invisível para o git. O GitLoom percebe e oferece *Registrar Renomeação*.

## Desfazer um commit

<kbd>⌘Z</kbd> desfaz o último commit ou emenda. Veja [Desfazer e refazer](/pt-br/docs/undo-and-redo/).
