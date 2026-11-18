---
title: "Blame"
group: History
order: 14
summary: "Veja quem alterou por último cada linha de um arquivo e siga uma linha para trás pelos commits mais antigos."
updated: 2026-11-18
---

O blame mostra, para cada linha de um arquivo, o commit que a alterou por último.

## Abrir

Selecione um arquivo e pressione <kbd>⌥⌘B</kbd>, ou escolha **Repositório ▸ Blame…**. No terminal, `gitloom blame <file>:<line>` abre o blame nessa linha (veja [A ferramenta de linha de comando gitloom](/pt-br/docs/the-gitloom-command-line-tool/)). No [Histórico do arquivo](/pt-br/docs/file-history/), *Blame Neste Commit* mostra o arquivo como ele era naquele momento.

## Seguir uma linha para trás

Clique numa linha para ver o commit dela e depois:

- *Mostrar Commit* seleciona esse commit no grafo;
- *Blame do Pai* mostra o blame de logo antes desse commit, para ver quem escreveu a linha antes.

## Opções

A barra acima do arquivo tem:

- *Ignorar espaços em branco*;
- *Mapa de calor*, que colore as linhas pela idade;
- em *Mais*: *Detectar linhas movidas dentro do arquivo (-M)* e *Detectar linhas copiadas de outros arquivos (-C)*;
- *Ignorar revs*, quando o repositório tem um arquivo `.git-blame-ignore-revs` (ou `blame.ignoreRevsFile` está definido). Ele pula os commits listados ali, como mudanças de formatação.

Num arquivo muito longo, o blame pode demorar. O GitLoom avisa antes, as linhas vão sendo preenchidas à medida que são encontradas, e você pode sair a qualquer momento.
