---
title: "Choisir un fournisseur"
group: AI
order: 32
summary: "Activez les fonctions d’IA, choisissez un fournisseur cloud ou local, ajoutez une clé et choisissez ce que l’IA rédige pour vous."
updated: 2026-11-18
---

Les fonctions d’IA sont désactivées par défaut. Quand vous les activez, vous choisissez qui répond : un fournisseur cloud avec votre propre clé, ou un modèle qui tourne sur votre Mac.

## L’activer

Ouvrez **Réglages ▸ IA** et activez *Fonctions d’IA*. GitLoom explique d’abord ce qui sera envoyé, et à qui.

Choisissez un *Fournisseur* :

- Anthropic, OpenAI, Google Gemini, OpenRouter, Groq, Mistral, DeepSeek, Qwen (Alibaba Cloud), xAI ou Together AI ;
- Ollama ou LM Studio en local, où les données ne quittent pas votre Mac ;
- un fournisseur personnalisé : tout serveur qui parle l’API d’Anthropic, d’OpenAI, de Gemini ou d’Ollama, comme une passerelle d’entreprise. Ajoutez-en un avec *Ajouter un fournisseur personnalisé…*.

Collez votre clé d’API et cliquez sur *Enregistrer la clé*. Les clés sont stockées dans le trousseau. *Tester* vérifie la clé et charge les modèles du fournisseur, pour que vous puissiez en choisir un.

## Ce que l’IA peut faire

- Rédiger les messages de commit (<kbd>⌥⌘G</kbd>), les descriptions de pull request et les messages de remisage.
- Expliquer un commit, une branche ou vos modifications, avec des questions de suivi.
- Suggérer des résolutions de conflits.

Rien n’est envoyé tant que vous ne le demandez pas. Sans réseau, les boutons ✨ sont grisés ; un modèle local fonctionne quand même.

## Ajuster la rédaction

Sous *Écriture*, choisissez la langue (English ou Tiếng Việt) et le style de commit : Conventional Commits, comme l’historique du dépôt, ou libre.

*Afficher les réglages par fonction* donne à chaque fonction son propre modèle et ses *Instructions personnalisées*. Le menu **Modèles** juste à côté remplit un ensemble prêt à l’emploi, comme Conventional Commits, un identifiant de ticket tiré de la branche, un plan de pull request ou une revue limitée aux bugs, que vous pouvez ensuite adapter à votre équipe.

## La désactiver pour un dépôt

Choisissez *Désactiver l’IA pour ce dépôt* dans le menu ✨ à côté du message de commit. Réactivez-la dans **Réglages ▸ IA ▸ IA désactivée pour**.

Avant tout envoi, vous pouvez voir la requête exacte. Voir [Ce qui est envoyé](/fr/docs/what-gets-sent/).
