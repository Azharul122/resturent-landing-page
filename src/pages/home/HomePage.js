

import { loadHero } from "../../components/Hero.js";
import { loadAboutUs } from "../../components/home/AboutUs.js";
import { loadBookATable } from "../../components/home/BookTable.js";
import { loadMenu } from "../../components/home/Menu.js";
import { loadOurMenu } from "../../components/home/OurMenues.js";
import { loadTips } from "../../components/home/OurTips.js";
import { loadSpecialties } from "../../components/home/Specilities.js";
import { loadTestimonial } from "../../components/home/Testomonial.js";
import { loadNavbar } from "../../components/Navbar.js";


export function homePage() {
    loadNavbar()
    loadHero()
    loadAboutUs()
    loadTestimonial()
    loadSpecialties()
    loadMenu()
    loadTips()
    loadOurMenu()
    loadBookATable()
}