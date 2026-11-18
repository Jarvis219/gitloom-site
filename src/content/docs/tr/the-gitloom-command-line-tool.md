---
title: "gitloom komut satırı aracı"
group: Tools
order: 24
summary: "Depoları, farkları, dosya geçmişini ve blame’i terminalinden açmak için gitloom komutunu yükle."
updated: 2026-11-18
---

`gitloom` komutu GitLoom’u bir terminalden açar. Gerekirse GitLoom’u başlatır.

## Yükleme

**GitLoom ▸ Komut Satırı Aracını Yükle…** öğesini seç. Bu, yönetici parolası gerektirmeden `~/.local/bin/gitloom` konumuna bir bağlantı ekler. `~/.local/bin` henüz PATH’inde değilse GitLoom bunu söyler; `~/.zshrc` dosyasına şu satırı ekle:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

PATH’i değiştirmeden her kabuk için yüklemek üzere **Ayarlar ▸ Tümleştirmeler ▸ Komut satırı aracı** bölümünde */usr/local/bin İçine Yükle…* öğesini kullan. macOS bir yönetici parolası ister. Bu bölüm ayrıca `gitloom` komutunun nereye yüklendiğini gösterir.

GitLoom yalnızca kendi bağlantısının yerine geçer. Orada `gitloom` adlı başka bir dosya zaten varsa ona dokunulmaz ve GitLoom bunu sana söyler.

## Komutlar

| Komut | Yaptığı |
|---|---|
| `gitloom [path]` | `path` yolunu içeren depoyu açar (varsayılan: geçerli klasör) |
| `gitloom clone <url> [dir]` | Klonlama penceresini doldurulmuş olarak açar |
| `gitloom diff [<rev>]` | İçinde bulunduğun depoyu açar ve `<rev>` öğesini seçer (varsayılan: işlenmemiş değişiklikler satırı) |
| `gitloom log <file>` | Dosyanın geçmişini açar |
| `gitloom blame <file>[:<line>]` | Dosyanın blame’ini o satırda açar |
| `gitloom mcp` | GitLoom’un MCP sunucusunu stdio üzerinde çalıştırır (bkz. [MCP sunucusu](/tr/docs/mcp-server/)) |

Örneğin:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
