---
title: "Historique du fichier"
group: History
order: 13
summary: "Voyez chaque commit qui a modifié un fichier, en suivant les renommages, et affichez ou restaurez n’importe quelle version antérieure."
updated: 2026-11-18
---

L’historique du fichier montre chaque commit qui a modifié un fichier, en le suivant à travers ses renommages.

## L’ouvrir

Sélectionnez un fichier et appuyez sur <kbd>⌥⌘Y</kbd>, ou choisissez **Dépôt ▸ Historique du fichier…**. Si aucun fichier n’est sélectionné, la palette de commandes s’ouvre pour que vous en choisissiez un. Depuis le terminal, `gitloom log <file>` l’ouvre aussi (voir [L’outil en ligne de commande gitloom](/fr/docs/the-gitloom-command-line-tool/)).

## Le lire

Chaque entrée est un commit qui a modifié le fichier, avec son auteur et sa date. Un renommage indique d’où vient le fichier. *Suivre les renommages* peut être désactivé. Sélectionnez deux versions pour voir le diff entre elles.

<kbd>⌘[</kbd> et <kbd>⌘]</kbd> reculent et avancent. Échap revient au graphe.

## Versions antérieures

Cliquez avec le bouton droit sur une entrée pour :

- *Voir cette version*, ou *Ouvrir cette version dans l’éditeur externe* ;
- *Afficher dans le graphe* ;
- *Blame à ce commit* (voir [Blame](/fr/docs/blame/)) ;
- *Restaurer le fichier à cette version…*. Si le fichier a des modifications non commitées, elles sont remplacées ; <kbd>⌘Z</kbd> les fait revenir.

## Clones superficiels

Dans un clone superficiel, l’historique s’arrête là où s’arrête le clone, et la liste l’indique.
