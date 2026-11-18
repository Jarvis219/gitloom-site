---
title: "Account SSH"
group: Accounts & hosting
order: 26
summary: "Usa la chiave SSH giusta per ogni account quando ne hai diversi sullo stesso host, in GitLoom e nel terminale."
updated: 2026-11-18
---

Se hai diversi account sullo stesso host, come un account GitHub di lavoro e uno personale, un account SSH indica a GitLoom quale chiave appartiene a quale login e quali repository la usano.

## Configurare un account

Apri **Impostazioni ▸ Account** e fai clic su *Aggiungi account SSH…*. Per ogni account:

- indica l’host e il tuo login su quell’host;
- aggiungi le sue chiavi: *Importa chiavi…* elenca le chiavi da `~/.ssh`, ssh-agent, 1Password e Secretive, oppure *Genera…* ne crea una nuova;
- in *Usa per i repository*, aggiungi i proprietari o le cartelle che devono usarlo (*Aggiungi cartella…*), oppure rendilo l’*Account predefinito* per l’host.

Fetch, pull, push e clone usano allora la chiave giusta. Con *Scrivi anche core.sshCommand in ogni repository* attivo, viene impostato il `core.sshCommand` del repository, così anche un semplice `git push` nel terminale fa lo stesso.

I repository con un proprio `core.sshCommand`, un alias in `~/.ssh/config` con `IdentityFile`, o `GIT_SSH_COMMAND` nella tua shell non vengono toccati.

## Alias dell’host

Se usi alias dell’host da `~/.ssh/config` (come `github-work`), **Repository ▸ Remoti… ▸ Alias SSH** fa passare un remoto a uno di questi.

## Ruotare una chiave

*Ruota…* su una chiave crea una nuova chiave, la carica sull’account e rimuove quella vecchia appena la nuova funziona.

## Account SSH e accesso agli host

Un account SSH sceglie solo quale chiave fa push e pull. L’accesso a GitHub o GitLab, per le pull request e il caricamento delle chiavi, è separato e si trova in **Impostazioni ▸ Hosting** (vedi [GitHub](/it/docs/github/) e [GitLab](/it/docs/gitlab/)).
