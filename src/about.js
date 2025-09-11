// Select the parent container by ID
const content = document.querySelector("#content");

const about = document.createElement("div");
about.classList.add("about");
about.classList.add("tab-content");

content.appendChild(about);