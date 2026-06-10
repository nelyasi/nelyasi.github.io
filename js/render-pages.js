/* ============================================================
   js/render-pages.js  —  Rendering for hobbies.html & electronics.html
   Reads from window.FISHING_PHOTOS / FISHING_VIDEOS / FISHING_SPOTS
   and window.ELECTRONICS_POSTS defined in data/content.js
   ============================================================ */

/* ── Shared: fade-up observer ───────────────────────────────── */
function observeFadeUps() {
  const ob = new IntersectionObserver(entries => {
    entries.forEach(x => {
      if (x.isIntersecting) { x.target.classList.add('visible'); ob.unobserve(x.target); }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -24px 0px' });
  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => ob.observe(el));
}

/* ── Shared: embed builder ──────────────────────────────────── */
function buildEmbed(video, titleFallback) {
  if (!video) return '';
  const title = video.title || titleFallback || '';
  if (video.type === 'youtube')
    return `<div class="embed-wrap"><iframe src="https://www.youtube.com/embed/${video.videoId}"
      allowfullscreen loading="lazy" title="${title}"></iframe></div>`;
  if (video.type === 'vimeo')
    return `<div class="embed-wrap"><iframe src="https://player.vimeo.com/video/${video.videoId}"
      allowfullscreen loading="lazy" title="${title}"></iframe></div>`;
  return '';
}

/* ════════════════════════════════════════════════════════
   HOBBIES PAGE
   ════════════════════════════════════════════════════════ */

/* ── Info cards (types of fishing) ─────────────────────── */
(function () {
  const grid = document.getElementById('fishing-spots');
  if (!grid || !window.FISHING_SPOTS) return;
  FISHING_SPOTS.forEach(s => {
    const card = document.createElement('div');
    card.className = 'hobby-card fade-up';
    card.innerHTML = `
      <div class="hobby-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="hobby-tags">${s.tags.map(t => `<span>${t}</span>`).join('')}</div>`;
    grid.appendChild(card);
  });
  observeFadeUps();
})();

/* ── Fishing photos (gallery with lightbox) ─────────────── */
(function () {
  const grid   = document.getElementById('fishing-photos');
  const wrap   = document.getElementById('fishing-photo-section');
  if (!grid || !window.FISHING_PHOTOS) return;

  if (!FISHING_PHOTOS.length) {
    grid.innerHTML = `<div class="empty-hint">
      No photos yet — add them in <code>data/content.js</code> under <code>FISHING_PHOTOS</code>.
    </div>`;
    return;
  }

  // Lightbox elements
  const lbx  = document.getElementById('fishing-lightbox');
  const lbImg = document.getElementById('fl-img');
  const lbCap = document.getElementById('fl-cap');
  if (lbx) {
    document.getElementById('fl-close').addEventListener('click', () => lbx.classList.remove('open'));
    lbx.addEventListener('click', e => { if (e.target === lbx) lbx.classList.remove('open'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lbx.classList.remove('open'); });
  }

  FISHING_PHOTOS.forEach(item => {
    const d = document.createElement('div');
    d.className = 'gal-item fade-up';
    d.innerHTML = `
      <img src="${item.src}" alt="${item.caption}" loading="lazy"/>
      <div class="gal-cap">
        <p>${item.caption}</p>
        ${item.location ? `<span class="gal-loc">📍 ${item.location}</span>` : ''}
      </div>`;
    d.addEventListener('click', () => {
      if (!lbx) return;
      lbImg.src = item.src;
      lbCap.textContent = item.caption;
      lbx.classList.add('open');
    });
    grid.appendChild(d);
  });
  observeFadeUps();
})();

/* ── Fishing videos ─────────────────────────────────────── */
(function () {
  const grid = document.getElementById('fishing-videos');
  if (!grid || !window.FISHING_VIDEOS) return;

  if (!FISHING_VIDEOS.length) {
    grid.innerHTML = `<div class="empty-hint">
      No videos yet — add them in <code>data/content.js</code> under <code>FISHING_VIDEOS</code>.
    </div>`;
    return;
  }

  FISHING_VIDEOS.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vid-card fade-up';
    card.innerHTML = `
      ${buildEmbed(v, v.title)}
      <div class="vid-info">
        <div class="vid-title">${v.title}</div>
        <div class="vid-meta">${v.meta || ''}</div>
      </div>`;
    grid.appendChild(card);
  });
  observeFadeUps();
})();


/* ════════════════════════════════════════════════════════
   ELECTRONICS PAGE
   ════════════════════════════════════════════════════════ */

(function () {
  const feed = document.getElementById('electronics-feed');
  if (!feed || !window.ELECTRONICS_POSTS) return;

  if (!ELECTRONICS_POSTS.length) {
    feed.innerHTML = `<div class="empty-hint blog-empty">
      No posts yet — add your first one in <code>data/content.js</code> under <code>ELECTRONICS_POSTS</code>.
      <br>Each post can have text paragraphs, photos, and an embedded video.
    </div>`;
    return;
  }

  // Sort newest first
  const posts = [...ELECTRONICS_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  posts.forEach(post => {
    const d = new Date(post.date);
    const dateStr = d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

    // Build image HTML
    const imagesHtml = (post.images && post.images.length)
      ? `<div class="post-images ${post.images.length === 1 ? 'single' : 'multi'}">
          ${post.images.map(img => `
            <figure class="post-fig">
              <img src="${img.src}" alt="${img.caption || ''}" loading="lazy"/>
              ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ''}
            </figure>`).join('')}
        </div>`
      : '';

    // Build text paragraphs
    const textHtml = (post.text || []).map(p => `<p>${p}</p>`).join('');

    // Build video
    const videoHtml = post.video ? buildEmbed(post.video, post.title) : '';

    const article = document.createElement('article');
    article.className = 'blog-post fade-up';
    article.innerHTML = `
      <header class="post-header">
        <div class="post-meta">
          <span class="post-date">${dateStr}</span>
          <div class="post-tags">${(post.tags || []).map(t => `<span>${t}</span>`).join('')}</div>
        </div>
        <h2 class="post-title">${post.title}</h2>
      </header>
      <div class="post-body">
        ${textHtml}
        ${imagesHtml}
        ${videoHtml}
      </div>`;
    feed.appendChild(article);
  });

  observeFadeUps();
})();
