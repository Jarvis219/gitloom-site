---
title: "Bisect"
group: History
order: 18
summary: "Trouvez le commit qui a cassé quelque chose en testant quelques commits et en répondant Good ou Bad."
updated: 2026-11-18
---

Bisect trouve le commit qui a introduit un problème. Vous indiquez à GitLoom un commit où tout fonctionnait et un autre où ce n’est plus le cas, puis vous testez les commits qu’il choisit entre les deux.

## Démarrer

Commitez ou remisez d’abord votre travail : les fichiers changent à mesure que les commits sont extraits.

Choisissez **Dépôt ▸ Bisect…**, ou cliquez avec le bouton droit sur un commit plus ancien qui fonctionnait encore ▸ *Bisect : ce commit est bon…*. GitLoom vous demande un commit mauvais et un commit bon.

## Tester et répondre

GitLoom extrait un commit situé entre les deux. Testez-le, puis répondez dans la barre au-dessus du graphe :

- *Good* si le problème n’est pas là ;
- *Bad* s’il est là ;
- *Skip* si ce commit ne peut pas être testé.

Après quelques réponses, la barre indique le premier commit fautif. Si des commits ignorés l’empêchent d’affiner davantage, elle liste les commits possibles.

## Laisser une commande tester à votre place

Si une commande sait distinguer un bon commit d’un mauvais, par exemple un test précis, cliquez sur *Exécuter un script…* dans la barre (`git bisect run`). git extrait alors les commits l’un après l’autre et exécute la commande dans le dépôt. Elle doit se terminer avec 0 quand le commit est bon et 1 quand il est mauvais ; 125 signifie que le commit ne peut pas être testé.

## Terminer

*Terminer* vous ramène là où vous avez commencé. *Arrêter* met fin au bisect à tout moment et revient aussi au point de départ.
