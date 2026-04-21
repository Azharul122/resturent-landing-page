/**
 * Bridge Fine Dining — Navbar Module
 * Bootstrap 5 + jQuery required
 */

export function loadNavbar() {

  if (!document.getElementById("bridge-nav-styles")) {
    const style = document.createElement("style");
    style.id = "bridge-nav-styles";
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Montserrat:wght@300;400&display=swap');

      :root {
        --nav-bg:     #1a2028;
        --nav-height: 72px;
        --gold:       #c9a96e;
        --text-light: rgba(255,255,255,0.85);
        --panel-w:    420px;
      }

      html { scroll-behavior: smooth; }
      .bridge-section { scroll-margin-top: var(--nav-height); }

      #bridge-navbar {
        position: fixed;
        top: 0; left: 0; right: 0;
        height: var(--nav-height);
        background: rgba(26,32,40,.40);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        z-index: 1050;
        border-bottom: 1px solid rgba(201,169,110,.15);
        transition: background .3s;
      }
      #bridge-navbar.scrolled { background: rgba(26,32,40,.92); }
      #bridge-navbar .navbar-inner { height: 100%; padding: 0 2rem; }

      .bridge-logo {
        font-family: 'Cormorant Garamond', serif;
        font-size: 2rem; font-weight: 300;
        color: var(--gold) !important;
        letter-spacing: .05em; text-decoration: none;
      }

      .bridge-links { list-style: none; margin: 0; padding: 0; display: flex; gap: 2.5rem; }
      .bridge-links a {
        font-family: 'Montserrat', sans-serif;
        font-size: .68rem; font-weight: 400;
        letter-spacing: .18em; text-transform: uppercase;
        color: var(--text-light); text-decoration: none;
        position: relative; padding-bottom: 3px; transition: color .25s;
      }
      .bridge-links a::after {
        content: ''; position: absolute;
        bottom: 0; left: 0; width: 0; height: 1px;
        background: var(--gold); transition: width .3s ease;
      }
      .bridge-links a:hover,
      .bridge-links a.is-active { color: var(--gold); }
      .bridge-links a:hover::after,
      .bridge-links a.is-active::after { width: 100%; }

      .bridge-toggle {
        background: none; border: none; cursor: pointer;
        display: flex; flex-direction: column; justify-content: center;
        gap: 6px; padding: 4px;
      }
      .bridge-toggle span {
        display: block; width: 28px; height: 1px;
        background: var(--text-light);
        transition: background .25s, transform .3s, opacity .3s;
      }
      .bridge-toggle:hover span { background: var(--gold); }
      .bridge-toggle.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); background: var(--gold); }
      .bridge-toggle.is-open span:nth-child(2) { opacity: 0; }
      .bridge-toggle.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: var(--gold); }

      #bridge-panel {
        position: fixed; top: 0; right: 0;
        width: var(--panel-w); height: 100%; overflow-y: auto;
        background: rgba(26,32,40,.97); z-index: 1060;
        transform: translateX(100%);
        transition: transform .45s cubic-bezier(.77,0,.175,1);
        display: flex; flex-direction: column;
        align-items: center; justify-content: center; text-align: center;
      }
      #bridge-panel.is-open { transform: translateX(0); }

      #bridge-overlay {
        position: fixed; inset: 0;
        background: rgba(0,0,0,.55); z-index: 1055;
        opacity: 0; pointer-events: none; transition: opacity .4s ease;
      }
      #bridge-overlay.is-visible { opacity: 1; pointer-events: all; }

      .bridge-panel-close {
        position: absolute; top: 1.5rem; right: 1.75rem;
        background: none; border: none;
        color: var(--text-light); font-size: 1.6rem;
        font-weight: 300; cursor: pointer; line-height: 1; transition: color .2s;
      }
      .bridge-panel-close:hover { color: var(--gold); }

      .bridge-panel-logo {
        font-family: 'Cormorant Garamond', serif;
        font-size: 3rem; font-weight: 300;
        color: var(--gold) !important;
        text-decoration: none; margin-bottom: 2rem; display: block;
      }

      .bridge-panel-links {
        list-style: none; margin: 0 0 2rem;
        padding: 0 2rem; display: flex;
        flex-direction: column; width: 100%;
      }
      .bridge-panel-links a {
        font-family: 'Montserrat', sans-serif;
        font-size: .75rem; letter-spacing: .22em; text-transform: uppercase;
        color: var(--text-light); text-decoration: none;
        display: block; padding: .85rem 0;
        border-bottom: 1px solid rgba(201,169,110,.15);
        transition: color .2s, padding-left .2s;
      }
      .bridge-panel-links a:hover,
      .bridge-panel-links a.is-active { color: var(--gold); padding-left: .5rem; }

      .bridge-panel-info {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1rem; font-weight: 300;
        color: var(--text-light); font-style: normal;
        line-height: 2; margin-bottom: 2rem;
      }

      .bridge-social { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .25rem; }
      .bridge-social a {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1rem; font-weight: 300;
        color: var(--text-light); text-decoration: none;
        letter-spacing: .05em; border-bottom: 1px solid rgba(201,169,110,.4);
        transition: color .2s, border-color .2s;
        display: inline-block; padding: 0.1rem 0.5rem 0.25rem;
      }
      .bridge-social a:hover { color: var(--gold); border-bottom-color: var(--gold); }

      @media (max-width: 991px) {
        .bridge-desktop-links { display: none !important; }
        #bridge-panel { width: 100%; }
      }
    `;
    document.head.appendChild(style);
  }

  // ── Nav links config ──────────────────────────────────────────────────────────
  // type "page"    → fires bridge:navigate event → router calls navigate()
  // type "section" → smooth scrolls to that element ID on the current page
  const NAV_LINKS = [
    { label: "Home",         type: "page",    target: "home"                 },
    { label: "Our Menu",     type: "section", target: "menu-section"         },
    { label: "Testimonials", type: "section", target: "testimonials-section" },
    { label: "Book a Table", type: "section", target: "book-section"         },
    // { label: "Blog",         type: "section", target: "blog-section"         },
    { label: "Contact Us",   type: "page",    target: "contact"              },
  ];

  const buildLinks = () =>
    NAV_LINKS.map(({ label, type, target }) =>
      `<li><a href="#" class="bridge-nav-link" data-type="${type}" data-target="${target}">${label}</a></li>`
    ).join("");

  // ── Inject HTML ───────────────────────────────────────────────────────────────
  const nav = document.createElement("nav");
  nav.id = "bridge-navbar";
  nav.innerHTML = `
    <div class="navbar-inner d-flex align-items-center justify-content-between">
      <a href="#" class="bridge-logo">B</a>
      <ul class="bridge-links bridge-desktop-links mb-0">${buildLinks()}</ul>
      <button class="bridge-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
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
    <ul class="bridge-panel-links">${buildLinks()}</ul>
    <address class="bridge-panel-info">
      <div>Bridge Fine Dining,</div>
      <div>107 Duncan Avenue, New York</div>
      <div>914-309-7030</div>
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

  // ── Panel helpers ─────────────────────────────────────────────────────────────
  const $panel   = $("#bridge-panel");
  const $overlay = $("#bridge-overlay");
  const $toggle  = $(".bridge-toggle");

  function openPanel() {
    $panel.addClass("is-open").attr("aria-hidden", "false");
    $overlay.addClass("is-visible");
    $toggle.addClass("is-open").attr("aria-expanded", "true");
    $("body").css("overflow", "hidden");
  }

  function closePanel() {
    $panel.removeClass("is-open").attr("aria-hidden", "true");
    $overlay.removeClass("is-visible");
    $toggle.removeClass("is-open").attr("aria-expanded", "false");
    $("body").css("overflow", "");
  }

  $(document).on("click", ".bridge-toggle",      openPanel);
  $(document).on("click", ".bridge-panel-close", closePanel);
  $(document).on("click", "#bridge-overlay",     closePanel);
  $(document).on("keydown", (e) => { if (e.key === "Escape") closePanel(); });

  // ── Nav link click ────────────────────────────────────────────────────────────
  $(document).on("click", ".bridge-nav-link", function (e) {
    e.preventDefault();
    const type   = $(this).data("type");
    const target = $(this).data("target");

    closePanel();

    if (type === "page") {
      // Tell the router to navigate — main.js listens for this event
      document.dispatchEvent(
        new CustomEvent("bridge:navigate", { detail: { page: target } })
      );
      $(".bridge-nav-link").removeClass("is-active");
      $(`.bridge-nav-link[data-target="${target}"]`).addClass("is-active");

    } else {
      // Smooth scroll to section on same page
      const $el = $("#" + target);
      if ($el.length) {
        $("html, body").animate({ scrollTop: $el.offset().top - 72 }, 600, "swing");
      }
    }
  });

  // ── Navbar darken on scroll ───────────────────────────────────────────────────
  $(window).on("scroll", function () {
    $("#bridge-navbar").toggleClass("scrolled", $(this).scrollTop() > 20);
  });

  // ── Active highlight for section links via IntersectionObserver ───────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(".bridge-nav-link[data-type='section']").removeClass("is-active");
        $(`.bridge-nav-link[data-target="${entry.target.id}"]`).addClass("is-active");
      }
    });
  }, { rootMargin: "-72px 0px -60% 0px", threshold: 0 });

  function observeSections() {
    NAV_LINKS.filter(l => l.type === "section").forEach(({ target }) => {
      const el = document.getElementById(target);
      if (el) { el.classList.add("bridge-section"); observer.observe(el); }
    });
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", observeSections)
    : observeSections();
}