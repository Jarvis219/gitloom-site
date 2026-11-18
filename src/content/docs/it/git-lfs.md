---
title: "Git LFS"
group: Tools
order: 23
summary: "Traccia i file di grandi dimensioni con Git LFS, scaricali e blocca i file perché i colleghi non li modifichino contemporaneamente."
updated: 2026-11-18
---

GitLoom funziona con Git LFS quando `git-lfs` è installato sul Mac. Senza, GitLoom può comunque elencare i file LFS ma non scaricarli né bloccarli.

## Il gruppo GIT LFS

In un repository che usa LFS, la barra laterale ha un gruppo GIT LFS che elenca i file LFS. Un file non ancora scaricato, di cui sul disco c’è solo il puntatore, ha un’icona di download. Un file bloccato mostra chi l’ha bloccato. Fai doppio clic su un file per aprirlo.

Fai clic destro su un file per:

- *Apri file*;
- *Scarica questo file*, quando qui c’è solo il puntatore;
- *Blocca* o *Sblocca*.

## Scaricare tutti i file LFS

**Repository ▸ Avanzate ▸ Scarica file Git LFS** esegue `git lfs pull` e scarica i file di grandi dimensioni di questo checkout.

## Tracciare un nuovo tipo di file

Clic destro su un file modificato nell’area di stage ▸ *Traccia con LFS (\*.ext)* per tracciare tutti i file con quell’estensione. In un repository che usa già LFS, lo stesso menu contiene *Blocca (LFS)* e *Sblocca (LFS)*.
