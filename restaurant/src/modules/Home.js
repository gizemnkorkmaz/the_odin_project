function createNavbar() {
  const content = document.querySelector("#content");
  const navbar = document.createElement("nav");
  const home = document.createElement("a");
  const menu = document.createElement("a");
  const contact = document.createElement("a");
  navbar.classList.add("navbar");
  home.innerHTML = "Home";
  menu.innerHTML = "Menu";
  contact.innerHTML = "Contact";
  home.classList.add("nav-link", "home");
  menu.classList.add("nav-link", "menu");
  contact.classList.add("nav-link", "contact");
  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);
  content.appendChild(navbar);
  return navbar;
}

function createMainDiv() {
  const main = document.createElement("div");
  main.classList.add("main");
  return main;
}
function createHome() {
  const homeContainer = document.createElement("div");
  homeContainer.innerHTML = `
    Welcome
    `;
  return homeContainer;
}

function initializeWebsite() {
  const content = document.querySelector("#content");
  content.appendChild(createNavbar());
  content.appendChild(createMainDiv());
  content.appendChild(createHome());
}
export default initializeWebsite;
