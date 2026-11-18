// The languages of the site: the same 16 as the app. `path` is the URL segment ('' = the root).
export interface Locale {
  code: string;
  path: string;
  hreflang: string;
  name: string;
  dir: 'ltr' | 'rtl';
  og: string;
}

export const locales: Locale[] = [
  { code: 'en', path: '', hreflang: 'en', name: 'English', dir: 'ltr', og: 'en_US' },
  { code: 'vi', path: 'vi', hreflang: 'vi', name: 'Tiếng Việt', dir: 'ltr', og: 'vi_VN' },
  { code: 'ja', path: 'ja', hreflang: 'ja', name: '日本語', dir: 'ltr', og: 'ja_JP' },
  { code: 'zh-Hans', path: 'zh-hans', hreflang: 'zh-Hans', name: '简体中文', dir: 'ltr', og: 'zh_CN' },
  { code: 'zh-Hant', path: 'zh-hant', hreflang: 'zh-Hant', name: '繁體中文', dir: 'ltr', og: 'zh_TW' },
  { code: 'ko', path: 'ko', hreflang: 'ko', name: '한국어', dir: 'ltr', og: 'ko_KR' },
  { code: 'de', path: 'de', hreflang: 'de', name: 'Deutsch', dir: 'ltr', og: 'de_DE' },
  { code: 'fr', path: 'fr', hreflang: 'fr', name: 'Français', dir: 'ltr', og: 'fr_FR' },
  { code: 'es', path: 'es', hreflang: 'es', name: 'Español', dir: 'ltr', og: 'es_ES' },
  { code: 'it', path: 'it', hreflang: 'it', name: 'Italiano', dir: 'ltr', og: 'it_IT' },
  { code: 'pt-BR', path: 'pt-br', hreflang: 'pt-BR', name: 'Português (Brasil)', dir: 'ltr', og: 'pt_BR' },
  { code: 'ru', path: 'ru', hreflang: 'ru', name: 'Русский', dir: 'ltr', og: 'ru_RU' },
  { code: 'uk', path: 'uk', hreflang: 'uk', name: 'Українська', dir: 'ltr', og: 'uk_UA' },
  { code: 'pl', path: 'pl', hreflang: 'pl', name: 'Polski', dir: 'ltr', og: 'pl_PL' },
  { code: 'tr', path: 'tr', hreflang: 'tr', name: 'Türkçe', dir: 'ltr', og: 'tr_TR' },
  { code: 'ar', path: 'ar', hreflang: 'ar', name: 'العربية', dir: 'rtl', og: 'ar_AR' },
];

export const defaultLocale = locales[0];

export function localeByPath(path: string | undefined): Locale {
  return locales.find((l) => l.path === (path ?? '')) ?? defaultLocale;
}
