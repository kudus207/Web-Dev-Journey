# JavaScript, HTML Accessibility & ARIA Cheatsheet

## 1. What Is Web Accessibility?

**Web accessibility (a11y)** means designing websites and applications so that as many people as possible can use them, including people with disabilities.

Accessibility helps people who:
- Use screen readers.
- Navigate websites using a keyboard.
- Have visual impairments.
- Have hearing impairments.
- Have difficulty using a mouse.
- Have cognitive or motor disabilities.

### Why is accessibility important?

A website should not depend only on how it looks. Users should also be able to understand and operate it using different devices and assistive technologies.

**Remember:** Accessibility is not just about adding ARIA attributes. Good HTML structure, keyboard support, labels, and meaningful content are equally important.

---

## 2. Semantic HTML

**Semantic HTML** means using HTML elements according to their meaning and purpose.

Instead of using `<div>` for everything, use elements that describe what the content does.

### Common semantic HTML elements

| Element | Purpose |
|---|---|
| `<header>` | Introductory content or page header |
| `<nav>` | Navigation links |
| `<main>` | Main content of the page |
| `<section>` | A thematic section of content |
| `<article>` | Independent, self-contained content |
| `<aside>` | Related or supplementary content |
| `<footer>` | Footer information |
| `<button>` | An interactive button |
| `<form>` | A form for user input |
| `<label>` | A label for a form control |
| `<fieldset>` | Groups related form controls |
| `<legend>` | Describes a fieldset |
| `<table>` | Tabular data |

Example:

```html
<header>
    <h1>My Website</h1>
</header>

<nav aria-label="Main navigation">
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<main>
    <section>
        <h2>About Me</h2>
        <p>Welcome to my website.</p>
    </section>
</main>

<footer>
    <p>Copyright 2026</p>
</footer>
```

Using semantic HTML helps browsers and assistive technologies understand the structure of your page.

---

## 3. Use the Correct HTML Element

Choose elements based on what they are supposed to do.

### Buttons vs links

Use a `<button>` when performing an action.

```html
<button type="button">Open Menu</button>
```

Examples:
- Open a menu.
- Delete an item.
- Toggle dark mode.
- Submit an action.

Use an `<a>` element when navigating to another location.

```html
<a href="/about">About Us</a>
```

Examples:
- Open another page.
- Navigate to a section.
- Visit an external website.

**Remember:**
- Button = action.
- Link = navigation.

Do not use a clickable `<div>` when a button or link can do the job.

---

## 4. What Is ARIA?

**ARIA** stands for Accessible Rich Internet Applications.

ARIA provides additional information about HTML elements so assistive technologies, such as screen readers, can better understand their purpose, state, and relationships.

ARIA attributes are especially useful when building interactive interfaces with JavaScript.

Examples:

```html
<button aria-expanded="false">
    Open Menu
</button>
```

```html
<div role="alert">
    Your form has an error.
</div>
```

### Important ARIA principles

1. Prefer native HTML elements whenever possible.
2. Use ARIA when native HTML does not provide the necessary accessibility information.
3. Keep ARIA states synchronized with what users actually see.
4. Do not use ARIA to replace proper keyboard interaction.
5. Do not add ARIA attributes unnecessarily.

**Important:** ARIA changes accessibility information. It does not automatically add functionality, keyboard support, or visual behavior.

---

## 5. ARIA Roles

The `role` attribute describes what an element represents.

Example:

```html
<div role="button" tabindex="0">
    Click Me
</div>
```

This tells assistive technologies that the `div` should be understood as a button.

However, it does not automatically make the `div` behave like a real button. You would still need to implement keyboard behavior and interaction.

Prefer:

```html
<button type="button">
    Click Me
</button>
```

### Common ARIA roles

| Role | Meaning |
|---|---|
| `button` | An interactive button |
| `navigation` | A navigation area |
| `main` | Main content |
| `banner` | Site-wide header area |
| `contentinfo` | Site-wide footer area |
| `alert` | Important, time-sensitive information |
| `status` | A status message |
| `dialog` | A dialog or window |
| `tab` | A tab in a tab interface |
| `tablist` | A container for tabs |
| `tabpanel` | Content associated with a tab |

Many of these roles are already provided by semantic HTML.

For example:

```html
<nav>
    ...
</nav>
```

Already has a navigation landmark role. You do not need to write `role="navigation"` on it.

---

## 6. ARIA Labels

ARIA labels provide accessible names for elements.

### `aria-label`

Provides an accessible name directly.

```html
<button aria-label="Close menu">
    X
</button>
```

A screen reader can announce the button as "Close menu" instead of relying on the visible `X`.

Useful when an element has no clear visible text.

Other examples:

```html
<button aria-label="Search">
    <svg aria-hidden="true">...</svg>
</button>
```

```html
<nav aria-label="Main navigation">
    ...
</nav>
```

### `aria-labelledby`

Uses the text of another element as the accessible name.

```html
<h2 id="settings-title">Settings</h2>

<section aria-labelledby="settings-title">
    ...
</section>
```

The section gets its accessible name from the heading.

### `aria-describedby`

Connects an element to additional descriptive information.

```html
<label for="password">Password</label>

<input
    id="password"
    type="password"
    aria-describedby="password-help"
>

<p id="password-help">
    Password must contain at least 8 characters.
</p>
```

A screen reader can use the description to provide additional instructions.

### Difference between them

| Attribute | Purpose |
|---|---|
| `aria-label` | Provides an accessible name directly |
| `aria-labelledby` | Gets an accessible name from another element |
| `aria-describedby` | Connects additional descriptive information |

**Remember:**
- Label = what the element is.
- Description = additional information about the element.

---

## 7. `aria-expanded`

`aria-expanded` tells assistive technologies whether an interactive element controls content that is currently expanded or collapsed.

It is commonly used for:
- Dropdown menus.
- Navigation menus.
- Accordion sections.
- Expandable content.

Example:

```html
<button
    id="menu-button"
    aria-expanded="false"
    aria-controls="menu"
>
    Menu
</button>

<nav id="menu" hidden>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>
```

### What do the values mean?

```html
aria-expanded="false"
```

The controlled content is collapsed.

```html
aria-expanded="true"
```

The controlled content is expanded.

### Changing `aria-expanded` with JavaScript

```js
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isExpanded));

    menu.hidden = isExpanded;
});
```

### Understand the logic

1. `getAttribute()` reads the current `aria-expanded` value.
2. We compare it with `"true"`.
3. `isExpanded` tells us whether the menu is currently open.
4. `!isExpanded` reverses the Boolean value.
5. `setAttribute()` updates the ARIA state.
6. `menu.hidden` changes whether the menu is displayed.

**Important:** ARIA states should always match the actual interface. If the menu is visible, `aria-expanded` should be `"true"`. If hidden, it should be `"false"`.

---

## 8. Other Important ARIA Attributes

### `aria-hidden`

Hides content from assistive technologies.

```html
<span aria-hidden="true">★</span>
```

Useful for decorative icons that do not need to be announced.

**Important:** `aria-hidden="true"` does not visually hide an element. It only removes it from the accessibility tree.

Do not apply it to focusable interactive elements or their ancestors when users still need to interact with them.

### `aria-live`

Tells screen readers that an area may update dynamically and that changes should be announced.

Common values:

| Value | Meaning |
|---|---|
| `off` | No live announcement |
| `polite` | Announces updates when the user is not busy |
| `assertive` | Announces updates as soon as possible, potentially interrupting |

Example:

```html
<p id="status" aria-live="polite"></p>
```

JavaScript:

```js
const status = document.getElementById("status");

status.textContent = "Your changes have been saved.";
```

A screen reader can announce the updated message without requiring the user to find it manually.

Use `assertive` sparingly for genuinely urgent messages.

### `aria-controls`

Identifies the element or elements controlled by another element.

```html
<button aria-controls="panel">
    Show Details
</button>

<div id="panel">
    More information here.
</div>
```

It establishes a relationship between the button and the panel.

**Remember:** `aria-controls` does not automatically open or close the panel. JavaScript must handle that behavior.

### `aria-pressed`

Describes whether a toggle button is pressed.

```html
<button id="theme-button" aria-pressed="false">
    Dark Mode
</button>
```

JavaScript:

```js
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
    const isPressed = themeButton.getAttribute("aria-pressed") === "true";

    themeButton.setAttribute("aria-pressed", String(!isPressed));
});
```

Useful for toggle buttons such as:
- Bold text.
- Mute/unmute.
- Dark mode.
- Favorite selection.

Use it for a button with a persistent on/off state, not simply any button that has been clicked.

### `aria-disabled`

Communicates that an element is disabled to assistive technologies.

```html
<button aria-disabled="true">
    Submit
</button>
```

Unlike the native `disabled` attribute, `aria-disabled` does not automatically prevent interaction.

For a real disabled button, prefer:

```html
<button disabled>
    Submit
</button>
```

### `aria-selected`

Indicates which option or tab is currently selected.

```html
<button role="tab" aria-selected="true">
    Overview
</button>
```

Commonly used in tab interfaces and other selection widgets.

### `aria-required`

Communicates that a form field is required.

```html
<input type="text" aria-required="true">
```

For ordinary form controls, prefer the native HTML attribute:

```html
<input type="text" required>
```

### `aria-invalid`

Indicates that a form field contains an invalid value.

```html
<input
    id="email"
    type="email"
    aria-invalid="true"
>
```

JavaScript can update it after validation:

```js
emailInput.setAttribute("aria-invalid", "true");
```

When the value becomes valid:

```js
emailInput.setAttribute("aria-invalid", "false");
```

You can also remove the attribute when it is no longer necessary.

---

## 9. HTML `hidden` Attribute

The `hidden` attribute hides an element from the rendered page and normally removes it from the accessibility tree.

```html
<div id="content" hidden>
    Hidden content
</div>
```

JavaScript:

```js
const content = document.getElementById("content");

content.hidden = false;
```

To hide it again:

```js
content.hidden = true;
```

### Difference between `hidden` and `aria-hidden`

| Attribute | What it does |
|---|---|
| `hidden` | Hides content visually and from the accessibility tree |
| `aria-hidden="true"` | Hides content from the accessibility tree, but not visually |

Use `hidden` when the content should actually disappear from the interface.

---

## 10. JavaScript DOM Attribute Methods

JavaScript can read, add, update, and remove HTML attributes.

### `setAttribute()`

Adds a new attribute or updates an existing one.

Syntax:

```js
element.setAttribute("attribute", "value");
```

Example:

```html
<button id="myButton">Click Me</button>
```

```js
const button = document.getElementById("myButton");

button.setAttribute("aria-label", "Open settings");
```

This adds the `aria-label` attribute to the button.

You can also update an existing attribute:

```js
button.setAttribute("aria-expanded", "true");
```

### `getAttribute()`

Gets the value of an attribute.

```js
const expanded = button.getAttribute("aria-expanded");

console.log(expanded);
```

Important: `getAttribute()` returns a string or `null` if the attribute does not exist.

Example:

```js
const isExpanded = button.getAttribute("aria-expanded") === "true";
```

We compare it with `"true"` because the attribute value is a string.

### `removeAttribute()`

Removes an attribute completely.

```js
button.removeAttribute("aria-expanded");
```

### `hasAttribute()`

Checks whether an element has an attribute.

```js
console.log(button.hasAttribute("aria-label"));
```

Returns `true` or `false`.

### Quick comparison

| Method | Purpose |
|---|---|
| `setAttribute()` | Add or update an attribute |
| `getAttribute()` | Read an attribute's value |
| `removeAttribute()` | Remove an attribute |
| `hasAttribute()` | Check whether an attribute exists |

---

## 11. Attribute Methods vs DOM Properties

HTML attributes and JavaScript properties are related, but they are not always the same thing.

Example:

```html
<button id="myButton" disabled>
    Submit
</button>
```

Using the attribute method:

```js
button.setAttribute("disabled", "");
```

Using the DOM property:

```js
button.disabled = true;
```

Both can disable the button.

### Common property alternatives

| Attribute method | DOM property |
|---|---|
| `getAttribute("id")` | `element.id` |
| `getAttribute("class")` | `element.className` |
| `getAttribute("title")` | `element.title` |
| `getAttribute("disabled")` | `element.disabled` |
| `getAttribute("hidden")` | `element.hidden` |
| `getAttribute("value")` | `element.value` (current form value) |

**Important difference:** Some HTML attributes represent initial/default values, while DOM properties can represent current live state.

For example:

```js
input.getAttribute("value");
```

Reads the value attribute.

```js
input.value;
```

Reads the input's current value.

For current form state, use the appropriate DOM property.

### When should you use each?

Use `setAttribute()` and `getAttribute()` when working with attributes such as:
- `aria-expanded`
- `aria-label`
- `aria-controls`
- `data-*` attributes

Use DOM properties for common live states such as:
- `input.value`
- `input.checked`
- `button.disabled`
- `element.hidden`

---

## 12. The `data-*` Attributes

HTML allows you to store custom information using attributes that begin with `data-`.

Example:

```html
<button data-theme="dark">
    Dark Mode
</button>
```

JavaScript can access the value through `dataset`.

```js
const button = document.querySelector("button");

console.log(button.dataset.theme); // dark
```

You can also update it:

```js
button.dataset.theme = "light";
```

HTML:

```html
<div data-user-id="25"></div>
```

JavaScript:

```js
const user = document.querySelector("div");

console.log(user.dataset.userId); // "25"
```

Notice that hyphenated names become camelCase in `dataset`.

You can also use attribute methods:

```js
button.setAttribute("data-theme", "dark");

console.log(button.getAttribute("data-theme"));
```

---

## 13. Keyboard Accessibility

A website should be usable without a mouse.

Users should be able to navigate and interact using a keyboard.

### Important keyboard keys

| Key | Common purpose |
|---|---|
| `Tab` | Move to the next focusable element |
| `Shift + Tab` | Move to the previous focusable element |
| `Enter` | Activate links and buttons |
| `Space` | Activate buttons or toggle controls |
| `Arrow keys` | Navigate within certain widgets |
| `Escape` | Close dialogs or menus when supported |

### `tabindex`

Controls whether an element can receive keyboard focus and, in some cases, its position in sequential keyboard navigation.

```html
<div tabindex="0">
    This element can receive keyboard focus.
</div>
```

Common values:

| Value | Meaning |
|---|---|
| `tabindex="0"` | Allows focus in the normal keyboard order |
| `tabindex="-1"` | Allows programmatic focus but skips normal Tab navigation |
| Positive values | Assigns a custom Tab order; generally avoid |

Avoid positive `tabindex` values because they can make keyboard navigation confusing.

### `.focus()`

Moves keyboard focus to an element.

```js
const input = document.getElementById("username");

input.focus();
```

### `.blur()`

Removes focus from an element.

```js
input.blur();
```

### `keydown`

Responds when a keyboard key is pressed.

```js
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        console.log("Escape key pressed");
    }
});
```

For native buttons, links, and form controls, use their built-in keyboard behavior instead of recreating it unnecessarily.

---

## 14. Accessible Forms

Forms should have clear labels and instructions.

### Use `<label>` with inputs

```html
<label for="username">Username</label>

<input
    id="username"
    type="text"
    name="username"
>
```

The `for` attribute connects the label to the input using the input's `id`.

Clicking the label can also focus the input.

### Required fields

```html
<label for="email">Email</label>

<input
    id="email"
    type="email"
    required
>
```

The `required` attribute tells the browser that the field must be completed.

### Error messages

```html
<label for="email">Email</label>

<input
    id="email"
    type="email"
    aria-describedby="email-error"
    aria-invalid="true"
>

<p id="email-error">
    Please enter a valid email address.
</p>
```

JavaScript:

```js
emailInput.setAttribute("aria-invalid", "true");
```

When valid:

```js
emailInput.setAttribute("aria-invalid", "false");
```

For dynamic errors, ensure that users can discover the message. You can use an appropriate live region when an announcement is needed.

### Group related controls

```html
<fieldset>
    <legend>Choose your preferred language</legend>

    <label>
        <input type="radio" name="language" value="javascript">
        JavaScript
    </label>

    <label>
        <input type="radio" name="language" value="python">
        Python
    </label>
</fieldset>
```

`fieldset` groups related controls, and `legend` provides a description of the group.

---

## 15. Accessible Buttons and Icons

An icon-only button needs an accessible name.

Incorrect:

```html
<button>
    X
</button>
```

Better:

```html
<button type="button" aria-label="Close">
    <span aria-hidden="true">X</span>
</button>
```

For decorative icons, `aria-hidden="true"` prevents unnecessary announcements.

If a button already has meaningful visible text, you generally do not need an additional `aria-label`.

Example:

```html
<button type="button">
    Close Menu
</button>
```

The visible text already provides an accessible name.

---

## 16. Accessible Dynamic Content

When JavaScript changes content, users who rely on screen readers may not automatically know that something changed.

Use an appropriate live region.

Example:

```html
<button id="save-button">
    Save
</button>

<p id="status" role="status"></p>
```

JavaScript:

```js
const saveButton = document.getElementById("save-button");
const status = document.getElementById("status");

saveButton.addEventListener("click", () => {
    status.textContent = "Your changes have been saved.";
});
```

The `status` role provides an implicit polite live region.

Other example:

```html
<div role="alert">
    Your session is about to expire.
</div>
```

Use `alert` for important messages that need immediate attention, not for every ordinary update.

---

## 17. Accessible Accordion Example

An accordion allows users to show and hide sections of content.

HTML:

```html
<button
    id="accordion-button"
    aria-expanded="false"
    aria-controls="accordion-panel"
>
    What is JavaScript?
</button>

<div id="accordion-panel" hidden>
    <p>JavaScript is a programming language.</p>
</div>
```

JavaScript:

```js
const accordionButton = document.getElementById("accordion-button");
const accordionPanel = document.getElementById("accordion-panel");

accordionButton.addEventListener("click", () => {
    const isExpanded = accordionButton.getAttribute("aria-expanded") === "true";

    accordionButton.setAttribute("aria-expanded", String(!isExpanded));

    accordionPanel.hidden = isExpanded;
});
```

### Understand what happens

When the button is clicked:

1. JavaScript reads the current expanded state.
2. It reverses the state.
3. It updates `aria-expanded`.
4. It shows or hides the panel using `hidden`.

This keeps the visual state and accessibility state synchronized.

Because this uses a native button, keyboard activation with Enter and Space is already supported.

---

## 18. Accessible Tabs: Important ARIA Attributes

A tab interface commonly uses three ARIA roles:

- `tablist` → container holding the tabs.
- `tab` → an individual tab.
- `tabpanel` → the content associated with a tab.

Example structure:

```html
<div role="tablist" aria-label="Account settings">
    <button
        role="tab"
        id="profile-tab"
        aria-selected="true"
        aria-controls="profile-panel"
        tabindex="0"
    >
        Profile
    </button>

    <button
        role="tab"
        id="security-tab"
        aria-selected="false"
        aria-controls="security-panel"
        tabindex="-1"
    >
        Security
    </button>
</div>

<section
    role="tabpanel"
    id="profile-panel"
    aria-labelledby="profile-tab"
>
    Profile settings
</section>

<section
    role="tabpanel"
    id="security-panel"
    aria-labelledby="security-tab"
    hidden
>
    Security settings
</section>
```

### Important tab behavior

A complete accessible tab interface should also support:
- Arrow-key navigation between tabs.
- Enter or Space activation when using manual activation.
- Updating `aria-selected`.
- Updating `tabindex`.
- Showing the selected tab's panel and hiding the others.
- Moving focus appropriately.

**Remember:** Adding `role="tab"` alone does not create a complete accessible tab system. JavaScript must implement the expected keyboard and selection behavior.

---

## 19. Accessibility Checklist

Before completing a web page or JavaScript project, check these things:

- [ ] Use semantic HTML elements.
- [ ] Use buttons for actions and links for navigation.
- [ ] Give form inputs meaningful labels.
- [ ] Make interactive elements keyboard accessible.
- [ ] Make sure keyboard focus is visible.
- [ ] Give icon-only buttons accessible names.
- [ ] Use ARIA only when necessary.
- [ ] Keep `aria-expanded` synchronized with visible content.
- [ ] Use `aria-live` or an appropriate live region for important dynamic updates.
- [ ] Provide useful error messages.
- [ ] Do not rely on color alone to communicate information.
- [ ] Use appropriate heading levels.
- [ ] Provide alternative text for meaningful images.
- [ ] Make sure hidden content is actually hidden when required.
- [ ] Test the page using the keyboard.

---

# Quick Reference Table

| Attribute / Method | Purpose |
|---|---|
| `aria-label` | Gives an element an accessible name |
| `aria-labelledby` | Uses another element's text as its accessible name |
| `aria-describedby` | Connects additional descriptive text |
| `aria-expanded` | Communicates expanded or collapsed state |
| `aria-controls` | Identifies controlled content |
| `aria-hidden` | Hides content from assistive technologies |
| `aria-live` | Announces dynamic updates |
| `aria-pressed` | Communicates toggle button state |
| `aria-disabled` | Communicates disabled state |
| `aria-selected` | Communicates selected state |
| `aria-required` | Communicates that a field is required |
| `aria-invalid` | Communicates invalid input |
| `role` | Describes an element's role |
| `hidden` | Hides an element |
| `tabindex` | Controls keyboard focus behavior |
| `setAttribute()` | Adds or updates an attribute |
| `getAttribute()` | Reads an attribute |
| `removeAttribute()` | Removes an attribute |
| `hasAttribute()` | Checks whether an attribute exists |
| `dataset` | Reads or updates `data-*` attributes |
| `.focus()` | Moves focus to an element |
| `.blur()` | Removes focus from an element |
| `event.key` | Identifies the keyboard key involved |

---

# Final Mental Model

**Semantic HTML:** Gives elements their correct meaning.

**Accessibility:** Makes your website usable by people with different abilities and assistive technologies.

**ARIA:** Provides extra accessibility information when native HTML is not enough.

**ARIA states:** Describe the current state of an interactive element, such as expanded, pressed, selected, or disabled.

**`setAttribute()`:** Adds or updates an HTML attribute.

**`getAttribute()`:** Reads an HTML attribute.

**`removeAttribute()`:** Removes an HTML attribute.

**Keyboard accessibility:** Makes sure users can navigate and interact without a mouse.

**The most important rule:** Build with semantic HTML first, add JavaScript behavior second, and use ARIA to communicate the correct accessibility information.