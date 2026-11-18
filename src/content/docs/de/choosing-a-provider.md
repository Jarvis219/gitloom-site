---
title: "Einen Anbieter wählen"
group: AI
order: 32
summary: "KI-Funktionen einschalten, einen Cloud- oder lokalen Anbieter wählen, einen Schlüssel hinzufügen und festlegen, was die KI für dich schreibt."
updated: 2026-11-18
---

KI-Funktionen sind standardmäßig aus. Wenn du sie einschaltest, wählst du, wer antwortet: ein Cloud-Anbieter mit deinem eigenen Schlüssel oder ein Modell, das auf deinem Mac läuft.

## Einschalten

Öffne **Einstellungen ▸ KI** und schalte *KI-Funktionen* ein. GitLoom erklärt zuerst, was gesendet wird und an wen.

Wähle einen *Anbieter*:

- Anthropic, OpenAI, Google Gemini, OpenRouter, Groq, Mistral, DeepSeek, Qwen (Alibaba Cloud), xAI oder Together AI;
- Ollama oder LM Studio, lokal ausgeführt, wobei die Daten deinen Mac nicht verlassen;
- einen eigenen Anbieter: jeden Server, der die API von Anthropic, OpenAI, Gemini oder Ollama spricht, etwa ein Firmen-Gateway. Füge ihn mit *Eigenen Anbieter hinzufügen…* hinzu.

Füge deinen API-Schlüssel ein und klicke auf *Schlüssel sichern*. Schlüssel werden im Schlüsselbund gespeichert. *Testen* prüft den Schlüssel und lädt die Modelle des Anbieters, sodass du eines auswählen kannst.

## Was die KI kann

- Commit-Nachrichten (<kbd>⌥⌘G</kbd>), Pull-Request-Beschreibungen und Stash-Nachrichten schreiben.
- Einen Commit, einen Branch oder deine Änderungen erklären, mit Rückfragen.
- Lösungen für Konflikte vorschlagen.

Nichts wird gesendet, bevor du darum bittest. Ohne Netzwerk sind die ✨-Tasten abgedunkelt; ein lokales Modell funktioniert weiterhin.

## Den Schreibstil anpassen

Unter *Schreiben* wählst du die Sprache (English oder Tiếng Việt) und den Commit-Stil: Conventional Commits, wie der Verlauf des Repositorys, oder frei.

*Einstellungen pro Funktion einblenden* gibt jeder Funktion ein eigenes Modell und *Eigene Anweisungen*. Das Menü **Vorlagen** daneben füllt einen fertigen Satz ein, etwa Conventional Commits, eine Ticket-ID aus dem Branch, eine Pull-Request-Gliederung oder ein Review nur für Fehler, den du dann an dein Team anpassen kannst.

## Für ein einzelnes Repository ausschalten

Wähle *KI für dieses Repository deaktivieren* im ✨-Menü neben der Commit-Nachricht. Wieder einschalten kannst du sie unter **Einstellungen ▸ KI ▸ KI deaktiviert für**.

Bevor etwas gesendet wird, kannst du die genaue Anfrage sehen. Siehe [Was gesendet wird](/de/docs/what-gets-sent/).
