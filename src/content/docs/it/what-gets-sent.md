---
title: "Cosa viene inviato"
group: AI
order: 33
summary: "Cosa invia GitLoom a un provider di IA, cosa esclude o oscura, e come vedere prima la richiesta esatta."
updated: 2026-11-18
---

GitLoom non invia nulla a un provider di IA finché non chiedi qualcosa, come un messaggio di commit. Ciò che invia sono i diff e i messaggi di commit necessari a quella richiesta, dopo il filtraggio.

## L’anteprima

La prima volta che usi l’IA in un repository, GitLoom mostra i dati prima di inviarli:

- il provider, il modello e l’indirizzo a cui va la richiesta; un provider locale è indicato come uno che non lascia il tuo Mac;
- ogni file, contrassegnato come incluso, tagliato, inviato solo come nome (file binari, file generati come i lock file, oppure oltre il limite di dimensione) o escluso;
- gli eventuali segreti oscurati;
- una stima dei token e il corpo esatto della richiesta.

Fai clic su *Invia* o *Annulla*. Spunta *Non chiedere più per questo repository* per saltare l’anteprima lì la prossima volta. Per rivederla in seguito, scegli *Anteprima dati…* dal menu ✨ accanto al messaggio di commit.

## File esclusi

I file che corrispondono ai pattern *Escludi* in **Impostazioni ▸ IA ▸ Cosa viene inviato** non vengono mai inviati. Sono pattern in stile gitignore, separati da virgole; di default:

```text
.env*, *.pem, *.key, *.p12, secrets/**, id_rsa*, id_ed25519*
```

Attiva *Nascondi anche i nomi dei file esclusi* per omettere anche i loro nomi. Il `.gitloom/team.json` di un team può aggiungere altri pattern. *Input massimo* limita quanto viene inviato.

## Segreti oscurati

Prima dell’invio, GitLoom sostituisce le stringhe che sembrano segreti con `[REDACTED]`: chiavi di accesso AWS, chiavi e token di GitHub, Slack, Anthropic, OpenRouter, OpenAI, Google e Groq, blocchi di chiavi private, valori assegnati a nomi come `password`, `secret`, `api_key` o `token`, e altri token lunghi dall’aspetto casuale. L’anteprima elenca cosa è stato oscurato.

> **Caution** L’oscuramento si basa su pattern e può non riconoscere un segreto. Aggiungi a *Escludi* i file che contengono segreti e controlla l’anteprima.

## Log di debug

*Log di debug: scrivi prompt e risposte in un file* in **Impostazioni ▸ IA** salva tutto ciò che viene inviato (dopo il filtraggio) e ogni risposta in un file sul tuo Mac. Le chiavi API non vengono mai scritte. Disattivalo quando hai finito.
