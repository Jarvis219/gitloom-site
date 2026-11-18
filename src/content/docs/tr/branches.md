---
title: "Dallar"
group: Everyday work
order: 8
summary: "Dalları ve etiketleri oluştur, onlara geçiş yap, yönet; getir, çek ve it."
updated: 2026-11-18
---

Dallar ve etiketler kenar çubuğunda ve grafikte bulunur. Çoğu işlem bir sağ tık uzağındadır.

## Oluşturma ve geçiş yapma

<kbd>⌘B</kbd>, seçili işlemede bir dal oluşturur. Bir dala geçiş yapmak için onu çift tıkla. Geri kalan her şey için dallara, etiketlere ve işlemelere sağ tıkla: yeniden adlandırma, silme, üst kaynağı ayarlama, etiketleme, sıfırlama, geri alma (revert), cherry-pick ve daha fazlası.

Birleştirilmemiş bir dalı silmek önce onay ister ve <kbd>⌘Z</kbd> ile geri alınabilir.

## Getirme, çekme ve itme

- <kbd>⇧⌘L</kbd> tüm uzak konumlardan getirir. GitLoom ayrıca arka planda, varsayılan olarak 5 dakikada bir getirir (bunu **Ayarlar ▸ Genel** bölümünden değiştir). Pil yüzde 20’nin altındayken, Düşük Güç Modu’nda veya pahalı ağlarda arka planda asla getirmez.
- <kbd>⇧⌘↓</kbd> çeker. **Depo ▸ Çekme Yöntemi**, tek bir çekme için strateji seçer.
- <kbd>⇧⌘↑</kbd> iter. Yeni bir dal için *Üst kaynağı ayarla* kutusunu işaretle.

Zorla itme her zaman açıkça yapılır ve `--force-with-lease` kullanır. **Depo ▸ Etiketlerle İt**, itilen işlemelerdeki açıklamalı etiketleri de iter.

## Temizlik

**Depo ▸ Birleştirilmiş Dalları Sil…**, geçerli dala zaten birleştirilmiş yerel dalları kaldırır. Korunan dallara dokunulmaz; kalıplarını **Ayarlar ▸ Git ▸ Korunan dallar** bölümünde belirle (örneğin `main master release/*`).

## Zula

<kbd>⇧⌘S</kbd> her şeyi zulaya atar. *Değişiklikleri Zulaya At…* zulaya ad vermeni ve dosyaları seçmeni sağlar. Zulalar kenar çubuğunda ve varsayılan olarak grafikte bulunur. *Bırakılmış Zulayı Kurtar…*, yanlışlıkla bıraktığın bir zulayı bulur.

## Dal klasörleri

`prefix/…` biçiminde adlandırılmış yerel dallar kenar çubuğunda klasör olarak görünür. Bunu **Ayarlar ▸ Yerleşim** bölümünden kapat.
