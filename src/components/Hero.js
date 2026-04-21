export function loadHero() {
  // ── Inject Google Fonts ──────────────────────────────────────────────────────
  if (!document.getElementById("hero-fonts")) {
    const link = document.createElement("link");
    link.id = "hero-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400&family=Cinzel:wght@400;700&family=Raleway:wght@300;400&display=swap";
    document.head.appendChild(link);
  }

  // ── Inject CSS ───────────────────────────────────────────────────────────────
  if (!document.getElementById("hero-styles")) {
    const style = document.createElement("style");
    style.id = "hero-styles";
    style.textContent = `
      /* ── Variables ── */
      :root {
        --gold:        #c9a84c;
        --gold-light:  #e8c97a;
        --dark:        #0d0d0d;
        --overlay:     rgba(10, 10, 10, 0.55);
        --white:       #f5f0e8;
        --transition:  0.9s cubic-bezier(0.77, 0, 0.18, 1);
      }

      /* ── Wrapper ── */
      #home-section{
        position: relative;
        width: 100%;
        height: 100svh;
        min-height: 520px;
        overflow: hidden;
        background: var(--dark);
        font-family: 'Raleway', sans-serif;
        user-select: none;
        z-index: 100;
      }

      /* ── Slides ── */
      .fh-slide {
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity var(--transition);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .fh-slide.active { opacity: 1; }

      /* background image */
      .fh-slide-bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        transform: scale(1.08);
        transition: transform 6s ease-out;
        filter: brightness(0.6) saturate(0.85);
      }
      .fh-slide.active .fh-slide-bg { transform: scale(1); }

      /* dark vignette overlay */
      .fh-slide::after {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 100%),
          linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.55) 100%);
        pointer-events: none;
      }

      /* ── Content ── */
      .fh-content {
        position: relative;
        z-index: 2;
        text-align: center;
        padding: 0 1rem;
        max-width: 900px;
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.7s 0.35s ease, transform 0.7s 0.35s ease;
      }
      .fh-slide.active .fh-content {
        opacity: 1;
        transform: translateY(0);
      }

      /* italic subtitle */
      .fh-subtitle {
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-size: clamp(1rem, 2.2vw, 1.35rem);
        color: var(--gold);
        letter-spacing: 0.04em;
        margin-bottom: 0.6rem;
        display: block;
      }

      /* ornament + title row */
      .fh-title-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: clamp(0.6rem, 2vw, 1.6rem);
        margin-bottom: 1.2rem;
      }
      .fh-ornament {
        color: var(--gold);
        font-size: clamp(0.9rem, 1.5vw, 1.2rem);
        opacity: 0.7;
        flex-shrink: 0;
      }

      /* main title */
      .fh-title {
        font-family: 'Cinzel', serif;
        font-size: clamp(2.2rem, 7vw, 5.5rem);
        font-weight: 400;
        color: var(--gold);
        letter-spacing: clamp(0.25em, 1.8vw, 0.55em);
        text-transform: uppercase;
        line-height: 1;
        margin: 0;
        -webkit-text-stroke: 1px var(--gold-light);
        text-shadow: 0 0 60px rgba(201,168,76,0.25);
      }

      /* body text */
      .fh-body {
        font-size: clamp(0.85rem, 1.5vw, 1.05rem);
        font-weight: 300;
        color: var(--white);
        line-height: 1.75;
        max-width: 540px;
        margin: 0 auto 2rem;
        letter-spacing: 0.02em;
      }

      /* CTA button */
      .fh-btn {
        display: inline-block;
        padding: 0.85rem 2.6rem;
        border: 1px solid var(--white);
        color: var(--white);
        font-family: 'Raleway', sans-serif;
        font-size: 0.72rem;
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        text-decoration: none;
        background: transparent;
        cursor: pointer;
        transition: background 0.3s, color 0.3s, border-color 0.3s;
        position: relative;
        overflow: hidden;
      }
      .fh-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--gold);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.35s ease;
        z-index: -1;
      }
      .fh-btn:hover {
        border-color: var(--gold);
        color: var(--dark);
      }
      .fh-btn:hover::before { transform: scaleX(1); }

      /* ── Arrows ── */
      .fh-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        background: transparent;
        border: none;
        color: rgba(245,240,232,0.45);
        font-size: 2rem;
        line-height: 1;
        padding: 1rem 1.4rem;
        cursor: pointer;
        transition: color 0.3s;
        outline: none;
      }
      .fh-arrow:hover { color: var(--gold); }
      .fh-arrow-prev { left: 0.5rem; }
      .fh-arrow-next { right: 0.5rem; }

      /* ── Dots ── */
      .fh-dots {
        position: absolute;
        bottom: 1.6rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        display: flex;
        gap: 1.4rem;
        align-items: center;
      }
      .fh-dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid rgba(245,240,232,0.45);
        background: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Raleway', sans-serif;
        font-size: 0.6rem;
        font-weight: 300;
        color: rgba(245,240,232,0.45);
        transition: border-color 0.3s, color 0.3s;
        padding: 0;
        line-height: 1;
        outline: none;
      }
      .fh-dot.active {
        border-color: var(--gold);
        color: var(--gold);
      }
    `;
    document.head.appendChild(style);
  }

  // ── Slide data ───────────────────────────────────────────────────────────────
  const slides = [
    {
      bg: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&q=80",
      subtitle: "the most delicious flavor combos",
      title: "The Food Heaven",
      body: "Experimentation in the kitchen and focus on excellence are among our main driving forces in cooking.",
    },
    {
      bg: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
      subtitle: "crafted with passion & precision",
      title: "The Art of Taste",
      body: "Every dish is a canvas — painted with the finest ingredients and decades of culinary mastery.",
    },
    {
      bg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
      subtitle: "a journey through every bite",
      title: "Pure Indulgence",
      body: "From farm to table, we honour each ingredient, letting its natural character shine through.",
    },
  ];

  // ── Build HTML ───────────────────────────────────────────────────────────────
  const wrapper = $(`<section id="home-section"></section>`);

  slides.forEach((s, i) => {
    wrapper.append(`
      <div class="fh-slide${i === 0 ? " active" : ""}">
        <div class="fh-slide-bg" style="background-image:url('${s.bg}')"></div>
        <div class="fh-content">
          <span class="fh-subtitle">${s.subtitle}</span>
          <div class="fh-title-row">
            <span class="fh-ornament">&#10140;&#10136;</span>
            <h1 class="fh-title">${s.title}</h1>
            <span class="fh-ornament">&#10140;&#10136;</span>
          </div>
          <p class="fh-body">${s.body}</p>
          <button class="fh-btn">View More</button>
        </div>
      </div>
    `);
  });

  // arrows
  wrapper.append(`
    <button class="fh-arrow fh-arrow-prev" aria-label="Previous">&#8249;</button>
    <button class="fh-arrow fh-arrow-next" aria-label="Next">&#8250;</button>
  `);

  // dots
  const dotsEl = $(`<div class="fh-dots"></div>`);
  slides.forEach((_, i) => {
    dotsEl.append(
      `<button class="fh-dot${i === 0 ? " active" : ""}" data-index="${i}">${i + 1}</button>`
    );
  });
  wrapper.append(dotsEl);

  // mount into body (or swap for any container selector you prefer)
  // ✅ Good — only replaces content, keeps navbar
  if ($("#home").length === 0) {
    $("body").append(wrapper);        // or prepend if you want it right after navbar
  } else {
    $("#home").replaceWith(wrapper);
  }

  // ── Slider logic ─────────────────────────────────────────────────────────────
  let current = 0;
  let autoTimer;

  function goTo(index) {
    const $slides = wrapper.find(".fh-slide");
    const $dots = wrapper.find(".fh-dot");

    $slides.eq(current).removeClass("active");
    $dots.eq(current).removeClass("active");

    current = (index + slides.length) % slides.length;

    $slides.eq(current).addClass("active");
    $dots.eq(current).addClass("active");

    resetTimer();
  }

  function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5500);
  }

  // arrow clicks
  wrapper.find(".fh-arrow-prev").on("click", () => goTo(current - 1));
  wrapper.find(".fh-arrow-next").on("click", () => goTo(current + 1));

  // dot clicks
  wrapper.find(".fh-dot").on("click", function () {
    goTo(parseInt($(this).data("index")));
  });

  // touch / swipe support
  let touchStartX = 0;
  wrapper[0].addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  wrapper[0].addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  });

  // start auto-play
  resetTimer();
}