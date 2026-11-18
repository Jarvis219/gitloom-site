---
title: "A ferramenta de linha de comando gitloom"
group: Tools
order: 24
summary: "Instale o comando gitloom para abrir repositórios, diffs, histórico de arquivos e blame pelo terminal."
updated: 2026-11-18
---

O comando `gitloom` abre o GitLoom pelo terminal. Ele inicia o GitLoom quando necessário.

## Instalar

Escolha **GitLoom ▸ Instalar Ferramenta de Linha de Comando…**. Isso adiciona um link em `~/.local/bin/gitloom`, sem senha de administrador. Se `~/.local/bin` ainda não estiver no seu PATH, o GitLoom avisa; adicione esta linha ao `~/.zshrc`:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

Para instalar para todos os shells sem mudar o PATH, use *Instalar em /usr/local/bin…* em **Ajustes ▸ Integrações ▸ Ferramenta de linha de comando**. O macOS pede a senha de um administrador. Essa seção também mostra onde o `gitloom` está instalado.

O GitLoom só substitui o próprio link. Se já houver outro arquivo chamado `gitloom` ali, ele não é tocado e o GitLoom avisa.

## Comandos

| Comando | O que faz |
|---|---|
| `gitloom [path]` | Abre o repositório que contém `path` (padrão: a pasta atual) |
| `gitloom clone <url> [dir]` | Abre a janela de clonagem já preenchida |
| `gitloom diff [<rev>]` | Abre o repositório em que você está e seleciona `<rev>` (padrão: a linha de alterações sem commit) |
| `gitloom log <file>` | Abre o histórico do arquivo |
| `gitloom blame <file>[:<line>]` | Abre o blame do arquivo, naquela linha |
| `gitloom mcp` | Executa o servidor MCP do GitLoom via stdio (veja [Servidor MCP](/pt-br/docs/mcp-server/)) |

Por exemplo:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
