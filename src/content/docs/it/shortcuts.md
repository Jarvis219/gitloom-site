---
title: "Scorciatoie"
group: Personalise
order: 36
summary: "Tutte le scorciatoie da tastiera di GitLoom, e come cambiare quelle della barra dei menu."
updated: 2026-11-18
---

Le 35 scorciatoie contrassegnate con ✎, cioè tutte quelle della barra dei menu, si possono cambiare in **Impostazioni ▸ Tastiera**. Le altre (quelle di sistema come <kbd>⌘W</kbd> e <kbd>⌘Z</kbd>, e i tasti che funzionano solo dentro un foglio o un editor) sono fisse. Il menu mostra sempre il tasto attuale, e tutto ciò che è qui si trova anche nella tavolozza comandi (<kbd>⌘K</kbd>).

## Ovunque

| Tasti | Azione |
|---|---|
| <kbd>⌘K</kbd> ✎ | Tavolozza comandi: `>` comandi, `/` file, `:` commit, `@` autori, `#` pull request e issue |
| <kbd>⌘P</kbd> ✎ | Apertura rapida di un file del repository |
| <kbd>⌘F</kbd> / <kbd>⌘G</kbd> / <kbd>⇧⌘G</kbd> ✎ | Trova commit / risultato successivo / risultato precedente |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Annulla / ripeti l’ultima operazione Git (in un campo di testo: annulla la digitazione) |
| <kbd>⌘T</kbd> ✎ | Nuova scheda |
| <kbd>⌘W</kbd> | Chiudi scheda |
| <kbd>⌃⇥</kbd> / <kbd>⌃⇧⇥</kbd> ✎ | Scheda successiva / precedente |
| <kbd>⇧⌘C</kbd> ✎ | Clona un repository |
| <kbd>⌘O</kbd> ✎ | Apri un repository (in una nuova scheda se questa ne mostra già uno) |
| <kbd>⇧⌘R</kbd> ✎ | Mostra il repository nel Finder |
| <kbd>⌥⌘T</kbd> ✎ | Apri il repository nella tua app di terminale |
| <kbd>⇧⌘K</kbd> | Launchpad (pull request e issue dei tuoi account GitHub e GitLab) |
| <kbd>⌥⇧⌘L</kbd> ✎ | Log Git (tutti i comandi git eseguiti da GitLoom) |
| <kbd>⌘,</kbd> | Impostazioni |
| <kbd>⌘?</kbd> | Aiuto GitLoom |

## Repository

| Tasti | Azione |
|---|---|
| <kbd>⇧⌘L</kbd> ✎ | Fetch di tutti i remoti |
| <kbd>⇧⌘↓</kbd> ✎ | Pull |
| <kbd>⇧⌘↑</kbd> ✎ | Push |
| <kbd>⌘B</kbd> ✎ | Crea un branch sul commit selezionato |
| <kbd>⇧⌘S</kbd> ✎ | Stash di tutte le modifiche |
| <kbd>⌥⌘Y</kbd> ✎ | Cronologia del file selezionato |
| <kbd>⌥⌘B</kbd> ✎ | Blame del file selezionato |
| <kbd>⌘0</kbd> ✎ | Mostra o nascondi la barra laterale |
| <kbd>⌥⌘0</kbd> ✎ | Mostra o nascondi il pannello dettagli |
| <kbd>⌥⌘L</kbd> ✎ | Sposta il pannello dettagli in basso / di nuovo a destra |

## Grafico, modifiche e diff

| Tasti | Azione |
|---|---|
| <kbd>↑</kbd> <kbd>↓</kbd> o <kbd>J</kbd> <kbd>K</kbd> | Commit precedente / successivo |
| <kbd>⇧</kbd>-clic, <kbd>⌘</kbd>-clic | Seleziona un intervallo / più commit (confronto, squash, cherry-pick) |
| <kbd>⌘C</kbd> | Copia lo SHA del commit selezionato |
| <kbd>⌘Y</kbd> | Visualizzazione rapida del file selezionato |
| <kbd>⇧⌘A</kbd> | Metti tutto in stage |
| <kbd>⌥⇧⌘A</kbd> | Rimuovi tutto dallo stage |
| <kbd>⌘↩</kbd> | Commit (nel messaggio di commit) |
| <kbd>⌥⌘G</kbd> | Scrivi il messaggio di commit con l’IA (se l’IA è attiva) |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Modifica precedente / successiva nel file |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | File precedente / successivo |

## Editor

| Tasti | Azione |
|---|---|
| <kbd>⌘E</kbd> ✎ | Modifica il file aperto |
| <kbd>⌘S</kbd> ✎ | Salva |
| <kbd>⌥⌘S</kbd> ✎ | Salva e metti in stage |
| <kbd>⌘L</kbd> ✎ | Vai alla riga |
| <kbd>⌥⌘F</kbd> ✎ | Trova e sostituisci |
| <kbd>⌘/</kbd> ✎ | Commenta o decommenta le righe selezionate |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> ✎ | Aumenta / riduci il rientro delle righe selezionate |
| <kbd>P</kbd> <kbd>R</kbd> <kbd>E</kbd> <kbd>S</kbd> <kbd>F</kbd> <kbd>C</kbd> <kbd>D</kbd> | Rebase interattivo: pick, reword, edit, squash, fixup, fixup -C, drop per le righe selezionate |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Rebase interattivo: sposta le righe selezionate (con *Mantieni i merge*, solo all’interno del proprio branch) |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Rebase interattivo: annulla / ripeti una modifica al piano (git non viene toccato finché non avvii) |
| <kbd>⌘↩</kbd> | Rebase interattivo: avvia il rebase (o salva il piano rimanente) |
| Esc | Rebase interattivo: chiudi l’editor senza fare nulla |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Conflitti di merge: conflitto precedente / successivo |
| <kbd>⌘S</kbd> | Conflitti di merge: salva e segna il file come risolto |
| <kbd>⌘[</kbd> / <kbd>⌘]</kbd> | Cronologia file: indietro / avanti |

## Terminale

| Tasti | Azione |
|---|---|
| <kbd>⌃`</kbd> ✎ | Mostra o nascondi il terminale (lo nasconde se ha il focus) |
| <kbd>⌃⇧`</kbd> ✎ | Nuova sessione di terminale |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> ✎ | Testo del terminale più grande / più piccolo |
| <kbd>⇥</kbd> o <kbd>→</kbd> | Inserisci il suggerimento selezionato |
| <kbd>↑</kbd> <kbd>↓</kbd> | Scegli un suggerimento |
| Esc | Chiudi i suggerimenti; con il prompt vuoto, torna al grafico (come quando nascondi il terminale) |
| <kbd>⌘</kbd>-clic | Apri ciò che è sotto il puntatore: uno SHA seleziona il commit, un percorso apre il file, un URL apre il browser |
