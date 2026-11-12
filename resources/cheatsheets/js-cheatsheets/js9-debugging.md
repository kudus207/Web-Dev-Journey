# JavaScript Error Handling & Debugging Cheatsheet

## 1. What Is Debugging?

**Debugging** is the process of finding, understanding, and fixing errors in your code.

When JavaScript does not behave as expected, debugging helps you discover:
- Where the problem is.
- Why the problem happens.
- Which value or condition is causing it.
- How to fix the problem.

Example:

```js
const number = 10;

console.log(number + "5"); // 105
```

You expected `15`, but got `"105"` because JavaScript joined a number and a string.

Debugging helps you identify this kind of mistake.

---

## 2. Three Common Types of Errors

### Syntax Errors

These happen when JavaScript code breaks the language's syntax rules.

Example:

```js
const username = "John"

if (username === "John" {
    console.log("Welcome");
}
```

The closing parenthesis is missing.

Correct:

```js
const username = "John";

if (username === "John") {
    console.log("Welcome");
}
```

### Runtime Errors

These happen while JavaScript is executing your program.

Example:

```js
const user = null;

console.log(user.name);
```

JavaScript cannot read `name` from `null`.

This causes a `TypeError`.

### Logical Errors

These happen when your code runs without an error but produces the wrong result.

Example:

```js
const price = 100;
const quantity = 3;

const total = price + quantity;

console.log(total); // 103
```

You intended to multiply the price by the quantity.

Correct:

```js
const total = price * quantity;

console.log(total); // 300
```

**Remember:**

| Error type | Meaning |
|---|---|
| Syntax error | Code breaks JavaScript syntax rules |
| Runtime error | Something goes wrong while code runs |
| Logical error | Code runs but produces the wrong result |

---

## 3. `console.log()`

`console.log()` displays information in the browser console.

It is one of the simplest debugging tools.

```js
const firstNumber = 10;
const secondNumber = 5;

console.log(firstNumber);
console.log(secondNumber);

const result = firstNumber + secondNumber;

console.log(result);
```

You can use it to check:
- Variable values.
- Function results.
- Array contents.
- Object properties.
- Whether a particular section of code runs.

### Debugging inside a function

```js
function calculateTotal(price, quantity) {
    console.log("Price:", price);
    console.log("Quantity:", quantity);

    const total = price * quantity;

    console.log("Total:", total);

    return total;
}

calculateTotal(100, 3);
```

Expected console output:

```text
Price: 100
Quantity: 3
Total: 300
```

This helps you follow what happens inside the function.

---

## 4. Other Useful Console Methods

### `console.error()`

Displays an error message.

```js
console.error("Something went wrong!");
```

### `console.warn()`

Displays a warning.

```js
console.warn("Check this value!");
```

### `console.table()`

Displays arrays or objects in a table.

```js
const students = [
    { name: "John", age: 20 },
    { name: "Mary", age: 22 }
];

console.table(students);
```

### `console.clear()`

Clears the console display.

```js
console.clear();
```

### `console.count()`

Counts how many times a particular label is called.

```js
console.count("Button clicked");
console.count("Button clicked");
console.count("Button clicked");
```

Expected output:

```text
Button clicked: 1
Button clicked: 2
Button clicked: 3
```

### `console.time()` and `console.timeEnd()`

Measure approximately how long a section of code takes.

```js
console.time("Loop");

for (let i = 0; i < 100000; i++) {
    // Repeated work
}

console.timeEnd("Loop");
```

### `console.trace()`

Displays the function call path that led to the current point.

```js
function firstFunction() {
    secondFunction();
}

function secondFunction() {
    console.trace("How did we get here?");
}

firstFunction();
```

Useful when trying to discover which functions called another function.

---

## 5. `try...catch`

`try...catch` allows you to handle certain errors without immediately stopping the rest of your program.

### Basic syntax

```js
try {
    // Code that might cause an error
} catch (error) {
    // Code that handles the error
}
```

### Example

```js
try {
    const result = 10 / 0;

    console.log(result);
} catch (error) {
    console.log("Something went wrong:", error.message);
}
```

JavaScript does not throw an error for division by zero, so this example does not enter the `catch` block. It produces `Infinity`.

A better example:

```js
try {
    const user = null;

    console.log(user.name);
} catch (error) {
    console.log("An error occurred:", error.message);
}
```

Expected output:

```text
An error occurred: Cannot read properties of null
```

The exact wording of the error message can vary by JavaScript engine.

### How it works

1. JavaScript executes the code inside `try`.
2. If an error occurs, execution of the remaining statements in that `try` block stops.
3. JavaScript moves to the `catch` block.
4. The `catch` block receives information about the error.
5. The program can continue after the `try...catch` statement.

**Remember:** `try` contains code that might fail. `catch` handles an error if one is thrown.

---

## 6. The `catch` Error Object

The `catch` block receives an error object.

```js
try {
    const user = null;

    console.log(user.name);
} catch (error) {
    console.log(error);
}
```

You can inspect useful properties.

### `error.name`

Returns the type or name of the error.

```js
try {
    null.name;
} catch (error) {
    console.log(error.name); // TypeError
}
```

### `error.message`

Returns the error description.

```js
try {
    null.name;
} catch (error) {
    console.log(error.message);
}
```

### `error.stack`

Provides a stack trace showing where the error occurred and the path of function calls.

```js
try {
    null.name;
} catch (error) {
    console.log(error.stack);
}
```

The exact stack trace depends on the browser or JavaScript environment.

### Quick comparison

| Property | What it provides |
|---|---|
| `error.name` | Error type |
| `error.message` | Error description |
| `error.stack` | Error location and call information |

---

## 7. `finally`

The `finally` block runs after the `try` and `catch` sections, whether an error occurred or not.

### Basic syntax

```js
try {
    // Code that might cause an error
} catch (error) {
    // Handle the error
} finally {
    // Code that should run afterward
}
```

### Example without an error

```js
try {
    console.log("Code is running");
} catch (error) {
    console.log("An error occurred");
} finally {
    console.log("Finished");
}
```

Output:

```text
Code is running
Finished
```

### Example with an error

```js
try {
    const user = null;

    console.log(user.name);
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Finished");
}
```

Output:

```text
Error: Cannot read properties of null
Finished
```

### When is `finally` useful?

It is useful when you need to perform cleanup regardless of whether an operation succeeds or fails.

Examples:
- Hiding a loading indicator.
- Releasing a resource.
- Resetting a temporary state.
- Closing something that was opened for an operation.

**Remember:**
- `try` → attempt the operation.
- `catch` → handle an error.
- `finally` → run cleanup afterward.

---

## 8. `throw`

The `throw` statement allows you to create and throw your own errors.

You use it when a condition makes an operation invalid.

Example:

```js
const age = 15;

if (age < 18) {
    throw new Error("You must be at least 18.");
}
```

JavaScript throws an error and stops normal execution at that point unless the error is caught.

### Using `throw` with `try...catch`

```js
try {
    const age = 15;

    if (age < 18) {
        throw new Error("You must be at least 18.");
    }

    console.log("Access granted");
} catch (error) {
    console.log(error.message);
}
```

Output:

```text
You must be at least 18.
```

### Another example: validating a number

```js
function calculateSquareRoot(number) {
    if (number < 0) {
        throw new Error("Number cannot be negative.");
    }

    return Math.sqrt(number);
}

try {
    const result = calculateSquareRoot(-9);

    console.log(result);
} catch (error) {
    console.log(error.message);
}
```

Output:

```text
Number cannot be negative.
```

**Remember:** `throw` creates or raises an error. `catch` can handle it.

---

## 9. The `Error` Constructor

The `Error` constructor creates an error object.

```js
const error = new Error("Something went wrong");

console.log(error.name);    // Error
console.log(error.message); // Something went wrong
```

You will commonly use it with `throw`.

```js
throw new Error("Invalid username");
```

### Custom error messages

You should provide messages that explain what went wrong.

Less helpful:

```js
throw new Error("Error");
```

More helpful:

```js
throw new Error("Username cannot be empty.");
```

Good error messages make debugging easier.

---

## 10. Common JavaScript Error Types

### `SyntaxError`

Happens when JavaScript code has invalid syntax or invalid syntax is encountered during parsing.

```js
const data = JSON.parse("{name: John}");
```

The JSON string is invalid because property names and string values must use double quotes.

Correct:

```js
const data = JSON.parse('{"name": "John"}');
```

### `ReferenceError`

Happens when JavaScript tries to access a variable or identifier that cannot be found.

```js
console.log(username);
```

If `username` has not been declared, this causes a `ReferenceError`.

### `TypeError`

Happens when an operation is performed on a value that does not support that operation.

```js
const user = null;

console.log(user.name);
```

Another example:

```js
const number = 10;

number();
```

A number is not a function, so calling it produces a `TypeError`.

### `RangeError`

Happens when a value is outside an allowed range.

```js
const numbers = new Array(-5);
```

A negative array length is invalid and causes a `RangeError`.

### Quick comparison

| Error | Common cause |
|---|---|
| `SyntaxError` | Invalid syntax |
| `ReferenceError` | Accessing an undeclared identifier |
| `TypeError` | Performing an invalid operation on a value |
| `RangeError` | A value is outside an allowed range |

---

## 11. Throwing Different Error Types

You can create specific built-in error types.

```js
throw new TypeError("Expected a number");
```

```js
throw new RangeError("Number is outside the allowed range");
```

```js
throw new ReferenceError("Variable could not be found");
```

You can also check the type of an error:

```js
try {
    throw new TypeError("Invalid value");
} catch (error) {
    if (error instanceof TypeError) {
        console.log("A type error occurred");
    }
}
```

### `instanceof`

Checks whether an object is an instance of a particular constructor or class.

```js
const error = new TypeError("Invalid value");

console.log(error instanceof TypeError); // true
console.log(error instanceof Error);     // true
```

This is useful when handling different error types differently.

---

## 12. Custom Error Classes

You can create your own error types using classes.

```js
class ValidationError extends Error {
    constructor(message) {
        super(message);

        this.name = "ValidationError";
    }
}
```

Using the custom error:

```js
function validateUsername(username) {
    if (username.trim() === "") {
        throw new ValidationError("Username is required.");
    }

    return true;
}

try {
    validateUsername("");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
```

Output:

```text
ValidationError
Username is required.
```

Custom error classes are useful in larger applications where you want to distinguish different kinds of errors.

---

## 13. Debugging with Breakpoints

A **breakpoint** is a point where you tell the browser to pause JavaScript execution so you can inspect what is happening.

Instead of guessing what your code is doing, you can pause it and examine values.

### How to use breakpoints

1. Open your browser.
2. Open Developer Tools using `F12` or `Ctrl + Shift + I`.
3. Go to the Sources tab in Chrome DevTools.
4. Find your JavaScript file.
5. Click the line number where you want execution to pause.
6. Run your program and trigger that section of code.

When JavaScript reaches the breakpoint, execution pauses.

You can inspect:
- Variable values.
- Function parameters.
- Current execution line.
- Call stack.
- Scope.

### Example

```js
function calculateTotal(price, quantity) {
    const subtotal = price * quantity;

    const tax = subtotal * 0.1;

    const total = subtotal + tax;

    return total;
}

calculateTotal(100, 3);
```

Place a breakpoint on:

```js
const tax = subtotal * 0.1;
```

When execution pauses, inspect `price`, `quantity`, and `subtotal`.

---

## 14. The `debugger` Statement

The `debugger` statement tells the browser's developer tools to pause execution at that point when debugging is available.

```js
function calculateTotal(price, quantity) {
    const subtotal = price * quantity;

    debugger;

    const total = subtotal + 10;

    return total;
}

calculateTotal(100, 3);
```

When developer tools are open, JavaScript pauses at `debugger`.

You can inspect the values before continuing.

**Remember:** Remove unnecessary `debugger` statements before finishing your project.

---

## 15. Debugging Controls in Developer Tools

When JavaScript pauses at a breakpoint, you can control how execution continues.

| Control | What it does |
|---|---|
| Resume | Continues execution until the next breakpoint |
| Step over | Executes the current line without entering a called function |
| Step into | Enters a function call to inspect its code |
| Step out | Finishes the current function and returns to its caller |
| Restart | Restarts the current function's execution in supported debugging contexts |

### Understanding the difference

Suppose you have:

```js
function greet() {
    console.log("Hello");
}

function start() {
    greet();

    console.log("Finished");
}

start();
```

- **Step over:** Runs `greet()` without entering its body.
- **Step into:** Enters `greet()` so you can inspect its execution.
- **Step out:** Leaves the current function and returns to its caller.

These controls are especially useful when debugging nested functions and larger programs.

---

## 16. The Call Stack

The **call stack** shows the sequence of function calls that led to the current execution point or error.

Example:

```js
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello");
}

first();
```

The functions are called in this order:

```text
first()
  → second()
      → third()
```

The call stack helps you understand how JavaScript reached a particular line.

If an error occurs inside `third()`, the stack trace can show that `first()` and `second()` were involved in reaching it.

---

## 17. Scope and Watch Expressions

### Scope

The Scope panel in browser developer tools lets you inspect variables available at the current execution point.

You may see:
- Local variables.
- Function parameters.
- Block-scoped variables.
- Global variables.

Example:

```js
function calculateTotal(price, quantity) {
    const total = price * quantity;

    debugger;

    return total;
}

calculateTotal(50, 4);
```

At the breakpoint, inspect:
- `price` → 50
- `quantity` → 4
- `total` → 200

### Watch expressions

Watch expressions allow you to monitor specific values while execution is paused.

For example, you can watch:

```js
price
```

```js
quantity
```

```js
price * quantity
```

The browser evaluates these expressions so you can monitor their values while debugging.

---

## 18. Handling Errors in JSON Parsing

`JSON.parse()` can throw a `SyntaxError` if the supplied JSON string is invalid.

Example:

```js
const jsonData = '{"name": "John", "age": 20}';

try {
    const user = JSON.parse(jsonData);

    console.log(user.name);
} catch (error) {
    console.error("Invalid JSON:", error.message);
}
```

If the JSON is invalid, the `catch` block handles the error.

This is useful when receiving JSON from storage, user input, or external sources.

---

## 19. Handling Errors with Fetch

When working with APIs, errors can happen because of:
- Network problems.
- Invalid URLs.
- Server errors.
- Unsuccessful HTTP responses.
- Problems parsing the response.

Example:

```js
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();

        console.log(users);
    } catch (error) {
        console.error("Could not get users:", error.message);
    } finally {
        console.log("Request finished.");
    }
}

getUsers();
```

### Understand the flow

1. `try` attempts the request.
2. `fetch()` sends the request.
3. `response.ok` checks whether the HTTP status indicates success.
4. `throw` creates an error for an unsuccessful HTTP response.
5. `response.json()` parses the response body.
6. `catch` handles errors that occur in the `try` block.
7. `finally` runs afterward whether the request succeeds or fails.

**Important:** `fetch()` does not automatically throw an error for HTTP statuses such as 404 or 500. That is why checking `response.ok` matters.

---

## 20. Common Debugging Mistakes

### Mistake 1: Assuming every unexpected result is a runtime error

Your code may run perfectly but still produce the wrong result.

Always check your expected output against the actual output.

### Mistake 2: Using `console.log()` without knowing what to inspect

Instead of logging everything, inspect the values involved in the problem.

```js
console.log("Current index:", i);
console.log("Current value:", numbers[i]);
```

### Mistake 3: Ignoring error messages

An error message often tells you:
- The type of error.
- The file where it happened.
- The line where it happened.
- The function call path.

Read it carefully before changing your code.

### Mistake 4: Catching errors without doing anything useful

Not helpful:

```js
try {
    // Some operation
} catch (error) {
    // Nothing happens
}
```

Better:

```js
try {
    // Some operation
} catch (error) {
    console.error("Operation failed:", error.message);
}
```

Do not silently swallow errors unless there is a deliberate reason.

### Mistake 5: Thinking `finally` only runs when an error occurs

`finally` runs whether the `try` block succeeds or fails, as long as normal control flow reaches the `try...finally` construct.

### Mistake 6: Thinking `throw` and `return` are the same

- `return` sends a result back from a function.
- `throw` raises an error and transfers control to an appropriate error handler.

### Mistake 7: Forgetting that `catch` only handles errors thrown within its associated `try`

An error occurring later, outside the `try` block, will not be handled by that `catch`.

---

# Quick Reference Table

| Method / Keyword | Purpose |
|---|---|
| `console.log()` | Display information |
| `console.error()` | Display an error |
| `console.warn()` | Display a warning |
| `console.table()` | Display data in a table |
| `console.count()` | Count how many times a label is called |
| `console.time()` | Start measuring execution time |
| `console.timeEnd()` | End measuring execution time |
| `console.trace()` | Display the function call path |
| `try` | Run code that might fail |
| `catch` | Handle a thrown error |
| `finally` | Run cleanup code afterward |
| `throw` | Raise an error |
| `new Error()` | Create an error object |
| `error.name` | Get the error type |
| `error.message` | Get the error description |
| `error.stack` | Get the stack trace |
| `instanceof` | Check an object's constructor relationship |
| `debugger` | Pause execution when debugging is available |
| Breakpoint | Pause execution at a chosen line |
| Step over | Run the current line without entering a function |
| Step into | Enter a function |
| Step out | Leave the current function |
| Call stack | Show the sequence of function calls |

---

# Final Mental Model

**Debugging:** Finding and fixing problems in your code.

**Syntax error:** Your code breaks JavaScript's syntax rules.

**Runtime error:** Something goes wrong while the code executes.

**Logical error:** Your code runs but gives the wrong result.

**`try`:** Attempt something that might fail.

**`catch`:** Handle the error if one is thrown.

**`finally`:** Run cleanup code afterward.

**`throw`:** Create and raise an error.

**`Error`:** The built-in constructor for creating error objects.

**Breakpoint:** Pause execution to inspect what is happening.

**`debugger`:** Pause execution from inside your code.

**Call stack:** Shows how JavaScript arrived at the current function or error.

**Most important debugging habit:** Don't just change code because something is wrong. First understand what the code is doing, inspect the values, locate the problem, and then make a correction.