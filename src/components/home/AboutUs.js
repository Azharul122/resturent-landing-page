import { createScrollReveal } from "../../utils/scroll-revelled";

export function loadAboutUs() {
  // ── Google Fonts ─────────────────────────────────────────────────────────────
  if (!document.getElementById("about-fonts")) {
    const link = document.createElement("link");
    link.id = "about-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@400;500&family=Raleway:wght@300;400&display=swap";
    document.head.appendChild(link);
  }

  // ── Styles ────────────────────────────────────────────────────────────────────
  if (!document.getElementById("about-styles")) {
    const style = document.createElement("style");
    style.id = "about-styles";
    style.textContent = `
      /* ── Section ── */
      #au-section {
        background: #0e1a16;
        width: 100%;
        overflow: hidden;
        font-family: 'Raleway', sans-serif;
      }

      /* ── Header area ── */
      #au-header {
        position: relative;
        text-align: center;
        padding: 72px 1rem 0;
      }

      /* Three thin vertical gold lines that run through the header */
      #au-header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 100%;
        background: rgba(193, 154, 80, 0.35);
        pointer-events: none;
      }
      /* left line */
      #au-header::after {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 200px);
        width: 1px;
        height: 100%;
        background: rgba(193, 154, 80, 0.2);
        pointer-events: none;
      }
      /* right line — separate element */
      #au-line-right {
        position: absolute;
        top: 0;
        right: calc(50% - 200px);
        /* adjusted via JS positioning */
        width: 1px;
        height: 100%;
        background: rgba(193, 154, 80, 0.2);
        pointer-events: none;
      }

      /* "Our Story" script */
      .au-script {
        font-family: 'Great Vibes', cursive;
        font-size: clamp(1.4rem, 3vw, 2rem);
        color: #c19a50;
        display: block;
        margin-bottom: 0.3rem;
        position: relative;
        z-index: 1;
      }

      /* "ABOUT US" title */
      .au-title {
        font-family: 'Cinzel', serif;
        font-size: clamp(2.8rem, 7vw, 5.2rem);
        font-weight: 400;
        color: #c19a50;
        letter-spacing: 0.38em;
        text-transform: uppercase;
        margin: 0 0 1.6rem;
        line-height: 1;
        position: relative;
        z-index: 1;
      }

      /* body text */
      .au-body {
        max-width: 560px;
        margin: 0 auto 64px;
        font-size: clamp(0.88rem, 1.4vw, 1rem);
        font-weight: 300;
        color: rgba(235, 228, 215, 0.88);
        line-height: 1.85;
        text-align: center;
        position: relative;
        z-index: 1;
        letter-spacing: 0.02em;
      }

      /* ── Image Grid — full-bleed, zero gap ── */
      #au-grid {
        display: grid;
        grid-template-columns: 1fr 0.72fr 1fr;
        gap: 0;
        width: 100%;
      }

      .au-photo {
        width: 100%;
        height: clamp(340px, 45vw, 520px);
        object-fit: cover;
        display: block;
      }

      /* Center SVG panel */
      #au-pattern {
        background: #0e1a16;
        display: flex;
        align-items: center;
        justify-content: center;
        height: clamp(340px, 45vw, 520px);
        overflow: hidden;
      }
      #au-pattern svg {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 768px) {
        #au-grid {
          grid-template-columns: 1fr;
        }
        #au-pattern {
          height: 260px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ── SVG diamond lattice pattern ───────────────────────────────────────────────
  // Art-deco diamond grid: repeated rotated squares forming a lattice
  const svgPattern = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 360 520" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="diamond-lattice" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <!--
            Each cell is 60×60.
            Draw a diamond (rotated square) centred at 30,30 with half-diagonal ~20px,
            then lines connecting adjacent diamond tips.
          -->
          <!-- diamond outline -->
          <polygon
            points="30,8 52,30 30,52 8,30"
            fill="none"
            stroke="#c19a50"
            stroke-width="0.9"
            opacity="0.75"
          />
          <!-- horizontal connector (top) -->
          <line x1="30" y1="8"  x2="30" y2="-12" stroke="#c19a50" stroke-width="0.9" opacity="0.75"/>
          <!-- horizontal connector (bottom) -->
          <line x1="30" y1="52" x2="30" y2="72"  stroke="#c19a50" stroke-width="0.9" opacity="0.75"/>
          <!-- vertical connector (left) -->
          <line x1="8"  y1="30" x2="-12" y2="30" stroke="#c19a50" stroke-width="0.9" opacity="0.75"/>
          <!-- vertical connector (right) -->
          <line x1="52" y1="30" x2="72"  y2="30" stroke="#c19a50" stroke-width="0.9" opacity="0.75"/>
        </pattern>

        <!-- vignette fade to hide hard edges -->
        <radialGradient id="vignette" cx="50%" cy="50%" r="55%">
          <stop offset="30%" stop-color="#0e1a16" stop-opacity="0"/>
          <stop offset="100%" stop-color="#0e1a16" stop-opacity="0.72"/>
        </radialGradient>
      </defs>

      <!-- fill with pattern -->
      <rect width="360" height="520" fill="url(#diamond-lattice)"/>
      <!-- soft vignette overlay -->
      <rect width="360" height="520" fill="url(#vignette)"/>
    </svg>
  `;

  // ── Build DOM ─────────────────────────────────────────────────────────────────
  const section = document.createElement("section");
  section.id = "au-section";

  section.innerHTML = `
    <!-- Header -->
    <div id="au-header">
      <div id="au-line-right"></div>

      <span class="au-script">Our Story</span>
      <h2 class="au-title">About Us</h2>

      <p class="au-body">
        Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu sm od
        tempor incididunt ut abore et dolore mag aliqua. Ut enim ad minm eniam
        quis nostrud.
      </p>
    </div>

    <!-- Full-bleed three-column grid -->
    <div id="au-grid">
      <img
        class="au-photo"
        src="https://images.unsplash.com/photo-1613274554329-70f997f5789f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Restaurant interior"
      />

      <div id="au-pattern">${svgPattern}</div>

      <img
        class="au-photo"
        src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&q=80"
        alt="Signature chocolate tart"
      />
    </div>
  `;

  const targets = section.querySelectorAll(
    ".au-script, .au-title, .au-body, #au-grid"
  );

  createScrollReveal(targets, {
    delay: 180,
    threshold: 0.1,
  });

  document.body.appendChild(section);
}