---
title: "Busca"
group: History
order: 15
summary: "Encontre commits por mensagem, autor, SHA, caminho ou conteúdo, e vá a qualquer lugar com a paleta de comandos e a Abertura Rápida."
updated: 2026-11-18
---

O GitLoom tem três formas de encontrar coisas: Buscar para commits, a paleta de comandos para qualquer coisa e a Abertura Rápida para arquivos.

## Encontrar commits

<kbd>⌘F</kbd> busca em mensagens de commit, autores, SHAs, caminhos de arquivo ou alterações (`-S`, os commits que adicionam ou removem um trecho de texto). A busca pode filtrar o grafo para mostrar só os resultados. <kbd>⌘G</kbd> e <kbd>⇧⌘G</kbd> vão para o próximo resultado e o anterior.

- Acentos não importam: "nguoi" encontra "người".
- `re:` aceita uma expressão regular para a mensagem inteira, por exemplo `re:^fix(ed)?:`.

## Paleta de comandos

<kbd>⌘K</kbd> executa qualquer comando e leva a branches, arquivos, commits, autores e pull requests. Comece com um caractere para buscar um só tipo de coisa:

| Prefixo | Busca |
|---|---|
| `>` | comandos |
| `/` | arquivos |
| `:` | commits |
| `@` | autores |
| `#` | pull requests e issues |

## Abertura Rápida

<kbd>⌘P</kbd> abre qualquer arquivo do repositório. Com ele aberto, <kbd>⌘E</kbd> permite editá-lo (veja [Editor de arquivos](/pt-br/docs/file-editor/)).
