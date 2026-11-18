---
title: "A janela"
group: Getting started
order: 3
summary: "A barra lateral, o grafo de commits, o painel de detalhes, a barra de ferramentas, as abas, os banners e as mensagens."
updated: 2026-11-18
---

A janela de um repositório tem três partes principais: a barra lateral à esquerda, o grafo de commits no meio e o painel de detalhes à direita ou embaixo.

![A janela do GitLoom: barra lateral com branches, o grafo de commits com faixas coloridas de branches e os detalhes do commit selecionado](/shots/graph-light.png)

## Barra lateral

A barra lateral lista branches locais e remotas, tags, stashes, submódulos e worktrees. A chave Refs/Arquivos mostra a árvore de arquivos do repositório no lugar. Clique com o botão direito numa branch ou tag ▸ *Fixar no Topo* para mantê-la num grupo FIXADOS acima dos demais. Oculte a barra lateral com o botão no cabeçalho dela ou com <kbd>⌘0</kbd>.

## Grafo e painel de detalhes

O grafo mostra todos os commits com suas branches. A linha do topo, *Alterações sem commit*, é a sua árvore de trabalho. Clique com o botão direito no cabeçalho das colunas para mostrar mais colunas: autor, data, SHA, CI e *Alterações* (linhas adicionadas e removidas).

O painel de detalhes mostra o commit selecionado com seus arquivos e diffs, ou a área de stage quando a linha da árvore de trabalho está selecionada. <kbd>⌥⌘0</kbd> o mostra ou oculta, e <kbd>⌥⌘L</kbd> o move entre a direita e a parte de baixo.

## Barra de ferramentas e abas

A barra de ferramentas tem os botões Desfazer/Refazer, Pull, Push, Fetch, Branch, Stash, terminal e painéis. Deixe o ponteiro sobre um botão por um instante para ver o que ele faz e o atalho dele. Você pode escolher e ordenar os botões em **Ajustes ▸ Layout**.

Cada repositório tem sua própria aba. **Repositório ▸ Cor da Aba** dá a um repositório sua própria cor, que também aparece como uma linha fina abaixo da barra de ferramentas. **Arquivo ▸ Abrir Recente** e o menu do ícone no Dock listam os repositórios recentes. Uma aba que você não olha há 10 minutos libera a memória do grafo e o carrega de novo quando você volta.

## Banners e mensagens

Um banner abaixo da barra de ferramentas explica qualquer estado incomum, como um rebase ou merge em andamento, conflitos ou um HEAD desanexado, e tem os botões para continuar ou abortar.

Mensagens curtas aparecem no topo da janela, coloridas por tipo: verde quando algo foi concluído, azul para informação, laranja quando algo precisa da sua atenção e vermelho quando algo falhou. Os problemas ficam mais tempo; ✕ os fecha.
