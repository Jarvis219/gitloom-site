---
title: "Risoluzione dei problemi"
group: Help
order: 38
summary: "Cosa provare quando qualcosa va storto: annullare, trovare commit persi, vedere cosa ha eseguito git e risolvere i problemi di configurazione più comuni."
updated: 2026-11-18
---

La maggior parte dei problemi in GitLoom si può annullare o spiegare. Inizia da qui.

## Qualcosa è andato storto nel repository

- **Prima annulla**: <kbd>⌘Z</kbd> o **Modifica ▸ Cronologia operazioni…**. La maggior parte delle operazioni si può annullare (vedi [Annulla e ripeti](/it/docs/undo-and-redo/)).
- **Dei commit sembrano spariti**: **Repository ▸ Reflog…** e **Trova commit persi…** li ritrovano (vedi [Recupero dal reflog](/it/docs/reflog-recovery/)).
- **Bloccato in un rebase o in un merge**: un repository lasciato a metà mostra un banner con *Continua* e *Interrompi*, anche dopo il riavvio di GitLoom.

## Vedere cosa ha fatto GitLoom

**Finestra ▸ Log Git** (<kbd>⌥⇧⌘L</kbd>) elenca ogni comando git eseguito da GitLoom: il repository, il comando, quanto è durato e il suo codice di uscita. Viene conservata solo la riga di comando, mai il suo output, l’input o le credenziali.

Una sottile linea in movimento sotto la barra degli strumenti indica che git sta comunicando con un remoto; passaci sopra con il puntatore per vedere quale. Il messaggio di un’operazione lenta contiene *Annulla*.

## Problemi comuni

- **GitLoom non trova git, o dice che è troppo vecchio.** Installa git 2.40 o successivo (vedi [Installazione](/it/docs/install/)), oppure scegli un altro git in **Impostazioni ▸ Git ▸ Binario git**.
- **Un hook non trova node, python o un linter.** Aggiungi le cartelle di cui ha bisogno a *PATH aggiuntivo* in **Impostazioni ▸ Git ▸ Hook**. Vale per i repository aperti in seguito.
- **Un hook resta bloccato.** Un commit il cui hook è ancora in esecuzione dopo un minuto lo segnala e offre *Interrompi*. *Ferma un hook dopo* in **Impostazioni ▸ Git ▸ Hook** lo ferma automaticamente (dopo 10 minuti di default).
- **Viene usata la chiave SSH sbagliata.** Configura gli [account SSH](/it/docs/ssh-accounts/).

## Log e cache

In **Impostazioni ▸ Avanzate**:

- *Scrivi un log di debug* registra i comandi git eseguiti da GitLoom, con codice di uscita e durata, in un file nella cartella dei log. Password e token negli URL vengono nascosti. *Mostra cartella dei log* la apre.
- *Svuota cache…* rimuove le pull request e le issue conservate per l’uso offline e le versioni dei file in cache. Vengono scaricate di nuovo quando servono.
- Se il file delle impostazioni non si può leggere, GitLoom lo mette da parte, parte con i valori predefiniti e lo segnala qui.

Se niente di tutto questo aiuta, [segnala un problema](/it/docs/report-an-issue/).
