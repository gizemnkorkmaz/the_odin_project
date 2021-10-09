function createContact() {
  const contactContainer = document.createElement("div");
  contactContainer.innerHTML = `
    Contact: +80 4646 646 64
    `;
  return contactContainer;
}

function loadContact() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(createContact());
}
export default loadContact;
