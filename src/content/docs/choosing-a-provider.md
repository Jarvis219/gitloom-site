---
title: Choosing a provider
group: AI
order: 32
summary: Turn on AI features, pick a cloud or local provider, add a key, and choose what AI writes for you.
updated: 2026-11-18
---

AI features are off by default. When you turn them on, you choose who answers: a cloud provider with your own key, or a model running on your Mac.

## Turn it on

Open **Settings ▸ AI** and turn on *AI features*. GitLoom first explains what will be sent and to whom.

Choose a *Provider*:

- Anthropic, OpenAI, Google Gemini, OpenRouter, Groq, Mistral, DeepSeek, Qwen (Alibaba Cloud), xAI or Together AI;
- Ollama or LM Studio running locally, where the data doesn't leave your Mac;
- a custom provider: any server that speaks the Anthropic, OpenAI, Gemini or Ollama API, such as a company gateway. Add one with *Add Custom Provider…*.

Paste your API key and click *Save Key*. Keys are stored in the Keychain. *Test* checks the key and loads the provider's models, so you can pick one.

## What AI can do

- Write commit messages (<kbd>⌥⌘G</kbd>), pull request descriptions and stash messages.
- Explain a commit, a branch or your changes, with follow-up questions.
- Suggest conflict resolutions.

Nothing is sent until you ask. Without a network, the ✨ buttons are dimmed; a local model still works.

## Tune the writing

Under *Writing*, choose the language (English or Tiếng Việt) and the commit style: Conventional Commits, like the repository's history, or free.

*Show Per-Feature Settings* gives each feature its own model and *Custom instructions*. The **Templates** menu next to them fills in a ready-made set, such as Conventional Commits, a ticket ID from the branch, a pull request outline or a bugs-only review, which you can then adapt to your team.

## Turn it off for one repository

Choose *Turn Off AI for This Repository* from the ✨ menu next to the commit message. Turn it back on in **Settings ▸ AI ▸ AI turned off for**.

Before anything is sent, you can see the exact request. See [What gets sent](/docs/what-gets-sent/).
