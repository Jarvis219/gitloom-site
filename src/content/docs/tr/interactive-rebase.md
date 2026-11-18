---
title: "Etkileşimli yeniden temellendirme"
group: History
order: 16
summary: "İşlemeleri, sen başlatana kadar hiçbir şey yapmayan görsel bir planda yeniden sırala, iletilerini değiştir, squash yap, düzenle veya bırak."
updated: 2026-11-18
---

Etkileşimli yeniden temellendirme (interactive rebase) bir dizi işlemeyi yeniden yazar. GitLoom planı düzenlediğin bir liste olarak gösterir; sen başlatana kadar depoya hiçbir şey olmaz.

## Düzenleyiciyi açma

- Bir işlemeye sağ tıkla ▸ *Buradan Etkileşimli Yeniden Temellendir…*.
- Ya da bir dalı başka bir dalın üzerine bırakıp *Etkileşimli yeniden temellendirme* öğesini seç.
- Birkaç işleme seçiliyken *Seçili İşlemeleri Etkileşimli Yeniden Temellendir…*, düzenleyiciyi bu işlemeler seçili olarak açar.

İlk işlemeden itibaren de çalışır (`--root`). Düzenleyici grafiğin yerini alır.

## Planı düzenleme

Her satır bir işlemedir; en eskisi en üsttedir. Eylemini menüden veya bir tuşla ayarla:

| Tuş | Eylem |
|---|---|
| <kbd>P</kbd> | pick |
| <kbd>R</kbd> | reword |
| <kbd>E</kbd> | edit |
| <kbd>S</kbd> | squash |
| <kbd>F</kbd> | fixup |
| <kbd>C</kbd> | fixup -C |
| <kbd>D</kbd> | drop |

Yeniden sıralamak için satırları sürükle veya <kbd>⌥↑</kbd> ve <kbd>⌥↓</kbd> tuşlarını kullan. <kbd>⌘Z</kbd> plandaki bir değişikliği geri alır.

- Reword iletileri önceden yazılabilir; böylece yeniden temellendirme durmadan çalışır.
- Bir satırın menüsündeki *Sonrasına Komut Ekle…*, o noktada bir komut çalıştırır (başarısız olursa yeniden temellendirmeyi durduran bir test gibi bir `exec` satırı).
- Yeniden temellendirilen işlemelerin üzerine yığılmış dallar, işareti kaldırmadığın sürece onlarla birlikte taşınır (`--update-refs`).
- Aralıktaki birleştirmeler varsayılan olarak düzleştirilir. Korumak için *Birleştirmeleri koru* kutusunu işaretle (`--rebase-merges`). Plan bu durumda bir birleştirmenin her tarafının nerede başladığını ve birleştirmenin nerede yeniden yapıldığını da gösterir; işlemeler yalnızca kendi tarafları içinde taşınabilir.

## Başlatma veya iptal

<kbd>⌘↩</kbd> başlatır, Esc iptal eder. Sonrasında yeniden temellendirmenin tamamı tek bir geri alma adımıdır.

## Daha hızlı düzenlemeler

Düzenleyiciyi açmadan:

- birkaç bitişik işleme seç ▸ *N İşlemeyi Squash Yap* (iletiler en eskiden başlayarak birleştirilip hemen çalışır; iletiyi kendin yazmak için *… ve İletiyi Düzenle…*) veya *N İşlemeyi Bırak…*;
- bir işlemeye sağ tıkla ▸ *İletiyi Düzenle…*, *İşlemeyi Bırak…*, *Yukarı Taşı/Aşağı Taşı*.
