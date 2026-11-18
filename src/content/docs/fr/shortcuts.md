---
title: "Raccourcis"
group: Personalise
order: 36
summary: "Tous les raccourcis clavier de GitLoom, et comment modifier ceux de la barre des menus."
updated: 2026-11-18
---

Les 35 raccourcis marqués ✎, soit tous ceux de la barre des menus, peuvent être modifiés dans **Réglages ▸ Clavier**. Les autres (ceux du système comme <kbd>⌘W</kbd> et <kbd>⌘Z</kbd>, et les touches qui ne fonctionnent que dans une zone de dialogue ou un éditeur) sont fixes. Le menu affiche toujours la touche actuelle, et tout ce qui figure ici se trouve aussi dans la palette de commandes (<kbd>⌘K</kbd>).

## Partout

| Touches | Action |
|---|---|
| <kbd>⌘K</kbd> ✎ | Palette de commandes : `>` commandes, `/` fichiers, `:` commits, `@` auteurs, `#` pull requests et tickets |
| <kbd>⌘P</kbd> ✎ | Ouverture rapide d’un fichier du dépôt |
| <kbd>⌘F</kbd> / <kbd>⌘G</kbd> / <kbd>⇧⌘G</kbd> ✎ | Rechercher des commits / résultat suivant / résultat précédent |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Annuler / rétablir la dernière opération Git (dans un champ de texte : annuler la saisie) |
| <kbd>⌘T</kbd> ✎ | Nouvel onglet |
| <kbd>⌘W</kbd> | Fermer l’onglet |
| <kbd>⌃⇥</kbd> / <kbd>⌃⇧⇥</kbd> ✎ | Onglet suivant / précédent |
| <kbd>⇧⌘C</kbd> ✎ | Cloner un dépôt |
| <kbd>⌘O</kbd> ✎ | Ouvrir un dépôt (dans un nouvel onglet si celui-ci en affiche déjà un) |
| <kbd>⇧⌘R</kbd> ✎ | Afficher le dépôt dans le Finder |
| <kbd>⌥⌘T</kbd> ✎ | Ouvrir le dépôt dans votre app de terminal |
| <kbd>⇧⌘K</kbd> | Launchpad (pull requests et tickets de vos comptes GitHub et GitLab) |
| <kbd>⌥⇧⌘L</kbd> ✎ | Journal Git (toutes les commandes git exécutées par GitLoom) |
| <kbd>⌘,</kbd> | Réglages |
| <kbd>⌘?</kbd> | Aide GitLoom |

## Dépôt

| Touches | Action |
|---|---|
| <kbd>⇧⌘L</kbd> ✎ | Récupérer tous les dépôts distants |
| <kbd>⇧⌘↓</kbd> ✎ | Tirer |
| <kbd>⇧⌘↑</kbd> ✎ | Pousser |
| <kbd>⌘B</kbd> ✎ | Créer une branche sur le commit sélectionné |
| <kbd>⇧⌘S</kbd> ✎ | Remiser toutes les modifications |
| <kbd>⌥⌘Y</kbd> ✎ | Historique du fichier sélectionné |
| <kbd>⌥⌘B</kbd> ✎ | Blame du fichier sélectionné |
| <kbd>⌘0</kbd> ✎ | Afficher ou masquer la barre latérale |
| <kbd>⌥⌘0</kbd> ✎ | Afficher ou masquer le panneau de détails |
| <kbd>⌥⌘L</kbd> ✎ | Déplacer le panneau de détails en bas / le remettre à droite |

## Graphe, modifications et diff

| Touches | Action |
|---|---|
| <kbd>↑</kbd> <kbd>↓</kbd> ou <kbd>J</kbd> <kbd>K</kbd> | Commit précédent / suivant |
| <kbd>⇧</kbd>-clic, <kbd>⌘</kbd>-clic | Sélectionner une plage / plusieurs commits (comparer, squash, cherry-pick) |
| <kbd>⌘C</kbd> | Copier le SHA du commit sélectionné |
| <kbd>⌘Y</kbd> | Coup d’œil sur le fichier sélectionné |
| <kbd>⇧⌘A</kbd> | Tout indexer |
| <kbd>⌥⇧⌘A</kbd> | Tout désindexer |
| <kbd>⌘↩</kbd> | Commiter (dans le message de commit) |
| <kbd>⌥⌘G</kbd> | Rédiger le message de commit avec l’IA (si l’IA est activée) |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Modification précédente / suivante dans le fichier |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Fichier précédent / suivant |

## Éditeurs

| Touches | Action |
|---|---|
| <kbd>⌘E</kbd> ✎ | Modifier le fichier ouvert |
| <kbd>⌘S</kbd> ✎ | Enregistrer |
| <kbd>⌥⌘S</kbd> ✎ | Enregistrer et indexer |
| <kbd>⌘L</kbd> ✎ | Aller à la ligne |
| <kbd>⌥⌘F</kbd> ✎ | Rechercher et remplacer |
| <kbd>⌘/</kbd> ✎ | Commenter ou décommenter les lignes sélectionnées |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> ✎ | Augmenter / réduire le retrait des lignes sélectionnées |
| <kbd>P</kbd> <kbd>R</kbd> <kbd>E</kbd> <kbd>S</kbd> <kbd>F</kbd> <kbd>C</kbd> <kbd>D</kbd> | Rebase interactif : pick, reword, edit, squash, fixup, fixup -C, drop pour les lignes sélectionnées |
| <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> | Rebase interactif : déplacer les lignes sélectionnées (avec *Garder les fusions*, uniquement à l’intérieur de leur propre branche) |
| <kbd>⌘Z</kbd> / <kbd>⇧⌘Z</kbd> | Rebase interactif : annuler / rétablir une modification du plan (git n’est pas touché tant que vous ne lancez pas le rebase) |
| <kbd>⌘↩</kbd> | Rebase interactif : lancer le rebase (ou enregistrer le reste du plan) |
| Échap | Rebase interactif : fermer l’éditeur sans rien faire |
| <kbd>⌥⌘↑</kbd> / <kbd>⌥⌘↓</kbd> | Conflits de fusion : conflit précédent / suivant |
| <kbd>⌘S</kbd> | Conflits de fusion : enregistrer et marquer le fichier comme résolu |
| <kbd>⌘[</kbd> / <kbd>⌘]</kbd> | Historique du fichier : reculer / avancer |

## Terminal

| Touches | Action |
|---|---|
| <kbd>⌃`</kbd> ✎ | Afficher ou masquer le terminal (le masque s’il a le focus) |
| <kbd>⌃⇧`</kbd> ✎ | Nouvelle session de terminal |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> ✎ | Texte du terminal plus grand / plus petit |
| <kbd>⇥</kbd> ou <kbd>→</kbd> | Insérer la suggestion sélectionnée |
| <kbd>↑</kbd> <kbd>↓</kbd> | Choisir une suggestion |
| Échap | Fermer les suggestions ; à une invite vide, revenir au graphe (masquer le terminal fait de même) |
| <kbd>⌘</kbd>-clic | Ouvrir ce qui est sous le pointeur : un SHA sélectionne le commit, un chemin ouvre le fichier, une URL ouvre le navigateur |
