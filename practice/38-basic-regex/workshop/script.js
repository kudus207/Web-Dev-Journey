const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

// Matches messages containing either "please help" OR "assist me".
// | means OR, while i makes the pattern case-insensitive.
const helpRegex = /please help|assist me/i;

// Matches dollar amounts such as "10 dollars", "1 hundred dollars",
// or "5 million dollars".
// [0-9]+       = one or more digits.
// \s*          = zero or more whitespace characters.
// (?:...)      = non-capturing group for alternative quantity words.
// ?            = makes the quantity word optional.
// \s+          = requires one or more whitespace characters before "dollars".
// i            = case-insensitive matching.
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

// Detects "free money", including attempts to replace letters with numbers.
// (?:^|\s)     = phrase must start at the beginning or after whitespace.
// [e3]         = matches either "e" or "3".
// [o0]         = matches either "o" or "0".
// [e3]         = also allows "e" or "3" in the word "money".
// (?:$|\s)     = phrase must end at the end or before whitespace.
// i            = case-insensitive matching.
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

// Detects "stock alert", including disguised letters and symbols.
// (?:^|\s)     = beginning of message or whitespace before the phrase.
// [s5]         = matches "s" or "5".
// [t7]         = matches "t" or "7".
// [o0]         = matches "o" or "0".
// [c{[(]       = matches c or one of the listed symbols.
// k            = matches the literal letter k.
// [a@4]        = matches "a", "@", or "4".
// l            = matches the literal letter l.
// [e3]         = matches "e" or "3".
// [t7]         = matches "t" or "7".
// (?:$|\s)     = end of message or whitespace after the phrase.
// i            = case-insensitive matching.
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

// Detects "dear friend", including disguised letters and numbers.
// (?:^|\s)     = beginning of message or whitespace before the phrase.
// [e3]         = matches "e" or "3".
// [a@4]        = matches "a", "@", or "4".
// fr           = matches the literal letters "fr".
// [i1|]        = matches "i", "1", or the pipe symbol.
// [e3]         = matches "e" or "3".
// nd           = matches the literal letters "nd".
// (?:$|\s)     = end of message or whitespace after the phrase.
// i            = case-insensitive matching.
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

// Stores all spam detection patterns in one array.
// This makes it easy to check multiple spam patterns together.
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// Checks whether at least ONE regex in denyList matches the message.
// .some() returns true as soon as one condition passes.
// regex.test(msg) checks whether the current regex finds a match.
// If no regex matches, .some() returns false.
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

// Runs this function when the user clicks the check message button.
checkMessageButton.addEventListener("click", () => {
  // Checks whether the input is empty.
  // If it is empty, display an alert and stop the function.
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  // Calls isSpam() to check the user's message.
  // If true, display a spam warning.
  // If false, display a message saying no spam was detected.
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";

  // Clears the input field after checking the message.
  messageInput.value = "";
});
