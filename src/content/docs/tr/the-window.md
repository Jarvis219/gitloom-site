---
title: "Pencere"
group: Getting started
order: 3
summary: "Kenar çubuğu, işleme grafiği, ayrıntı paneli, araç çubuğu, sekmeler, şeritler ve iletiler."
updated: 2026-11-18
---

Bir depo penceresinin üç ana bölümü vardır: solda kenar çubuğu, ortada işleme grafiği ve sağda veya altta ayrıntı paneli.

![GitLoom penceresi: dalların bulunduğu kenar çubuğu, renkli dal şeritleri olan işleme grafiği ve seçili işlemenin ayrıntıları](/shots/graph-light.png)

## Kenar çubuğu

Kenar çubuğu yerel ve uzak dalları, etiketleri, zulaları, alt modülleri ve çalışma ağaçlarını listeler. Başvurular/Dosyalar anahtarı bunun yerine deponun dosya ağacını gösterir. Bir dalı veya etiketi diğerlerinin üstündeki SABİTLENMİŞ grubunda tutmak için ona sağ tıkla ▸ *En Üste Sabitle*. Kenar çubuğunu başlığındaki düğmeyle veya <kbd>⌘0</kbd> ile gizle.

## Grafik ve ayrıntı paneli

Grafik her işlemeyi dallarıyla birlikte gösterir. En üstteki *Uncommitted changes* satırı çalışma ağacındır. Daha fazla sütun göstermek için sütun başlığına sağ tıkla: yazar, tarih, SHA, CI ve *Değişiklikler* (eklenen ve kaldırılan satırlar).

Ayrıntı paneli seçili işlemeyi dosyaları ve farklarıyla ya da çalışma ağacı satırı seçiliyken hazırlık alanını gösterir. <kbd>⌥⌘0</kbd> onu gösterir veya gizler, <kbd>⌥⌘L</kbd> sağ ile alt arasında taşır.

## Araç çubuğu ve sekmeler

Araç çubuğunda Geri Al/Yinele, Çek, İt, Getir, Dal, Zula, terminal ve panel düğmeleri bulunur. Ne yaptığını ve kısayolunu görmek için bir düğmenin üzerinde biraz bekle. Düğmeleri **Ayarlar ▸ Yerleşim** bölümünden seçip sıralayabilirsin.

Her deponun kendi sekmesi vardır. **Depo ▸ Sekme Rengi**, bir depoya kendi rengini verir; bu renk araç çubuğunun altında ince bir çizgi olarak da görünür. **Dosya ▸ Son Kullanılanı Aç** ve Dock simgesinin menüsü son kullanılan depoları listeler. 10 dakikadır bakmadığın bir sekme grafiğinin belleğini boşaltır ve geri döndüğünde yeniden yükler.

## Şeritler ve iletiler

Araç çubuğunun altındaki bir şerit, devam eden bir yeniden temellendirme veya birleştirme, çakışmalar ya da ayrık HEAD gibi olağan dışı her durumu açıklar ve devam etmek veya iptal etmek için düğmeler içerir.

Kısa iletiler pencerenin üst kısmında, türüne göre renklendirilmiş olarak görünür: bir şey tamamlandığında yeşil, bilgi için mavi, dikkatini gerektiren bir şey olduğunda turuncu ve başarısız olduğunda kırmızı. Sorunlar daha uzun süre kalır; ✕ onları kapatır.
