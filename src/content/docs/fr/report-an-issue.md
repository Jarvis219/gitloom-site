---
title: "Signaler un problème"
group: Help
order: 39
summary: "Comment signaler un bug ou demander une fonctionnalité, ce qu’il faut indiquer, et ce que fait GitLoom après un plantage."
updated: 2026-11-18
---

Signalez les bugs et demandez des fonctionnalités sur [GitHub Issues](https://github.com/Jarvis219/gitloom-site/issues).

## Ce qu’il faut indiquer

- Votre version de GitLoom (**GitLoom ▸ À propos de GitLoom**, ou **Réglages ▸ Général ▸ Mises à jour**) et votre version de macOS.
- Les étapes qui mènent au problème.
- Ce que vous attendiez, et ce qui s’est passé à la place.
- Une capture d’écran, si elle montre le problème.

Si le problème concerne une action de git, les commandes de **Fenêtre ▸ Journal Git** sont utiles (voir [Dépannage](/fr/docs/troubleshooting/)). Pour plus de détails, activez *Écrire un journal de débogage* dans **Réglages ▸ Avancé** ; les mots de passe et jetons présents dans les URL y sont masqués.

> **Caution** Les tickets sont publics. Ne collez jamais de jetons, mots de passe, clés SSH ni de code privé. Vérifiez les journaux et les captures d’écran avant de les joindre.

## Après un plantage

Si GitLoom quitte inopinément, le lancement suivant vous demande s’il faut le signaler. Il propose :

- *Signaler sur GitHub…* : votre navigateur ouvre un nouveau ticket prérempli avec les versions de GitLoom et de macOS, l’erreur et le haut du fil d’exécution qui a planté. Relisez-le, ajoutez ce que vous faisiez et envoyez-le vous-même.
- *Afficher le rapport* : affiche dans le Finder le rapport de plantage enregistré par macOS.
- *Plus tard*.

Rien n’est envoyé si vous n’envoyez pas le ticket vous-même. Cochez *Ne plus proposer*, ou désactivez *Proposer de signaler les plantages* dans **Réglages ▸ Avancé**, pour ne plus voir la question.

**Aide ▸ Signaler un problème…** ouvre à tout moment un ticket vide dans votre navigateur.
