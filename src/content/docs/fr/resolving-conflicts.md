---
title: "Résoudre les conflits"
group: Everyday work
order: 10
summary: "Utilisez l’éditeur de fusion à trois voies pour choisir un côté par conflit ou par ligne, modifier le résultat et continuer."
updated: 2026-11-18
---

Quand une fusion, un rebase, un cherry-pick ou un pull rencontre un conflit, il s’arrête et un bandeau explique ce qui se passe. Les fichiers en conflit sont listés dans le panneau de détails.

![L’éditeur de conflits à trois voies montrant votre côté, leur côté et le résultat](/shots/conflict-light.png)

## L’éditeur de fusion

Ouvrez un fichier en conflit pour afficher l’éditeur de fusion à trois voies : votre côté, leur côté et le résultat.

- Choisissez un côté par conflit, ou par ligne.
- Modifiez directement le résultat.
- <kbd>⌥⌘↑</kbd> et <kbd>⌥⌘↓</kbd> passent d’un conflit à l’autre.
- Cochez *Fichier entier* pour voir chaque côté comme le fichier complet, avec les conflits à leur place. Les colonnes s’alignent et défilent ensemble.

Quand le fichier est correct, cliquez sur *Enregistrer et marquer comme résolu* (<kbd>⌘S</kbd>).

## Cas particuliers

- Un conflit dû à un renommage (renommé des deux côtés, ou renommé d’un côté et supprimé de l’autre) l’indique.
- Un fichier binaire peut être prévisualisé des deux côtés avant que vous choisissiez.
- Un bandeau vous avertit quand les deux côtés ne diffèrent que par les fins de ligne (CRLF / LF).

## Votre propre outil de fusion

Vous pouvez aussi ouvrir le fichier dans votre outil de fusion externe. GitLoom utilise le `merge.tool` de git, ou l’outil choisi dans **Réglages ▸ Intégrations ▸ Outil de fusion**.

## Terminer ou arrêter

Une fois tous les fichiers résolus, cliquez sur *Continuer* dans le bandeau. *Passer* ignore le commit en cours d’un rebase ou d’un cherry-pick ; *Abandonner* remet tout comme avant. Un dépôt laissé au milieu d’un rebase ou d’une fusion affiche à nouveau le bandeau après le redémarrage de GitLoom.
