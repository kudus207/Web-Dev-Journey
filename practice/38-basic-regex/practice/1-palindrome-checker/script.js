const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// Checks whether the supplied text is a palindrome.
const isPalindrome = (text) => {
  // Matches any character that is NOT a letter (a-z) or number (0-9).
  // g = finds all matching characters.
  // i = makes the pattern case-insensitive.
  let regex = /[^a-z0-9]/gi;

  // Removes all unwanted characters and converts the remaining text to lowercase.
  let filteredText = text.replace(regex, "").toLowerCase();

  // Splits the cleaned string into an array of characters,
  // reverses the array, and joins the characters back into a string.
  let reversedText = filteredText.split("").reverse().join("");

  // Compares the cleaned original text with its reversed version.
  // If they are different, the text is not a palindrome.
  if (filteredText !== reversedText) {
    return false;
  }

  // If both strings are equal, the text is a palindrome.
  return true;
};

// Runs the palindrome checker when the button is clicked.
checkBtn.addEventListener("click", () => {
  // Gets the user's input and removes whitespace from both ends.
  let userInput = textInput.value.trim();

  // Checks whether the input is empty or contains only spaces.
  if (userInput === "") {
    alert("Please input a value");
    return; // Stops the function if no valid input was provided.
  }

  // Calls isPalindrome() and displays the appropriate message.
  // The ternary operator chooses between the two possible messages.
  result.textContent = isPalindrome(userInput)
    ? `${userInput} is a palindrome`
    : `${userInput} is not a palindrome`;
});
