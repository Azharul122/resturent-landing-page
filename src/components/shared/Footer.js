export function loadFooter() {
  if (!document.getElementById("bf-fonts")) {
    const link = document.createElement("link");
    link.id = "bf-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }

  if (!document.getElementById("bf-styles")) {
    const style = document.createElement("style");
    style.id = "bf-styles";
    style.textContent = `
      #bridge-footer {
        background: #0b1018;
        color: #f5f0e8;
        font-family: 'Montserrat', sans-serif;
        padding: 70px 5% 50px;
        position: relative;
        overflow: hidden;
      }

      .bf-grid-lines {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 0;
      }

      .bf-inner {
        position: relative;
        z-index: 1;
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
      }

      .bf-monogram {
        font-family: 'Cormorant Garamond', serif;
        font-size: 3.2rem;
        font-weight: 300;
        color: #c9a96e;
        line-height: 1;
        margin: 0 0 32px;
        display: block;
      }

      .bf-info {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.72rem;
        font-weight: 300;
        letter-spacing: 2px;
        color: rgba(245, 240, 232, 0.65);
        line-height: 2.2;
        margin: 0 0 6px;
      }

      .bf-info a {
        color: rgba(245, 240, 232, 0.65);
        text-decoration: none;
        transition: color 0.2s;
      }

      .bf-info a:hover { color: #c9a96e; }

      .bf-social {
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-top: 36px;
      }

      .bf-social a {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(245, 240, 232, 0.75);
        text-decoration: none;
        letter-spacing: 1px;
        position: relative;
        padding-bottom: 6px;
        transition: color 0.25s;
      }

      .bf-social a::after {
        content: '';
        position: absolute;
        left: 0; bottom: 0;
        width: 100%; height: 1px;
        background: #c9a96e;
        opacity: 0.5;
      }

      .bf-social a:hover { color: #c9a96e; }
      .bf-social a:hover::after { opacity: 1; }

      .bf-divider {
        border: none;
        background: rgba(201,169,110,0.2);
        width: 60px; height: 0.5px;
        margin: 40px auto 22px;
      }

      .bf-copy {
        font-size: 0.6rem;
        letter-spacing: 2.5px;
        color: rgba(245,240,232,0.25);
        font-weight: 300;
        text-transform: uppercase;
        margin: 0;
      }

      .bf-scroll-btn {
        position: absolute;
        bottom: 40px; right: 40px;
        width: 38px; height: 38px;
        border: 1px solid rgba(201,169,110,0.35);
        border-radius: 50%;
        background: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 0.25s, background 0.25s;
        z-index: 2;
      }

      .bf-scroll-btn:hover {
        border-color: rgba(201,169,110,0.75);
        background: rgba(201,169,110,0.08);
      }
    `;
    document.head.appendChild(style);
  }

  const footer = document.createElement("footer");
  footer.id = "bridge-footer";

  footer.innerHTML = `
    <svg class="bf-grid-lines" viewBox="0 0 1400 240" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#c9a96e" stroke-width="0.4" opacity="0.12">
        <line x1="90"   y1="0" x2="90"   y2="240"/>
        <line x1="360"  y1="0" x2="360"  y2="240"/>
        <line x1="630"  y1="0" x2="630"  y2="240"/>
        <line x1="900"  y1="0" x2="900"  y2="240"/>
        <line x1="1170" y1="0" x2="1170" y2="240"/>
        <line x1="1440" y1="0" x2="1440" y2="240"/>
      </g>
    </svg>

    <div class="bf-inner">
      <span class="bf-monogram">B</span>
      <p class="bf-info">Bridge Restaurant &amp; Fine dining, 71 Madison Ave</p>
      <p class="bf-info">10013 New York, 914-309-7030, <a href="mailto:bridge@example.com">bridge@example.com</a></p>
      <p class="bf-info">Open: 09:00 am – 01:00 pm</p>

      <nav class="bf-social">
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
      </nav>

      <hr class="bf-divider"/>
      <p class="bf-copy">&copy; 2026 Bridge Restaurant. All rights reserved.</p>
    </div>

    <button class="bf-scroll-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})" title="Back to top">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 9V3M3 6l3-3 3 3" stroke="#c9a96e" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `;

  document.body.appendChild(footer);
}