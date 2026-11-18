---
title: "Branches"
group: Everyday work
order: 8
summary: "Créez, extrayez et gérez branches et étiquettes, et récupérez, tirez et poussez-les."
updated: 2026-11-18
---

Les branches et les étiquettes se trouvent dans la barre latérale et sur le graphe. La plupart des actions sont à un clic droit.

## Créer et extraire

<kbd>⌘B</kbd> crée une branche sur le commit sélectionné. Double-cliquez sur une branche pour l’extraire. Cliquez avec le bouton droit sur les branches, étiquettes et commits pour tout le reste : renommer, supprimer, définir l’amont, étiqueter, réinitialiser, annuler un commit (revert), cherry-pick, etc.

Supprimer une branche non fusionnée demande confirmation et peut être annulé avec <kbd>⌘Z</kbd>.

## Récupérer, tirer et pousser

- <kbd>⇧⌘L</kbd> récupère tous les dépôts distants. GitLoom récupère aussi en arrière-plan, toutes les 5 minutes par défaut (modifiable dans **Réglages ▸ Général**). Il ne récupère jamais en arrière-plan sur batterie sous 20 %, en mode Économie d’énergie ou sur un réseau coûteux.
- <kbd>⇧⌘↓</kbd> tire. **Dépôt ▸ Tirer avec** choisit une stratégie pour un seul pull.
- <kbd>⇧⌘↑</kbd> pousse. Cochez *Définir l’amont* pour une nouvelle branche.

Un push forcé est toujours explicite et utilise `--force-with-lease`. **Dépôt ▸ Pousser avec les étiquettes** pousse aussi les étiquettes annotées des commits poussés.

## Faire le ménage

**Dépôt ▸ Supprimer les branches fusionnées…** supprime les branches locales déjà fusionnées dans la branche actuelle. Les branches protégées ne sont pas touchées ; définissez leurs motifs dans **Réglages ▸ Git ▸ Branches protégées** (par exemple `main master release/*`).

## Remisage

<kbd>⇧⌘S</kbd> remise tout. *Remiser les modifications…* vous permet de nommer le remisage et de choisir les fichiers. Les remisages apparaissent dans la barre latérale et, par défaut, sur le graphe. *Récupérer un remisage supprimé…* retrouve un remisage supprimé par erreur.

## Dossiers de branches

Les branches locales nommées comme `prefix/…` apparaissent sous forme de dossiers dans la barre latérale. Désactivez ce comportement dans **Réglages ▸ Disposition**.
