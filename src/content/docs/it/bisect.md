---
title: "Bisect"
group: History
order: 18
summary: "Trova il commit che ha rotto qualcosa testando alcuni commit e rispondendo Good o Bad."
updated: 2026-11-18
---

Bisect trova il commit che ha introdotto un problema. Indichi a GitLoom un commit in cui tutto funzionava e uno in cui non funziona più, poi testi i commit che sceglie tra i due.

## Avvio

Prima fai commit o stash del tuo lavoro: i file cambiano man mano che i commit vengono estratti.

Scegli **Repository ▸ Bisect…**, oppure fai clic destro su un commit più vecchio che funzionava ancora ▸ *Bisect: questo commit è buono…*. GitLoom ti chiede un commit cattivo e uno buono.

## Testa e rispondi

GitLoom estrae un commit tra i due. Testalo, poi rispondi nella barra sopra il grafico:

- *Good* se il problema non c’è;
- *Bad* se c’è;
- *Skip* se questo commit non si può testare.

Dopo alcune risposte la barra indica il primo commit cattivo. Se i commit saltati le impediscono di restringere ulteriormente il campo, elenca i commit candidati.

## Lascia che sia un comando a testare

Se un comando sa distinguere un commit buono da uno cattivo, per esempio un singolo test, fai clic su *Esegui script…* nella barra (`git bisect run`). git estrae allora un commit dopo l’altro ed esegue il comando nel repository. Il comando deve uscire con 0 quando il commit è buono e con 1 quando è cattivo; 125 significa che il commit non si può testare.

## Fine

*Termina* ti riporta al punto di partenza. *Interrompi* chiude il bisect in qualsiasi momento e riporta anch’esso al punto di partenza.
