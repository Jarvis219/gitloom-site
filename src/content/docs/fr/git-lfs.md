---
title: "Git LFS"
group: Tools
order: 23
summary: "Suivez les gros fichiers avec Git LFS, téléchargez-les et verrouillez des fichiers pour que vos collègues ne les modifient pas en même temps."
updated: 2026-11-18
---

GitLoom fonctionne avec Git LFS lorsque `git-lfs` est installé sur votre Mac. Sans lui, GitLoom peut quand même lister les fichiers LFS, mais pas les télécharger ni les verrouiller.

## Le groupe GIT LFS

Dans un dépôt qui utilise LFS, la barre latérale contient un groupe GIT LFS qui liste les fichiers LFS. Un fichier pas encore téléchargé, dont seul le pointeur est sur le disque, porte une icône de téléchargement. Un fichier verrouillé indique qui l’a verrouillé. Double-cliquez sur un fichier pour l’ouvrir.

Cliquez avec le bouton droit sur un fichier pour :

- *Ouvrir le fichier* ;
- *Télécharger ce fichier*, quand seul son pointeur est présent ;
- *Verrouiller* ou *Déverrouiller*.

## Télécharger tous les fichiers LFS

**Dépôt ▸ Avancé ▸ Télécharger les fichiers Git LFS** exécute `git lfs pull` et télécharge les gros fichiers de cette copie de travail.

## Suivre un nouveau type de fichier

Clic droit sur un fichier modifié dans la zone d’indexation ▸ *Suivre avec LFS (\*.ext)* pour suivre tous les fichiers ayant cette extension. Dans un dépôt qui utilise déjà LFS, le même menu propose *Verrouiller (LFS)* et *Déverrouiller (LFS)*.
