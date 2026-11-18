---
title: "Issue"
group: Accounts & hosting
order: 30
summary: "Crea e sfoglia le issue di GitHub e GitLab, e avvia un branch da una di esse."
updated: 2026-11-18
---

Dopo aver aggiunto un account GitHub o GitLab, GitLoom mostra le issue del repository nella barra laterale.

## Creare e sfogliare

- **Repository ▸ GitHub / GitLab ▸ Nuova issue…** crea una issue.
- Sfoglia le issue del repository nel gruppo Issue della barra laterale. Puoi filtrarle per etichetta e milestone.
- Fai clic destro su una issue per *Crea branch dalla issue*, *Apri nel browser* o *Copia link*.
- Nella tavolozza comandi (<kbd>⌘K</kbd>), digita `#` per trovare pull request e issue.
- **Launchpad** (<kbd>⇧⌘K</kbd>) elenca le issue che ti aspettano in tutti i repository.

## Avviare un branch da una issue

*Crea branch dalla issue* crea un branch con il nome della issue. Il nome segue il modello in **Impostazioni ▸ Git ▸ Branch da una issue**, di default `{type}/{number}-{slug}`, dove `{type}` è `fix` o `feat`. Il modello nel `.gitloom/team.json` di un team ha la precedenza sul tuo.
