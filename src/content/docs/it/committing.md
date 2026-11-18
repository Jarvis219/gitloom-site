---
title: "Fare commit"
group: Everyday work
order: 7
summary: "Scrivi un messaggio, modifica l’ultimo commit, aggiungi coautori, segui l’esecuzione degli hook e gestisci i file che git non mostra."
updated: 2026-11-18
---

Seleziona la riga *Uncommitted changes*, metti in stage ciò che vuoi (vedi [Stage di singole righe](/it/docs/staging-single-lines/)), scrivi il messaggio e premi <kbd>⌘↩</kbd>.

## Il modulo di commit

- *Modifica* (amend) cambia l’ultimo commit invece di crearne uno nuovo. Finché è spuntato, vengono elencati anche i file che quel commit modifica già.
- *Coautori* suggerisce le persone della cronologia recente, compresi i coautori che hai aggiunto in passato.
- Durante un commit, ciò che stampano i tuoi hook (un linter `pre-commit`, i test) compare sotto il messaggio. Se un hook è ancora in esecuzione dopo un minuto, GitLoom lo segnala e offre *Interrompi*.
- Una riga mostra con quale identità stai facendo commit. Ti avvisa se l’email non corrisponde al [profilo](/it/docs/profiles/) del repository, o se non è una delle email del tuo account GitHub (GitHub non collegherebbe il commit a te).

Con l’IA attiva, <kbd>⌥⌘G</kbd> scrive il messaggio per te (vedi [Scegliere un provider](/it/docs/choosing-a-provider/)).

## Impostazioni del messaggio

In **Impostazioni ▸ Git ▸ Messaggio di commit** puoi impostare un modello con cui inizia il modulo e le lunghezze del riepilogo oltre le quali il contatore diventa giallo e rosso (50 e 72 caratteri di default). È solo un avviso; non viene tagliato nulla. Il `commit.template` di un repository ha la precedenza sul modello.

## File che git non mostra

- *Ignora* un file già tracciato e GitLoom offre *Smetti di tracciare* (`git rm --cached`): il file esce dal repository con il commit successivo e resta sul disco.
- Clic destro su un file modificato ▸ *Nascondi modifiche locali* per un file tracciato che modifichi di proposito, come una configurazione locale. Una riga sopra l’elenco dei file indica quanti sono nascosti, e *Mostra…* li fa riapparire.
- Su un disco del Mac, rinominare `readme.md` in `README.md` nel Finder è invisibile per git. GitLoom se ne accorge e offre *Registra rinomina*.

## Annullare un commit

<kbd>⌘Z</kbd> annulla l’ultimo commit o l’ultimo amend. Vedi [Annulla e ripeti](/it/docs/undo-and-redo/).
