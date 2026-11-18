---
title: "Sağlayıcı seçme"
group: AI
order: 32
summary: "YZ özelliklerini aç, bir bulut veya yerel sağlayıcı seç, bir anahtar ekle ve YZ’nin senin için ne yazacağını belirle."
updated: 2026-11-18
---

YZ özellikleri varsayılan olarak kapalıdır. Açtığında kimin yanıt vereceğini seçersin: kendi anahtarınla bir bulut sağlayıcısı veya Mac’inde çalışan bir model.

## Açma

**Ayarlar ▸ YZ** bölümünü aç ve *YZ özellikleri* seçeneğini aç. GitLoom önce neyin, kime gönderileceğini açıklar.

Bir *Sağlayıcı* seç:

- Anthropic, OpenAI, Google Gemini, OpenRouter, Groq, Mistral, DeepSeek, Qwen (Alibaba Cloud), xAI veya Together AI;
- yerel olarak çalışan Ollama veya LM Studio; bu durumda veriler Mac’inden çıkmaz;
- özel bir sağlayıcı: bir şirket ağ geçidi gibi Anthropic, OpenAI, Gemini veya Ollama API’sini konuşan herhangi bir sunucu. *Özel Sağlayıcı Ekle…* ile ekle.

API anahtarını yapıştır ve *Anahtarı Kaydet* düğmesini tıkla. Anahtarlar Anahtar Zinciri’nde saklanır. *Test Et* anahtarı denetler ve sağlayıcının modellerini yükler; böylece birini seçebilirsin.

## YZ neler yapabilir

- İşleme iletileri (<kbd>⌥⌘G</kbd>), pull request açıklamaları ve zula iletileri yazar.
- Bir işlemeyi, bir dalı veya değişikliklerini açıklar; ek sorular sorabilirsin.
- Çakışma çözümleri önerir.

Sen istemedikçe hiçbir şey gönderilmez. Ağ yokken ✨ düğmeleri soluk görünür; yerel bir model yine de çalışır.

## Yazımı ayarlama

*Yazma* altında dili (İngilizce veya Tiếng Việt) ve işleme stilini seç: Conventional Commits, deponun geçmişindeki gibi veya serbest.

*Özellik Başına Ayarları Göster*, her özelliğe kendi modelini ve *Özel talimatlar* alanını verir. Yanlarındaki **Şablonlar** menüsü; Conventional Commits, daldan alınan bir bilet kimliği, bir pull request taslağı veya yalnızca hatalara odaklanan bir inceleme gibi hazır bir set doldurur; ardından bunu ekibine göre uyarlayabilirsin.

## Tek bir depo için kapatma

İşleme iletisinin yanındaki ✨ menüsünden *Bu Depo İçin YZ'yi Kapat* öğesini seç. Yeniden açmak için **Ayarlar ▸ YZ ▸ YZ şunlar için kapalı** bölümünü kullan.

Herhangi bir şey gönderilmeden önce isteğin tam halini görebilirsin. Bkz. [Neler gönderilir](/tr/docs/what-gets-sent/).
