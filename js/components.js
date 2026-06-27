/* =============================================
   ACJ UNIBEN — Shared Components
   Injected on every page
   ============================================= */

const ROOT = document.documentElement.dataset.root || '';

function getNavActiveClass(page) {
  const path = window.location.pathname;
  if (page === 'home' && (path.endsWith('index.html') || path.endsWith('/'))) return 'active';
  if (page !== 'home' && path.includes(page)) return 'active';
  return '';
}

function renderTicker() {
  const headlines = [
    'ACJ UNIBEN wins Best Campus Media Organisation at 2024 NUJ Awards',
    'Call for entries: Annual Campus Journalism Excellence Awards now open',
    'ACJ UNIBEN partners with NTA Benin for media training programme',
    'Editorial board releases new editorial standards and ethics handbook',
    'Correspondent training workshop holds at Faculty of Arts, UNIBEN',
    'ACJ UNIBEN launches investigative reporting mentorship scheme',
    'Campus media freedom summit scheduled for July — all students welcome',
  ];
  const doubled = [...headlines, ...headlines];
  return doubled.map(h => `<span>${h}</span>`).join('');
}

function renderHeader(activePage) {
  return `
  <div class="news-ticker">
    <div class="ticker-label">BREAKING</div>
    <div class="ticker-track">${renderTicker()}</div>
  </div>

  <div class="top-bar">
    <div class="container">
      <div class="top-bar-inner">
        <span class="top-bar-date">${formatDate(new Date())} &nbsp;|&nbsp; University of Benin, Benin City, Nigeria</span>
        <div class="top-bar-social">
          <a href="#" aria-label="Twitter/X">𝕏 Twitter</a>
          <a href="#" aria-label="Instagram">📷 Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="YouTube">YouTube</a>
        </div>
      </div>
    </div>
  </div>

  <div class="masthead">
    <div class="container">
      <div class="masthead-inner">
        <a href="${ROOT}index.html" class="masthead-logo">
          <img src="${ROOT}images/logo.png" alt="ACJ UNIBEN Logo" />
          <div class="masthead-title">
            <span class="org-name">ACJ UNIBEN</span>
            <span class="chapter">Association of Campus Journalists · UNIBEN Chapter</span>
            <span class="tagline">Bringing Truth to Light</span>
          </div>
        </a>
        <div class="masthead-right">
          <div class="search-form">
            <input type="text" placeholder="Search stories…" aria-label="Search" />
            <button aria-label="Search">&#128269;</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <nav class="main-nav" role="navigation" aria-label="Main navigation">
    <div class="container">
      <div class="nav-inner">
        <div class="nav-links">
          <a href="${ROOT}index.html" class="${getNavActiveClass('home')}">Home</a>
          <div class="nav-dropdown">
            <span class="nav-dropdown-toggle">News ▾</span>
            <div class="dropdown-menu">
              <a href="${ROOT}pages/news.html">All News</a>
              <a href="${ROOT}pages/news.html?cat=campus">Campus Affairs</a>
              <a href="${ROOT}pages/news.html?cat=national">National</a>
              <a href="${ROOT}pages/news.html?cat=media">Media & Press</a>
              <a href="${ROOT}pages/news.html?cat=politics">Politics</a>
              <a href="${ROOT}pages/news.html?cat=science">Science & Tech</a>
              <a href="${ROOT}pages/news.html?cat=sports">Sports</a>
            </div>
          </div>
          <a href="${ROOT}pages/editorial.html" class="${getNavActiveClass('editorial')}">Editorial</a>
          <a href="${ROOT}pages/publications.html" class="${getNavActiveClass('publications')}">Publications</a>
          <a href="${ROOT}pages/about.html" class="${getNavActiveClass('about')}">About</a>
          <a href="${ROOT}pages/contact.html" class="${getNavActiveClass('contact')}">Contact</a>
        </div>
        <div class="nav-cta">
          <a href="${ROOT}pages/membership.html">Join ACJ</a>
        </div>
        <div class="hamburger" id="hamburger" aria-label="Toggle menu" role="button" tabindex="0">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="mobile-nav" id="mobileNav">
        <a href="${ROOT}index.html">Home</a>
        <a href="${ROOT}pages/news.html">News</a>
        <a href="${ROOT}pages/editorial.html">Editorial</a>
        <a href="${ROOT}pages/publications.html">Publications</a>
        <a href="${ROOT}pages/about.html">About</a>
        <a href="${ROOT}pages/membership.html">Join ACJ</a>
        <a href="${ROOT}pages/contact.html">Contact</a>
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="${ROOT}images/logo.png" alt="ACJ UNIBEN" />
          <p>The Association of Campus Journalists, UNIBEN Chapter, is the foremost student journalism body at the University of Benin. We train, publish, and advocate for the next generation of Nigeria's press leaders.</p>
          <span class="tagline-footer">BRINGING TRUTH TO LIGHT</span>
        </div>
        <div class="footer-col">
          <h5>Navigate</h5>
          <ul>
            <li><a href="${ROOT}index.html">Home</a></li>
            <li><a href="${ROOT}pages/news.html">News</a></li>
            <li><a href="${ROOT}pages/editorial.html">Editorial</a></li>
            <li><a href="${ROOT}pages/publications.html">Publications</a></li>
            <li><a href="${ROOT}pages/about.html">About Us</a></li>
            <li><a href="${ROOT}pages/membership.html">Membership</a></li>
            <li><a href="${ROOT}pages/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Sections</h5>
          <ul>
            <li><a href="${ROOT}pages/news.html?cat=campus">Campus Affairs</a></li>
            <li><a href="${ROOT}pages/news.html?cat=national">National</a></li>
            <li><a href="${ROOT}pages/news.html?cat=media">Media & Press</a></li>
            <li><a href="${ROOT}pages/news.html?cat=politics">Politics</a></li>
            <li><a href="${ROOT}pages/news.html?cat=science">Science & Tech</a></li>
            <li><a href="${ROOT}pages/news.html?cat=sports">Sports</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Organisation</h5>
          <ul>
            <li><a href="${ROOT}pages/about.html#history">Our History</a></li>
            <li><a href="${ROOT}pages/about.html#leadership">Leadership</a></li>
            <li><a href="${ROOT}pages/about.html#values">Our Values</a></li>
            <li><a href="${ROOT}pages/contact.html#pitch">Pitch a Story</a></li>
            <li><a href="#">Press Freedom Charter</a></li>
            <li><a href="#">Ethics Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} Association of Campus Journalists, UNIBEN Chapter. All rights reserved.</span>
        <div class="footer-social">
          <a href="#" aria-label="Twitter/X">𝕏</a>
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="YouTube">▶</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function formatDate(date) {
  return date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function init() {
  // Inject header
  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = renderHeader();

  // Inject footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = renderFooter();

  // Mobile nav toggle
  document.addEventListener('click', function(e) {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    if (hamburger && hamburger.contains(e.target)) {
      mobileNav.classList.toggle('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
