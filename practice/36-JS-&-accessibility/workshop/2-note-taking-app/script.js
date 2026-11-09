// Select the HTML element with the ID "note"
const noteEl = document.getElementById("note");

// Select the HTML element with the ID "status"
const statusEl = document.getElementById("status");

// Create a variable to store the previous content of the note
let currentContent = "";

// Listen for when the note element receives focus (when the user clicks inside it)
noteEl.addEventListener("focus", () => {
  // Clear the status message when the user starts editing the note
  statusEl.textContent = "";
});

// Listen for when the note element loses focus (when the user clicks outside it)
noteEl.addEventListener("blur", () => {
  // Get the current HTML content inside the note element
  const newContent = noteEl.innerHTML;

  // Check if the note's content is the same as the previously saved content
  if (currentContent === newContent) {
    // Stop the function because nothing has changed
    return;
  }

  // Update currentContent with the new content
  currentContent = newContent;

  // Display the updated note content in the console
  console.log(currentContent);

  // Display a success message because the note content has changed
  statusEl.textContent = "Note saved successfully!";
});

// Listen for when the HTML document has finished loading
window.addEventListener("DOMContentLoaded", () => {
  // Store the note's initial text content when the page first loads
  currentContent = noteEl.textContent;
});
