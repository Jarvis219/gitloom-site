---
title: "Editor di file"
group: Tools
order: 20
summary: "Visualizza e modifica qualsiasi file del repository dentro GitLoom, poi salvalo e mettilo in stage in un solo passaggio."
updated: 2026-11-18
---

GitLoom può mostrare e modificare i file del tuo repository, così per una piccola correzione non serve un’altra app.

## Aprire un file

- <kbd>⌘P</kbd> (Apertura rapida) apre qualsiasi file del repository.
- Il selettore Riferimenti/File della barra laterale mostra l’albero dei file. Lì puoi anche creare un *Nuovo file…* o una *Nuova cartella…*, usare *Rinomina…* o *Sposta nel Cestino*, e *Mostra file ignorati*.

Un file si apre in sola lettura. Premi <kbd>⌘E</kbd>, o fai clic su *Modifica file*, per modificarlo. Esc torna al grafico.

## Tasti di modifica

| Tasti | Azione |
|---|---|
| <kbd>⌘S</kbd> | Salva |
| <kbd>⌥⌘S</kbd> | Salva e metti in stage |
| <kbd>⌘L</kbd> | Vai alla riga |
| <kbd>⌥⌘F</kbd> | Trova e sostituisci |
| <kbd>⌘/</kbd> | Commenta o decommenta le righe selezionate |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> | Aumenta / riduci il rientro delle righe selezionate |

Le opzioni dell’editor includono *A capo automatico*, *Mostra spazi e tabulazioni*, *Chiudi parentesi e virgolette* e *Il margine confronta con HEAD*. Il font del codice e la sua dimensione si impostano in **Impostazioni ▸ Aspetto**.

## Quando il file cambia sul disco

Se un’altra app modifica il file mentre hai modifiche non salvate, GitLoom te lo dice e offre *Mantieni la mia*, *Ricarica* o *Confronta*. Per un file con marcatori di conflitto, GitLoom avvisa che salvarlo non lo segna come risolto; per questo usa l’[editor dei conflitti](/it/docs/resolving-conflicts/).

GitLoom aspetta anche a installare un aggiornamento finché un file ha modifiche non salvate.

## Un altro editor

*Apri nell’editor esterno* apre il file nell’app scelta in **Impostazioni ▸ Integrazioni ▸ Apri i file con**. Un *Comando personalizzato* lì ha la precedenza; `$FILE`, `$LINE` e `$REPO` vengono sostituiti, per esempio:

```sh
code -g $FILE:$LINE
```
