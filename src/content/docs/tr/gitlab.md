---
title: "GitLab"
group: Accounts & hosting
order: 28
summary: "Merge request’ler ve issue’larla çalışmak için gitlab.com’u veya kendi GitLab sunucunu bir token ile bağla."
updated: 2026-11-18
---

GitLoom, kişisel erişim token’ı kullanarak gitlab.com ve kendi GitLab sunucunla çalışır.

## Token ekleme

1. **Ayarlar ▸ Barındırma** bölümünü aç ve *GitLab Token'ı Ekle…* düğmesini tıkla.
2. Sunucuyu gir.
3. `api`, `read_user` ve `write_repository` kapsamlarına sahip bir kişisel erişim token’ı yapıştır. *Token Oluştur…* GitLab’ında doğru sayfayı açar.

Token macOS Anahtar Zinciri’nde tutulur. HTTPS itmeleri onu kullanır.

## Neler yapabilirsin

Kenar çubuğu MERGE REQUEST'LER ve issue’ları gösterir. Şunları yapabilirsin:

- bir merge request oluşturmak, yorum yapmak, onaylamak ve birleştirmek (squash ile);
- merge request’lerini Launchpad’de (<kbd>⇧⌘K</kbd>) görmek;
- issue oluşturmak ve göz atmak.

## Henüz desteklenmeyenler

GitLab için GitLoom henüz şunları desteklemez:

- CI pipeline’ları (Actions grubu gizlenir);
- bir kod satırına yorum;
- kuruluşlar;
- token olmadan oturum açma.
