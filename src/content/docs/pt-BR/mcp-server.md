---
title: "Servidor MCP"
group: Tools
order: 25
summary: "Deixe ferramentas de IA como Claude Code, Cursor ou VS Code lerem seus repositórios pelo GitLoom e, se quiser, fazerem alterações seguras."
updated: 2026-11-18
---

Outras ferramentas de IA (Claude Code, Claude Desktop, Cursor, VS Code e outras) podem trabalhar com seus repositórios pelo servidor MCP do GitLoom. Ele fica desativado até você ativá-lo.

## Ativar

Em **Ajustes ▸ Integrações ▸ Servidor MCP**, defina *Ferramentas de IA externas podem* como uma destas opções:

- *Não fazer nada (desativado)*;
- *Ler: status, histórico, diffs, blame*;
- *Ler e alterar: também commit, branch, stash, pull, push*.

Depois conecte sua ferramenta. Para o Claude Code, copie a linha mostrada ali e execute-a num terminal; ela é assim:

```sh
claude mcp add gitloom -- "/Applications/GitLoom.app/Contents/Helpers/gitloom-mcp"
```

Para outras ferramentas, copie o JSON mostrado ali para a configuração MCP da ferramenta. O GitLoom nunca edita arquivos de outra ferramenta. O comando `gitloom mcp` também executa o servidor (veja [A ferramenta de linha de comando gitloom](/pt-br/docs/the-gitloom-command-line-tool/)).

## Ler

As ferramentas podem ver status, histórico, diffs, blame, branches e stashes dos repositórios abertos ou na lista de recentes da página inicial. Com o GitLoom aberto, elas também podem perguntar o que você está vendo, como o commit selecionado ou o arquivo aberto. Elas não podem alterar nada.

## Ler e alterar

As ferramentas também podem adicionar ao stage, fazer commit, criar e trocar de branch, fazer stash, fetch, pull (só fast-forward) e push, em repositórios abertos numa aba, enquanto o GitLoom está aberto. Cada alteração aparece na janela com o nome da ferramenta e um botão *Desfazer*, e no Histórico de Operações.

Com *Perguntar antes de fazer push* ativado, um push espera sua resposta na janela do repositório; depois de 60 segundos, ele é recusado.

Nenhuma ferramenta pode fazer force push, reset, descartar, apagar ou reescrever o histórico.

## Pull requests, issues e CI

Com *Pull requests, issues e CI pelas minhas contas* ativado, as ferramentas podem ler as pull requests, issues e execuções de CI do repositório pela conta conectada no GitLoom. Com *Ler e alterar*, elas também podem abrir uma pull request para a branch atual e comentar numa pull request. Elas nunca veem seu token e não podem fazer merge, aprovar nem fechar nada.

Os ajustes mostram as chamadas mais recentes em *Atividade recente*.
