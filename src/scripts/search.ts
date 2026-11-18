// Site search over a static index built at deploy (/search-index.json). No server, no tracking.
export interface Entry { t: string; g: string; u: string; s: string; x: string }

let index: Promise<Entry[]> | null = null;
export const loadIndex = () => (index ??= fetch('/search-index.json').then((r) => (r.ok ? r.json() : [])).catch(() => []));

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

export function search(entries: Entry[], query: string, limit = 8): Entry[] {
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const scored: [number, Entry][] = [];
  for (const e of entries) {
    const title = fold(e.t), body = fold(`${e.s} ${e.x}`);
    let score = 0;
    for (const w of words) {
      if (title.includes(w)) score += title.startsWith(w) ? 6 : 4;
      else if (body.includes(w)) score += 1;
      else { score = 0; break; }
    }
    if (score) scored.push([score, e]);
  }
  return scored.sort((a, b) => b[0] - a[0]).slice(0, limit).map(([, e]) => e);
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function initSearch() {
  const forms = [...document.querySelectorAll<HTMLFormElement>('[data-search]')];
  if (!forms.length) return;
  // ⌘K or / focuses the first search field on the page (not while typing elsewhere).
  addEventListener('keydown', (e) => {
    const typing = e.target instanceof Element && e.target.closest('input,textarea,select,[contenteditable]');
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
      const input = forms[0].querySelector('input');
      if (input) { e.preventDefault(); input.focus(); input.select(); }
    }
  });
  for (const form of forms) {
    const input = form.querySelector('input')!;
    const list = form.querySelector<HTMLUListElement>('[role=listbox]')!;
    const status = form.querySelector('[data-search-status]');
    let active = -1, results: Entry[] = [];
    const close = () => { list.hidden = true; input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); active = -1; };
    const highlight = (i: number) => {
      const items = [...list.querySelectorAll<HTMLElement>('[role=option]')];
      items.forEach((el, k) => el.setAttribute('aria-selected', String(k === i)));
      active = i;
      if (items[i]) { input.setAttribute('aria-activedescendant', items[i].id); items[i].scrollIntoView({ block: 'nearest' }); }
    };
    const render = async () => {
      const q = input.value.trim();
      if (!q) { close(); return; }
      results = search(await loadIndex(), q);
      if (!results.length) {
        list.innerHTML = `<li class="none">Nothing matches “${esc(q)}”. Try fewer words, or <a href="https://github.com/Jarvis219/gitloom-site/issues">ask on GitHub Issues</a>.</li>`;
      } else {
        list.innerHTML = results.map((r, i) => `<li role="option" id="${input.id}-o${i}" aria-selected="false"><a href="${r.u}"><b>${esc(r.t)}</b><span>${esc(r.g)}</span></a></li>`).join('');
      }
      if (status) status.textContent = results.length ? `${results.length} results` : 'No results';
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
      active = -1;
    };
    input.addEventListener('focus', () => { loadIndex(); });
    input.addEventListener('input', render);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' && results.length) { e.preventDefault(); highlight(Math.min(results.length - 1, active + 1)); }
      else if (e.key === 'ArrowUp' && results.length) { e.preventDefault(); highlight(Math.max(0, active - 1)); }
      else if (e.key === 'Enter' && active >= 0 && results[active]) { e.preventDefault(); location.href = results[active].u; }
      else if (e.key === 'Escape') { if (input.value) { input.value = ''; close(); } else input.blur(); }
    });
    form.addEventListener('focusout', (e) => { if (!form.contains(e.relatedTarget as Node)) setTimeout(close, 120); });
  }
}
