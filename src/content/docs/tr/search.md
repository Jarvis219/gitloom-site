---
title: "Arama"
group: History
order: 15
summary: "İşlemeleri iletiye, yazara, SHA’ya, yola veya içeriğe göre bul; komut paleti ve Hızlı Aç ile her yere atla."
updated: 2026-11-18
---

GitLoom’da bir şeyleri bulmanın üç yolu vardır: işlemeler için Bul, her şey için komut paleti ve dosyalar için Hızlı Aç.

## İşleme bulma

<kbd>⌘F</kbd> işleme iletilerinde, yazarlarda, SHA’larda, dosya yollarında veya değişikliklerde (`-S`, bir metin parçasını ekleyen veya kaldıran işlemeler) arama yapar. Grafiği eşleşmelere göre süzebilir. <kbd>⌘G</kbd> ve <kbd>⇧⌘G</kbd> sonraki ve önceki eşleşmeye gider.

- Aksanlar önemli değildir: “nguoi”, “người” sözcüğünü bulur.
- `re:` tüm ileti için bir düzenli ifade alır, örneğin `re:^fix(ed)?:`.

## Komut paleti

<kbd>⌘K</kbd> herhangi bir komutu çalıştırır ve dallara, dosyalara, işlemelere, yazarlara ve pull request’lere atlar. Tek bir türde arama yapmak için bir karakterle başla:

| Önek | Aranan |
|---|---|
| `>` | komutlar |
| `/` | dosyalar |
| `:` | işlemeler |
| `@` | yazarlar |
| `#` | pull request’ler ve issue’lar |

## Hızlı Aç

<kbd>⌘P</kbd> deponun herhangi bir dosyasını açar. Dosya açıldıktan sonra <kbd>⌘E</kbd> onu düzenlemeni sağlar (bkz. [Dosya düzenleyici](/tr/docs/file-editor/)).
