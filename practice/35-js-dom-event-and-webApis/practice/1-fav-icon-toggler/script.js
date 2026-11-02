// Select all buttons with the class "favorite-icon"
const hearts = document.querySelectorAll(".favorite-icon");

// Loop through each heart button
hearts.forEach((heart) => {
  // Add a click event listener to the current button
  heart.addEventListener("click", () => {
    // Check if the clicked button already has the "filled" class
    if (heart.classList.contains("filled")) {
      // If filled, change the heart back to an empty heart
      heart.innerHTML = "&#9825;";

      // Remove the "filled" class from the button
      heart.classList.remove("filled");
    } else {
      // If not filled, change the heart to a filled heart
      heart.innerHTML = "&#10084;";

      // Add the "filled" class to the button
      heart.classList.add("filled");
    }
  });
});
