# JavaScript DOM, Events & Web APIs Cheatsheet

## 1. What Is the DOM?

**DOM (Document Object Model)** is how the browser represents an HTML page as a tree of objects that JavaScript can access and change.

JavaScript can use the DOM to:
- Select HTML elements.
- Change text and HTML content.
- Change CSS styles.
- Add or remove elements.
- Respond to user actions.

HTML:
```html
<h1 id="title">Hello</h1>
```

JavaScript:
```js
const title = document.getElementById("title");

title.textContent = "Welcome!";
```

The heading changes from `Hello` to `Welcome!`.

**Remember:** HTML creates the page, CSS styles it, and JavaScript can change it through the DOM.

---

## 2. Selecting HTML Elements

### `document.getElementById()`

Selects an element by its ID.

```html
<p id="message">Hello</p>
```

```js
const message = document.getElementById("message");
```

### `document.querySelector()`

Selects the **first element** that matches a CSS selector.

```js
const title = document.querySelector("h1");
const button = document.querySelector(".btn");
const message = document.querySelector("#message");
```

Remember:
- `"h1"` selects an HTML element.
- `".btn"` selects a class.
- `"#message"` selects an ID.

### `document.querySelectorAll()`

Selects all elements matching a CSS selector and returns a NodeList.

```html
<p class="message">First</p>
<p class="message">Second</p>
```

```js
const messages = document.querySelectorAll(".message");

console.log(messages.length); // 2
```

You can loop through the selected elements:

```js
messages.forEach((message) => {
    console.log(message.textContent);
});
```

### Quick comparison

| Method | What it selects |
|---|---|
| `getElementById()` | An element with a particular ID |
| `querySelector()` | The first matching element |
| `querySelectorAll()` | All matching elements |

---

## 3. Reading and Changing Content

### `textContent`

Gets or changes the text inside an element.

```html
<p id="message">Hello</p>
```

```js
const message = document.querySelector("#message");

console.log(message.textContent); // Hello

message.textContent = "Good morning!";
```

### `innerHTML`

Gets or changes the HTML inside an element.

```html
<div id="container"></div>
```

```js
const container = document.querySelector("#container");

container.innerHTML = "<p>Hello!</p>";
```

This creates a paragraph inside the container.

**Important:** Be careful when inserting user-provided content with `innerHTML`. It can introduce cross-site scripting (XSS) vulnerabilities. Use `textContent` when you only need to display text.

### `innerText`

Gets or changes the rendered text of an element.

```js
const message = document.querySelector("#message");

console.log(message.innerText);
```

Unlike `textContent`, `innerText` considers rendered visibility and styling.

**Remember:**
- `textContent` → text content.
- `innerText` → rendered, visible text.
- `innerHTML` → HTML content.

---

## 4. Changing CSS Styles

JavaScript can change an element's inline styles using `.style`.

```js
const title = document.querySelector("h1");

title.style.color = "blue";
title.style.backgroundColor = "yellow";
title.style.fontSize = "30px";
```

Notice that CSS property names written with hyphens become camelCase in JavaScript.

| CSS | JavaScript |
|---|---|
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `margin-top` | `marginTop` |
| `border-radius` | `borderRadius` |

### `classList`

Usually, adding or removing CSS classes is cleaner than changing many inline styles.

#### `classList.add()`

```js
title.classList.add("active");
```

Adds a class.

#### `classList.remove()`

```js
title.classList.remove("active");
```

Removes a class.

#### `classList.toggle()`

```js
title.classList.toggle("active");
```

Adds the class if it is absent or removes it if it is present.

#### `classList.contains()`

```js
console.log(title.classList.contains("active"));
```

Returns `true` if the element has the class and `false` otherwise.

Example CSS:

```css
.active {
    color: blue;
    font-weight: bold;
}
```

---

## 5. Creating and Removing Elements

### `document.createElement()`

Creates a new HTML element.

```js
const paragraph = document.createElement("p");
```

The element exists in JavaScript but is not yet attached to the page.

### `append()`

Adds content or elements to the end of a parent.

```js
const container = document.querySelector("#container");
const paragraph = document.createElement("p");

paragraph.textContent = "New paragraph";

container.append(paragraph);
```

### `prepend()`

Adds content or elements to the beginning of a parent.

```js
container.prepend(paragraph);
```

### `remove()`

Removes an element from the page.

```js
paragraph.remove();
```

### `appendChild()`

Adds a node to the end of a parent.

```js
container.appendChild(paragraph);
```

`append()` can accept multiple nodes and strings, while `appendChild()` accepts a single node.

### `removeChild()`

Removes a child from its parent.

```js
container.removeChild(paragraph);
```

### Quick example

```js
const list = document.querySelector("#list");

const item = document.createElement("li");

item.textContent = "Learn JavaScript";

list.append(item);
```

**Remember the process:**
1. Select the parent.
2. Create the element.
3. Add its content.
4. Attach it to the parent.

---

## 6. What Are Events?

An **event** is something that happens in the browser that JavaScript can respond to.

Examples:
- Clicking a button.
- Typing into an input.
- Submitting a form.
- Moving the mouse.
- Pressing a keyboard key.
- A page finishing loading.

JavaScript uses event listeners to respond to these actions.

### Common events

| Event | When it happens |
|---|---|
| `click` | An element is clicked |
| `dblclick` | An element is double-clicked |
| `input` | An input's value changes through user input |
| `change` | A value is committed or changed, depending on the element |
| `submit` | A form is submitted |
| `keydown` | A keyboard key is pressed down |
| `keyup` | A keyboard key is released |
| `mouseover` | The pointer moves onto an element or its descendant |
| `mouseout` | The pointer moves away from an element or its descendant |
| `focus` | An element receives focus |
| `blur` | An element loses focus |
| `DOMContentLoaded` | The HTML has been parsed |

---

## 7. `addEventListener()`

Registers a function to run when a particular event happens.

Basic syntax:

```js
element.addEventListener("event", callback);
```

Example:

```html
<button id="myButton">Click Me</button>
```

```js
const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
    console.log("Button clicked!");
});
```

When the button is clicked, the callback function runs.

### Using an arrow function

```js
button.addEventListener("click", () => {
    console.log("Button clicked!");
});
```

### Using a named function

```js
function showMessage() {
    console.log("Hello!");
}

button.addEventListener("click", showMessage);
```

**Important:** Pass the function's name without parentheses when you want the browser to call it later.

```js
button.addEventListener("click", showMessage);
```

Do not write this when you intend to register the function itself:

```js
button.addEventListener("click", showMessage());
```

The parentheses call the function immediately. If that function returns another function, the returned function may become the callback instead.

### Multiple event listeners

You can register different listeners for the same element.

```js
button.addEventListener("click", showMessage);

button.addEventListener("click", () => {
    console.log("Another action!");
});
```

Both callbacks can run when the button is clicked.

---

## 8. The Event Object

When an event occurs, the browser can pass an **event object** to the callback. It contains information about the event.

```js
button.addEventListener("click", (event) => {
    console.log(event);
});
```

### `event.target`

The element where the event originated.

```js
button.addEventListener("click", (event) => {
    console.log(event.target);
});
```

For a click directly on the button, `event.target` will usually be the button. If the button contains a nested element and that nested element is clicked, the target may be the nested element.

### `event.currentTarget`

The element whose listener is currently running.

```js
button.addEventListener("click", (event) => {
    console.log(event.currentTarget);
});
```

**Difference:**
- `target` → where the event originated.
- `currentTarget` → the element whose callback is running.

### `event.preventDefault()`

Prevents the browser's default action when that action is cancelable.

Example: stopping a form from immediately submitting and reloading the page.

```js
const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submission handled by JavaScript");
});
```

You can now validate the form or process its data with JavaScript.

### `event.stopPropagation()`

Stops an event from propagating further through the DOM.

```js
button.addEventListener("click", (event) => {
    event.stopPropagation();
});
```

Use it only when you need to prevent propagation. It is not the same as `preventDefault()`.

---

## 9. Event Bubbling and Capturing

Events can propagate through the DOM.

Suppose you have:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

### Event bubbling

By default, most event listeners run during the bubbling phase.

When the button is clicked, the event can travel from the button up to its parent.

```js
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", () => {
    console.log("Button clicked");
});
```

Clicking the button normally prints:

```text
Button clicked
Parent clicked
```

The parent listener runs because the click event bubbles up from the button.

### Event capturing

Capturing happens earlier, as the event travels from the outer ancestors toward the target.

```js
parent.addEventListener("click", () => {
    console.log("Parent capturing");
}, true);
```

The third argument, `true`, requests the capturing phase.

**Remember:**
- Capturing → travels toward the target.
- Bubbling → travels from the target toward ancestors.
- `stopPropagation()` → stops further propagation.

---

## 10. Event Delegation

**Event delegation** means putting a listener on a parent and using it to handle events from its children.

It works because events such as clicks bubble up through the DOM.

HTML:

```html
<ul id="list">
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
</ul>
```

JavaScript:

```js
const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }
});
```

Clicking a list item prints its text.

### Why use event delegation?

- One listener can handle many children.
- It can handle matching children added later.
- It reduces the need to attach separate listeners to every item.

**Important:** The `matches("li")` check ensures the code responds only when the event target is an `li`. If an item contains nested elements, you may need `closest("li")` and a check that the item belongs to the intended list.

---

## 11. Working with Forms and Inputs

### Reading an input's value

```html
<input id="username" type="text">
<button id="submitBtn">Submit</button>
```

```js
const username = document.querySelector("#username");
const button = document.querySelector("#submitBtn");

button.addEventListener("click", () => {
    console.log(username.value);
});
```

`.value` gets the current value of an input or other form control.

### Responding to typing with `input`

```js
username.addEventListener("input", () => {
    console.log(username.value);
});
```

The callback runs as the user changes the input's value.

### Handling form submission

```html
<form id="myForm">
    <input id="username" type="text">
    <button type="submit">Submit</button>
</form>
```

```js
const form = document.querySelector("#myForm");
const usernameInput = document.querySelector("#username");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username === "") {
        console.log("Please enter a username");
        return;
    }

    console.log(`Welcome, ${username}!`);
});
```

### Useful form properties and methods

| Property or method | Purpose |
|---|---|
| `input.value` | Gets or sets the input's value |
| `input.checked` | Checks whether a checkbox or radio button is selected |
| `input.disabled` | Gets or sets the disabled state |
| `input.focus()` | Moves focus to an element |
| `input.blur()` | Removes focus from an element |
| `input.trim()` | Not an input method; use `input.value.trim()` to remove surrounding whitespace from a string |
| `form.reset()` | Resets form controls to their initial values |
| `form.checkValidity()` | Checks whether the form controls satisfy their built-in validation rules |

---

## 12. The `DOMContentLoaded` Event

JavaScript sometimes needs to wait until the browser has parsed the HTML before selecting elements.

```js
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#myButton");

    button.addEventListener("click", () => {
        console.log("Button clicked");
    });
});
```

The callback runs once the HTML document has been parsed. Images and other external resources do not necessarily need to have finished loading.

You often do not need this wrapper if your script uses `defer` or is placed near the end of the HTML body.

Example:

```html
<script src="script.js" defer></script>
```

`defer` allows the browser to parse the HTML while downloading the script, then executes the script after HTML parsing.

---

## 13. What Are Web APIs?

A **Web API** is a set of browser-provided tools that JavaScript can use to interact with the browser or its environment.

JavaScript is the programming language. Web APIs provide additional browser capabilities.

Examples include:

| Web API | What it helps you do |
|---|---|
| DOM API | Access and modify HTML elements |
| Events API | Respond to user and browser events |
| Console API | Display debugging information |
| Fetch API | Make network requests |
| Web Storage API | Store data in the browser |
| Timers | Run code after a delay or repeatedly |
| Geolocation API | Request the user's location with permission |
| Clipboard API | Read or write clipboard data with appropriate permission and security requirements |

The DOM and event system are themselves commonly discussed as browser Web APIs.

---

## 14. The Console API

Useful for testing and debugging JavaScript.

### `console.log()`

Displays information in the console.

```js
console.log("Hello");
console.log(10 + 5);
```

### `console.error()`

Displays an error message.

```js
console.error("Something went wrong");
```

### `console.warn()`

Displays a warning.

```js
console.warn("Check this value");
```

### `console.table()`

Displays suitable arrays or objects in a table.

```js
const student = {
    name: "John",
    age: 20
};

console.table(student);
```

### `console.clear()`

Clears the console display.

```js
console.clear();
```

---

## 15. The `setTimeout()` and `setInterval()` Timers

### `setTimeout()`

Runs a callback after a specified delay, in milliseconds.

```js
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);
```

`2000` milliseconds equals 2 seconds.

### `setInterval()`

Repeatedly runs a callback at a specified interval.

```js
setInterval(() => {
    console.log("Repeating...");
}, 1000);
```

This attempts to run the callback every 1000 milliseconds. Actual timing may vary.

### `clearTimeout()`

Cancels a pending timeout.

```js
const timerId = setTimeout(() => {
    console.log("This may not run");
}, 3000);

clearTimeout(timerId);
```

### `clearInterval()`

Stops a repeating interval.

```js
const intervalId = setInterval(() => {
    console.log("Repeating...");
}, 1000);

clearInterval(intervalId);
```

**Remember:**
- `setTimeout()` → run later once.
- `setInterval()` → repeat.
- `clearTimeout()` → cancel a pending timeout.
- `clearInterval()` → stop a repeating interval.

---

## 16. The Web Storage API

Web Storage allows websites to store small amounts of string data in the browser.

It provides:
- `localStorage`
- `sessionStorage`

### `localStorage`

Stores data across browser sessions, usually until the data is cleared by the user or website.

```js
localStorage.setItem("username", "John");

const username = localStorage.getItem("username");

console.log(username); // John
```

### `sessionStorage`

Stores data for the current page session. Its lifetime is tied to that session, though browser behavior can vary in some situations.

```js
sessionStorage.setItem("theme", "dark");

console.log(sessionStorage.getItem("theme")); // dark
```

### Removing stored data

```js
localStorage.removeItem("username");
```

Removes one item.

```js
localStorage.clear();
```

Removes all items from that storage area for the current origin.

### Storing objects

Web Storage stores strings, so convert objects to JSON first.

```js
const user = {
    name: "John",
    age: 20
};

localStorage.setItem("user", JSON.stringify(user));
```

Retrieve and convert it back:

```js
const savedUser = localStorage.getItem("user");

const userObject = JSON.parse(savedUser);

console.log(userObject.name); // John
```

**Remember:**
- `JSON.stringify()` → JavaScript value to JSON string.
- `JSON.parse()` → JSON string to JavaScript value.

Do not store passwords, secret tokens, or other sensitive information in Web Storage.

---

## 17. The Fetch API

The Fetch API allows JavaScript to make network requests, such as requesting data from a server.

```js
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Request failed:", error);
    });
```

### What happens here?

1. `fetch()` sends a request to the URL.
2. The first `.then()` receives the response and parses its body as JSON.
3. The next `.then()` receives the parsed data.
4. `.catch()` handles errors such as network failures.

**Important:** `fetch()` does not automatically reject its promise for HTTP error statuses such as `404` or `500`. Check `response.ok` when you need to handle unsuccessful HTTP responses.

Example with `async` and `await`:

```js
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Request failed:", error);
    }
}

getUsers();
```

You will explore this more when learning APIs and asynchronous JavaScript.

---

## 18. The Geolocation API

The Geolocation API can request a user's location through the browser.

```js
navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    },
    (error) => {
        console.error(error.message);
    }
);
```

The browser generally requires permission, and geolocation is normally available only in secure contexts, such as HTTPS or localhost.

**Remember:** Never assume permission will be granted or that location data will always be available.

---

## 19. The Clipboard API

The Clipboard API can copy text to the clipboard in supported, secure contexts, subject to browser permissions and restrictions.

```js
async function copyText() {
    try {
        await navigator.clipboard.writeText("Hello, world!");

        console.log("Text copied");
    } catch (error) {
        console.error("Could not copy text:", error);
    }
}
```

Call `copyText()` in response to a suitable user action, such as clicking a Copy button.

---

## 20. Common DOM and Event Mistakes

### Mistake 1: Calling the callback immediately

Incorrect when you intend to register the function itself:

```js
button.addEventListener("click", showMessage());
```

Correct:

```js
button.addEventListener("click", showMessage);
```

### Mistake 2: Using the wrong property to read input

Incorrect:

```js
console.log(input.textContent);
```

Correct:

```js
console.log(input.value);
```

For form controls, `.value` is generally the property you need.

### Mistake 3: Forgetting to attach a created element

```js
const paragraph = document.createElement("p");

paragraph.textContent = "Hello";
```

The paragraph has been created but is not yet displayed on the page.

Attach it:

```js
document.body.append(paragraph);
```

### Mistake 4: Selecting an element that does not exist

```js
const button = document.querySelector("#missingButton");

button.addEventListener("click", () => {
    console.log("Clicked");
});
```

If no element matches, `button` is `null`, so calling `addEventListener()` on it causes an error.

Make sure the selector is correct and the script runs after the element exists.

### Mistake 5: Confusing `target` and `currentTarget`

- `event.target` is where the event originated.
- `event.currentTarget` is the element whose listener is running.

### Mistake 6: Confusing `preventDefault()` and `stopPropagation()`

- `preventDefault()` stops a cancelable default browser action.
- `stopPropagation()` stops further event propagation.

They do different jobs.

### Mistake 7: Forgetting that Web Storage stores strings

```js
localStorage.setItem("score", 100);

console.log(localStorage.getItem("score")); // "100"
```

The retrieved value is a string, not a number.

Convert it when needed:

```js
const score = Number(localStorage.getItem("score"));
```

---

# Quick Reference Table

| Method / Property | Purpose |
|---|---|
| `getElementById()` | Select by ID |
| `querySelector()` | Select the first matching element |
| `querySelectorAll()` | Select all matching elements |
| `textContent` | Read or set text content |
| `innerText` | Read or set rendered text |
| `innerHTML` | Read or set HTML content |
| `style` | Change inline CSS styles |
| `classList.add()` | Add a class |
| `classList.remove()` | Remove a class |
| `classList.toggle()` | Add or remove a class |
| `classList.contains()` | Check whether a class exists |
| `createElement()` | Create an element |
| `append()` | Add content or nodes at the end |
| `prepend()` | Add content or nodes at the beginning |
| `remove()` | Remove an element |
| `addEventListener()` | Register an event callback |
| `event.target` | Element where the event originated |
| `event.currentTarget` | Element whose listener is running |
| `preventDefault()` | Prevent a cancelable default action |
| `stopPropagation()` | Stop further event propagation |
| `input.value` | Read or set an input's value |
| `input.checked` | Read checkbox or radio selection state |
| `setTimeout()` | Schedule a callback once |
| `setInterval()` | Schedule repeated callbacks |
| `clearTimeout()` | Cancel a pending timeout |
| `clearInterval()` | Cancel a repeating interval |
| `localStorage.setItem()` | Save a string in local storage |
| `localStorage.getItem()` | Retrieve a stored string |
| `localStorage.removeItem()` | Remove one stored item |
| `JSON.stringify()` | Convert a value to a JSON string |
| `JSON.parse()` | Parse a JSON string into a value |
| `fetch()` | Make a network request |
| `console.log()` | Display debugging information |

---

# Final Mental Model

**DOM:** How JavaScript accesses and changes the page.

**Events:** How JavaScript responds to things happening on the page.

**Event listeners:** The instructions that tell JavaScript what to do when an event occurs.

**Event object:** Information about the event, including where it originated.

**Event delegation:** A parent listener handles events from its children.

**Web APIs:** Browser-provided capabilities, such as storage, networking, timers, and geolocation.

**A simple example combining the DOM and events:**

```html
<p id="message">Hello</p>
<button id="changeButton">Change Text</button>
```

```js
const message = document.querySelector("#message");
const button = document.querySelector("#changeButton");

button.addEventListener("click", () => {
    message.textContent = "You clicked the button!";
});
```

The DOM lets JavaScript select and change the paragraph. The event listener makes that change happen when the user clicks the button.