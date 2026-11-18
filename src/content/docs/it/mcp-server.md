---
title: "Server MCP"
group: Tools
order: 25
summary: "Lascia che strumenti IA come Claude Code, Cursor o VS Code leggano i tuoi repository tramite GitLoom e, se vuoi, apportino modifiche sicure."
updated: 2026-11-18
---

Altri strumenti IA (Claude Code, Claude Desktop, Cursor, VS Code e altri) possono lavorare con i tuoi repository tramite il server MCP di GitLoom. Resta spento finché non lo attivi.

## Attivarlo

In **Impostazioni ▸ Integrazioni ▸ Server MCP**, imposta *Gli strumenti IA esterni possono* su una di queste opzioni:

- *Non fare nulla (disattivato)*;
- *Lettura: stato, cronologia, diff, blame*;
- *Lettura e modifica: anche commit, branch, stash, pull, push*.

Poi collega il tuo strumento. Per Claude Code, copia la riga mostrata lì ed eseguila in un terminale; ha questo aspetto:

```sh
claude mcp add gitloom -- "/Applications/GitLoom.app/Contents/Helpers/gitloom-mcp"
```

Per gli altri strumenti, copia il JSON mostrato lì nella configurazione MCP dello strumento. GitLoom non modifica mai i file di un altro strumento. Anche il comando `gitloom mcp` avvia il server (vedi [Lo strumento da riga di comando gitloom](/it/docs/the-gitloom-command-line-tool/)).

## Lettura

Gli strumenti possono vedere stato, cronologia, diff, blame, branch e stash dei repository aperti o presenti nell’elenco dei recenti della pagina iniziale. Mentre GitLoom è in esecuzione, possono anche chiedere cosa stai guardando, come il commit selezionato o il file aperto. Non possono modificare nulla.

## Lettura e modifica

Gli strumenti possono anche mettere in stage, fare commit, creare e cambiare branch, fare stash, fetch, pull (solo fast-forward) e push, nei repository aperti in una scheda, mentre GitLoom è in esecuzione. Ogni modifica compare nella finestra con il nome dello strumento e un pulsante *Annulla*, e nella cronologia operazioni.

Con *Chiedi prima del push* attivo, un push attende la tua risposta nella finestra del repository; dopo 60 secondi viene rifiutato.

Nessuno strumento può fare force push, reset, scartare modifiche, eliminare o riscrivere la cronologia.

## Pull request, issue e CI

Con *Pull request, issue e CI tramite i miei account* attivo, gli strumenti possono leggere pull request, issue ed esecuzioni CI del repository tramite l’account collegato in GitLoom. Con *Lettura e modifica* possono anche aprire una pull request per il branch corrente e commentarne una. Non vedono mai il tuo token e non possono unire, approvare o chiudere nulla.

Le impostazioni mostrano le chiamate più recenti in *Attività recente*.
