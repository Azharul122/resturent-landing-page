import { contactUsPage } from "./pages/contact/ContactUs.js";
import { homePage }      from "./pages/home/HomePage.js";

// ── Page registry ─────────────────────────────────────────────────────────────
const PAGES = {
  home:    homePage,
  contact: contactUsPage,
};

// ── Navigate function ─────────────────────────────────────────────────────────
export function navigate(page) {
  const render = PAGES[page];
  if (!render) {
    console.warn(`[router] Unknown page: "${page}"`);
    return;
  }

  // Elements to keep across page transitions
  const keep = ["bridge-navbar", "bridge-panel", "bridge-overlay", "bridge-footer"];

  // Remove only page content — leave navbar / panel / overlay / footer untouched
  document.body.querySelectorAll(":scope > *").forEach((el) => {
    if (!keep.includes(el.id)) el.remove();
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Render new page (sections get appended to body)
  render();

  // ✅ Always move footer to the very end of body so it never ends up on top
  const footer = document.getElementById("bridge-footer");
  if (footer) document.body.appendChild(footer);
}

// ── Listen for navbar "bridge:navigate" events ────────────────────────────────
document.addEventListener("bridge:navigate", (e) => {
  navigate(e.detail.page);
});