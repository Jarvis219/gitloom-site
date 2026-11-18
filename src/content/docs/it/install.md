---
title: "Installazione"
group: Getting started
order: 1
summary: "Di cosa ha bisogno GitLoom, come scaricarlo e come aprirlo la prima volta."
updated: 2026-11-18
---

GitLoom è un client Git gratuito per Mac. Esegue il tuo `git`, quindi valgono la tua configurazione, i tuoi hook, le credenziali e gli alias.

## Requisiti

- macOS 14 Sonoma o successivo, su un Mac con Apple silicon.
- git 2.40 o successivo. Va bene quello degli Xcode Command Line Tools, così come quello di Homebrew.

Per ottenere git da Apple, esegui questo comando nel Terminale:

```sh
xcode-select --install
```

All’avvio GitLoom ti avvisa se non trova un git abbastanza recente. Se tieni git in una posizione insolita, sceglilo in **Impostazioni ▸ Git**.

## Download

Scarica `GitLoom.dmg` (42 MB) dall’[ultima release](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg), oppure dal Terminale:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

Apri l’immagine disco e trascina GitLoom nella cartella Applicazioni.

## Aprirlo la prima volta

GitLoom non è ancora autenticato da Apple, quindi macOS blocca il primo avvio. Per aprirlo:

1. Apri GitLoom una volta. macOS dice che non può essere aperto.
2. Vai in **Impostazioni di Sistema ▸ Privacy e sicurezza** e fai clic su *Apri comunque* accanto al messaggio su GitLoom.
3. Conferma. Da quel momento GitLoom si apre normalmente.

Basta farlo una volta. Le versioni successive arrivano tramite il sistema di aggiornamento di GitLoom (vedi [Aggiornamenti](/it/docs/updates/)).

## Facoltativo: lo strumento da riga di comando

Scegli **GitLoom ▸ Installa strumento da riga di comando…** per aggiungere un comando `gitloom`, così `gitloom .` apre la cartella in cui ti trovi. Vedi [Lo strumento da riga di comando gitloom](/it/docs/the-gitloom-command-line-tool/).
