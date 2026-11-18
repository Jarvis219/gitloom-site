---
title: "Atalhos"
group: Personalise
order: 36
summary: "Todos os atalhos de teclado do GitLoom e como alterar os da barra de menus."
updated: 2026-11-18
---

Os 35 atalhos marcados com ✎, todos os da barra de menus, podem ser alterados em **Ajustes ▸ Teclado**. Os demais (os do sistema, como <kbd>⌘W</kbd> e <kbd>⌘Z</kbd>, e teclas que só funcionam dentro de uma janela de diálogo ou editor) são fixos. O menu sempre mostra a tecla atual, e tudo o que está aqui também está na paleta de comandos (<kbd>⌘K</kbd>).

## Em qualquer lugar

| Teclas | Ação |
|---|---|
| <kbd>⌘K</kbd> ✎ | Paleta de comandos: `>` comandos, `/` arquivos, `:` commits, `@` autores, `#` pull requests e issues |
| <kbd>⌘P</kbd> ✎ | Abertura Rápida de um arquivo do repositório |
| <kbd>⌘F</kbd> / <kbd>⌘G</kbd> / <kbd>⇧⌘G</kbd> ✎ | Buscar commits / próximo resultado / resultado anterior |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Desfazer / Refazer a última operação do Git (num campo de texto: desfazer a digitação) |
| <kbd>⌘T</kbd> ✎ | Nova aba |
| <kbd>⌘W</kbd> | Fechar aba |
| <kbd>⌃⇥</kbd> / <kbd>⌃⇧⇥</kbd> ✎ | Próxima aba / aba anterior |
| <kbd>⇧⌘C</kbd> ✎ | Clonar um repositório |
| <kbd>⌘O</kbd> ✎ | Abrir um repositório (numa nova aba quando esta já mostra um) |
| <kbd>⇧⌘R</kbd> ✎ | Mostrar o repositório no Finder |
| <kbd>⌥⌘T</kbd> ✎ | Abrir o repositório no seu app de terminal |
| <kbd>⇧⌘K</kbd> | Launchpad (pull requests e issues das suas contas do GitHub e do GitLab) |
| <kbd>⌥⇧⌘L</kbd> ✎ | Log do Git (todos os comandos git que o GitLoom executou) |
| <kbd>⌘,</kbd> | Ajustes |
| <kbd>⌘?</kbd> | Ajuda do GitLoom |

## Repositório

| Teclas | Ação |
|---|---|
| <kbd>⇧⌘L</kbd> ✎ | Fetch de todos os remotos |
| <kbd>⇧⌘↓</kbd> ✎ | Pull |
| <kbd>⇧⌘↑</kbd> ✎ | Push |
| <kbd>⌘B</kbd> ✎ | Criar uma branch no commit selecionado |
| <kbd>⇧⌘S</kbd> ✎ | Guardar todas as alterações no stash |
| <kbd>⌥⌘Y</kbd> ✎ | Histórico do arquivo selecionado |
| <kbd>⌥⌘B</kbd> ✎ | Blame do arquivo selecionado |
| <kbd>⌘0</kbd> ✎ | Mostrar ou ocultar a barra lateral |
| <kbd>⌥⌘0</kbd> ✎ | Mostrar ou ocultar o painel de detalhes |
| <kbd>⌥⌘L</kbd> ✎ | Mover o painel de detalhes para baixo / de volta para a direita |

## Grafo, alterações e diff

| Teclas | Ação |
|---|---|
| <kbd>↑</kbd> <kbd>↓</kbd> ou <kbd>J</kbd> <kbd>K</kbd> | Commit anterior / próximo |
| <kbd>⇧</kbd>-clique, <kbd>⌘</kbd>-clique | Selecionar um intervalo / vários commits (comparar, squash, cherry-pick) |
| <kbd>⌘C</kbd> | Copiar o SHA do commit selecionado |
| <kbd>⌘Y</kbd> | Visualização Rápida do arquivo selecionado |
| <kbd>⇧⌘A</kbd> | Adicionar tudo ao stage |
| <kbd>⌥⇧⌘A</kbd> | Remover tudo do stage |
| <kbd>⌘↩</kbd> | Fazer commit (na mensagem de commit) |
| <kbd>⌥⌘G</kbd> | Escrever a mensagem de commit com IA (quando a IA está ativada) |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Alteração anterior / próxima no arquivo |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Arquivo anterior / próximo |

## Editores

| Teclas | Ação |
|---|---|
| <kbd>⌘E</kbd> ✎ | Editar o arquivo aberto |
| <kbd>⌘S</kbd> ✎ | Salvar |
| <kbd>⌥⌘S</kbd> ✎ | Salvar e adicionar ao stage |
| <kbd>⌘L</kbd> ✎ | Ir para a linha |
| <kbd>⌥⌘F</kbd> ✎ | Buscar e substituir |
| <kbd>⌘/</kbd> ✎ | Comentar ou descomentar as linhas selecionadas |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> ✎ | Aumentar / diminuir o recuo das linhas selecionadas |
| <kbd>P</kbd> <kbd>R</kbd> <kbd>E</kbd> <kbd>S</kbd> <kbd>F</kbd> <kbd>C</kbd> <kbd>D</kbd> | Rebase interativo: pick, reword, edit, squash, fixup, fixup -C, drop nas linhas selecionadas |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Rebase interativo: mover as linhas selecionadas (com *Manter merges*, só dentro da própria branch) |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Rebase interativo: desfazer / refazer uma mudança no plano (o git não é tocado até você iniciar) |
| <kbd>⌘↩</kbd> | Rebase interativo: iniciar o rebase (ou salvar o plano restante) |
| Esc | Rebase interativo: fechar o editor sem fazer nada |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Conflitos de merge: conflito anterior / próximo |
| <kbd>⌘S</kbd> | Conflitos de merge: salvar e marcar o arquivo como resolvido |
| <kbd>⌘[</kbd> / <kbd>⌘]</kbd> | Histórico do arquivo: voltar / avançar |

## Terminal

| Teclas | Ação |
|---|---|
| <kbd>⌃`</kbd> ✎ | Mostrar ou ocultar o terminal (oculta quando ele está em foco) |
| <kbd>⌃⇧`</kbd> ✎ | Nova sessão de terminal |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> ✎ | Texto do terminal maior / menor |
| <kbd>⇥</kbd> ou <kbd>→</kbd> | Inserir a sugestão selecionada |
| <kbd>↑</kbd> <kbd>↓</kbd> | Escolher uma sugestão |
| Esc | Fechar as sugestões; num prompt vazio, voltar ao grafo (ocultar o terminal também volta) |
| <kbd>⌘</kbd>-clique | Abrir o que está sob o ponteiro: um SHA seleciona o commit, um caminho abre o arquivo, uma URL abre o navegador |
