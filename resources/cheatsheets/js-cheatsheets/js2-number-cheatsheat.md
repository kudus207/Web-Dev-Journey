# JavaScript Boolean & Number Cheatsheet

---

# 1. Boolean Values

A Boolean is the simplest data type in JavaScript. It only has **two possible values**.

```js
true
false
```

Example

```js
let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn);     // true
console.log(hasPermission);  // false
```

Booleans are commonly used inside conditions.

```js
if (isLoggedIn) {
    console.log("Welcome back!");
}
```

---

# 2. Boolean()

The `Boolean()` function converts any value into either `true` or `false`.

```js
Boolean(100);          // true
Boolean("Hello");      // true
Boolean([]);           // true
Boolean({});           // true

Boolean(0);            // false
Boolean("");           // false
Boolean(null);         // false
Boolean(undefined);    // false
Boolean(NaN);          // false
```

Practical Example

```js
const username = "John";

if (Boolean(username)) {
    console.log("Username entered");
}
```

---

# 3. Truthy vs Falsy

JavaScript doesn't require actual booleans inside conditions.

Instead, it converts values automatically.

Falsy Values

```js
false
0
-0
0n
""
''
``
null
undefined
NaN
```

Everything else is Truthy.

Examples

```js
if ("Hello") {
    console.log("Runs");
}

if (100) {
    console.log("Runs");
}

if ([]) {
    console.log("Runs");
}

if ({}) {
    console.log("Runs");
}
```

Falsy example

```js
if ("") {
    console.log("Never runs");
}
```

---

# 4. Comparison Operators

These compare two values and always return a Boolean.

| Operator | Meaning               |
| -------- | --------------------- |
| ==       | Equal (Loose)         |
| ===      | Strict Equal          |
| !=       | Not Equal             |
| !==      | Strict Not Equal      |
| >        | Greater Than          |
| >=       | Greater Than or Equal |
| <        | Less Than             |
| <=       | Less Than or Equal    |

Examples

```js
10 > 5
// true

5 < 2
// false

10 === 10
// true

10 === "10"
// false

10 == "10"
// true
```

Always prefer

```js
===
!==
```

because they don't perform automatic type conversion.

---

# 5. Logical Operators

## AND (&&)

Returns true only if both conditions are true.

```js
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID);
// true
```

---

## OR (||)

Returns true if at least one condition is true.

```js
let isAdmin = false;
let isModerator = true;

console.log(isAdmin || isModerator);
// true
```

---

## NOT (!)

Reverses a Boolean.

```js
console.log(!true);
// false

console.log(!false);
// true
```

Useful Example

```js
let loggedIn = false;

if (!loggedIn) {
    console.log("Please log in.");
}
```

---

# 6. Double NOT (!!)

Converts any value into a Boolean.

```js
!!"Hello"
// true

!!0
// false

!![]
// true

!!null
// false
```

Equivalent to

```js
Boolean(value)
```

---

# 7. Nullish Coalescing (??)

Returns the right value only when the left side is `null` or `undefined`.

```js
const username = null;

console.log(username ?? "Guest");
// Guest
```

Unlike `||`, it does NOT replace valid falsy values.

```js
console.log(0 || 100);
// 100

console.log(0 ?? 100);
// 0
```

---

# 8. Number()

Converts values into numbers.

```js
Number("25")
// 25

Number("10.5")
// 10.5

Number(true)
// 1

Number(false)
// 0

Number("")
// 0

Number("Hello")
// NaN
```

---

# 9. NaN

NaN means **Not a Number**.

```js
Number("abc")
// NaN
```

Checking correctly

```js
Number.isNaN(value)
```

Example

```js
const score = Number("ABC");

console.log(Number.isNaN(score));
// true
```

---

# 10. Number.isInteger()

Checks whether a value is a whole number.

```js
Number.isInteger(10)
// true

Number.isInteger(10.5)
// false

Number.isInteger("10")
// false
```

---

# 11. parseInt()

Extracts an integer.

```js
parseInt("42")
// 42

parseInt("42px")
// 42

parseInt("10.8")
// 10

parseInt("abc")
// NaN
```

---

# 12. parseFloat()

Extracts decimal numbers.

```js
parseFloat("10.99")
// 10.99

parseFloat("99.5kg")
// 99.5
```

---

# 13. Number.toFixed()

Rounds a number and returns a STRING.

```js
const price = 19.456;

price.toFixed(2);
// "19.46"
```

Useful for prices.

```js
const total = 1450.2;

console.log(`$${total.toFixed(2)}`);
// $1450.20
```

---

# 14. Number.toString()

Converts a number into a string.

```js
const age = 20;

age.toString();
// "20"
```

---

# 15. Math.random()

Returns a random decimal between 0 (inclusive) and 1 (exclusive).

```js
Math.random()
```

Example

```js
console.log(Math.random());
// 0.438294
```

Random number between two values

```js
const min = 5;
const max = 10;

Math.random() * (max - min) + min;
```

---

# 16. Random Integer

Most common formula.

```js
const min = 1;
const max = 100;

Math.floor(Math.random() * (max - min + 1)) + min;
```

Produces

```
1–100
```

inclusive.

---

# 17. Math.floor()

Rounds DOWN.

```js
Math.floor(8.9)
// 8

Math.floor(4.1)
// 4
```

---

# 18. Math.ceil()

Rounds UP.

```js
Math.ceil(8.1)
// 9

Math.ceil(4.01)
// 5
```

---

# 19. Math.round()

Rounds to the nearest integer.

```js
Math.round(5.2)
// 5

Math.round(5.8)
// 6

Math.round(5.5)
// 6
```

---

# 20. Math.trunc()

Removes the decimal completely.

```js
Math.trunc(8.9)
// 8

Math.trunc(-8.9)
// -8
```

---

# 21. Math.abs()

Returns the absolute value.

```js
Math.abs(-10)
// 10

Math.abs(10)
// 10
```

Useful for distances.

---

# 22. Math.max() & Math.min()

Largest and smallest values.

```js
Math.max(2,5,9,12)
// 12

Math.min(2,5,9,12)
// 2
```

With arrays

```js
const scores = [25,18,30];

Math.max(...scores);
// 30
```

---

# 23. Math.pow()

Raises a number to a power.

```js
Math.pow(5,2)
// 25

Math.pow(2,5)
// 32
```

Modern JavaScript

```js
5 ** 2
```

---

# 24. Math.sqrt()

Returns the square root.

```js
Math.sqrt(49)
// 7

Math.sqrt(100)
// 10
```

---

# 25. Math.cbrt()

Returns the cube root.

```js
Math.cbrt(27)
// 3

Math.cbrt(125)
// 5
```

---

# 26. Math.sign()

Returns whether a number is positive or negative.

```js
Math.sign(20)
// 1

Math.sign(-20)
// -1

Math.sign(0)
// 0
```

---

# 27. Useful Number Constants

```js
Number.MAX_SAFE_INTEGER

Number.MIN_SAFE_INTEGER

Number.POSITIVE_INFINITY

Number.NEGATIVE_INFINITY
```

---

# Quick Reference Table

| Method             | Returns | Use Case                        |
| ------------------ | ------- | ------------------------------- |
| Boolean()          | Boolean | Convert any value to true/false |
| Number()           | Number  | Convert values into numbers     |
| Number.isNaN()     | Boolean | Check NaN correctly             |
| Number.isInteger() | Boolean | Check whole numbers             |
| parseInt()         | Number  | Extract integers                |
| parseFloat()       | Number  | Extract decimals                |
| toFixed()          | String  | Format decimals                 |
| toString()         | String  | Convert number to string        |
| Math.random()      | Number  | Random decimal                  |
| Math.floor()       | Number  | Round down                      |
| Math.ceil()        | Number  | Round up                        |
| Math.round()       | Number  | Round nearest                   |
| Math.trunc()       | Number  | Remove decimals                 |
| Math.abs()         | Number  | Absolute value                  |
| Math.max()         | Number  | Largest number                  |
| Math.min()         | Number  | Smallest number                 |
| Math.pow()         | Number  | Raise to a power                |
| Math.sqrt()        | Number  | Square root                     |
| Math.cbrt()        | Number  | Cube root                       |
| Math.sign()        | Number  | Check positive/negative         |
