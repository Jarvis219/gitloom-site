---
title: "O que é enviado"
group: AI
order: 33
summary: "O que o GitLoom envia a um provedor de IA, o que ele deixa de fora ou oculta e como ver antes a solicitação exata."
updated: 2026-11-18
---

O GitLoom não envia nada a um provedor de IA até você pedir algo, como uma mensagem de commit. O que ele envia são os diffs e as mensagens de commit de que essa solicitação precisa, depois da filtragem.

## A prévia

Na primeira vez que você usa a IA num repositório, o GitLoom mostra os dados antes de enviá-los:

- o provedor, o modelo e o endereço para onde a solicitação vai; um provedor local é marcado como não saindo do seu Mac;
- cada arquivo, marcado como incluído, cortado, enviado só pelo nome (arquivos binários, arquivos gerados como lock files ou acima do limite de tamanho) ou excluído;
- os segredos que foram ocultados;
- uma estimativa de tokens e o corpo exato da solicitação.

Clique em *Enviar* ou *Cancelar*. Marque *Não perguntar de novo para este repositório* para pular a prévia ali da próxima vez. Para vê-la de novo depois, escolha *Prévia dos Dados…* no menu ✨ ao lado da mensagem de commit.

## Arquivos excluídos

Os arquivos que correspondem aos padrões de *Excluir* em **Ajustes ▸ IA ▸ O que é enviado** nunca são enviados. São padrões no estilo gitignore, separados por vírgulas; por padrão:

```text
.env*, *.pem, *.key, *.p12, secrets/**, id_rsa*, id_ed25519*
```

Ative *Ocultar também os nomes dos arquivos excluídos* para deixar de fora também os nomes deles. O `.gitloom/team.json` de uma equipe pode adicionar mais padrões. *Entrada máxima* limita quanto é enviado.

## Segredos ocultados

Antes de enviar, o GitLoom substitui textos com cara de segredo por `[REDACTED]`: chaves de acesso da AWS, chaves e tokens do GitHub, Slack, Anthropic, OpenRouter, OpenAI, Google e Groq, blocos de chave privada, valores atribuídos a nomes como `password`, `secret`, `api_key` ou `token`, e outros tokens longos de aparência aleatória. A prévia lista o que foi ocultado.

> **Caution** A ocultação se baseia em padrões e pode deixar passar um segredo. Adicione arquivos que guardam segredos a *Excluir* e confira a prévia.

## Log de depuração

*Log de depuração: gravar prompts e respostas em um arquivo*, em **Ajustes ▸ IA**, salva tudo o que é enviado (depois da filtragem) e cada resposta num arquivo no seu Mac. As chaves de API nunca são gravadas. Desative quando terminar.
