---
title: "Profile"
group: Getting started
order: 4
summary: "Osobne imię i nazwisko, e-mail, klucz podpisu, karty i lista ostatnich repozytoriów dla każdego rodzaju pracy."
updated: 2026-11-18
---

Profil przechowuje tożsamość, z którą tworzysz commity: imię i nazwisko, e-mail i opcjonalny klucz podpisu. Możesz na przykład mieć jeden profil do pracy, a drugi do projektów prywatnych. Skonfiguruj je w **Ustawienia ▸ Profile**.

## Co zawiera profil

Każdy profil ma:

- nazwę profilu oraz imię i nazwisko (`user.name`) i e-mail (`user.email`) do commitów;
- metodę podpisu: bez podpisu, SSH, GPG lub X.509, a także to, czy domyślnie podpisywać commity;
- opcjonalne konto, przez które wypycha, gdy reguły [kont SSH](/pl/docs/ssh-accounts/) tego nie rozstrzygają;
- własne otwarte karty i ostatnie repozytoria.

GitLoom zapisuje imię i nazwisko, e-mail i klucz podpisu w konfiguracji git każdego repozytorium, dzięki czemu terminal zgadza się z GitLoom.

## Przełączanie profili

Profile przełączasz przyciskiem w prawym górnym rogu okna. Jeden profil jest domyślny: GitLoom uruchamia się z nim i wraca do niego, gdy używany profil zostanie usunięty. Aby zmienić profil domyślny, użyj *Ustaw jako domyślne*.

## Niewłaściwa tożsamość

Nad przyciskiem commita GitLoom pokazuje, jako kto tworzysz commit. Jeśli ten e-mail nie jest e-mailem profilu repozytorium, wiersz jest oznaczony ostrzeżeniem; aby to naprawić, wybierz właściwy profil przyciskiem na pasku narzędzi.

## Usuwanie profilu

Zaznacz profil i kliknij −. Jego otwarte karty i ostatnie repozytoria zostaną zapomniane. Konfiguracja git już zapisana w repozytoriach pozostaje bez zmian. Zawsze istnieje co najmniej jeden profil.
