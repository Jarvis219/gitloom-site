---
title: "Instalacja"
group: Getting started
order: 1
summary: "Czego potrzebuje GitLoom, jak go pobrać i jak otworzyć go po raz pierwszy."
updated: 2026-11-18
---

GitLoom to darmowy klient Git dla Maca. Uruchamia Twojego własnego `git`, więc obowiązują Twoja konfiguracja, hooki, dane uwierzytelniające i aliasy.

## Wymagania

- macOS 14 Sonoma lub nowszy, na Macu z Apple silicon.
- git 2.40 lub nowszy. Działa ten z Xcode Command Line Tools, a także ten z Homebrew.

Aby pobrać git od Apple, uruchom w Terminalu:

```sh
xcode-select --install
```

Przy uruchomieniu GitLoom informuje, jeśli nie może znaleźć wystarczająco nowego gita. Jeśli trzymasz git w nietypowym miejscu, wskaż go w **Ustawienia ▸ Git**.

## Pobieranie

Pobierz `GitLoom.dmg` (46 MB) z [najnowszego wydania](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg) albo w Terminalu:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

Otwórz obraz dysku i przeciągnij GitLoom do folderu Aplikacje.

## Pierwsze uruchomienie

GitLoom nie jest jeszcze notaryzowany przez Apple, dlatego macOS blokuje pierwsze uruchomienie. Aby go otworzyć:

1. Otwórz GitLoom raz. macOS poinformuje, że nie można go otworzyć.
2. Przejdź do **Ustawienia systemowe ▸ Prywatność i ochrona** i kliknij *Otwórz mimo to* obok komunikatu o GitLoomie.
3. Potwierdź. Od tej pory GitLoom otwiera się normalnie.

Wystarczy to zrobić raz. Kolejne wersje przychodzą przez wbudowany mechanizm aktualizacji GitLooma (zobacz [Aktualizacje](/pl/docs/updates/)).

## Opcjonalnie: narzędzie wiersza poleceń

Wybierz **GitLoom ▸ Zainstaluj narzędzie wiersza poleceń…**, aby dodać polecenie `gitloom`; wtedy `gitloom .` otwiera folder, w którym jesteś. Zobacz [Narzędzie wiersza poleceń gitloom](/pl/docs/the-gitloom-command-line-tool/).
