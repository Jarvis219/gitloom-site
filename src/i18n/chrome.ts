// Words for the shared nav and footer that the landing copy doesn't have. The pages they link to
// (docs, changelog, legal…) are in English for now; only these labels are translated.
export interface ChromeWords {
  docs: string; changelog: string; compare: string; press: string; legal: string;
  privacy: string; terms: string; security: string; updateFeed: string; issues: string;
}

const words: Record<string, ChromeWords> = {
  en: { docs: 'Docs', changelog: 'Changelog', compare: 'Compare', press: 'Press kit', legal: 'Legal', privacy: 'Privacy', terms: 'Terms', security: 'Security', updateFeed: 'Update feed', issues: 'Issues on GitHub' },
  vi: { docs: 'Tài liệu', changelog: 'Nhật ký thay đổi', compare: 'So sánh', press: 'Bộ tài liệu báo chí', legal: 'Pháp lý', privacy: 'Quyền riêng tư', terms: 'Điều khoản', security: 'Bảo mật', updateFeed: 'Nguồn cập nhật', issues: 'Issues trên GitHub' },
  ja: { docs: 'ドキュメント', changelog: '変更履歴', compare: '比較', press: 'プレスキット', legal: '法的情報', privacy: 'プライバシー', terms: '利用規約', security: 'セキュリティ', updateFeed: 'アップデートフィード', issues: 'GitHub の Issues' },
  'zh-Hans': { docs: '文档', changelog: '更新日志', compare: '对比', press: '媒体资料', legal: '法律', privacy: '隐私', terms: '条款', security: '安全', updateFeed: '更新源', issues: 'GitHub Issues' },
  'zh-Hant': { docs: '文件', changelog: '更新紀錄', compare: '比較', press: '媒體資料', legal: '法律', privacy: '隱私', terms: '條款', security: '安全性', updateFeed: '更新來源', issues: 'GitHub Issues' },
  ko: { docs: '문서', changelog: '변경 내역', compare: '비교', press: '프레스 키트', legal: '법적 고지', privacy: '개인정보', terms: '약관', security: '보안', updateFeed: '업데이트 피드', issues: 'GitHub Issues' },
  de: { docs: 'Doku', changelog: 'Änderungen', compare: 'Vergleich', press: 'Pressekit', legal: 'Rechtliches', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', security: 'Sicherheit', updateFeed: 'Update-Feed', issues: 'Issues auf GitHub' },
  fr: { docs: 'Docs', changelog: 'Nouveautés', compare: 'Comparer', press: 'Kit presse', legal: 'Mentions légales', privacy: 'Confidentialité', terms: 'Conditions', security: 'Sécurité', updateFeed: 'Flux de mises à jour', issues: 'Issues sur GitHub' },
  es: { docs: 'Documentación', changelog: 'Novedades', compare: 'Comparar', press: 'Kit de prensa', legal: 'Legal', privacy: 'Privacidad', terms: 'Términos', security: 'Seguridad', updateFeed: 'Feed de actualizaciones', issues: 'Issues en GitHub' },
  it: { docs: 'Documentazione', changelog: 'Novità', compare: 'Confronto', press: 'Press kit', legal: 'Note legali', privacy: 'Privacy', terms: 'Termini', security: 'Sicurezza', updateFeed: 'Feed degli aggiornamenti', issues: 'Issue su GitHub' },
  'pt-BR': { docs: 'Documentação', changelog: 'Novidades', compare: 'Comparar', press: 'Kit de imprensa', legal: 'Legal', privacy: 'Privacidade', terms: 'Termos', security: 'Segurança', updateFeed: 'Feed de atualizações', issues: 'Issues no GitHub' },
  ru: { docs: 'Документация', changelog: 'Изменения', compare: 'Сравнение', press: 'Для прессы', legal: 'Правовая информация', privacy: 'Конфиденциальность', terms: 'Условия', security: 'Безопасность', updateFeed: 'Лента обновлений', issues: 'Issues на GitHub' },
  uk: { docs: 'Документація', changelog: 'Зміни', compare: 'Порівняння', press: 'Для преси', legal: 'Правова інформація', privacy: 'Приватність', terms: 'Умови', security: 'Безпека', updateFeed: 'Стрічка оновлень', issues: 'Issues на GitHub' },
  pl: { docs: 'Dokumentacja', changelog: 'Lista zmian', compare: 'Porównanie', press: 'Dla prasy', legal: 'Informacje prawne', privacy: 'Prywatność', terms: 'Warunki', security: 'Bezpieczeństwo', updateFeed: 'Kanał aktualizacji', issues: 'Issues na GitHubie' },
  tr: { docs: 'Belgeler', changelog: 'Değişiklikler', compare: 'Karşılaştır', press: 'Basın kiti', legal: 'Yasal', privacy: 'Gizlilik', terms: 'Koşullar', security: 'Güvenlik', updateFeed: 'Güncelleme akışı', issues: 'GitHub Issues' },
  ar: { docs: 'الوثائق', changelog: 'سجل التغييرات', compare: 'مقارنة', press: 'الملف الصحفي', legal: 'قانوني', privacy: 'الخصوصية', terms: 'الشروط', security: 'الأمان', updateFeed: 'موجز التحديثات', issues: 'المشكلات على GitHub' },
};

export const chromeWords = (code: string): ChromeWords => words[code] ?? words.en;
