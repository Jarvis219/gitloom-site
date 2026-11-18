---
title: "Git LFS"
group: Tools
order: 23
summary: "Büyük dosyaları Git LFS ile izle, indir ve ekip arkadaşlarının aynı anda düzenlememesi için dosyaları kilitle."
updated: 2026-11-18
---

Mac’inde `git-lfs` yüklüyse GitLoom, Git LFS ile çalışır. Yüklü değilse GitLoom yine LFS dosyalarını listeleyebilir ancak indiremez veya kilitleyemez.

## GIT LFS grubu

LFS kullanan bir depoda kenar çubuğunda LFS dosyalarını listeleyen bir GIT LFS grubu bulunur. Henüz indirilmemiş, diskte yalnızca işaretçisi olan bir dosyada indirme simgesi görünür. Kilitli bir dosya kimin kilitlediğini gösterir. Bir dosyayı açmak için çift tıkla.

Bir dosyaya sağ tıklayarak şunlara ulaş:

- *Dosyayı Aç*;
- burada yalnızca işaretçisi varsa *Bu Dosyayı İndir*;
- *Kilitle* veya *Kilidi Aç*.

## Tüm LFS dosyalarını indirme

**Depo ▸ Gelişmiş ▸ Git LFS Dosyalarını İndir**, `git lfs pull` komutunu çalıştırır ve bu çalışma kopyasının büyük dosyalarını indirir.

## Yeni bir dosya türünü izleme

O uzantıya sahip her dosyayı izlemek için hazırlık alanında değişmiş bir dosyaya sağ tıkla ▸ *LFS ile İzle (\*.ext)*. Zaten LFS kullanan bir depoda aynı menüde *Kilitle (LFS)* ve *Kilidi Aç (LFS)* bulunur.
