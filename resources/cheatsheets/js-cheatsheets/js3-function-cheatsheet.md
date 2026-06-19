# JavaScript Functions Cheatsheet

---

# 1. What is a Function?

A function is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, you write it once and call it whenever you need it.

```js
function greet() {
    console.log("Hello!");
}

greet();
// Hello!
```

---

# 2. Function Declaration

The most common way to create a function.

```js
function sayHello() {
    console.log("Hello World!");
}
```

Calling the function

```js
sayHello();
// Hello World!
```

A function does **nothing** until it is called.

---

# 3. Function Parameters

Parameters are variables that receive values when the function is called.

```js
function greet(name) {
    console.log(`Hello ${name}`);
}

greet("John");
// Hello John

greet("Jessica");
// Hello Jessica
```

Multiple parameters

```js
function introduce(name, age) {
    console.log(`${name} is ${age} years old.`);
}

introduce("John", 20);
// John is 20 years old.
```

---

# 4. Function Arguments

Arguments are the actual values passed into a function.

```js
function multiply(a, b) {
    console.log(a * b);
}

multiply(4, 5);
```

Here

```text
Parameters → a, b

Arguments → 4, 5
```

---

# 5. Returning Values

`return` sends a value back from a function.

```js
function add(a, b) {
    return a + b;
}

const result = add(5, 8);

console.log(result);
// 13
```

Without `return`

```js
function add(a, b) {
    a + b;
}

console.log(add(2,3));
// undefined
```

---

# 6. return Stops Execution

Once JavaScript reaches `return`, the function ends immediately.

```js
function test() {
    console.log("First");

    return;

    console.log("Second");
}

test();

// First
```

---

# 7. Default Parameters

Provide default values when no argument is supplied.

```js
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
// Hello Guest

greet("John");
// Hello John
```

Multiple defaults

```js
function createUser(name = "Anonymous", age = 18) {
    console.log(name, age);
}

createUser();
// Anonymous 18
```

---

# 8. Function Expressions

Functions can be stored inside variables.

```js
const greet = function () {
    console.log("Hello");
};

greet();
```

With parameters

```js
const square = function(num) {
    return num * num;
};

console.log(square(4));
// 16
```

---

# 9. Arrow Functions

A shorter syntax for writing functions.

```js
const greet = () => {
    console.log("Hello");
};

greet();
```

One parameter

```js
const square = num => {
    return num * num;
};
```

Implicit return

```js
const square = num => num * num;

console.log(square(6));
// 36
```

Multiple parameters

```js
const add = (a, b) => a + b;

console.log(add(4,5));
// 9
```

---

# 10. Anonymous Functions

Functions without names.

Usually passed into another function.

```js
setTimeout(function () {
    console.log("Done");
}, 1000);
```

Arrow version

```js
setTimeout(() => {
    console.log("Done");
}, 1000);
```

---

# 11. Scope

Variables declared inside a function only exist inside that function.

```js
function test() {
    let age = 20;

    console.log(age);
}

test();

console.log(age);
// Error
```

Outside variables can be used inside functions.

```js
let country = "Nigeria";

function showCountry() {
    console.log(country);
}

showCountry();
// Nigeria
```

---

# 12. Local vs Global Variables

Global

```js
let name = "John";

function greet() {
    console.log(name);
}
```

Local

```js
function greet() {
    let name = "John";

    console.log(name);
}
```

---

# 13. Function Hoisting

Function declarations are hoisted.

```js
sayHi();

function sayHi() {
    console.log("Hi");
}
```

Function expressions are **not**.

```js
sayHi();

const sayHi = function () {
    console.log("Hi");
};

// Error
```

---

# 14. Rest Parameters (...)

Collect multiple arguments into an array.

```js
function total(...numbers) {
    console.log(numbers);
}

total(1,2,3,4);
// [1,2,3,4]
```

Finding a sum

```js
function sum(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(5,10,15));
// 30
```

---

# 15. Spread Syntax (...)

Pass array values as individual arguments.

```js
const numbers = [4,7,2];

console.log(Math.max(...numbers));
// 7
```

---

# 16. Callback Functions

A callback is a function passed into another function.

```js
function greet(callback) {

    console.log("Hello");

    callback();
}

function goodbye() {
    console.log("Goodbye");
}

greet(goodbye);
```

Output

```text
Hello
Goodbye
```

---

# 17. Higher-Order Functions

A function that receives another function or returns one.

```js
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a,b){
    return a + b;
}

console.log(calculate(5,2,add));
// 7
```

---

# 18. Recursion

A function calling itself.

```js
function countdown(num){

    if(num === 0){
        return;
    }

    console.log(num);

    countdown(num - 1);
}

countdown(5);
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

# 19. Immediately Invoked Function Expression (IIFE)

Runs immediately after it is created.

```js
(function () {
    console.log("Runs immediately");
})();
```

Arrow version

```js
(() => {
    console.log("Runs immediately");
})();
```

---

# 20. Pure Functions

A pure function always returns the same output for the same input.

```js
function double(num){
    return num * 2;
}

console.log(double(5));
// 10
```

---

# 21. Side Effects

Functions that change something outside themselves.

```js
let score = 0;

function increaseScore(){
    score++;
}

increaseScore();

console.log(score);
// 1
```

---

# 22. Useful Built-in Functions

```js
console.log()

prompt()

alert()

confirm()

setTimeout()

setInterval()

clearTimeout()

clearInterval()
```

---

# 23. Function Naming

Use descriptive verb names.

✅ Good

```js
calculateTotal()

findUser()

createAccount()

isLoggedIn()

getPrice()
```

❌ Bad

```js
doThing()

abc()

x()

func()
```

---

# Quick Reference Summary

| Function Feature      | Purpose                                  |
| --------------------- | ---------------------------------------- |
| Function Declaration  | Create a reusable function               |
| Function Expression   | Store a function in a variable           |
| Arrow Function        | Shorter function syntax                  |
| Parameters            | Variables inside the function definition |
| Arguments             | Values passed into a function            |
| return                | Send a value back                        |
| Default Parameters    | Provide fallback values                  |
| Rest Parameters (...) | Collect arguments into an array          |
| Spread Syntax (...)   | Expand an array into arguments           |
| Callback              | Function passed into another function    |
| Higher-Order Function | Uses or returns another function         |
| Recursion             | Function calls itself                    |
| IIFE                  | Runs immediately after creation          |

---

# Quick Notes

* Functions are **reusable blocks of code**.
* A function must be **called** to run.
* Parameters receive values; arguments provide them.
* `return` ends the function immediately.
* Variables declared inside a function are **local**.
* Function declarations are **hoisted**; function expressions and arrow functions are **not**.
* Arrow functions provide a shorter syntax and can have **implicit returns**.
* `...` can mean **Rest Parameters** (collect values) or **Spread Syntax** (expand values), depending on how it's used.
* Callbacks and higher-order functions are fundamental concepts used throughout modern JavaScript.
