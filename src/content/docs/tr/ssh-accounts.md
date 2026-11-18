---
title: "SSH hesapları"
group: Accounts & hosting
order: 26
summary: "Aynı sunucuda birden çok hesabın olduğunda, GitLoom’da ve terminalde her hesap için doğru SSH anahtarını kullan."
updated: 2026-11-18
---

Aynı sunucuda, örneğin bir iş ve bir kişisel GitHub hesabı gibi birden çok hesabın varsa bir SSH hesabı GitLoom’a hangi anahtarın hangi kullanıcıya ait olduğunu ve hangi depoların onu kullandığını söyler.

## Hesap ayarlama

**Ayarlar ▸ Hesaplar** bölümünü aç ve *SSH Hesabı Ekle…* düğmesini tıkla. Her hesap için:

- sunucuyu ve oradaki kullanıcı adını gir;
- anahtarlarını ekle: *Anahtarları İçe Aktar…* `~/.ssh`, ssh-agent, 1Password ve Secretive’deki anahtarları listeler; *Oluştur…* yeni bir anahtar oluşturur;
- *Şu depolar için kullan* altında onu kullanması gereken sahipleri veya klasörleri ekle (*Klasör Ekle…*) ya da onu sunucu için *varsayılan hesap* yap.

Getirme, çekme, itme ve klonlama bundan sonra doğru anahtarı kullanır. *Also write core.sshCommand to each repository* açıkken deponun `core.sshCommand` ayarı yapılır; böylece terminaldeki düz bir `git push` da aynısını yapar.

Kendi `core.sshCommand` ayarı olan depolara, `IdentityFile` içeren bir `~/.ssh/config` takma adına veya kabuğundaki `GIT_SSH_COMMAND` değişkenine dokunulmaz.

## Sunucu takma adları

`~/.ssh/config` içindeki sunucu takma adlarını (`github-work` gibi) kullanıyorsan **Depo ▸ Uzak Konumlar… ▸ SSH Takma Adı**, bir uzak konumu bunlardan birine geçirir.

## Anahtar yenileme

Bir anahtarın *Döndür…* öğesi yeni bir anahtar oluşturur, onu hesaba yükler ve yenisi çalıştığında eskisini kaldırır.

## SSH hesapları ve barındırma oturumları

Bir SSH hesabı yalnızca hangi anahtarın itip çekeceğini seçer. Pull request’ler ve anahtar yükleme için GitHub’da veya GitLab’da oturum açmak ayrı bir şeydir ve **Ayarlar ▸ Barındırma** bölümündedir (bkz. [GitHub](/tr/docs/github/) ve [GitLab](/tr/docs/gitlab/)).
