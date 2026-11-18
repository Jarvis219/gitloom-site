---
title: "Dosya düzenleyici"
group: Tools
order: 20
summary: "Deponun herhangi bir dosyasını GitLoom içinde görüntüle ve düzenle, ardından tek adımda kaydedip hazırla."
updated: 2026-11-18
---

GitLoom depondaki dosyaları gösterip düzenleyebilir; böylece küçük bir düzeltme için başka bir uygulamaya gerek kalmaz.

## Dosya açma

- <kbd>⌘P</kbd> (Hızlı Aç) deponun herhangi bir dosyasını açar.
- Kenar çubuğundaki Başvurular/Dosyalar anahtarı dosya ağacını gösterir. Orada ayrıca *Yeni Dosya…* veya *Yeni Klasör…* oluşturabilir, *Yeniden Adlandır…* veya *Çöp Sepeti'ne Taşı* kullanabilir ve *Yok Sayılan Dosyaları Göster* seçeneğini açabilirsin.

Bir dosya görüntülemek için açılır. Düzenlemek için <kbd>⌘E</kbd> tuşlarına bas veya *Dosyayı Düzenle* düğmesini tıkla. Esc grafiğe geri döner.

## Düzenleme tuşları

| Tuşlar | İşlem |
|---|---|
| <kbd>⌘S</kbd> | Kaydet |
| <kbd>⌥⌘S</kbd> | Kaydet ve hazırla |
| <kbd>⌘L</kbd> | Satıra git |
| <kbd>⌥⌘F</kbd> | Bul ve değiştir |
| <kbd>⌘/</kbd> | Seçili satırları yorum yap veya yorumu kaldır |
| <kbd>⌘]</kbd> / <kbd>⌘[</kbd> | Seçili satırların girintisini artır / azalt |

Düzenleyicinin seçenekleri arasında *Satırları Kaydır*, *Boşlukları ve Sekmeleri Göster*, *Parantez ve Tırnakları Kapat* ve *Kenar Çubuğu HEAD ile Karşılaştırır* bulunur. Kod yazı tipi ve boyutu **Ayarlar ▸ Görünüm** bölümünde ayarlanır.

## Dosya diskte değiştiğinde

Kaydedilmemiş düzenlemelerin varken başka bir uygulama dosyayı değiştirirse GitLoom bunu söyler ve *Benimkini Koru*, *Yeniden Yükle* veya *Karşılaştır* seçeneklerini sunar. Çakışma işaretçileri olan bir dosya, kaydetmenin onu çözüldü olarak işaretlemediğini belirtir; bunun için [çakışma düzenleyicisini](/tr/docs/resolving-conflicts/) kullan.

GitLoom ayrıca bir dosyada kaydedilmemiş değişiklikler varken güncelleme yüklemeyi bekletir.

## Başka bir düzenleyici

*Harici Düzenleyicide Aç*, dosyayı **Ayarlar ▸ Tümleştirmeler ▸ Dosyaları şununla aç** bölümünde seçilen uygulamada açar. Oradaki *Özel komut* bunun yerine geçer; `$FILE`, `$LINE` ve `$REPO` doldurulur, örneğin:

```sh
code -g $FILE:$LINE
```
