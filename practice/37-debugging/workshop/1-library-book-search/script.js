// An array containing all the books available in the library.
const library = [
  "The Hobbit",
  "1984",
  "Dune",
  "Fahrenheit 451",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "Moby Dick",
  "Pride and Prejudice",
  "Frankenstein",
];

// Select the search button from the HTML.
const searchBtn = document.getElementById("search");

// Select the element that will display the search result or error message.
const statusDisplay = document.getElementById("statusMessage");

// Select the input field where the user enters a book title.
const bookInput = document.getElementById("bookTitleInput");

// Select the element that will display the library scan status.
const scanStatusDisplay = document.getElementById("scanStatus");

// A function that checks whether a requested book exists in the library.
const findBook = (title) => {
  // Check whether the user submitted an empty search field.
  // If it is empty, throw an error with a descriptive message.
  if (title === "") {
    throw new Error("Search field cannot be empty");
  }

  // Check whether the requested book exists in the library array.
  // includes() returns true if the book is found and false if it isn't.
  // If the book is not found, throw an error.
  if (!library.includes(title)) {
    throw new Error(title + " not found!");
  }

  // If neither condition above produces an error,
  // the book exists, so return a success message.
  return title + " is available to borrow!";
};

// Listen for a click on the search button.
searchBtn.addEventListener("click", () => {
  // try contains the code that might produce an error.
  try {
    // Get the value entered by the user.
    // trim() removes unnecessary whitespace from the beginning and end.
    // Pass the cleaned-up title to the findBook() function.
    const result = findBook(bookInput.value.trim());

    // If findBook() succeeds, display its returned success message.
    statusDisplay.textContent = result;
  } catch (err) {
    // If an error occurs inside try, JavaScript moves here.
    // err.message retrieves the actual error message.
    // Display that message to the user.
    statusDisplay.textContent = err.message;

    // Log the complete error information in the browser console.
    console.error(err);
  } finally {
    // finally runs whether the search succeeds or an error occurs.

    // Clear the input field after the search is completed.
    bookInput.value = "";

    // Display a message indicating that the library scan has finished.
    scanStatusDisplay.textContent = "Library scan finished.";
  }
});
