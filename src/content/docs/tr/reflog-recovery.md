---
title: "Reflog ile kurtarma"
group: History
order: 17
summary: "Bir sıfırlama, yeniden temellendirme veya silinen bir dal sonrasında kaybolmuş görünen işlemeleri reflog ve Kayıp İşlemeleri Bul ile geri getir."
updated: 2026-11-18
---

git’te işlemeleri kaybetmek zordur. Biri kaybolmuş görünüyorsa önce <kbd>⌘Z</kbd> veya **Düzenle ▸ İşlem Geçmişi…** dene (bkz. [Geri alma ve yineleme](/tr/docs/undo-and-redo/)). Bu işe yaramazsa reflog’a bak.

## Reflog

**Depo ▸ Reflog…** öğesini seç. HEAD’in bulunduğu her konumu en yeniden başlayarak listeler; böylece bir sıfırlama veya yeniden temellendirmeyle kaybettiğin işlemeler oradadır. Bunun yerine o dalın reflog’unu görmek için en üstten bir dal seç; SHA, eylem veya iletiye göre aramak için süzgece yaz.

Bir dala sağ tıklayıp ▸ *Reflog’u Göster* ile o dalın reflog’unu da açabilirsin.

## Kayıp işlemeler

**Depo ▸ Kayıp İşlemeleri Bul…** (veya *Kayıp İşlemeler* sekmesi), hiçbir dalın, etiketin veya reflog’un ulaşmadığı işlemeleri arar; örneğin silinmiş bir dalın işlemelerini.

## Bir işlemeyi geri getirme

Listelerden birinde bir işleme seç, ardından:

- *Burada Dal Oluştur…* onun üzerine yeni bir dal koyar;
- *Cherry-pick* onu geçerli dalına kopyalar;
- *Geçerli Dalı Buraya Sıfırla…* geçerli dalını ona taşır.
