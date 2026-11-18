---
title: "GitHub"
group: Accounts & hosting
order: 27
summary: "Accedi a GitHub per lavorare con pull request, issue, Actions e le tue organizzazioni da GitLoom."
updated: 2026-11-18
---

Accedi a GitHub per usare pull request, issue, il Launchpad e le Actions in GitLoom.

## Accedere

Apri **Impostazioni ▸ Hosting** e fai clic su *Accedi con GitHub…*. *Ottieni un codice* ti fornisce un codice; *Copia codice e apri GitHub* lo copia e apre la pagina in cui inserirlo.

Puoi anche usare *Aggiungi token…* e incollare un token di accesso personale, fine-grained o classico. GitLoom controlla gli scope che riesce a vedere.

I token sono conservati solo nel Portachiavi di macOS.

## Cosa puoi fare

- Creare, revisionare e unire [pull request](/it/docs/pull-requests-and-reviews/).
- Creare e sfogliare le [issue](/it/docs/issues/).
- Vedere le esecuzioni di GitHub [Actions](/it/docs/actions/) accanto ai loro commit.
- **Launchpad** (<kbd>⇧⌘K</kbd>) elenca le pull request e le issue che ti aspettano in tutti i repository.
- **Finestra ▸ Organizzazioni** mostra le tue organizzazioni, i loro team e i membri.
- **Repository ▸ GitHub / GitLab** contiene *Pubblica repository…*, che crea il repository su GitHub, lo aggiunge come `origin` ed esegue il push del branch corrente, e *Fork su GitHub*.
- Clonare dai tuoi account e dalle tue organizzazioni: <kbd>⇧⌘C</kbd> ▸ *Scegli dal tuo account…*.

## L’email dei commit

Prima di un commit, GitLoom ti avvisa se l’email non è una di quelle del tuo account GitHub, perché GitHub non collegherebbe il commit a te.

## Chiavi SSH

L’accesso serve per l’API. Quale chiave SSH esegue il push per quale login si imposta in [Account SSH](/it/docs/ssh-accounts/). Il pulsante *Chiavi SSH…* di un account in **Impostazioni ▸ Hosting** mostra le chiavi presenti su GitHub e può caricare le tue.
