---
title: "Cronologia file"
group: History
order: 13
summary: "Vedi ogni commit che ha modificato un file, seguendo le rinomine, e visualizza o ripristina qualsiasi versione precedente."
updated: 2026-11-18
---

La cronologia file mostra ogni commit che ha modificato un file, seguendolo attraverso le rinomine.

## Aprirla

Seleziona un file e premi <kbd>⌥⌘Y</kbd>, oppure scegli **Repository ▸ Cronologia file…**. Se nessun file è selezionato, si apre la tavolozza comandi per sceglierne uno. Dal terminale la apre anche `gitloom log <file>` (vedi [Lo strumento da riga di comando gitloom](/it/docs/the-gitloom-command-line-tool/)).

## Leggerla

Ogni voce è un commit che ha modificato il file, con autore e data. Una rinomina mostra da dove proviene il file. *Segui rinomine* si può disattivare. Seleziona due versioni per vedere il diff tra le due.

<kbd>⌘[</kbd> e <kbd>⌘]</kbd> vanno indietro e avanti. Esc torna al grafico.

## Versioni precedenti

Fai clic destro su una voce per:

- *Visualizza questa versione*, oppure *Apri questa versione nell’editor esterno*;
- *Mostra nel grafico*;
- *Blame a questo commit* (vedi [Blame](/it/docs/blame/));
- *Ripristina il file a questa versione…*. Se il file ha modifiche non sottoposte a commit, vengono sostituite; <kbd>⌘Z</kbd> le riporta indietro.

## Clone superficiali

In un clone superficiale (shallow) la cronologia si ferma dove si ferma il clone, e l’elenco lo indica.
