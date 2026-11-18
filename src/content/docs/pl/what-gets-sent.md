---
title: "Co jest wysyłane"
group: AI
order: 33
summary: "Co GitLoom wysyła do dostawcy AI, co pomija lub zaciera i jak najpierw zobaczyć dokładne żądanie."
updated: 2026-11-18
---

GitLoom nie wysyła niczego do dostawcy AI, dopóki o coś nie poprosisz, na przykład o opis commita. Wysyła diffy i opisy commitów potrzebne do danego żądania, po filtrowaniu.

## Podgląd

Gdy pierwszy raz używasz AI w repozytorium, GitLoom pokazuje dane przed wysłaniem:

- dostawcę, model i adres, pod który trafia żądanie; dostawca lokalny jest oznaczony jako niewychodzący poza Twojego Maca;
- każdy plik, oznaczony jako dołączony, przycięty, wysłany tylko z nazwą (pliki binarne, pliki generowane, takie jak pliki lock, lub przekraczające limit rozmiaru) albo wykluczony;
- wszystkie zatarte sekrety;
- szacowaną liczbę tokenów i dokładną treść żądania.

Kliknij *Wyślij* lub *Anuluj*. Zaznacz *Nie pytaj ponownie dla tego repozytorium*, aby następnym razem pominąć tam podgląd. Aby zobaczyć go później, wybierz *Podgląd danych…* z menu ✨ obok opisu commita.

## Wykluczone pliki

Pliki pasujące do wzorców *Wyklucz* w **Ustawienia ▸ AI ▸ Co jest wysyłane** nigdy nie są wysyłane. To wzorce w stylu gitignore, rozdzielone przecinkami; domyślnie:

```text
.env*, *.pem, *.key, *.p12, secrets/**, id_rsa*, id_ed25519*
```

Włącz *Ukryj też nazwy wykluczonych plików*, aby pominąć również ich nazwy. Plik zespołu `.gitloom/team.json` może dodać kolejne wzorce. *Maks. wejście* ogranicza ilość wysyłanych danych.

## Zatarte sekrety

Przed wysłaniem GitLoom zastępuje ciągi wyglądające na sekrety przez `[REDACTED]`: klucze dostępu AWS, klucze i tokeny GitHub, Slack, Anthropic, OpenRouter, OpenAI, Google i Groq, bloki kluczy prywatnych, wartości przypisane do nazw takich jak `password`, `secret`, `api_key` czy `token` oraz inne długie, losowo wyglądające tokeny. Podgląd wymienia, co zostało zatarte.

> **Caution** Zacieranie opiera się na wzorcach i może przeoczyć sekret. Dodaj pliki zawierające sekrety do *Wyklucz* i sprawdzaj podgląd.

## Dziennik debugowania

*Dziennik debugowania: zapisuj prompty i odpowiedzi do pliku* w **Ustawienia ▸ AI** zapisuje wszystko, co zostało wysłane (po filtrowaniu), i każdą odpowiedź w pliku na Twoim Macu. Klucze API nigdy nie są zapisywane. Wyłącz tę opcję, gdy skończysz.
