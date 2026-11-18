---
title: "Worktrees"
group: Tools
order: 21
summary: "Faça checkout de uma segunda branch na própria pasta dela, para trabalhar nela sem guardar no stash o que você está fazendo."
updated: 2026-11-18
---

Um worktree é uma segunda pasta de trabalho do mesmo repositório. Você pode trabalhar em outra branch ali sem guardar no stash o que está fazendo na primeira.

## Criar um

Clique com o botão direito numa branch na barra lateral ▸ *Abrir em Novo Worktree…*. Escolha a pasta e marque *Criar uma nova branch a partir de…* se quiser uma branch nova. *Criar e Abrir* cria o worktree e o abre numa nova aba.

## O grupo WORKTREES

Quando um repositório tem mais de um worktree, a barra lateral mostra um grupo WORKTREES. Cada linha mostra a branch do worktree; o da aba atual é marcado como *esta aba*. Um worktree cuja pasta sumiu é marcado como *ausente*, e *Prune* esquece esses.

Clique com o botão direito num worktree para:

- *Abrir em Nova Aba* ou *Abrir*;
- *Mostrar no Finder*;
- *Bloquear* ou *Desbloquear*;
- *Remover Worktree…*.

## Uma branch em outro worktree

O git mantém uma branch em checkout num só worktree por vez. Se você fizer checkout de uma branch que está aberta em outro lugar, o GitLoom oferece *Abrir Aquele Worktree*, ou o mesmo commit neste worktree sem a branch.

## Remover um

*Remover Worktree…* apaga a pasta do worktree; a branch continua. Você não pode remover o worktree aberto na aba atual.

> **Caution** Se o worktree tiver alterações sem commit, o GitLoom avisa, e elas são apagadas junto com a pasta quando você escolhe *Remover Mesmo Assim*.
