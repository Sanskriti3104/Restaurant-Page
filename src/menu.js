// Select the parent container by ID
const content = document.querySelector("#content");

const menu = document.createElement("div");
menu.classList.add("menu");
menu.classList.add("tab-content");

content.appendChild(menu);