

import { loadHero } from "../../components/Hero.js";
import { loadAboutUs } from "../../components/home/AboutUs.js";
import { loadNavbar } from "../../components/Navbar.js";


export function homePage() {
    loadNavbar()
    loadHero()
    loadAboutUs()
}