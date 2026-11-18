---
title: "Actions"
group: Accounts & hosting
order: 31
summary: "GitHub Actions çalıştırmalarını işlemelerinin yanında izle, günlükleri oku, işleri yeniden çalıştır, iş akışlarını başlat ve yapıtları indir."
updated: 2026-11-18
---

Bir GitHub hesabı eklendiğinde GitLoom, GitHub Actions çalıştırmalarını kenar çubuğunun ACTIONS grubunda ve grafiğin CI sütununda işlemelerinin yanında gösterir.

![Bir pull request ve GitHub Actions çalıştırmalarının bulunduğu kenar çubuğu; bir çalıştırmanın build işi açık](/shots/actions-light.png)

## Çalıştırmalar ve günlükler

İşlerini, açıklamalarını ve yapıtlarını görmek için bir çalıştırmayı aç. Günlüğünü okumak için bir işi aç. Günlük görünümü zaman damgalarını gösterebilir, satırları kaydırabilir veya yalnızca hataları gösterebilir; *Günlüğü Kaydet…* bir kopyasını saklar.

## Yeniden çalıştırma, iptal ve başlatma

- *Tüm İşleri Yeniden Çalıştır*, *Başarısız İşleri Yeniden Çalıştır* veya *Bu İşi Yeniden Çalıştır*.
- *Çalıştırmayı İptal Et*.
- *İş Akışını Çalıştır…*, `workflow_dispatch` tetikleyicisi olan bir iş akışını girdileriyle başlatır.
- Bir çalıştırmanın yapıtlarını indir.

Bir fork’tan gelen ve onay bekleyen bir çalıştırma bunu belirtir, pull request’inin değiştirdiği iş akışı dosyalarını listeler ve *Onayla ve Çalıştır…* seçeneğini sunar. Önce değişiklikleri denetle: onaylanan iş akışları deponun ayarlarıyla çalışır.

## Bildirimler

GitLoom, başlattığın bir çalıştırma bittiğinde sana bildirim gönderebilir. Ne zaman olacağını **Ayarlar ▸ Git ▸ GitHub Actions ▸ Başlattığım CI bitince bildir** bölümünden seç: asla, yalnızca başarısız olduğunda (varsayılan) veya her zaman.

> **Note** Actions yalnızca GitHub içindir. GitLab için CI pipeline’ları henüz desteklenmez ve Actions grubu gizlenir.
