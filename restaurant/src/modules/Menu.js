function createMenu() {
  //create menu container and add its class
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  menuContainer.innerHTML = `
  <h1> Italian Restaurant</h1>
  <h3> Delicious Food </h3>
  `;
  //create dishes to menu div
  const dishOne = document.createElement("div");
  dishOne.classList.add("menu-item");
  dishOne.innerHTML = `
  <h2> BREAKFAST </h2>
  <div>
  <h3>HAM AND EGG</h3>
  <p> Lorem ipsum dolor sit, consectetuer adipiscing </p>
  </div>
  <div> 
  <h2> $20  </h2>
</div>
  `;
  menuContainer.appendChild(dishOne);
  return menuContainer;
}

function loadMenu() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(createMenu());
}

export default loadMenu;
