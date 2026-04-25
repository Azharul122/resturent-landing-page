
export function injectFhButtonStyles() {
    if (document.getElementById("fh-btn-styles")) return;
    const style = document.createElement("style");
    style.id = "fh-btn-styles";
    style.textContent = `
    .fh-btn {
      display: inline-block;
      padding: 0.85rem 2.6rem;
      border: 1px solid #f5f0e8;
      color: #f5f0e8;
      font-family: 'Raleway', sans-serif;
      font-size: 0.72rem;
      font-weight: 400;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      text-decoration: none;
      background: transparent;
      cursor: pointer;
      transition: color 0.3s, border-color 0.3s;
      position: relative;
      overflow: hidden;
      isolation: isolate; 
    }
    .fh-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: #c9a84c;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.35s ease;
      z-index: -1;
    }
    .fh-btn:hover { border-color: #c9a84c; color: #0d0d0d; }
    .fh-btn:hover::before { transform: scaleX(1); }
    .fh-btn--gold { border-color: #c9a84c; color: #c9a84c; }
    .fh-btn--gold:hover { color: #0d0d0d; }
  `;
    document.head.appendChild(style);
}


export function createButton(label, onClick, variant = "default") {
    injectFhButtonStyles();
    const btn = document.createElement("button");
    btn.className = `fh-btn${variant === "gold" ? " fh-btn--gold" : ""}`;
    btn.textContent = label;
    if (onClick) btn.addEventListener("click", onClick);
    return btn;
}