---
title: "Stage di singole righe"
group: Everyday work
order: 6
summary: "Metti in stage file interi, singoli hunk o solo le righe che scegli, e tieni il resto per un commit successivo."
updated: 2026-11-18
---

Non devi per forza fare commit di un file tutto in una volta. GitLoom ti permette di mettere in stage un file intero, un hunk o solo le righe che scegli.

![Un diff affiancato di un file modificato, con il pannello di stage e il modulo di commit](/shots/diff-light.png)

## Stage di file e hunk

Seleziona la riga *Uncommitted changes* in cima al grafico. Il pannello dettagli elenca i file non in stage e quelli in stage. Metti in stage un file intero, oppure aprine il diff e usa *Stage Hunk* su un blocco di modifiche. <kbd>⇧⌘A</kbd> mette tutto in stage e <kbd>⌥⇧⌘A</kbd> rimuove tutto dallo stage.

## Stage di righe

1. Apri il diff del file.
2. Fai clic sulle righe che vuoi. Una barra indica quante righe sono selezionate.
3. Fai clic su *Metti righe in stage*, oppure premi <kbd>S</kbd>.

Nel diff in stage, seleziona delle righe e fai clic su *Rimuovi righe dallo stage* (<kbd>U</kbd>) per toglierle. La ✕ nella barra cancella la selezione.

## Scartare righe

Nel diff non in stage, *Scarta righe* (<kbd>⌫</kbd>) butta via le righe selezionate. GitLoom chiede prima conferma, e <kbd>⌘Z</kbd> le riporta indietro (vedi [Annulla e ripeti](/it/docs/undo-and-redo/)).

## Spostarsi nel diff

<kbd>⌥↑</kbd> e <kbd>⌥↓</kbd> passano alla modifica precedente o successiva nel file; <kbd>⌥⌘↑</kbd> e <kbd>⌥⌘↓</kbd> passano al file precedente o successivo.
