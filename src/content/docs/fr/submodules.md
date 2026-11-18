---
title: "Sous-modules"
group: Tools
order: 22
summary: "Voyez l’état de chaque sous-module, initialisez-les et mettez-les à jour, ouvrez-en un dans son propre onglet, ajoutez-en ou supprimez-en."
updated: 2026-11-18
---

Quand un dépôt a des sous-modules, la barre latérale affiche un groupe SOUS-MODULES avec chacun d’eux et son état.

## Lire la liste

Chaque ligne affiche le chemin du sous-module et son état :

- un ✓ et le commit extrait quand il est à jour, ou *contenu modifié* / *contenu non suivi* quand il a des modifications ;
- *Mettre à jour* quand il est désynchronisé : le commit extrait n’est pas celui qu’enregistre le dépôt principal (survolez pour voir les deux) ;
- *Init* quand il n’est pas encore initialisé ;
- *conflit* quand le commit enregistré est en conflit.

## Travailler avec un sous-module

Double-cliquez sur un sous-module pour l’ouvrir dans son propre onglet. Cliquez dessus avec le bouton droit pour :

- *Ouvrir dans un nouvel onglet* ;
- *Mettre à jour vers le commit enregistré*, ou *Mettre à jour vers le dernier distant* ;
- *Init*, pour un sous-module non initialisé ;
- *Afficher dans le Finder* ;
- *Supprimer le sous-module…*.

Si un sous-module a des modifications non commitées, la mise à jour demande d’abord confirmation. git s’arrête si vos modifications gênent ; rien n’est forcé.

Pour mettre à jour les sous-modules après chaque pull qui apporte de nouveaux commits, activez *Mettre à jour les sous-modules après un pull* dans **Réglages ▸ Git**.

## Ajouter un sous-module

**Dépôt ▸ Avancé ▸ Ajouter un sous-module…** demande l’URL, le chemin et, éventuellement, une branche.

## Supprimer un sous-module

*Supprimer le sous-module…* désinitialise le sous-module et le retire de l’index. Ses données de dépôt (`.git/modules/<name>`) vont dans la corbeille, si bien que ses commits restent récupérables. Commitez ensuite pour terminer. Si le sous-module a des modifications non commitées, des commits absents de tout dépôt distant ou des remisages, GitLoom les liste d’abord.
