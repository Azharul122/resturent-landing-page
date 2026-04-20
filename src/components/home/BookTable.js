export function loadBookATable() {
  if (!document.getElementById("bat-fonts")) {
    const link = document.createElement("link");
    link.id = "bat-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }

  if (!document.getElementById("bat-styles")) {
    const style = document.createElement("style");
    style.id = "bat-styles";
    style.textContent = `
      #bridge-book-table {
        background: #0e1219;
        position: relative;
        overflow: hidden;
        padding: 70px 5% 80px;
        font-family: 'Montserrat', sans-serif;
      }

      .bat-geo {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 120px;
        opacity: 0.55;
      }
      .bat-geo-left { left: 0; }
      .bat-geo-right { right: 0; }

      .bat-inner {
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        z-index: 1;
      }

      .bat-subtitle {
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-size: 1.15rem;
        color: #c9a96e;
        display: block;
        margin-bottom: 10px;
        letter-spacing: 0.03em;
      }

      .bat-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(2.2rem, 5vw, 3.5rem);
        font-weight: 400;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: #c9a96e;
        margin: 0 0 50px;
        line-height: 1.1;
      }

      .bat-form {
        display: flex;
        align-items: stretch;
        max-width: 780px;
        margin: 0 auto;
      }

      .bat-field {
        flex: 1;
        position: relative;
      }

      .bat-field select,
      .bat-field input[type="date"] {
        width: 100%;
        background: transparent;
        border: 1px solid rgba(201,169,110,0.4);
        border-right: none;
        color: #f5f0e8;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.72rem;
        font-weight: 400;
        letter-spacing: 2px;
        padding: 0 22px;
        height: 52px;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
        box-sizing: border-box;
        color-scheme: dark;
        transition: background 0.25s ease, border-color 0.25s ease;
      }

      .bat-field select:hover,
      .bat-field input[type="date"]:hover {
        background: rgba(201,169,110,0.06);
        border-color: rgba(201,169,110,0.7);
      }

      .bat-field select option { background: #0e1219; color: #f5f0e8; }

      .bat-arrow {
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        width: 10px;
        height: 6px;
      }

      .bat-btn {
        background: transparent;
        border: 1px solid rgba(201,169,110,0.7);
        color: #c9a96e;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.65rem;
        font-weight: 600;
        letter-spacing: 4px;
        text-transform: uppercase;
        padding: 0 32px;
        height: 52px;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        transition: background 0.3s ease;
      }

      .bat-btn:hover { background: rgba(201,169,110,0.12); }
      .bat-btn:active { background: rgba(201,169,110,0.2); }

      @media (max-width: 600px) {
        .bat-form { flex-direction: column; }
        .bat-field select,
        .bat-field input[type="date"] {
          border-right: 1px solid rgba(201,169,110,0.4);
          border-bottom: none;
        }
        .bat-btn { border-top: none; height: 48px; }
      }
    `;
    document.head.appendChild(style);
  }

  const geoPath = `
    <g stroke="#c9a96e" stroke-width="0.8" fill="none">
      <polygon points="60,10 90,60 60,110 30,60"/>
      <polygon points="60,20 82,60 60,100 38,60"/>
      <polygon points="60,30 74,60 60,90 46,60"/>
      <line x1="60" y1="10" x2="60" y2="110"/>
      <line x1="30" y1="60" x2="90" y2="60"/>
      <polygon points="60,140 90,190 60,240 30,190"/>
      <polygon points="60,150 82,190 60,230 38,190"/>
      <polygon points="60,160 74,190 60,220 46,190"/>
      <line x1="60" y1="140" x2="60" y2="240"/>
      <line x1="30" y1="190" x2="90" y2="190"/>
      <line x1="60" y1="110" x2="60" y2="140"/>
    </g>
  `;

  const arrowSvg = `<svg class="bat-arrow" viewBox="0 0 10 6" fill="none">
    <path d="M1 1l4 4 4-4" stroke="#c9a96e" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`;

  const today = new Date();
  const dateVal = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;

  const section = document.createElement("section");
  section.id = "bridge-book-table";

  section.innerHTML = `
    <svg class="bat-geo bat-geo-left" viewBox="0 0 120 280" xmlns="http://www.w3.org/2000/svg">
      ${geoPath}
      <line x1="30" y1="60" x2="0" y2="60" stroke="#c9a96e" stroke-width="0.8"/>
      <line x1="30" y1="190" x2="0" y2="190" stroke="#c9a96e" stroke-width="0.8"/>
    </svg>

    <svg class="bat-geo bat-geo-right" viewBox="0 0 120 280" xmlns="http://www.w3.org/2000/svg">
      ${geoPath}
      <line x1="90" y1="60" x2="120" y2="60" stroke="#c9a96e" stroke-width="0.8"/>
      <line x1="90" y1="190" x2="120" y2="190" stroke="#c9a96e" stroke-width="0.8"/>
    </svg>

    <div class="bat-inner">
      <span class="bat-subtitle">Reservations</span>
      <h2 class="bat-title">Book A Table</h2>

      <div class="bat-form">
        <div class="bat-field">
          <select>
            <option>1 Person</option>
            <option>2 Persons</option>
            <option>3 Persons</option>
            <option>4 Persons</option>
            <option>5 Persons</option>
            <option>6+ Persons</option>
          </select>
          ${arrowSvg}
        </div>
        <div class="bat-field">
          <input type="date" value="${dateVal}" />
        </div>
        <div class="bat-field">
          <select>
            <option>6:00 PM</option>
            <option>6:30 PM</option>
            <option selected>7:00 PM</option>
            <option>7:30 PM</option>
            <option>8:00 PM</option>
            <option>8:30 PM</option>
            <option>9:00 PM</option>
            <option>9:30 PM</option>
          </select>
          ${arrowSvg}
        </div>
        <button class="bat-btn">Book A Table</button>
      </div>
    </div>
  `;

  document.body.appendChild(section);
}