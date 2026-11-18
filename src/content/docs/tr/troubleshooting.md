---
title: "Sorun giderme"
group: Help
order: 38
summary: "Bir şeyler ters gittiğinde neler denenmeli: geri al, kayıp işlemeleri bul, git’in ne çalıştırdığını gör ve sık karşılaşılan kurulum sorunlarını düzelt."
updated: 2026-11-18
---

GitLoom’daki çoğu sorun geri alınabilir veya açıklanabilir. Buradan başla.

## Depoda bir şeyler ters gitti

- **Önce geri al**: <kbd>⌘Z</kbd> veya **Düzenle ▸ İşlem Geçmişi…**. Çoğu işlem geri alınabilir (bkz. [Geri alma ve yineleme](/tr/docs/undo-and-redo/)).
- **İşlemeler kaybolmuş görünüyor**: **Depo ▸ Reflog…** ve **Kayıp İşlemeleri Bul…** onları bulur (bkz. [Reflog ile kurtarma](/tr/docs/reflog-recovery/)).
- **Bir yeniden temellendirmede veya birleştirmede takılı kaldın**: bunlardan birinin ortasında bırakılan bir depo, GitLoom yeniden başlatıldıktan sonra da *Sürdür* ve *İptal Et* düğmeleri olan bir şerit gösterir.

## GitLoom’un ne yaptığını görme

**Pencere ▸ Git Günlüğü** (<kbd>⌥⇧⌘L</kbd>), GitLoom’un çalıştırdığı her git komutunu listeler: depo, komut, ne kadar sürdüğü ve çıkış kodu. Yalnızca komut satırı tutulur; çıktısı, girdisi veya kimlik bilgileri asla tutulmaz.

Araç çubuğunun altındaki ince hareketli çizgi, git’in bir uzak konumla iletişim kurduğu anlamına gelir; ne olduğunu görmek için üzerine gel. Yavaş bir işlemin iletisinde *Vazgeç* bulunur.

## Sık karşılaşılan sorunlar

- **GitLoom git’i bulamıyor veya çok eski olduğunu söylüyor.** git 2.40 veya üstünü yükle (bkz. [Kurulum](/tr/docs/install/)) ya da **Ayarlar ▸ Git ▸ Git ikili dosyası** bölümünden başka bir git seç.
- **Bir kanca node, python veya bir linter’ı bulamıyor.** Gereken klasörleri **Ayarlar ▸ Git ▸ Kancalar** bölümündeki *Ek PATH* alanına ekle. Bu, sonradan açılan depolara uygulanır.
- **Bir kanca takılıyor.** Kancası bir dakika sonra hâlâ çalışan bir işleme bunu söyler ve *Durdur* seçeneğini sunar. **Ayarlar ▸ Git ▸ Kancalar** bölümündeki *Hook’u şu süre sonra durdur* onu otomatik olarak durdurur (varsayılan olarak 10 dakika sonra).
- **Yanlış SSH anahtarı kullanılıyor.** [SSH hesaplarını](/tr/docs/ssh-accounts/) ayarla.

## Günlükler ve önbellekler

**Ayarlar ▸ Gelişmiş** bölümünde:

- *Hata ayıklama günlüğü yaz*, GitLoom’un çalıştırdığı git komutlarını çıkış durumları ve süreleriyle birlikte günlükler klasöründeki bir dosyaya kaydeder. URL’lerdeki parolalar ve token’lar gizlenir. *Günlükler Klasörünü Göster* onu açar.
- *Önbellekleri Temizle…* çevrimdışı kullanım için tutulan pull request’leri ve issue’ları ve önbellekteki dosya sürümlerini kaldırır. Gerektiğinde yeniden getirilirler.
- Ayarlar dosyan okunamıyorsa GitLoom onu kenara taşır, varsayılanlarla başlar ve bunu burada belirtir.

Bunların hiçbiri işe yaramazsa [bir sorun bildir](/tr/docs/report-an-issue/).
