# JavaScript Loops Cheatsheet

---

# 1. What is a Loop?

A loop is used to **repeat a block of code** until a condition becomes false.

Instead of writing the same code multiple times, loops automate repetition.

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output

```text
1
2
3
4
5
```

---

# 2. for Loop

The most commonly used loop.

Syntax

```js
for (initialization; condition; increment) {
    // code
}
```

Example

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Output

```text
0
1
2
3
4
```

Looping backwards

```js
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
```

Output

```text
5
4
3
2
1
```

---

# 3. Parts of a for Loop

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

* **Initialization** → `let i = 0` (runs once)
* **Condition** → `i < 5` (checked before every iteration)
* **Increment** → `i++` (runs after each iteration)

Flow

```text
Initialize
     ↓
Check Condition
     ↓
Run Code
     ↓
Increment
     ↓
Repeat
```

---

# 4. while Loop

Repeats while a condition is true.

```js
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

Output

```text
1
2
3
4
5
```

⚠️ Don't forget to update the condition.

Bad Example

```js
let count = 1;

while (count <= 5) {
    console.log(count);
}
```

This creates an **infinite loop**.

---

# 5. do...while Loop

Runs the code **at least once**, then checks the condition.

```js
let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);
```

Output

```text
1
2
3
4
5
```

Difference

```js
let num = 10;

while (num < 5) {
    console.log("Hello");
}
// Doesn't run
```

```js
let num = 10;

do {
    console.log("Hello");
} while (num < 5);

// Runs once
```

---

# 6. for...of Loop

Loops through the **values** of an iterable like arrays or strings.

Array Example

```js
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

Output

```text
Apple
Banana
Orange
```

String Example

```js
const word = "Java";

for (const letter of word) {
    console.log(letter);
}
```

Output

```text
J
a
v
a
```

---

# 7. for...in Loop

Loops through the **keys (property names)** of an object.

```js
const person = {
    name: "John",
    age: 25
};

for (const key in person) {
    console.log(key);
}
```

Output

```text
name
age
```

Access values

```js
for (const key in person) {
    console.log(person[key]);
}
```

Output

```text
John
25
```

Both key and value

```js
for (const key in person) {
    console.log(key, person[key]);
}
```

---

# 8. Nested Loops

A loop inside another loop.

```js
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(i, j);

    }

}
```

Output

```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

---

# 9. break Statement

Stops the loop immediately.

```js
for (let i = 0; i < 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);

}
```

Output

```text
0
1
2
3
4
```

Practical Example

```js
const numbers = [3, 7, 10, 20];

for (const number of numbers) {

    if (number === 10) {
        console.log("Found!");
        break;
    }

}
```

---

# 10. continue Statement

Skips the current iteration.

```js
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);

}
```

Output

```text
1
2
4
5
```

Print only even numbers

```js
for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);

}
```

Output

```text
2
4
6
8
10
```

---

# 11. Looping Through Arrays

Using a for loop

```js
const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Using for...of

```js
for (const fruit of fruits) {
    console.log(fruit);
}
```

Using forEach()

```js
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

Arrow function

```js
fruits.forEach(fruit => console.log(fruit));
```

---

# 12. Looping Through Strings

```js
const word = "Hello";

for (const letter of word) {
    console.log(letter);
}
```

Output

```text
H
e
l
l
o
```

Using indexes

```js
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}
```

---

# 13. Looping Through Objects

Using `for...in`

```js
const person = {
    name: "John",
    age: 25
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

Using Object.entries()

```js
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}
```

---

# 14. Infinite Loops

A loop that never ends.

```js
while (true) {
    console.log("Running...");
}
```

Another common mistake

```js
let i = 0;

while (i < 5) {
    console.log(i);
    // Missing i++
}
```

---

# 15. Choosing the Right Loop

| Loop         | Best Used For                |
| ------------ | ---------------------------- |
| `for`        | Known number of iterations   |
| `while`      | Unknown number of iterations |
| `do...while` | Run at least once            |
| `for...of`   | Arrays and strings           |
| `for...in`   | Objects                      |
| `forEach()`  | Arrays only                  |

---

# 16. Common Loop Patterns

Count Up

```js
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

Count Down

```js
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

Every 2 Numbers

```js
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
```

Reverse an Array

```js
const fruits = ["Apple", "Banana", "Orange"];

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
```

---

# 17. Common Mistakes

Using `<=` instead of `<`

```js
const arr = [10, 20, 30];

for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}
```

Output

```text
10
20
30
undefined
```

Correct

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

Forgetting the increment

```js
while (i < 10) {
    console.log(i);
}
```

Infinite loop!

---

# Quick Reference Summary

| Loop / Statement | Use Case                               |
| ---------------- | -------------------------------------- |
| `for`            | Repeat a known number of times         |
| `while`          | Repeat while a condition is true       |
| `do...while`     | Run once before checking condition     |
| `for...of`       | Loop through array or string values    |
| `for...in`       | Loop through object keys               |
| `forEach()`      | Run a function for every array element |
| `break`          | Exit the loop immediately              |
| `continue`       | Skip the current iteration             |

---

# Quick Notes

* Use **`for`** when you know how many times the loop should run.
* Use **`while`** when the number of iterations depends on a condition.
* Use **`do...while`** if the code must execute **at least once**.
* Use **`for...of`** for arrays and strings because it gives you the **values**.
* Use **`for...in`** for objects because it gives you the **property names (keys)**.
* Use **`break`** to stop a loop early.
* Use **`continue`** to skip the current iteration and move to the next one.
* Always ensure your loop's condition eventually becomes **false** to avoid infinite loops.
* When looping through arrays with indexes, use:

  ```js
  for (let i = 0; i < array.length; i++)
  ```

  not `<= array.length`, to avoid accessing an undefined element.
