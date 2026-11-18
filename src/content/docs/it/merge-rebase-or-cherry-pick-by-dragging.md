---
title: "Merge, rebase o cherry-pick trascinando"
group: Everyday work
order: 9
summary: "Trascina branch e commit sul grafico per fare merge, rebase, fast-forward, cherry-pick o push."
updated: 2026-11-18
---

Sul grafico puoi trascinare un branch o dei commit in un altro punto, e GitLoom mostra un menu con ciò che quel rilascio può fare. Non succede nulla finché non scegli.

## Cosa puoi trascinare

- **L’etichetta di un branch su un altro branch o su un commit**: merge, rebase o fast-forward. Il menu può anche avviare un [rebase interattivo](/it/docs/interactive-rebase/).
- **Dei commit su un branch**: cherry-pick. Prima selezionane più di uno con <kbd>⇧</kbd>-clic o <kbd>⌘</kbd>-clic.
- **Un branch su un remoto** nella barra laterale: push.
- **Un branch su un altro branch**, con un account GitHub o GitLab: crea una pull request (vedi [Pull request e revisioni](/it/docs/pull-requests-and-reviews/)).

## Senza trascinare

Ogni trascinamento ha lo stesso comando in un menu contestuale. Il menu Repository contiene anche *Merge nel branch corrente* e *Rebase del branch corrente su*.

## Quando ci sono conflitti

I conflitti fermano l’operazione e compare un banner. Risolvili, poi scegli *Continua*, *Salta* o *Interrompi*. Vedi [Risolvere i conflitti](/it/docs/resolving-conflicts/).

## Se cambi idea

Un merge, un rebase o un cherry-pick si può annullare con <kbd>⌘Z</kbd>. Vedi [Annulla e ripeti](/it/docs/undo-and-redo/).
