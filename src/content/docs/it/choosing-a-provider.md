---
title: "Scegliere un provider"
group: AI
order: 32
summary: "Attiva le funzioni IA, scegli un provider cloud o locale, aggiungi una chiave e scegli cosa scrive l’IA per te."
updated: 2026-11-18
---

Le funzioni IA sono disattivate di default. Quando le attivi, scegli chi risponde: un provider cloud con la tua chiave o un modello in esecuzione sul tuo Mac.

## Attivarle

Apri **Impostazioni ▸ IA** e attiva *Funzioni IA*. GitLoom spiega prima cosa verrà inviato e a chi.

Scegli un *Provider*:

- Anthropic, OpenAI, Google Gemini, OpenRouter, Groq, Mistral, DeepSeek, Qwen (Alibaba Cloud), xAI o Together AI;
- Ollama o LM Studio in locale, dove i dati non lasciano il tuo Mac;
- un provider personalizzato: qualsiasi server che parli l’API di Anthropic, OpenAI, Gemini o Ollama, come un gateway aziendale. Aggiungilo con *Aggiungi provider personalizzato…*.

Incolla la tua chiave API e fai clic su *Salva chiave*. Le chiavi sono conservate nel Portachiavi. *Prova* verifica la chiave e carica i modelli del provider, così puoi sceglierne uno.

## Cosa può fare l’IA

- Scrivere i messaggi di commit (<kbd>⌥⌘G</kbd>), le descrizioni delle pull request e i messaggi degli stash.
- Spiegare un commit, un branch o le tue modifiche, con domande di approfondimento.
- Suggerire come risolvere i conflitti.

Non viene inviato nulla finché non lo chiedi. Senza rete i pulsanti ✨ sono disattivati; un modello locale funziona comunque.

## Regolare la scrittura

In *Scrittura* scegli la lingua (English o Tiếng Việt) e lo stile dei commit: Conventional Commits, come la cronologia del repository, oppure libero.

*Mostra impostazioni per funzione* dà a ogni funzione il proprio modello e le proprie *Istruzioni personalizzate*. Il menu **Modelli** accanto compila un set pronto, come Conventional Commits, un ID ticket preso dal branch, una struttura per le pull request o una revisione solo dei bug, che puoi poi adattare al tuo team.

## Disattivarla per un repository

Scegli *Disattiva IA per questo repository* dal menu ✨ accanto al messaggio di commit. Riattivala in **Impostazioni ▸ IA ▸ IA disattivata per**.

Prima di qualsiasi invio puoi vedere la richiesta esatta. Vedi [Cosa viene inviato](/it/docs/what-gets-sent/).
