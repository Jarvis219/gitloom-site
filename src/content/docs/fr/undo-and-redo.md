---
title: "Annuler et rétablir"
group: Everyday work
order: 11
summary: "Annulez presque toutes les opérations Git avec ⌘Z, rétablissez-les avec ⇧⌘Z, ou revenez à n’importe quel point de l’historique des opérations."
updated: 2026-11-18
---

<kbd>⌘Z</kbd> annule la dernière opération Git et <kbd>⇧⌘Z</kbd> la rétablit. Quand quelque chose ne va pas, essayez d’abord d’annuler.

## Ce qui peut être annulé

Commit, modification du dernier commit (amend), checkout, modifications de branches et d’étiquettes, abandon de modifications, reset, remisage, pull, fusion, rebase, cherry-pick, etc.

Une fusion, un rebase ou un reset n’est rétabli que si l’arbre de travail est propre.

## Historique des opérations

**Édition ▸ Historique des opérations…** liste tout ce qu’a fait GitLoom. Vous pouvez annuler jusqu’à n’importe quel point de cette liste.

## Avant de perdre du travail

Avant une annulation qui ferait perdre du travail, par exemple si vous avez fait de nouvelles modifications entre-temps, GitLoom vous explique ce qui va se passer et vous demande confirmation.

## Texte et éditeur de rebase

Dans un champ de texte, <kbd>⌘Z</kbd> annule la saisie comme d’habitude. Dans l’éditeur de [rebase interactif](/fr/docs/interactive-rebase/), il annule les modifications du plan.

Si un commit semble avoir disparu même après une annulation, voir [Récupération par le reflog](/fr/docs/reflog-recovery/).
