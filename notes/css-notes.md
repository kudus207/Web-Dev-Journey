CSS NOTES

<meta name="viewport" content="width=device-width, initial-scale=1.0">

The width=device-width part tells the browser to set the width of the page to match the screen width of the device. This is essential for creating responsive layouts that adapt to different screen sizes.

The initial-scale=1.0 sets the initial zoom level when the page is first loaded. A value of 1.0 means that the page is displayed at 100% zoom, without any scaling.

CSS Combinators

The child combinator (>) in CSS is used to select elements that are direct children of a specified parent element.

Inside this container, there is a direct child p element ("First"), followed by two additional div elements, each containing a p element ("Second" and "Third").

The first p element is a direct child of the .container element, while the other two p elements are nested inside other div elements, making them deeper descendants.

To apply styles to just the direct child of the container class, you can use the child combinator like this:

<link rel="stylesheet" href="styles.css">   

<div class="container">
  <p>First</p>
  <div>
    <p>Second</p>
  </div>
  <div>
    <p>Third</p>
  </div>
</div>

.container > p {
  color: blue;
}


Another common combinator would be the next-sibling combinator.

The next-sibling combinator (+) in CSS selects an element that immediately follows a specified sibling element. This combinator is useful when you want to apply styles to an element that directly follows another element, allowing for targeted styling based on the element's position relative to its siblings.

<link rel="stylesheet" href="styles.css">

<figure>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="A cute orange cat lying on its back."
  />
  <figcaption>A cute orange cat lying on its back.</figcaption>
</figure>

img + figcaption {
  border: 4px solid black;
}

In this example, the next-sibling combinator (+) selects the figcaption element that immediately follows the img element. The applied CSS rule adds a 4px solid black border around the figcaption.


Another common combinator is the subsequent-sibling combinator.

The subsequent-sibling combinator (~) in CSS selects all siblings of a specified element that come after it.

Unlike the next-sibling combinator, which targets only the immediately following sibling, the subsequent-sibling combinator (~) can target any siblings that follow the specified element, offering greater flexibility in styling.

In this HTML structure, we have an h2 element followed by four paragraph elements. The paragraph elements are siblings of the h2 element.

If you want to style all of the paragraph elements that come after the h2 element, then you can use the subsequent-sibling combinator like this:

<link rel="stylesheet" href="styles.css">

<div class="container">
  <h2>Subheading</h2>
  <p>First paragraph.</p>
  <p>Second paragraph.</p>
  <p>Third paragraph.</p>
  <p>Another paragraph element</p>
</div>

h2 ~ p {
  color: green;
}

In this example, all paragraph elements following the h2 element will have the text color green.

The subsequent-sibling combinator (~) targets all paragraph siblings that appear after the h2 element, regardless of whether they are immediate siblings.


Block elements
 
Block-level elements behave like large containers or "blocks" that take up the full width of their parent container. They always start on a new line, and their height and width can be adjusted. e.g., p, div, h1 etc.

Inline elements

Inline elements only take up as much space as they need. They flow within the surrounding content and do not break onto a new line. e.g. span, a etc

Inline-block

The inline-block property is a hybrid of these two behaviors. Like inline elements, inline-block elements remain in the text flow without starting on a new line.

However, unlike inline elements, you can adjust the width and height of an inline-block element, just as you would with block-level elements.


Margin

Margins control the space outside an element, helping to separate it from other elements and define the layout structure.

The four different margin properties are margin-top, margin-right, margin-bottom and margin-left.

When using a singular value on the margin shorthand, that exact value will be applied to all four sides of the target element.

When using two values, the first value applies to the top and bottom, while the second value applies to the left and right sides of the element.

Example:

p {
  margin: 10px 20px;
}

If three values are provided, the first value applies to the top margin, the second value to the left and right margin, and the third value to the bottom margin.

Example:
p {
  margin: 10px 20px 30px;
}

When using four values, this gives you more control, as you can independently specify each margin value for each side of the target element.

The first value targets the top, the second value targets the right, the third value targets the bottom, and the fourth value targets the left.

Example:

p {
  margin: 10px 20px 30px 40px;
}


Padding

padding controls the space inside an element, improving content readability and aesthetic appeal.

The four different padding properties are padding-top, padding-right, padding-bottom and padding-left.

When using a singular value on the padding shorthand, that exact value will be applied to all four sides of the target element.

When using two values, the first value applies to the top and bottom, while the second value applies to the left and right sides of the element.

Example:

p {
  padding: 10px 20px;
}

If three values are provided, the first value applies to the top padding, the second value to the left and right padding, and the third value to the bottom padding.

Example:
p {
  padding: 10px 20px 30px;
}

When using four values, this gives you more control, as you can independently specify each padding value for each side of the target element.

The first value targets the top, the second value targets the right, the third value targets the bottom, and the fourth value targets the left.

Example:

p {
  padding: 10px 20px 30px 40px;
}


