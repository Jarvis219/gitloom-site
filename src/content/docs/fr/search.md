---
title: "Recherche"
group: History
order: 15
summary: "Trouvez des commits par message, auteur, SHA, chemin ou contenu, et allez n’importe où avec la palette de commandes et l’ouverture rapide."
updated: 2026-11-18
---

GitLoom offre trois façons de trouver des choses : la recherche pour les commits, la palette de commandes pour tout le reste, et l’ouverture rapide pour les fichiers.

## Trouver des commits

<kbd>⌘F</kbd> recherche dans les messages de commit, les auteurs, les SHA, les chemins de fichiers ou les modifications (`-S`, les commits qui ajoutent ou suppriment un bout de texte). Elle peut filtrer le graphe pour n’afficher que les résultats. <kbd>⌘G</kbd> et <kbd>⇧⌘G</kbd> passent au résultat suivant et précédent.

- Les accents n’ont pas d’importance : « nguoi » trouve « người ».
- `re:` accepte une expression régulière portant sur tout le message, par exemple `re:^fix(ed)?:`.

## Palette de commandes

<kbd>⌘K</kbd> exécute n’importe quelle commande et vous amène aux branches, fichiers, commits, auteurs et pull requests. Commencez par un caractère pour ne chercher qu’un type d’élément :

| Préfixe | Recherche |
|---|---|
| `>` | commandes |
| `/` | fichiers |
| `:` | commits |
| `@` | auteurs |
| `#` | pull requests et tickets |

## Ouverture rapide

<kbd>⌘P</kbd> ouvre n’importe quel fichier du dépôt. Une fois le fichier ouvert, <kbd>⌘E</kbd> permet de le modifier (voir [Éditeur de fichiers](/fr/docs/file-editor/)).
