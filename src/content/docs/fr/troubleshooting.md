---
title: "Dépannage"
group: Help
order: 38
summary: "Que faire quand quelque chose ne va pas : annuler, retrouver des commits perdus, voir ce que git a exécuté, et corriger les problèmes de configuration courants."
updated: 2026-11-18
---

La plupart des problèmes dans GitLoom peuvent être annulés ou expliqués. Commencez ici.

## Quelque chose s’est mal passé dans le dépôt

- **Annulez d’abord** : <kbd>⌘Z</kbd> ou **Édition ▸ Historique des opérations…**. La plupart des opérations peuvent être annulées (voir [Annuler et rétablir](/fr/docs/undo-and-redo/)).
- **Des commits semblent avoir disparu** : **Dépôt ▸ Reflog…** et **Retrouver les commits perdus…** les retrouvent (voir [Récupération par le reflog](/fr/docs/reflog-recovery/)).
- **Bloqué dans un rebase ou une fusion** : un dépôt laissé au milieu de l’une de ces opérations affiche un bandeau avec *Continuer* et *Abandonner*, même après le redémarrage de GitLoom.

## Voir ce que GitLoom a fait

**Fenêtre ▸ Journal Git** (<kbd>⌥⇧⌘L</kbd>) liste toutes les commandes git exécutées par GitLoom : le dépôt, la commande, sa durée et son code de sortie. Seule la ligne de commande est conservée, jamais sa sortie, son entrée ni les identifiants.

Une fine ligne animée sous la barre d’outils signifie que git communique avec un dépôt distant ; survolez-la pour savoir lequel. Le message d’une opération lente propose *Annuler*.

## Problèmes courants

- **GitLoom ne trouve pas git, ou le dit trop ancien.** Installez git 2.40 ou ultérieur (voir [Installation](/fr/docs/install/)), ou choisissez un autre git dans **Réglages ▸ Git ▸ Binaire git**.
- **Un hook ne trouve pas node, python ou un linter.** Ajoutez les dossiers dont il a besoin à *PATH supplémentaire* dans **Réglages ▸ Git ▸ Hooks**. Cela s’applique aux dépôts ouverts ensuite.
- **Un hook ne répond plus.** Un commit dont le hook tourne encore au bout d’une minute le signale et propose *Arrêter*. *Arrêter un hook après* dans **Réglages ▸ Git ▸ Hooks** l’arrête automatiquement (après 10 minutes par défaut).
- **La mauvaise clé SSH est utilisée.** Configurez des [comptes SSH](/fr/docs/ssh-accounts/).

## Journaux et caches

Dans **Réglages ▸ Avancé** :

- *Écrire un journal de débogage* enregistre les commandes git exécutées par GitLoom, avec leur code de sortie et leur durée, dans un fichier du dossier des journaux. Les mots de passe et jetons présents dans les URL sont masqués. *Afficher le dossier des journaux* l’ouvre.
- *Vider les caches…* supprime les pull requests et tickets conservés pour une utilisation hors ligne et les versions de fichiers en cache. Ils sont récupérés à nouveau au besoin.
- Si votre fichier de réglages ne peut pas être lu, GitLoom le met de côté, démarre avec les valeurs par défaut et l’indique ici.

Si rien de tout cela n’aide, [signalez un problème](/fr/docs/report-an-issue/).
