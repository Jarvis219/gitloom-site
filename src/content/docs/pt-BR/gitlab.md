---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "Conecte o gitlab.com ou seu próprio servidor GitLab com um token para trabalhar com merge requests e issues."
updated: 2026-11-18
---

O GitLoom funciona com o gitlab.com e com o seu próprio servidor GitLab, usando um token de acesso pessoal.

## Adicionar um token

1. Abra **Ajustes ▸ Hospedagem** e clique em *Adicionar Token do GitLab…*.
2. Informe o host.
3. Cole um token de acesso pessoal com os escopos `api`, `read_user` e `write_repository`. *Criar um Token…* abre a página certa no seu GitLab.

O token fica guardado nas Chaves do macOS. Os pushes por HTTPS o usam.

## O que você pode fazer

A barra lateral mostra MERGE REQUESTS e issues. Você pode:

- criar uma merge request, comentar nela, aprovar e fazer merge (com squash);
- ver suas merge requests no Launchpad (<kbd>⇧⌘K</kbd>);
- criar e navegar por issues.

## Ainda não suportado

No GitLab, o GitLoom ainda não suporta:

- pipelines de CI (o grupo Ações fica oculto);
- comentários numa linha de código;
- organizações;
- iniciar sessão sem token.
