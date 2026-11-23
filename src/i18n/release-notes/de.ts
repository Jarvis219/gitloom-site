// German release notes, item for item with CHANGELOG.md (same order and count per version).
const notes: Record<string, string[]> = {
  '1.1.0': [
    'Zehn neue Themes, hell und dunkel: Fern, Tide, Blossom, Dune und Graphite.',
    'Der Commit-Graph liest sich eher wie eine Karte: Ein Band in der Farbe des Branches führt vom Label durch den Graphen bis zur Commit-Nachricht, und ein Branch, der vom ausgecheckten abzweigt, bleibt mit ihm in einer Linie – auch wenn er mehrere Commits lang ist.',
    'Der ausgecheckte Commit fällt sofort auf: ein doppelter Ring um seinen Avatar und ein kräftigeres Band über die Zeile.',
    'Ziehst du einen Branch auf einen anderen, wirkt die Aktion immer auf den gezogenen Branch, egal welcher ausgecheckt ist: *f per Fast-Forward auf develop bringen*, wenn f zurückliegt, *f auf develop rebasen*, *f in develop mergen* (ausgeblendet, wenn es nichts zu mergen gibt).',
    'Branch-Menüs sagen genau, was sie löschen: *Lokalen Branch „f“ löschen* oder, wenn es einen Upstream gibt, *„f“ und „origin/f“ löschen*. Namen stehen in Anführungszeichen, damit ein kurzer Name nicht mehr abgeschnitten wirkt.',
    'Die Label-Liste, die beim Überfahren einer Zeile mit vielen Branches aufgeht, bietet für jeden Branch das vollständige Kontextmenü.',
    'Löschen, Force-Push und andere destruktive Bestätigungen haben einen roten Button.',
    'Ein Klick unterhalb der letzten Graph-Zeile behält den ausgewählten Commit; die Zahl geänderter Dateien bleibt auch in einem schmalen Bereich lesbar.',
    'Nicht gestagte und gestagte Dateien scrollen in eigenen Bereichen mit fixierten Kopfzeilen; ein offener Diff folgt seiner Datei, wenn du sie stagst oder unstagst, und ein Commit von dort öffnet den neuen Commit.',
    'Der Schließen-Button des Diffs sitzt am rechten Rand und ist leichter zu treffen.',
    'Gibt der Schlüsselbund ein gespeichertes Token nicht heraus, wird das Konto nicht mehr als abgemeldet markiert.',
  ],
  '1.0.2': [
    'Die KI-Datenvorschau liest sich als Text: die Anweisungen an die KI und deine Anfrage mit echten Zeilenumbrüchen, Schwärzungen markiert, Modell und Limits in einer Zeile. Ein Umschalter Lesbar / JSON zeigt weiterhin die exakte Anfrage.',
  ],
  '1.0.1': [
    'Das Schließen des letzten Fensters blendet es jetzt nur aus: Ein Klick auf das Dock-Symbol holt es sofort zurück, mit Tabs, Graph und Terminal, statt alle Repositorys neu zu laden.',
    'War das Fenster wirklich geschlossen, öffnete das Dock-Symbol eine leere Startseite statt deiner Repositorys.',
    'Pull Requests melden nicht mehr, GitHub habe die gespeicherte Anmeldung abgelehnt, wenn das Standardkonto des Repositorys ein abgelaufenes Token hat, ein anderes Konto aber funktioniert: Dieses Konto wird still übersprungen, und Konten, die eine Anmeldung brauchen, werden nicht mehr standardmäßig gewählt.',
    'Tokens werden nur einmal aus dem Schlüsselbund gelesen, sodass ein ausgelasteter Schlüsselbund nicht mehr wie eine abgelehnte Anmeldung aussieht.',
    'Das ⚠ neben einem Branch, dessen Upstream auf dem Remote gelöscht wurde, erklärt sich beim Darüberfahren und sagt, was zu tun ist.',
  ],
  '1.0.0': [
    'Erste öffentliche Version. Noch nicht notarisiert: Beim ersten Öffnen fragt macOS nach – Systemeinstellungen ▸ Datenschutz & Sicherheit ▸ Dennoch öffnen. Spätere Versionen kommen über den eingebauten Updater der App.',
    'Commit-Graph für große Repositorys (100k+ Commits), Commit-Details und Diffs (nebeneinander oder vereinheitlicht, auf Wortebene), Dateiverlauf und Blame.',
    'Stagen nach Datei, Hunk oder Zeile; Commits mit Amend, Sign-off, Signatur (GPG/SSH), Co-Autoren und Team-Konventionen.',
    'Branches und Tags, Fetch / Pull / Push mit Upstream-Tracking, Stashes, Widerrufen und Wiederholen für die meisten Operationen.',
    'Merge, Rebase, Cherry-Pick und Revert per Drag-and-drop im Graphen; interaktiver Rebase; ein Drei-Wege-Konflikteditor.',
    'Tabs, mehrere Fenster, Profile mit jeweils eigenen Tabs, zuletzt geöffneten Repositorys und eigener Commit-Identität.',
    'SSH-Konten, die pro Repository den richtigen Schlüssel wählen; GitHub- und GitLab-Anmeldung für Pull Requests, Issues, Reviews und Actions.',
    'Integriertes Terminal, Dateieditor, Suche und Filter, Worktrees, Submodule, Bisect, Wiederherstellung per Reflog, Git LFS.',
    'KI-Commit-Nachrichten und -Erklärungen mit deinem eigenen Anbieter; ein MCP-Server, über den andere Tools GitLoom steuern können.',
    'Anpassbare Themes, Layout und Tastatur; 16 Sprachen.',
  ],
};
export default notes;
