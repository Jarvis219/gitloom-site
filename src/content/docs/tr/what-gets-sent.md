---
title: "Neler gönderilir"
group: AI
order: 33
summary: "GitLoom’un bir YZ sağlayıcısına neler gönderdiği, neleri dışarıda bıraktığı veya gizlediği ve isteğin tam halini önceden nasıl göreceğin."
updated: 2026-11-18
---

GitLoom, sen bir işleme iletisi gibi bir şey isteyene kadar bir YZ sağlayıcısına hiçbir şey göndermez. Gönderdiği şey, süzgeçten geçirildikten sonra o isteğin ihtiyaç duyduğu farklar ve işleme iletileridir.

## Önizleme

Bir depoda YZ’yi ilk kez kullandığında GitLoom verileri göndermeden önce gösterir:

- sağlayıcı, model ve isteğin gideceği adres; yerel bir sağlayıcı Mac’inden çıkmayan olarak işaretlenir;
- her dosya; dahil edilmiş, kırpılmış, yalnızca adıyla gönderilen (ikili dosyalar, kilit dosyaları gibi oluşturulmuş dosyalar veya boyut sınırını aşanlar) ya da hariç tutulmuş olarak işaretlenir;
- gizlenen tüm gizli bilgiler;
- token tahmini ve isteğin tam gövdesi.

*Gönder* veya *Vazgeç* düğmesini tıkla. Bir dahaki sefere orada önizlemeyi atlamak için *Bu depo için bir daha sorma* kutusunu işaretle. Daha sonra yeniden görmek için işleme iletisinin yanındaki ✨ menüsünden *Verileri Önizle…* öğesini seç.

## Hariç tutulan dosyalar

**Ayarlar ▸ YZ ▸ Ne gönderiliyor** bölümündeki *Hariç Tut* kalıplarıyla eşleşen dosyalar asla gönderilmez. Bunlar virgülle ayrılmış gitignore tarzı kalıplardır; varsayılan olarak:

```text
.env*, *.pem, *.key, *.p12, secrets/**, id_rsa*, id_ed25519*
```

Adlarını da dışarıda bırakmak için *Hariç tutulan dosyaların adlarını da gizle* seçeneğini aç. Bir ekibin `.gitloom/team.json` dosyası daha fazla kalıp ekleyebilir. *En fazla girdi* ne kadar veri gönderileceğini sınırlar.

## Gizlenen gizli bilgiler

GitLoom göndermeden önce gizli bilgiye benzeyen dizeleri `[REDACTED]` ile değiştirir: AWS erişim anahtarları; GitHub, Slack, Anthropic, OpenRouter, OpenAI, Google ve Groq anahtarları ve token’ları; özel anahtar blokları; `password`, `secret`, `api_key` veya `token` gibi adlara atanan değerler ve rastgele görünen diğer uzun token’lar. Önizleme neleri gizlediğini listeler.

> **Caution** Gizleme kalıplara dayanır ve bir gizli bilgiyi kaçırabilir. Gizli bilgi içeren dosyaları *Hariç Tut* listesine ekle ve önizlemeyi denetle.

## Hata ayıklama günlüğü

**Ayarlar ▸ YZ** bölümündeki *Hata ayıklama günlüğü: istemleri ve yanıtları bir dosyaya yaz*, gönderilen her şeyi (süzgeçten sonra) ve her yanıtı Mac’indeki bir dosyaya kaydeder. API anahtarları asla yazılmaz. İşin bitince kapat.
