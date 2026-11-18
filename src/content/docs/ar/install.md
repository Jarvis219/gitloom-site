---
title: "التثبيت"
group: Getting started
order: 1
summary: "ما يحتاجه GitLoom، وكيف تنزّله، وكيف تفتحه أول مرة."
updated: 2026-11-18
---

GitLoom عميل Git مجاني لجهاز Mac. يشغّل `git` الخاص بك، فتسري إعداداتك والـhooks وبيانات الاعتماد والأسماء المستعارة كلها.

## المتطلبات

- macOS 14 Sonoma أو أحدث، على جهاز Mac بمعالج Apple silicon.
- git 2.40 أو أحدث. يعمل الإصدار المضمّن في Xcode Command Line Tools، وكذلك الإصدار من Homebrew.

للحصول على git من Apple، شغّل ما يلي في تطبيق الطرفية:

```sh
xcode-select --install
```

يخبرك GitLoom عند التشغيل إن لم يعثر على إصدار حديث بما يكفي من git. وإن كنت تحتفظ بـ git في مكان غير معتاد، فاختره في **الإعدادات ▸ Git**.

## التنزيل

نزّل `GitLoom.dmg` (42 MB) من [أحدث إصدار](https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg)، أو من الطرفية:

```sh
curl -LO https://github.com/Jarvis219/gitloom-site/releases/latest/download/GitLoom.dmg
```

افتح صورة القرص واسحب GitLoom إلى مجلد التطبيقات.

## فتحه أول مرة

لم توثّق Apple تطبيق GitLoom بعد، لذا يحظر macOS التشغيل الأول. لفتحه:

1. افتح GitLoom مرة واحدة. سيقول macOS إنه لا يمكن فتحه.
2. انتقل إلى **إعدادات النظام ▸ الخصوصية والأمن** وانقر *فتح على أي حال* بجانب الرسالة الخاصة بـ GitLoom.
3. أكّد. ومن بعدها يُفتح GitLoom بشكل طبيعي.

لا تحتاج إلى ذلك إلا مرة واحدة. وتصل الإصدارات اللاحقة عبر أداة التحديث المدمجة في GitLoom (راجع [التحديثات](/ar/docs/updates/)).

## اختياري: أداة سطر الأوامر

اختر **GitLoom ▸ تثبيت أداة سطر الأوامر…** لإضافة الأمر `gitloom`، فيفتح `gitloom .` المجلد الذي أنت فيه. راجع [أداة سطر الأوامر gitloom](/ar/docs/the-gitloom-command-line-tool/).
