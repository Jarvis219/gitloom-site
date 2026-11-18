---
title: "Merge, rebase ou cherry-pick arrastando"
group: Everyday work
order: 9
summary: "Arraste branches e commits no grafo para fazer merge, rebase, fast-forward, cherry-pick ou push."
updated: 2026-11-18
---

No grafo, você pode arrastar uma branch ou commits para outro lugar, e o GitLoom mostra um menu com o que aquela ação pode fazer. Nada acontece até você escolher.

## O que você pode arrastar

- **O rótulo de uma branch sobre outra branch ou um commit**: merge, rebase ou fast-forward. O menu também pode iniciar um [rebase interativo](/pt-br/docs/interactive-rebase/).
- **Commits sobre uma branch**: cherry-pick deles. Selecione vários antes com <kbd>⇧</kbd>-clique ou <kbd>⌘</kbd>-clique.
- **Uma branch sobre um remoto** na barra lateral: push dela.
- **Uma branch sobre outra branch**, com uma conta do GitHub ou do GitLab: criar uma pull request (veja [Pull requests e revisões](/pt-br/docs/pull-requests-and-reviews/)).

## Sem arrastar

Cada ação de arrastar tem o mesmo comando num menu de clique com o botão direito. O menu Repositório também tem *Mesclar na Branch Atual* e *Fazer Rebase da Branch Atual sobre*.

## Quando há conflitos

Os conflitos interrompem a operação e um banner aparece. Resolva-os e escolha *Continuar*, *Pular* ou *Abortar*. Veja [Resolver conflitos](/pt-br/docs/resolving-conflicts/).

## Mudou de ideia

Um merge, rebase ou cherry-pick pode ser desfeito com <kbd>⌘Z</kbd>. Veja [Desfazer e refazer](/pt-br/docs/undo-and-redo/).
