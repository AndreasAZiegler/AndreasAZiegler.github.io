(() => {
  const modal = document.getElementById('bibtex-modal');
  if (!modal) return;

  const titleEl = document.getElementById('bibtex-modal-title');
  const contentEl = document.getElementById('bibtex-modal-content');
  const closeButton = modal.querySelector('.bibtex-modal__close');
  const cache = new Map();

  let lastActiveElement = null;

  const openModal = () => {
    if (!modal.hidden) return;
    lastActiveElement = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('bibtex-modal-open');
    (closeButton || modal).focus?.();
  };

  const closeModal = () => {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('bibtex-modal-open');
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
    lastActiveElement = null;
  };

  const setTitle = (title) => {
    if (!titleEl) return;
    titleEl.textContent = title ? `BibTeX — ${title}` : 'BibTeX';
  };

  const setContent = (text) => {
    if (!contentEl) return;
    contentEl.textContent = text || '';
  };

  const loadBibtex = async (href) => {
    if (cache.has(href)) return cache.get(href);
    const res = await fetch(href, { headers: { Accept: 'text/plain' } });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const text = await res.text();
    cache.set(href, text);
    return text;
  };

  const showBibtex = async ({ href, title }) => {
    setTitle(title);
    setContent('Loading…');
    openModal();

    try {
      const bibtex = await loadBibtex(href);
      setContent(`${bibtex.trim()}\n`);
    } catch (err) {
      setContent(`Failed to load BibTeX.\n\n${href}\n\n${String(err)}`);
    }
  };

  document.addEventListener('click', (e) => {
    const link = e.target?.closest?.('a.cite-link');
    if (!link) return;

    if (e.defaultPrevented) return;
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const href = link.getAttribute('href');
    if (!href) return;

    e.preventDefault();
    void showBibtex({ href, title: link.dataset.citeTitle });
  });

  modal.addEventListener('click', (e) => {
    const closeTarget = e.target?.closest?.('[data-bibtex-close]');
    if (closeTarget) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();

