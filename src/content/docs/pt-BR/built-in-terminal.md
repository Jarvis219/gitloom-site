---
title: "Terminal integrado"
group: Tools
order: 19
summary: "Um terminal abaixo do grafo, na pasta do repositório, que atualiza o GitLoom e sugere comandos git."
updated: 2026-11-18
---

<kbd>⌃`</kbd> abre um terminal abaixo do grafo, na pasta do repositório, com o seu próprio shell de login. O grafo é atualizado assim que um comando git termina nele.

## Sugestões e links

Enquanto você digita um comando git, o GitLoom sugere subcomandos, branches, remotos e aliases. <kbd>↑</kbd> <kbd>↓</kbd> escolhem uma sugestão, <kbd>⇥</kbd> ou <kbd>→</kbd> a inserem, e Esc fecha a lista.

Clique com <kbd>⌘</kbd> no que está sob o ponteiro: um SHA seleciona aquele commit, um caminho abre o arquivo e uma URL abre o navegador.

## Teclas

| Teclas | Ação |
|---|---|
| <kbd>⌃`</kbd> | Mostrar ou ocultar o terminal (oculta quando ele está em foco) |
| <kbd>⌃⇧`</kbd> | Nova sessão de terminal |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> | Texto do terminal maior / menor |
| Esc | Num prompt vazio, voltar ao grafo |

Se um comando ainda estiver em execução quando você fechar a aba, o GitLoom pergunta antes.

## Ajustes

**Ajustes ▸ Integrações ▸ Terminal** tem:

- *Integração com o shell*: permite que o GitLoom saiba quando um comando termina (atualização instantânea, sugestões). Desative e isso para. Seus dotfiles nunca são editados, em nenhum dos casos.
- *Sugerir comandos git durante a digitação*, para desativar só as sugestões.
- *Histórico de rolagem*: quantas linhas cada sessão guarda (10.000 por padrão).
- *Exibir os comandos git que o GitLoom executa*: uma linha esmaecida para cada comando que o app executa, para aprender git.
- *Entrada Segura pelo Teclado*: enquanto um terminal tem o teclado, outros apps não conseguem ler o que você digita.
- *Shell* e *Argumentos*: outro shell para novas sessões, como `/opt/homebrew/bin/fish`. Um caminho que não pode ser executado volta para o seu shell de login.

As mudanças valem para novas sessões de terminal. O terminal usa a fonte de código de **Ajustes ▸ Aparência**.

## Seu app de terminal de sempre

<kbd>⌥⌘T</kbd> abre o repositório no seu app de terminal. Escolha qual app em **Ajustes ▸ Integrações ▸ “Abrir no Terminal” usa**.
