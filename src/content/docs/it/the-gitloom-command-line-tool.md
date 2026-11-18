---
title: "Lo strumento da riga di comando gitloom"
group: Tools
order: 24
summary: "Installa il comando gitloom per aprire repository, diff, cronologia dei file e blame dal terminale."
updated: 2026-11-18
---

Il comando `gitloom` apre GitLoom da un terminale. Avvia GitLoom quando serve.

## Installarlo

Scegli **GitLoom ▸ Installa strumento da riga di comando…**. Viene aggiunto un link in `~/.local/bin/gitloom`, senza password di amministratore. Se `~/.local/bin` non è ancora nel tuo PATH, GitLoom te lo dice; aggiungi questa riga a `~/.zshrc`:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

Per installarlo per tutte le shell senza cambiare il PATH, usa *Installa in /usr/local/bin…* in **Impostazioni ▸ Integrazioni ▸ Strumento da riga di comando**. macOS chiede la password di un amministratore. Quella sezione mostra anche dove è installato `gitloom`.

GitLoom sostituisce solo il proprio link. Se lì c’è già un altro file chiamato `gitloom`, non viene toccato e GitLoom te lo dice.

## Comandi

| Comando | Cosa fa |
|---|---|
| `gitloom [path]` | Apre il repository che contiene `path` (predefinito: la cartella corrente) |
| `gitloom clone <url> [dir]` | Apre la finestra di clonazione già compilata |
| `gitloom diff [<rev>]` | Apre il repository in cui ti trovi e seleziona `<rev>` (predefinito: la riga delle modifiche non sottoposte a commit) |
| `gitloom log <file>` | Apre la cronologia del file |
| `gitloom blame <file>[:<line>]` | Apre il blame del file, a quella riga |
| `gitloom mcp` | Avvia il server MCP di GitLoom su stdio (vedi [Server MCP](/it/docs/mcp-server/)) |

Per esempio:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
