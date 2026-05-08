<!-- string length -->
To get the length of a string, you can use the length property. This property returns the number of characters in a string.

Here is an example:

Example Code
const greeting = "Hello, world!";

// Output: 13
console.log(greeting.length);

<!-- string index -->
javascript is 0 based index which means first character in a string position is 0, second 1 and so on.
to access the later you use bracket[] and the index.
example
const subject = "JavaScript";
console.log(subject[0]); return J

To access last character in a string;
Example Code
const firstName = "Jessica";

// returns "a"
firstName[firstName.length - 1];

string.length - 1 will always give you the last index number for a string.

<!-- string indexOf method -->
the indexOf method returns the index position of the first occurrence of a substring in a string. If the substring is not found, it returns -1.
Example Code
const sentence = "I love to learn.";

// returns index 2
console.log(sentence.indexOf("love"));

// returns -1
console.log(sentence.indexOf("hate"));

The indexOf method is case-sensitive. So the substring "learning" is not the same as the substring "Learning".

<!-- string includes method -->
the includes() method checks if a string contains a specific substring and returns true or false.

Here is an example using the includes() method:

Example Code
const text = "Hello World";
const hasHello = text.includes("Hello");
console.log(hasHello); // true

The includes() method is case-sensitive, meaning it distinguishes between uppercase and lowercase letters.

<!-- string slice method -->
 The slice() method extracts a section of a string. It takes two arguments: the start index (included) and the end index (not included).

Here is an example:

Example Code
const greeting = "Hello World";
const firstWord = greeting.slice(0, 5);
console.log(firstWord); // "Hello"

The slice() method can use negative indices to count from the end of the string. -1 refers to the last character.

Here is an example:

Example Code
const text = "JavaScript";
const lastThree = text.slice(-3);
console.log(lastThree); // "ipt"

<!-- string trim method -->
trim() method is used to remove extra whitespace.

Here is an example:

Example Code
const sentence = "  Learning about the trim method.  ";
sentence.trim(); // "Learning about the trim method."
<!-- trimStart -->
There will be times where you will want to only trim whitespace at the beginning of the string. That is where the trimStart() method comes in handy.

Here is an example:

Example Code
const sentence = "  I love learning.  ";
sentence.trimStart(); // "I love learning.  "
Remember that strings are immutable. This method will create a new string with the result. Not modify the original one.
<!-- trimEnd -->
To trim whitespace at the end of a string, you can use the trimEnd() method.

Here is an example:

Example Code
const sentence = "  I love learning.  ";
sentence.trimEnd(); // "  I love learning."

<!-- string to UPPERCASE -->
To create a new string with all of the letters converted to uppercase, you can use the toUpperCase() method.

Here is an example:

Example Code
const sentence = "I love to code!";
sentence.toUpperCase(); // "I LOVE TO CODE!"

<!-- string to lowercase -->
If you need to create a new string where all of the letters are in lowercase, you can use the toLowerCase() method.

<!-- string replace method -->
the replace() method is used to locate a substring in a string and replace it with another value.First occurance only.

Here is an example:

Example Code
const text = "I love JavaScript!";
const newText = text.replace("JavaScript", "coding");
// Result: "I love coding!"
Remember that strings are immutable which means the original text is not modified in that example. A new string is created instead.

<!-- replaceAll method -->
replaceAll() method: This method returns a new string for all matches to the substring.

<!-- string repeat method -->
you can repeat a string a specific number of times using the repeat() method. Here is an example:

Example Code
const word = "Hello!";
const repeatedWord = word.repeat(3);

console.log(repeatedWord);  // "Hello!Hello!Hello!"
Since strings are immutable, this method will not modify the original string. It will return a new string with the repeated content.
