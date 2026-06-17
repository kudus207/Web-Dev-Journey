# JavaScript String Cheatsheet

---

# 1. Creating Strings

Strings are used to store text. They can be written using single quotes, double quotes, or backticks.

```js
const firstName = "John";
const lastName = 'Doe';
const greeting = `Hello!`;
```

Template literals (backticks) allow interpolation.

```js
const name = "Jessica";

console.log(`Hello ${name}!`);
// Hello Jessica!
```

---

# 2. String Length

The `.length` property returns the total number of characters in a string.

```js
const word = "JavaScript";

console.log(word.length);
// 10
```

Practical Example

```js
const password = "abc123";

if (password.length < 8) {
    console.log("Password is too short.");
}
```

> **Note:** Emojis may count as more than one character because JavaScript stores strings using UTF-16.

```js
const rocket = "🚀";

console.log(rocket.length);
// 2
```

---

# 3. Accessing Characters

Strings use **0-based indexing**.

```js
const language = "Python";

console.log(language[0]);
// "P"

console.log(language[3]);
// "h"
```

Last Character

```js
const name = "Jessica";

console.log(name[name.length - 1]);
// "a"
```

---

# 4. charAt()

Returns the character at a given index.

```js
const text = "React";

console.log(text.charAt(2));
// "a"
```

Difference between `[]` and `charAt()`

```js
console.log(text[20]);
// undefined

console.log(text.charAt(20));
// ""
```

---

# 5. indexOf()

Returns the index of the **first occurrence** of a substring.

Returns **-1** if not found.

```js
const sentence = "I love JavaScript.";

console.log(sentence.indexOf("love"));
// 2

console.log(sentence.indexOf("Python"));
// -1
```

Start searching from a position

```js
const text = "cat cat cat";

console.log(text.indexOf("cat", 4));
// 4
```

---

# 6. lastIndexOf()

Returns the index of the **last occurrence**.

```js
const text = "apple banana apple";

console.log(text.lastIndexOf("apple"));
// 13
```

---

# 7. includes()

Returns **true** or **false**.

```js
const email = "user@gmail.com";

console.log(email.includes("@"));
// true

console.log(email.includes("Yahoo"));
// false
```

Practical Example

```js
if (email.includes(".com")) {
    console.log("Valid domain");
}
```

---

# 8. startsWith()

Checks whether a string begins with a substring.

```js
const file = "photo.png";

console.log(file.startsWith("photo"));
// true
```

Starting from another index

```js
const text = "Hello JavaScript";

console.log(text.startsWith("Java", 6));
// true
```

---

# 9. endsWith()

Checks whether a string ends with a substring.

```js
const file = "report.pdf";

console.log(file.endsWith(".pdf"));
// true

console.log(file.endsWith(".png"));
// false
```

---

# 10. slice()

Extracts part of a string.

The ending index is **not included**.

```js
const word = "JavaScript";

console.log(word.slice(0,4));
// "Java"

console.log(word.slice(4));
// "Script"
```

Negative indices

```js
console.log(word.slice(-6));
// "Script"

console.log(word.slice(1,-1));
// "avaScrip"
```

---

# 11. substring()

Very similar to `slice()`.

Differences:

* Negative numbers become 0.
* If start > end, JavaScript swaps them.

```js
const text = "Mozilla";

console.log(text.substring(0,3));
// "Moz"

console.log(text.substring(3,0));
// "Moz"

console.log(text.substring(-2,3));
// "Moz"
```

---

# 12. split()

Splits a string into an array.

```js
const fruits = "Apple,Banana,Orange";

console.log(fruits.split(","));
// ["Apple","Banana","Orange"]
```

Split by spaces

```js
const sentence = "I love coding";

console.log(sentence.split(" "));
// ["I","love","coding"]
```

Split every character

```js
console.log("Hello".split(""));
// ["H","e","l","l","o"]
```

---

# 13. trim()

Removes whitespace from both ends.

```js
const input = "   hello   ";

console.log(input.trim());
// "hello"
```

---

# 14. trimStart()

Removes whitespace only at the beginning.

```js
const text = "   Hello";

console.log(text.trimStart());
// "Hello"
```

---

# 15. trimEnd()

Removes whitespace only at the end.

```js
const text = "Hello   ";

console.log(text.trimEnd());
// "Hello"
```

---

# 16. toUpperCase()

Converts every letter to uppercase.

```js
const word = "javascript";

console.log(word.toUpperCase());
// "JAVASCRIPT"
```

Practical Example

```js
console.log("warning".toUpperCase());
// WARNING
```

---

# 17. toLowerCase()

Converts every letter to lowercase.

```js
const email = "USER@GMAIL.COM";

console.log(email.toLowerCase());
// user@gmail.com
```

Useful for case-insensitive comparisons.

```js
const answer = "YES";

if (answer.toLowerCase() === "yes") {
    console.log("Correct");
}
```

---

# 18. replace()

Replaces only the **first occurrence**.

```js
const text = "Cats are cute. Cats are smart.";

console.log(text.replace("Cats","Dogs"));
// Dogs are cute. Cats are smart.
```

Using Regular Expressions

```js
console.log(text.replace(/cats/i,"Birds"));
// Birds are cute. Cats are smart.
```

---

# 19. replaceAll()

Replaces every occurrence.

```js
const text = "cat cat cat";

console.log(text.replaceAll("cat","dog"));
// dog dog dog
```

Using Regex

```js
const text = "Black black BLACK";

console.log(text.replaceAll(/black/gi,"white"));
// white white white
```

---

# 20. repeat()

Repeats a string multiple times.

```js
const star = "*";

console.log(star.repeat(5));
// *****
```

Practical Example

```js
console.log("-".repeat(20));
// --------------------
```

---

# 21. padStart()

Pads the beginning until a desired length.

```js
const hour = "5";

console.log(hour.padStart(2,"0"));
// 05
```

Masking numbers

```js
const digits = "4321";

console.log(digits.padStart(16,"*"));
// ************4321
```

---

# 22. padEnd()

Pads the end.

```js
const product = "Apple";

console.log(product.padEnd(10,"."));
// Apple.....
```

---

# 23. concat()

Joins strings together.

```js
const first = "Hello";
const second = "World";

console.log(first.concat(" ", second));
// Hello World
```

Usually template literals are preferred.

```js
`${first} ${second}`
```

---

# 24. String() Constructor

Converts values into strings.

```js
String(123);
// "123"

String(true);
// "true"

String(null);
// "null"
```

---

# 25. toString()

Converts numbers and booleans into strings.

```js
const age = 25;

console.log(age.toString());
// "25"
```

---

# 26. String Immutability

Strings **cannot be modified directly**.

```js
let name = "John";

name[0] = "B";

console.log(name);
// John
```

Instead, methods return a **new string**.

```js
let name = "John";

name = name.replace("J","B");

console.log(name);
// Bohn
```

---

# Quick Reference Summary

| Method           | Returns          | Modifies Original? | Use Case                                |
| ---------------- | ---------------- | ------------------ | --------------------------------------- |
| `.length`        | Number           | ❌ No               | Count characters                        |
| `[index]`        | String/undefined | ❌ No               | Access characters                       |
| `.charAt()`      | String           | ❌ No               | Access characters safely                |
| `.indexOf()`     | Number           | ❌ No               | Find first occurrence                   |
| `.lastIndexOf()` | Number           | ❌ No               | Find last occurrence                    |
| `.includes()`    | Boolean          | ❌ No               | Check existence                         |
| `.startsWith()`  | Boolean          | ❌ No               | Check prefix                            |
| `.endsWith()`    | Boolean          | ❌ No               | Check suffix                            |
| `.slice()`       | String           | ❌ No               | Extract substring                       |
| `.substring()`   | String           | ❌ No               | Extract substring (no negative indices) |
| `.split()`       | Array            | ❌ No               | Convert string to array                 |
| `.trim()`        | String           | ❌ No               | Remove whitespace                       |
| `.trimStart()`   | String           | ❌ No               | Remove leading spaces                   |
| `.trimEnd()`     | String           | ❌ No               | Remove trailing spaces                  |
| `.toUpperCase()` | String           | ❌ No               | Convert to uppercase                    |
| `.toLowerCase()` | String           | ❌ No               | Convert to lowercase                    |
| `.replace()`     | String           | ❌ No               | Replace first match                     |
| `.replaceAll()`  | String           | ❌ No               | Replace all matches                     |
| `.repeat()`      | String           | ❌ No               | Repeat text                             |
| `.padStart()`    | String           | ❌ No               | Pad beginning                           |
| `.padEnd()`      | String           | ❌ No               | Pad ending                              |
| `.concat()`      | String           | ❌ No               | Join strings                            |
| `String()`       | String           | ❌ No               | Convert any value to string             |
| `.toString()`    | String           | ❌ No               | Convert numbers/booleans to strings     |

---

## Quick Notes

* Strings are **immutable**.
* JavaScript strings use **0-based indexing**.
* `.length` returns the number of characters.
* The last character is always:

  ```js
  str[str.length - 1]
  ```
* Most string methods return **a new string** and do **not** modify the original.
* Most string search methods (`includes()`, `indexOf()`, `startsWith()`, `endsWith()`) are **case-sensitive**.
* Prefer **template literals (`${}`)** over string concatenation for readability.
