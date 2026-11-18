---
title: "Rebase interactif"
group: History
order: 16
summary: "Réordonnez, reformulez, fusionnez (squash), modifiez ou supprimez des commits dans un plan visuel qui ne fait rien tant que vous ne le lancez pas."
updated: 2026-11-18
---

Le rebase interactif réécrit une série de commits. GitLoom présente le plan sous forme de liste modifiable ; rien n’arrive au dépôt tant que vous ne lancez pas l’opération.

## Ouvrir l’éditeur

- Clic droit sur un commit ▸ *Rebase interactif à partir d’ici…*.
- Ou déposez une branche sur une autre et choisissez *Rebase interactif*.
- Avec plusieurs commits sélectionnés, *Rebase interactif des commits sélectionnés…* ouvre l’éditeur avec ces commits sélectionnés.

Cela fonctionne aussi depuis le tout premier commit (`--root`). L’éditeur remplace le graphe.

## Modifier le plan

Chaque ligne est un commit, le plus ancien en haut. Définissez son action dans le menu ou avec une touche :

| Touche | Action |
|---|---|
| <kbd>P</kbd> | pick |
| <kbd>R</kbd> | reword |
| <kbd>E</kbd> | edit |
| <kbd>S</kbd> | squash |
| <kbd>F</kbd> | fixup |
| <kbd>C</kbd> | fixup -C |
| <kbd>D</kbd> | drop |

Glissez les lignes, ou utilisez <kbd>⌥↑</kbd> et <kbd>⌥↓</kbd>, pour les réordonner. <kbd>⌘Z</kbd> annule une modification du plan.

- Les messages à reformuler peuvent être écrits à l’avance : le rebase s’exécute alors sans s’arrêter.
- Le menu d’une ligne propose *Ajouter une commande après…* pour exécuter une commande à cet endroit (une ligne `exec`, comme un test qui arrête le rebase s’il échoue).
- Les branches empilées sur les commits rebasés les suivent (`--update-refs`), sauf si vous décochez l’option.
- Les fusions comprises dans la plage sont aplaties par défaut. Cochez *Garder les fusions* pour les conserver (`--rebase-merges`). Le plan montre alors aussi où commence chaque côté d’une fusion et où la fusion est refaite, et les commits ne peuvent se déplacer qu’à l’intérieur de leur propre côté.

## Lancer ou annuler

<kbd>⌘↩</kbd> lance le rebase et Échap l’annule. Ensuite, le rebase entier constitue une seule étape d’annulation.

## Modifications plus rapides

Sans ouvrir l’éditeur :

- sélectionnez plusieurs commits adjacents ▸ *Écraser N commits* (s’exécute immédiatement en combinant les messages, du plus ancien au plus récent ; *…et modifier le message* pour le rédiger vous-même) ou *Supprimer N commits…* ;
- clic droit sur un commit ▸ *Modifier le message…*, *Supprimer le commit…*, *Monter/Descendre*.
