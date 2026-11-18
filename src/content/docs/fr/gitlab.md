---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "Connectez gitlab.com ou votre propre serveur GitLab avec un jeton pour travailler avec les merge requests et les tickets."
updated: 2026-11-18
---

GitLoom fonctionne avec gitlab.com et avec votre propre serveur GitLab, à l’aide d’un jeton d’accès personnel.

## Ajouter un jeton

1. Ouvrez **Réglages ▸ Hébergement** et cliquez sur *Ajouter un jeton GitLab…*.
2. Saisissez l’hôte.
3. Collez un jeton d’accès personnel avec les portées `api`, `read_user` et `write_repository`. *Créer un jeton…* ouvre la bonne page sur votre GitLab.

Le jeton est conservé dans le trousseau macOS. Les push en HTTPS l’utilisent.

## Ce que vous pouvez faire

La barre latérale affiche les MERGE REQUESTS et les tickets. Vous pouvez :

- créer une merge request, la commenter, l’approuver et la fusionner (avec squash) ;
- voir vos merge requests dans le Launchpad (<kbd>⇧⌘K</kbd>) ;
- créer et parcourir des tickets.

## Pas encore pris en charge

Pour GitLab, GitLoom ne prend pas encore en charge :

- les pipelines CI (le groupe Actions est masqué) ;
- les commentaires sur une ligne de code ;
- les organisations ;
- la connexion sans jeton.
