/* ============================================================
   js/render.js  —  DOM rendering for all dynamic sections
   Reads from window.PUBLICATIONS / PROJECTS / GALLERY / VIDEOS
   defined in data/content.js
   ============================================================ */

/* ── Intersection-observer fade-in ─────────────────────────── */
function observeFadeUps() {
  const ob = new IntersectionObserver(entries => {
    entries.forEach(x => {
      if (x.isIntersecting) {
        x.target.classList.add('visible');
        ob.unobserve(x.target);
      }
    });
  }, { threshold: .08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => ob.observe(el));
}


/* ── Publications ───────────────────────────────────────────── */
(function () {
  const cont = document.getElementById('pub-list');
  if (!cont) return;

  function render(yearFilter) {
    cont.innerHTML = '';
    const years = [...new Set(PUBLICATIONS.map(p => p.year))].sort((a, b) => b - a);
    let n = PUBLICATIONS.length;

    years.forEach(yr => {
      const items = PUBLICATIONS.filter(p =>
        p.year === yr && (yearFilter === 'all' || p.year === +yearFilter)
      );
      if (!items.length) return;

      // Year heading
      const ye = document.createElement('div');
      ye.className = 'pub-year fade-up';
      ye.textContent = yr;
      cont.appendChild(ye);

      items.forEach(pub => {
        const row = document.createElement('div');
        row.className = 'pub-row fade-up';
        row.innerHTML = `
          <span class="pub-n">[${n--}]</span>
          <div>
            <div class="pub-title">${pub.title}</div>
            <div class="pub-authors">${pub.authors}</div>
            <div class="pub-venue">${pub.venue}</div>
            ${pub.url
              ? `<a href="${pub.url}" class="pub-link" target="_blank" rel="noopener">View Publication →</a>`
              : ''}
          </div>`;
        cont.appendChild(row);
      });
    });

    observeFadeUps();
  }

  render('all');

  document.querySelectorAll('.pf').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pf').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.year);
    });
  });
})();


/* ── Projects ───────────────────────────────────────────────── */
(function () {
  const grid = document.getElementById('proj-grid');
  if (!grid) return;

  PROJECTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'proj-card fade-up';
    card.innerHTML = `
      <div class="proj-type">${p.type}</div>
      <div class="proj-name">${p.name}</div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      ${p.url
        ? `<a href="${p.url}" class="proj-link" target="_blank" rel="noopener">View on GitHub →</a>`
        : `<span class="proj-link" style="color:var(--text-ghost);cursor:default;">Coming soon</span>`}`;
    grid.appendChild(card);
  });

  observeFadeUps();
})();


/* ── Gallery ────────────────────────────────────────────────── */
(function () {
  const grid = document.getElementById('gal-grid');
  if (!grid) return;

  const lbx  = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lb-cap');

  // Lightbox close handlers
  document.getElementById('lb-close').addEventListener('click', () => lbx.classList.remove('open'));
  lbx.addEventListener('click', e => { if (e.target === lbx) lbx.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lbx.classList.remove('open'); });

  GALLERY.forEach(item => {
    const d = document.createElement('div');
    d.className = 'gal-item fade-up';

    if (item.src) {
      d.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy"/>
        <div class="gal-cap"><p>${item.caption}</p></div>`;
      d.addEventListener('click', () => {
        lbImg.src = item.src;
        lbCap.textContent = item.caption;
        lbx.classList.add('open');
      });
    } else {
      d.innerHTML = `
        <div class="gal-placeholder">
          <span class="gal-ket">${item.dirac}</span>
          <span class="gal-label">add image</span>
        </div>
        <div class="gal-cap"><p>${item.caption}</p></div>`;
    }

    grid.appendChild(d);
  });

  observeFadeUps();
})();


/* ── Videos ─────────────────────────────────────────────────── */
(function () {
  const grid = document.getElementById('vid-grid');
  if (!grid) return;

  if (!VIDEOS.length) {
    grid.innerHTML = `<div class="vid-empty">No videos yet &nbsp;·&nbsp; add your talks in <code>data/content.js</code></div>`;
    return;
  }

  VIDEOS.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vid-card fade-up';

    let embed = '';
    if (v.type === 'youtube')
      embed = `<div class="vid-embed"><iframe src="https://www.youtube.com/embed/${v.videoId}"
                 allowfullscreen loading="lazy" title="${v.title}"></iframe></div>`;
    else if (v.type === 'vimeo')
      embed = `<div class="vid-embed"><iframe src="https://player.vimeo.com/video/${v.videoId}"
                 allowfullscreen loading="lazy" title="${v.title}"></iframe></div>`;

    card.innerHTML = `
      ${embed}
      <div class="vid-info">
        <div class="vid-title">${v.title}</div>
        <div class="vid-meta">${v.meta}</div>
      </div>`;
    grid.appendChild(card);
  });

  observeFadeUps();
})();


/* ── Peer Review ────────────────────────────────────────────── */
(function () {
  const cont = document.getElementById('review-list');
  if (!cont || typeof REVIEWS === 'undefined') return;

  function group(label, items, line2Key) {
    if (!items || !items.length) return;

    const head = document.createElement('div');
    head.className = 'rev-group fade-up';
    head.textContent = label;
    cont.appendChild(head);

    const ul = document.createElement('ul');
    ul.className = 'rev-list fade-up';
    items.forEach(it => {
      const li = document.createElement('li');
      li.innerHTML =
        `<span class="rev-name">${it.name}</span>` +
        (it[line2Key] ? `<span class="rev-sub">${it[line2Key]}</span>` : '');
      ul.appendChild(li);
    });
    cont.appendChild(ul);
  }

  group('Journals',    REVIEWS.journals,    'publisher');
  group('Conferences', REVIEWS.conferences, 'full');

  observeFadeUps();
})();
