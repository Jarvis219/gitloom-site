---
title: "Editor de arquivos"
group: Tools
order: 20
summary: "Veja e edite qualquer arquivo do repositório dentro do GitLoom e depois salve e adicione ao stage num só passo."
updated: 2026-11-18
---

O GitLoom pode mostrar e editar os arquivos do seu repositório, então uma pequena correção não precisa de outro app.

## Abrir um arquivo

- <kbd>⌘P</kbd> (Abertura Rápida) abre qualquer arquivo do repositório.
- A chave Refs/Arquivos da barra lateral mostra a árvore de arquivos. Ali você também pode criar um *Novo Arquivo…* ou uma *Nova Pasta…*, usar *Renomear…* ou *Mover para o Lixo*, e *Mostrar Arquivos Ignorados*.

Um arquivo abre para visualização. Pressione <kbd>⌘E</kbd>, ou clique em *Editar Arquivo*, para editá-lo. Esc volta ao grafo.

## Teclas de edição

| Teclas | Ação |
|---|---|
| <kbd>⌘S</kbd> | Salvar |
| <kbd>⌥⌘S</kbd> | Salvar e adicionar ao stage |
| <kbd>⌘L</kbd> | Ir para a linha |
| <kbd>⌥⌘F</kbd> | Buscar e substituir |
| <kbd>⌘/</kbd> | Comentar ou descomentar as linhas selecionadas |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> | Aumentar / diminuir o recuo das linhas selecionadas |

As opções do editor incluem *Quebrar Linhas*, *Mostrar Espaços e Tabulações*, *Fechar Parênteses e Aspas* e *Margem Compara com HEAD*. A fonte de código e o tamanho dela são definidos em **Ajustes ▸ Aparência**.

## Quando o arquivo muda no disco

Se outro app alterar o arquivo enquanto você tem edições não salvas, o GitLoom avisa e oferece *Manter a Minha*, *Recarregar* ou *Comparar*. Um arquivo com marcadores de conflito avisa que salvá-lo não o marca como resolvido; para isso, use o [editor de conflitos](/pt-br/docs/resolving-conflicts/).

O GitLoom também espera para instalar uma atualização enquanto um arquivo tem alterações não salvas.

## Outro editor

*Abrir no Editor Externo* abre o arquivo no app escolhido em **Ajustes ▸ Integrações ▸ Abrir arquivos com**. Um *Comando personalizado* ali tem prioridade; `$FILE`, `$LINE` e `$REPO` são preenchidos, por exemplo:

```sh
code -g $FILE:$LINE
```
