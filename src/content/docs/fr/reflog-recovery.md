---
title: "Récupération par le reflog"
group: History
order: 17
summary: "Retrouvez des commits qui semblent perdus après un reset, un rebase ou une branche supprimée, grâce au reflog et à Retrouver les commits perdus."
updated: 2026-11-18
---

Il est difficile de perdre des commits avec git. Si l’un d’eux semble avoir disparu, essayez d’abord <kbd>⌘Z</kbd> ou **Édition ▸ Historique des opérations…** (voir [Annuler et rétablir](/fr/docs/undo-and-redo/)). Si cela ne suffit pas, regardez dans le reflog.

## Le reflog

Choisissez **Dépôt ▸ Reflog…**. Il liste toutes les positions qu’a eues HEAD, de la plus récente à la plus ancienne : les commits perdus lors d’un reset ou d’un rebase s’y trouvent. Choisissez une branche en haut pour voir plutôt le reflog de cette branche, et tapez dans le filtre pour rechercher par SHA, action ou message.

Vous pouvez aussi cliquer avec le bouton droit sur une branche ▸ *Afficher le reflog* pour ouvrir le reflog de cette branche.

## Commits perdus

**Dépôt ▸ Retrouver les commits perdus…** (ou l’onglet *Commits perdus*) recherche les commits qu’aucune branche, étiquette ni reflog n’atteint, par exemple les commits d’une branche supprimée.

## Récupérer un commit

Sélectionnez un commit dans l’une ou l’autre liste, puis :

- *Créer une branche ici…* place une nouvelle branche dessus ;
- *Cherry-pick* le copie sur votre branche actuelle ;
- *Réinitialiser la branche actuelle ici…* y déplace votre branche actuelle.
