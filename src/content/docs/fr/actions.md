---
title: "Actions"
group: Accounts & hosting
order: 31
summary: "Suivez les exécutions GitHub Actions à côté de leurs commits, lisez les journaux, relancez des tâches, démarrez des workflows et téléchargez des artefacts."
updated: 2026-11-18
---

Une fois un compte GitHub ajouté, GitLoom affiche les exécutions GitHub Actions dans le groupe ACTIONS de la barre latérale et à côté de leurs commits, dans la colonne CI du graphe.

![La barre latérale avec une pull request et des exécutions GitHub Actions, et la tâche build d’une exécution ouverte](/shots/actions-light.png)

## Exécutions et journaux

Ouvrez une exécution pour voir ses tâches, annotations et artefacts. Ouvrez une tâche pour lire son journal. La vue du journal peut afficher l’horodatage, renvoyer les lignes à la ligne ou n’afficher que les erreurs, et *Enregistrer le journal…* en garde une copie.

## Relancer, annuler et démarrer

- *Relancer toutes les tâches*, *Relancer les tâches en échec* ou *Relancer cette tâche*.
- *Annuler l’exécution*.
- *Exécuter le workflow…* démarre un workflow doté d’un déclencheur `workflow_dispatch`, avec ses paramètres d’entrée.
- Téléchargez les artefacts d’une exécution.

Une exécution provenant d’un fork qui attend une approbation l’indique, liste les fichiers de workflow modifiés par sa pull request et propose *Approuver et exécuter…*. Vérifiez d’abord les modifications : les workflows approuvés s’exécutent avec les réglages du dépôt.

## Notifications

GitLoom peut vous avertir quand une exécution que vous avez lancée se termine. Choisissez quand dans **Réglages ▸ Git ▸ GitHub Actions ▸ Notifier quand une CI que j’ai lancée se termine** : jamais, uniquement en cas d’échec (par défaut) ou toujours.

> **Note** Les Actions sont réservées à GitHub. Pour GitLab, les pipelines CI ne sont pas encore pris en charge et le groupe Actions est masqué.
