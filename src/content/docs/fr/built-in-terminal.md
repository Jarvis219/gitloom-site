---
title: "Terminal intégré"
group: Tools
order: 19
summary: "Un terminal sous le graphe, dans le dossier du dépôt, qui actualise GitLoom et suggère des commandes git."
updated: 2026-11-18
---

<kbd>⌃`</kbd> ouvre un terminal sous le graphe, dans le dossier du dépôt, avec votre propre shell de connexion. Le graphe s’actualise dès qu’une commande git s’y termine.

## Suggestions et liens

Pendant que vous tapez une commande git, GitLoom suggère des sous-commandes, branches, dépôts distants et alias. <kbd>↑</kbd> <kbd>↓</kbd> choisissent une suggestion, <kbd>⇥</kbd> ou <kbd>→</kbd> l’insère, et Échap ferme la liste.

<kbd>⌘</kbd>-cliquez sur ce qui se trouve sous le pointeur : un SHA sélectionne ce commit, un chemin ouvre le fichier et une URL ouvre le navigateur.

## Touches

| Touches | Action |
|---|---|
| <kbd>⌃`</kbd> | Afficher ou masquer le terminal (le masque s’il a le focus) |
| <kbd>⌃⇧`</kbd> | Nouvelle session de terminal |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> | Texte du terminal plus grand / plus petit |
| Échap | À une invite vide, revenir au graphe |

Si une commande est encore en cours quand vous fermez l’onglet, GitLoom demande d’abord confirmation.

## Réglages

**Réglages ▸ Intégrations ▸ Terminal** propose :

- *Intégration au shell* : permet à GitLoom de savoir quand une commande se termine (actualisation instantanée, suggestions). Désactivez-la et ces fonctions s’arrêtent. Vos fichiers de configuration du shell ne sont jamais modifiés, dans un cas comme dans l’autre.
- *Suggérer des commandes git pendant la saisie*, pour désactiver uniquement les suggestions.
- *Historique de défilement* : le nombre de lignes conservées par chaque session (10 000 par défaut).
- *Afficher les commandes git exécutées par GitLoom* : une ligne grisée pour chaque commande exécutée par l’app, pour apprendre git.
- *Entrée sécurisée au clavier* : tant qu’un terminal a le clavier, les autres apps ne peuvent pas lire ce que vous tapez.
- *Shell* et *Arguments* : un autre shell pour les nouvelles sessions, comme `/opt/homebrew/bin/fish`. Un chemin non exécutable revient à votre shell de connexion.

Les modifications s’appliquent aux nouvelles sessions de terminal. Le terminal utilise la police de code définie dans **Réglages ▸ Apparence**.

## Votre app de terminal habituelle

<kbd>⌥⌘T</kbd> ouvre plutôt le dépôt dans votre app de terminal. Choisissez laquelle dans **Réglages ▸ Intégrations ▸ « Ouvrir dans le Terminal » utilise**.
