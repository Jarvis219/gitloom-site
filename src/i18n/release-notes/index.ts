// Translated release notes, one file per locale (<code>.ts: version → items, in CHANGELOG.md order).
// The English notes come from the GitHub release; a translation is used only when it has exactly as
// many items as that release, so a release that isn't translated yet (or was edited) shows in English.
const files = import.meta.glob<{ default: Record<string, string[]> }>('./*.ts', { eager: true });

export function translatedNotes(code: string, version: string, englishCount: number): string[] | null {
  const items = files[`./${code}.ts`]?.default?.[version];
  return items && items.length === englishCount ? items : null;
}
