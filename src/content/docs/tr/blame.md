---
title: "Blame"
group: History
order: 14
summary: "Bir dosyanın her satırını en son kimin değiştirdiğini gör ve bir satırı eski işlemeler boyunca geriye doğru izle."
updated: 2026-11-18
---

Blame, bir dosyanın her satırı için o satırı en son değiştiren işlemeyi gösterir.

## Açma

Bir dosya seçip <kbd>⌥⌘B</kbd> tuşlarına bas veya **Depo ▸ Blame…** öğesini seç. Terminalden `gitloom blame <file>:<line>` onu o satırda açar (bkz. [gitloom komut satırı aracı](/tr/docs/the-gitloom-command-line-tool/)). [Dosya geçmişi](/tr/docs/file-history/) içinden *Bu İşlemede Blame*, dosyayı o anki haliyle gösterir.

## Bir satırı geriye doğru izleme

İşlemesini görmek için bir satırı tıkla, ardından:

- *İşlemeyi Göster* o işlemeyi grafikte seçer;
- *Üst İşlemenin Blame'i* o işlemeden hemen önceki blame’i göstererek satırı daha önce kimin yazdığını görmeni sağlar.

## Seçenekler

Dosyanın üstündeki çubukta şunlar bulunur:

- *Boşlukları yok say*;
- satırları yaşlarına göre renklendiren *Isı haritası*;
- *Daha Fazla* altında: *Dosya içinde taşınan satırları algıla (-M)* ve *Başka dosyalardan kopyalanan satırları algıla (-C)*;
- depoda bir `.git-blame-ignore-revs` dosyası varsa (veya `blame.ignoreRevsFile` ayarlanmışsa) *Yok sayılan revizyonlar*. Biçimlendirme değişiklikleri gibi orada listelenen işlemeleri atlar.

Çok uzun bir dosyada blame biraz zaman alabilir. GitLoom bunu önceden söyler, satırlar bulundukça dolar ve istediğin an çıkabilirsin.
