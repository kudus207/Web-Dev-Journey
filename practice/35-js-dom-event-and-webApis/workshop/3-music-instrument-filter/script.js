// An array containing objects.
// Each object represents a musical instrument and stores its category, name, and price.
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

// Select the dropdown element from the HTML.
// The user will use this dropdown to choose an instrument category.
const selectContainer = document.querySelector("select");

// Select the HTML element that will contain the instrument cards.
const productsContainer = document.querySelector(".products-container");

// This function receives the category selected by the user.
// For example: "woodwinds", "brass", "percussion", or "all".
function instrumentCards(instrumentCategory) {
  // Check whether the user selected "all".
  // If true, use the entire instrumentsArr array.
  // Otherwise, filter the array to keep only instruments
  // whose category matches the selected category.
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          // Destructure the category property from each instrument object.
          // Keep the object only when its category matches instrumentCategory.
          ({ category }) => category === instrumentCategory,
        );

  // Use map() to transform each selected instrument object into an HTML string.
  return (
    instruments
      .map(({ instrument, price }) => {
        // Destructure the instrument name and price from the current object.
        // Insert those values into the HTML template to create a card.
        return `
          <div class="card">
            <h2>${instrument}</h2>
            <p>$${price}</p>
          </div>
        `;
      })

      // map() produces an array of HTML strings.
      // join("") combines all those strings into one continuous HTML string.
      // The empty string prevents commas from appearing between the cards.
      .join("")
  );
}

// Listen for a change in the dropdown's selected option.
selectContainer.addEventListener("change", () => {
  // Get the currently selected category using selectContainer.value.
  // Pass that category to instrumentCards() to generate the appropriate cards.
  // Assign the returned HTML string to innerHTML so the cards appear on the page.
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
