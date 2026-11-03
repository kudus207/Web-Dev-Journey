// Select the textarea and the paragraph that displays the character count
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

// Listen for input events whenever the user types, deletes, or pastes text
textInput.addEventListener("input", (input) => {
  // Check if the textarea contains 50 or more characters
  if (input.target.value.length >= 50) {
    // Keep only the first 50 characters and remove any extra characters
    input.target.value = input.target.value.slice(0, 50);

    // Change the character counter's text colour to red
    charCount.style.color = "red";
  } else {
    // Restore the original text colour when the count is below 50
    charCount.style.color = "#363535";
  }

  // Display the current number of characters in the textarea
  charCount.textContent = `Character Count: ${input.target.value.length}/50`;
});
