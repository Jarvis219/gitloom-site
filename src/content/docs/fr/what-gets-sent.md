---
title: "Ce qui est envoyé"
group: AI
order: 33
summary: "Ce que GitLoom envoie à un fournisseur d’IA, ce qu’il omet ou masque, et comment voir d’abord la requête exacte."
updated: 2026-11-18
---

GitLoom n’envoie rien à un fournisseur d’IA tant que vous ne demandez pas quelque chose, comme un message de commit. Ce qu’il envoie, ce sont les diffs et messages de commit nécessaires à cette demande, après filtrage.

## L’aperçu

La première fois que vous utilisez l’IA dans un dépôt, GitLoom affiche les données avant de les envoyer :

- le fournisseur, le modèle et l’adresse à laquelle part la requête ; un fournisseur local est signalé comme ne quittant pas votre Mac ;
- chaque fichier, marqué comme inclus, tronqué, envoyé sous forme de nom uniquement (fichiers binaires, fichiers générés comme les fichiers de verrouillage, ou au-delà de la limite de taille) ou exclu ;
- les secrets qui ont été masqués ;
- une estimation du nombre de jetons, et le corps exact de la requête.

Cliquez sur *Envoyer* ou *Annuler*. Cochez *Ne plus demander pour ce dépôt* pour ne plus afficher l’aperçu dans ce dépôt. Pour le revoir plus tard, choisissez *Aperçu des données…* dans le menu ✨ à côté du message de commit.

## Fichiers exclus

Les fichiers correspondant aux motifs *Exclure* de **Réglages ▸ IA ▸ Ce qui est envoyé** ne sont jamais envoyés. Ce sont des motifs de type gitignore, séparés par des virgules ; par défaut :

```text
.env*, *.pem, *.key, *.p12, secrets/**, id_rsa*, id_ed25519*
```

Activez *Masquer aussi le nom des fichiers exclus* pour omettre également leurs noms. Le fichier `.gitloom/team.json` d’une équipe peut ajouter d’autres motifs. *Entrée maximale* limite la quantité envoyée.

## Secrets masqués

Avant l’envoi, GitLoom remplace les chaînes qui ressemblent à des secrets par `[REDACTED]` : clés d’accès AWS, clés et jetons GitHub, Slack, Anthropic, OpenRouter, OpenAI, Google et Groq, blocs de clés privées, valeurs assignées à des noms comme `password`, `secret`, `api_key` ou `token`, et autres longs jetons d’apparence aléatoire. L’aperçu liste ce qui a été masqué.

> **Caution** Le masquage repose sur des motifs et peut laisser passer un secret. Ajoutez à *Exclure* les fichiers qui contiennent des secrets, et vérifiez l’aperçu.

## Journal de débogage

*Journal de débogage : écrire les requêtes et les réponses dans un fichier* dans **Réglages ▸ IA** enregistre tout ce qui est envoyé (après filtrage) et chaque réponse dans un fichier sur votre Mac. Les clés d’API n’y sont jamais écrites. Désactivez-le quand vous avez terminé.
