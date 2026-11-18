---
title: "Rebase interattivo"
group: History
order: 16
summary: "Riordina, riformula, unisci con squash, modifica o elimina commit in un piano visivo che non fa nulla finché non lo avvii."
updated: 2026-11-18
---

Il rebase interattivo riscrive una serie di commit. GitLoom mostra il piano come un elenco da modificare; al repository non succede nulla finché non avvii.

## Aprire l’editor

- Clic destro su un commit ▸ *Rebase interattivo da qui…*.
- Oppure rilascia un branch su un altro e scegli *Rebase interattivo*.
- Con più commit selezionati, *Rebase interattivo dei commit selezionati…* apre l’editor con quei commit selezionati.

Funziona anche dal primissimo commit (`--root`). L’editor prende il posto del grafico.

## Modificare il piano

Ogni riga è un commit, il più vecchio in alto. Imposta la sua azione dal menu o con un tasto:

| Tasto | Azione |
|---|---|
| <kbd>P</kbd> | pick |
| <kbd>R</kbd> | reword |
| <kbd>E</kbd> | edit |
| <kbd>S</kbd> | squash |
| <kbd>F</kbd> | fixup |
| <kbd>C</kbd> | fixup -C |
| <kbd>D</kbd> | drop |

Trascina le righe, oppure usa <kbd>⌥↑</kbd> e <kbd>⌥↓</kbd>, per riordinarle. <kbd>⌘Z</kbd> annulla una modifica al piano.

- I messaggi da riformulare si possono scrivere in anticipo, così il rebase procede senza fermarsi.
- Il menu di una riga contiene *Aggiungi comando dopo…* per eseguire un comando in quel punto (una riga `exec`, come un test che ferma il rebase se fallisce).
- I branch impilati sui commit ribasati si spostano con loro (`--update-refs`), a meno che tu non tolga la spunta.
- I merge nell’intervallo vengono appiattiti di default. Spunta *Mantieni i merge* per conservarli (`--rebase-merges`). Il piano mostra allora anche dove inizia ogni lato di un merge e dove il merge viene rifatto, e i commit possono spostarsi solo all’interno del proprio lato.

## Avviare o annullare

<kbd>⌘↩</kbd> avvia ed Esc annulla. Dopo, l’intero rebase è un unico passo di annullamento.

## Modifiche più rapide

Senza aprire l’editor:

- seleziona più commit adiacenti ▸ *Squash di N commit* (parte subito combinando i messaggi, dal più vecchio; *…e modifica messaggio* per scriverlo tu) oppure *Elimina N commit…*;
- clic destro su un commit ▸ *Modifica messaggio…*, *Elimina commit…*, *Sposta su/giù*.
