---
title: "Sottomoduli"
group: Tools
order: 22
summary: "Vedi lo stato di ogni sottomodulo, inizializzali e aggiornali, aprine uno nella sua scheda, aggiungili o rimuovili."
updated: 2026-11-18
---

Quando un repository ha dei sottomoduli, la barra laterale mostra un gruppo SOTTOMODULI con ciascuno di essi e il suo stato.

## Leggere l’elenco

Ogni riga mostra il percorso del sottomodulo e il suo stato:

- una ✓ e il commit estratto quando è aggiornato, oppure *contenuto modificato* / *contenuto non tracciato* quando ha modifiche;
- *Aggiorna* quando non è sincronizzato: il commit estratto non è quello registrato dal repository principale (passa sopra con il puntatore per vederli entrambi);
- *Init* quando non è ancora inizializzato;
- *conflitto* quando il commit registrato è in conflitto.

## Lavorare con un sottomodulo

Fai doppio clic su un sottomodulo per aprirlo nella sua scheda. Fai clic destro su di esso per:

- *Apri in un nuovo pannello*;
- *Aggiorna al commit registrato*, oppure *Aggiorna all’ultimo remoto*;
- *Init*, per uno non ancora inizializzato;
- *Mostra nel Finder*;
- *Rimuovi sottomodulo…*.

Se un sottomodulo ha modifiche non sottoposte a commit, l’aggiornamento chiede prima conferma. git si ferma se le tue modifiche sono d’intralcio; non viene forzato nulla.

Per aggiornare i sottomoduli dopo ogni pull che porta nuovi commit, attiva *Aggiorna i sottomoduli dopo il pull* in **Impostazioni ▸ Git**.

## Aggiungere un sottomodulo

**Repository ▸ Avanzate ▸ Aggiungi sottomodulo…** chiede l’URL, il percorso e, facoltativamente, un branch.

## Rimuovere un sottomodulo

*Rimuovi sottomodulo…* deinizializza il sottomodulo e lo rimuove dall’indice. I dati del suo repository (`.git/modules/<name>`) finiscono nel Cestino, così i suoi commit restano recuperabili. Poi fai un commit per completare. Se il sottomodulo ha modifiche non sottoposte a commit, commit non presenti su alcun remoto o stash, GitLoom li elenca prima.
