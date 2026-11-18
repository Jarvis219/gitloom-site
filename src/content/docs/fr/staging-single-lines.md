---
title: "Indexer des lignes isolées"
group: Everyday work
order: 6
summary: "Indexez des fichiers entiers, des blocs ou seulement les lignes choisies, et gardez le reste pour un commit ultérieur."
updated: 2026-11-18
---

Vous n’êtes pas obligé de commiter un fichier d’un seul coup. GitLoom vous permet d’indexer un fichier entier, un bloc, ou seulement les lignes que vous choisissez.

![Un diff côte à côte d’un fichier modifié, avec le panneau d’indexation et le formulaire de commit](/shots/diff-light.png)

## Indexer des fichiers et des blocs

Sélectionnez la ligne *Uncommitted changes* en haut du graphe. Le panneau de détails liste vos fichiers non indexés et indexés. Indexez un fichier entier, ou ouvrez son diff et utilisez *Stage Hunk* sur un bloc de modifications. <kbd>⇧⌘A</kbd> indexe tout et <kbd>⌥⇧⌘A</kbd> désindexe tout.

## Indexer des lignes

1. Ouvrez le diff du fichier.
2. Cliquez sur les lignes voulues. Une barre indique combien de lignes sont sélectionnées.
3. Cliquez sur *Indexer les lignes*, ou appuyez sur <kbd>S</kbd>.

Dans le diff indexé, sélectionnez des lignes et cliquez sur *Désindexer les lignes* (<kbd>U</kbd>) pour les retirer. Le ✕ de la barre efface la sélection.

## Abandonner des lignes

Dans le diff non indexé, *Abandonner les lignes* (<kbd>⌫</kbd>) jette les lignes sélectionnées. GitLoom demande d’abord confirmation, et <kbd>⌘Z</kbd> les fait revenir (voir [Annuler et rétablir](/fr/docs/undo-and-redo/)).

## Se déplacer dans le diff

<kbd>⌥↑</kbd> et <kbd>⌥↓</kbd> passent à la modification précédente ou suivante du fichier ; <kbd>⌥⌘↑</kbd> et <kbd>⌥⌘↓</kbd> passent au fichier précédent ou suivant.
