---
title: "Profili"
group: Getting started
order: 4
summary: "Tieni nome, email, chiave di firma, schede ed elenco dei recenti separati per ogni tipo di lavoro."
updated: 2026-11-18
---

Un profilo contiene l’identità con cui fai commit: un nome, un’email e una chiave di firma facoltativa. Per esempio, usane uno per il lavoro e uno per i progetti personali. Configurali in **Impostazioni ▸ Profili**.

## Cosa contiene un profilo

Ogni profilo ha:

- un nome del profilo, e il nome (`user.name`) e l’email (`user.email`) per i commit;
- un metodo di firma: nessuna firma, SSH, GPG o X.509, e se firmare i commit di default;
- un account facoltativo con cui fa push, quando le regole degli [account SSH](/it/docs/ssh-accounts/) non decidono;
- le proprie schede aperte e i propri repository recenti.

GitLoom scrive nome, email e chiave di firma nella configurazione git di ogni repository, così il terminale è d’accordo con GitLoom.

## Cambiare profilo

Cambia profilo dal chip in alto a destra nella finestra. Un profilo è quello predefinito: GitLoom si avvia con quello, e ci torna quando il profilo in uso viene eliminato. Usa *Imposta come predefinito* per cambiare quale sia.

## L’identità sbagliata

Sopra il pulsante di commit GitLoom mostra con quale identità stai facendo commit. Se l’email non è quella del profilo del repository, la riga è contrassegnata da un avviso; scegli il profilo giusto dal chip nella barra degli strumenti per correggerla.

## Rimuovere un profilo

Selezionalo e fai clic su −. Le sue schede aperte e i suoi repository recenti vengono dimenticati. La configurazione git già scritta nei repository resta com’è. C’è sempre almeno un profilo.
