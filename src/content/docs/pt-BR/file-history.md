---
title: "Histórico do arquivo"
group: History
order: 13
summary: "Veja todos os commits que alteraram um arquivo, acompanhando renomeações, e veja ou restaure qualquer versão anterior."
updated: 2026-11-18
---

O Histórico do Arquivo mostra todos os commits que alteraram um arquivo, acompanhando-o pelas renomeações.

## Abrir

Selecione um arquivo e pressione <kbd>⌥⌘Y</kbd>, ou escolha **Repositório ▸ Histórico do Arquivo…**. Se nenhum arquivo estiver selecionado, a paleta de comandos abre para você escolher um. No terminal, `gitloom log <file>` também o abre (veja [A ferramenta de linha de comando gitloom](/pt-br/docs/the-gitloom-command-line-tool/)).

## Como ler

Cada entrada é um commit que alterou o arquivo, com o autor e a data. Uma renomeação mostra de onde o arquivo veio. *Seguir renomeações* pode ser desativado. Selecione duas versões para ver o diff entre elas.

<kbd>⌘[</kbd> e <kbd>⌘]</kbd> voltam e avançam. Esc volta ao grafo.

## Versões anteriores

Clique com o botão direito numa entrada para:

- *Ver Esta Versão* ou *Abrir Esta Versão no Editor Externo*;
- *Mostrar no Grafo*;
- *Blame Neste Commit* (veja [Blame](/pt-br/docs/blame/));
- *Restaurar Arquivo para Esta Versão…*. Se o arquivo tiver alterações sem commit, elas são substituídas; <kbd>⌘Z</kbd> as traz de volta.

## Clones rasos

Num clone raso, o histórico para onde o clone para, e a lista avisa isso.
