// Italian release notes, item for item with CHANGELOG.md (same order and count per version).
const notes: Record<string, string[]> = {
  '1.1.0': [
    'Dieci nuovi temi, chiari e scuri: Fern, Tide, Blossom, Dune e Graphite.',
    'Il grafo dei commit si legge più come una mappa: una fascia del colore del branch va dalla sua etichetta, attraverso il grafo, fino al messaggio del commit, e un branch creato da quello attivo resta allineato con esso, anche se è lungo diversi commit.',
    'Il commit attivo si individua subito: un doppio anello attorno all’avatar e una fascia più marcata sulla riga.',
    'Trascinare un branch su un altro agisce sempre sul branch trascinato, qualunque sia quello attivo: *Fast-forward di f a develop* quando f è indietro, *Rebase di f su develop*, *Merge di f in develop* (nascosto quando non c’è nulla da unire).',
    'I menu dei branch dicono esattamente cosa eliminano: *Elimina branch locale “f”*, oppure *Elimina “f” e “origin/f”* quando ha un upstream. I nomi compaiono tra virgolette, così un nome breve non sembra più troncato.',
    'L’elenco delle etichette che si apre passando sopra una riga con molti branch offre il menu contestuale completo per ciascun branch.',
    'Le conferme di Elimina, Push forzato e altre azioni distruttive hanno un pulsante rosso.',
    'Un clic sotto l’ultima riga del grafo mantiene il commit selezionato; il numero di file modificati resta leggibile anche in un pannello stretto.',
    'I file non in stage e in stage scorrono in riquadri separati, con le intestazioni fisse; un diff aperto segue il suo file quando lo metti o lo togli dallo stage, e fare commit da lì apre il nuovo commit.',
    'Il pulsante di chiusura del diff è all’estremità destra ed è più facile da colpire.',
    'Un portachiavi che non restituisce un token salvato non segna più l’account come disconnesso.',
  ],
  '1.0.2': [
    'L’anteprima dei dati per l’IA si legge come testo: le istruzioni per l’IA e la tua richiesta con veri a capo, le parti oscurate segnalate, modello e limiti su una sola riga. Un selettore Leggibile / JSON mostra comunque la richiesta esatta.',
  ],
  '1.0.1': [
    'Chiudere l’ultima finestra ora la nasconde soltanto: un clic sull’icona nel Dock la riporta subito, con le sue schede, il grafo e il terminale, invece di ricaricare tutti i repository.',
    'Quando la finestra era stata chiusa davvero, l’icona nel Dock apriva una pagina iniziale vuota invece dei tuoi repository.',
    'Le pull request non dicono più che GitHub ha rifiutato l’accesso salvato quando l’account predefinito del repository ha un token scaduto ma un altro account funziona: quell’account viene saltato senza avvisi, e gli account che richiedono l’accesso non vengono più scelti per impostazione predefinita.',
    'I token vengono letti dal portachiavi una sola volta, così un portachiavi occupato non sembra più un accesso rifiutato.',
    'Il ⚠ accanto a un branch il cui upstream è stato eliminato sul remoto si spiega quando ci passi sopra e dice cosa fare.',
  ],
  '1.0.0': [
    'Prima versione pubblica. Non ancora notarizzata: alla prima apertura macOS chiede conferma — Impostazioni di Sistema ▸ Privacy e sicurezza ▸ Apri comunque. Le versioni successive arrivano tramite il sistema di aggiornamento integrato nell’app.',
    'Grafo dei commit per repository di grandi dimensioni (oltre 100.000 commit), dettagli e diff dei commit (affiancati o unificati, a livello di parola), cronologia dei file e blame.',
    'Stage per file, hunk o riga; commit con amend, sign-off, firma (GPG/SSH), coautori e convenzioni del team.',
    'Branch e tag, fetch / pull / push con tracciamento dell’upstream, stash, annulla e ripeti per la maggior parte delle operazioni.',
    'Merge, rebase, cherry-pick e revert trascinando sul grafo; rebase interattivo; un editor dei conflitti a tre vie.',
    'Schede, più finestre, profili che conservano ciascuno le proprie schede, i repository recenti e l’identità di commit.',
    'Account SSH che scelgono la chiave giusta per ogni repository; accesso a GitHub e GitLab per pull request, issue, revisioni e Actions.',
    'Terminale integrato, editor di file, ricerca e filtri, worktree, submodule, bisect, recupero tramite reflog, Git LFS.',
    'Messaggi di commit e spiegazioni con l’IA tramite il tuo provider; un server MCP perché altri strumenti possano pilotare GitLoom.',
    'Personalizzazione di temi, layout e tastiera; 16 lingue.',
  ],
};
export default notes;
