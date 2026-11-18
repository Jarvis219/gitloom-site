---
title: "Profiller"
group: Getting started
order: 4
summary: "Her tür iş için ayrı bir ad, e-posta, imzalama anahtarı, sekmeler ve son kullanılanlar listesi tut."
updated: 2026-11-18
---

Bir profil, işleme yaptığın kimliği tutar: bir ad, bir e-posta ve isteğe bağlı bir imzalama anahtarı. Örneğin biri iş, biri kişisel projeler için olabilir. Profilleri **Ayarlar ▸ Profiller** bölümünde ayarla.

## Bir profil neleri tutar

Her profilde şunlar bulunur:

- bir profil adı ile işleme adı (`user.name`) ve e-postası (`user.email`);
- bir imzalama yöntemi: imzalama, SSH, GPG veya X.509; ayrıca işlemelerin varsayılan olarak imzalanıp imzalanmayacağı;
- [SSH hesapları](/tr/docs/ssh-accounts/) kuralları karar vermediğinde itme için kullanılan isteğe bağlı bir hesap;
- kendi açık sekmeleri ve son kullanılan depoları.

GitLoom adı, e-postayı ve imzalama anahtarını her deponun git yapılandırmasına yazar; böylece terminal GitLoom ile aynı şeyi kullanır.

## Profil değiştirme

Profiller arasında pencerenin sağ üstündeki çipten geçiş yap. Bir profil varsayılandır: GitLoom onunla başlar ve kullanılan profil silindiğinde ona döner. Hangisinin varsayılan olacağını değiştirmek için *Varsayılan Yap* öğesini kullan.

## Yanlış kimlik

GitLoom, işleme düğmesinin üstünde kimin adına işleme yaptığını gösterir. Bu e-posta deponun profilindeki değilse satır bir uyarıyla işaretlenir; düzeltmek için araç çubuğundaki çipten doğru profili seç.

## Profil kaldırma

Profili seçip − düğmesini tıkla. Açık sekmeleri ve son kullanılan depoları unutulur. Depolara zaten yazılmış git yapılandırması olduğu gibi bırakılır. Her zaman en az bir profil vardır.
