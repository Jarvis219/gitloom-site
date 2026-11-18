---
title: "Bisect"
group: History
order: 18
summary: "Znajdź commit, który coś zepsuł, testując kilka commitów i odpowiadając Dobry lub Zły."
updated: 2026-11-18
---

Bisect znajduje commit, który wprowadził problem. Wskazujesz GitLoomowi jeden commit, w którym wszystko działało, i jeden, w którym nie działa, a potem testujesz commity, które wybierze pomiędzy nimi.

## Rozpoczęcie

Najpierw zatwierdź swoją pracę lub odłóż ją do stash: pliki zmieniają się podczas przełączania commitów.

Wybierz **Repozytorium ▸ Bisect…** albo kliknij prawym przyciskiem starszy commit, który jeszcze działał ▸ *Bisect: ten commit jest dobry…*. GitLoom poprosi o zły i dobry commit.

## Testowanie i odpowiedzi

GitLoom przełącza na commit leżący między nimi. Przetestuj go, a potem odpowiedz na pasku nad grafem:

- *Dobry*, jeśli problemu nie ma;
- *Zły*, jeśli jest;
- *Pomiń*, jeśli tego commita nie da się przetestować.

Po kilku odpowiedziach pasek wskaże pierwszy zły commit. Jeśli pominięte commity nie pozwalają dalej zawęzić wyniku, pasek wymieni commity, które mogą nim być.

## Niech testuje polecenie

Jeśli jakieś polecenie potrafi odróżnić dobry commit od złego, na przykład pojedynczy test, kliknij *Uruchom skrypt…* na pasku (`git bisect run`). git będzie wtedy przełączał kolejne commity i uruchamiał to polecenie w repozytorium. Polecenie musi zakończyć się kodem 0, gdy commit jest dobry, i 1, gdy jest zły; 125 oznacza, że commita nie da się przetestować.

## Zakończenie

*Zakończ* przywraca Cię tam, skąd zacząłeś. *Zatrzymaj* kończy bisect w dowolnym momencie i również wraca do punktu wyjścia.
