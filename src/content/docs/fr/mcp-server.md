---
title: "Serveur MCP"
group: Tools
order: 25
summary: "Laissez des outils d’IA comme Claude Code, Cursor ou VS Code lire vos dépôts via GitLoom, et éventuellement y apporter des modifications sûres."
updated: 2026-11-18
---

D’autres outils d’IA (Claude Code, Claude Desktop, Cursor, VS Code et d’autres) peuvent travailler avec vos dépôts via le serveur MCP de GitLoom. Il reste désactivé tant que vous ne l’activez pas.

## L’activer

Dans **Réglages ▸ Intégrations ▸ Serveur MCP**, réglez *Les outils d’IA externes peuvent* sur l’une de ces valeurs :

- *Ne rien faire (désactivé)* ;
- *Lire : état, historique, diffs, blame* ;
- *Lire et modifier : aussi commit, branche, remisage, pull, push*.

Connectez ensuite votre outil. Pour Claude Code, copiez la ligne affichée à cet endroit et exécutez-la dans un terminal ; elle ressemble à ceci :

```sh
claude mcp add gitloom -- "/Applications/GitLoom.app/Contents/Helpers/gitloom-mcp"
```

Pour les autres outils, copiez le JSON affiché à cet endroit dans la configuration MCP de l’outil. GitLoom ne modifie jamais les fichiers d’un autre outil. La commande `gitloom mcp` lance aussi le serveur (voir [L’outil en ligne de commande gitloom](/fr/docs/the-gitloom-command-line-tool/)).

## Lire

Les outils peuvent voir l’état, l’historique, les diffs, le blame, les branches et les remisages des dépôts ouverts ou présents dans la liste des récents de la page d’accueil. Pendant que GitLoom tourne, ils peuvent aussi demander ce que vous regardez, comme le commit sélectionné ou le fichier ouvert. Ils ne peuvent rien modifier.

## Lire et modifier

Les outils peuvent aussi indexer, commiter, créer des branches et en changer, remiser, récupérer, tirer (avance rapide uniquement) et pousser, dans les dépôts ouverts dans un onglet, pendant que GitLoom tourne. Chaque modification apparaît dans la fenêtre avec le nom de l’outil et un bouton *Annuler*, ainsi que dans l’historique des opérations.

Avec *Demander avant de pousser* activé, un push attend votre réponse dans la fenêtre du dépôt ; au bout de 60 secondes, il est refusé.

Aucun outil ne peut forcer un push, faire un reset, abandonner des modifications, supprimer ou réécrire l’historique.

## Pull requests, tickets et CI

Avec *Pull requests, tickets et CI via mes comptes* activé, les outils peuvent lire les pull requests, tickets et exécutions CI du dépôt via le compte connecté dans GitLoom. Avec *Lire et modifier*, ils peuvent aussi ouvrir une pull request pour la branche actuelle et en commenter une. Ils ne voient jamais votre jeton, et ne peuvent rien fusionner, approuver ni fermer.

Les réglages affichent les appels les plus récents sous *Activité récente*.
