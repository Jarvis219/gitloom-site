---
title: "Yerleşik terminal"
group: Tools
order: 19
summary: "Grafiğin altında, deponun klasöründe açılan; GitLoom’u yenileyen ve git komutları öneren bir terminal."
updated: 2026-11-18
---

<kbd>⌃`</kbd>, grafiğin altında, deponun klasöründe, kendi oturum açma kabuğunla bir terminal açar. İçinde bir git komutu biter bitmez grafik yenilenir.

## Öneriler ve bağlantılar

Bir git komutu yazarken GitLoom alt komutları, dalları, uzak konumları ve takma adları önerir. <kbd>↑</kbd> <kbd>↓</kbd> bir öneri seçer, <kbd>⇥</kbd> veya <kbd>→</kbd> onu ekler, Esc listeyi kapatır.

İmlecin altındakini <kbd>⌘</kbd> tuşuyla tıkla: bir SHA o işlemeyi seçer, bir yol dosyayı açar, bir URL tarayıcıyı açar.

## Tuşlar

| Tuşlar | İşlem |
|---|---|
| <kbd>⌃`</kbd> | Terminali göster veya gizle (odaktayken gizler) |
| <kbd>⌃⇧`</kbd> | Yeni terminal oturumu |
| <kbd>⌘+</kbd> / <kbd>⌘−</kbd> | Daha büyük / daha küçük terminal metni |
| Esc | Boş bir istemde grafiğe geri dön |

Sekmeyi kapattığında hâlâ çalışan bir komut varsa GitLoom önce sorar.

## Ayarlar

**Ayarlar ▸ Tümleştirmeler ▸ Terminal** bölümünde şunlar bulunur:

- *Kabuk tümleştirmesi*: GitLoom’un bir komutun ne zaman bittiğini görmesini sağlar (anında yenileme, öneriler). Kapatırsan bunlar durur. Nokta dosyaların her iki durumda da asla düzenlenmez.
- *Yazarken git komutları öner*: yalnızca önerileri kapatmak için.
- *Geri kaydırma*: her oturumun kaç satır tuttuğu (varsayılan olarak 10.000).
- *GitLoom'un çalıştırdığı git komutlarını göster*: git’i öğrenmek için, uygulamanın çalıştırdığı her komut için soluk bir satır.
- *Güvenli Klavye Girişi*: klavye bir terminaldeyken diğer uygulamalar yazdıklarını okuyamaz.
- *Kabuk* ve *Argümanlar*: yeni oturumlar için `/opt/homebrew/bin/fish` gibi başka bir kabuk. Çalıştırılamayan bir yol, oturum açma kabuğuna geri döner.

Değişiklikler yeni terminal oturumlarına uygulanır. Terminal, **Ayarlar ▸ Görünüm** bölümündeki kod yazı tipini kullanır.

## Her zamanki terminal uygulaman

<kbd>⌥⌘T</kbd> bunun yerine depoyu kendi terminal uygulamanda açar. Hangi uygulamanın kullanılacağını **Ayarlar ▸ Tümleştirmeler ▸ “Terminalde Aç” şunu kullanır** bölümünden seç.
