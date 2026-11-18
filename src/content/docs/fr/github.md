---
title: "GitHub"
group: Accounts & hosting
order: 27
summary: "Connectez-vous à GitHub pour travailler avec les pull requests, les tickets, les Actions et vos organisations depuis GitLoom."
updated: 2026-11-18
---

Connectez-vous à GitHub pour utiliser les pull requests, les tickets, le Launchpad et les Actions dans GitLoom.

## Se connecter

Ouvrez **Réglages ▸ Hébergement** et cliquez sur *Se connecter avec GitHub…*. *Obtenir un code* vous donne un code ; *Copier le code et ouvrir GitHub* le copie et ouvre la page où le saisir.

Vous pouvez aussi utiliser *Ajouter un jeton…* et coller un jeton d’accès personnel, granulaire ou classique. GitLoom vérifie les portées qu’il peut voir.

Les jetons sont conservés uniquement dans le trousseau macOS.

## Ce que vous pouvez faire

- Créer, relire et fusionner des [pull requests](/fr/docs/pull-requests-and-reviews/).
- Créer et parcourir des [tickets](/fr/docs/issues/).
- Voir les exécutions GitHub [Actions](/fr/docs/actions/) à côté de leurs commits.
- **Launchpad** (<kbd>⇧⌘K</kbd>) liste les pull requests et tickets qui vous attendent dans tous les dépôts.
- **Fenêtre ▸ Organisations** affiche vos organisations, leurs équipes et leurs membres.
- **Dépôt ▸ GitHub / GitLab** propose *Publier le dépôt…*, qui crée le dépôt sur GitHub, l’ajoute comme `origin` et pousse la branche actuelle, ainsi que *Forker sur GitHub*.
- Cloner depuis vos comptes et organisations : <kbd>⇧⌘C</kbd> ▸ *Choisir depuis votre compte…*.

## Votre e-mail de commit

Avant un commit, GitLoom vous avertit si l’e-mail ne fait pas partie des e-mails de votre compte GitHub, car GitHub n’associerait pas le commit à vous.

## Clés SSH

La connexion sert à l’API. La clé SSH qui pousse pour chaque identifiant se règle dans [Comptes SSH](/fr/docs/ssh-accounts/). Le bouton *Clés SSH…* d’un compte, dans **Réglages ▸ Hébergement**, affiche les clés enregistrées sur GitHub et peut y envoyer les vôtres.
