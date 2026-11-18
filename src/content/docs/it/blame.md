---
title: "Blame"
group: History
order: 14
summary: "Scopri chi ha modificato per ultimo ogni riga di un file e risali una riga attraverso i commit precedenti."
updated: 2026-11-18
---

Blame mostra, per ogni riga di un file, il commit che l’ha modificata per ultimo.

## Aprirlo

Seleziona un file e premi <kbd>⌥⌘B</kbd>, oppure scegli **Repository ▸ Blame…**. Dal terminale, `gitloom blame <file>:<line>` lo apre a quella riga (vedi [Lo strumento da riga di comando gitloom](/it/docs/the-gitloom-command-line-tool/)). Dalla [cronologia del file](/it/docs/file-history/), *Blame a questo commit* mostra il file com’era allora.

## Risalire una riga

Fai clic su una riga per vederne il commit, poi:

- *Mostra commit* seleziona quel commit nel grafico;
- *Blame del genitore* mostra il blame subito prima di quel commit, per vedere chi aveva scritto la riga in precedenza.

## Opzioni

La barra sopra il file contiene:

- *Ignora spazi*;
- *Mappa di calore*, che colora le righe in base all’età;
- in *Altro*: *Rileva righe spostate all’interno del file (-M)* e *Rileva righe copiate da altri file (-C)*;
- *Ignora revisioni*, quando il repository ha un file `.git-blame-ignore-revs` (o è impostato `blame.ignoreRevsFile`). Salta i commit elencati lì, come le modifiche di formattazione.

Su un file molto lungo il blame può richiedere un po’ di tempo. GitLoom te lo dice prima, le righe si riempiono man mano che vengono trovate e puoi uscire in qualsiasi momento.
