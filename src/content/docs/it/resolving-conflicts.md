---
title: "Risolvere i conflitti"
group: Everyday work
order: 10
summary: "Usa l’editor di merge a tre vie per scegliere un lato per ogni conflitto o per ogni riga, modificare il risultato e continuare."
updated: 2026-11-18
---

Quando un merge, un rebase, un cherry-pick o un pull incontra un conflitto, si ferma e un banner spiega cosa sta succedendo. I file in conflitto sono elencati nel pannello dettagli.

![L’editor di conflitti a tre vie con il tuo lato, il loro lato e il risultato](/shots/conflict-light.png)

## L’editor di merge

Apri un file in conflitto per l’editor di merge a tre vie: il tuo lato, il loro lato e il risultato.

- Scegli un lato per ogni conflitto, o per ogni riga.
- Modifica direttamente il risultato.
- <kbd>⌥⌘↑</kbd> e <kbd>⌥⌘↓</kbd> passano da un conflitto all’altro.
- Spunta *File intero* per vedere ogni lato come file completo, con i conflitti al loro posto. Le colonne sono allineate e scorrono insieme.

Quando il file è a posto, fai clic su *Salva e segna come risolto* (<kbd>⌘S</kbd>).

## Casi particolari

- Un conflitto dovuto a una rinomina (rinominato su entrambi i lati, oppure rinominato su uno ed eliminato sull’altro) lo segnala.
- Un file binario si può visualizzare in anteprima su entrambi i lati prima di scegliere.
- Un banner avvisa quando i due lati differiscono solo per i fine riga (CRLF / LF).

## Il tuo strumento di merge

Puoi anche aprire il file nel tuo strumento di merge esterno. GitLoom usa il `merge.tool` di git, oppure lo strumento scelto in **Impostazioni ▸ Integrazioni ▸ Strumento di merge**.

## Finire o fermarsi

Quando tutti i file sono risolti, fai clic su *Continua* nel banner. *Salta* salta il commit corrente di un rebase o di un cherry-pick; *Interrompi* rimette tutto com’era. Un repository lasciato a metà di un rebase o di un merge mostra di nuovo il banner dopo il riavvio di GitLoom.
