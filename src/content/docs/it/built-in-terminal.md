---
title: "Terminale integrato"
group: Tools
order: 19
summary: "Un terminale sotto il grafico, nella cartella del repository, che aggiorna GitLoom e suggerisce comandi git."
updated: 2026-11-18
---

<kbd>⌃`</kbd> apre un terminale sotto il grafico, nella cartella del repository, con la tua shell di login. Il grafico si aggiorna appena un comando git al suo interno termina.

## Suggerimenti e link

Mentre digiti un comando git, GitLoom suggerisce sottocomandi, branch, remoti e alias. <kbd>↑</kbd> <kbd>↓</kbd> scelgono un suggerimento, <kbd>⇥</kbd> o <kbd>→</kbd> lo inseriscono ed Esc chiude l’elenco.

Fai <kbd>⌘</kbd>-clic su ciò che si trova sotto il puntatore: uno SHA seleziona quel commit, un percorso apre il file e un URL apre il browser.

## Tasti

| Tasti | Azione |
|---|---|
| <kbd>⌃`</kbd> | Mostra o nascondi il terminale (lo nasconde se ha il focus) |
| <kbd>⌃⇧`</kbd> | Nuova sessione di terminale |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> | Testo del terminale più grande / più piccolo |
| Esc | Con il prompt vuoto, torna al grafico |

Se un comando è ancora in esecuzione quando chiudi il pannello, GitLoom chiede prima conferma.

## Impostazioni

**Impostazioni ▸ Integrazioni ▸ Terminale** contiene:

- *Integrazione shell*: permette a GitLoom di sapere quando un comando termina (aggiornamento immediato, suggerimenti). Disattivandola, queste funzioni si fermano. I tuoi dotfile non vengono mai modificati, in nessun caso.
- *Suggerisci comandi git durante la digitazione*, per disattivare solo i suggerimenti.
- *Scrollback*: quante righe conserva ogni sessione (10.000 di default).
- *Mostra i comandi git eseguiti da GitLoom*: una riga attenuata per ogni comando eseguito dall’app, per imparare git.
- *Inserimento da tastiera protetto*: mentre un terminale riceve la tastiera, le altre app non possono leggere ciò che digiti.
- *Shell* e *Argomenti*: un’altra shell per le nuove sessioni, come `/opt/homebrew/bin/fish`. Un percorso non eseguibile ripiega sulla tua shell di login.

Le modifiche valgono per le nuove sessioni di terminale. Il terminale usa il font del codice impostato in **Impostazioni ▸ Aspetto**.

## La tua solita app di terminale

<kbd>⌥⌘T</kbd> apre invece il repository nella tua app di terminale. Scegli quale in **Impostazioni ▸ Integrazioni ▸ “Apri nel Terminale” usa**.
