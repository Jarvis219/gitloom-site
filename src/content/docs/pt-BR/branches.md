---
title: "Branches"
group: Everyday work
order: 8
summary: "Crie, faça checkout e gerencie branches e tags, e faça fetch, pull e push delas."
updated: 2026-11-18
---

As branches e as tags ficam na barra lateral e no grafo. A maioria das ações está a um clique com o botão direito.

## Criar e fazer checkout

<kbd>⌘B</kbd> cria uma branch no commit selecionado. Clique duas vezes numa branch para fazer checkout dela. Clique com o botão direito em branches, tags e commits para todo o resto: renomear, apagar, definir upstream, criar tag, reset, revert, cherry-pick e mais.

Apagar uma branch que não passou por merge pede confirmação antes e pode ser desfeito com <kbd>⌘Z</kbd>.

## Fetch, pull e push

- <kbd>⇧⌘L</kbd> faz fetch de todos os remotos. O GitLoom também faz fetch em segundo plano, a cada 5 minutos por padrão (altere em **Ajustes ▸ Geral**). Ele nunca faz fetch em segundo plano com bateria abaixo de 20 %, no Modo de Pouca Energia ou em redes caras.
- <kbd>⇧⌘↓</kbd> faz pull. **Repositório ▸ Pull Com** escolhe uma estratégia para um único pull.
- <kbd>⇧⌘↑</kbd> faz push. Marque *Definir Upstream* para uma branch nova.

Um force push é sempre explícito e usa `--force-with-lease`. **Repositório ▸ Push com Tags** também envia as tags anotadas dos commits enviados.

## Limpeza

**Repositório ▸ Apagar Branches Já Mescladas…** remove as branches locais que já passaram por merge na atual. Branches protegidas não são tocadas; defina os padrões delas em **Ajustes ▸ Git ▸ Branches protegidas** (por exemplo `main master release/*`).

## Stash

<kbd>⇧⌘S</kbd> guarda tudo no stash. *Guardar Alterações no Stash…* permite dar nome ao stash e escolher os arquivos. Os stashes ficam na barra lateral e, por padrão, no grafo. *Recuperar Stash Descartado…* encontra um stash que você descartou por engano.

## Pastas de branches

Branches locais com nomes como `prefix/…` aparecem como pastas na barra lateral. Desative isso em **Ajustes ▸ Layout**.
