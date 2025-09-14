// Select the parent container by ID
const content = document.querySelector("#content");

// Create the main menu container
const menu = document.createElement("div");
menu.className = "menu tab-content";

// Heading
const h2 = document.createElement("h2");
h2.textContent = "Our Menu";
menu.appendChild(h2);

// Description paragraph
const p = document.createElement("p");
p.textContent = "Indulge in our exquisite selection of traditional Italian dishes, prepared with passion and the finest ingredients.";
menu.appendChild(p);

// Helper function to create dish sections
function createDishSection(title, dishes, imgAlt) {
  const sectionTitle = document.createElement("h3");
  sectionTitle.className = "dish-title";
  sectionTitle.textContent = title;

  const menuItems = document.createElement("div");
  menuItems.className = "menu-items";

  dishes.forEach(dish => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const img = document.createElement("img");
    img.alt = imgAlt;
    img.id = dish.id;

    const dishInfo = document.createElement("div");
    dishInfo.className = "dish-info";

    const dishName = document.createElement("h3");
    dishName.className = "dish-name";
    dishName.textContent = dish.name;

    const dishDesc = document.createElement("p");
    dishDesc.textContent = dish.desc;

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = dish.price;

    dishInfo.appendChild(dishName);
    dishInfo.appendChild(dishDesc);
    dishInfo.appendChild(price);

    menuItem.appendChild(img);
    menuItem.appendChild(dishInfo);
    menuItems.appendChild(menuItem);
  });

  menu.appendChild(sectionTitle);
  menu.appendChild(menuItems);
}

// Pizza dishes
createDishSection("Pizza", [
  { id: "MargheritaClassica", name: "Margherita Classica", desc: "Fresh tomato sauce, mozzarella, basil leaves, drizzle of olive oil.", price: "$4.99" },
  { id: "PepperoniPizza", name: "Pepperoni Pizza", desc: "Tomato base, mozzarella, spicy pepperoni slices, oregano.", price: "$6.99" },
  { id: "VerdureGrigliate", name: "Verdure Grigliate", desc: "Grilled zucchini, bell peppers, mushrooms, onions, mozzarella, tomato sauce.", price: "$5.79" }
], "Pizza");

// Pasta dishes
createDishSection("Pasta", [
  { id: "SpaghettiAglioEOlio", name: "Spaghetti Aglio e Olio", desc: "Spaghetti, garlic, red chili flakes, parsley, olive oil.", price: "$4.59" },
  { id: "PenneAlfredo", name: "Penne Alfredo", desc: "Creamy parmesan sauce, penne pasta, mushrooms, garlic, parsley.", price: "$6.29" },
  { id: "LasagnaAlForno", name: "Lasagna al Forno", desc: "Layers of pasta, rich tomato ragù, béchamel sauce, mozzarella.", price: "$7.49" }
], "Pasta");

content.appendChild(menu);