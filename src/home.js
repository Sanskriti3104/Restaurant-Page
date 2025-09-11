// Select the parent container by ID
const content = document.querySelector("#content");

const home = document.createElement("div");
home.classList.add("home");
home.classList.add("tab-content");
home.classList.add("active");

// --- HOME DISPLAY SECTION ---
const homeDisplay = document.createElement("div");
homeDisplay.classList.add("home-display");

// Create image
const homeImage = document.createElement("img");
homeImage.id = "homeImage";
homeImage.alt = "HOMEPAGE";
homeImage.height = 300; // same as HTML attribute

// Create display content container
const displayContent = document.createElement("div");
displayContent.classList.add("display-content");

// Heading and paragraph inside display content
const headingOne = document.createElement("h1");
headingOne.textContent = "Authentic Italian Cuisine";

const paraOne = document.createElement("p");
paraOne.textContent = "Experience the taste of Italy in the heart of the city. Handcrafted dishes made with love and tradition.";

// Append heading and paragraph to display content
displayContent.appendChild(headingOne);
displayContent.appendChild(paraOne);

// Append image and display content to home display
homeDisplay.appendChild(homeImage);
homeDisplay.appendChild(displayContent);

// --- HOME CONTENT SECTION ---
const homeContent = document.createElement("div");
homeContent.classList.add("home-content");

// Home description
const homeDescription = document.createElement("div");
homeDescription.classList.add("home-description");

const headingTwo = document.createElement("h2");
headingTwo.textContent = "Welcome to La Tavola Fresca";

const paraTwo = document.createElement("p");
paraTwo.textContent = "Since 1985, La Tavola Fresca has been serving authentic Italian cuisine made from recipes passed down through generations. Our chefs use only the freshest ingredients imported directly from Italy to create an unforgettable dining experience.";

const paraThree = document.createElement("p");
paraThree.textContent = "Join us for a romantic dinner, family gathering, or business lunch in our warm and inviting atmosphere.";

// Append description elements
homeDescription.appendChild(headingTwo);
homeDescription.appendChild(paraTwo);
homeDescription.appendChild(paraThree);

// Features container
const features = document.createElement("div");
features.classList.add("features");

// --- Feature 1 ---
const featureOne = document.createElement("div");
featureOne.classList.add("feature");

const i1 = document.createElement("i");
i1.classList.add("fas", "fa-utensils");

const headingThree = document.createElement("h3");
headingThree.textContent = "Traditional Recipes";

const paraFour = document.createElement("p");
paraFour.textContent = "Authentic dishes made from century-old family recipes";

featureOne.appendChild(i1);
featureOne.appendChild(headingThree);
featureOne.appendChild(paraFour);

// --- Feature 2 ---
const featureTwo = document.createElement("div");
featureTwo.classList.add("feature");

const i2 = document.createElement("i");
i2.classList.add("fas", "fa-seedling");

const headingThree2 = document.createElement("h3");
headingThree2.textContent = "Fresh Ingredients";

const paraFive = document.createElement("p");
paraFive.textContent = "We source the finest ingredients from local and Italian suppliers";

featureTwo.appendChild(i2);
featureTwo.appendChild(headingThree2);
featureTwo.appendChild(paraFive);

// --- Feature 3 ---
const featureThree = document.createElement("div");
featureThree.classList.add("feature");

const i3 = document.createElement("i");
i3.classList.add("fas", "fa-wine-glass-alt");

const headingThree3 = document.createElement("h3");
headingThree3.textContent = "Extensive Wine List";

const paraSix = document.createElement("p");
paraSix.textContent = "Perfect pairings from Italy's best vineyards";

featureThree.appendChild(i3);
featureThree.appendChild(headingThree3);
featureThree.appendChild(paraSix);

// Append features into features container
features.appendChild(featureOne);
features.appendChild(featureTwo);
features.appendChild(featureThree);

// Append home description and features into home content
homeContent.appendChild(homeDescription);
homeContent.appendChild(features);

// --- Append everything into content container ---
home.appendChild(homeDisplay);
home.appendChild(homeContent);

content.appendChild(home);