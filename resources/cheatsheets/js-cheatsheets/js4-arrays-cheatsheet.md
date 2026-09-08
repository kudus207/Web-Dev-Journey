# JavaScript Arrays — Complete Cheatsheet

---

# 1. What Is an Array?

An array is a special type of object used to store **multiple values in one variable**.

Instead of creating many separate variables:

```js
const fruit1 = "Apple";
const fruit2 = "Banana";
const fruit3 = "Orange";
```

You can store them together:

```js
const fruits = ["Apple", "Banana", "Orange"];
```

Think of an array as a **list**.

```text
fruits
  ↓
["Apple", "Banana", "Orange"]
   ↓       ↓        ↓
  [0]     [1]      [2]
```

Arrays can contain different data types:

```js
const mixed = ["John", 25, true, null, { city: "Lagos" }];
```

Arrays can contain other arrays:

```js
const numbers = [
  [1, 2],
  [3, 4],
];
```

Arrays can contain objects:

```js
const users = [
  { name: "John", age: 25 },
  { name: "Mary", age: 30 },
];
```

### When should I use an array?

Use an array when you have **multiple related values that form a list**.

```js
const students = ["John", "Mary", "David"];

const scores = [75, 82, 90];

const products = [
  { name: "Laptop", price: 500 },
  { name: "Phone", price: 300 },
];
```

---

# 2. Creating Arrays

### Array literal — recommended

```js
const numbers = [1, 2, 3, 4];

const colors = ["Red", "Blue", "Green"];
```

### Empty array

```js
const users = [];
```

Useful when you plan to add items later:

```js
const numbers = [];

numbers.push(10);
numbers.push(20);
```

### Array constructor

```js
const fruits = new Array("Apple", "Banana");
```

Usually prefer:

```js
const fruits = ["Apple", "Banana"];
```

---

# 3. Accessing Array Elements

Arrays use **0-based indexing**.

```js
const fruits = ["Apple", "Banana", "Orange"];
```

| Index | Value  |
| ----- | ------ |
| 0     | Apple  |
| 1     | Banana |
| 2     | Orange |

```js
console.log(fruits[0]);
// Apple

console.log(fruits[1]);
// Banana

console.log(fruits[2]);
// Orange
```

Trying to access an index that doesn't exist:

```js
console.log(fruits[3]);

// undefined
```

### Last element

```js
console.log(fruits[fruits.length - 1]);

// Orange
```

Or:

```js
console.log(fruits.at(-1));

// Orange
```

---

# 4. length

`.length` returns the number of elements in an array.

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.length);

// 3
```

### Important

The last index is always:

```js
array.length - 1;
```

Example:

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.length);
// 3

console.log(fruits.length - 1);
// 2
```

### Empty array check

```js
if (fruits.length === 0) {
  console.log("Array is empty");
}
```

### Using length in a loop

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

# 5. Updating Array Elements

Arrays are **mutable**, meaning their contents can be changed.

```js
const fruits = ["Apple", "Banana"];

fruits[1] = "Orange";

console.log(fruits);

// ["Apple", "Orange"]
```

You can also add an element at a specific index:

```js
const fruits = ["Apple", "Banana"];

fruits[2] = "Orange";

console.log(fruits);

// ["Apple", "Banana", "Orange"]
```

---

# 6. push()

Adds one or more elements to the **end** of an array.

Returns the **new length**.

```js
const fruits = ["Apple"];

const result = fruits.push("Banana");

console.log(fruits);

// ["Apple", "Banana"]

console.log(result);

// 2
```

Add multiple elements:

```js
fruits.push("Orange", "Mango");
```

### Remember

```text
push() → ADD → END
```

---

# 7. pop()

Removes the **last element**.

Returns the **removed element**.

```js
const fruits = ["Apple", "Banana", "Orange"];

const removed = fruits.pop();

console.log(removed);

// Orange

console.log(fruits);

// ["Apple", "Banana"]
```

### Remember

```text
pop() → REMOVE → END
```

---

# 8. unshift()

Adds one or more elements to the **beginning**.

Returns the **new length**.

```js
const fruits = ["Banana", "Orange"];

fruits.unshift("Apple");

console.log(fruits);

// ["Apple", "Banana", "Orange"]
```

### Remember

```text
unshift() → ADD → BEGINNING
```

---

# 9. shift()

Removes the **first element**.

Returns the **removed element**.

```js
const fruits = ["Apple", "Banana", "Orange"];

const first = fruits.shift();

console.log(first);

// Apple

console.log(fruits);

// ["Banana", "Orange"]
```

### Remember

```text
shift() → REMOVE → BEGINNING
```

---

# 10. includes()

Checks whether an array contains a particular value.

Returns `true` or `false`.

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Banana"));

// true

console.log(fruits.includes("Mango"));

// false
```

### Practical example

```js
if (fruits.includes("Apple")) {
  console.log("Apple exists.");
}
```

### Think

```text
includes() → "Does this value exist?"
```

---

# 11. indexOf()

Returns the index of the **first occurrence** of a value.

Returns `-1` if the value isn't found.

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Orange"));

// 2

console.log(fruits.indexOf("Mango"));

// -1
```

With duplicates:

```js
const numbers = [10, 20, 10, 30];

console.log(numbers.indexOf(10));

// 0
```

It finds the first occurrence.

---

# 12. lastIndexOf()

Returns the index of the **last occurrence** of a value.

```js
const numbers = [10, 20, 10, 30, 10];

console.log(numbers.lastIndexOf(10));

// 4
```

### Difference

```text
indexOf()       → first occurrence
lastIndexOf()   → last occurrence
```

---

# 13. slice()

Extracts/copies part of an array.

**Does NOT modify the original array.**

```js
const fruits = ["Apple", "Banana", "Orange", "Mango"];

const result = fruits.slice(1, 3);

console.log(result);

// ["Banana", "Orange"]

console.log(fruits);

// ["Apple", "Banana", "Orange", "Mango"]
```

### Syntax

```js
array.slice(start, end);
```

The `end` index is **not included**.

```text
index:    0        1         2        3
         Apple    Banana    Orange    Mango
                    ↑         ↑
                  start      end
```

`slice(1, 3)` gets indexes `1` and `2`.

### Copy entire array

```js
const copy = fruits.slice();
```

### Last two elements

```js
const result = fruits.slice(-2);
```

---

# 14. splice()

Adds, removes, or replaces elements.

⚠️ **Modifies the original array.**

### Syntax

```js
array.splice(start, deleteCount, item1, item2);
```

### Remove

```js
const fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1);

console.log(fruits);

// ["Apple", "Orange"]
```

Start at index `1` and remove `1` element.

### Replace

```js
const fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1, "Mango");

console.log(fruits);

// ["Apple", "Mango", "Orange"]
```

### Insert

```js
const fruits = ["Apple", "Orange"];

fruits.splice(1, 0, "Banana");

console.log(fruits);

// ["Apple", "Banana", "Orange"]
```

`0` means:

> Don't delete anything.

### Remember

```text
slice()  → COPY/EXTRACT → does NOT modify
splice() → ADD/REMOVE/REPLACE → DOES modify
```

---

# 15. join()

Converts an array into a **string**.

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.join(", "));

// Apple, Banana, Orange
```

Without a separator:

```js
console.log(fruits.join(""));

// AppleBananaOrange
```

Using another separator:

```js
console.log(fruits.join(" - "));

// Apple - Banana - Orange
```

### Think

```text
join() → ARRAY → STRING
```

---

# 16. reverse()

Reverses the elements of an array.

⚠️ **Modifies the original array.**

```js
const numbers = [1, 2, 3];

numbers.reverse();

console.log(numbers);

// [3, 2, 1]
```

---

# 17. sort()

Sorts an array.

⚠️ **Modifies the original array.**

### Strings

```js
const fruits = ["Orange", "Apple", "Banana"];

fruits.sort();

console.log(fruits);

// ["Apple", "Banana", "Orange"]
```

### Numbers

Be careful:

```js
const numbers = [50, 10, 100, 2];

numbers.sort();

console.log(numbers);
```

JavaScript's default sort treats values like strings.

Use a comparison function:

```js
numbers.sort((a, b) => a - b);
```

Result:

```js
[2, 10, 50, 100];
```

### Descending

```js
numbers.sort((a, b) => b - a);
```

### Remember

```text
a - b → ascending
b - a → descending
```

---

# 18. concat()

Combines arrays.

**Does NOT modify the original arrays.**

```js
const arr1 = [1, 2];

const arr2 = [3, 4];

const result = arr1.concat(arr2);

console.log(result);

// [1, 2, 3, 4]
```

Multiple arrays:

```js
const result = arr1.concat(arr2, [5, 6]);
```

---

# 19. Spread Operator (...)

The spread operator expands the elements of an array.

### Combine arrays

```js
const arr1 = [1, 2];

const arr2 = [3, 4];

const result = [...arr1, ...arr2];

console.log(result);

// [1, 2, 3, 4]
```

### Copy an array

```js
const copy = [...arr1];
```

### Add elements

```js
const numbers = [2, 3];

const result = [1, ...numbers, 4];

console.log(result);

// [1, 2, 3, 4]
```

---

# 20. for...of

Loops through the **values** of an array.

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

### Remember

```text
for...of → VALUES
```

---

# 21. forEach()

Runs a function once for every element.

```js
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

Arrow function:

```js
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

Can also get the index:

```js
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

`forEach()` returns `undefined`.

Use it when you want to **perform an action for every item**.

```text
forEach() → DO something
```

---

# 22. map()

Creates a **new array** by transforming every element.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);

// [2, 4, 6]
```

The original array is unchanged:

```js
console.log(numbers);

// [1, 2, 3]
```

### Think

```text
map() → CHANGE/TRANSFORM every item
```

Example:

```js
const names = ["john", "mary", "david"];

const upperNames = names.map((name) => name.toUpperCase());

console.log(upperNames);

// ["JOHN", "MARY", "DAVID"]
```

---

# 23. filter()

Creates a new array containing only elements that pass a condition.

```js
const numbers = [5, 10, 15, 20];

const result = numbers.filter((num) => num >= 10);

console.log(result);

// [10, 15, 20]
```

### Example

```js
const ages = [12, 18, 25, 15, 30];

const adults = ages.filter((age) => age >= 18);

console.log(adults);

// [18, 25, 30]
```

### Think

```text
filter() → KEEP matching items
```

---

# 24. find()

Returns the **first element** that matches a condition.

```js
const numbers = [4, 7, 10, 15];

const result = numbers.find((num) => num > 8);

console.log(result);

// 10
```

Only one item is returned.

If nothing matches:

```js
undefined;
```

### Think

```text
find() → "Give me the FIRST matching item."
```

---

# 25. findIndex()

Returns the index of the **first matching element**.

```js
const numbers = [4, 7, 10, 15];

const result = numbers.findIndex((num) => num > 8);

console.log(result);

// 2
```

If nothing matches:

```js
-1;
```

---

# 26. some()

Checks whether **at least one** element passes the condition.

Returns `true` or `false`.

```js
const scores = [40, 65, 80];

console.log(scores.some((score) => score >= 70));

// true
```

### Think

```text
some() → "Does ANY item match?"
```

---

# 27. every()

Checks whether **every** element passes the condition.

Returns `true` or `false`.

```js
const scores = [80, 90, 100];

console.log(scores.every((score) => score >= 70));

// true
```

### Think

```text
every() → "Do ALL items match?"
```

### Easy distinction

```text
some()  → ANY?
every() → ALL?
```

---

# 28. reduce()

Reduces an entire array into **one final value**.

### Sum

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);

// 60
```

The `0` is the initial value.

Think:

```text
array → reduce → ONE RESULT
```

The final result doesn't have to be a number.

It can be:

- number
- string
- object
- array
- etc.

### Find maximum

```js
const numbers = [5, 10, 25, 8];

const max = numbers.reduce((largest, num) => {
  if (num > largest) {
    return num;
  }

  return largest;
});

console.log(max);

// 25
```

### Think

```text
reduce() → COMBINE everything into ONE result
```

---

# 29. Array.isArray()

Checks whether a value is an array.

```js
console.log(Array.isArray([1, 2, 3]));

// true
```

```js
console.log(Array.isArray("Hello"));

// false
```

Important:

```js
typeof [1, 2, 3];
```

returns:

```text
"object"
```

So use:

```js
Array.isArray(value);
```

when you specifically need to check whether something is an array.

---

# 30. Array.from()

Creates a new array from an **iterable or array-like object**.

### String

```js
const word = "Hello";

const letters = Array.from(word);

console.log(letters);

// ["H", "e", "l", "l", "o"]
```

### Generate numbers

```js
const numbers = Array.from({ length: 5 }, (_, index) => index + 1);

console.log(numbers);

// [1, 2, 3, 4, 5]
```

---

# 31. fill()

Fills array elements with a value.

⚠️ **Modifies the original array.**

```js
const arr = new Array(5).fill(0);

console.log(arr);

// [0, 0, 0, 0, 0]
```

### Fill part of an array

```js
const arr = [1, 2, 3, 4];

arr.fill(0, 1, 3);

console.log(arr);

// [1, 0, 0, 4]
```

The ending index is not included.

---

# 32. at()

Accesses an element using an index.

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.at(0));

// Apple
```

The useful feature is negative indexes:

```js
console.log(fruits.at(-1));

// Orange
```

```js
console.log(fruits.at(-2));

// Banana
```

### Compare

```js
fruits[fruits.length - 1];
```

and:

```js
fruits.at(-1);
```

Both get the last element.

---

# 33. flat()

Flattens nested arrays.

```js
const numbers = [
  [1, 2],
  [3, 4],
];

const result = numbers.flat();

console.log(result);

// [1, 2, 3, 4]
```

### Important

`flat()` goes **one level deep by default**.

```js
const numbers = [
  [1, 2],
  [3, [4, 5]],
];

console.log(numbers.flat());

// [1, 2, 3, [4, 5]]
```

To flatten two levels:

```js
console.log(numbers.flat(2));

// [1, 2, 3, 4, 5]
```

To flatten all levels:

```js
console.log(numbers.flat(Infinity));
```

### Think

```text
flat() → REMOVE NESTING
```

---

# 34. flatMap()

Combines:

```text
map() + flat()
```

Example:

```js
const numbers = [1, 2, 3];

const result = numbers.flatMap((num) => [num, num * 2]);

console.log(result);

// [1, 2, 2, 4, 3, 6]
```

Compare:

```js
numbers.map((num) => [num, num * 2]);
```

Result:

```js
[
  [1, 2],
  [2, 4],
  [3, 6],
];
```

`flatMap()` transforms and then flattens one level.

### Think

```text
flatMap() → TRANSFORM + FLATTEN ONE LEVEL
```

---

# 35. findLast()

Like `find()`, but searches from the **end of the array**.

```js
const numbers = [5, 10, 15, 20];

const result = numbers.findLast((num) => num > 10);

console.log(result);

// 20
```

### Difference

```text
find()     → searches from beginning
findLast() → searches from end
```

---

# 36. findLastIndex()

Like `findIndex()`, but searches from the end.

```js
const numbers = [5, 10, 15, 20];

const result = numbers.findLastIndex((num) => num > 10);

console.log(result);

// 3
```

---

# 37. keys()

Returns an iterator containing the array's indexes.

```js
const fruits = ["Apple", "Banana", "Orange"];

const keys = fruits.keys();

for (const key of keys) {
  console.log(key);
}
```

Output:

```text
0
1
2
```

### Think

```text
keys() → INDEXES
```

---

# 38. values()

Returns an iterator containing the array's values.

```js
const fruits = ["Apple", "Banana", "Orange"];

const values = fruits.values();

for (const value of values) {
  console.log(value);
}
```

Output:

```text
Apple
Banana
Orange
```

### Think

```text
values() → VALUES
```

---

# 39. entries()

Returns an iterator containing both the index and value.

```js
const fruits = ["Apple", "Banana", "Orange"];

for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}
```

Output:

```text
0 Apple
1 Banana
2 Orange
```

### Remember

```text
keys()    → indexes
values()  → values
entries() → indexes + values
```

---

# 40. toSorted()

A non-mutating alternative to `sort()`.

```text
sort()      → modifies original
toSorted()  → does NOT modify original
```

```js
const numbers = [30, 10, 20];

const sorted = numbers.toSorted((a, b) => a - b);

console.log(sorted);

// [10, 20, 30]

console.log(numbers);

// [30, 10, 20]
```

---

# 41. toReversed()

A non-mutating alternative to `reverse()`.

```js
const numbers = [1, 2, 3];

const reversed = numbers.toReversed();

console.log(reversed);

// [3, 2, 1]

console.log(numbers);

// [1, 2, 3]
```

### Difference

```text
reverse()     → modifies original
toReversed()  → does NOT modify original
```

---

# 42. toSpliced()

A non-mutating alternative to `splice()`.

```js
const fruits = ["Apple", "Banana", "Orange"];

const result = fruits.toSpliced(1, 1, "Mango");

console.log(result);

// ["Apple", "Mango", "Orange"]

console.log(fruits);

// ["Apple", "Banana", "Orange"]
```

### Difference

```text
splice()      → modifies original
toSpliced()   → does NOT modify original
```

---

# 43. with()

Creates a new array with one element replaced.

```js
const numbers = [10, 20, 30];

const result = numbers.with(1, 50);

console.log(result);

// [10, 50, 30]

console.log(numbers);

// [10, 20, 30]
```

### Think

```text
with() → REPLACE ONE ELEMENT WITHOUT MODIFYING ORIGINAL
```

---

# 44. Array Mutability

Arrays are **mutable**.

This means their contents can be changed after creation.

```js
const fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);

// ["Apple", "Banana", "Orange"]
```

Notice that `const` does NOT make the array immutable.

This is allowed:

```js
const numbers = [1, 2, 3];

numbers[0] = 100;
```

This is NOT allowed:

```js
const numbers = [1, 2, 3];

numbers = [4, 5, 6];
```

`const` prevents reassigning the variable, not modifying the array.

---

# 45. Mutating Methods

These modify the original array:

```text
push()
pop()
shift()
unshift()
splice()
reverse()
sort()
fill()
```

Example:

```js
const numbers = [1, 2, 3];

numbers.reverse();

console.log(numbers);

// [3, 2, 1]
```

---

# 46. Non-Mutating Methods

These do not modify the original array:

```text
slice()
concat()
map()
filter()
find()
findIndex()
some()
every()
reduce()
flat()
flatMap()
includes()
indexOf()
lastIndexOf()
join()
toSorted()
toReversed()
toSpliced()
with()
```

Example:

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

console.log(numbers);

// [1, 2, 3]

console.log(doubled);

// [2, 4, 6]
```

---

# 47. push() vs unshift()

Both add elements.

```text
push()     → END
unshift()  → BEGINNING
```

Example:

```js
const fruits = ["Banana"];

fruits.push("Orange");

fruits.unshift("Apple");

console.log(fruits);

// ["Apple", "Banana", "Orange"]
```

---

# 48. pop() vs shift()

Both remove elements.

```text
pop()    → END
shift()  → BEGINNING
```

Example:

```js
const fruits = ["Apple", "Banana", "Orange"];

fruits.pop();
// removes Orange

fruits.shift();
// removes Apple
```

---

# 49. map() vs forEach()

This is one of the most important differences.

### forEach()

Use it when you want to **perform an action**.

```js
const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});
```

Returns:

```text
undefined
```

### map()

Use it when you want to **create a new transformed array**.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);
```

Returns:

```js
[2, 4, 6];
```

### Remember

```text
forEach() → DO something
map()     → CREATE something
```

---

# 50. map() vs filter()

### map()

Transforms every item.

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

// [2, 4, 6]
```

### filter()

Selects items that pass a condition.

```js
const numbers = [1, 2, 3];

const result = numbers.filter((num) => num > 1);

// [2, 3]
```

### Remember

```text
map()     → CHANGE
filter()  → SELECT
```

---

# 51. find() vs filter()

### find()

Returns the **first matching element**.

```js
const numbers = [5, 10, 15, 20];

const result = numbers.find((num) => num > 10);

console.log(result);

// 15
```

### filter()

Returns **all matching elements**.

```js
const result = numbers.filter((num) => num > 10);

console.log(result);

// [15, 20]
```

### Remember

```text
find()    → FIRST matching item
filter()  → ALL matching items
```

---

# 52. some() vs every()

```js
const scores = [60, 80, 90];
```

### some()

Does **at least one** match?

```js
scores.some((score) => score >= 80);

// true
```

### every()

Do **all** match?

```js
scores.every((score) => score >= 80);

// false
```

### Remember

```text
some()  → ANY?
every() → ALL?
```

---

# 53. slice() vs splice()

This is extremely important.

### slice()

```js
array.slice(start, end);
```

- Copies/extracts
- Does NOT modify original
- End index is excluded

### splice()

```js
array.splice(start, deleteCount, items);
```

- Adds
- Removes
- Replaces
- DOES modify original

### Remember

```text
slice()  → TAKE A SECTION
splice() → CHANGE THE ARRAY
```

---

# 54. reverse() vs toReversed()

```text
reverse()     → modifies original
toReversed()  → creates new array
```

```js
const numbers = [1, 2, 3];

const result = numbers.toReversed();

console.log(numbers);

// [1, 2, 3]

console.log(result);

// [3, 2, 1]
```

---

# 55. sort() vs toSorted()

```text
sort()      → modifies original
toSorted()  → creates new array
```

```js
const numbers = [30, 10, 20];

const sorted = numbers.toSorted((a, b) => a - b);

console.log(numbers);

// [30, 10, 20]

console.log(sorted);

// [10, 20, 30]
```

---

# 56. Array of Objects

A very common real-world structure.

```js
const users = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Mary",
    age: 30,
  },
];
```

Access the first object:

```js
console.log(users[0]);

// { name: "John", age: 25 }
```

Access a property:

```js
console.log(users[0].name);

// John
```

Loop through the objects:

```js
for (const user of users) {
  console.log(user.name);
}
```

Filter objects:

```js
const adults = users.filter((user) => user.age >= 18);
```

Map objects:

```js
const names = users.map((user) => user.name);
```

This structure is extremely common in real JavaScript applications.

---

# 57. Nested Arrays

An array can contain other arrays.

```js
const numbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];
```

Access the first inner array:

```js
console.log(numbers[0]);

// [1, 2]
```

Access a specific value:

```js
console.log(numbers[0][1]);

// 2
```

Think:

```text
numbers[0]    → first inner array
numbers[0][1] → second value inside first inner array
```

Nested arrays are often used with **nested loops**.

---

# 58. Common Array Pattern — Find Largest

```js
const numbers = [10, 25, 5, 40, 15];

let largest = numbers[0];

for (const num of numbers) {
  if (num > largest) {
    largest = num;
  }
}

console.log(largest);

// 40
```

---

# 59. Common Array Pattern — Find Smallest

```js
const numbers = [10, 25, 5, 40, 15];

let smallest = numbers[0];

for (const num of numbers) {
  if (num < smallest) {
    smallest = num;
  }
}

console.log(smallest);

// 5
```

---

# 60. Common Array Pattern — Sum

```js
const numbers = [10, 20, 30];

let total = 0;

for (const num of numbers) {
  total += num;
}

console.log(total);

// 60
```

Or:

```js
const total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);
```

---

# 61. Common Array Pattern — Count Matching Items

```js
const numbers = [5, 10, 15, 20];

let count = 0;

for (const num of numbers) {
  if (num >= 10) {
    count++;
  }
}

console.log(count);

// 3
```

Or:

```js
const count = numbers.filter((num) => num >= 10).length;
```

---

# 62. Common Array Pattern — Reverse Manually

You can reverse an array without using `reverse()`:

```js
const numbers = [1, 2, 3];

const reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}

console.log(reversed);

// [3, 2, 1]
```

This is useful practice for understanding loops and indexes.

---

# 63. Common Array Pattern — Search Manually

You don't always need `find()`.

```js
const numbers = [5, 10, 15, 20];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i]);
    break;
  }
}
```

This is essentially the logic behind finding the first matching item.

---

# 64. Quick Method Decision Guide

| What am I trying to do?                       | Use                 |
| --------------------------------------------- | ------------------- |
| Add to end                                    | `push()`            |
| Remove from end                               | `pop()`             |
| Add to beginning                              | `unshift()`         |
| Remove from beginning                         | `shift()`           |
| Check if value exists                         | `includes()`        |
| Get first index                               | `indexOf()`         |
| Get last index                                | `lastIndexOf()`     |
| Copy/extract a section                        | `slice()`           |
| Add/remove/replace                            | `splice()`          |
| Convert array to string                       | `join()`            |
| Reverse array                                 | `reverse()`         |
| Sort array                                    | `sort()`            |
| Combine arrays                                | `concat()` / spread |
| Loop through values                           | `for...of`          |
| Perform action on every item                  | `forEach()`         |
| Transform every item                          | `map()`             |
| Select matching items                         | `filter()`          |
| Find first matching item                      | `find()`            |
| Find first matching index                     | `findIndex()`       |
| Ask "does any match?"                         | `some()`            |
| Ask "do all match?"                           | `every()`           |
| Combine everything into one result            | `reduce()`          |
| Flatten nested arrays                         | `flat()`            |
| Transform + flatten                           | `flatMap()`         |
| Find from the end                             | `findLast()`        |
| Find index from the end                       | `findLastIndex()`   |
| Get indexes                                   | `keys()`            |
| Get values                                    | `values()`          |
| Get indexes + values                          | `entries()`         |
| Check if value is an array                    | `Array.isArray()`   |
| Convert iterable to array                     | `Array.from()`      |
| Fill with a value                             | `fill()`            |
| Access using negative index                   | `at()`              |
| Sort without changing original                | `toSorted()`        |
| Reverse without changing original             | `toReversed()`      |
| Splice without changing original              | `toSpliced()`       |
| Replace one element without changing original | `with()`            |

---

# 65. The Most Important Methods to Master First

You do **not** need to memorize every method in this cheatsheet.

Since you're currently reviewing JavaScript fundamentals, prioritize them like this.

### Tier 1 — Know Very Well

```text
length
[index]
push()
pop()
shift()
unshift()
slice()
splice()
includes()
indexOf()
for...of
```

### Tier 2 — Become Comfortable With

```text
forEach()
map()
filter()
find()
findIndex()
some()
every()
reduce()
```

### Tier 3 — Know What They Do

```text
join()
reverse()
sort()
concat()
spread (...)
flat()
flatMap()
Array.isArray()
Array.from()
at()
```

### Tier 4 — Learn Later

```text
findLast()
findLastIndex()
keys()
values()
entries()
toSorted()
toReversed()
toSpliced()
with()
```

You don't need to stop your learning to memorize Tier 4.

---

# 66. The Big Picture

Most array problems fall into a few categories.

```text
                    ARRAY
                      |
        +-------------+-------------+
        |             |             |
        ↓             ↓             ↓
      CHANGE        SEARCH       TRANSFORM
        |             |             |
   push/pop        find          map
   shift           findIndex     filter
   splice          includes      flat
   sort             some         flatMap
   reverse          every
   fill
        |
        ↓
      COMBINE
        |
      reduce
      concat
      join
```

The most useful mental model:

```text
map()      → "Change every item"
filter()   → "Keep matching items"
find()     → "Give me the first matching item"
some()     → "Does ANY item match?"
every()    → "Do ALL items match?"
reduce()   → "Combine everything into ONE result"
forEach()  → "Do something with every item"
flat()     → "Remove nesting"
flatMap()  → "Transform + flatten"
```

---

# 67. Final Quick Reference

```text
ARRAY BASICS
------------
array[index]          → access element
array.length          → number of elements
array[index] = value  → update element


ADD / REMOVE
------------
push()                → add to end
pop()                 → remove from end
unshift()             → add to beginning
shift()               → remove from beginning


SEARCH
------
includes()            → does value exist?
indexOf()             → first index
lastIndexOf()         → last index
find()                → first matching element
findIndex()           → first matching index
findLast()            → last matching element
findLastIndex()       → last matching index
some()                → does ANY match?
every()               → do ALL match?


TRANSFORM
---------
map()                 → transform every item
filter()              → keep matching items
flat()                → flatten nested arrays
flatMap()             → map + flat one level


COMBINE / CONVERT
-----------------
reduce()              → reduce to one result
concat()              → combine arrays
join()                → array → string
Array.from()          → create array from iterable
spread (...)          → copy / combine / expand


CHANGE ARRAY
------------
splice()              → add/remove/replace
reverse()             → reverse
sort()                → sort
fill()                → fill values


NON-MUTATING VERSIONS
---------------------
toSorted()            → sort without changing original
toReversed()          → reverse without changing original
toSpliced()           → splice without changing original
with()                → replace without changing original


LOOPS / ITERATION
-----------------
for...of              → loop through values
forEach()             → perform action on each item
keys()                → indexes
values()              → values
entries()             → index + value


OTHER
-----
Array.isArray()       → check if value is an array
at()                  → access by index, including negative indexes
```

---

# 68. The Five Questions to Ask Yourself

When you get an array problem, don't immediately think about the method.

First ask:

```text
1. Do I need to CHANGE the array?

2. Do I need to FIND something?

3. Do I need to TRANSFORM every item?

4. Do I need to SELECT only certain items?

5. Do I need to COMBINE everything into one result?
```

Then choose the tool.

```text
CHANGE
→ push / pop / shift / unshift / splice / sort / reverse

FIND
→ find / findIndex / includes / indexOf

TRANSFORM
→ map

SELECT
→ filter

CHECK
→ some / every

COMBINE
→ reduce

FLATTEN
→ flat / flatMap
```

**This is the part worth remembering.** The goal isn't to memorize every array method. The goal is to look at a problem and think:

> "What am I trying to do with this array?"

Then the appropriate method becomes much easier to choose.
