# JavaScript Arrays Cheatsheet

---

# 1. What is an Array?

An array is a special object used to store **multiple values** in a single variable.

Instead of creating many variables, you can store related data together.

```js
const fruits = ["Apple", "Banana", "Orange"];
```

Arrays can store different data types.

```js
const mixed = [
    "John",
    25,
    true,
    null,
    { city: "Lagos" }
];
```

---

# 2. Creating Arrays

Using array literals (recommended)

```js
const numbers = [1, 2, 3, 4];

const colors = ["Red", "Blue", "Green"];
```

Using the Array constructor

```js
const fruits = new Array("Apple", "Banana");
```

Creating an empty array

```js
const users = [];
```

---

# 3. Accessing Elements

Arrays use **0-based indexing**.

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
// Apple

console.log(fruits[1]);
// Banana
```

Last element

```js
console.log(fruits[fruits.length - 1]);
// Orange
```

---

# 4. length

Returns the number of items.

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.length);
// 3
```

Empty array check

```js
if (fruits.length === 0) {
    console.log("Array is empty");
}
```

---

# 5. Updating Elements

```js
const fruits = ["Apple", "Banana"];

fruits[1] = "Orange";

console.log(fruits);
// ["Apple", "Orange"]
```

---

# 6. push()

Adds one or more elements to the **end** of an array.

Returns the new length.

```js
const fruits = ["Apple"];

fruits.push("Banana");

console.log(fruits);
// ["Apple","Banana"]
```

Multiple values

```js
fruits.push("Orange", "Mango");
```

---

# 7. pop()

Removes the last element.

Returns the removed item.

```js
const fruits = ["Apple","Banana","Orange"];

const removed = fruits.pop();

console.log(removed);
// Orange

console.log(fruits);
// ["Apple","Banana"]
```

---

# 8. unshift()

Adds one or more elements to the beginning.

```js
const fruits = ["Banana","Orange"];

fruits.unshift("Apple");

console.log(fruits);
// ["Apple","Banana","Orange"]
```

---

# 9. shift()

Removes the first element.

Returns the removed item.

```js
const fruits = ["Apple","Banana","Orange"];

const first = fruits.shift();

console.log(first);
// Apple

console.log(fruits);
// ["Banana","Orange"]
```

---

# 10. includes()

Checks if an array contains a value.

Returns true or false.

```js
const fruits = ["Apple","Banana","Orange"];

console.log(fruits.includes("Banana"));
// true

console.log(fruits.includes("Mango"));
// false
```

Practical Example

```js
if (fruits.includes("Apple")) {
    console.log("Apple exists.");
}
```

---

# 11. indexOf()

Returns the index of the first occurrence.

Returns -1 if not found.

```js
const fruits = ["Apple","Banana","Orange"];

console.log(fruits.indexOf("Orange"));
// 2

console.log(fruits.indexOf("Mango"));
// -1
```

---

# 12. lastIndexOf()

Returns the last occurrence.

```js
const numbers = [1,2,3,2,4];

console.log(numbers.lastIndexOf(2));
// 3
```

---

# 13. slice()

Copies part of an array.

The original array is NOT modified.

```js
const fruits = ["Apple","Banana","Orange","Mango"];

console.log(fruits.slice(1,3));
// ["Banana","Orange"]
```

Copy entire array

```js
const copy = fruits.slice();
```

Last two items

```js
console.log(fruits.slice(-2));
// ["Orange","Mango"]
```

---

# 14. splice()

Adds, removes, or replaces elements.

⚠️ This modifies the original array.

Remove items

```js
const fruits = ["Apple","Banana","Orange"];

fruits.splice(1,1);

console.log(fruits);
// ["Apple","Orange"]
```

Replace items

```js
const fruits = ["Apple","Banana","Orange"];

fruits.splice(1,1,"Mango");

console.log(fruits);
// ["Apple","Mango","Orange"]
```

Insert items

```js
const fruits = ["Apple","Orange"];

fruits.splice(1,0,"Banana");

console.log(fruits);
// ["Apple","Banana","Orange"]
```

---

# 15. join()

Converts an array into a string.

```js
const fruits = ["Apple","Banana","Orange"];

console.log(fruits.join(", "));
// Apple, Banana, Orange
```

Without separator

```js
console.log(fruits.join(""));
// AppleBananaOrange
```

---

# 16. reverse()

Reverses the array.

⚠️ Modifies the original array.

```js
const numbers = [1,2,3];

numbers.reverse();

console.log(numbers);
// [3,2,1]
```

---

# 17. sort()

Sorts an array.

⚠️ Modifies the original array.

Strings

```js
const fruits = ["Orange","Apple","Banana"];

fruits.sort();

console.log(fruits);
// ["Apple","Banana","Orange"]
```

Numbers (correct way)

```js
const numbers = [50,10,100,2];

numbers.sort((a,b) => a - b);

console.log(numbers);
// [2,10,50,100]
```

Descending

```js
numbers.sort((a,b) => b - a);
```

---

# 18. concat()

Combines arrays.

```js
const arr1 = [1,2];
const arr2 = [3,4];

const result = arr1.concat(arr2);

console.log(result);
// [1,2,3,4]
```

---

# 19. spread (...)

Modern way to combine arrays.

```js
const arr1 = [1,2];
const arr2 = [3,4];

const result = [...arr1, ...arr2];

console.log(result);
// [1,2,3,4]
```

Copy array

```js
const copy = [...arr1];
```

---

# 20. for...of

Loop through values.

```js
const fruits = ["Apple","Banana","Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

---

# 21. forEach()

Runs a function for every item.

```js
const fruits = ["Apple","Banana","Orange"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

Arrow function

```js
fruits.forEach(fruit => {
    console.log(fruit);
});
```

---

# 22. map()

Creates a new array.

Original array stays unchanged.

```js
const numbers = [1,2,3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
// [2,4,6]
```

---

# 23. filter()

Creates a new array containing only matching elements.

```js
const numbers = [5,10,15,20];

const result = numbers.filter(num => num >= 10);

console.log(result);
// [10,15,20]
```

---

# 24. find()

Returns the first matching element.

```js
const numbers = [4,7,10,15];

const result = numbers.find(num => num > 8);

console.log(result);
// 10
```

---

# 25. findIndex()

Returns the index of the first matching element.

```js
const numbers = [4,7,10,15];

const result = numbers.findIndex(num => num > 8);

console.log(result);
// 2
```

---

# 26. some()

Returns true if **at least one** element matches.

```js
const scores = [40,65,80];

console.log(scores.some(score => score >= 70));
// true
```

---

# 27. every()

Returns true if **every** element matches.

```js
const scores = [80,90,100];

console.log(scores.every(score => score >= 70));
// true
```

---

# 28. reduce()

Reduces an array to a single value.

Finding the sum

```js
const numbers = [10,20,30];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);
// 60
```

Finding the maximum

```js
const numbers = [5,10,25,8];

const max = numbers.reduce((largest, num) => {
    return num > largest ? num : largest;
});

console.log(max);
// 25
```

---

# 29. Array.isArray()

Checks if a value is an array.

```js
Array.isArray([1,2,3]);
// true

Array.isArray("Hello");
// false
```

---

# 30. Array.from()

Creates an array from an iterable.

```js
const word = "Hello";

console.log(Array.from(word));
// ["H","e","l","l","o"]
```

Generate numbers

```js
const numbers = Array.from({ length: 5 }, (_, index) => index + 1);

console.log(numbers);
// [1,2,3,4,5]
```

---

# 31. fill()

Fills every element with a value.

```js
const arr = new Array(5).fill(0);

console.log(arr);
// [0,0,0,0,0]
```

Fill part of an array

```js
const arr = [1,2,3,4];

arr.fill(0,1,3);

console.log(arr);
// [1,0,0,4]
```

---

# 32. at()

Access elements using positive or negative indexes.

```js
const fruits = ["Apple","Banana","Orange"];

console.log(fruits.at(0));
// Apple

console.log(fruits.at(-1));
// Orange
```

---

# Array Mutability

Arrays are **mutable**, meaning they can be changed after creation.

```js
const fruits = ["Apple","Banana"];

fruits.push("Orange");

console.log(fruits);
// ["Apple","Banana","Orange"]
```

---

# Mutating vs Non-Mutating Methods

### Mutates the Original Array

* push()
* pop()
* shift()
* unshift()
* splice()
* reverse()
* sort()
* fill()

### Returns a New Array

* slice()
* concat()
* map()
* filter()
* reduce()
* Array.from()

---

# Quick Reference Summary

| Method            | Returns      | Modifies Original? | Use Case                   |
| ----------------- | ------------ | ------------------ | -------------------------- |
| `.length`         | Number       | ❌ No               | Number of elements         |
| `[index]`         | Any          | ❌ No               | Access elements            |
| `.push()`         | Number       | ✅ Yes              | Add to end                 |
| `.pop()`          | Removed item | ✅ Yes              | Remove last                |
| `.unshift()`      | Number       | ✅ Yes              | Add to beginning           |
| `.shift()`        | Removed item | ✅ Yes              | Remove first               |
| `.includes()`     | Boolean      | ❌ No               | Check existence            |
| `.indexOf()`      | Number       | ❌ No               | Find first index           |
| `.lastIndexOf()`  | Number       | ❌ No               | Find last index            |
| `.slice()`        | Array        | ❌ No               | Copy/extract elements      |
| `.splice()`       | Array        | ✅ Yes              | Add, remove, replace       |
| `.join()`         | String       | ❌ No               | Convert to string          |
| `.reverse()`      | Array        | ✅ Yes              | Reverse array              |
| `.sort()`         | Array        | ✅ Yes              | Sort elements              |
| `.concat()`       | Array        | ❌ No               | Merge arrays               |
| `...` (Spread)    | Array        | ❌ No               | Copy/merge arrays          |
| `.forEach()`      | Undefined    | ❌ No               | Iterate over items         |
| `.map()`          | Array        | ❌ No               | Transform elements         |
| `.filter()`       | Array        | ❌ No               | Keep matching items        |
| `.find()`         | Element      | ❌ No               | Find first match           |
| `.findIndex()`    | Number       | ❌ No               | Find first matching index  |
| `.some()`         | Boolean      | ❌ No               | At least one matches       |
| `.every()`        | Boolean      | ❌ No               | All match                  |
| `.reduce()`       | Any          | ❌ No               | Reduce to one value        |
| `Array.isArray()` | Boolean      | ❌ No               | Check if value is array    |
| `Array.from()`    | Array        | ❌ No               | Create array               |
| `.fill()`         | Array        | ✅ Yes              | Fill values                |
| `.at()`           | Any          | ❌ No               | Access with negative index |

---

# Quick Notes

* Arrays use **0-based indexing**.
* Arrays are **mutable**, unlike strings.
* `.length` returns the number of elements.
* The last element is:

  ```js
  array[array.length - 1]
  ```

  or

  ```js
  array.at(-1)
  ```
* Use `map()` when transforming data, `filter()` when selecting data, `find()` when you need one item, `some()` for "any?", `every()` for "all?", and `reduce()` when combining values into one result.
* Learn the difference between **mutating** methods (`push`, `pop`, `splice`, `sort`, etc.) and **non-mutating** methods (`slice`, `map`, `filter`, `concat`, etc.). It's one of the most important concepts when working with arrays.
