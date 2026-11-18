---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "Połącz gitlab.com lub własny serwer GitLab za pomocą tokenu, aby pracować z merge requestami i zgłoszeniami."
updated: 2026-11-18
---

GitLoom współpracuje z gitlab.com i z Twoim własnym serwerem GitLab, używając osobistego tokenu dostępu.

## Dodawanie tokenu

1. Otwórz **Ustawienia ▸ Hosting** i kliknij *Dodaj token GitLab…*.
2. Wpisz adres hosta.
3. Wklej osobisty token dostępu z zakresami `api`, `read_user` i `write_repository`. *Utwórz token…* otwiera właściwą stronę w Twoim GitLabie.

Token jest przechowywany w pęku kluczy macOS. Używają go wypchnięcia przez HTTPS.

## Co możesz robić

Pasek boczny pokazuje MERGE REQUESTY i zgłoszenia. Możesz:

- utworzyć merge request, komentować go, zatwierdzić i scalić (ze squashem);
- widzieć swoje merge requesty w Launchpadzie (<kbd>⇧⌘K</kbd>);
- tworzyć i przeglądać zgłoszenia.

## Jeszcze nieobsługiwane

W przypadku GitLaba GitLoom nie obsługuje jeszcze:

- potoków CI (grupa Actions jest ukryta);
- komentarzy do wiersza kodu;
- organizacji;
- logowania bez tokenu.
