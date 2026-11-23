// Turkish release notes, item for item with CHANGELOG.md (same order and count per version).
const notes: Record<string, string[]> = {
  '1.1.0': [
    'Açık ve koyu, on yeni tema: Fern, Tide, Blossom, Dune ve Graphite.',
    'Commit grafiği daha çok bir harita gibi okunuyor: dalın renginde bir şerit etiketinden başlayıp grafiğin içinden commit mesajına kadar uzanıyor; etkin daldan oluşturulan bir dal da birkaç commit uzunluğunda olsa bile onunla aynı hizada kalıyor.',
    'Etkin commit kolayca fark ediliyor: avatarının çevresinde çift halka ve satır boyunca daha belirgin bir şerit.',
    'Bir dalı başka bir dalın üzerine sürüklemek, hangisi etkin olursa olsun her zaman sürüklediğin dal üzerinde çalışır: f gerideyse *f Dalını develop Konumuna İleri Sar*, *f Dalını develop Üzerine Yeniden Temellendir*, *f Dalını develop Dalına Birleştir* (birleştirilecek bir şey yoksa gizlenir).',
    'Dal menüleri neyi sildiklerini tam olarak söylüyor: *“f” Yerel Dalını Sil* ya da dalın bir upstream’i varsa *“f” ve “origin/f” Dallarını Sil*. Adlar tırnak içinde gösteriliyor, böylece kısa bir ad artık kesilmiş gibi görünmüyor.',
    'Çok sayıda dal içeren bir satırın üzerine gelince açılan etiket listesi, her dal için sağ tık menüsünün tamamını sunuyor.',
    'Silme, Zorla İt ve diğer yıkıcı işlemlerin onaylarında kırmızı bir düğme var.',
    'Grafiğin son satırının altına tıklamak seçili commit’i korur; değişen dosya sayıları dar bir panelde de okunur kalır.',
    'Hazırlanmamış ve hazırlanmış dosyalar, başlıkları sabitlenmiş kendi bölmelerinde kayar; açık bir diff, dosyasını hazırladığında ya da hazırlıktan çıkardığında onu izler ve oradan commit yapmak yeni commit’i açar.',
    'Diff’in kapatma düğmesi sağ uçta ve tıklaması daha kolay.',
    'Kayıtlı bir token’ı vermeyen Anahtar Zinciri artık hesabı oturumu kapalı olarak işaretlemiyor.',
  ],
  '1.0.2': [
    'Yapay zekâ veri önizlemesi metin olarak okunuyor: yapay zekâya yönelik talimatlar ve isteğin gerçek satır sonlarıyla, gizlenen kısımlar işaretli, model ve sınırlar tek satırda. Okunaklı / JSON anahtarı tam isteği göstermeye devam ediyor.',
  ],
  '1.0.1': [
    'Son pencereyi kapatmak artık yalnızca onu gizliyor: Dock simgesine tıklamak, tüm depoları yeniden yüklemek yerine pencereyi sekmeleri, grafiği ve terminaliyle birlikte anında geri getiriyor.',
    'Pencere gerçekten kapatıldığında Dock simgesi depoların yerine boş bir başlangıç sayfası açıyordu.',
    'Deponun varsayılan hesabının token’ının süresi dolmuşsa ama başka bir hesap çalışıyorsa, pull request’ler artık GitHub’ın kayıtlı oturumu reddettiğini söylemiyor: o hesap sessizce atlanıyor ve oturum açması gereken hesaplar artık varsayılan olarak seçilmiyor.',
    'Token’lar Anahtar Zinciri’nden bir kez okunuyor; böylece meşgul bir Anahtar Zinciri artık reddedilmiş bir oturum gibi görünmüyor.',
    'Upstream’i uzak depoda silinmiş bir dalın yanındaki ⚠, üzerine geldiğinde kendini açıklıyor ve ne yapman gerektiğini söylüyor.',
  ],
  '1.0.0': [
    'İlk herkese açık sürüm. Henüz noter onaylı değil: ilk açılışta macOS onay ister — Sistem Ayarları ▸ Gizlilik ve Güvenlik ▸ Yine de Aç. Sonraki sürümler uygulamanın kendi güncelleyicisiyle gelir.',
    'Büyük depolar (100 bin+ commit) için commit grafiği, commit ayrıntıları ve diff’ler (yan yana ya da birleşik, sözcük düzeyinde), dosya geçmişi ve blame.',
    'Dosya, parça ya da satır bazında hazırlama; amend, sign-off, imzalama (GPG/SSH), ortak yazarlar ve ekip kurallarıyla commit’ler.',
    'Dallar ve etiketler, upstream takibiyle fetch / pull / push, stash’ler, çoğu işlem için geri alma ve yineleme.',
    'Grafikte sürükle-bırak ile merge, rebase, cherry-pick ve revert; etkileşimli rebase; üç yönlü çakışma düzenleyicisi.',
    'Sekmeler, birden çok pencere, her biri kendi sekmelerini, son depolarını ve commit kimliğini tutan profiller.',
    'Her depo için doğru anahtarı seçen SSH hesapları; pull request’ler, issue’lar, incelemeler ve Actions için GitHub ve GitLab oturumu.',
    'Yerleşik terminal, dosya düzenleyici, arama ve filtreler, worktree’ler, alt modüller, bisect, reflog ile kurtarma, Git LFS.',
    'Kendi sağlayıcınla yapay zekâ commit mesajları ve açıklamaları; diğer araçların GitLoom’u yönetebilmesi için bir MCP sunucusu.',
    'Tema, yerleşim ve klavye özelleştirme; 16 dil.',
  ],
};
export default notes;
