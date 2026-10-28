// Create a function named updateCount that accepts a button as an argument.
// The button passed to this function will be the button the user clicks.
function updateCount(btn) {

  // Find the element with the class "count" inside the clicked button.
  // This element contains the current count, such as "0/10" or "5/10".
  const countEl = btn.querySelector(".count");

  // Get the text inside the count element, such as "5/10".
  // Use split("/") to divide the text into an array: ["5", "10"].
  // Use [0] to select the first item, which is "5".
  // Use the + operator to convert the string "5" into the number 5.
  // Store that number in the currCount variable.
  let currCount = +countEl.textContent.split("/")[0];

  // Check whether the current count has already reached 10.
  // If currCount is exactly 10, return immediately and stop the function.
  // This prevents the count from increasing beyond 10.
  if (currCount === 10) return;

  // Increase the current count by 1.
  // For example, if currCount is 5, it becomes 6.
  currCount++;

  // Update the text inside the count element.
  // Use a template literal to combine the new count with "/10".
  // For example, if currCount is 6, the displayed text becomes "6/10".
  countEl.textContent = `${currCount}/10`;
}

// Select all HTML elements that have the class "emoji-btn".
// querySelectorAll returns a collection of matching elements.
const btns = document.querySelectorAll(".emoji-btn");

// Loop through every button in the collection using forEach.
// The parameter "btn" represents the current button in each iteration.
btns.forEach((btn) => {

  // Add a click event listener to the current button.
  // When the user clicks this button, the callback function runs.
  btn.addEventListener("click", () => {

    // Call updateCount and pass the clicked button as its argument.
    // This allows updateCount to find and update the count
    // belonging to that particular button.
    updateCount(btn);

  });

});
