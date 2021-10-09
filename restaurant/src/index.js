import initializeWebsite from "./modules/Home";
import loadMenu from "./modules/Menu";
import loadContact from "./modules/Contact";

initializeWebsite();

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => loadMenu());

const contact = document.querySelector(".contact");
contact.addEventListener("click", () => loadContact());

const home = document.querySelector(".home");
home.addEventListener("click", () => initializeWebsite());
