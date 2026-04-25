import { createScrollReveal } from "../../utils/scroll-revelled";
import { createButton } from "../ui/button";

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


  const section = document.createElement("section");
  section.id = "bridge-specialties";

  section.innerHTML = `
    <div class="sp-wrapper">
      <div class="sp-left">
        <img src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=1200&q=85" alt="Our Best Specialties"/>
      </div>
      <div class="sp-right">
        <div class="sp-subtitle">Recommendations</div>
        <h2 class="sp-title">OUR BEST<br>SPECIALTIES</h2>
        <p class="sp-desc">
          Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu sm od
          tempor incididunt ut abore et dolore mag aliqua.
        </p>
      </div>
    </div>
  `;

  const btn = createButton("View All", () => {
    // window.location.href = "#menu"; 
  });

  const target = section.querySelectorAll(".sp-subtitle, .sp-title, .sp-desc")
  
  createScrollReveal(target, { threshold: 0.15, delay: 150 });

  section.querySelector(".sp-right").appendChild(btn);
  document.body.appendChild(section);
}