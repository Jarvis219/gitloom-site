---
title: "Dosya geçmişi"
group: History
order: 13
summary: "Bir dosyayı değiştiren her işlemeyi yeniden adlandırmaları izleyerek gör; herhangi bir eski sürümü görüntüle veya geri yükle."
updated: 2026-11-18
---

Dosya Geçmişi, tek bir dosyayı değiştiren her işlemeyi, yeniden adlandırmalar boyunca izleyerek gösterir.

## Açma

Bir dosya seçip <kbd>⌥⌘Y</kbd> tuşlarına bas veya **Depo ▸ Dosya Geçmişi…** öğesini seç. Seçili dosya yoksa birini seçebilmen için komut paleti açılır. Terminalden `gitloom log <file>` de onu açar (bkz. [gitloom komut satırı aracı](/tr/docs/the-gitloom-command-line-tool/)).

## Okuma

Her girdi, dosyayı değiştiren bir işlemedir; yazarı ve tarihiyle birlikte. Bir yeniden adlandırma, dosyanın nereden geldiğini gösterir. *Yeniden adlandırmaları izle* kapatılabilir. Aralarındaki farkı görmek için iki sürüm seç.

<kbd>⌘[</kbd> ve <kbd>⌘]</kbd> geri ve ileri gider. Esc grafiğe geri döner.

## Eski sürümler

Bir girdiye sağ tıklayarak şunlara ulaş:

- *Bu Sürümü Görüntüle* veya *Bu Sürümü Harici Düzenleyicide Aç*;
- *Grafikte Göster*;
- *Bu İşlemede Blame* (bkz. [Blame](/tr/docs/blame/));
- *Dosyayı Bu Sürüme Geri Yükle…*. Dosyada işlenmemiş değişiklikler varsa bunların yerine geçer; <kbd>⌘Z</kbd> onları geri getirir.

## Sığ klonlar

Sığ bir klonda geçmiş, klonun bittiği yerde durur ve liste bunu belirtir.
