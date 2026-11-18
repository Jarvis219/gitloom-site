---
title: "Stage de linhas individuais"
group: Everyday work
order: 6
summary: "Adicione ao stage arquivos inteiros, hunks ou só as linhas que você escolher, e deixe o resto para um commit posterior."
updated: 2026-11-18
---

Você não precisa fazer commit de um arquivo inteiro de uma vez. O GitLoom permite adicionar ao stage um arquivo inteiro, um hunk ou só as linhas que você escolher.

![Um diff dividido de um arquivo alterado, com o painel de stage e o formulário de commit](/shots/diff-light.png)

## Stage de arquivos e hunks

Selecione a linha *Alterações sem commit* no topo do grafo. O painel de detalhes lista seus arquivos fora e dentro do stage. Adicione um arquivo inteiro ao stage, ou abra o diff dele e use *Stage Hunk* num bloco de alterações. <kbd>⇧⌘A</kbd> adiciona tudo ao stage e <kbd>⌥⇧⌘A</kbd> remove tudo do stage.

## Stage de linhas

1. Abra o diff do arquivo.
2. Clique nas linhas que quiser. Uma barra mostra quantas linhas estão selecionadas.
3. Clique em *Adicionar Linhas ao Stage* ou pressione <kbd>S</kbd>.

No diff do stage, selecione linhas e clique em *Remover Linhas do Stage* (<kbd>U</kbd>) para tirá-las de lá. O ✕ na barra limpa a seleção.

## Descartar linhas

No diff fora do stage, *Descartar Linhas* (<kbd>⌫</kbd>) joga fora as linhas selecionadas. O GitLoom pergunta antes, e <kbd>⌘Z</kbd> as traz de volta (veja [Desfazer e refazer](/pt-br/docs/undo-and-redo/)).

## Navegar pelo diff

<kbd>⌥↑</kbd> e <kbd>⌥↓</kbd> vão para a alteração anterior ou a próxima no arquivo; <kbd>⌥⌘↑</kbd> e <kbd>⌥⌘↓</kbd> vão para o arquivo anterior ou o próximo.
