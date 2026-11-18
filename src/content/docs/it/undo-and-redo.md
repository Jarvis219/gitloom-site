---
title: "Annulla e ripeti"
group: Everyday work
order: 11
summary: "Annulla quasi ogni operazione Git con ⌘Z, ripetila con ⇧⌘Z, o torna a qualsiasi punto della cronologia operazioni."
updated: 2026-11-18
---

<kbd>⌘Z</kbd> annulla l’ultima operazione Git e <kbd>⇧⌘Z</kbd> la ripete. Quando qualcosa va storto, prova prima ad annullare.

## Cosa si può annullare

Commit, amend, checkout, modifiche a branch e tag, scarto di modifiche, reset, stash, pull, merge, rebase, cherry-pick e altro.

Un merge, un rebase o un reset vengono ripetuti solo se la working tree è pulita.

## Cronologia operazioni

**Modifica ▸ Cronologia operazioni…** elenca tutto ciò che ha fatto GitLoom. Puoi annullare fino a qualsiasi punto dell’elenco.

## Prima di perdere lavoro

Prima di un annullamento che butterebbe via del lavoro, per esempio dopo che hai fatto nuove modifiche, GitLoom ti dice cosa succederà e chiede conferma.

## Testo ed editor di rebase

In un campo di testo, <kbd>⌘Z</kbd> annulla la digitazione come al solito. Nell’editor di [rebase interattivo](/it/docs/interactive-rebase/) annulla le modifiche al piano.

Se un commit sembra sparito anche dopo l’annullamento, vedi [Recupero dal reflog](/it/docs/reflog-recovery/).
