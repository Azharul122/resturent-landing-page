export function loadOurMenu() {

  if (!document.getElementById("our-menu-fonts")) {
    const link = document.createElement("link");
    link.id = "our-menu-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }

  if (!document.getElementById("our-menu-styles")) {
    const style = document.createElement("style");
    style.id = "our-menu-styles";
    style.textContent = `
      #bridge-our-menu {
        background: #0e1219;
        color: #f5f0e8;
        font-family: 'Montserrat', sans-serif;
        padding: 90px 5% 100px;
      }

      .om-container {
        max-width: 1280px;
        margin: 0 auto;
      }

      /* ── HEADER ── */
      .om-header {
        text-align: center;
        margin-bottom: 60px;
      }

      .om-subtitle {
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-size: 1.2rem;
        color: #c9a96e;
        display: block;
        margin-bottom: 0.5rem;
      }

      .om-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(2.8rem, 5vw, 4.2rem);
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #c9a96e;
        margin: 0;
        line-height: 1.1;
      }

      /* ── GRID ── */
      .om-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0px;
      }

      /* ── CARD WRAPPER ── */
      .om-card-wrap {
        perspective: 1200px;
        cursor: pointer;
      }

      /* ── CARD (flipper) ── */
      .om-card {
        position: relative;
        width: 100%;
        padding-bottom: 130%; /* tall portrait ratio */
        transform-style: preserve-3d;
        transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
      }

      .om-card-wrap:hover .om-card {
        transform: rotateY(180deg);
      }

      /* ── FRONT & BACK SHARED ── */
      .om-front,
      .om-back {
        position: absolute;
        inset: 0;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }

      /* ── FRONT: image + label ── */
      .om-front {
        display: flex;
        flex-direction: column;
      }

      .om-front-img {
        flex: 1;
        overflow: hidden;
        position: relative;
      }

      .om-front-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.6s ease;
      }

      .om-card-wrap:hover .om-front-img img {
        transform: scale(1.04);
      }

      .om-front-label {
        background: #0e1219;
        padding: 20px 16px 22px;
        text-align: center;
      }

      .om-front-name {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #c9a96e;
        display: block;
        margin-bottom: 6px;
      }

      .om-front-cat {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.78rem;
        font-weight: 300;
        color: rgba(245, 240, 232, 0.55);
        letter-spacing: 1px;
      }

      /* ── BACK: dark card with + icon ── */
      .om-back {
        transform: rotateY(180deg);
        background: #0e1219;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 28px;
        padding: 50px 40px;
        border: 1px solid rgba(201, 169, 110, 0.15);
        position: relative;
        overflow: hidden;
      }

      /* background image peek on back */
      .om-back::before {
        content: '';
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        opacity: 0.12;
        z-index: 0;
      }

      .om-back-inner {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
        text-align: center;
      }

      /* ── PLUS ICON ── */
      .om-plus {
        width: 52px;
        height: 52px;
        position: relative;
        flex-shrink: 0;
      }

      .om-plus::before,
      .om-plus::after {
        content: '';
        position: absolute;
        background: #c9a96e;
        border-radius: 1px;
      }

      .om-plus::before {
        width: 1.5px;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
      }

      .om-plus::after {
        width: 100%;
        height: 1.5px;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      .om-back-name {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #c9a96e;
      }

      .om-back-desc {
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.75;
        color: rgba(245, 240, 232, 0.75);
      }

      .om-back-link {
        display: inline-block;
        border: 1px solid rgba(201, 169, 110, 0.5);
        color: #c9a96e;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.65rem;
        font-weight: 500;
        letter-spacing: 3.5px;
        text-transform: uppercase;
        padding: 0.85rem 2rem;
        text-decoration: none;
        background: transparent;
        transition: background 0.3s ease, color 0.3s ease;
        margin-top: 6px;
      }

      .om-back-link:hover {
        background: rgba(201, 169, 110, 0.1);
      }

      /* ── RESPONSIVE ── */
      @media (max-width: 768px) {
        .om-grid {
          grid-template-columns: 1fr;
          gap: 2px;
        }
        .om-card {
          padding-bottom: 110%;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const categories = [
    {
      name: "STARTERS",
      cat: "Food",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=85",
      desc: "Delicate bites to awaken the palate — from bruschetta to chilled seafood."
    },
    {
      name: "MAIN COURSES",
      cat: "Food",
      img: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=85",
      desc: "Hearty signatures crafted from the finest seasonal ingredients."
    },
    {
      name: "DESSERTS",
      cat: "Food",
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=85",
      desc: "Sweet finales — from silky panna cotta to dark chocolate fondant."
    }
  ];

  const section = document.createElement("section");
  section.id = "bridge-our-menu";

  section.innerHTML = `
    <div class="om-container">

      <div class="om-header">
        <span class="om-subtitle">Kitchen's daily offer</span>
        <h2 class="om-title">OUR MENU</h2>
      </div>

      <div class="om-grid">
        ${categories.map(c => `
          <div class="om-card-wrap">
            <div class="om-card">

              <!-- FRONT -->
              <div class="om-front">
                <div class="om-front-img">
                  <img src="${c.img}" alt="${c.name}" />
                </div>
                <div class="om-front-label">
                  <span class="om-front-name">${c.name}</span>
                  <span class="om-front-cat">${c.cat}</span>
                </div>
              </div>

              <!-- BACK -->
              <div class="om-back" style="--bg:url('${c.img}')">
                <div class="om-back-inner">
                  <div class="om-plus"></div>
                  <span class="om-back-name">${c.name}</span>
                  <p class="om-back-desc">${c.desc}</p>
                  <a href="#" class="om-back-link">EXPLORE</a>
                </div>
              </div>

            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;

  // Apply bg image to back panels via CSS var
  section.querySelectorAll('.om-back').forEach(el => {
    el.style.setProperty('--bg', el.style.getPropertyValue('--bg'));
    el.style.removeProperty('--bg');
  });

  document.body.appendChild(section);
}