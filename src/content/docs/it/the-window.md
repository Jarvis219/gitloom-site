---
title: "La finestra"
group: Getting started
order: 3
summary: "La barra laterale, il grafico dei commit, il pannello dettagli, la barra degli strumenti, le schede, i banner e i messaggi."
updated: 2026-11-18
---

La finestra di un repository ha tre parti principali: la barra laterale a sinistra, il grafico dei commit al centro e il pannello dettagli a destra o in basso.

![La finestra di GitLoom: barra laterale con i branch, grafico dei commit con corsie colorate per i branch e dettagli del commit selezionato](/shots/graph-light.png)

## Barra laterale

La barra laterale elenca branch locali e remoti, tag, stash, sottomoduli e worktree. Il selettore Riferimenti/File mostra invece l’albero dei file del repository. Clic destro su un branch o un tag ▸ *Fissa in alto* per tenerlo in un gruppo FISSATI sopra gli altri. Nascondi la barra laterale con il pulsante nella sua intestazione o con <kbd>⌘0</kbd>.

## Grafico e pannello dettagli

Il grafico mostra ogni commit con i suoi branch. La riga in alto, *Uncommitted changes*, è la tua working tree. Fai clic destro sull’intestazione delle colonne per mostrare altre colonne: autore, data, SHA, CI e *Modifiche* (righe aggiunte e rimosse).

Il pannello dettagli mostra il commit selezionato con i suoi file e i diff, oppure l’area di stage quando è selezionata la riga della working tree. <kbd>⌥⌘0</kbd> lo mostra o lo nasconde, e <kbd>⌥⌘L</kbd> lo sposta tra destra e basso.

## Barra degli strumenti e schede

La barra degli strumenti contiene i pulsanti Annulla/Ripeti, Pull, Push, Fetch, Branch, Stash, terminale e pannelli. Tieni il puntatore su un pulsante per un attimo per vedere cosa fa e la sua scorciatoia. Puoi scegliere e ordinare i pulsanti in **Impostazioni ▸ Layout**.

Ogni repository ha la propria scheda. **Repository ▸ Colore pannello** dà a un repository un colore proprio, che compare anche come una sottile linea sotto la barra degli strumenti. **File ▸ Apri recenti** e il menu dell’icona nel Dock elencano i repository recenti. Una scheda che non guardi da 10 minuti libera la memoria del suo grafico e lo ricarica quando ci torni.

## Banner e messaggi

Un banner sotto la barra degli strumenti spiega qualsiasi stato insolito, come un rebase o un merge in corso, dei conflitti o una HEAD detached, e contiene i pulsanti per continuare o interrompere.

Brevi messaggi compaiono in cima alla finestra, colorati in base al tipo: verde quando qualcosa è completato, blu per le informazioni, arancione quando qualcosa richiede la tua attenzione e rosso quando qualcosa non è riuscito. I problemi restano visibili più a lungo; ✕ li chiude.
