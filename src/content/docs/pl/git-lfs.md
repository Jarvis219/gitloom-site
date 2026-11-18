---
title: "Git LFS"
group: Tools
order: 23
summary: "Śledź duże pliki przez Git LFS, pobieraj je i blokuj pliki, aby członkowie zespołu nie edytowali ich jednocześnie."
updated: 2026-11-18
---

GitLoom współpracuje z Git LFS, gdy na Macu jest zainstalowany `git-lfs`. Bez niego GitLoom nadal pokazuje listę plików LFS, ale nie może ich pobierać ani blokować.

## Grupa GIT LFS

W repozytorium używającym LFS pasek boczny ma grupę GIT LFS z listą plików LFS. Plik, który nie został jeszcze pobrany i na dysku jest tylko jego wskaźnik, ma ikonę pobierania. Zablokowany plik pokazuje, kto go zablokował. Kliknij plik dwukrotnie, aby go otworzyć.

Kliknij plik prawym przyciskiem, aby wybrać:

- *Otwórz plik*;
- *Pobierz ten plik*, gdy jest tu tylko jego wskaźnik;
- *Zablokuj* lub *Odblokuj*.

## Pobieranie wszystkich plików LFS

**Repozytorium ▸ Zaawansowane ▸ Pobierz pliki Git LFS** uruchamia `git lfs pull` i pobiera duże pliki tego checkoutu.

## Śledzenie nowego rodzaju plików

Kliknij prawym przyciskiem zmieniony plik w obszarze stage ▸ *Śledź przez LFS (\*.ext)*, aby śledzić każdy plik z tym rozszerzeniem. W repozytorium, które już używa LFS, to samo menu zawiera *Zablokuj (LFS)* i *Odblokuj (LFS)*.
