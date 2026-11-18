---
title: "Rebase interativo"
group: History
order: 16
summary: "Reordene, reescreva, faça squash, edite ou descarte commits num plano visual que não faz nada até você iniciá-lo."
updated: 2026-11-18
---

O rebase interativo reescreve uma série de commits. O GitLoom mostra o plano como uma lista que você edita; nada acontece com o repositório até você iniciar.

## Abrir o editor

- Clique com o botão direito num commit ▸ *Rebase Interativo a Partir Daqui…*.
- Ou solte uma branch sobre outra e escolha *Rebase interativo*.
- Com vários commits selecionados, *Rebase Interativo dos Commits Selecionados…* abre o editor com eles selecionados.

Também funciona a partir do primeiro commit (`--root`). O editor substitui o grafo.

## Editar o plano

Cada linha é um commit, o mais antigo no topo. Defina a ação pelo menu ou com uma tecla:

| Tecla | Ação |
|---|---|
| <kbd>P</kbd> | pick |
| <kbd>R</kbd> | reword |
| <kbd>E</kbd> | edit |
| <kbd>S</kbd> | squash |
| <kbd>F</kbd> | fixup |
| <kbd>C</kbd> | fixup -C |
| <kbd>D</kbd> | drop |

Arraste as linhas, ou use <kbd>⌥↑</kbd> e <kbd>⌥↓</kbd>, para reordenar. <kbd>⌘Z</kbd> desfaz uma mudança no plano.

- As mensagens de reword podem ser escritas antes, para que o rebase rode sem parar.
- O menu de uma linha tem *Adicionar Comando Depois…* para executar um comando naquele ponto (uma linha `exec`, como um teste que interrompe o rebase se falhar).
- Branches empilhadas sobre os commits do rebase se movem junto (`--update-refs`), a menos que você desmarque essa opção.
- Merges no intervalo são achatados por padrão. Marque *Manter merges* para mantê-los (`--rebase-merges`). O plano então mostra também onde cada lado de um merge começa e onde o merge é refeito, e os commits só podem se mover dentro do seu próprio lado.

## Iniciar ou cancelar

<kbd>⌘↩</kbd> inicia e Esc cancela. Depois, o rebase inteiro é um único passo de desfazer.

## Edições mais rápidas

Sem abrir o editor:

- selecione vários commits vizinhos ▸ *Squash de N Commits* (roda na hora com as mensagens combinadas, a mais antiga primeiro; *…e Editar Mensagem* para escrevê-la você mesmo) ou *Descartar N Commits…*;
- clique com o botão direito num commit ▸ *Editar Mensagem…*, *Descartar Commit…*, *Mover para Cima/Baixo*.
