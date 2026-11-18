---
title: "İşleme yapma"
group: Everyday work
order: 7
summary: "Bir ileti yaz, değiştir (amend), ortak yazar ekle, kancalarının çalışmasını izle ve git’in göstermediği dosyaları yönet."
updated: 2026-11-18
---

*Uncommitted changes* satırını seç, istediklerini hazırla (bkz. [Tek satırları hazırlama](/tr/docs/staging-single-lines/)), iletiyi yaz ve <kbd>⌘↩</kbd> tuşlarına bas.

## İşleme formu

- *Değiştir*, yeni bir işleme oluşturmak yerine son işlemeyi değiştirir (amend). İşaretliyken o işlemenin zaten değiştirdiği dosyalar da listelenir.
- *Ortak yazarlar*, daha önce eklediğin ortak yazarlar dahil, yakın geçmişteki kişileri önerir.
- Bir işleme çalışırken kancalarının yazdıkları (bir `pre-commit` linter’ı, testler) iletinin altında görünür. Bir kanca bir dakika sonra hâlâ çalışıyorsa GitLoom bunu söyler ve *Durdur* seçeneğini sunar.
- Bir satır, kimin adına işleme yaptığını gösterir. E-posta deponun [profiliyle](/tr/docs/profiles/) eşleşmediğinde veya GitHub hesabının e-postalarından biri olmadığında (GitHub işlemeyi seninle ilişkilendirmez) uyarır.

YZ açıkken <kbd>⌥⌘G</kbd> iletiyi senin için yazar (bkz. [Sağlayıcı seçme](/tr/docs/choosing-a-provider/)).

## İleti ayarları

**Ayarlar ▸ Git ▸ İşleme iletisi** bölümünde, formun başlayacağı bir şablonu ve sayacın sarıya ve kırmızıya döndüğü özet uzunluklarını (varsayılan olarak 50 ve 72 karakter) ayarlayabilirsin. Yalnızca uyarır; hiçbir şey kesilmez. Deponun kendi `commit.template` ayarı bu şablondan önceliklidir.

## Git’in göstermediği dosyalar

- Zaten izlenen bir dosyayı *Yok Say* yaparsan GitLoom *İzlemeyi Bırak* (`git rm --cached`) seçeneğini sunar: dosya bir sonraki işlemeyle depodan çıkar ve diskte kalır.
- Yerel bir yapılandırma gibi bilerek değiştirdiğin izlenen bir dosya için değişmiş dosyaya sağ tıkla ▸ *Yerel Değişiklikleri Gizle*. Dosya listesinin üstündeki bir satır kaç dosyanın gizlendiğini söyler; *Göster…* onları geri getirir.
- Bir Mac diskinde, Finder’da `readme.md` dosyasını `README.md` olarak yeniden adlandırmak git tarafından görülmez. GitLoom bunu fark eder ve *Yeniden Adlandırmayı Kaydet* seçeneğini sunar.

## Bir işlemeyi geri alma

<kbd>⌘Z</kbd> son işlemeyi veya değiştirmeyi geri alır. Bkz. [Geri alma ve yineleme](/tr/docs/undo-and-redo/).
