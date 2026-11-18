---
title: "Worktree"
group: Tools
order: 21
summary: "Estrai un secondo branch in una cartella a parte, così puoi lavorarci senza fare stash di ciò che stai facendo."
updated: 2026-11-18
---

Un worktree è una seconda cartella di lavoro per lo stesso repository. Lì puoi lavorare su un altro branch senza fare stash di ciò che stai facendo nella prima.

## Crearne uno

Clic destro su un branch nella barra laterale ▸ *Apri in un nuovo worktree…*. Scegli la cartella e spunta *Crea un nuovo branch da…* se vuoi un branch nuovo. *Crea e apri* crea il worktree e lo apre in una nuova scheda.

## Il gruppo WORKTREE

Quando un repository ha più di un worktree, la barra laterale mostra un gruppo WORKTREE. Ogni riga mostra il branch del worktree; quello della scheda corrente è contrassegnato *questo pannello*. Un worktree la cui cartella non esiste più è contrassegnato *mancante*, e *Prune* li dimentica.

Fai clic destro su un worktree per:

- *Apri in un nuovo pannello* o *Apri*;
- *Mostra nel Finder*;
- *Blocca* o *Sblocca*;
- *Rimuovi worktree…*.

## Un branch in un altro worktree

Git tiene un branch estratto in un solo worktree alla volta. Se estrai un branch aperto altrove, GitLoom offre *Apri quel worktree*, oppure lo stesso commit in questo worktree senza il branch.

## Rimuoverne uno

*Rimuovi worktree…* elimina la cartella del worktree; il branch resta. Non puoi rimuovere il worktree aperto nella scheda corrente.

> **Caution** Se il worktree ha modifiche non sottoposte a commit, GitLoom lo segnala e vengono eliminate con la cartella quando scegli *Rimuovi comunque*.
