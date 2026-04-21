// src/router.js

import { homePage } from "./pages/home/HomePage.js";
import { contactPage } from "./pages/contact/ContactPage.js";

export function navigate(page) {
  if (page === "home") {
    homePage();
  } else if (page === "contact") {
    contactPage();
  }
}