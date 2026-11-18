---
title: "Comptes SSH"
group: Accounts & hosting
order: 26
summary: "Utilisez la bonne clé SSH pour chaque compte lorsque vous en avez plusieurs sur le même hôte, dans GitLoom comme dans le terminal."
updated: 2026-11-18
---

Si vous avez plusieurs comptes sur le même hôte, par exemple un compte GitHub professionnel et un personnel, un compte SSH indique à GitLoom quelle clé appartient à quel identifiant, et quels dépôts l’utilisent.

## Configurer un compte

Ouvrez **Réglages ▸ Comptes** et cliquez sur *Ajouter un compte SSH…*. Pour chaque compte :

- indiquez l’hôte et votre identifiant sur celui-ci ;
- ajoutez ses clés : *Importer des clés…* liste les clés de `~/.ssh`, de ssh-agent, de 1Password et de Secretive, ou *Générer…* en crée une nouvelle ;
- sous *Utiliser pour les dépôts*, ajoutez les propriétaires ou dossiers qui doivent l’utiliser (*Ajouter un dossier…*), ou faites-en le *Compte par défaut* de l’hôte.

Récupération, pull, push et clonage utilisent alors la bonne clé. Avec *Écrire aussi core.sshCommand dans chaque dépôt* activé, le `core.sshCommand` du dépôt est défini pour qu’un simple `git push` dans le terminal fasse de même.

Les dépôts ayant leur propre `core.sshCommand`, un alias `~/.ssh/config` avec `IdentityFile`, ou `GIT_SSH_COMMAND` dans votre shell ne sont pas touchés.

## Alias d’hôte

Si vous utilisez des alias d’hôte de `~/.ssh/config` (comme `github-work`), **Dépôt ▸ Dépôts distants… ▸ Alias SSH** fait passer un dépôt distant à l’un d’eux.

## Renouveler une clé

*Renouveler…* sur une clé crée une nouvelle clé, l’envoie au compte et supprime l’ancienne dès que la nouvelle fonctionne.

## Comptes SSH et connexions aux hébergeurs

Un compte SSH ne fait que choisir la clé qui pousse et qui tire. La connexion à GitHub ou GitLab, pour les pull requests et l’envoi de clés, est distincte et se trouve dans **Réglages ▸ Hébergement** (voir [GitHub](/fr/docs/github/) et [GitLab](/fr/docs/gitlab/)).
