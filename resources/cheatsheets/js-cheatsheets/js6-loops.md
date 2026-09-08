# JavaScript Loops — Detailed Beginner Cheatsheet

---

# 1. What Is a Loop?

A **loop** allows you to repeat a block of code multiple times.

Without a loop:

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

With a loop:

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

The loop does the repetition for you.

### The basic idea

A loop usually does three things:

```text
Start
  ↓
Check a condition
  ↓
Run some code
  ↓
Update something
  ↓
Check again
  ↓
Repeat
```

A loop stops when its condition becomes `false`.

---

# 2. for Loop

The `for` loop is useful when you usually know **how many times** you want something to happen.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

## The three parts

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### 1. Initialization

```js
let i = 1
```

Runs **once**, before the loop starts.

It creates the counter.

### 2. Condition

```js
i <= 5
```

Checked before every iteration.

If `true` → run the code.

If `false` → stop.

### 3. Increment

```js
i++
```

Runs after each iteration.

It increases `i` by `1`.

### Flow

```text
let i = 1
     ↓
Is i <= 5?
     ↓
   YES
     ↓
Run console.log(i)
     ↓
i++
     ↓
Check again
```

---

# 3. for Loop — Counting

## Count up

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

## Count down

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

## Count by 2

```js
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
```

Output:

```text
0
2
4
6
8
10
```

## Count by 5

```js
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
```

Output:

```text
0
5
10
15
20
```

---

# 4. for Loop — Arrays

One of the most common uses of a `for` loop is going through an array.

```js
const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Output:

```text
Apple
Banana
Orange
```

### Why `fruits[i]`?

`i` represents the index.

```text
index:    0         1          2
        Apple     Banana     Orange
```

So:

```js
fruits[0] // Apple
fruits[1] // Banana
fruits[2] // Orange
```

The loop allows us to visit every index.

---

# 5. for Loop — Finding Something

```js
const numbers = [4, 8, 12, 15, 20];

for (let i = 0; i < numbers.length; i++) {

  if (numbers[i] === 15) {
    console.log("Found!");
    break;
  }

}
```

The loop checks:

```text
4 → no
8 → no
12 → no
15 → YES → stop
```

---

# 6. while Loop

A `while` loop means:

> **Keep running this code while this condition is true.**

Syntax:

```js
while (condition) {
  // code
}
```

Example:

```js
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

Output:

```text
1
2
3
4
5
```

---

# 7. Understanding while Loop

Look at this:

```js
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

First:

```js
count = 1
```

Check:

```js
count <= 5
```

Is:

```text
1 <= 5
```

Yes.

Run:

```js
console.log(count);
```

Then:

```js
count++;
```

Now:

```text
count = 2
```

Check again.

```text
2 <= 5 → true
```

Continue.

Eventually:

```text
count = 6
```

Now:

```text
6 <= 5 → false
```

The loop stops.

---

# 8. When Should You Use while?

A `while` loop is useful when you don't necessarily know exactly how many times something needs to happen.

For example:

> Keep asking for a password while the password is incorrect.

```js
let password = "";

while (password !== "1234") {
  password = prompt("Enter your password:");
}
```

The important idea is:

```text
WHILE something is true
        ↓
keep doing something
```

Another example:

```js
let number = 1;

while (number < 100) {
  console.log(number);
  number *= 2;
}
```

Output:

```text
1
2
4
8
16
32
64
```

You don't have to manually decide that it should run exactly 7 times.

You simply say:

> Keep going while the number is less than 100.

---

# 9. while Loop and Arrays

You can also use `while` with arrays.

```js
const fruits = ["Apple", "Banana", "Orange"];

let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
```

Output:

```text
Apple
Banana
Orange
```

Notice that we manually created and updated `i`.

With a `for` loop:

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

With `while`:

```js
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
```

They can accomplish the same thing.

The difference is mainly **how the loop is structured**.

---

# 10. Infinite while Loops

Be careful.

```js
let count = 1;

while (count <= 5) {
  console.log(count);
}
```

This never changes `count`.

Therefore:

```text
count = 1
count = 1
count = 1
count = 1
...
```

The condition is always:

```js
1 <= 5
```

which is always `true`.

So the loop never stops.

Correct:

```js
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

### Important question to ask

Whenever you write a `while` loop, ask:

> **What will eventually make my condition false?**

---

# 11. do...while Loop

A `do...while` loop is similar to a `while` loop.

The important difference is:

> **`do...while` runs the code first, then checks the condition.**

Syntax:

```js
do {
  // code
} while (condition);
```

Example:

```js
let count = 1;

do {
  console.log(count);
  count++;
} while (count <= 5);
```

Output:

```text
1
2
3
4
5
```

---

# 12. while vs do...while

This is the most important difference.

### while

```js
let number = 10;

while (number < 5) {
  console.log("Hello");
}
```

The condition is checked **first**.

```text
10 < 5
false
↓
Don't run
```

Nothing happens.

### do...while

```js
let number = 10;

do {
  console.log("Hello");
} while (number < 5);
```

The code runs **first**.

```text
Run code
  ↓
"Hello"
  ↓
Check 10 < 5
  ↓
false
  ↓
Stop
```

So `"Hello"` prints once.

### Easy way to remember

```text
while
→ Check first
→ Run if true

do...while
→ Run first
→ Check afterwards
```

---

# 13. When Would You Use do...while?

Use it when something needs to happen **at least once**.

For example, a menu:

```js
let choice;

do {
  console.log("1. Start");
  console.log("2. Exit");

  choice = prompt("Choose an option:");

} while (choice !== "2");
```

The menu needs to appear at least once before you can ask the user whether they want to continue.

---

# 14. for...of Loop

`for...of` is used to loop through the **values** of an iterable.

Most commonly:

* Arrays
* Strings

Example:

```js
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Output:

```text
Apple
Banana
Orange
```

Notice something important:

You don't need:

```js
fruits[i]
```

because `fruit` directly represents the current value.

---

# 15. for vs for...of

With `for`:

```js
const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

You work with the **index**:

```text
i = 0 → fruits[0]
i = 1 → fruits[1]
i = 2 → fruits[2]
```

With `for...of`:

```js
for (const fruit of fruits) {
  console.log(fruit);
}
```

You get the **value directly**:

```text
fruit → Apple
fruit → Banana
fruit → Orange
```

### Mental shortcut

```text
for
→ I may need the index

for...of
→ I mainly need the value
```

---

# 16. for...of with Strings

Strings are also iterable.

```js
const word = "Hello";

for (const letter of word) {
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

This is useful for things like counting letters.

Example:

```js
const word = "banana";
let count = 0;

for (const letter of word) {

  if (letter === "a") {
    count++;
  }

}

console.log(count);
```

Output:

```text
3
```

---

# 17. for...of — Another Array Example

```js
const numbers = [10, 20, 30, 40];

for (const number of numbers) {
  console.log(number);
}
```

Each time:

```text
number → 10
number → 20
number → 30
number → 40
```

You can also perform calculations:

```js
let total = 0;

for (const number of numbers) {
  total += number;
}

console.log(total);
```

Output:

```text
100
```

---

# 18. for...in Loop

`for...in` is mainly used with **objects**.

It gives you the object's **keys/property names**.

Example:

```js
const person = {
  name: "John",
  age: 25,
  country: "Nigeria"
};

for (const key in person) {
  console.log(key);
}
```

Output:

```text
name
age
country
```

Remember:

```text
for...in → keys
for...of → values
```

---

# 19. Getting Object Values with for...in

The key can be used to access the value.

```js
const person = {
  name: "John",
  age: 25,
  country: "Nigeria"
};

for (const key in person) {
  console.log(person[key]);
}
```

Output:

```text
John
25
Nigeria
```

Why?

Suppose:

```js
key = "name"
```

Then:

```js
person[key]
```

becomes:

```js
person["name"]
```

which gives:

```text
John
```

---

# 20. Getting Both Keys and Values

```js
const person = {
  name: "John",
  age: 25,
  country: "Nigeria"
};

for (const key in person) {
  console.log(key, person[key]);
}
```

Output:

```text
name John
age 25
country Nigeria
```

You can also format it:

```js
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

Output:

```text
name: John
age: 25
country: Nigeria
```

---

# 21. for...in vs for...of

This is one of the most important things to remember.

### Object

```js
const person = {
  name: "John",
  age: 25
};

for (const key in person) {
  console.log(key);
}
```

Gives:

```text
name
age
```

### Array

```js
const fruits = ["Apple", "Banana"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Gives:

```text
Apple
Banana
```

### Remember

```text
for...in
→ IN the object
→ property names / keys

for...of
→ OF the array/string
→ values
```

---

# 22. Object.entries()

Another useful way to loop through objects is:

```js
Object.entries(person)
```

It gives you an array containing key-value pairs.

Example:

```js
const person = {
  name: "John",
  age: 25
};

console.log(Object.entries(person));
```

Conceptually:

```js
[
  ["name", "John"],
  ["age", 25]
]
```

You can loop through it:

```js
for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
```

Output:

```text
name John
age 25
```

---

# 23. forEach()

`forEach()` runs a function once for every element in an array.

```js
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

Output:

```text
Apple
Banana
Orange
```

Arrow function version:

```js
fruits.forEach(fruit => {
  console.log(fruit);
});
```

---

# 24. forEach() with Index

`forEach()` can give you both the value and index.

```js
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function(fruit, index) {
  console.log(index, fruit);
});
```

Output:

```text
0 Apple
1 Banana
2 Orange
```

The first parameter is the value.

The second parameter is the index.

```js
function(fruit, index)
```

---

# 25. forEach() vs for...of

Both can loop through an array.

### for...of

```js
for (const fruit of fruits) {
  console.log(fruit);
}
```

### forEach()

```js
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

Both produce the same basic result.

A major difference is that `for...of` works naturally with `break` and `continue`, while `forEach()` does not.

If you need to stop early, prefer a regular loop or `for...of`.

---

# 26. Nested Loops

A **nested loop** is simply:

> **A loop inside another loop.**

Example:

```js
for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {

    console.log(i, j);

  }

}
```

Output:

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

# 27. How Nested Loops Actually Work

This is extremely important.

Look at:

```js
for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {

    console.log(i, j);

  }

}
```

The **outer loop** controls `i`.

The **inner loop** controls `j`.

When:

```text
i = 1
```

the entire inner loop runs:

```text
j = 1
j = 2
j = 3
```

Then the outer loop moves to:

```text
i = 2
```

The entire inner loop runs again:

```text
j = 1
j = 2
j = 3
```

Then:

```text
i = 3
```

Again:

```text
j = 1
j = 2
j = 3
```

So think:

```text
i = 1
    → j = 1
    → j = 2
    → j = 3

i = 2
    → j = 1
    → j = 2
    → j = 3

i = 3
    → j = 1
    → j = 2
    → j = 3
```

---

# 28. Nested Loops — Simple Real-World Idea

Imagine a classroom.

There are:

```text
3 students
3 subjects
```

You want to check every student's score for every subject.

```js
const students = ["John", "Mary", "David"];
const subjects = ["Math", "English", "Science"];
```

You could use:

```js
for (const student of students) {

  for (const subject of subjects) {

    console.log(student, subject);

  }

}
```

Output:

```text
John Math
John English
John Science

Mary Math
Mary English
Mary Science

David Math
David English
David Science
```

This is a good example of when nested loops make sense:

> **You have one collection inside another or need to compare every item with every other item.**

---

# 29. Nested Loops with Arrays

Suppose you have:

```js
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

This is an array containing other arrays.

You can use nested loops:

```js
for (let i = 0; i < numbers.length; i++) {

  for (let j = 0; j < numbers[i].length; j++) {

    console.log(numbers[i][j]);

  }

}
```

Output:

```text
1
2
3
4
5
6
7
8
9
```

---

# 30. Understanding numbers[i][j]

This can look confusing at first.

Suppose:

```js
const numbers = [
  [1, 2, 3],
  [4, 5, 6]
];
```

Think of it as:

```text
index 0 → [1, 2, 3]
index 1 → [4, 5, 6]
```

So:

```js
numbers[0]
```

gives:

```js
[1, 2, 3]
```

Then:

```js
numbers[0][1]
```

means:

> Get the array at index `0`, then get the value at index `1`.

Result:

```text
2
```

Therefore:

```js
numbers[i][j]
```

means:

> Go to the current outer array, then go to the current position inside that array.

---

# 31. Nested Loop — Multiplication Table

Nested loops are useful for combinations.

```js
for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {

    console.log(i * j);

  }

}
```

Output:

```text
1
2
3
2
4
6
3
6
9
```

---

# 32. Nested Loop — Creating a Pattern

You can use nested loops to create patterns.

```js
for (let i = 1; i <= 3; i++) {

  let row = "";

  for (let j = 1; j <= 5; j++) {
    row += "*";
  }

  console.log(row);
}
```

Output:

```text
*****
*****
*****
```

The outer loop controls the **rows**.

The inner loop controls the **characters in each row**.

Think:

```text
outer loop → how many rows?

inner loop → how many items per row?
```

---

# 33. Nested Loop — Triangle Pattern

```js
for (let i = 1; i <= 5; i++) {

  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}
```

Output:

```text
*
**
***
****
*****
```

Why?

When:

```text
i = 1 → j runs 1 time
i = 2 → j runs 2 times
i = 3 → j runs 3 times
i = 4 → j runs 4 times
i = 5 → j runs 5 times
```

---

# 34. Nested Loops — Comparing Arrays

Suppose:

```js
const first = ["a", "b", "c"];
const second = ["x", "b", "z"];
```

You want to find matching values.

```js
for (let i = 0; i < first.length; i++) {

  for (let j = 0; j < second.length; j++) {

    if (first[i] === second[j]) {
      console.log(first[i]);
    }

  }

}
```

Output:

```text
b
```

Why?

The outer loop chooses an item from `first`.

The inner loop checks it against **every item** in `second`.

---

# 35. break

`break` immediately stops the loop.

```js
for (let i = 1; i <= 10; i++) {

  if (i === 5) {
    break;
  }

  console.log(i);
}
```

Output:

```text
1
2
3
4
```

Once:

```js
i === 5
```

becomes true, the loop ends.

---

# 36. break — Practical Example

Find the first even number:

```js
const numbers = [1, 3, 7, 9, 10, 15];

for (const number of numbers) {

  if (number % 2 === 0) {
    console.log("Found:", number);
    break;
  }

}
```

Output:

```text
Found: 10
```

There is no need to continue checking after finding it.

---

# 37. continue

`continue` does **not** stop the loop.

Instead:

> It skips the current iteration and moves to the next one.

Example:

```js
for (let i = 1; i <= 5; i++) {

  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
1
2
4
5
```

When `i` is `3`:

```js
continue;
```

says:

> Skip the rest of this iteration.

The loop then continues with `4`.

---

# 38. break vs continue

Remember this:

```text
break
↓
STOP THE ENTIRE LOOP
```

```text
continue
↓
SKIP THIS ITERATION
↓
KEEP LOOPING
```

Example:

```js
for (let i = 1; i <= 5; i++) {

  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Result:

```text
1
2
4
5
```

But:

```js
for (let i = 1; i <= 5; i++) {

  if (i === 3) {
    break;
  }

  console.log(i);
}
```

Result:

```text
1
2
```

---

# 39. continue — Useful Filtering Pattern

Print only even numbers:

```js
for (let i = 1; i <= 10; i++) {

  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
2
4
6
8
10
```

The idea is:

```text
If unwanted → skip
If wanted → continue to the code
```

---

# 40. break and continue in while

They work in `while` loops too.

```js
let i = 0;

while (i < 10) {

  if (i === 5) {
    break;
  }

  console.log(i);
  i++;
}
```

Output:

```text
0
1
2
3
4
```

---

# 41. Reverse an Array with a for Loop

```js
const fruits = ["Apple", "Banana", "Orange"];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
```

Output:

```text
Orange
Banana
Apple
```

Remember:

```js
fruits.length
```

is:

```text
3
```

But the last index is:

```text
2
```

Therefore:

```js
fruits.length - 1
```

gives the last index.

---

# 42. Counting with Loops

Count how many even numbers exist:

```js
const numbers = [2, 5, 8, 11, 14];

let count = 0;

for (const number of numbers) {

  if (number % 2 === 0) {
    count++;
  }

}

console.log(count);
```

Output:

```text
3
```

The important pattern is:

```js
let count = 0;

for (...) {

  if (condition) {
    count++;
  }

}
```

---

# 43. Summing with Loops

```js
const numbers = [10, 20, 30];

let total = 0;

for (const number of numbers) {
  total += number;
}

console.log(total);
```

Output:

```text
60
```

The pattern is:

```js
let total = 0;

for (...) {
  total += something;
}
```

---

# 44. Finding the Largest Number

```js
const numbers = [5, 12, 3, 20, 8];

let largest = numbers[0];

for (const number of numbers) {

  if (number > largest) {
    largest = number;
  }

}

console.log(largest);
```

Output:

```text
20
```

The loop keeps asking:

> Is this number bigger than the largest number I've seen so far?

---

# 45. Finding the Smallest Number

```js
const numbers = [5, 12, 3, 20, 8];

let smallest = numbers[0];

for (const number of numbers) {

  if (number < smallest) {
    smallest = number;
  }

}

console.log(smallest);
```

Output:

```text
3
```

---

# 46. Looping Through Objects Inside Arrays

This is extremely important in JavaScript.

You can have:

```js
const users = [
  { name: "John", age: 25 },
  { name: "Mary", age: 30 },
  { name: "David", age: 22 }
];
```

The outer structure is an **array**.

Each item inside it is an **object**.

You can loop through the array:

```js
for (const user of users) {
  console.log(user.name);
}
```

Output:

```text
John
Mary
David
```

This pattern is extremely common in real JavaScript.

---

# 47. Looping Through Object Properties Inside an Array

You can also use a nested loop.

```js
const users = [
  { name: "John", age: 25 },
  { name: "Mary", age: 30 }
];

for (const user of users) {

  for (const key in user) {

    console.log(key, user[key]);

  }

}
```

Output:

```text
name John
age 25
name Mary
age 30
```

Think:

```text
Array
 ↓
User object
 ↓
Object properties
```

---

# 48. Common Loop Patterns

## Count up

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

## Count down

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

## Every 2 numbers

```js
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
```

## Loop through array values

```js
for (const item of array) {
  console.log(item);
}
```

## Loop through object keys

```js
for (const key in object) {
  console.log(key);
}
```

## Count something

```js
let count = 0;

for (const item of array) {

  if (condition) {
    count++;
  }

}
```

## Sum something

```js
let total = 0;

for (const number of numbers) {
  total += number;
}
```

## Find something

```js
for (const item of array) {

  if (condition) {
    console.log(item);
    break;
  }

}
```

---

# 49. Choosing the Right Loop

| Loop         | Main Purpose                                          |
| ------------ | ----------------------------------------------------- |
| `for`        | Repeat a known number of times                        |
| `while`      | Repeat while a condition remains true                 |
| `do...while` | Run at least once, then continue if condition is true |
| `for...of`   | Get values from arrays/strings                        |
| `for...in`   | Get keys from objects                                 |
| `forEach()`  | Run a function for every array item                   |
| Nested loop  | Work with combinations, nested data, grids, etc.      |

---

# 50. The Most Important Differences

## for

```js
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

Think:

> **I need control over the index/counter.**

---

## while

```js
while (condition) {
  // code
}
```

Think:

> **Keep going while this condition is true.**

---

## do...while

```js
do {
  // code
} while (condition);
```

Think:

> **Do this at least once.**

---

## for...of

```js
for (const item of array) {
  console.log(item);
}
```

Think:

> **Give me the values.**

---

## for...in

```js
for (const key in object) {
  console.log(key);
}
```

Think:

> **Give me the keys.**

---

## forEach

```js
array.forEach(item => {
  console.log(item);
});
```

Think:

> **Run this function for every array item.**

---

## Nested loop

```js
for (...) {

  for (...) {

  }

}
```

Think:

> **For every item in the outer loop, go through all the items in the inner loop.**

---

# 51. for...of vs for...in — Memorize This

```text
for...of → VALUES
for...in → KEYS
```

Example:

```js
const fruits = ["Apple", "Banana"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Gives:

```text
Apple
Banana
```

But:

```js
const person = {
  name: "John",
  age: 25
};

for (const key in person) {
  console.log(key);
}
```

Gives:

```text
name
age
```

---

# 52. Common Mistakes

## Mistake 1 — Using <= with array.length

Wrong:

```js
const arr = [10, 20, 30];

for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}
```

This eventually tries:

```js
arr[3]
```

which doesn't exist.

Result:

```text
10
20
30
undefined
```

Correct:

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Remember:

```text
Array length = number of items
Last index = length - 1
```

---

# 53. Common Mistake — Forgetting to Update while

Wrong:

```js
let i = 0;

while (i < 5) {
  console.log(i);
}
```

Correct:

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

Ask yourself:

> **What changes so that the condition eventually becomes false?**

---

# 54. Common Mistake — Confusing break and continue

```js
break;
```

means:

> **I'm completely done with this loop.**

```js
continue;
```

means:

> **I'm done with this iteration, but keep going.**

---

# 55. Common Mistake — Confusing for...in and for...of

Wrong mental model:

```text
for...in → values
for...of → keys
```

Correct:

```text
for...in → keys
for...of → values
```

---

# 56. Common Mistake — Forgetting Nested Loop Repetition

Consider:

```js
for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }

}
```

Don't think:

```text
i runs once
j runs once
```

Instead think:

```text
i = 1
  j = 1
  j = 2
  j = 3

i = 2
  j = 1
  j = 2
  j = 3

i = 3
  j = 1
  j = 2
  j = 3
```

The **entire inner loop finishes before the outer loop moves to its next iteration.**

---

# 57. Loop Mental Models

When you see:

```js
for (let i = 0; i < array.length; i++)
```

Think:

> **Go through every index in this array.**

When you see:

```js
for (const item of array)
```

Think:

> **Give me each value in this array.**

When you see:

```js
for (const key in object)
```

Think:

> **Give me each property name in this object.**

When you see:

```js
while (condition)
```

Think:

> **Keep going while this is true.**

When you see:

```js
do...while
```

Think:

> **Run once first, then decide whether to continue.**

When you see:

```js
for (...) {
  for (...) {
  }
}
```

Think:

> **For every outer item, process every inner item.**

---

# 58. Loop Decision Guide

Ask yourself these questions.

### Question 1

**Do I know how many times I want to repeat something?**

Use:

```js
for
```

Example:

```js
for (let i = 0; i < 10; i++) {
}
```

---

### Question 2

**Do I want to keep running until something changes?**

Use:

```js
while
```

Example:

```js
while (password !== correctPassword) {
}
```

---

### Question 3

**Does the code need to run at least once?**

Use:

```js
do...while
```

---

### Question 4

**Do I have an array/string and just want its values?**

Use:

```js
for...of
```

---

### Question 5

**Do I have an object and need its property names?**

Use:

```js
for...in
```

---

### Question 6

**Do I simply want to perform a function on every array item?**

Use:

```js
forEach()
```

---

### Question 7

**Do I need to compare every item with every item, or work through nested data?**

Consider:

```js
nested loops
```

---

# 59. Quick Reference

```text
FOR
→ Known/repeatable number of iterations
→ Can easily use index
→ Full control over counter

WHILE
→ Repeat while condition is true
→ Useful when number of iterations isn't known beforehand

DO...WHILE
→ Runs at least once
→ Checks condition afterwards

FOR...OF
→ Array/string VALUES

FOR...IN
→ Object KEYS

forEach()
→ Run a function for every array element

break
→ STOP the loop

continue
→ SKIP current iteration

NESTED LOOP
→ LOOP INSIDE ANOTHER LOOP
→ Useful for nested arrays, combinations,
  grids, patterns, comparisons, etc.
```

---

# 60. The Five Things to Remember

If you forget everything else, remember these:

### 1.

```js
for
```

**I control the counter/index.**

### 2.

```js
while
```

**Keep going while the condition is true.**

### 3.

```js
for...of
```

**Give me the values.**

### 4.

```js
for...in
```

**Give me the keys.**

### 5.

```js
break
```

**Stop.**

```js
continue
```

**Skip this one and keep going.**

And for nested loops:

```text
Outer loop
   ↓
Run the ENTIRE inner loop
   ↓
Outer loop moves
   ↓
Run the ENTIRE inner loop again
```

---

# 61. One Final Mental Picture

Think of loops like different tools.

```text
for
│
├── "I know how I want to count."
│
│
while
│
├── "Keep doing this while this is true."
│
│
do...while
│
├── "Do it once first, then check."
│
│
for...of
│
├── "Give me each VALUE."
│
│
for...in
│
├── "Give me each KEY."
│
│
forEach
│
├── "Run this function on every array item."
│
│
nested loop
│
└── "For every outer item, process every inner item."
```

The goal isn't to memorize every loop syntax.

The goal is to recognize:

> **What am I trying to repeat, what am I looping over, and what information do I need from each iteration?**
