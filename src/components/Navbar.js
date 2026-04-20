/**
 * Bridge Fine Dining — Navbar Module
 * Bootstrap 5 + jQuery required
 *
 * Usage:
 *   import { loadNavbar } from './navbar.js';
 *   loadNavbar();
 */

export function loadNavbar() {
    // ── Inject styles ──────────────────────────────────────────────────────────
    const style = document.createElement("style");
    style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Montserrat:wght@300;400&display=swap');

    :root {
      --nav-bg:     #1a2028;
      --nav-height: 72px;
      --gold:       #c9a96e;
      --text-light: rgba(255,255,255,0.85);
      --panel-bg:   #1e2830;
      --panel-w:    420px;
    }

    /* ── Navbar ────────────────────────────────────────────────────────────── */
    #bridge-navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: var(--nav-height);
      background: rgba(26,32,40,.40); ;
      z-index: 1050;
      border-bottom: 1px solid rgba(201,169,110,.15);
    }

    #bridge-navbar .navbar-inner {
      height: 100%;
      padding: 0 2rem;
    }

    /* Logo */
    .bridge-logo {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      font-weight: 300;
      color: var(--gold) !important;
      letter-spacing: .05em;
      text-decoration: none;
    }

    /* Nav links */
    .bridge-links {
      list-style: none;
      margin: 0; padding: 0;
      display: flex;
      gap: 2.5rem;
    }

    .bridge-links a {
      font-family: 'Montserrat', sans-serif;
      font-size: .68rem;
      font-weight: 400;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: var(--text-light);
      text-decoration: none;
      position: relative;
      padding-bottom: 3px;
      transition: color .25s;
    }

    .bridge-links a::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0;
      width: 0; height: 1px;
      background: var(--gold);
      transition: width .3s ease;
    }

    .bridge-links a:hover { color: var(--gold); }
    .bridge-links a:hover::after { width: 100%; }

    /* Hamburger toggle */
    .bridge-toggle {
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      padding: 4px;
    }

    .bridge-toggle span {
      display: block;
      width: 28px;
      height: 1px;
      background: var(--text-light);
      transition: background .25s;
    }

    .bridge-toggle:hover span { background: var(--gold); }

    /* ── Slide Panel ───────────────────────────────────────────────────────── */
    #bridge-panel {
      position: fixed;
      top: 0; right: 0;
      width: var(--panel-w);
      height: 100%;
      background: rgba(26,32,40,.95);
      z-index: 1060;
      transform: translateX(100%);
      transition: transform .45s cubic-bezier(.77,0,.175,1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    #bridge-panel.is-open {
      transform: translateX(0);
    }

    /* Overlay */
    #bridge-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.55);
      z-index: 1055;
      opacity: 0;
      pointer-events: none;
      transition: opacity .4s ease;
    }

    #bridge-overlay.is-visible {
      opacity: 1;
      pointer-events: all;
    }

    /* Close button */
    .bridge-panel-close {
      position: absolute;
      top: 1.5rem; right: 1.75rem;
      background: none;
      border: none;
      color: var(--text-light);
      font-size: 1.6rem;
      font-weight: 300;
      cursor: pointer;
      line-height: 1;
      transition: color .2s;
    }

    .bridge-panel-close:hover { color: var(--gold); }

    /* Panel logo */
    .bridge-panel-logo {
      font-family: 'Cormorant Garamond', serif;
      font-size: 3rem;
      font-weight: 300;
      color: var(--gold) !important;
      text-decoration: none;
      margin-bottom: 2rem;
      display: block;
    }

    /* Panel info */
    .bridge-panel-info {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1rem;
      font-weight: 300;
      color: var(--text-light);
      font-style: normal;
      line-height: 2;
      margin-bottom: 2.5rem;
    }

    /* Panel social links */
    .bridge-social {
      list-style: none;
      margin: 0; padding: 0;
      display: flex;
      flex-direction: column;
      gap: .25rem;
    }

    .bridge-social a {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1rem;
      font-weight: 300;
      color: var(--text-light);
      text-decoration: none;
      letter-spacing: .05em;
      border-bottom: 1px solid rgba(201,169,110,.4);
      transition: color .2s, border-color .2s;
      display: inline-block;
      padding: 0.1rem 0.5rem 0.25rem;
    }

    .bridge-social a:hover {
      color: var(--gold);
      border-bottom-color: var(--gold);
    }

    /* Responsive: hide desktop links on small screens */
    @media (max-width: 991px) {
      .bridge-desktop-links { display: none !important; }
      #bridge-panel { width: 100%; }
    }
  `;
    document.head.appendChild(style);

    // ── Inject HTML ────────────────────────────────────────────────────────────
    const nav = document.createElement("nav");
    nav.id = "bridge-navbar";
    nav.innerHTML = `
    <div class="navbar-inner d-flex align-items-center justify-content-between">

      <a href="#" class="bridge-logo">B</a>

      <ul class="bridge-links bridge-desktop-links mb-0">
        <li><a href="#">Home</a></li>
        <li><a href="#">Our Menu</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <button class="bridge-toggle" aria-label="Open menu">
        <span></span>
        <span></span>
      </button>

    </div>
  `;

    const overlay = document.createElement("div");
    overlay.id = "bridge-overlay";

    const panel = document.createElement("div");
    panel.id = "bridge-panel";
    panel.setAttribute("aria-hidden", "true");
    panel.innerHTML = `
    <button class="bridge-panel-close" aria-label="Close menu">&times;</button>

    <a href="#" class="bridge-panel-logo">B</a>

    <address class="bridge-panel-info">
      <div>Bridge Fine Dining,</div>
      <div>107 Duncan Avenue, New York</div>
      <div>914-309-7030,</div>
      <div>Open: 09:00 Am – 01:00 Pm</div>
    </address>

    <ul class="bridge-social">
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Facebook</a></li>
    </ul>
  `;

    document.body.prepend(panel);
    document.body.prepend(overlay);
    document.body.prepend(nav);

    // ── jQuery interactions ────────────────────────────────────────────────────
    const $panel = $("#bridge-panel");
    const $overlay = $("#bridge-overlay");

    function openPanel() {
        $panel.addClass("is-open").attr("aria-hidden", "false");
        $overlay.addClass("is-visible");
        $("body").css("overflow", "hidden");
    }

    function closePanel() {
        $panel.removeClass("is-open").attr("aria-hidden", "true");
        $overlay.removeClass("is-visible");
        $("body").css("overflow", "");
    }

    $(document).on("click", ".bridge-toggle", openPanel);
    $(document).on("click", ".bridge-panel-close", closePanel);
    $(document).on("click", "#bridge-overlay", closePanel);

    // Close on Escape key
    $(document).on("keydown", (e) => {
        if (e.key === "Escape") closePanel();
    });
}