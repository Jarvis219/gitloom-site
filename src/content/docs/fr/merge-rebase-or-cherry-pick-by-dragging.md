---
title: "Fusionner, rebaser ou cherry-picker en glissant"
group: Everyday work
order: 9
summary: "Glissez branches et commits sur le graphe pour fusionner, rebaser, avancer rapidement, cherry-picker ou pousser."
updated: 2026-11-18
---

Sur le graphe, vous pouvez glisser une branche ou des commits vers un autre endroit, et GitLoom affiche un menu de ce que ce dépôt permet. Rien ne se passe tant que vous n’avez pas choisi.

## Ce que vous pouvez glisser

- **L’étiquette d’une branche sur une autre branche ou un commit** : fusion, rebase ou avance rapide. Le menu peut aussi lancer un [rebase interactif](/fr/docs/interactive-rebase/).
- **Des commits sur une branche** : les cherry-picker. Sélectionnez-en d’abord plusieurs avec <kbd>⇧</kbd>-clic ou <kbd>⌘</kbd>-clic.
- **Une branche sur un dépôt distant** dans la barre latérale : la pousser.
- **Une branche sur une autre branche**, avec un compte GitHub ou GitLab : créer une pull request (voir [Pull requests et revues](/fr/docs/pull-requests-and-reviews/)).

## Sans glisser

Chaque glisser-déposer a sa commande équivalente dans un menu contextuel. Le menu Dépôt propose aussi *Fusionner dans la branche actuelle* et *Rebaser la branche actuelle sur*.

## En cas de conflits

Les conflits interrompent l’opération et un bandeau apparaît. Résolvez-les, puis choisissez *Continuer*, *Passer* ou *Abandonner*. Voir [Résoudre les conflits](/fr/docs/resolving-conflicts/).

## Vous avez changé d’avis

Une fusion, un rebase ou un cherry-pick peut être annulé avec <kbd>⌘Z</kbd>. Voir [Annuler et rétablir](/fr/docs/undo-and-redo/).
