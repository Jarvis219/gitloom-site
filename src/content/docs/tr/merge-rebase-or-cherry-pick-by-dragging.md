---
title: "Sürükleyerek birleştirme, yeniden temellendirme veya cherry-pick"
group: Everyday work
order: 9
summary: "Birleştirmek, yeniden temellendirmek, ileri sarmak, cherry-pick yapmak veya itmek için grafikte dalları ve işlemeleri sürükle."
updated: 2026-11-18
---

Grafikte bir dalı veya işlemeleri başka bir yere sürükleyebilirsin; GitLoom bu bırakmanın neler yapabileceğini gösteren bir menü açar. Sen seçene kadar hiçbir şey olmaz.

## Neleri sürükleyebilirsin

- **Bir dal etiketini başka bir dalın veya işlemenin üzerine**: birleştirme, yeniden temellendirme veya ileri sarma. Menü ayrıca bir [etkileşimli yeniden temellendirme](/tr/docs/interactive-rebase/) başlatabilir.
- **İşlemeleri bir dalın üzerine**: onları cherry-pick yap. Önce <kbd>⇧</kbd> veya <kbd>⌘</kbd> tuşuyla tıklayarak birkaç işleme seç.
- **Bir dalı kenar çubuğundaki bir uzak konumun üzerine**: onu it.
- **Bir dalı başka bir dalın üzerine**, bir GitHub veya GitLab hesabıyla: bir pull request oluştur (bkz. [Pull request’ler ve incelemeler](/tr/docs/pull-requests-and-reviews/)).

## Sürüklemeden

Her sürüklemenin bir sağ tık menüsünde aynı komutu vardır. Depo menüsünde ayrıca *Geçerli Dala Birleştir* ve *Geçerli Dalı Şunun Üzerine Yeniden Temellendir* bulunur.

## Çakışma olduğunda

Çakışmalar işlemi durdurur ve bir şerit belirir. Onları çöz, ardından *Sürdür*, *Atla* veya *İptal Et* öğesini seç. Bkz. [Çakışmaları çözme](/tr/docs/resolving-conflicts/).

## Fikrini değiştirdiysen

Bir birleştirme, yeniden temellendirme veya cherry-pick <kbd>⌘Z</kbd> ile geri alınabilir. Bkz. [Geri alma ve yineleme](/tr/docs/undo-and-redo/).
