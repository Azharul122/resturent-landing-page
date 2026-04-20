export function loadSpecialties() {

  // Inject Google Fonts (only once)
  if (!document.getElementById("specialties-fonts")) {
    const link = document.createElement("link");
    link.id = "specialties-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap";
    document.head.appendChild(link);
  }

  // Inject Styles (only once)
  if (!document.getElementById("specialties-styles")) {
    const style = document.createElement("style");
    style.id = "specialties-styles";
    style.textContent = `
      #bridge-specialties {
        background: #0e1219;
        font-family: 'Montserrat', sans-serif;
        position: relative;
        overflow: hidden;
      }

      .sp-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 620px;
        max-width: 1600px;
        margin: 0 auto;
      }

      /* ── LEFT: IMAGE ── */
      .sp-left {
        position: relative;
        overflow: hidden;
      }

      .sp-left img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      /* ── RIGHT: CONTENT ── */
      .sp-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 80px 70px 80px 80px;
        background: #0e1219;
        position: relative;
      }

      .sp-subtitle {
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-size: 1.25rem;
        color: #c9a96e;
        margin-bottom: 1.4rem;
        font-weight: 400;
        letter-spacing: 0.5px;
      }

      .sp-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(2.6rem, 4.5vw, 4rem);
        font-weight: 400;
        color: #c9a96e;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        line-height: 1.15;
        margin: 0 0 2.2rem;
      }

      .sp-desc {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.95rem;
        font-weight: 300;
        line-height: 1.9;
        color: rgba(245, 240, 232, 0.8);
        max-width: 420px;
        margin-bottom: 3rem;
      }

      .sp-btn {
        display: inline-block;
        border: 1px solid rgba(245, 240, 232, 0.6);
        color: #f5f0e8;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 4px;
        text-transform: uppercase;
        padding: 1.1rem 2.8rem;
        text-decoration: none;
        cursor: pointer;
        background: transparent;
        transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
      }

      .sp-btn:hover {
        border-color: #c9a96e;
        color: #c9a96e;
        background: rgba(201, 169, 110, 0.06);
      }

      /* ── RESPONSIVE ── */
      @media (max-width: 900px) {
        .sp-wrapper {
          grid-template-columns: 1fr;
          min-height: unset;
        }
        .sp-left {
          height: 60vw;
          min-height: 280px;
        }
        .sp-right {
          padding: 60px 36px;
        }
      }

      @media (max-width: 560px) {
        .sp-right {
          padding: 50px 24px;
        }
        .sp-title {
          font-size: 2.4rem;
          letter-spacing: 0.12em;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ── BUILD HTML ──
  const section = document.createElement("section");
  section.id = "bridge-specialties";

  section.innerHTML = `
    <div class="sp-wrapper">

      <!-- LEFT: image -->
      <div class="sp-left">
        <img
          src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=1200&q=85"
          alt="Our Best Specialties"
        />
      </div>

      <!-- RIGHT: content -->
      <div class="sp-right">
        <div class="sp-subtitle">Recommendations</div>
        <h2 class="sp-title">OUR BEST<br>SPECIALTIES</h2>
        <p class="sp-desc">
          Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu sm od
          tempor incididunt ut abore et dolore mag aliqua. Ut enim ad minm eniam
          quis nostrud.
        </p>
        <a href="#" class="sp-btn">VIEW ALL</a>
      </div>

    </div>
  `;

  document.body.appendChild(section);
}