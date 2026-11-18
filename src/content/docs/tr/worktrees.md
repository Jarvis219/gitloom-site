---
title: "Çalışma ağaçları"
group: Tools
order: 21
summary: "İkinci bir dala kendi klasöründe geçiş yap; böylece yaptığın işi zulaya atmadan onun üzerinde çalışabilirsin."
updated: 2026-11-18
---

Çalışma ağacı (worktree), aynı depo için ikinci bir çalışma klasörüdür. Birincisinde yaptığın işi zulaya atmadan orada başka bir dal üzerinde çalışabilirsin.

## Oluşturma

Kenar çubuğunda bir dala sağ tıkla ▸ *Yeni Çalışma Ağacında Aç…*. Klasörü seç; yeni bir dal istiyorsan *… öğesinden yeni bir dal oluştur* kutusunu işaretle. *Oluştur ve Aç* çalışma ağacını oluşturur ve yeni bir sekmede açar.

## ÇALIŞMA AĞAÇLARI grubu

Bir deponun birden fazla çalışma ağacı olduğunda kenar çubuğu bir ÇALIŞMA AĞAÇLARI grubu gösterir. Her satır çalışma ağacının dalını gösterir; geçerli sekmedeki *bu sekme* olarak işaretlenir. Klasörü kaybolmuş bir çalışma ağacı *eksik* olarak işaretlenir ve *Buda* bunları unutur.

Bir çalışma ağacına sağ tıklayarak şunlara ulaş:

- *Yeni Sekmede Aç* veya *Aç*;
- *Finder'da Göster*;
- *Kilitle* veya *Kilidi Aç*;
- *Çalışma Ağacını Kaldır…*.

## Başka bir çalışma ağacındaki dal

Git bir dala aynı anda yalnızca bir çalışma ağacında geçiş yapılmasına izin verir. Başka bir yerde açık olan bir dala geçiş yaparsan GitLoom *O Çalışma Ağacını Aç* seçeneğini ya da aynı işlemeyi dal olmadan bu çalışma ağacında açmayı önerir.

## Kaldırma

*Çalışma Ağacını Kaldır…* çalışma ağacının klasörünü siler; dal kalır. Geçerli sekmede açık olan çalışma ağacını kaldıramazsın.

> **Caution** Çalışma ağacında işlenmemiş değişiklikler varsa GitLoom bunu söyler ve *Yine de Kaldır* öğesini seçtiğinde bunlar klasörle birlikte silinir.
