---
title: "Commiter"
group: Everyday work
order: 7
summary: "Rédigez un message, modifiez le dernier commit, ajoutez des co-auteurs, suivez vos hooks et gérez les fichiers que git ne montre pas."
updated: 2026-11-18
---

Sélectionnez la ligne *Uncommitted changes*, indexez ce que vous voulez (voir [Indexer des lignes isolées](/fr/docs/staging-single-lines/)), rédigez le message et appuyez sur <kbd>⌘↩</kbd>.

## Le formulaire de commit

- *Modifier* (amend) modifie le dernier commit au lieu d’en créer un nouveau. Tant que la case est cochée, les fichiers déjà modifiés par ce commit sont aussi listés.
- *Co-auteurs* suggère les personnes de l’historique récent, y compris les co-auteurs que vous avez déjà ajoutés.
- Pendant un commit, ce qu’affichent vos hooks (un linter `pre-commit`, des tests) apparaît sous le message. Si un hook tourne encore au bout d’une minute, GitLoom le signale et propose *Arrêter*.
- Une ligne indique sous quelle identité vous commitez. Elle vous avertit si l’e-mail ne correspond pas au [profil](/fr/docs/profiles/) du dépôt, ou s’il ne fait pas partie des e-mails de votre compte GitHub (GitHub n’associerait pas le commit à vous).

Si l’IA est activée, <kbd>⌥⌘G</kbd> rédige le message pour vous (voir [Choisir un fournisseur](/fr/docs/choosing-a-provider/)).

## Réglages du message

Dans **Réglages ▸ Git ▸ Message de commit**, vous pouvez définir un modèle de départ pour le formulaire, ainsi que les longueurs de résumé à partir desquelles le compteur passe au jaune puis au rouge (50 et 72 caractères par défaut). Ce n’est qu’un avertissement ; rien n’est coupé. Le `commit.template` propre à un dépôt l’emporte sur ce modèle.

## Les fichiers que git ne montre pas

- *Ignorer* un fichier déjà suivi : GitLoom propose *Arrêter le suivi* (`git rm --cached`) ; le fichier quitte le dépôt au prochain commit et reste sur le disque.
- Clic droit sur un fichier modifié ▸ *Masquer les modifications locales*, pour un fichier suivi que vous modifiez volontairement, comme une configuration locale. Une ligne au-dessus de la liste des fichiers indique combien sont masqués, et *Afficher…* les fait réapparaître.
- Sur un disque de Mac, renommer `readme.md` en `README.md` dans le Finder est invisible pour git. GitLoom s’en aperçoit et propose *Enregistrer le renommage*.

## Annuler un commit

<kbd>⌘Z</kbd> annule le dernier commit ou la dernière modification de commit. Voir [Annuler et rétablir](/fr/docs/undo-and-redo/).
