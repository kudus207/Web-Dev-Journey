# JavaScript Objects — Complete Cheatsheet

---

# 1. What Is an Object?

An object is a data structure used to store **related information as key-value pairs**.

Think of an object as describing **one thing**.

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja"
};
```

Each piece of information has:

```text
key → value
```

So:

```text
name → "John"
age  → 25
city → "Abuja"
```

### Think of an object like a real-world person:

```text
Person
├── name
├── age
├── city
└── profession
```

In JavaScript:

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja",
  profession: "Developer"
};
```

---

# 2. When Should I Use an Object?

Use an object when you have **different pieces of information describing one thing**.

For example, a user:

```js
const user = {
  name: "John",
  age: 25,
  email: "john@example.com"
};
```

A product:

```js
const product = {
  name: "Laptop",
  price: 500,
  brand: "HP",
  inStock: true
};
```

A car:

```js
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024,
  color: "Black"
};
```

### Main idea

```text
Object → describes ONE thing
Array  → stores a LIST of things
```

---

# 3. Creating an Object

The most common way is an object literal:

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja"
};
```

You can create an empty object:

```js
const user = {};
```

Then add properties later:

```js
user.name = "John";
user.age = 25;
```

---

# 4. Object Properties

The data inside an object is called **properties**.

```js
const person = {
  name: "John",
  age: 25
};
```

Here:

```text
name → property
age  → property
```

The values are:

```text
"John"
25
```

So:

```js
person.name
person.age
```

---

# 5. Accessing Object Properties — Dot Notation

The most common way to access a property is dot notation.

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

### Think

```text
object.property
```

Example:

```js
person.name
```

means:

> Get the `name` property from `person`.

---

# 6. Accessing Object Properties — Bracket Notation

You can also use brackets.

```js
const person = {
  name: "John",
  age: 25
};

console.log(person["name"]);

// John

console.log(person["age"]);

// 25
```

These are equivalent:

```js
person.name
```

and:

```js
person["name"]
```

---

# 7. Dot Notation vs Bracket Notation

### Dot notation

```js
person.name
```

Use it when you already know the property name.

### Bracket notation

```js
person["name"]
```

Useful when:

* the property name is stored in a variable
* the property contains spaces
* the property name is dynamic

Example:

```js
const person = {
  name: "John",
  age: 25
};

const property = "name";

console.log(person[property]);

// John
```

This is very important.

This:

```js
person[property]
```

means:

> Use the value inside `property` as the key.

---

# 8. Dynamic Property Access

```js
const user = {
  name: "John",
  age: 25,
  city: "Abuja"
};

const property = "city";

console.log(user[property]);

// Abuja
```

If:

```js
property = "name"
```

then:

```js
user[property]
```

becomes:

```js
user["name"]
```

---

# 9. Why user[property] and user.property Are Different

Suppose:

```js
const property = "name";
```

This:

```js
user[property]
```

looks for:

```js
user["name"]
```

But:

```js
user.property
```

looks for a property literally named:

```text
property
```

Example:

```js
const user = {
  name: "John",
  property: "something else"
};

const property = "name";

console.log(user[property]);

// John

console.log(user.property);

// something else
```

### Remember

```text
object.property
→ literal property name

object[property]
→ value stored inside the variable
```

---

# 10. Updating Object Properties

Objects are **mutable**.

You can change a property after creating the object.

```js
const person = {
  name: "John",
  age: 25
};

person.age = 26;

console.log(person);

// { name: "John", age: 26 }
```

---

# 11. Adding a New Property

You can add a property that didn't previously exist.

```js
const person = {
  name: "John"
};

person.age = 25;

console.log(person);

// { name: "John", age: 25 }
```

Using bracket notation:

```js
person["city"] = "Abuja";
```

Now:

```js
{
  name: "John",
  age: 25,
  city: "Abuja"
}
```

---

# 12. Deleting a Property

Use the `delete` operator.

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja"
};

delete person.age;

console.log(person);

// { name: "John", city: "Abuja" }
```

### Remember

```text
delete object.property
```

---

# 13. Checking If a Property Exists

You can use the `in` operator.

```js
const person = {
  name: "John",
  age: 25
};

console.log("name" in person);

// true

console.log("city" in person);

// false
```

### Think

```text
"property" in object
→ Does this property exist?
```

---

# 14. hasOwnProperty()

You can check whether an object directly owns a property.

```js
const person = {
  name: "John",
  age: 25
};

console.log(person.hasOwnProperty("name"));

// true

console.log(person.hasOwnProperty("city"));

// false
```

This is commonly used when searching objects.

Example:

```js
if (person.hasOwnProperty("age")) {
  console.log(person.age);
}
```

---

# 15. Object.keys()

Returns an array containing the object's property names.

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja"
};

const keys = Object.keys(person);

console.log(keys);

// ["name", "age", "city"]
```

### Think

```text
Object.keys()
→ GIVE ME THE PROPERTY NAMES
```

---

# 16. Object.values()

Returns an array containing the object's values.

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja"
};

const values = Object.values(person);

console.log(values);

// ["John", 25, "Abuja"]
```

### Think

```text
Object.values()
→ GIVE ME THE VALUES
```

---

# 17. Object.entries()

Returns an array containing key-value pairs.

```js
const person = {
  name: "John",
  age: 25
};

const entries = Object.entries(person);

console.log(entries);
```

Result:

```js
[
  ["name", "John"],
  ["age", 25]
]
```

Think:

```text
entries()
→ keys + values
```

---

# 18. keys() vs values() vs entries()

```text
Object.keys()
→ property names

Object.values()
→ property values

Object.entries()
→ property names + values
```

Example:

```js
const person = {
  name: "John",
  age: 25
};
```

```js
Object.keys(person);

// ["name", "age"]
```

```js
Object.values(person);

// ["John", 25]
```

```js
Object.entries(person);

// [["name", "John"], ["age", 25]]
```

---

# 19. for...in

`for...in` loops through the **property names** of an object.

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja"
};

for (const key in person) {
  console.log(key);
}
```

Output:

```text
name
age
city
```

### Get the values

Use bracket notation:

```js
for (const key in person) {
  console.log(person[key]);
}
```

Output:

```text
John
25
Abuja
```

### Get both

```js
for (const key in person) {
  console.log(key, person[key]);
}
```

Output:

```text
name John
age 25
city Abuja
```

---

# 20. for...in vs for...of

This is extremely important.

### Objects

```js
for (const key in object) {
}
```

`for...in` gives you the **keys**.

### Arrays

```js
for (const value of array) {
}
```

`for...of` gives you the **values**.

Example:

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

Array:

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
for...in  → object keys
for...of  → iterable values
```

---

# 21. Object.freeze()

Prevents an object from being changed.

```js
const person = {
  name: "John",
  age: 25
};

Object.freeze(person);

person.age = 30;

console.log(person.age);

// 25
```

You also cannot normally:

```js
person.city = "Abuja";
```

or:

```js
delete person.age;
```

### Think

```text
Object.freeze()
→ LOCK THE OBJECT
```

---

# 22. Object.seal()

Prevents adding or deleting properties.

You can still change existing property values.

```js
const person = {
  name: "John",
  age: 25
};

Object.seal(person);

person.age = 30;

console.log(person.age);

// 30
```

But:

```js
person.city = "Abuja";
```

will not add a new property.

And:

```js
delete person.age;
```

will not remove it.

### Difference

```text
freeze()
→ cannot add
→ cannot delete
→ cannot modify

seal()
→ cannot add
→ cannot delete
→ CAN modify existing properties
```

---

# 23. Object.assign()

Copies properties from one or more objects into another object.

```js
const person = {
  name: "John"
};

const details = {
  age: 25
};

Object.assign(person, details);

console.log(person);

// { name: "John", age: 25 }
```

It can combine objects.

```js
const person = {
  name: "John"
};

const details = {
  age: 25,
  city: "Abuja"
};

const result = Object.assign({}, person, details);

console.log(result);

// {
//   name: "John",
//   age: 25,
//   city: "Abuja"
// }
```

---

# 24. Spread Operator with Objects

The spread operator can also copy and combine objects.

```js
const person = {
  name: "John",
  age: 25
};

const copy = {
  ...person
};
```

Now:

```js
copy
```

contains:

```js
{
  name: "John",
  age: 25
}
```

### Combine objects

```js
const person = {
  name: "John"
};

const details = {
  age: 25
};

const result = {
  ...person,
  ...details
};
```

Result:

```js
{
  name: "John",
  age: 25
}
```

### Add properties while copying

```js
const result = {
  ...person,
  city: "Abuja"
};
```

---

# 25. Object.assign() vs Spread

Both can be used to copy/combine objects.

```js
Object.assign({}, person, details);
```

or:

```js
{
  ...person,
  ...details
}
```

For beginner JavaScript, spread syntax is often easier to read.

---

# 26. Object Destructuring

Destructuring allows you to extract properties from an object into variables.

Instead of:

```js
const person = {
  name: "John",
  age: 25
};

const name = person.name;
const age = person.age;
```

You can write:

```js
const {
  name,
  age
} = person;
```

Now:

```js
console.log(name);

// John

console.log(age);

// 25
```

### Think

```text
Destructuring
→ TAKE values OUT of an object
```

---

# 27. Destructuring with Different Variable Names

You can rename the variables.

```js
const person = {
  name: "John",
  age: 25
};

const {
  name: personName,
  age: personAge
} = person;

console.log(personName);

// John

console.log(personAge);

// 25
```

---

# 28. Destructuring with Default Values

You can provide a default value.

```js
const person = {
  name: "John"
};

const {
  name,
  age = 25
} = person;

console.log(age);

// 25
```

The default is used because `age` doesn't exist.

---

# 29. Rest Property in Objects

The rest syntax collects the remaining properties.

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja"
};

const {
  name,
  ...details
} = person;

console.log(name);

// John

console.log(details);

// { age: 25, city: "Abuja" }
```

### Think

```text
...rest
→ collect the remaining properties
```

---

# 30. Object Property Shorthand

If your variable and property have the same name:

```js
const name = "John";
const age = 25;

const person = {
  name: name,
  age: age
};
```

You can shorten it:

```js
const person = {
  name,
  age
};
```

JavaScript understands:

```js
name: name
```

as:

```js
name
```

when using shorthand.

---

# 31. Computed Property Names

You can create an object property using a variable.

```js
const property = "name";

const person = {
  [property]: "John"
};

console.log(person);

// { name: "John" }
```

Another example:

```js
const key = "age";

const person = {
  name: "John",
  [key]: 25
};
```

Result:

```js
{
  name: "John",
  age: 25
}
```

---

# 32. Methods in Objects

A function stored inside an object is called a **method**.

```js
const person = {
  name: "John",

  greet: function() {
    console.log("Hello!");
  }
};
```

Call the method:

```js
person.greet();
```

Output:

```text
Hello!
```

---

# 33. Short Method Syntax

Instead of:

```js
const person = {
  greet: function() {
    console.log("Hello!");
  }
};
```

You can write:

```js
const person = {
  greet() {
    console.log("Hello!");
  }
};
```

This is the modern shorthand.

---

# 34. this in Objects

`this` refers to the object that is calling the method.

```js
const person = {
  name: "John",

  greet() {
    console.log(this.name);
  }
};

person.greet();

// John
```

Here:

```js
this.name
```

refers to:

```js
person.name
```

---

# 35. Object Methods Using this

```js
const person = {
  firstName: "John",
  lastName: "Doe",

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.getFullName());

// John Doe
```

`this` allows a method to access other properties belonging to the same object.

---

# 36. Important this Warning

Be careful with arrow functions inside objects.

This:

```js
const person = {
  name: "John",

  greet: () => {
    console.log(this.name);
  }
};
```

does NOT behave like a normal object method.

Prefer:

```js
const person = {
  name: "John",

  greet() {
    console.log(this.name);
  }
};
```

when you want `this` to refer to the object.

---

# 37. Nested Objects

An object can contain another object.

```js
const person = {
  name: "John",

  address: {
    city: "Abuja",
    country: "Nigeria"
  }
};
```

Access the nested object:

```js
console.log(person.address);
```

Access a nested property:

```js
console.log(person.address.city);

// Abuja
```

### Think

```text
person
  ↓
address
  ↓
city
```

---

# 38. Arrays Inside Objects

An object can contain an array.

```js
const student = {
  name: "John",

  scores: [80, 75, 90]
};
```

Access the array:

```js
console.log(student.scores);
```

Access an individual value:

```js
console.log(student.scores[0]);

// 80
```

Loop through it:

```js
for (const score of student.scores) {
  console.log(score);
}
```

---

# 39. Objects Inside Arrays

An array can contain objects.

This is extremely common.

```js
const users = [
  {
    name: "John",
    age: 25
  },

  {
    name: "Mary",
    age: 30
  }
];
```

Access the first object:

```js
console.log(users[0]);
```

Access its name:

```js
console.log(users[0].name);

// John
```

Access the second user's age:

```js
console.log(users[1].age);

// 30
```

---

# 40. Array of Objects — Real-World Example

Imagine an online store.

```js
const products = [
  {
    name: "Laptop",
    price: 500,
    inStock: true
  },

  {
    name: "Phone",
    price: 300,
    inStock: false
  },

  {
    name: "Headphones",
    price: 100,
    inStock: true
  }
];
```

Loop through them:

```js
for (const product of products) {
  console.log(product.name);
}
```

Output:

```text
Laptop
Phone
Headphones
```

---

# 41. Filtering an Array of Objects

```js
const products = [
  {
    name: "Laptop",
    price: 500
  },

  {
    name: "Phone",
    price: 300
  },

  {
    name: "Headphones",
    price: 100
  }
];

const expensive = products.filter(product => {
  return product.price >= 300;
});
```

Result:

```js
[
  {
    name: "Laptop",
    price: 500
  },

  {
    name: "Phone",
    price: 300
  }
]
```

### Important pattern

```text
array of objects
       ↓
   filter()
       ↓
object.property
```

---

# 42. Mapping an Array of Objects

Get only the names:

```js
const products = [
  {
    name: "Laptop",
    price: 500
  },

  {
    name: "Phone",
    price: 300
  }
];

const names = products.map(product => {
  return product.name;
});

console.log(names);

// ["Laptop", "Phone"]
```

### Think

```text
objects → map → specific property
```

---

# 43. Finding an Object

```js
const users = [
  {
    name: "John",
    age: 25
  },

  {
    name: "Mary",
    age: 30
  }
];

const user = users.find(user => {
  return user.name === "Mary";
});

console.log(user);
```

Result:

```js
{
  name: "Mary",
  age: 30
}
```

---

# 44. Finding an Object by ID

A very common real-world pattern:

```js
const users = [
  {
    id: 1,
    name: "John"
  },

  {
    id: 2,
    name: "Mary"
  }
];

const user = users.find(user => {
  return user.id === 2;
});

console.log(user);

// { id: 2, name: "Mary" }
```

---

# 45. Updating an Object Inside an Array

```js
const users = [
  {
    name: "John",
    age: 25
  },

  {
    name: "Mary",
    age: 30
  }
];

users[0].age = 26;

console.log(users[0]);

// { name: "John", age: 26 }
```

---

# 46. Object.keys() with a Loop

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja"
};

const keys = Object.keys(person);

for (const key of keys) {
  console.log(key);
}
```

Output:

```text
name
age
city
```

---

# 47. Object.values() with a Loop

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja"
};

const values = Object.values(person);

for (const value of values) {
  console.log(value);
}
```

Output:

```text
John
25
Abuja
```

---

# 48. Object.entries() with a Loop

This is one of the most useful object patterns.

```js
const person = {
  name: "John",
  age: 25
};

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
```

Output:

```text
name John
age 25
```

The destructuring:

```js
[key, value]
```

takes:

```js
["name", "John"]
```

and separates it into:

```text
key   → "name"
value → "John"
```

---

# 49. Object.hasOwn()

Modern way to check whether an object directly has a property.

```js
const person = {
  name: "John"
};

console.log(Object.hasOwn(person, "name"));

// true

console.log(Object.hasOwn(person, "age"));

// false
```

This can be used instead of:

```js
person.hasOwnProperty("name")
```

---

# 50. Object.fromEntries()

Converts key-value pairs into an object.

```js
const entries = [
  ["name", "John"],
  ["age", 25]
];

const person = Object.fromEntries(entries);

console.log(person);
```

Result:

```js
{
  name: "John",
  age: 25
}
```

### Think

```text
Object.entries()
→ object → array

Object.fromEntries()
→ array → object
```

---

# 51. Object.create()

Creates a new object using another object as its prototype.

Basic example:

```js
const person = {
  greet() {
    console.log("Hello");
  }
};

const user = Object.create(person);

user.greet();
```

This is related to JavaScript's prototype system.

For your current fundamentals review, understand what it does rather than trying to memorize it.

---

# 52. Object.preventExtensions()

Prevents new properties from being added.

```js
const person = {
  name: "John"
};

Object.preventExtensions(person);

person.age = 25;
```

The new property will not be added.

Existing properties can still generally be changed or deleted.

### Compare

```text
preventExtensions()
→ cannot add

seal()
→ cannot add or delete

freeze()
→ cannot add, delete, or modify
```

---

# 53. Checking Object Property Values

You can use normal conditions.

```js
const user = {
  name: "John",
  age: 25
};

if (user.age >= 18) {
  console.log("Adult");
}
```

You can also compare strings:

```js
if (user.name === "John") {
  console.log("Found John");
}
```

---

# 54. Objects and Conditions

Objects are often used to store information that controls program behavior.

```js
const user = {
  name: "John",
  isAdmin: true
};

if (user.isAdmin) {
  console.log("Show admin dashboard");
}
```

---

# 55. Objects and Functions

Objects can be passed into functions.

```js
function greetUser(user) {
  console.log("Hello " + user.name);
}

const person = {
  name: "John",
  age: 25
};

greetUser(person);

// Hello John
```

---

# 56. Destructuring Function Parameters

Instead of:

```js
function greetUser(user) {
  console.log(user.name);
}
```

You can destructure:

```js
function greetUser({ name }) {
  console.log(name);
}
```

Then:

```js
const person = {
  name: "John",
  age: 25
};

greetUser(person);

// John
```

---

# 57. Optional Chaining (?.)

Optional chaining allows you to safely access nested properties.

```js
const user = {
  name: "John"
};

console.log(user.address?.city);

// undefined
```

Without optional chaining:

```js
user.address.city
```

could cause an error because `address` doesn't exist.

### Think

```text
?.
→ "If this exists, continue."
```

---

# 58. Nullish Coalescing (??)

Provides a fallback when a value is `null` or `undefined`.

```js
const user = {
  name: "John"
};

const city = user.city ?? "Unknown";

console.log(city);

// Unknown
```

### Important

`??` checks specifically for:

```text
null
undefined
```

---

# 59. Optional Chaining + Nullish Coalescing

Very useful together:

```js
const user = {
  name: "John"
};

const city = user.address?.city ?? "Unknown";

console.log(city);

// Unknown
```

Meaning:

> Try to get `user.address.city`. If it doesn't exist, use `"Unknown"`.

---

# 60. Object Property with a Space

Property names can contain spaces.

```js
const person = {
  "first name": "John",
  age: 25
};
```

You cannot use:

```js
person.first name
```

Instead:

```js
console.log(person["first name"]);

// John
```

This is another reason bracket notation is important.

---

# 61. Object Property Names Can Be Numbers

```js
const scores = {
  1: 100,
  2: 200
};
```

Access them:

```js
console.log(scores[1]);

// 100
```

Object keys are generally treated as strings (apart from symbols).

---

# 62. Object Property Values Can Be Anything

An object property can contain:

```text
string
number
boolean
null
undefined
array
object
function
```

Example:

```js
const person = {
  name: "John",
  age: 25,
  isStudent: false,
  address: null,

  hobbies: ["Coding", "Music"],

  contact: {
    email: "john@example.com"
  },

  greet() {
    console.log("Hello");
  }
};
```

---

# 63. Objects Can Be Nested Deeply

```js
const company = {
  name: "Tech Company",

  address: {
    country: "Nigeria",

    state: {
      name: "FCT",

      city: {
        name: "Abuja"
      }
    }
  }
};
```

Access:

```js
console.log(
  company.address.state.city.name
);

// Abuja
```

Optional chaining can make this safer:

```js
console.log(
  company.address?.state?.city?.name
);
```

---

# 64. Comparing Objects

Be careful when comparing objects.

```js
const person1 = {
  name: "John"
};

const person2 = {
  name: "John"
};

console.log(person1 === person2);

// false
```

Why?

Because they are two different objects in memory.

Even though their contents look identical.

---

# 65. Object References

When you assign an object to another variable:

```js
const person1 = {
  name: "John"
};

const person2 = person1;
```

Both variables refer to the same object.

So:

```js
person2.name = "Mary";

console.log(person1.name);

// Mary
```

Changing `person2` also changed what `person1` sees.

### Think

```text
person1 ──┐
          ↓
       { name: "John" }
          ↑
person2 ──┘
```

Both point to the same object.

---

# 66. Copying an Object

To create a new shallow copy:

```js
const person1 = {
  name: "John",
  age: 25
};

const person2 = {
  ...person1
};
```

Now:

```js
person2.name = "Mary";

console.log(person1.name);

// John
```

They are separate objects.

---

# 67. Shallow Copy

Spread only creates a **shallow copy**.

Example:

```js
const person1 = {
  name: "John",

  address: {
    city: "Abuja"
  }
};

const person2 = {
  ...person1
};
```

The outer objects are different:

```js
person1 !== person2
```

But the nested object is still shared:

```js
person1.address === person2.address
```

So:

```js
person2.address.city = "Lagos";
```

also changes:

```js
person1.address.city
```

---

# 68. structuredClone()

Creates a deeper copy of many JavaScript data structures.

```js
const person1 = {
  name: "John",

  address: {
    city: "Abuja"
  }
};

const person2 = structuredClone(person1);

person2.address.city = "Lagos";

console.log(person1.address.city);

// Abuja

console.log(person2.address.city);

// Lagos
```

For modern JavaScript, `structuredClone()` is a useful option when you need a deep copy of supported data.

---

# 69. Object Literal with Variables

You can create objects using existing variables.

```js
const name = "John";
const age = 25;
const city = "Abuja";

const person = {
  name,
  age,
  city
};
```

Result:

```js
{
  name: "John",
  age: 25,
  city: "Abuja"
}
```

---

# 70. Changing Multiple Properties

You can update several properties.

```js
const person = {
  name: "John",
  age: 25
};

person.name = "Mary";
person.age = 30;

console.log(person);

// {
//   name: "Mary",
//   age: 30
// }
```

---

# 71. Adding Multiple Properties with Spread

You can create a new object with additional information.

```js
const person = {
  name: "John",
  age: 25
};

const updatedPerson = {
  ...person,
  city: "Abuja",
  profession: "Developer"
};
```

Result:

```js
{
  name: "John",
  age: 25,
  city: "Abuja",
  profession: "Developer"
}
```

---

# 72. Overwriting Properties with Spread

Later properties overwrite earlier properties.

```js
const person = {
  name: "John",
  age: 25
};

const updatedPerson = {
  ...person,
  age: 30
};
```

Result:

```js
{
  name: "John",
  age: 30
}
```

### Remember

```text
Later property wins.
```

---

# 73. Object with an Array of Objects

A very common real-world structure:

```js
const store = {
  name: "My Store",

  products: [
    {
      name: "Laptop",
      price: 500
    },

    {
      name: "Phone",
      price: 300
    }
  ]
};
```

Access:

```js
console.log(store.name);

// My Store
```

First product:

```js
console.log(store.products[0]);
```

First product name:

```js
console.log(store.products[0].name);

// Laptop
```

---

# 74. Looping Through Nested Data

```js
const store = {
  name: "My Store",

  products: [
    {
      name: "Laptop",
      price: 500
    },

    {
      name: "Phone",
      price: 300
    }
  ]
};

for (const product of store.products) {
  console.log(product.name);
}
```

Output:

```text
Laptop
Phone
```

---

# 75. Object as a Lookup Table

Objects are useful when you want to quickly associate one value with another.

```js
const grades = {
  A: "Excellent",
  B: "Good",
  C: "Average",
  D: "Poor"
};
```

Then:

```js
console.log(grades["A"]);

// Excellent
```

You can use a variable:

```js
const grade = "B";

console.log(grades[grade]);

// Good
```

---

# 76. Object Lookup vs Many if Statements

Instead of:

```js
if (grade === "A") {
  result = "Excellent";
} else if (grade === "B") {
  result = "Good";
} else if (grade === "C") {
  result = "Average";
}
```

You could use:

```js
const grades = {
  A: "Excellent",
  B: "Good",
  C: "Average"
};

const result = grades[grade];
```

This is one practical use of objects.

---

# 77. Object as a Counter

Objects can be used to count things.

```js
const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple"
];

const count = {};

for (const fruit of fruits) {
  if (count[fruit]) {
    count[fruit]++;
  } else {
    count[fruit] = 1;
  }
}

console.log(count);
```

Result:

```js
{
  apple: 3,
  banana: 2,
  orange: 1
}
```

This is a very useful pattern.

---

# 78. Simpler Object Counter Pattern

You can also use:

```js
const count = {};

for (const fruit of fruits) {
  count[fruit] = (count[fruit] || 0) + 1;
}
```

The idea is:

```text
If count exists → increase it
If it doesn't → start at 0, then add 1
```

---

# 79. Object Property Existence Pattern

A common pattern:

```js
if (object.hasOwnProperty(property)) {
  console.log(object[property]);
}
```

Example:

```js
const person = {
  name: "John",
  age: 25
};

const property = "age";

if (person.hasOwnProperty(property)) {
  console.log(person[property]);
}

// 25
```

This is useful when the property name comes from a variable.

---

# 80. Object.keys().length

You can find the number of properties.

```js
const person = {
  name: "John",
  age: 25,
  city: "Abuja"
};

console.log(Object.keys(person).length);

// 3
```

### Think

```text
Object.keys(object).length
→ number of own enumerable properties
```

---

# 81. Empty Object Check

You can check if an object has no properties:

```js
const user = {};

if (Object.keys(user).length === 0) {
  console.log("Object is empty");
}
```

---

# 82. Converting Object to Array

Using:

```js
Object.keys()
Object.values()
Object.entries()
```

Example:

```js
const person = {
  name: "John",
  age: 25
};
```

Convert keys:

```js
Object.keys(person);

// ["name", "age"]
```

Convert values:

```js
Object.values(person);

// ["John", 25]
```

Convert entries:

```js
Object.entries(person);

// [["name", "John"], ["age", 25]]
```

---

# 83. Converting Array Back to Object

Use `Object.fromEntries()`.

```js
const entries = [
  ["name", "John"],
  ["age", 25]
];

const person = Object.fromEntries(entries);
```

Result:

```js
{
  name: "John",
  age: 25
}
```

---

# 84. Object Transformation Pattern

You can transform an object by converting it to entries.

```js
const prices = {
  laptop: 500,
  phone: 300
};

const result = Object.fromEntries(
  Object.entries(prices).map(([product, price]) => {
    return [product, price * 2];
  })
);

console.log(result);
```

Result:

```js
{
  laptop: 1000,
  phone: 600
}
```

This is more advanced, so don't worry about memorizing it yet.

---

# 85. Object Methods Summary

### Access

```text
object.property
object["property"]
```

### Add

```text
object.property = value
```

### Update

```text
object.property = newValue
```

### Delete

```text
delete object.property
```

### Check

```text
"property" in object
object.hasOwnProperty("property")
Object.hasOwn(object, "property")
```

### Get keys

```text
Object.keys(object)
```

### Get values

```text
Object.values(object)
```

### Get both

```text
Object.entries(object)
```

---

# 86. Important Object Methods / Features

```text
Object.keys()
Object.values()
Object.entries()

Object.fromEntries()

Object.assign()

Object.create()

Object.freeze()
Object.seal()
Object.preventExtensions()

Object.hasOwn()

spread (...)
destructuring
optional chaining (?.)
nullish coalescing (??)
```

---

# 87. Object Mutability

Objects are mutable.

```js
const person = {
  name: "John"
};

person.name = "Mary";

console.log(person.name);

// Mary
```

Just like arrays, `const` does NOT make an object immutable.

This is allowed:

```js
const person = {
  name: "John"
};

person.name = "Mary";
```

But this is not:

```js
person = {
  name: "Mary"
};
```

because you're trying to reassign the variable.

---

# 88. const with Objects

Remember:

```js
const person = {
  name: "John"
};
```

`const` means:

```text
The variable cannot point to a different object.
```

It does NOT mean:

```text
The object's properties cannot change.
```

---

# 89. Object vs Array

This is one of the most important things to understand.

### Array

Use an array when you have a **list**.

```js
const fruits = [
  "Apple",
  "Banana",
  "Orange"
];
```

Think:

```text
LIST
```

### Object

Use an object when you have information **describing one thing**.

```js
const fruit = {
  name: "Apple",
  color: "Red",
  price: 2
};
```

Think:

```text
DESCRIPTION
```

---

# 90. Array of Objects

When you have a **list of things**, and each thing has multiple properties:

```js
const fruits = [
  {
    name: "Apple",
    color: "Red",
    price: 2
  },

  {
    name: "Banana",
    color: "Yellow",
    price: 1
  }
];
```

Think:

```text
Array
 ↓
List of objects
 ↓
Each object describes one item
```

This is one of the most important structures in real JavaScript.

---

# 91. Object Containing Arrays

An object can also organize several lists:

```js
const student = {
  name: "John",

  subjects: [
    "Math",
    "English",
    "Science"
  ],

  scores: [
    80,
    75,
    90
  ]
};
```

Think:

```text
Object
 ↓
different properties
 ↓
some properties can be arrays
```

---

# 92. Object Containing Objects

```js
const user = {
  name: "John",

  address: {
    city: "Abuja",
    country: "Nigeria"
  }
};
```

Think:

```text
Object
 ↓
address object
 ↓
city / country
```

---

# 93. Arrays and Objects Can Be Combined

Real applications commonly use structures like:

```js
const company = {
  name: "Tech Company",

  employees: [
    {
      name: "John",
      role: "Developer"
    },

    {
      name: "Mary",
      role: "Designer"
    }
  ],

  address: {
    city: "Abuja",
    country: "Nigeria"
  }
};
```

Here:

```text
company
├── name
├── employees → array
│   ├── object
│   └── object
│
└── address → object
    ├── city
    └── country
```

---

# 94. Common Object Pattern — Find Property

```js
const user = {
  name: "John",
  age: 25,
  city: "Abuja"
};

const property = "age";

if (user.hasOwnProperty(property)) {
  console.log(user[property]);
}
```

---

# 95. Common Object Pattern — Loop Through Properties

```js
const user = {
  name: "John",
  age: 25,
  city: "Abuja"
};

for (const key in user) {
  console.log(key, user[key]);
}
```

---

# 96. Common Object Pattern — Find Largest Value

```js
const scores = {
  John: 75,
  Mary: 90,
  David: 82
};

let highest = -Infinity;

for (const name in scores) {
  if (scores[name] > highest) {
    highest = scores[name];
  }
}

console.log(highest);

// 90
```

---

# 97. Common Object Pattern — Find Key with Largest Value

```js
const scores = {
  John: 75,
  Mary: 90,
  David: 82
};

let highestName = "";
let highestScore = -Infinity;

for (const name in scores) {
  if (scores[name] > highestScore) {
    highestScore = scores[name];
    highestName = name;
  }
}

console.log(highestName);

// Mary
```

---

# 98. Common Object Pattern — Count Properties

```js
const user = {
  name: "John",
  age: 25,
  city: "Abuja"
};

const count = Object.keys(user).length;

console.log(count);

// 3
```

---

# 99. Common Object Pattern — Check Property Before Using It

```js
const user = {
  name: "John"
};

if ("age" in user) {
  console.log(user.age);
} else {
  console.log("Age not found");
}
```

---

# 100. Common Object Pattern — Add or Update Dynamically

```js
const user = {};

const property = "name";
const value = "John";

user[property] = value;

console.log(user);

// { name: "John" }
```

This is extremely useful when property names come from variables.

---

# 101. Common Object Pattern — Build an Object

You can start with an empty object:

```js
const user = {};
```

Then add properties:

```js
user.name = "John";
user.age = 25;
user.city = "Abuja";
```

Result:

```js
{
  name: "John",
  age: 25,
  city: "Abuja"
}
```

---

# 102. Common Object Pattern — Transform Object Values

```js
const scores = {
  John: 50,
  Mary: 70,
  David: 80
};

const updatedScores = {};

for (const name in scores) {
  updatedScores[name] = scores[name] + 10;
}

console.log(updatedScores);
```

Result:

```js
{
  John: 60,
  Mary: 80,
  David: 90
}
```

---

# 103. Common Object Pattern — Search Object

```js
const users = {
  user1: {
    name: "John",
    age: 25
  },

  user2: {
    name: "Mary",
    age: 30
  }
};

for (const key in users) {
  if (users[key].name === "Mary") {
    console.log(users[key]);
  }
}
```

---

# 104. Object Method Decision Guide

| What am I trying to do?       | Use                          |
| ----------------------------- | ---------------------------- |
| Get property                  | `object.property`            |
| Get dynamic property          | `object[property]`           |
| Add property                  | `object.property = value`    |
| Update property               | `object.property = value`    |
| Delete property               | `delete object.property`     |
| Check property                | `"property" in object`       |
| Check own property            | `Object.hasOwn()`            |
| Get all keys                  | `Object.keys()`              |
| Get all values                | `Object.values()`            |
| Get keys + values             | `Object.entries()`           |
| Turn entries into object      | `Object.fromEntries()`       |
| Copy/combine objects          | spread `...`                 |
| Copy/combine objects          | `Object.assign()`            |
| Extract properties            | destructuring                |
| Collect remaining properties  | rest `...`                   |
| Prevent adding properties     | `Object.preventExtensions()` |
| Prevent adding/deleting       | `Object.seal()`              |
| Prevent most changes          | `Object.freeze()`            |
| Safely access nested property | `?.`                         |
| Provide fallback              | `??`                         |

---

# 105. Object Quick Reference

```text
OBJECT BASICS
-------------
{}                    → create object
object.property       → access property
object[property]      → dynamic access
object.property = x   → add/update property
delete object.x       → remove property


CHECKING
--------
"x" in object
Object.hasOwn(object, "x")
object.hasOwnProperty("x")


GETTING INFORMATION
-------------------
Object.keys(object)       → keys
Object.values(object)     → values
Object.entries(object)    → keys + values


CONVERTING
----------
Object.fromEntries()      → entries → object


COPY / COMBINE
--------------
{ ...object }             → copy
{ ...obj1, ...obj2 }      → combine
Object.assign()           → copy/combine


LOOPING
-------
for...in                  → object keys

for (const key in object) {
  object[key]
}


DESTRUCTURING
-------------
const { name, age } = person;


NESTED ACCESS
-------------
object.address.city

object.address?.city


FALLBACK
--------
object.value ?? "Default"


OBJECT CONTROL
--------------
Object.preventExtensions()
Object.seal()
Object.freeze()
```

---

# 106. The Most Important Object Concepts to Master First

You do NOT need to memorize everything immediately.

Since you're reviewing JavaScript fundamentals, prioritize them like this.

### Tier 1 — Know Very Well

```text
Creating objects
object.property
object[property]

Adding properties
Updating properties
Deleting properties

Object.keys()
Object.values()
Object.entries()

for...in

Arrays of objects
Objects inside arrays
Arrays inside objects
Nested objects
```

### Tier 2 — Become Comfortable With

```text
hasOwnProperty()
Object.hasOwn()

Spread (...)

Destructuring

Methods
this

Optional chaining ?.
Nullish coalescing ??
```

### Tier 3 — Know What They Do

```text
Object.assign()
Object.fromEntries()
Object.freeze()
Object.seal()
Object.preventExtensions()
```

### Tier 4 — Learn Later

```text
Object.create()
Prototypes
Property descriptors
Getters
Setters
Symbols
```

You don't need to stop your learning to memorize Tier 4.

---

# 107. The Big Picture

Most object problems fall into a few categories.

```text
                     OBJECT
                        |
          +-------------+-------------+
          |             |             |
          ↓             ↓             ↓
        ACCESS        CHANGE        LOOP
          |             |             |
       .property      add          for...in
       [property]     update
                      delete
          |
          ↓
       INSPECT
          |
    Object.keys()
    Object.values()
    Object.entries()
          |
          ↓
       COMBINE
          |
      spread (...)
      Object.assign()
          |
          ↓
      EXTRACT
          |
    destructuring
```

The most useful mental model:

```text
object.property
→ Get a known property

object[property]
→ Get a dynamic property

Object.keys()
→ Get the property names

Object.values()
→ Get the property values

Object.entries()
→ Get both

for...in
→ Loop through object keys

spread (...)
→ Copy/combine objects

destructuring
→ Take properties out into variables

hasOwn()
→ Check whether a property belongs to the object

?.
→ Safely access nested properties

??
→ Give a fallback when value is null/undefined
```

---

# 108. Array + Object Mental Model

This is one of the most important concepts to remember.

```text
ARRAY
→ LIST OF THINGS

OBJECT
→ DESCRIPTION OF A THING
```

Example:

```js
const student = {
  name: "John",
  age: 25,
  subjects: [
    "Math",
    "English",
    "Science"
  ]
};
```

Here:

```text
student
   ↓
OBJECT
   |
   ├── name → string
   ├── age → number
   └── subjects → ARRAY
```

Now multiple students:

```js
const students = [
  {
    name: "John",
    age: 25
  },

  {
    name: "Mary",
    age: 23
  }
];
```

Here:

```text
students
   ↓
ARRAY
   |
   ├── OBJECT
   │    ├── name
   │    └── age
   │
   └── OBJECT
        ├── name
        └── age
```

---

# 109. The Five Questions to Ask Yourself

When you get an object problem, don't immediately think about a method.

First ask:

```text
1. Am I trying to GET a property?

2. Am I trying to ADD, UPDATE, or DELETE a property?

3. Am I trying to CHECK whether a property exists?

4. Am I trying to LOOP through the object's properties?

5. Am I trying to GET the keys, values, or both?
```

Then choose the tool.

```text
GET
→ object.property
→ object[property]

CHANGE
→ object.property = value
→ delete object.property

CHECK
→ "property" in object
→ Object.hasOwn()

LOOP
→ for...in

KEYS
→ Object.keys()

VALUES
→ Object.values()

BOTH
→ Object.entries()

COPY / COMBINE
→ spread (...)

EXTRACT
→ destructuring

SAFE NESTED ACCESS
→ ?.

FALLBACK
→ ??
```

---

# 110. Final Object Cheat Code

If you forget everything else, remember this:

```text
OBJECT
------

Create:
const user = {
  name: "John",
  age: 25
};


Access:
user.name

Dynamic access:
user[property]


Add:
user.city = "Abuja"


Update:
user.age = 26


Delete:
delete user.age


Check:
Object.hasOwn(user, "name")


Keys:
Object.keys(user)


Values:
Object.values(user)


Keys + values:
Object.entries(user)


Loop:
for (const key in user) {
  console.log(key, user[key]);
}


Copy:
const copy = { ...user };


Combine:
const result = {
  ...user,
  city: "Abuja"
};


Extract:
const { name, age } = user;


Safe nested access:
user.address?.city


Fallback:
user.city ?? "Unknown"
```

---

# 111. Final Mental Model

Don't try to memorize 100 object features.

Remember the basic purpose:

```text
ARRAY
→ "I have MANY things."

OBJECT
→ "I have information ABOUT ONE thing."
```

Then remember:

```text
OBJECT
   |
   +── ACCESS
   |     ├── .property
   |     └── [property]
   |
   +── CHANGE
   |     ├── add
   |     ├── update
   |     └── delete
   |
   +── INSPECT
   |     ├── Object.keys()
   |     ├── Object.values()
   |     └── Object.entries()
   |
   +── LOOP
   |     └── for...in
   |
   +── COPY / COMBINE
   |     └── spread (...)
   |
   +── EXTRACT
   |     └── destructuring
   |
   +── NEST
   |     ├── objects
   |     └── arrays
   |
   +── CHECK
   |     └── Object.hasOwn()
   |
   +── SAFE ACCESS
   |     └── ?.
   |
   └── FALLBACK
         └── ??
```

The goal isn't to memorize every object method.

The goal is to look at a problem and think:

> **"What information am I trying to store or retrieve, and is this one thing or a list of things?"**

Then choose:

```text
ONE THING + DETAILS
→ OBJECT

MANY THINGS
→ ARRAY

MANY THINGS + EACH HAS DETAILS
→ ARRAY OF OBJECTS

ONE THING + A LIST OF DETAILS
→ OBJECT WITH ARRAY

ONE THING + MORE STRUCTURED DETAILS
→ NESTED OBJECT
```
