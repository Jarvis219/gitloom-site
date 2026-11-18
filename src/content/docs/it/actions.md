---
title: "Actions"
group: Accounts & hosting
order: 31
summary: "Segui le esecuzioni di GitHub Actions accanto ai loro commit, leggi i log, riesegui i job, avvia workflow e scarica gli artifact."
updated: 2026-11-18
---

Dopo aver aggiunto un account GitHub, GitLoom mostra le esecuzioni di GitHub Actions nel gruppo ACTIONS della barra laterale e accanto ai loro commit, nella colonna CI del grafico.

![La barra laterale con una pull request ed esecuzioni di GitHub Actions, con il job build di un’esecuzione aperto](/shots/actions-light.png)

## Esecuzioni e log

Apri un’esecuzione per vederne job, annotazioni e artifact. Apri un job per leggerne il log. La vista del log può mostrare gli orari, andare a capo o mostrare solo gli errori, e *Salva log…* ne conserva una copia.

## Rieseguire, annullare e avviare

- *Riesegui tutti i job*, *Riesegui i job non riusciti* o *Riesegui questo job*.
- *Annulla esecuzione*.
- *Esegui workflow…* avvia un workflow con un trigger `workflow_dispatch`, con i suoi input.
- Scarica gli artifact di un’esecuzione.

Un’esecuzione proveniente da un fork che attende l’approvazione lo segnala, elenca i file di workflow modificati dalla sua pull request e offre *Approva ed esegui…*. Controlla prima le modifiche: i workflow approvati vengono eseguiti con le impostazioni del repository.

## Notifiche

GitLoom può avvisarti quando termina un’esecuzione che hai avviato tu. Scegli quando in **Impostazioni ▸ Git ▸ GitHub Actions ▸ Notifica quando termina una CI che ho avviato**: mai, solo quando fallisce (il valore predefinito) o sempre.

> **Note** Le Actions sono solo per GitHub. Per GitLab le pipeline CI non sono ancora supportate e il gruppo Actions è nascosto.
