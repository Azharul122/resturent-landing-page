// ── Inject styles (একবারই) ──────────────────────────────────────────
function injectRevealStyles() {
  if (document.getElementById("reveal-styles")) return;
  const style = document.createElement("style");
  style.id = "reveal-styles";
  style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
}

// ── Main function ───────────────────────────────────────────────────
export function createScrollReveal(elements, options = {}) {
  injectRevealStyles();

  const {
    delay = 150,      // প্রতিটা element এর মাঝে delay (ms)
    threshold = 0.15, // কতটুকু দেখা গেলে trigger হবে
  } = options;

  // NodeList / array / single element — সব handle করে
  const els = elements instanceof Element
    ? [elements]
    : Array.from(elements);

  // reveal class লাগাও
  els.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const index = els.indexOf(el);

      setTimeout(() => {
        el.classList.add("visible");
      }, index * delay);

      observer.unobserve(el); // একবার দেখালেই শেষ
    });
  }, { threshold });

  els.forEach(el => observer.observe(el));
}