# JavaScript Objects Cheatsheet

---

# 1. What is an Object?

An object is a collection of **key-value pairs** used to store related information.

Unlike arrays, objects store data using **property names (keys)** instead of indexes.

```js
const person = {
    name: "John",
    age: 25,
    city: "Abuja"
};
```

Think of an object like a real-world object.

```text
Person
------
name → John
age  → 25
city → Abuja
```

---

# 2. Creating Objects

Using object literals (recommended)

```js
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023
};
```

Using the Object constructor

```js
const user = new Object();

user.name = "Jessica";
user.age = 20;
```

Creating an empty object

```js
const student = {};
```

---

# 3. Accessing Properties

## Dot Notation

Most common method.

```js
const person = {
    name: "John",
    age: 25
};

console.log(person.name);
// John

console.log(person.age);
// 25
```

---

## Bracket Notation

Useful when the property name contains spaces or is stored in a variable.

```js
const person = {
    name: "John",
    age: 25
};

console.log(person["name"]);
// John
```

Using variables

```js
const property = "age";

console.log(person[property]);
// 25
```

Property names with spaces

```js
const user = {
    "first name": "John"
};

console.log(user["first name"]);
```

---

# 4. Adding Properties

Objects are mutable.

```js
const person = {
    name: "John"
};

person.age = 25;

console.log(person);
```

Output

```js
{
    name: "John",
    age: 25
}
```

---

# 5. Updating Properties

```js
const person = {
    name: "John",
    age: 25
};

person.age = 30;

console.log(person.age);
// 30
```

---

# 6. Deleting Properties

Use the `delete` keyword.

```js
const person = {
    name: "John",
    age: 25
};

delete person.age;

console.log(person);
// { name: "John" }
```

---

# 7. Checking if a Property Exists

## in Operator

```js
const person = {
    name: "John"
};

console.log("name" in person);
// true

console.log("age" in person);
// false
```

---

## hasOwnProperty()

Checks if the object contains its own property.

```js
const person = {
    name: "John"
};

console.log(person.hasOwnProperty("name"));
// true
```

---

# 8. Object.keys()

Returns an array of property names.

```js
const person = {
    name: "John",
    age: 25
};

console.log(Object.keys(person));
// ["name","age"]
```

Looping through keys

```js
for (const key of Object.keys(person)) {
    console.log(key);
}
```

---

# 9. Object.values()

Returns an array of values.

```js
const person = {
    name: "John",
    age: 25
};

console.log(Object.values(person));
// ["John",25]
```

---

# 10. Object.entries()

Returns an array of key-value pairs.

```js
const person = {
    name: "John",
    age: 25
};

console.log(Object.entries(person));
```

Output

```js
[
    ["name","John"],
    ["age",25]
]
```

---

# 11. Looping Through Objects

Using `for...in`

```js
const person = {
    name: "John",
    age: 25
};

for (const key in person) {
    console.log(key, person[key]);
}
```

Output

```text
name John
age 25
```

---

# 12. Object Destructuring

Extract properties into variables.

```js
const person = {
    name: "John",
    age: 25
};

const { name, age } = person;

console.log(name);
// John

console.log(age);
// 25
```

Rename variables

```js
const { name: firstName } = person;

console.log(firstName);
```

Default values

```js
const { country = "Nigeria" } = person;

console.log(country);
// Nigeria
```

---

# 13. Nested Objects

Objects can contain other objects.

```js
const user = {
    name: "John",

    address: {
        city: "Abuja",
        country: "Nigeria"
    }
};

console.log(user.address.city);
// Abuja
```

---

# 14. Objects Inside Arrays

Very common in JavaScript.

```js
const users = [
    {
        name: "John",
        age: 20
    },
    {
        name: "Jessica",
        age: 25
    }
];

console.log(users[1].name);
// Jessica
```

---

# 15. Arrays Inside Objects

Objects can also contain arrays.

```js
const student = {
    name: "John",
    scores: [80, 90, 75]
};

console.log(student.scores[1]);
// 90
```

---

# 16. Spread Operator (...)

Copy an object

```js
const person = {
    name: "John",
    age: 25
};

const copy = {
    ...person
};

console.log(copy);
```

Merge objects

```js
const address = {
    city: "Abuja"
};

const person = {
    name: "John"
};

const user = {
    ...person,
    ...address
};

console.log(user);
```

---

# 17. Object.assign()

Copies or merges objects.

```js
const person = {
    name: "John"
};

const details = {
    age: 25
};

const user = Object.assign({}, person, details);

console.log(user);
```

---

# 18. Optional Chaining (?.)

Safely access nested properties.

```js
const user = {
    name: "John"
};

console.log(user.address?.city);
// undefined
```

Without optional chaining

```js
console.log(user.address.city);
// Error
```

---

# 19. Nullish Coalescing (??)

Provide default values only when the value is `null` or `undefined`.

```js
const person = {
    nickname: null
};

console.log(person.nickname ?? "No nickname");
// No nickname
```

---

# 20. Object.freeze()

Prevents changes.

```js
const person = {
    name: "John"
};

Object.freeze(person);

person.name = "James";

console.log(person.name);
// John
```

Cannot

* Add properties
* Delete properties
* Modify properties

---

# 21. Object.seal()

Allows modifying existing properties but prevents adding or deleting properties.

```js
const person = {
    name: "John"
};

Object.seal(person);

person.name = "James";

console.log(person.name);
// James

person.age = 20;
// Won't be added
```

---

# 22. Methods

Objects can store functions.

```js
const person = {
    name: "John",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

person.greet();
// Hello John
```

Using function syntax

```js
const calculator = {

    add(a, b) {
        return a + b;
    }
};

console.log(calculator.add(5, 3));
// 8
```

---

# 23. this Keyword

Inside an object method, `this` refers to the object itself.

```js
const person = {

    name: "Jessica",

    greet() {
        console.log(this.name);
    }

};

person.greet();
// Jessica
```

---

# 24. Object.fromEntries()

Converts key-value pairs into an object.

```js
const entries = [
    ["name", "John"],
    ["age", 25]
];

const person = Object.fromEntries(entries);

console.log(person);
```

---

# 25. Object Immutability

Objects are mutable by default.

```js
const person = {
    name: "John"
};

person.name = "James";

console.log(person.name);
// James
```

Even with `const`, object properties can change.

```js
const person = {
    name: "John"
};

person.age = 25;
```

Only the variable reference cannot be reassigned.

```js
person = {};
// Error
```

---

# Quick Reference Summary

| Method / Feature       | Returns | Modifies Original? | Use Case                           |
| ---------------------- | ------- | ------------------ | ---------------------------------- |
| `.`                    | Value   | ❌ No               | Access property                    |
| `[]`                   | Value   | ❌ No               | Dynamic property access            |
| `delete`               | Boolean | ✅ Yes              | Remove property                    |
| `in`                   | Boolean | ❌ No               | Check property exists              |
| `hasOwnProperty()`     | Boolean | ❌ No               | Check own property                 |
| `Object.keys()`        | Array   | ❌ No               | Get all keys                       |
| `Object.values()`      | Array   | ❌ No               | Get all values                     |
| `Object.entries()`     | Array   | ❌ No               | Get key-value pairs                |
| `Object.fromEntries()` | Object  | ❌ No               | Build object from entries          |
| `Object.assign()`      | Object  | ❌ No               | Copy/merge objects                 |
| `...` (Spread)         | Object  | ❌ No               | Copy or merge objects              |
| `Object.freeze()`      | Object  | ✅ Yes              | Make object immutable              |
| `Object.seal()`        | Object  | ✅ Yes              | Prevent adding/removing properties |
| `?.`                   | Value   | ❌ No               | Safe property access               |
| `??`                   | Value   | ❌ No               | Default value for null/undefined   |

---

# Quick Notes

* Objects store **key-value pairs**.
* Access properties using **dot notation (`.`)** or **bracket notation (`[]`)**.
* Objects are **mutable**, even when declared with `const`.
* Use **destructuring** to extract properties into variables.
* Use the **spread operator (`...`)** or `Object.assign()` to copy or merge objects.
* `Object.keys()`, `Object.values()`, and `Object.entries()` are the three most commonly used object methods.
* Use **optional chaining (`?.`)** to safely access nested properties.
* Use `this` inside object methods to refer to the current object.
* Remember: **Arrays are objects**, but objects are **not** arrays. Arrays use numeric indexes; objects use named properties.
