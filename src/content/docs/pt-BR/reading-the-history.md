---
title: "Ler o histórico"
group: History
order: 12
summary: "Oriente-se no grafo de commits, escolha as colunas dele e veja o conteúdo de qualquer commit."
updated: 2026-11-18
---

O grafo no meio da janela mostra todos os commits com suas branches, cada branch na sua própria faixa colorida.

![O grafo de commits com as faixas das branches, a barra lateral e os detalhes do commit selecionado](/shots/graph-light.png)

## Navegar

- <kbd>↑</kbd> <kbd>↓</kbd> ou <kbd>J</kbd> <kbd>K</kbd> vão para o commit anterior ou o próximo.
- <kbd>⇧</kbd>-clique seleciona um intervalo e <kbd>⌘</kbd>-clique seleciona vários commits, por exemplo para comparar, fazer squash ou cherry-pick deles.
- <kbd>⌘C</kbd> copia o SHA do commit selecionado.

Selecione um commit para ver os arquivos e diffs dele no painel de detalhes.

## Colunas

Clique com o botão direito no cabeçalho das colunas do grafo para mostrar mais colunas: autor, data, SHA, CI e *Alterações* (linhas adicionadas e removidas). Essa escolha vale para o repositório atual. **Visualizar ▸ Colunas do Grafo** e **Ajustes ▸ Layout ▸ Colunas do grafo** as alteram para todos os repositórios.

## Aparência

Em **Ajustes ▸ Aparência** você pode escolher:

- a densidade das linhas (também em **Visualizar ▸ Densidade**);
- datas relativas para a última semana ou sempre datas absolutas, um formato de data personalizado e a data do commit ou do autor;
- se os stashes aparecem no grafo;
- as cores das faixas: do tema, adequadas para daltonismo ou monocromáticas;
- os avatares: pássaros, iniciais coloridas, Gravatar, GitHub ou nenhum.

## Encontrar um commit

<kbd>⌘F</kbd> busca no histórico e pode filtrar o grafo para mostrar só os resultados. Veja [Busca](/pt-br/docs/search/).
