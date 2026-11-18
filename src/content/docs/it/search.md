---
title: "Ricerca"
group: History
order: 15
summary: "Trova commit per messaggio, autore, SHA, percorso o contenuto, e raggiungi qualsiasi punto con la tavolozza comandi e l’apertura rapida."
updated: 2026-11-18
---

GitLoom ha tre modi per trovare le cose: Trova per i commit, la tavolozza comandi per qualsiasi cosa e l’apertura rapida per i file.

## Trovare i commit

<kbd>⌘F</kbd> cerca nei messaggi di commit, negli autori, negli SHA, nei percorsi dei file o nelle modifiche (`-S`, i commit che aggiungono o rimuovono un frammento di testo). Può filtrare il grafico mostrando solo i risultati. <kbd>⌘G</kbd> e <kbd>⇧⌘G</kbd> passano al risultato successivo e precedente.

- Gli accenti non contano: “nguoi” trova “người”.
- `re:` accetta un’espressione regolare sull’intero messaggio, per esempio `re:^fix(ed)?:`.

## Tavolozza comandi

<kbd>⌘K</kbd> esegue qualsiasi comando e ti porta a branch, file, commit, autori e pull request. Inizia con un carattere per cercare un solo tipo di elemento:

| Prefisso | Cerca |
|---|---|
| `>` | comandi |
| `/` | file |
| `:` | commit |
| `@` | autori |
| `#` | pull request e issue |

## Apertura rapida

<kbd>⌘P</kbd> apre qualsiasi file del repository. Una volta aperto, <kbd>⌘E</kbd> ti permette di modificarlo (vedi [Editor di file](/it/docs/file-editor/)).
