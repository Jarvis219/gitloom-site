---
title: "Installation"
group: Getting started
order: 1
summary: "Ce dont GitLoom a besoin, comment le télécharger et comment l’ouvrir la première fois."
updated: 2026-11-18
---

GitLoom est un client Git gratuit pour Mac. Il exécute votre propre `git` : votre configuration, vos hooks, vos identifiants et vos alias s’appliquent tous.

## Configuration requise

- macOS 14 Sonoma ou ultérieur, sur un Mac avec Apple silicon.
- git 2.40 ou ultérieur. Celui des Xcode Command Line Tools convient, tout comme celui de Homebrew.

Pour obtenir git auprès d’Apple, exécutez ceci dans le Terminal :

```sh
xcode-select --install
```

GitLoom vous prévient au lancement s’il ne trouve pas de git assez récent. Si votre git se trouve à un emplacement inhabituel, choisissez-le dans **Réglages ▸ Git**.

## Téléchargement

Téléchargez `GitLoom.dmg` (42 Mo) depuis la [dernière version](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg), ou depuis le Terminal :

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

Ouvrez l’image disque et glissez GitLoom dans votre dossier Applications.

## L’ouvrir la première fois

GitLoom n’est pas encore notarié par Apple : macOS bloque donc le premier lancement. Pour l’ouvrir :

1. Ouvrez GitLoom une fois. macOS indique qu’il ne peut pas être ouvert.
2. Allez dans **Réglages Système ▸ Confidentialité et sécurité** et cliquez sur *Ouvrir quand même* à côté du message concernant GitLoom.
3. Confirmez. Dès lors, GitLoom s’ouvre normalement.

Vous n’avez à le faire qu’une fois. Les versions suivantes arrivent par le système de mise à jour de GitLoom (voir [Mises à jour](/fr/docs/updates/)).

## Facultatif : l’outil en ligne de commande

Choisissez **GitLoom ▸ Installer l’outil en ligne de commande…** pour ajouter une commande `gitloom` : `gitloom .` ouvre alors le dossier où vous vous trouvez. Voir [L’outil en ligne de commande gitloom](/fr/docs/the-gitloom-command-line-tool/).
