// Sub-page text per language: src/i18n/pages/<locale code>.ts (default export, same shape as en.ts).
// Anything a translation leaves out falls back to English.
import { en, type PagesCopy } from './en';

const files = import.meta.glob<{ default: PagesCopy }>(['./*.ts', '!./index.ts', '!./en.ts'], { eager: true });
const byCode: Record<string, PagesCopy> = { en };
for (const [file, mod] of Object.entries(files)) byCode[file.slice(2, -3)] = merge(en, mod.default);

function merge<T>(base: T, over: unknown): T {
  if (Array.isArray(base)) return (Array.isArray(over) && over.length === base.length ? over : base) as T;
  if (base && typeof base === 'object') {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(base)) out[k] = merge((base as Record<string, unknown>)[k], (over as Record<string, unknown> | undefined)?.[k]);
    return out as T;
  }
  return (typeof over === typeof base ? over : base) as T;
}

export const pagesCopy = (code: string): PagesCopy => byCode[code] ?? en;
export const hasPagesCopy = (code: string) => code in byCode;
export type { PagesCopy };
