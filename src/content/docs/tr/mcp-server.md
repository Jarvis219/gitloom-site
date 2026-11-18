---
title: "MCP sunucusu"
group: Tools
order: 25
summary: "Claude Code, Cursor veya VS Code gibi YZ araçlarının depolarını GitLoom üzerinden okumasına ve isteğe bağlı olarak güvenli değişiklikler yapmasına izin ver."
updated: 2026-11-18
---

Diğer YZ araçları (Claude Code, Claude Desktop, Cursor, VS Code ve diğerleri) GitLoom’un MCP sunucusu üzerinden depolarınla çalışabilir. Sen açana kadar kapalıdır.

## Açma

**Ayarlar ▸ Tümleştirmeler ▸ MCP sunucusu** bölümünde *Harici YZ araçlarının izni* seçeneğini şunlardan birine ayarla:

- *Hiçbir şey yapma (kapalı)*;
- *Okuma: durum, geçmiş, farklar, blame*;
- *Okuma ve değiştirme: ayrıca işleme, dal, zula, çekme, itme*.

Ardından aracını bağla. Claude Code için orada gösterilen satırı kopyalayıp bir terminalde çalıştır; şuna benzer:

```sh
claude mcp add gitloom -- "/Applications/GitLoom.app/Contents/Helpers/gitloom-mcp"
```

Diğer araçlar için orada gösterilen JSON’u aracın MCP yapılandırmasına kopyala. GitLoom başka bir aracın dosyalarını asla düzenlemez. `gitloom mcp` komutu da sunucuyu çalıştırır (bkz. [gitloom komut satırı aracı](/tr/docs/the-gitloom-command-line-tool/)).

## Okuma

Araçlar, açık olan veya başlangıç sayfasındaki son kullanılanlar listesinde bulunan depoların durumunu, geçmişini, farklarını, blame’ini, dallarını ve zulalarını görebilir. GitLoom çalışırken neye baktığını da (seçili işleme veya açık dosya gibi) sorabilirler. Hiçbir şeyi değiştiremezler.

## Okuma ve değiştirme

Araçlar ayrıca GitLoom çalışırken bir sekmede açık olan depolarda hazırlayabilir, işleyebilir, dal oluşturup dallar arasında geçiş yapabilir, zulaya atabilir, getirebilir, çekebilir (yalnızca ileri sarma) ve itebilir. Her değişiklik pencerede aracın adı ve bir *Geri Al* düğmesiyle ve İşlem Geçmişi’nde görünür.

*İtmeden önce sor* açıkken bir itme, deponun penceresinde yanıtını bekler; 60 saniye sonra reddedilir.

Hiçbir araç zorla itme, sıfırlama, atma, silme veya geçmişi yeniden yazma yapamaz.

## Pull request’ler, issue’lar ve CI

*Hesaplarım üzerinden pull request'ler, issue'lar ve CI* açıkken araçlar, GitLoom’da bağlı hesap üzerinden deponun pull request’lerini, issue’larını ve CI çalıştırmalarını okuyabilir. *Okuma ve değiştirme* ile geçerli dal için bir pull request de açabilir ve bir pull request’e yorum yapabilirler. Token’ını asla görmezler ve hiçbir şeyi birleştiremez, onaylayamaz veya kapatamazlar.

Ayarlar, en son çağrıları *Son etkinlik* altında gösterir.
