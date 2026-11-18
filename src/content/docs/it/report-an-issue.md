---
title: "Segnalare un problema"
group: Help
order: 39
summary: "Come segnalare un bug o chiedere una funzione, cosa includere e cosa fa GitLoom dopo un crash."
updated: 2026-11-18
---

Segnala i bug e chiedi nuove funzioni su [GitHub Issues](https://github.com/Jarvis219/gitloom-site/issues).

## Cosa includere

- La versione di GitLoom (**GitLoom ▸ Informazioni su GitLoom**, oppure **Impostazioni ▸ Generali ▸ Aggiornamenti**) e la versione di macOS.
- I passaggi che portano al problema.
- Cosa ti aspettavi e cosa è successo invece.
- Uno screenshot, se mostra il problema.

Se il problema riguarda qualcosa che ha fatto git, i comandi in **Finestra ▸ Log Git** sono utili (vedi [Risoluzione dei problemi](/it/docs/troubleshooting/)). Per maggiori dettagli, attiva *Scrivi un log di debug* in **Impostazioni ▸ Avanzate**; password e token negli URL lì vengono nascosti.

> **Caution** Le issue sono pubbliche. Non incollare mai token, password, chiavi SSH o codice privato. Controlla log e screenshot prima di allegarli.

## Dopo un crash

Se GitLoom si chiude inaspettatamente, all’avvio successivo chiede se segnalarlo. Offre:

- *Segnala su GitHub…*: il browser apre una nuova issue compilata con le versioni di GitLoom e macOS, l’errore e la parte iniziale del thread andato in crash. Leggila, aggiungi cosa stavi facendo e inviala tu.
- *Mostra rapporto*: mostra nel Finder il rapporto sul crash salvato da macOS.
- *Non ora*.

Non viene inviato nulla se non invii tu la issue. Spunta *Non proporlo più*, oppure disattiva *Proponi di segnalare i crash* in **Impostazioni ▸ Avanzate**, per non ricevere più la domanda.

**Aiuto ▸ Segnala un problema…** apre in qualsiasi momento una issue vuota nel browser.
