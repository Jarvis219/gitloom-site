---
title: "Issue’lar"
group: Accounts & hosting
order: 30
summary: "GitHub ve GitLab issue’larını oluştur, göz at ve birinden dal başlat."
updated: 2026-11-18
---

Bir GitHub veya GitLab hesabı eklendiğinde GitLoom, deponun issue’larını kenar çubuğunda gösterir.

## Oluşturma ve göz atma

- **Depo ▸ GitHub / GitLab ▸ Yeni Issue…** bir issue oluşturur.
- Deponun issue’larına kenar çubuğunun Issue'lar grubunda göz at. Onları etikete ve kilometre taşına göre süzebilirsin.
- *Issue'dan Dal Oluştur*, *Tarayıcıda Aç* veya *Bağlantıyı Kopyala* için bir issue’ya sağ tıkla.
- Komut paletinde (<kbd>⌘K</kbd>) pull request’leri ve issue’ları bulmak için `#` yaz.
- **Launchpad** (<kbd>⇧⌘K</kbd>), depolar genelinde seni bekleyen issue’ları listeler.

## Bir issue’dan dal başlatma

*Issue'dan Dal Oluştur*, issue’nun adını taşıyan bir dal oluşturur. Ad, **Ayarlar ▸ Git ▸ Issue'dan dal oluştur** bölümündeki şablona uyar; varsayılan `{type}/{number}-{slug}` olup `{type}` değeri `fix` veya `feat` olur. Bir ekibin `.gitloom/team.json` şablonu seninkinden önceliklidir.
