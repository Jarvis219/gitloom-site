---
title: "Resolver conflitos"
group: Everyday work
order: 10
summary: "Use o editor de merge de três vias para escolher um lado por conflito ou por linha, editar o resultado e continuar."
updated: 2026-11-18
---

Quando um merge, rebase, cherry-pick ou pull encontra um conflito, ele para e um banner explica o que está acontecendo. Os arquivos em conflito aparecem no painel de detalhes.

![O editor de conflitos de três vias mostrando o seu lado, o lado deles e o resultado](/shots/conflict-light.png)

## O editor de merge

Abra um arquivo em conflito para usar o editor de merge de três vias: o seu lado, o lado deles e o resultado.

- Escolha um lado por conflito ou por linha.
- Edite o resultado diretamente.
- <kbd>⌥⌘↑</kbd> e <kbd>⌥⌘↓</kbd> passam de um conflito para outro.
- Marque *Arquivo inteiro* para ver cada lado como o arquivo inteiro, com os conflitos no lugar. As colunas ficam alinhadas e rolam juntas.

Quando o arquivo estiver certo, clique em *Salvar e Marcar como Resolvido* (<kbd>⌘S</kbd>).

## Casos especiais

- Um conflito que vem de uma renomeação (renomeado nos dois lados, ou renomeado num e apagado no outro) informa isso.
- Um arquivo binário pode ser visualizado nos dois lados antes de você escolher.
- Um banner avisa quando os dois lados diferem só nas quebras de linha (CRLF / LF).

## Sua própria ferramenta de merge

Você também pode abrir o arquivo na sua ferramenta de merge externa. O GitLoom usa o `merge.tool` do git ou a ferramenta que você escolher em **Ajustes ▸ Integrações ▸ Ferramenta de merge**.

## Concluir ou parar

Quando todos os arquivos estiverem resolvidos, clique em *Continuar* no banner. *Pular* pula o commit atual de um rebase ou cherry-pick; *Abortar* deixa tudo como estava. Um repositório que ficou no meio de um rebase ou merge mostra o banner de novo depois que o GitLoom reinicia.
