---
title: "Éditeur de fichiers"
group: Tools
order: 20
summary: "Affichez et modifiez n’importe quel fichier du dépôt dans GitLoom, puis enregistrez-le et indexez-le en une seule étape."
updated: 2026-11-18
---

GitLoom peut afficher et modifier les fichiers de votre dépôt : une petite correction ne nécessite pas d’autre app.

## Ouvrir un fichier

- <kbd>⌘P</kbd> (Ouverture rapide) ouvre n’importe quel fichier du dépôt.
- Le sélecteur Réfs/Fichiers de la barre latérale affiche l’arborescence des fichiers. Vous pouvez aussi y créer un *Nouveau fichier…* ou un *Nouveau dossier…*, *Renommer…* ou *Placer dans la corbeille*, et *Afficher les fichiers ignorés*.

Un fichier s’ouvre en lecture. Appuyez sur <kbd>⌘E</kbd>, ou cliquez sur *Modifier le fichier*, pour le modifier. Échap revient au graphe.

## Touches d’édition

| Touches | Action |
|---|---|
| <kbd>⌘S</kbd> | Enregistrer |
| <kbd>⌥⌘S</kbd> | Enregistrer et indexer |
| <kbd>⌘L</kbd> | Aller à la ligne |
| <kbd>⌥⌘F</kbd> | Rechercher et remplacer |
| <kbd>⌘/</kbd> | Commenter ou décommenter les lignes sélectionnées |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> | Augmenter / réduire le retrait des lignes sélectionnées |

Les options de l’éditeur comprennent *Renvoyer les lignes à la ligne*, *Afficher les espaces et tabulations*, *Fermer les parenthèses et guillemets* et *La marge compare avec HEAD*. La police de code et sa taille se règlent dans **Réglages ▸ Apparence**.

## Quand le fichier change sur le disque

Si une autre app modifie le fichier alors que vous avez des modifications non enregistrées, GitLoom vous prévient et propose *Garder la mienne*, *Recharger* ou *Comparer*. Pour un fichier contenant des marqueurs de conflit, GitLoom précise que l’enregistrer ne le marque pas comme résolu ; utilisez pour cela l’[éditeur de conflits](/fr/docs/resolving-conflicts/).

GitLoom attend aussi pour installer une mise à jour tant qu’un fichier a des modifications non enregistrées.

## Un autre éditeur

*Ouvrir dans l’éditeur externe* ouvre le fichier dans l’app choisie dans **Réglages ▸ Intégrations ▸ Ouvrir les fichiers avec**. Une *Commande personnalisée* à cet endroit a la priorité ; `$FILE`, `$LINE` et `$REPO` y sont remplacés, par exemple :

```sh
code -g $FILE:$LINE
```
