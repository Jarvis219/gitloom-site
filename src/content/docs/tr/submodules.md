---
title: "Alt modüller"
group: Tools
order: 22
summary: "Her alt modülün durumunu gör, başlatıp güncelle, birini kendi sekmesinde aç, alt modül ekle veya kaldır."
updated: 2026-11-18
---

Bir depoda alt modüller varsa kenar çubuğu her birini durumuyla birlikte listeleyen bir ALT MODÜLLER grubu gösterir.

## Listeyi okuma

Her satır alt modülün yolunu ve durumunu gösterir:

- güncel olduğunda bir ✓ ve geçiş yapılmış işleme; değişiklikleri olduğunda *değiştirilmiş içerik* / *izlenmeyen içerik*;
- eşitlenmemişse *Güncelle*: geçiş yapılmış işleme, ana deponun kaydettiği işleme değildir (ikisini de görmek için üzerine gel);
- henüz başlatılmamışsa *Başlat*;
- kaydedilen işleme çakışmadaysa *çakışma*.

## Bir alt modülle çalışma

Bir alt modülü kendi sekmesinde açmak için çift tıkla. Sağ tıklayarak şunlara ulaş:

- *Yeni Sekmede Aç*;
- *Kaydedilen İşlemeye Güncelle* veya *En Son Uzak Sürüme Güncelle*;
- başlatılmamış bir alt modül için *Başlat*;
- *Finder'da Göster*;
- *Alt Modülü Kaldır…*.

Bir alt modülde işlenmemiş değişiklikler varsa güncelleme önce sorar. Değişikliklerin engel oluyorsa git durur; hiçbir şey zorlanmaz.

Yeni işlemeler getiren her çekmeden sonra alt modülleri güncellemek için **Ayarlar ▸ Git** bölümünde *Çektikten sonra alt modülleri güncelle* seçeneğini aç.

## Alt modül ekleme

**Depo ▸ Gelişmiş ▸ Alt Modül Ekle…** URL’yi, yolu ve isteğe bağlı olarak bir dalı sorar.

## Alt modül kaldırma

*Alt Modülü Kaldır…* alt modülün başlatılmasını geri alır ve onu dizinden kaldırır. Depo verileri (`.git/modules/<name>`) Çöp Sepeti’ne gider; böylece işlemeleri kurtarılabilir kalır. Bitirmek için ardından işleme yap. Alt modülde işlenmemiş değişiklikler, hiçbir uzak konumda olmayan işlemeler veya zulalar varsa GitLoom önce bunları listeler.
