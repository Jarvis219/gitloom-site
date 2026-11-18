---
title: "La fenêtre"
group: Getting started
order: 3
summary: "La barre latérale, le graphe des commits, le panneau de détails, la barre d’outils, les onglets, les bandeaux et les messages."
updated: 2026-11-18
---

Une fenêtre de dépôt comporte trois parties principales : la barre latérale à gauche, le graphe des commits au centre et le panneau de détails à droite ou en bas.

![La fenêtre de GitLoom : barre latérale avec les branches, graphe des commits avec des voies de branches colorées, et détails du commit sélectionné](/shots/graph-light.png)

## Barre latérale

La barre latérale liste les branches locales et distantes, les étiquettes, les remisages, les sous-modules et les worktrees. Le sélecteur Réfs/Fichiers affiche à la place l’arborescence des fichiers du dépôt. Clic droit sur une branche ou une étiquette ▸ *Épingler en haut* pour la garder dans un groupe ÉPINGLÉS au-dessus des autres. Masquez la barre latérale avec le bouton de son en-tête ou <kbd>⌘0</kbd>.

## Graphe et panneau de détails

Le graphe montre chaque commit avec ses branches. La ligne du haut, *Uncommitted changes*, représente votre arbre de travail. Cliquez avec le bouton droit sur l’en-tête des colonnes pour afficher d’autres colonnes : auteur, date, SHA, CI et *Modifications* (lignes ajoutées et supprimées).

Le panneau de détails montre le commit sélectionné avec ses fichiers et ses diffs, ou la zone d’indexation quand la ligne de l’arbre de travail est sélectionnée. <kbd>⌥⌘0</kbd> l’affiche ou le masque, et <kbd>⌥⌘L</kbd> le déplace entre la droite et le bas.

## Barre d’outils et onglets

La barre d’outils contient les boutons Annuler/Rétablir, Tirer, Pousser, Récupérer, Branche, Remiser, terminal et panneaux. Survolez un bouton un instant pour voir ce qu’il fait et son raccourci. Vous pouvez choisir et ordonner les boutons dans **Réglages ▸ Disposition**.

Chaque dépôt a son propre onglet. **Dépôt ▸ Couleur de l’onglet** donne à un dépôt sa propre couleur, qui apparaît aussi sous forme de fine ligne sous la barre d’outils. **Fichier ▸ Ouvrir l’élément récent** et le menu de l’icône du Dock listent les dépôts récents. Un onglet que vous n’avez pas regardé depuis 10 minutes libère la mémoire de son graphe et le recharge quand vous y revenez.

## Bandeaux et messages

Un bandeau sous la barre d’outils explique tout état inhabituel, comme un rebase ou une fusion en cours, des conflits ou une HEAD détachée, et propose les boutons pour continuer ou abandonner.

De courts messages apparaissent en haut de la fenêtre, colorés selon leur nature : vert quand une action est terminée, bleu pour une information, orange quand quelque chose demande votre attention et rouge en cas d’échec. Les problèmes restent affichés plus longtemps ; ✕ les ferme.
