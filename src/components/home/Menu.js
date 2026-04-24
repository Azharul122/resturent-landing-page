export function loadMenu() {

  // Inject Google Fonts (only once)
  if (!document.getElementById("menu-fonts")) {
    const link = document.createElement("link");
    link.id = "menu-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }

  if (!document.getElementById("menu-styles")) {
    const style = document.createElement("style");
    style.id = "menu-styles";
    style.textContent = `
      #bridge-menu {
        background: #0e1219;
        color: #f5f0e8;
        padding: 90px 6% 100px;
        font-family: 'Montserrat', sans-serif;
        // overflow : hidden;
      }

      .menu-container {
        max-width: 1280px;
        margin: 0 auto;
      }

      /* ── HEADER ── */
      .menu-header {
        text-align: center;
        margin-bottom: 70px;
      }

      .menu-subtitle {
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-size: 1.2rem;
        color: #c9a96e;
        margin-bottom: 0.8rem;
        display: block;
      }

      .menu-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(3rem, 6vw, 5rem);
        font-weight: 400;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #c9a96e;
        margin: 0;
        line-height: 1.1;
      }

      /* ── GRID ── */
      .menu-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 80px;
        row-gap: 0;
      }

      /* ── ITEM ── */
      .menu-item {
        padding: 28px 0 24px;
      overflow: hidden !important;


        border-top: 1px solid rgba(201, 169, 110, 0.15);
      }

      .menu-item:last-child,
      .menu-item:nth-last-child(2):nth-child(odd) {
        border-bottom: none;
         overflow: hidden !important;
      }

      .menu-item-top {
        display: flex;
        align-items: baseline;
        gap: 0;
        margin-bottom: 8px;
      }

      .menu-item-name {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 3.5px;
        text-transform: uppercase;
        color: #c9a96e;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .menu-item-dots {
        flex: 1;
        border-bottom: 1px solid rgba(201, 169, 110, 0.35);
        margin: 0 12px 4px;
        min-width: 20px;
      }

      .menu-item-price {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        color: #c9a96e;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .menu-item-desc {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.88rem;
        font-weight: 300;
        color: rgba(245, 240, 232, 0.7);
        line-height: 1.6;
        margin: 0;
      }

      /* ── RESPONSIVE ── */
      @media (max-width: 860px) {
        .menu-grid {
          grid-template-columns: 1fr;
          column-gap: 0;
        }
      }

      @media (max-width: 560px) {
        #bridge-menu {
          padding: 60px 5% 70px;
        }
        .menu-title {
          font-size: 2.5rem;
          letter-spacing: 0.15em;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const menuItems = [
    // LEFT COLUMN
    { name: "BEEF BURGER MEAL", price: "$32", desc: "Classic greek salad, barrel aged feta cheese, bread" },
    { name: "ROASTED LAMB RUMP", price: "$25", desc: "Grilled lamb cutlets, pomegranate glaze, butternut" },
    { name: "PAN SEARED SEA BASS", price: "$38", desc: "Saffron and mussel's broth, new potatoes, beans" },
    { name: "KING PRAWNS AND LOBSTER", price: "$38", desc: "Creamy saffron, sauce Vierge" },
    { name: "CITRUS CURED SALMON", price: "$41", desc: "Horseradish creme fraiche, beetroot mousse, oil" },
    // RIGHT COLUMN
    { name: "PAN SEARED SCALLOPS", price: "$29", desc: "Saffron, celeriac puree, black pudding, olive oil" },
    { name: "BAKED CAMEMBERT", price: "$25", desc: "Red onion marmelade, garlic Foccacia bread, grilled fig" },
    { name: "BRAISED OX CHEEK RAVIOLI", price: "$38", desc: "Mediterranean olives casserole, celeriac puree" },
    { name: "CORN FED CHICKEN", price: "$17", desc: "Wild mushrooms, truffle potatoes, braised leeks, carrots" },
    { name: "NDUJA PORK CHICKEN TERRINE", price: "$41", desc: "Smoked duck breast, pistachio, smoked pancetta" },
  ];

  // Re-order for 2-col grid: interleave left/right so CSS grid fills column by column
  // Grid auto-flow is row, so we need: L1,R1,L2,R2 ...
  const left = menuItems.slice(0, 5);
  const right = menuItems.slice(5);
  const interleaved = left.map((item, i) => [item, right[i]]).flat().filter(Boolean);

  const section = document.createElement("section");
  section.id = "bridge-menu";

  section.innerHTML = `
    <div class="menu-container">
      <div class="menu-header">
        <span class="menu-subtitle">Special selection</span>
        <h2 class="menu-title">FROM OUR MENU</h2>
      </div>

      <div class="menu-grid">
        ${interleaved.map(item => `
          <div class="menu-item">
            <div class="menu-item-top">
              <span class="menu-item-name">${item.name}</span>
              <span class="menu-item-dots"></span>
              <span class="menu-item-price">${item.price}</span>
            </div>
            <p class="menu-item-desc">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.body.appendChild(section);
}