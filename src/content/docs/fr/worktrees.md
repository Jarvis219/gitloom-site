---
title: "Worktrees"
group: Tools
order: 21
summary: "Extrayez une deuxième branche dans son propre dossier, pour y travailler sans remiser ce que vous êtes en train de faire."
updated: 2026-11-18
---

Un worktree est un deuxième dossier de travail pour le même dépôt. Vous pouvez y travailler sur une autre branche sans remiser ce que vous faites dans le premier.

## En créer un

Clic droit sur une branche dans la barre latérale ▸ *Ouvrir dans un nouveau worktree…*. Choisissez le dossier, et cochez *Créer une nouvelle branche à partir de…* si vous voulez une branche toute neuve. *Créer et ouvrir* crée le worktree et l’ouvre dans un nouvel onglet.

## Le groupe WORKTREES

Quand un dépôt a plus d’un worktree, la barre latérale affiche un groupe WORKTREES. Chaque ligne indique la branche du worktree ; celui de l’onglet actuel est marqué *cet onglet*. Un worktree dont le dossier a disparu est marqué *manquant*, et *Élaguer* les oublie.

Cliquez avec le bouton droit sur un worktree pour :

- *Ouvrir dans un nouvel onglet* ou *Ouvrir* ;
- *Afficher dans le Finder* ;
- *Verrouiller* ou *Déverrouiller* ;
- *Supprimer le worktree…*.

## Une branche dans un autre worktree

Git n’autorise l’extraction d’une branche que dans un seul worktree à la fois. Si vous extrayez une branche ouverte ailleurs, GitLoom propose *Ouvrir ce worktree*, ou le même commit dans ce worktree sans la branche.

## En supprimer un

*Supprimer le worktree…* supprime le dossier du worktree ; la branche reste. Vous ne pouvez pas supprimer le worktree ouvert dans l’onglet actuel.

> **Caution** Si le worktree a des modifications non commitées, GitLoom le signale, et elles sont supprimées avec le dossier quand vous choisissez *Supprimer quand même*.
