// Select the empty div
const contentDiv = document.getElementById('content');

// Create outer "about" div
const aboutDiv = document.createElement('div');
aboutDiv.className = 'about tab-content';

// Create h2 element
const heading = document.createElement('h2');
heading.textContent = 'Our Story';
aboutDiv.appendChild(heading);

// Create inner "about-content" div
const aboutContent = document.createElement('div');
aboutContent.className = 'about-content';

// Create first child div for paragraphs
const textDiv = document.createElement('div');

// Paragraph 1
const p1 = document.createElement('p');
p1.textContent = 'La Tavola Fresca was founded in 1985 by Giuseppe and Maria Rossi, who brought their family recipes from Naples to share with the world. What started as a small trattoria has grown into an award-winning restaurant known for its authentic Italian cuisine.';
textDiv.appendChild(p1);

// Paragraph 2
const p2 = document.createElement('p');
p2.textContent = 'Today, their son Marco continues the tradition, ensuring every dish meets the high standards set by his parents. Our chefs train in Italy to perfect their craft and bring you the true flavors of Italian cuisine.';
textDiv.appendChild(p2);

// Paragraph 3
const p3 = document.createElement('p');
p3.textContent = 'We believe in the Italian philosophy of "cucina con amore" - cooking with love. This is reflected in every dish we serve, from our homemade pasta to our wood-fired pizzas.';
textDiv.appendChild(p3);

// Append text div to about-content
aboutContent.appendChild(textDiv);

// Create second child div for image
const imageDiv = document.createElement('div');
imageDiv.className = 'about-image';

const image = document.createElement('img');
image.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
image.alt = 'Restaurant Interior';
imageDiv.appendChild(image);

// Append image div to about-content
aboutContent.appendChild(imageDiv);

// Append about-content to about div
aboutDiv.appendChild(aboutContent);

// Append the complete aboutDiv to the main content div
contentDiv.appendChild(aboutDiv);
