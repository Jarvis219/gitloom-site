---
title: "GitHub"
group: Accounts & hosting
order: 27
summary: "Inicie sessão no GitHub para trabalhar com pull requests, issues, Actions e suas organizações pelo GitLoom."
updated: 2026-11-18
---

Inicie sessão no GitHub para usar pull requests, issues, o Launchpad e o Actions no GitLoom.

## Iniciar sessão

Abra **Ajustes ▸ Hospedagem** e clique em *Iniciar Sessão com o GitHub…*. *Obter um Código* gera um código; *Copiar Código e Abrir GitHub* o copia e abre a página onde você o digita.

Você também pode usar *Adicionar Token…* e colar um token de acesso pessoal, granular ou clássico. O GitLoom verifica os escopos que consegue ver.

Os tokens ficam guardados apenas nas Chaves do macOS.

## O que você pode fazer

- Criar, revisar e fazer merge de [pull requests](/pt-br/docs/pull-requests-and-reviews/).
- Criar e navegar por [issues](/pt-br/docs/issues/).
- Ver as execuções do GitHub [Actions](/pt-br/docs/actions/) ao lado dos commits.
- O **Launchpad** (<kbd>⇧⌘K</kbd>) lista as pull requests e issues que esperam por você em todos os repositórios.
- **Janela ▸ Organizações** mostra suas organizações, as equipes e os membros delas.
- **Repositório ▸ GitHub / GitLab** tem *Publicar Repositório…*, que cria o repositório no GitHub, o adiciona como `origin` e faz push da branch atual, e *Fork em GitHub*.
- Clone das suas contas e organizações: <kbd>⇧⌘C</kbd> ▸ *Escolher da Sua Conta…*.

## Seu e-mail de commit

Antes de um commit, o GitLoom avisa quando o e-mail não é um dos e-mails da sua conta do GitHub, porque o GitHub não associaria o commit a você.

## Chaves SSH

Iniciar sessão serve para a API. Qual chave SSH faz push para qual login é definido em [Contas SSH](/pt-br/docs/ssh-accounts/). *Chaves SSH…* de uma conta, em **Ajustes ▸ Hospedagem**, mostra as chaves no GitHub e pode enviar a sua.
