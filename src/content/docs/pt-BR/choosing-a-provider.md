---
title: "Escolher um provedor"
group: AI
order: 32
summary: "Ative os recursos de IA, escolha um provedor na nuvem ou local, adicione uma chave e decida o que a IA escreve por você."
updated: 2026-11-18
---

Os recursos de IA vêm desativados por padrão. Ao ativá-los, você escolhe quem responde: um provedor na nuvem com a sua própria chave ou um modelo rodando no seu Mac.

## Ativar

Abra **Ajustes ▸ IA** e ative *Recursos de IA*. Antes, o GitLoom explica o que será enviado e para quem.

Escolha um *Provedor*:

- Anthropic, OpenAI, Google Gemini, OpenRouter, Groq, Mistral, DeepSeek, Qwen (Alibaba Cloud), xAI ou Together AI;
- Ollama ou LM Studio rodando localmente, em que os dados não saem do seu Mac;
- um provedor personalizado: qualquer servidor que fale a API da Anthropic, da OpenAI, do Gemini ou do Ollama, como um gateway da empresa. Adicione um com *Adicionar Provedor Personalizado…*.

Cole sua chave de API e clique em *Salvar Chave*. As chaves ficam guardadas nas Chaves. *Testar* verifica a chave e carrega os modelos do provedor, para você escolher um.

## O que a IA pode fazer

- Escrever mensagens de commit (<kbd>⌥⌘G</kbd>), descrições de pull request e mensagens de stash.
- Explicar um commit, uma branch ou as suas alterações, com perguntas de acompanhamento.
- Sugerir resoluções de conflitos.

Nada é enviado até você pedir. Sem rede, os botões ✨ ficam esmaecidos; um modelo local continua funcionando.

## Ajustar a escrita

Em *Escrita*, escolha o idioma (English ou Tiếng Việt) e o estilo de commit: Conventional Commits, como o histórico do repositório ou livre.

*Mostrar Ajustes por Recurso* dá a cada recurso seu próprio modelo e *Instruções personalizadas*. O menu **Modelos** ao lado preenche um conjunto pronto, como Conventional Commits, um ID de ticket tirado da branch, um roteiro de pull request ou uma revisão só de bugs, que você pode adaptar à sua equipe.

## Desativar num repositório

Escolha *Desativar IA Neste Repositório* no menu ✨ ao lado da mensagem de commit. Ative de novo em **Ajustes ▸ IA ▸ IA desativada para**.

Antes de qualquer envio, você pode ver a solicitação exata. Veja [O que é enviado](/pt-br/docs/what-gets-sent/).
