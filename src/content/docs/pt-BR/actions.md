---
title: "Actions"
group: Accounts & hosting
order: 31
summary: "Acompanhe as execuções do GitHub Actions ao lado dos commits, leia logs, execute jobs de novo, inicie workflows e baixe artefatos."
updated: 2026-11-18
---

Com uma conta do GitHub adicionada, o GitLoom mostra as execuções do GitHub Actions no grupo AÇÕES da barra lateral e ao lado dos commits, na coluna CI do grafo.

![A barra lateral com uma pull request e execuções do GitHub Actions, e o job build de uma execução aberto](/shots/actions-light.png)

## Execuções e logs

Abra uma execução para ver os jobs, as anotações e os artefatos. Abra um job para ler o log. A visualização do log pode mostrar horários, quebrar linhas ou mostrar só os erros, e *Salvar Log…* guarda uma cópia.

## Executar de novo, cancelar e iniciar

- *Executar Todos os Jobs de Novo*, *Executar Jobs com Falha de Novo* ou *Executar Este Job de Novo*.
- *Cancelar Execução*.
- *Executar Workflow…* inicia um workflow que tenha um gatilho `workflow_dispatch`, com as entradas dele.
- Baixe os artefatos de uma execução.

Uma execução vinda de um fork que aguarda aprovação informa isso, lista os arquivos de workflow que a pull request altera e oferece *Aprovar e Executar…*. Confira as alterações antes: workflows aprovados são executados com os ajustes do repositório.

## Notificações

O GitLoom pode avisar quando uma execução que você iniciou termina. Escolha quando em **Ajustes ▸ Git ▸ GitHub Actions ▸ Notificar quando uma CI que eu iniciei terminar**: nunca, só quando falhar (o padrão) ou sempre.

> **Note** O Actions é só para o GitHub. No GitLab, os pipelines de CI ainda não são suportados e o grupo Ações fica oculto.
