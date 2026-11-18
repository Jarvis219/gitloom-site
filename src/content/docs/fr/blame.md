---
title: "Blame"
group: History
order: 14
summary: "Voyez qui a modifié en dernier chaque ligne d’un fichier, et remontez une ligne à travers les commits plus anciens."
updated: 2026-11-18
---

Blame affiche, pour chaque ligne d’un fichier, le commit qui l’a modifiée en dernier.

## L’ouvrir

Sélectionnez un fichier et appuyez sur <kbd>⌥⌘B</kbd>, ou choisissez **Dépôt ▸ Blame…**. Depuis le terminal, `gitloom blame <file>:<line>` l’ouvre à cette ligne (voir [L’outil en ligne de commande gitloom](/fr/docs/the-gitloom-command-line-tool/)). Depuis l’[historique du fichier](/fr/docs/file-history/), *Blame à ce commit* montre le fichier tel qu’il était alors.

## Remonter une ligne

Cliquez sur une ligne pour voir son commit, puis :

- *Afficher le commit* sélectionne ce commit dans le graphe ;
- *Blame du parent* affiche le blame juste avant ce commit, pour voir qui avait écrit la ligne auparavant.

## Options

La barre au-dessus du fichier propose :

- *Ignorer les espaces* ;
- *Carte de chaleur*, qui colore les lignes selon leur âge ;
- sous *Plus* : *Détecter les lignes déplacées dans le fichier (-M)* et *Détecter les lignes copiées depuis d’autres fichiers (-C)* ;
- *Révisions ignorées*, quand le dépôt contient un fichier `.git-blame-ignore-revs` (ou que `blame.ignoreRevsFile` est défini). Les commits qui y sont listés, comme des changements de mise en forme, sont ignorés.

Sur un fichier très long, le blame peut prendre un moment. GitLoom vous prévient d’abord, les lignes se remplissent au fur et à mesure, et vous pouvez quitter à tout moment.
