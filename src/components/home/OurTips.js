export function loadTips() {

  // Inject Google Fonts (only once)
  if (!document.getElementById("tips-fonts")) {
    const link = document.createElement("link");
    link.id = "tips-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }

  if (!document.getElementById("tips-styles")) {
    const style = document.createElement("style");
    style.id = "tips-styles";
    style.textContent = `
      #bridge-tips {
        background: #0e1219;
        color: #f5f0e8;
        font-family: 'Montserrat', sans-serif;
        overflow: hidden;
      }

      .tips-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        min-height: 620px;
        max-width: 1600px;
        margin: 0 auto;
      }

      /* ── LEFT IMAGE ── */
      .tips-img-left {
        position: relative;
        overflow: hidden;
      }

      .tips-img-left img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        display: block;
      }

      /* ── MIDDLE IMAGE ── */
      .tips-img-right {
        position: relative;
        overflow: hidden;
        margin-left: 6px;
      }

      .tips-img-right img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        display: block;
      }

      /* ── RIGHT CONTENT ── */
      .tips-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 80px 60px 80px 70px;
        background: #0e1219;
      }

      .tips-subtitle {
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-size: 1.2rem;
        color: #c9a96e;
        margin-bottom: 0.6rem;
        display: block;
      }

      .tips-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(2.4rem, 3.5vw, 3.6rem);
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #c9a96e;
        margin: 0 0 2rem;
        line-height: 1.1;
      }

      .tips-desc {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
        line-height: 1.95;
        color: rgba(245, 240, 232, 0.78);
        max-width: 400px;
        margin-bottom: 2.8rem;
      }

      .tips-btn {
        display: inline-block;
        border: 1px solid rgba(245, 240, 232, 0.55);
        color: #f5f0e8;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.72rem;
        font-weight: 500;
        letter-spacing: 4px;
        text-transform: uppercase;
        padding: 1.1rem 2.6rem;
        text-decoration: none;
        cursor: pointer;
        background: transparent;
        transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
      }

      .tips-btn:hover {
        border-color: #c9a96e;
        color: #c9a96e;
        background: rgba(201, 169, 110, 0.06);
      }

      /* ── RESPONSIVE ── */
      @media (max-width: 960px) {
        .tips-wrapper {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
        }
        .tips-img-left  { grid-column: 1; grid-row: 1; height: 55vw; }
        .tips-img-right { grid-column: 2; grid-row: 1; margin-left: 4px; height: 55vw; }
        .tips-content   { grid-column: 1 / -1; grid-row: 2; padding: 60px 36px; }
      }

      @media (max-width: 560px) {
        .tips-wrapper {
          grid-template-columns: 1fr;
        }
        .tips-img-left  { grid-column: 1; height: 70vw; }
        .tips-img-right { grid-column: 1; margin-left: 0; margin-top: 4px; height: 70vw; }
        .tips-content   { grid-column: 1; padding: 50px 24px; }
        .tips-title { font-size: 2.2rem; letter-spacing: 0.14em; }
      }
    `;
    document.head.appendChild(style);
  }

  const section = document.createElement("section");
  section.id = "bridge-tips";

  section.innerHTML = `
    <div class="tips-wrapper">

      <!-- LEFT IMAGE: chef portrait -->
      <div class="tips-img-left">
        <img
          src="https://images.unsplash.com/photo-1583394293214-0d1e79ca9c74?w=900&q=85"
          alt="Chef portrait"
        />
      </div>

      <!-- MIDDLE IMAGE: cooking action -->
      <div class="tips-img-right">
        <img
          src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=85"
          alt="Chef cooking"
        />
      </div>

      <!-- RIGHT CONTENT -->
      <div class="tips-content">
        <span class="tips-subtitle">Our food philosophy</span>
        <h2 class="tips-title">OUR TIPS</h2>
        <p class="tips-desc">
          Lorem ipsum dolor sit amet, consectet nei ad icing eli sed do eiu sm od
          tempor se incidid sens ne utabor et dolore magiqua. Ut enim ad miains
          eniam quis nostrudas exercitation ullam de cm.
        </p>
        <a href="#" class="tips-btn">READ MORE</a>
      </div>

    </div>
  `;

  document.body.appendChild(section);
}