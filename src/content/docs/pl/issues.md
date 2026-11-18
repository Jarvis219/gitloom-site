---
title: "Zgłoszenia"
group: Accounts & hosting
order: 30
summary: "Twórz i przeglądaj zgłoszenia GitHuba i GitLaba oraz zakładaj na ich podstawie gałęzie."
updated: 2026-11-18
---

Po dodaniu konta GitHub lub GitLab GitLoom pokazuje zgłoszenia repozytorium na pasku bocznym.

## Tworzenie i przeglądanie

- **Repozytorium ▸ GitHub / GitLab ▸ Nowe zgłoszenie…** tworzy zgłoszenie.
- Przeglądaj zgłoszenia repozytorium w grupie Zgłoszenia na pasku bocznym. Możesz je filtrować według etykiety i kamienia milowego.
- Kliknij zgłoszenie prawym przyciskiem, aby wybrać *Utwórz gałąź ze zgłoszenia*, *Otwórz w przeglądarce* lub *Kopiuj łącze*.
- W palecie poleceń (<kbd>⌘K</kbd>) wpisz `#`, aby wyszukać pull requesty i zgłoszenia.
- **Launchpad** (<kbd>⇧⌘K</kbd>) wyświetla zgłoszenia czekające na Ciebie we wszystkich repozytoriach.

## Gałąź ze zgłoszenia

*Utwórz gałąź ze zgłoszenia* tworzy gałąź nazwaną od zgłoszenia. Nazwa jest zgodna z szablonem w **Ustawienia ▸ Git ▸ Gałąź ze zgłoszenia**, domyślnie `{type}/{number}-{slug}`, gdzie `{type}` to `fix` lub `feat`. Szablon zespołu w `.gitloom/team.json` ma pierwszeństwo przed Twoim.
