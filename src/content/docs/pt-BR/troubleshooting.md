---
title: "Solução de problemas"
group: Help
order: 38
summary: "O que tentar quando algo dá errado: desfazer, encontrar commits perdidos, ver o que o git executou e corrigir problemas comuns de configuração."
updated: 2026-11-18
---

A maioria dos problemas no GitLoom pode ser desfeita ou explicada. Comece por aqui.

## Algo deu errado no repositório

- **Desfaça primeiro**: <kbd>⌘Z</kbd> ou **Editar ▸ Histórico de Operações…**. A maioria das operações pode ser desfeita (veja [Desfazer e refazer](/pt-br/docs/undo-and-redo/)).
- **Commits parecem perdidos**: **Repositório ▸ Reflog…** e **Encontrar Commits Perdidos…** os encontram (veja [Recuperação pelo reflog](/pt-br/docs/reflog-recovery/)).
- **Preso num rebase ou merge**: um repositório que ficou no meio de um deles mostra um banner com *Continuar* e *Abortar*, também depois que o GitLoom reinicia.

## Ver o que o GitLoom fez

**Janela ▸ Log do Git** (<kbd>⌥⇧⌘L</kbd>) lista todos os comandos git que o GitLoom executou: o repositório, o comando, quanto tempo levou e o código de saída. Só a linha de comando é guardada, nunca a saída, a entrada ou as credenciais.

Uma linha fina em movimento abaixo da barra de ferramentas significa que o git está se comunicando com um remoto; passe o ponteiro por cima para ver o quê. A mensagem de uma operação lenta tem *Cancelar*.

## Problemas comuns

- **O GitLoom não encontra o git, ou diz que ele é antigo demais.** Instale o git 2.40 ou posterior (veja [Instalação](/pt-br/docs/install/)) ou escolha outro git em **Ajustes ▸ Git ▸ Binário do git**.
- **Um hook não encontra node, python ou um linter.** Adicione as pastas de que ele precisa a *PATH extra* em **Ajustes ▸ Git ▸ Hooks**. Isso vale para os repositórios abertos depois.
- **Um hook trava.** Um commit cujo hook ainda roda depois de um minuto avisa e oferece *Parar*. *Parar um hook após*, em **Ajustes ▸ Git ▸ Hooks**, o interrompe automaticamente (depois de 10 minutos, por padrão).
- **A chave SSH errada é usada.** Configure [Contas SSH](/pt-br/docs/ssh-accounts/).

## Logs e caches

Em **Ajustes ▸ Avançado**:

- *Gravar um log de depuração* registra os comandos git que o GitLoom executa, com o status de saída e o tempo, num arquivo na pasta de logs. Senhas e tokens em URLs ficam ocultos. *Mostrar Pasta de Logs* a abre.
- *Limpar Caches…* remove as pull requests e issues guardadas para uso offline e as versões de arquivos em cache. Elas são buscadas de novo quando necessário.
- Se o seu arquivo de ajustes não puder ser lido, o GitLoom o move para o lado, começa com os padrões e avisa aqui.

Se nada disso ajudar, [relate um problema](/pt-br/docs/report-an-issue/).
