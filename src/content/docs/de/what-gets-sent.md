---
title: "Was gesendet wird"
group: AI
order: 33
summary: "Was GitLoom an einen KI-Anbieter sendet, was es weglässt oder schwärzt und wie du die genaue Anfrage vorher ansiehst."
updated: 2026-11-18
---

GitLoom sendet nichts an einen KI-Anbieter, bis du um etwas bittest, etwa eine Commit-Nachricht. Gesendet werden die Diffs und Commit-Nachrichten, die diese Anfrage braucht, nach dem Filtern.

## Die Vorschau

Wenn du KI in einem Repository zum ersten Mal verwendest, zeigt GitLoom die Daten, bevor es sie sendet:

- den Anbieter, das Modell und die Adresse, an die die Anfrage geht; ein lokaler Anbieter ist als „verlässt deinen Mac nicht“ gekennzeichnet;
- jede Datei, gekennzeichnet als enthalten, gekürzt, nur als Name gesendet (Binärdateien, generierte Dateien wie Lock-Dateien oder über der Größengrenze) oder ausgeschlossen;
- alle geschwärzten Geheimnisse;
- eine Schätzung der Tokens und den genauen Request-Body.

Klicke auf *Senden* oder *Abbrechen*. Aktiviere *Für dieses Repository nicht mehr fragen*, um die Vorschau dort beim nächsten Mal zu überspringen. Um sie später wieder zu sehen, wähle *Datenvorschau…* im ✨-Menü neben der Commit-Nachricht.

## Ausgeschlossene Dateien

Dateien, die den Mustern unter *Ausschließen* in **Einstellungen ▸ KI ▸ Was gesendet wird** entsprechen, werden nie gesendet. Es sind Muster im Stil von gitignore, durch Kommas getrennt; standardmäßig:

```text
.env*, *.pem, *.key, *.p12, secrets/**, id_rsa*, id_ed25519*
```

Schalte *Auch die Namen ausgeschlossener Dateien ausblenden* ein, um auch ihre Namen wegzulassen. Die `.gitloom/team.json` eines Teams kann weitere Muster hinzufügen. *Max. Eingabe* begrenzt, wie viel gesendet wird.

## Geschwärzte Geheimnisse

Vor dem Senden ersetzt GitLoom Zeichenfolgen, die wie Geheimnisse aussehen, durch `[REDACTED]`: AWS-Zugriffsschlüssel, Schlüssel und Tokens von GitHub, Slack, Anthropic, OpenRouter, OpenAI, Google und Groq, Blöcke privater Schlüssel, Werte, die Namen wie `password`, `secret`, `api_key` oder `token` zugewiesen sind, sowie andere lange, zufällig aussehende Tokens. Die Vorschau listet, was geschwärzt wurde.

> **Caution** Das Schwärzen beruht auf Mustern und kann ein Geheimnis übersehen. Füge Dateien, die Geheimnisse enthalten, zu *Ausschließen* hinzu, und prüfe die Vorschau.

## Debug-Protokoll

*Debug-Protokoll: Prompts und Antworten in eine Datei schreiben* unter **Einstellungen ▸ KI** speichert alles Gesendete (nach dem Filtern) und jede Antwort in einer Datei auf deinem Mac. API-Schlüssel werden nie geschrieben. Schalte es aus, wenn du fertig bist.
