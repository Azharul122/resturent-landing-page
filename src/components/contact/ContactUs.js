export function loadContactUs() {

  // ── Google Fonts ──────────────────────────────────────────────────────────────
  if (!document.getElementById("contact-fonts")) {
    const link = document.createElement("link");
    link.id = "contact-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@400;500&family=Raleway:wght@300;400;500&display=swap";
    document.head.appendChild(link);
  }

  // ── Styles ────────────────────────────────────────────────────────────────────
  if (!document.getElementById("contact-styles")) {
    const style = document.createElement("style");
    style.id = "contact-styles";
    style.textContent = `

      /* ── Section wrapper ── */
      #ct-section {
        background: #0e1a16;
        width: 100%;
        overflow: hidden;
        font-family: 'Raleway', sans-serif;
      }

      /* ── Full-width Google Map ── */
      #ct-map {
        width: 100%;
        height: clamp(260px, 38vw, 420px);
        display: block;
        border: none;
        filter: grayscale(1) invert(0.92) contrast(0.85);
      }

      /* ── Bottom content row ── */
      #ct-bottom {
        display: grid;
        grid-template-columns: 0.85fr 1fr;
        border-top: 1px solid rgba(193,154,80,0.18);
      }

      /* ── Left panel — form ── */
      #ct-left {
        padding: 52px 44px;
        border-right: 1px solid rgba(193,154,80,0.18);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      /* Script label */
      .ct-script {
        font-family: 'Great Vibes', cursive;
        font-size: clamp(1.4rem, 2.5vw, 1.9rem);
        color: #c19a50;
        display: block;
        margin-bottom: 0.2rem;
        text-align: center;
      }

      /* Main title */
      .ct-title {
        font-family: 'Cinzel', serif;
        font-size: clamp(1.9rem, 3.5vw, 2.8rem);
        font-weight: 400;
        color: #c9a55a;
        letter-spacing: 0.35em;
        text-transform: uppercase;
        text-align: center;
        margin: 0 0 32px;
        line-height: 1.1;
      }

      /* Inputs */
      .ct-input,
      .ct-textarea {
        width: 100%;
        background: transparent;
        border: 1px solid rgba(193,154,80,0.22);
        color: rgba(230,222,205,0.75);
        font-family: 'Raleway', sans-serif;
        font-size: 0.82rem;
        font-weight: 300;
        letter-spacing: 0.04em;
        padding: 14px 16px;
        margin-bottom: 12px;
        outline: none;
        box-sizing: border-box;
        transition: border-color 0.2s;
      }
      .ct-input::placeholder,
      .ct-textarea::placeholder {
        color: rgba(193,154,80,0.45);
        letter-spacing: 0.06em;
      }
      .ct-input:focus,
      .ct-textarea:focus {
        border-color: rgba(193,154,80,0.55);
      }
      .ct-textarea {
        resize: none;
        height: 110px;
      }

      /* SEND button */
      .ct-btn-wrap {
        text-align: center;
        margin-top: 6px;
      }
      .ct-btn {
        display: inline-block;
        border: 1px solid rgba(193,154,80,0.55);
        color: rgba(230,222,205,0.85);
        font-family: 'Cinzel', serif;
        font-size: 0.72rem;
        font-weight: 400;
        letter-spacing: 0.35em;
        text-transform: uppercase;
        padding: 12px 44px;
        background: transparent;
        cursor: pointer;
        transition: background 0.25s, color 0.25s;
      }
      .ct-btn:hover {
        background: rgba(193,154,80,0.12);
        color: #c19a50;
      }

      /* ── Right panel — 2×2 location grid ── */
      #ct-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
      }

      .ct-card {
        padding: 44px 32px;
        text-align: center;
        border-right: 1px solid rgba(193,154,80,0.18);
        border-bottom: 1px solid rgba(193,154,80,0.18);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
      }
      .ct-card:nth-child(2n)   { border-right: none; }
      .ct-card:nth-child(3),
      .ct-card:nth-child(4)    { border-bottom: none; }

      /* Location name (MANHATTAN style) */
      .ct-card-title {
        font-family: 'Cinzel', serif;
        font-size: clamp(0.72rem, 1.1vw, 0.82rem);
        font-weight: 400;
        color: #c9a55a;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        margin-bottom: 10px;
      }

      /* Address / phone / email lines */
      .ct-card-line {
        font-size: clamp(0.78rem, 1.1vw, 0.85rem);
        font-weight: 300;
        color: rgba(230,222,205,0.70);
        letter-spacing: 0.03em;
        line-height: 1.5;
      }
      .ct-card-line.muted {
        color: rgba(230,222,205,0.45);
        font-size: 0.78rem;
      }

      /* ── Responsive ── */
      @media (max-width: 768px) {
        #ct-bottom {
          grid-template-columns: 1fr;
        }
        #ct-left {
          border-right: none;
          border-bottom: 1px solid rgba(193,154,80,0.18);
          padding: 44px 24px;
        }
      }
      @media (max-width: 480px) {
        #ct-grid {
          grid-template-columns: 1fr;
        }
        .ct-card:nth-child(2n)  { border-right: none; }
        .ct-card:nth-child(3)   { border-bottom: 1px solid rgba(193,154,80,0.18); }
        .ct-card:nth-child(4)   { border-bottom: none; }
      }
    `;
    document.head.appendChild(style);
  }

  // ── Build DOM ─────────────────────────────────────────────────────────────────
  const section = document.createElement("section");
  section.id = "ct-section";

  section.innerHTML = `

    <!-- Full-width Google Map -->
    <iframe
      id="ct-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976383964465!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <!-- Bottom row -->
    <div id="ct-bottom">

      <!-- Left: form -->
      <div id="ct-left">
        <span class="ct-script">Write to us</span>
        <h2 class="ct-title">Contact Us</h2>

        <input  class="ct-input"    type="text"  placeholder="Name"    />
        <input  class="ct-input"    type="email" placeholder="E-mail"  />
        <textarea class="ct-textarea"            placeholder="Message"></textarea>

        <div class="ct-btn-wrap">
          <button class="ct-btn">Send</button>
        </div>
      </div>

      <!-- Right: 2×2 location grid -->
      <div id="ct-grid">

        <div class="ct-card">
          <div class="ct-card-title">Manhattan</div>
          <div class="ct-card-line">71 Madison Ave</div>
          <div class="ct-card-line muted">914-309-70 , 914-329-21</div>
          <div class="ct-card-line muted">reservations@example.com</div>
        </div>

        <div class="ct-card">
          <div class="ct-card-title">Rahway</div>
          <div class="ct-card-line">71 Madison Ave</div>
          <div class="ct-card-line muted">914-309-70 , 914-329-21</div>
          <div class="ct-card-line muted">reservations@example.com</div>
        </div>

        <div class="ct-card">
          <div class="ct-card-title">Brooklin</div>
          <div class="ct-card-line">71 Madison Ave</div>
          <div class="ct-card-line muted">914-309-70 , 914-329-21</div>
          <div class="ct-card-line muted">reservations@example.com</div>
        </div>

        <div class="ct-card">
          <div class="ct-card-title">New Jersey</div>
          <div class="ct-card-line">71 Madison Ave</div>
          <div class="ct-card-line muted">914-309-70 , 914-329-21</div>
          <div class="ct-card-line muted">reservations@example.com</div>
        </div>

      </div>
    </div>
  `;

  document.body.appendChild(section);
}