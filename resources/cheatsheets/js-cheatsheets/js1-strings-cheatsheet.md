# JavaScript Strings — Detailed Beginner Cheatsheet

---

# 1. What Is a String?

A **string** is a piece of text.

Examples:

```js
const name = "Kudus";
const country = "Nigeria";
const message = "Hello World!";
```

Strings can contain:

* Letters
* Numbers
* Spaces
* Symbols
* Punctuation

```js
const text = "Hello 123!";
```

Even though `123` looks like a number, everything inside the quotes is part of the string.

---

# 2. Creating Strings

JavaScript gives you three common ways to create strings.

### Single quotes

```js
const name = 'John';
```

### Double quotes

```js
const name = "John";
```

### Backticks

```js
const name = `John`;
```

All three create strings.

---

# 3. Template Literals

Backticks are especially useful when you want to insert variables into a string.

```js
const name = "John";

console.log(`Hello ${name}!`);
```

Output:

```text
Hello John!
```

The `${}` syntax allows you to place an expression inside the string.

```js
const age = 25;

console.log(`I am ${age} years old.`);
```

Output:

```text
I am 25 years old.
```

You can also perform calculations:

```js
const price = 100;
const quantity = 3;

console.log(`Total: ${price * quantity}`);
```

Output:

```text
Total: 300
```

### Mental model

```text
`Hello ${name}`
       ↑
   put value here
```

---

# 4. Escape Characters

A backslash `\` allows you to include special characters inside strings.

For example, if you need quotation marks inside a string:

```js
const message = "He said \"Hello\".";
```

Output:

```text
He said "Hello".
```

You can also use single quotes inside double quotes:

```js
const message = "It's a nice day.";
```

Or double quotes inside single quotes:

```js
const message = 'He said "Hello".';
```

Common escape characters:

```text
\n  → new line
\t  → tab
\"  → double quote
\'  → single quote
\\  → backslash
```

Example:

```js
console.log("Hello\nWorld");
```

Output:

```text
Hello
World
```

---

# 5. String Length

`.length` tells you how many UTF-16 code units are in the string.

For ordinary letters, this usually matches what you think of as the number of characters.

```js
const word = "JavaScript";

console.log(word.length);
```

Output:

```text
10
```

### Important

`.length` is a **property**, not a method.

Correct:

```js
word.length
```

Not:

```js
word.length()
```

---

# 6. Practical Use of length

You can use `.length` to check the size of user input.

```js
const password = "abc123";

if (password.length < 8) {
  console.log("Password is too short.");
}
```

You can also use it in loops:

```js
const word = "Hello";

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
```

The loop continues while:

```js
i < word.length
```

---

# 7. 0-Based Indexing

Strings use **0-based indexes**.

Example:

```js
const word = "Hello";
```

Think of it like this:

```text
Character:  H   e   l   l   o
Index:      0   1   2   3   4
```

Therefore:

```js
word[0] // H
word[1] // e
word[2] // l
word[3] // l
word[4] // o
```

---

# 8. Accessing Characters with []

You can access a character using square brackets.

```js
const language = "Python";

console.log(language[0]);
```

Output:

```text
P
```

Another example:

```js
console.log(language[3]);
```

Output:

```text
h
```

---

# 9. Getting the Last Character

The last index is always:

```js
string.length - 1
```

Example:

```js
const word = "JavaScript";

console.log(word[word.length - 1]);
```

Output:

```text
t
```

Why?

```text
length = 10
last index = 10 - 1
           = 9
```

So:

```js
word[9]
```

is the final character.

### Memorize

```js
str[str.length - 1]
```

---

# 10. What Happens with an Invalid Index?

```js
const word = "Hello";

console.log(word[20]);
```

Result:

```text
undefined
```

There is no character at index `20`.

---

# 11. charAt()

`charAt()` also retrieves a character at a specific index.

```js
const word = "Hello";

console.log(word.charAt(1));
```

Output:

```text
e
```

---

# 12. [] vs charAt()

There is a small difference when the index doesn't exist.

Using brackets:

```js
console.log(word[20]);
```

returns:

```text
undefined
```

Using `charAt()`:

```js
console.log(word.charAt(20));
```

returns:

```text
""
```

So:

```text
[]       → undefined
charAt() → ""
```

For modern JavaScript, `[]` is usually the simpler way to access a character.

---

# 13. indexOf()

`indexOf()` searches for something inside a string.

It returns the **index of the first occurrence**.

```js
const sentence = "I love JavaScript";

console.log(sentence.indexOf("love"));
```

Output:

```text
2
```

Why?

```text
I   l   o   v   e
0   2   3   4   5
```

The `"love"` starts at index `2`.

---

# 14. indexOf() When Something Doesn't Exist

```js
const sentence = "I love JavaScript";

console.log(sentence.indexOf("Python"));
```

Output:

```text
-1
```

So:

```text
index >= 0
→ found

index === -1
→ not found
```

Example:

```js
if (sentence.indexOf("JavaScript") !== -1) {
  console.log("Found it!");
}
```

---

# 15. indexOf() with a Starting Position

You can tell `indexOf()` where to start searching.

```js
const text = "cat cat cat";

console.log(text.indexOf("cat"));
```

Output:

```text
0
```

But:

```js
console.log(text.indexOf("cat", 4));
```

Output:

```text
4
```

The second argument means:

> Start searching from this index.

---

# 16. lastIndexOf()

`lastIndexOf()` searches from the end and returns the index of the **last occurrence**.

```js
const text = "cat dog cat";

console.log(text.lastIndexOf("cat"));
```

Output:

```text
8
```

Compare:

```js
text.indexOf("cat");
```

gives:

```text
0
```

while:

```js
text.lastIndexOf("cat");
```

gives:

```text
8
```

### Remember

```text
indexOf()
→ first occurrence

lastIndexOf()
→ last occurrence
```

---

# 17. includes()

`includes()` checks whether a string contains another string.

It returns:

```text
true
```

or:

```text
false
```

Example:

```js
const email = "user@gmail.com";

console.log(email.includes("@"));
```

Output:

```text
true
```

Another:

```js
console.log(email.includes("yahoo"));
```

Output:

```text
false
```

---

# 18. indexOf() vs includes()

Both can check whether something exists.

### indexOf()

```js
const word = "JavaScript";

console.log(word.indexOf("Script"));
```

Result:

```text
4
```

It gives you the **position**.

### includes()

```js
console.log(word.includes("Script"));
```

Result:

```text
true
```

It only tells you whether it exists.

### Mental shortcut

```text
Need the position?
→ indexOf()

Only need true/false?
→ includes()
```

---

# 19. startsWith()

Checks whether a string begins with specific text.

```js
const file = "photo.png";

console.log(file.startsWith("photo"));
```

Output:

```text
true
```

Example:

```js
const url = "https://example.com";

if (url.startsWith("https")) {
  console.log("Secure connection");
}
```

---

# 20. startsWith() with a Position

You can specify where the search should begin.

```js
const text = "Hello JavaScript";

console.log(text.startsWith("Java", 6));
```

Output:

```text
true
```

It checks from index `6`.

---

# 21. endsWith()

Checks whether a string ends with specific text.

```js
const file = "report.pdf";

console.log(file.endsWith(".pdf"));
```

Output:

```text
true
```

Practical example:

```js
if (file.endsWith(".pdf")) {
  console.log("This is a PDF file.");
}
```

---

# 22. Case Sensitivity

Most string comparison/search methods are **case-sensitive**.

For example:

```js
const word = "JavaScript";

console.log(word.includes("javascript"));
```

Result:

```text
false
```

Because:

```text
JavaScript
javascript
```

are not the same capitalization.

You can normalize the string:

```js
const word = "JavaScript";

if (word.toLowerCase().includes("javascript")) {
  console.log("Found!");
}
```

---

# 23. slice()

`slice()` extracts part of a string.

Syntax:

```js
string.slice(start, end)
```

The `end` index is **not included**.

Example:

```js
const word = "JavaScript";

console.log(word.slice(0, 4));
```

Output:

```text
Java
```

Indexes:

```text
J a v a S c r i p t
0 1 2 3 4 5 6 7 8 9
```

`slice(0, 4)` takes:

```text
0
1
2
3
```

but stops before `4`.

---

# 24. slice() Without an End

```js
const word = "JavaScript";

console.log(word.slice(4));
```

Output:

```text
Script
```

If you don't provide an end index, `slice()` continues to the end.

---

# 25. slice() with Negative Numbers

Negative indexes count from the end.

```js
const word = "JavaScript";

console.log(word.slice(-6));
```

Output:

```text
Script
```

Think:

```text
-1 → t
-2 → p
-3 → i
-4 → r
-5 → c
-6 → S
```

Another example:

```js
console.log(word.slice(1, -1));
```

This means:

> Start at index `1` and stop before the last character.

---

# 26. substring()

`substring()` also extracts part of a string.

```js
const text = "Mozilla";

console.log(text.substring(0, 3));
```

Output:

```text
Moz
```

The end index is also excluded.

---

# 27. slice() vs substring()

For beginner use, `slice()` is usually easier to remember.

### slice()

```js
text.slice(1, 5);
```

Supports negative indexes.

```js
text.slice(-3);
```

### substring()

```js
text.substring(1, 5);
```

Negative numbers are treated as `0`.

```js
text.substring(-2, 3);
```

acts like:

```js
text.substring(0, 3);
```

Also, if the first number is larger:

```js
text.substring(5, 2);
```

JavaScript swaps them.

```text
substring(5, 2)
↓
substring(2, 5)
```

### Simple rule

```text
slice()
→ more flexible
→ supports negative indexes

substring()
→ older alternative
→ negative indexes become 0
```

---

# 28. split()

`split()` converts a string into an **array**.

This is extremely important.

```js
const fruits = "Apple,Banana,Orange";

const result = fruits.split(",");

console.log(result);
```

Output:

```js
["Apple", "Banana", "Orange"]
```

The argument tells JavaScript **where to split**.

---

# 29. split() by Spaces

```js
const sentence = "I love coding";

const words = sentence.split(" ");

console.log(words);
```

Output:

```js
["I", "love", "coding"]
```

This is useful when you want to work with individual words.

---

# 30. split() into Characters

```js
const word = "Hello";

console.log(word.split(""));
```

Output:

```js
["H", "e", "l", "l", "o"]
```

This converts the string into an array of individual characters.

---

# 31. split() and Loops

Because `split()` creates an array, you can then loop through it.

```js
const word = "Hello";

const letters = word.split("");

for (const letter of letters) {
  console.log(letter);
}
```

Output:

```text
H
e
l
l
o
```

You can also simply use `for...of` directly on the string:

```js
for (const letter of word) {
  console.log(letter);
}
```

---

# 32. trim()

`trim()` removes whitespace from **both ends** of a string.

```js
const input = "   hello   ";

console.log(input.trim());
```

Output:

```text
hello
```

It does not remove spaces between words.

```js
const input = "   hello world   ";

console.log(input.trim());
```

Result:

```text
hello world
```

---

# 33. trimStart()

Removes whitespace from the beginning.

```js
const text = "   Hello";

console.log(text.trimStart());
```

Result:

```text
Hello
```

The ending spaces, if any, remain.

---

# 34. trimEnd()

Removes whitespace from the end.

```js
const text = "Hello   ";

console.log(text.trimEnd());
```

Result:

```text
Hello
```

---

# 35. trim() Practical Example

Very useful when working with user input.

```js
const username = "   Kudus   ";

const cleanUsername = username.trim();

console.log(cleanUsername);
```

Result:

```text
Kudus
```

This prevents accidental spaces at the beginning or end from affecting your program.

---

# 36. toUpperCase()

Converts letters to uppercase.

```js
const word = "javascript";

console.log(word.toUpperCase());
```

Output:

```text
JAVASCRIPT
```

---

# 37. toLowerCase()

Converts letters to lowercase.

```js
const word = "JAVASCRIPT";

console.log(word.toLowerCase());
```

Output:

```text
javascript
```

---

# 38. Case-Insensitive Comparison

A very common pattern:

```js
const answer = "YES";

if (answer.toLowerCase() === "yes") {
  console.log("Correct");
}
```

The idea is:

```text
User input
   ↓
Convert to lowercase
   ↓
Compare with lowercase version
```

This allows:

```text
YES
Yes
yes
YeS
```

to all be treated the same.

---

# 39. replace()

`replace()` replaces the **first matching occurrence**.

```js
const text = "cat cat cat";

console.log(text.replace("cat", "dog"));
```

Output:

```text
dog cat cat
```

Only the first `"cat"` was replaced.

---

# 40. replaceAll()

`replaceAll()` replaces every matching occurrence.

```js
const text = "cat cat cat";

console.log(text.replaceAll("cat", "dog"));
```

Output:

```text
dog dog dog
```

### Remember

```text
replace()
→ first match

replaceAll()
→ every match
```

---

# 41. replace() with Regular Expressions

Regular expressions allow more advanced searching.

Example:

```js
const text = "Black black BLACK";

console.log(text.replace(/black/i, "white"));
```

The `i` means case-insensitive.

However, this still replaces only the first match.

To replace all case-insensitive matches:

```js
console.log(text.replace(/black/gi, "white"));
```

The `g` means global.

---

# 42. repeat()

`repeat()` repeats a string.

```js
const star = "*";

console.log(star.repeat(5));
```

Output:

```text
*****
```

Practical example:

```js
console.log("-".repeat(20));
```

Output:

```text
--------------------
```

This is useful for creating visual separators.

---

# 43. padStart()

`padStart()` adds characters to the **beginning** until the string reaches a specified length.

```js
const hour = "5";

console.log(hour.padStart(2, "0"));
```

Output:

```text
05
```

Why?

The desired length is `2`.

Current length:

```text
1
```

So JavaScript adds one `"0"`.

---

# 44. padEnd()

`padEnd()` adds characters to the **end**.

```js
const product = "Apple";

console.log(product.padEnd(10, "."));
```

Output:

```text
Apple.....
```

The final string has a length of `10`.

---

# 45. concat()

`concat()` joins strings.

```js
const first = "Hello";
const second = "World";

console.log(first.concat(" ", second));
```

Output:

```text
Hello World
```

However, template literals are often easier to read:

```js
console.log(`${first} ${second}`);
```

---

# 46. String Concatenation with +

You can also join strings with `+`.

```js
const firstName = "John";
const lastName = "Doe";

const fullName = firstName + " " + lastName;

console.log(fullName);
```

Output:

```text
John Doe
```

For more complicated strings, template literals are usually cleaner:

```js
const fullName = `${firstName} ${lastName}`;
```

---

# 47. String()

`String()` converts a value into a string.

```js
String(123);
```

Result:

```text
"123"
```

Other examples:

```js
String(true);
// "true"

String(false);
// "false"

String(null);
// "null"
```

This works with many JavaScript values.

---

# 48. toString()

Many values have a `.toString()` method.

```js
const age = 25;

console.log(age.toString());
```

Result:

```text
"25"
```

Another example:

```js
const number = 100;

const text = number.toString();

console.log(text);
```

---

# 49. String() vs toString()

For basic conversion:

```js
String(value)
```

is often safer because it can handle `null` and `undefined`.

For example:

```js
String(null);
```

returns:

```text
"null"
```

But:

```js
null.toString();
```

causes an error.

### Simple rule

```text
String(value)
→ general-purpose conversion

value.toString()
→ call the value's method when you know it supports it
```

---

# 50. Strings Are Immutable

This is one of the most important concepts.

**Strings cannot be changed directly.**

Example:

```js
let name = "John";

name[0] = "B";

console.log(name);
```

Result:

```text
John
```

The `"J"` was not changed.

---

# 51. String Methods Return New Strings

Instead of modifying the original string, methods generally create and return a new string.

```js
let name = "John";

name = name.replace("J", "B");

console.log(name);
```

Output:

```text
Bohn
```

Think:

```text
Original
   ↓
"John"
   ↓
replace()
   ↓
New string
   ↓
"Bohn"
```

If you don't store the result:

```js
let name = "John";

name.replace("J", "B");

console.log(name);
```

It still gives:

```text
John
```

because the returned string wasn't assigned back.

---

# 52. String Methods Can Be Chained

Because many string methods return strings, you can use one after another.

Example:

```js
const username = "   KUDUS   ";

const cleanName = username.trim().toLowerCase();

console.log(cleanName);
```

Result:

```text
kudus
```

What's happening?

```text
"   KUDUS   "
      ↓
trim()
      ↓
"KUDUS"
      ↓
toLowerCase()
      ↓
"kudus"
```

Another example:

```js
const word = "  hello  ";

console.log(word.trim().toUpperCase());
```

Result:

```text
HELLO
```

---

# 53. Searching + Conditions

String methods become especially useful with `if`.

```js
const email = "user@gmail.com";

if (email.includes("@")) {
  console.log("Contains @");
}
```

Another:

```js
const filename = "picture.jpg";

if (filename.endsWith(".jpg")) {
  console.log("This is a JPG image.");
}
```

Another:

```js
const username = "admin123";

if (username.startsWith("admin")) {
  console.log("Administrator account");
}
```

---

# 54. Strings + Loops

You can combine strings with loops to solve many problems.

Example: count vowels.

```js
function getVowelCount(word) {

  let count = 0;

  for (const letter of word) {

    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++;
    }

  }

  return count;
}
```

The important pattern is:

```text
String
   ↓
Loop through each character
   ↓
Check each character
   ↓
Count if condition is true
```

---

# 55. Strings + Indexes

You can also use a regular `for` loop.

```js
const word = "banana";

for (let i = 0; i < word.length; i++) {

  console.log(word[i]);

}
```

This gives you both:

```text
index
+
character
```

That can be useful when the position matters.

---

# 56. Finding a Character's Position

```js
const word = "banana";

for (let i = 0; i < word.length; i++) {

  if (word[i] === "n") {
    console.log(i);
  }

}
```

Output:

```text
2
4
```

This is similar to what `indexOf()` does, but a loop gives you more control.

---

# 57. Reverse a String

One common beginner exercise is reversing a string.

```js
const word = "hello";

let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {

  reversed += word[i];

}

console.log(reversed);
```

Output:

```text
olleh
```

The important idea:

```text
Start at the last character
        ↓
Move backwards
        ↓
Add each character to reversed
```

---

# 58. split() + reverse() + join()

There is another way to reverse a string.

```js
const word = "hello";

const reversed = word
  .split("")
  .reverse()
  .join("");

console.log(reversed);
```

Result:

```text
olleh
```

What's happening?

```text
"hello"
   ↓
split("")
   ↓
["h", "e", "l", "l", "o"]
   ↓
reverse()
   ↓
["o", "l", "l", "e", "h"]
   ↓
join("")
   ↓
"olleh"
```

This is a good example of how strings and arrays work together.

---

# 59. String → Array → String

This is an important relationship to remember.

### String to array

```js
const word = "Hello";

const letters = word.split("");
```

Result:

```js
["H", "e", "l", "l", "o"]
```

### Array back to string

```js
const result = letters.join("");
```

Result:

```text
Hello
```

So:

```text
STRING
   ↓
split()
   ↓
ARRAY
   ↓
join()
   ↓
STRING
```

---

# 60. join() — Important Companion to split()

`join()` is actually an **array method**, not a string method.

It joins array elements into a string.

```js
const words = ["I", "love", "JavaScript"];

console.log(words.join(" "));
```

Output:

```text
I love JavaScript
```

Another:

```js
console.log(words.join("-"));
```

Output:

```text
I-love-JavaScript
```

Remember:

```text
split()
→ String → Array

join()
→ Array → String
```

---

# 61. String Comparison

You can compare strings using:

```js
===
```

Example:

```js
const password = "1234";

if (password === "1234") {
  console.log("Correct");
}
```

String comparison is case-sensitive:

```js
"Hello" === "hello"
```

Result:

```text
false
```

---

# 62. Case-Insensitive String Comparison

Convert both strings to the same case.

```js
const answer = "YES";

if (answer.toLowerCase() === "yes") {
  console.log("Correct");
}
```

Or:

```js
const input = "  YES  ";

if (input.trim().toLowerCase() === "yes") {
  console.log("Correct");
}
```

This is a very common pattern for user input.

---

# 63. Common String Validation Pattern

You will frequently see:

```js
const input = "  Hello ";

const cleanInput = input.trim().toLowerCase();

if (cleanInput === "hello") {
  console.log("Correct");
}
```

Think:

```text
Input
 ↓
trim()
 ↓
toLowerCase()
 ↓
Compare
```

This is useful when you don't care about accidental spaces or capitalization.

---

# 64. Checking an Empty String

A string can have a length of `0`.

```js
const name = "";

console.log(name.length);
```

Output:

```text
0
```

You can check:

```js
if (name.length === 0) {
  console.log("Name is empty.");
}
```

Or:

```js
if (name === "") {
  console.log("Name is empty.");
}
```

---

# 65. Checking for Whitespace-Only Input

Consider:

```js
const name = "   ";
```

This technically isn't an empty string.

```js
name.length
```

is greater than `0`.

But after trimming:

```js
name.trim()
```

becomes:

```text
""
```

So:

```js
if (name.trim() === "") {
  console.log("No name entered.");
}
```

This is a useful real-world pattern.

---

# 66. Common String Patterns

## Get first character

```js
const first = str[0];
```

## Get last character

```js
const last = str[str.length - 1];
```

## Get string length

```js
const length = str.length;
```

## Check if text exists

```js
str.includes("text");
```

## Find first position

```js
str.indexOf("text");
```

## Find last position

```js
str.lastIndexOf("text");
```

## Get part of string

```js
str.slice(start, end);
```

## Convert to array

```js
str.split("");
```

## Remove outer whitespace

```js
str.trim();
```

## Lowercase

```js
str.toLowerCase();
```

## Uppercase

```js
str.toUpperCase();
```

## Replace first match

```js
str.replace("old", "new");
```

## Replace all

```js
str.replaceAll("old", "new");
```

---

# 67. Common Mistakes

## Mistake 1 — Forgetting 0-based indexing

Wrong thinking:

```text
First character = index 1
```

Correct:

```text
First character = index 0
```

---

## Mistake 2 — Using length as the last index

If:

```js
const word = "Hello";
```

then:

```js
word.length
```

is:

```text
5
```

But:

```js
word[5]
```

doesn't exist.

The last index is:

```js
word.length - 1
```

which is:

```text
4
```

---

# 68. Common Mistake — slice() End Index

Remember:

```js
str.slice(0, 4)
```

does **not** include index `4`.

It takes:

```text
0
1
2
3
```

The end is exclusive.

---

# 69. Common Mistake — Forgetting String Immutability

This:

```js
let word = "hello";

word.toUpperCase();

console.log(word);
```

still gives:

```text
hello
```

Correct:

```js
word = word.toUpperCase();
```

Now:

```text
HELLO
```

---

# 70. Common Mistake — replace() Only Replaces the First Match

```js
const text = "cat cat cat";

text.replace("cat", "dog");
```

Result:

```text
dog cat cat
```

For all:

```js
text.replaceAll("cat", "dog");
```

Result:

```text
dog dog dog
```

---

# 71. Common Mistake — Confusing String and Array Methods

Some methods belong to strings.

```js
str.slice()
str.includes()
str.indexOf()
str.toUpperCase()
str.split()
```

Some methods belong to arrays.

```js
array.push()
array.pop()
array.join()
array.reverse()
array.map()
```

For example:

```js
"Hello".join("");
```

is wrong because `join()` is an array method.

Instead:

```js
"Hello".split("").join("");
```

---

# 72. Important String → Array Relationship

You already know arrays and strings separately.

Remember this connection:

```text
STRING
"hello"

      split("")
          ↓

ARRAY
["h", "e", "l", "l", "o"]

      join("")
          ↓

STRING
"hello"
```

This connection is extremely useful when solving string problems.

---

# 73. Quick Reference Table

| Method / Property | Returns              | Changes Original? | Main Use                    |
| ----------------- | -------------------- | ----------------- | --------------------------- |
| `.length`         | Number               | ❌                 | Count characters            |
| `[index]`         | String / `undefined` | ❌                 | Access character            |
| `.charAt()`       | String               | ❌                 | Access character            |
| `.indexOf()`      | Number               | ❌                 | Find first position         |
| `.lastIndexOf()`  | Number               | ❌                 | Find last position          |
| `.includes()`     | Boolean              | ❌                 | Check existence             |
| `.startsWith()`   | Boolean              | ❌                 | Check beginning             |
| `.endsWith()`     | Boolean              | ❌                 | Check ending                |
| `.slice()`        | String               | ❌                 | Extract part                |
| `.substring()`    | String               | ❌                 | Extract part                |
| `.split()`        | Array                | ❌                 | Convert to array            |
| `.trim()`         | String               | ❌                 | Remove outer whitespace     |
| `.trimStart()`    | String               | ❌                 | Remove beginning whitespace |
| `.trimEnd()`      | String               | ❌                 | Remove ending whitespace    |
| `.toUpperCase()`  | String               | ❌                 | Uppercase                   |
| `.toLowerCase()`  | String               | ❌                 | Lowercase                   |
| `.replace()`      | String               | ❌                 | Replace first match         |
| `.replaceAll()`   | String               | ❌                 | Replace all matches         |
| `.repeat()`       | String               | ❌                 | Repeat text                 |
| `.padStart()`     | String               | ❌                 | Add padding at beginning    |
| `.padEnd()`       | String               | ❌                 | Add padding at end          |
| `.concat()`       | String               | ❌                 | Combine strings             |
| `String()`        | String               | ❌                 | Convert value to string     |
| `.toString()`     | String               | ❌                 | Convert value to string     |

---

# 74. Most Important String Methods to Master First

You don't need to memorize everything at once.

For your current JavaScript level, prioritize these:

### Level 1 — Essential

```js
.length
[index]
.toUpperCase()
.toLowerCase()
.includes()
.indexOf()
.slice()
.split()
.trim()
```

### Level 2 — Very Useful

```js
.startsWith()
.endsWith()
.replace()
.replaceAll()
.charAt()
```

### Level 3 — Useful Helpers

```js
.repeat()
.padStart()
.padEnd()
.substring()
.concat()
```

### Level 4 — Conversion

```js
String()
.toString()
```

---

# 75. String Decision Guide

When working with a string, ask:

### "How many characters?"

```js
str.length
```

### "What character is at this position?"

```js
str[index]
```

### "Does this text exist?"

```js
str.includes("text")
```

### "Where does this text start?"

```js
str.indexOf("text")
```

### "Where does the last occurrence start?"

```js
str.lastIndexOf("text")
```

### "Does it start with this?"

```js
str.startsWith("text")
```

### "Does it end with this?"

```js
str.endsWith("text")
```

### "I need part of the string."

```js
str.slice(start, end)
```

### "I need individual words/characters."

```js
str.split(...)
```

### "I need to remove accidental spaces."

```js
str.trim()
```

### "I need everything lowercase."

```js
str.toLowerCase()
```

### "I need everything uppercase."

```js
str.toUpperCase()
```

### "I need to change some text."

```js
str.replace(...)
```

### "I need to change every occurrence."

```js
str.replaceAll(...)
```

---

# 76. Big-Picture String Mental Model

Think of a string as:

```text
"JavaScript"
     ↓
A sequence of characters
     ↓
Each character has an index
```

```text
J  a  v  a  S  c  r  i  p  t
0  1  2  3  4  5  6  7  8  9
```

From there, you can:

```text
ACCESS
↓
str[index]

SEARCH
↓
includes()
indexOf()
lastIndexOf()

CHECK
↓
startsWith()
endsWith()

EXTRACT
↓
slice()
substring()

TRANSFORM
↓
toUpperCase()
toLowerCase()
replace()
replaceAll()

CLEAN
↓
trim()
trimStart()
trimEnd()

CONVERT
↓
split()
```

---

# 77. The Most Important Things to Remember

```text
1. Strings use 0-based indexing.

2. str.length gives the string's length.

3. Last character:
   str[str.length - 1]

4. Strings are immutable.

5. String methods generally return a new string.

6. indexOf() gives a position.
   includes() gives true/false.

7. indexOf() returns -1 when not found.

8. slice(start, end) does not include end.

9. split() converts a string into an array.

10. join() converts an array into a string.

11. toLowerCase() and toUpperCase()
    are useful for case-insensitive comparisons.

12. trim() removes whitespace from the beginning
    and end.

13. replace() replaces the first match.

14. replaceAll() replaces all matches.

15. for...of can loop directly through
    the characters of a string.
```

---

# 78. Final String Mental Picture

When you see a string problem, don't immediately start coding.

First ask:

```text
What am I trying to do?
```

Then choose the tool.

```text
COUNT?
→ length

GET CHARACTER?
→ [index]

SEARCH?
→ includes / indexOf

CHECK BEGINNING?
→ startsWith

CHECK END?
→ endsWith

EXTRACT?
→ slice

CLEAN?
→ trim

CHANGE CASE?
→ toLowerCase / toUpperCase

REPLACE?
→ replace / replaceAll

BREAK INTO PIECES?
→ split

LOOP THROUGH CHARACTERS?
→ for...of

NEED INDEX + CHARACTER?
→ regular for loop

NEED ARRAY OPERATIONS?
→ split() first
```

The biggest connection to keep in your head is:

```text
                 STRING
                    │
       ┌────────────┼────────────┐
       ↓            ↓            ↓
    SEARCH       EXTRACT      MODIFY
       │            │            │
 includes()      slice()     replace()
 indexOf()       substring()  toUpperCase()
 lastIndexOf()                toLowerCase()
       │
       │
       ↓
     split()
       ↓
      ARRAY
       ↓
   array methods
       ↓
     join()
       ↓
    STRING
```

Once you understand that relationship, strings become much easier to work with because you're no longer trying to memorize isolated methods — you're choosing a tool based on **what you want to do with the text**.
