// Polish release notes, item for item with CHANGELOG.md (same order and count per version).
const notes: Record<string, string[]> = {
  '1.1.0': [
    'Dziesięć nowych motywów, jasnych i ciemnych: Fern, Tide, Blossom, Dune i Graphite.',
    'Graf commitów czyta się bardziej jak mapę: pasek w kolorze gałęzi biegnie od jej etykiety przez graf aż do opisu commita, a gałąź utworzona z bieżącej pozostaje z nią w jednej linii, nawet gdy ma kilka commitów.',
    'Bieżący commit łatwo wypatrzyć: podwójny pierścień wokół awatara i wyraźniejszy pasek w wierszu.',
    'Przeciągnięcie gałęzi na inną zawsze działa na przeciąganą gałąź, niezależnie od tego, która jest bieżąca: *Przewiń f do przodu do develop*, gdy f jest w tyle, *Rebase f na develop*, *Scal f z develop* (ukryte, gdy nie ma czego scalać).',
    'Menu gałęzi mówią dokładnie, co usuwają: *Usuń lokalną gałąź „f”* albo *Usuń „f” i „origin/f”*, gdy gałąź ma upstream. Nazwy są w cudzysłowie, więc krótka nazwa nie wygląda już na uciętą.',
    'Lista etykiet otwierana po najechaniu na wiersz z wieloma gałęziami ma pełne menu kontekstowe dla każdej gałęzi.',
    'Potwierdzenia usuwania, wymuszonego wypchnięcia i innych destrukcyjnych działań mają czerwony przycisk.',
    'Kliknięcie pod ostatnim wierszem grafu zachowuje zaznaczony commit; liczba zmienionych plików pozostaje czytelna w wąskim panelu.',
    'Pliki niezaindeksowane i zaindeksowane przewijają się we własnych panelach z przypiętymi nagłówkami; otwarty diff podąża za swoim plikiem, gdy go indeksujesz lub wycofujesz z indeksu, a commit z jego poziomu otwiera nowy commit.',
    'Przycisk zamykania diffu jest na prawym końcu i łatwiej w niego trafić.',
    'Pęk kluczy, który nie chce wydać zapisanego tokenu, nie oznacza już konta jako wylogowanego.',
  ],
  '1.0.2': [
    'Podgląd danych dla AI czyta się jak tekst: instrukcje dla AI i twoje zapytanie z prawdziwymi podziałami wierszy, oznaczone zamaskowane fragmenty, a model i limity w jednym wierszu. Przełącznik Czytelnie / JSON nadal pokazuje dokładne zapytanie.',
  ],
  '1.0.1': [
    'Zamknięcie ostatniego okna teraz tylko je ukrywa: kliknięcie ikony w Docku od razu je przywraca, razem z kartami, grafem i terminalem, zamiast ponownie wczytywać wszystkie repozytoria.',
    'Gdy okno zostało naprawdę zamknięte, ikona w Docku otwierała pustą stronę startową zamiast twoich repozytoriów.',
    'Pull requesty nie twierdzą już, że GitHub odrzucił zapisane logowanie, gdy domyślne konto repozytorium ma wygasły token, a inne konto działa: takie konto jest po cichu pomijane, a konta wymagające zalogowania nie są już wybierane domyślnie.',
    'Tokeny są odczytywane z pęku kluczy tylko raz, więc zajęty pęk kluczy nie wygląda już jak odrzucone logowanie.',
    'Znak ⚠ obok gałęzi, której upstream usunięto w repozytorium zdalnym, po najechaniu wyjaśnia, co oznacza i co zrobić.',
  ],
  '1.0.0': [
    'Pierwsze publiczne wydanie. Jeszcze bez notaryzacji: przy pierwszym otwarciu macOS prosi o potwierdzenie — Ustawienia systemowe ▸ Prywatność i ochrona ▸ Otwórz mimo to. Kolejne wersje przychodzą przez wbudowany mechanizm aktualizacji aplikacji.',
    'Graf commitów dla dużych repozytoriów (ponad 100 tys. commitów), szczegóły i diffy commitów (obok siebie lub ujednolicone, z dokładnością do słowa), historia plików i blame.',
    'Indeksowanie plikami, fragmentami lub wierszami; commity z amend, sign-off, podpisem (GPG/SSH), współautorami i konwencjami zespołu.',
    'Gałęzie i tagi, fetch / pull / push ze śledzeniem upstreamu, schowki (stash), cofanie i ponawianie większości operacji.',
    'Merge, rebase, cherry-pick i revert przez przeciąganie na grafie; interaktywny rebase; trójstronny edytor konfliktów.',
    'Karty, wiele okien, profile, z których każdy ma własne karty, ostatnie repozytoria i tożsamość commitów.',
    'Konta SSH, które dobierają właściwy klucz do każdego repozytorium; logowanie do GitHuba i GitLaba dla pull requestów, issues, recenzji i Actions.',
    'Wbudowany terminal, edytor plików, wyszukiwanie i filtry, worktree, submoduły, bisect, odzyskiwanie z reflogu, Git LFS.',
    'Opisy commitów i wyjaśnienia od AI z własnym dostawcą; serwer MCP, dzięki któremu inne narzędzia mogą sterować aplikacją GitLoom.',
    'Dostosowywanie motywów, układu i klawiatury; 16 języków.',
  ],
};
export default notes;
