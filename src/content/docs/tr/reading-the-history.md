---
title: "Geçmişi okuma"
group: History
order: 12
summary: "İşleme grafiğinde yolunu bul, sütunlarını seç ve herhangi bir işlemenin içine bak."
updated: 2026-11-18
---

Pencerenin ortasındaki grafik, her işlemeyi dallarıyla birlikte gösterir; her dal kendi renkli şeridindedir.

![Dal şeritleri olan işleme grafiği, kenar çubuğu ve seçili işlemenin ayrıntıları](/shots/graph-light.png)

## Gezinme

- <kbd>↑</kbd> <kbd>↓</kbd> veya <kbd>J</kbd> <kbd>K</kbd> önceki veya sonraki işlemeye gider.
- <kbd>⇧</kbd> ile tıklamak bir aralık seçer, <kbd>⌘</kbd> ile tıklamak birkaç işleme seçer; örneğin onları karşılaştırmak, squash yapmak veya cherry-pick yapmak için.
- <kbd>⌘C</kbd> seçili işlemenin SHA’sını kopyalar.

Dosyalarını ve farklarını ayrıntı panelinde görmek için bir işleme seç.

## Sütunlar

Daha fazla sütun göstermek için grafiğin sütun başlığına sağ tıkla: yazar, tarih, SHA, CI ve *Değişiklikler* (eklenen ve kaldırılan satırlar). Bu seçim geçerli depoya uygulanır. **Görüntü ▸ Grafik Sütunları** ve **Ayarlar ▸ Yerleşim ▸ Grafik sütunları** bunları tüm depolar için değiştirir.

## Görünüm

**Ayarlar ▸ Görünüm** bölümünde şunları seçebilirsin:

- satır yoğunluğu (**Görüntü ▸ Yoğunluk** menüsünde de);
- son bir hafta için göreli tarihler veya her zaman mutlak tarihler, özel bir tarih biçimi ve işleme ya da yazar tarihi;
- zulaların grafikte görünüp görünmeyeceği;
- şerit renkleri: temadan, renk körlüğüne uygun veya tek renkli;
- avatarlar: kuşlar, renkli baş harfler, Gravatar, GitHub veya hiçbiri.

## İşleme bulma

<kbd>⌘F</kbd> geçmişte arama yapar ve grafiği eşleşmelere göre süzebilir. Bkz. [Arama](/tr/docs/search/).
