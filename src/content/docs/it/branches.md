---
title: "Branch"
group: Everyday work
order: 8
summary: "Crea, estrai e gestisci branch e tag, e fai fetch, pull e push."
updated: 2026-11-18
---

Branch e tag si trovano nella barra laterale e nel grafico. La maggior parte delle azioni è a un clic destro di distanza.

## Creare ed estrarre

<kbd>⌘B</kbd> crea un branch sul commit selezionato. Fai doppio clic su un branch per estrarlo. Fai clic destro su branch, tag e commit per tutto il resto: rinominare, eliminare, impostare l’upstream, creare un tag, reset, revert, cherry-pick e altro.

Eliminare un branch non unito chiede prima conferma e si può annullare con <kbd>⌘Z</kbd>.

## Fetch, pull e push

- <kbd>⇧⌘L</kbd> esegue il fetch di tutti i remoti. GitLoom esegue il fetch anche in background, ogni 5 minuti di default (puoi cambiarlo in **Impostazioni ▸ Generali**). Non lo fa mai in background con la batteria sotto il 20 %, in modalità Risparmio energetico o su reti a consumo.
- <kbd>⇧⌘↓</kbd> esegue il pull. **Repository ▸ Pull con** sceglie una strategia per un singolo pull.
- <kbd>⇧⌘↑</kbd> esegue il push. Spunta *Imposta upstream* per un nuovo branch.

Un force push è sempre esplicito e usa `--force-with-lease`. **Repository ▸ Push con i tag** invia anche i tag annotati dei commit inviati.

## Fare pulizia

**Repository ▸ Elimina i branch già uniti…** rimuove i branch locali già uniti in quello corrente. I branch protetti non vengono toccati; imposta i loro pattern in **Impostazioni ▸ Git ▸ Branch protetti** (per esempio `main master release/*`).

## Stash

<kbd>⇧⌘S</kbd> mette tutto in stash. *Stash delle modifiche…* ti permette di dare un nome allo stash e scegliere i file. Gli stash compaiono nella barra laterale e, di default, nel grafico. *Recupera stash eliminato…* ritrova uno stash eliminato per errore.

## Cartelle di branch

I branch locali con nomi come `prefix/…` compaiono come cartelle nella barra laterale. Puoi disattivarlo in **Impostazioni ▸ Layout**.
