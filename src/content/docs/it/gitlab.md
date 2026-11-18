---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "Collega gitlab.com o il tuo server GitLab con un token per lavorare con merge request e issue."
updated: 2026-11-18
---

GitLoom funziona con gitlab.com e con il tuo server GitLab, tramite un token di accesso personale.

## Aggiungere un token

1. Apri **Impostazioni ▸ Hosting** e fai clic su *Aggiungi token GitLab…*.
2. Inserisci l’host.
3. Incolla un token di accesso personale con gli scope `api`, `read_user` e `write_repository`. *Crea un token…* apre la pagina giusta sul tuo GitLab.

Il token è conservato nel Portachiavi di macOS. I push via HTTPS lo usano.

## Cosa puoi fare

La barra laterale mostra MERGE REQUEST e issue. Puoi:

- creare una merge request, commentarla, approvarla e unirla (con squash);
- vedere le tue merge request nel Launchpad (<kbd>⇧⌘K</kbd>);
- creare e sfogliare issue.

## Non ancora supportato

Per GitLab, GitLoom non supporta ancora:

- le pipeline CI (il gruppo Actions è nascosto);
- i commenti su una riga di codice;
- le organizzazioni;
- l’accesso senza token.
