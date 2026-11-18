---
title: "Scalanie, rebase i cherry-pick przeciąganiem"
group: Everyday work
order: 9
summary: "Przeciągaj gałęzie i commity w grafie, aby scalać, robić rebase, przewijać (fast-forward), robić cherry-pick lub wypychać."
updated: 2026-11-18
---

W grafie możesz przeciągnąć gałąź lub commity w inne miejsce, a GitLoom pokaże menu z tym, co można zrobić po upuszczeniu. Nic się nie dzieje, dopóki nie wybierzesz.

## Co można przeciągać

- **Etykietę gałęzi na inną gałąź lub commit**: scalenie, rebase lub fast-forward. Z menu można też rozpocząć [interaktywny rebase](/pl/docs/interactive-rebase/).
- **Commity na gałąź**: cherry-pick. Najpierw zaznacz kilka, klikając z <kbd>⇧</kbd> lub <kbd>⌘</kbd>.
- **Gałąź na zdalne repozytorium** na pasku bocznym: wypchnięcie.
- **Gałąź na inną gałąź**, z kontem GitHub lub GitLab: utworzenie pull requesta (zobacz [Pull requesty i recenzje](/pl/docs/pull-requests-and-reviews/)).

## Bez przeciągania

Każde przeciągnięcie ma to samo polecenie w menu pod prawym przyciskiem. Menu Repozytorium zawiera też *Scal z bieżącą gałęzią* i *Rebase bieżącej gałęzi na*.

## Gdy wystąpią konflikty

Konflikty zatrzymują operację i pojawia się baner. Rozwiąż je, a potem wybierz *Kontynuuj*, *Pomiń* lub *Przerwij*. Zobacz [Rozwiązywanie konfliktów](/pl/docs/resolving-conflicts/).

## Zmiana zdania

Scalenie, rebase lub cherry-pick można cofnąć skrótem <kbd>⌘Z</kbd>. Zobacz [Cofanie i ponawianie](/pl/docs/undo-and-redo/).
