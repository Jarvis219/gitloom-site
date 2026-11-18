---
title: "أداة سطر الأوامر gitloom"
group: Tools
order: 24
summary: "ثبّت الأمر gitloom لفتح المستودعات وملفات الـdiff وسجل الملفات والـblame من الطرفية."
updated: 2026-11-18
---

يفتح الأمر `gitloom` تطبيق GitLoom من الطرفية. ويشغّل GitLoom عند الحاجة.

## تثبيته

اختر **GitLoom ▸ تثبيت أداة سطر الأوامر…**. يضيف هذا رابطًا في `~/.local/bin/gitloom`، دون كلمة مرور المسؤول. وإن لم يكن `~/.local/bin` ضمن PATH لديك بعد، يخبرك GitLoom؛ أضف هذا السطر إلى `~/.zshrc`:

```sh
export PATH="$HOME/.local/bin:$PATH"
```

لتثبيته لكل الصدفات دون تغيير PATH، استخدم *التثبيت في /usr/local/bin…* في **الإعدادات ▸ التكاملات ▸ أداة سطر الأوامر**. يطلب macOS كلمة مرور المسؤول. ويُظهر ذلك القسم أيضًا مكان تثبيت `gitloom`.

لا يستبدل GitLoom إلا رابطه الخاص. وإن كان هناك ملف آخر باسم `gitloom` بالفعل، يُترك كما هو ويخبرك GitLoom.

## الأوامر

| الأمر | ما يفعله |
|---|---|
| `gitloom [path]` | يفتح المستودع الذي يحتوي على `path` (الافتراضي: المجلد الحالي) |
| `gitloom clone <url> [dir]` | يفتح مربع حوار النسخ مملوءًا |
| `gitloom diff [<rev>]` | يفتح المستودع الذي أنت فيه ويحدّد `<rev>` (الافتراضي: صف التغييرات غير المُثبَّتة) |
| `gitloom log <file>` | يفتح سجل الملف |
| `gitloom blame <file>[:<line>]` | يفتح الـblame الخاص بالملف، عند ذلك السطر |
| `gitloom mcp` | يشغّل خادم MCP الخاص بـ GitLoom عبر stdio (راجع [خادم MCP](/ar/docs/mcp-server/)) |

على سبيل المثال:

```sh
cd ~/Projects/my-app
gitloom .
gitloom blame src/main.swift:42
```
