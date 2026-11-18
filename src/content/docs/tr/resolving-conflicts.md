---
title: "Çakışmaları çözme"
group: Everyday work
order: 10
summary: "Her çakışma veya her satır için bir taraf seçmek, sonucu düzenlemek ve devam etmek için üç yönlü birleştirme düzenleyicisini kullan."
updated: 2026-11-18
---

Bir birleştirme, yeniden temellendirme, cherry-pick veya çekme bir çakışmaya takıldığında durur ve bir şerit neler olduğunu açıklar. Çakışan dosyalar ayrıntı panelinde listelenir.

![Senin tarafını, onların tarafını ve sonucu gösteren üç yönlü çakışma düzenleyicisi](/shots/conflict-light.png)

## Birleştirme düzenleyicisi

Üç yönlü birleştirme düzenleyicisi için çakışan bir dosyayı aç: senin tarafın, onların tarafı ve sonuç.

- Her çakışma veya her satır için bir taraf seç.
- Sonucu doğrudan düzenle.
- <kbd>⌥⌘↑</kbd> ve <kbd>⌥⌘↓</kbd> çakışmalar arasında gezinir.
- Her tarafı, çakışmalar yerinde olacak şekilde dosyanın tamamı olarak görmek için *Dosyanın tamamı* kutusunu işaretle. Sütunlar hizalanır ve birlikte kayar.

Dosya doğru olduğunda *Kaydet ve Çözüldü Olarak İşaretle* (<kbd>⌘S</kbd>) düğmesini tıkla.

## Özel durumlar

- Bir yeniden adlandırmadan kaynaklanan çakışma (iki tarafta da yeniden adlandırılmış veya bir tarafta yeniden adlandırılıp diğerinde silinmiş) bunu belirtir.
- İkili bir dosya, seçim yapmadan önce iki tarafta da önizlenebilir.
- İki taraf yalnızca satır sonlarında (CRLF / LF) farklıysa bir şerit uyarır.

## Kendi birleştirme aracın

Dosyayı harici birleştirme aracında da açabilirsin. GitLoom git’in `merge.tool` ayarını veya **Ayarlar ▸ Tümleştirmeler ▸ Birleştirme aracı** bölümünde seçtiğin aracı kullanır.

## Bitirme veya durdurma

Her dosya çözüldüğünde şeritteki *Sürdür* düğmesini tıkla. *Atla*, bir yeniden temellendirmenin veya cherry-pick’in geçerli işlemesini atlar; *İptal Et* her şeyi eski haline getirir. Bir yeniden temellendirmenin veya birleştirmenin ortasında bırakılan bir depo, GitLoom yeniden başlatıldıktan sonra şeridi yeniden gösterir.
