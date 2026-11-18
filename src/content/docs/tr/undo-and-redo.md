---
title: "Geri alma ve yineleme"
group: Everyday work
order: 11
summary: "Hemen her Git işlemini ⌘Z ile geri al, ⇧⌘Z ile yinele veya İşlem Geçmişi’ndeki herhangi bir noktaya dön."
updated: 2026-11-18
---

<kbd>⌘Z</kbd> son Git işlemini geri alır, <kbd>⇧⌘Z</kbd> onu yineler. Bir şeyler ters gittiğinde önce geri almayı dene.

## Neler geri alınabilir

İşleme, değiştirme (amend), geçiş yapma, dal ve etiket değişiklikleri, atma, sıfırlama, zula, çekme, birleştirme, yeniden temellendirme, cherry-pick ve daha fazlası.

Bir birleştirme, yeniden temellendirme veya sıfırlama yalnızca çalışma ağacı temizken yinelenir.

## İşlem Geçmişi

**Düzenle ▸ İşlem Geçmişi…** GitLoom’un yaptığı her şeyi listeler. İçindeki herhangi bir noktaya kadar geri alabilirsin.

## Çalışmanı kaybetmeden önce

Çalışmanı silecek bir geri almadan önce, örneğin yeni değişiklikler yaptıktan sonra, GitLoom ne olacağını söyler ve sorar.

## Metin ve yeniden temellendirme düzenleyicisi

Bir metin alanında <kbd>⌘Z</kbd> her zamanki gibi yazmayı geri alır. [Etkileşimli yeniden temellendirme](/tr/docs/interactive-rebase/) düzenleyicisinde plandaki değişiklikleri geri alır.

Geri almadan sonra bile bir işleme kaybolmuş görünüyorsa bkz. [Reflog ile kurtarma](/tr/docs/reflog-recovery/).
