---
title: "Kurulum"
group: Getting started
order: 1
summary: "GitLoom’un neye ihtiyaç duyduğu, nasıl indirileceği ve ilk kez nasıl açılacağı."
updated: 2026-11-18
---

GitLoom, Mac için ücretsiz bir Git istemcisidir. Senin kendi `git` kurulumunu çalıştırır; böylece yapılandırman, kancaların, kimlik bilgilerin ve takma adların aynen geçerli olur.

## Gereksinimler

- Apple silicon işlemcili bir Mac’te macOS 14 Sonoma veya üstü.
- git 2.40 veya üstü. Xcode Command Line Tools ile gelen sürüm de, Homebrew’dan gelen sürüm de çalışır.

git’i Apple’dan almak için Terminal’de şunu çalıştır:

```sh
xcode-select --install
```

Yeterince yeni bir git bulamazsa GitLoom bunu açılışta söyler. git’i alışılmadık bir yerde tutuyorsan **Ayarlar ▸ Git** bölümünden seç.

## İndirme

`GitLoom.dmg` dosyasını (42 MB) [en son sürümden](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg) veya Terminal’den indir:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

Disk görüntüsünü aç ve GitLoom’u Uygulamalar klasörüne sürükle.

## İlk kez açma

GitLoom henüz Apple tarafından onaylanmadığı (notarize edilmediği) için macOS ilk açılışı engeller. Açmak için:

1. GitLoom’u bir kez aç. macOS açılamayacağını söyler.
2. **Sistem Ayarları ▸ Gizlilik ve Güvenlik** bölümüne git ve GitLoom ile ilgili iletinin yanındaki *Yine de Aç* düğmesini tıkla.
3. Onayla. Bundan sonra GitLoom normal şekilde açılır.

Bunu yalnızca bir kez yapman gerekir. Sonraki sürümler GitLoom’un kendi güncelleyicisiyle gelir (bkz. [Güncellemeler](/tr/docs/updates/)).

## İsteğe bağlı: komut satırı aracı

Bir `gitloom` komutu eklemek için **GitLoom ▸ Komut Satırı Aracını Yükle…** öğesini seç; böylece `gitloom .` bulunduğun klasörü açar. Bkz. [gitloom komut satırı aracı](/tr/docs/the-gitloom-command-line-tool/).
