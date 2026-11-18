---
title: "Profils"
group: Getting started
order: 4
summary: "Gardez un nom, un e-mail, une clé de signature, des onglets et une liste de récents distincts pour chaque type de travail."
updated: 2026-11-18
---

Un profil contient l’identité avec laquelle vous commitez : un nom, un e-mail et une clé de signature facultative. Utilisez-en un pour le travail et un pour vos projets personnels, par exemple. Configurez-les dans **Réglages ▸ Profils**.

## Ce que contient un profil

Chaque profil comporte :

- un nom de profil, ainsi que le nom (`user.name`) et l’e-mail (`user.email`) de commit ;
- une méthode de signature : ne pas signer, SSH, GPG ou X.509, et le choix de signer ou non les commits par défaut ;
- un compte facultatif avec lequel il pousse, quand les règles des [comptes SSH](/fr/docs/ssh-accounts/) ne tranchent pas ;
- ses propres onglets ouverts et dépôts récents.

GitLoom écrit le nom, l’e-mail et la clé de signature dans la configuration git de chaque dépôt : le terminal est ainsi d’accord avec GitLoom.

## Changer de profil

Changez de profil depuis la pastille en haut à droite de la fenêtre. Un profil est celui par défaut : GitLoom démarre avec lui, et y revient quand le profil en cours est supprimé. Utilisez *Définir par défaut* pour choisir lequel.

## Mauvaise identité

Au-dessus du bouton de commit, GitLoom indique sous quelle identité vous commitez. Si cet e-mail n’est pas celui du profil du dépôt, la ligne est signalée par un avertissement ; choisissez le bon profil dans la pastille de la barre d’outils pour corriger.

## Supprimer un profil

Sélectionnez-le et cliquez sur −. Ses onglets ouverts et ses dépôts récents sont oubliés. La configuration git déjà écrite dans les dépôts reste telle quelle. Il y a toujours au moins un profil.
