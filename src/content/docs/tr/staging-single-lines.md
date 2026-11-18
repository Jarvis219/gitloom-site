---
title: "Tek satırları hazırlama"
group: Everyday work
order: 6
summary: "Dosyaların tamamını, tek parçaları veya yalnızca seçtiğin satırları hazırla; geri kalanını sonraki bir işlemeye bırak."
updated: 2026-11-18
---

Bir dosyayı tek seferde işlemek zorunda değilsin. GitLoom bir dosyanın tamamını, tek bir parçayı (hunk) veya yalnızca seçtiğin satırları hazırlamanı (stage) sağlar.

![Değişmiş bir dosyanın bölünmüş farkı, hazırlık paneli ve işleme formu](/shots/diff-light.png)

## Dosyaları ve parçaları hazırlama

Grafiğin en üstündeki *Uncommitted changes* satırını seç. Ayrıntı paneli hazırlanmamış ve hazırlanmış dosyalarını listeler. Bir dosyanın tamamını hazırla veya farkını açıp bir değişiklik bloğunda *Stage Hunk* kullan. <kbd>⇧⌘A</kbd> her şeyi hazırlar, <kbd>⌥⇧⌘A</kbd> her şeyi hazırlıktan çıkarır.

## Satırları hazırlama

1. Dosyanın farkını aç.
2. İstediğin satırları tıkla. Bir çubuk kaç satırın seçili olduğunu gösterir.
3. *Satırları Hazırla* düğmesini tıkla veya <kbd>S</kbd> tuşuna bas.

Hazırlanmış farkta satırları seçip geri çıkarmak için *Satırları Hazırlıktan Çıkar* (<kbd>U</kbd>) düğmesini tıkla. Çubuktaki ✕ seçimi temizler.

## Satırları atma

Hazırlanmamış farkta *Satırları At* (<kbd>⌫</kbd>) seçili satırları atar. GitLoom önce sorar ve <kbd>⌘Z</kbd> onları geri getirir (bkz. [Geri alma ve yineleme](/tr/docs/undo-and-redo/)).

## Farkta gezinme

<kbd>⌥↑</kbd> ve <kbd>⌥↓</kbd> dosyadaki önceki veya sonraki değişikliğe; <kbd>⌥⌘↑</kbd> ve <kbd>⌥⌘↓</kbd> önceki veya sonraki dosyaya gider.
