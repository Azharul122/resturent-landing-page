import { contactUsPage } from "./pages/contact/ContactUs.js";
import { homePage }      from "./pages/home/HomePage.js";


const PAGES = {
  home:    homePage,
  contact: contactUsPage,
};


export function navigate(page) {
  const render = PAGES[page];
  if (!render) {
    console.warn(`[router] Unknown page: "${page}"`);
    return;
  }


  const keep = ["bridge-navbar", "bridge-panel", "bridge-overlay", "bridge-footer"];


  document.body.querySelectorAll(":scope > *").forEach((el) => {
    if (!keep.includes(el.id)) el.remove();
  });


  window.scrollTo({ top: 0, behavior: "smooth" });


  render();

  const footer = document.getElementById("bridge-footer");
  if (footer) document.body.appendChild(footer);
}

document.addEventListener("bridge:navigate", (e) => {
  navigate(e.detail.page);
});