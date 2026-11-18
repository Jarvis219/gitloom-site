---
title: "Recupero dal reflog"
group: History
order: 17
summary: "Recupera i commit che sembrano spariti dopo un reset, un rebase o un branch eliminato, usando il reflog e Trova commit persi."
updated: 2026-11-18
---

In git è difficile perdere dei commit. Se uno sembra sparito, prova prima <kbd>⌘Z</kbd> o **Modifica ▸ Cronologia operazioni…** (vedi [Annulla e ripeti](/it/docs/undo-and-redo/)). Se non basta, guarda nel reflog.

## Il reflog

Scegli **Repository ▸ Reflog…**. Elenca ogni posizione che HEAD ha avuto, dalla più recente, quindi lì trovi i commit persi con un reset o un rebase. Scegli un branch in alto per vedere invece il reflog di quel branch, e scrivi nel filtro per cercare per SHA, azione o messaggio.

Puoi anche fare clic destro su un branch ▸ *Mostra reflog* per aprire il reflog di quel branch.

## Commit persi

**Repository ▸ Trova commit persi…** (o la scheda *Commit persi*) cerca i commit che nessun branch, tag o reflog raggiunge, per esempio i commit di un branch eliminato.

## Riportare indietro un commit

Seleziona un commit in uno dei due elenchi, poi:

- *Crea branch qui…* ci mette sopra un nuovo branch;
- *Cherry-pick* lo copia sul branch corrente;
- *Reset del branch corrente qui…* sposta lì il branch corrente.
