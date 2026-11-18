---
title: "Contas SSH"
group: Accounts & hosting
order: 26
summary: "Use a chave SSH certa para cada conta quando você tem várias no mesmo host, no GitLoom e no terminal."
updated: 2026-11-18
---

Se você tem várias contas no mesmo host, como uma conta do GitHub de trabalho e outra pessoal, uma conta SSH diz ao GitLoom qual chave pertence a qual login e quais repositórios a usam.

## Configurar uma conta

Abra **Ajustes ▸ Contas** e clique em *Adicionar Conta SSH…*. Para cada conta:

- informe o host e seu login nele;
- adicione as chaves: *Importar Chaves…* lista chaves de `~/.ssh`, do ssh-agent, do 1Password e do Secretive, ou *Gerar…* cria uma nova;
- em *Usar para repositórios*, adicione os donos ou pastas que devem usá-la (*Adicionar Pasta…*), ou torne-a a *Conta padrão* do host.

Fetch, pull, push e clone passam a usar a chave certa. Com *Também gravar core.sshCommand em cada repositório* ativado, o `core.sshCommand` do repositório é definido para que um simples `git push` no terminal faça o mesmo.

Repositórios com o próprio `core.sshCommand`, um alias em `~/.ssh/config` com `IdentityFile` ou `GIT_SSH_COMMAND` no seu shell não são tocados.

## Aliases de host

Se você usa aliases de host de `~/.ssh/config` (como `github-work`), **Repositório ▸ Remotos… ▸ Alias SSH** troca um remoto para um deles.

## Trocar uma chave

*Trocar…* numa chave cria uma chave nova, envia-a para a conta e remove a antiga assim que a nova funciona.

## Contas SSH e logins de hospedagem

Uma conta SSH só escolhe qual chave faz push e pull. Iniciar sessão no GitHub ou no GitLab, para pull requests e envio de chaves, é algo separado e fica em **Ajustes ▸ Hospedagem** (veja [GitHub](/pt-br/docs/github/) e [GitLab](/pt-br/docs/gitlab/)).
