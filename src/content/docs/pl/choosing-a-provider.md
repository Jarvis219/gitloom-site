---
title: "Wybór dostawcy"
group: AI
order: 32
summary: "Włącz funkcje AI, wybierz dostawcę w chmurze lub lokalnego, dodaj klucz i zdecyduj, co AI ma za Ciebie pisać."
updated: 2026-11-18
---

Funkcje AI są domyślnie wyłączone. Gdy je włączysz, wybierasz, kto odpowiada: dostawca w chmurze z Twoim własnym kluczem albo model działający na Twoim Macu.

## Włączanie

Otwórz **Ustawienia ▸ AI** i włącz *Funkcje AI*. GitLoom najpierw wyjaśnia, co zostanie wysłane i do kogo.

Wybierz *Dostawcę*:

- Anthropic, OpenAI, Google Gemini, OpenRouter, Groq, Mistral, DeepSeek, Qwen (Alibaba Cloud), xAI lub Together AI;
- Ollama lub LM Studio działające lokalnie, gdy dane nie opuszczają Twojego Maca;
- własnego dostawcę: dowolny serwer obsługujący API Anthropic, OpenAI, Gemini lub Ollama, na przykład firmową bramkę. Dodasz go poleceniem *Dodaj własnego dostawcę…*.

Wklej klucz API i kliknij *Zachowaj klucz*. Klucze są przechowywane w pęku kluczy. *Testuj* sprawdza klucz i wczytuje modele dostawcy, aby można było jeden z nich wybrać.

## Co potrafi AI

- Pisać komunikaty commitów (<kbd>⌥⌘G</kbd>), opisy pull requestów i komunikaty stashy.
- Wyjaśniać commit, gałąź lub Twoje zmiany, z możliwością dopytania.
- Proponować rozwiązania konfliktów.

Nic nie jest wysyłane, dopóki o to nie poprosisz. Bez sieci przyciski ✨ są przygaszone; model lokalny nadal działa.

## Dostrajanie pisania

W sekcji *Pisanie* wybierz język (English lub Tiếng Việt) i styl commitów: Conventional Commits, zgodny z historią repozytorium lub dowolny.

*Pokaż ustawienia poszczególnych funkcji* daje każdej funkcji własny model i *Własne instrukcje*. Menu **Szablony** obok nich wypełnia gotowy zestaw, na przykład Conventional Commits, identyfikator zgłoszenia z nazwy gałęzi, szkic pull requesta lub recenzję tylko pod kątem błędów, który możesz potem dopasować do swojego zespołu.

## Wyłączanie dla jednego repozytorium

Wybierz *Wyłącz AI dla tego repozytorium* z menu ✨ obok komunikatu commita. Ponownie włączysz je w **Ustawienia ▸ AI ▸ AI wyłączona dla**.

Zanim cokolwiek zostanie wysłane, możesz zobaczyć dokładne żądanie. Zobacz [Co jest wysyłane](/pl/docs/what-gets-sent/).
