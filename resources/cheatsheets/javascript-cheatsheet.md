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