---
title: "Bisect"
group: History
order: 18
summary: "Birkaç işlemeyi test edip İyi veya Kötü yanıtını vererek bir şeyi bozan işlemeyi bul."
updated: 2026-11-18
---

Bisect, bir sorunu getiren işlemeyi bulur. GitLoom’a her şeyin çalıştığı bir işlemeyi ve çalışmadığı bir işlemeyi söylersin, ardından aradan seçtiği işlemeleri test edersin.

## Başlatma

Önce çalışmanı işle veya zulaya at: işlemelere geçiş yapıldıkça dosyalar değişir.

**Depo ▸ Bisect…** öğesini seç ya da hâlâ çalışan eski bir işlemeye sağ tıklayıp ▸ *Bisect: Bu İşleme İyi…* öğesini seç. GitLoom bir kötü ve bir iyi işleme ister.

## Test et ve yanıtla

GitLoom ikisinin arasındaki bir işlemeye geçiş yapar. Bunu test et, ardından grafiğin üstündeki çubukta yanıtla:

- sorun yoksa *İyi*;
- sorun varsa *Kötü*;
- bu işleme test edilemiyorsa *Atla*.

Birkaç yanıttan sonra çubuk ilk kötü işlemeyi gösterir. Atlanan işlemeler aramanın daha fazla daralmasını engellerse, olası işlemeleri listeler.

## Testi bir komuta bırak

Tek bir test gibi bir komut iyi işlemeyi kötüsünden ayırt edebiliyorsa çubukta *Betik Çalıştır…* düğmesini tıkla (`git bisect run`). git bu durumda işlemelere sırayla geçiş yapar ve komutu depoda çalıştırır. Komut, işleme iyiyse 0, kötüyse 1 ile çıkmalıdır; 125, işlemenin test edilemediği anlamına gelir.

## Bitirme

*Bitir* seni başladığın yere geri götürür. *Durdur* bisect’i istediğin an sonlandırır ve yine başladığı yere döner.
