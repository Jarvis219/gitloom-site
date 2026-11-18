---
title: "Tickets"
group: Accounts & hosting
order: 30
summary: "Créez et parcourez les tickets GitHub et GitLab, et démarrez une branche à partir de l’un d’eux."
updated: 2026-11-18
---

Une fois un compte GitHub ou GitLab ajouté, GitLoom affiche les tickets du dépôt dans la barre latérale.

## Créer et parcourir

- **Dépôt ▸ GitHub / GitLab ▸ Nouveau ticket…** crée un ticket.
- Parcourez les tickets du dépôt dans le groupe Tickets de la barre latérale. Vous pouvez les filtrer par étiquette et par jalon.
- Cliquez avec le bouton droit sur un ticket pour *Créer une branche à partir du ticket*, *Ouvrir dans le navigateur* ou *Copier le lien*.
- Dans la palette de commandes (<kbd>⌘K</kbd>), tapez `#` pour trouver pull requests et tickets.
- **Launchpad** (<kbd>⇧⌘K</kbd>) liste les tickets qui vous attendent dans tous les dépôts.

## Démarrer une branche à partir d’un ticket

*Créer une branche à partir du ticket* crée une branche nommée d’après le ticket. Le nom suit le modèle défini dans **Réglages ▸ Git ▸ Branche à partir d’un ticket**, par défaut `{type}/{number}-{slug}`, où `{type}` vaut `fix` ou `feat`. Le modèle du fichier `.gitloom/team.json` d’une équipe l’emporte sur le vôtre.
