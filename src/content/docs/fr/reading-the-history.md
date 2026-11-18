---
title: "Lire l’historique"
group: History
order: 12
summary: "Repérez-vous dans le graphe des commits, choisissez ses colonnes et regardez le contenu de n’importe quel commit."
updated: 2026-11-18
---

Le graphe au centre de la fenêtre montre chaque commit avec ses branches, chaque branche dans sa propre voie colorée.

![Le graphe des commits avec les voies des branches, la barre latérale et les détails du commit sélectionné](/shots/graph-light.png)

## Se déplacer

- <kbd>↑</kbd> <kbd>↓</kbd> ou <kbd>J</kbd> <kbd>K</kbd> passent au commit précédent ou suivant.
- <kbd>⇧</kbd>-clic sélectionne une plage et <kbd>⌘</kbd>-clic sélectionne plusieurs commits, par exemple pour les comparer, les écraser (squash) ou les cherry-picker.
- <kbd>⌘C</kbd> copie le SHA du commit sélectionné.

Sélectionnez un commit pour voir ses fichiers et ses diffs dans le panneau de détails.

## Colonnes

Cliquez avec le bouton droit sur l’en-tête des colonnes du graphe pour afficher d’autres colonnes : auteur, date, SHA, CI et *Modifications* (lignes ajoutées et supprimées). Ce choix s’applique au dépôt actuel. **Présentation ▸ Colonnes du graphe** et **Réglages ▸ Disposition ▸ Colonnes du graphe** les modifient pour tous les dépôts.

## Apparence

Dans **Réglages ▸ Apparence**, vous pouvez choisir :

- la densité des lignes (aussi dans **Présentation ▸ Densité**) ;
- des dates relatives pour la dernière semaine ou toujours des dates absolues, un format de date personnalisé, et la date de commit ou d’auteur ;
- l’affichage ou non des remisages sur le graphe ;
- les couleurs des voies : celles du thème, adaptées au daltonisme ou monochromes ;
- les avatars : oiseaux, initiales colorées, Gravatar, GitHub ou aucun.

## Trouver un commit

<kbd>⌘F</kbd> recherche dans l’historique et peut filtrer le graphe pour n’afficher que les résultats. Voir [Recherche](/fr/docs/search/).
