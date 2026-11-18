---
title: "Leggere la cronologia"
group: History
order: 12
summary: "Orientati nel grafico dei commit, scegli le sue colonne e guarda dentro qualsiasi commit."
updated: 2026-11-18
---

Il grafico al centro della finestra mostra ogni commit con i suoi branch, ciascun branch nella propria corsia colorata.

![Il grafico dei commit con le corsie dei branch, la barra laterale e i dettagli del commit selezionato](/shots/graph-light.png)

## Spostarsi

- <kbd>↑</kbd> <kbd>↓</kbd> o <kbd>J</kbd> <kbd>K</kbd> passano al commit precedente o successivo.
- <kbd>⇧</kbd>-clic seleziona un intervallo e <kbd>⌘</kbd>-clic seleziona più commit, per esempio per confrontarli, unirli con squash o fare cherry-pick.
- <kbd>⌘C</kbd> copia lo SHA del commit selezionato.

Seleziona un commit per vederne file e diff nel pannello dettagli.

## Colonne

Fai clic destro sull’intestazione delle colonne del grafico per mostrare altre colonne: autore, data, SHA, CI e *Modifiche* (righe aggiunte e rimosse). La scelta vale per il repository corrente. **Vista ▸ Colonne del grafico** e **Impostazioni ▸ Layout ▸ Colonne del grafico** le cambiano per tutti i repository.

## Aspetto

In **Impostazioni ▸ Aspetto** puoi scegliere:

- la densità delle righe (anche in **Vista ▸ Densità**);
- date relative per l’ultima settimana o sempre date assolute, un formato di data personalizzato, e la data di commit o dell’autore;
- se gli stash compaiono nel grafico;
- i colori delle corsie: dal tema, adatti ai daltonici o monocromatici;
- gli avatar: uccelli, iniziali colorate, Gravatar, GitHub o nessuno.

## Trovare un commit

<kbd>⌘F</kbd> cerca nella cronologia e può filtrare il grafico mostrando solo i risultati. Vedi [Ricerca](/it/docs/search/).
