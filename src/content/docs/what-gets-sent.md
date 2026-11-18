---
title: What gets sent
group: AI
order: 33
summary: What GitLoom sends to an AI provider, what it leaves out or redacts, and how to see the exact request first.
updated: 2026-11-18
---

GitLoom sends nothing to an AI provider until you ask for something, such as a commit message. What it sends is the diffs and commit messages that request needs, after filtering.

## The preview

The first time you use AI in a repository, GitLoom shows the data before sending it:

- the provider, the model and the address the request goes to; a local provider is marked as not leaving your Mac;
- each file, marked as included, cut, sent as a name only (binary files, generated files such as lock files, or over the size limit) or excluded;
- any secrets that were redacted;
- an estimate of the tokens, and the exact request body.

Click *Send* or *Cancel*. Tick *Don't ask again for this repository* to skip the preview there next time. To see it again later, choose *Preview Data…* from the ✨ menu next to the commit message.

## Excluded files

Files matching the *Exclude* patterns in **Settings ▸ AI ▸ What is sent** are never sent. They are gitignore-style patterns, separated by commas; by default:

```text
.env*, *.pem, *.key, *.p12, secrets/**, id_rsa*, id_ed25519*
```

Turn on *Hide the names of excluded files too* to leave out their names as well. A team's `.gitloom/team.json` can add more patterns. *Max input* limits how much is sent.

## Redacted secrets

Before sending, GitLoom replaces secret-looking strings with `[REDACTED]`: AWS access keys, GitHub, Slack, Anthropic, OpenRouter, OpenAI, Google and Groq keys and tokens, private key blocks, values assigned to names like `password`, `secret`, `api_key` or `token`, and other long random-looking tokens. The preview lists what it redacted.

> **Caution** Redaction is pattern-based and can miss a secret. Add files that hold secrets to *Exclude*, and check the preview.

## Debug log

*Debug log: write prompts and answers to a file* in **Settings ▸ AI** saves everything sent (after filtering) and every answer to a file on your Mac. API keys are never written. Turn it off when you're done.
