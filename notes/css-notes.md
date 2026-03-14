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

Browsers treat spaces and line breaks in HTML as actual spacing when elements are displayed inline or inline-block.

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

CSS Specificity

CSS specificity is a fundamental concept that determines which styles are applied to an element when multiple rules could apply.

Understanding specificity helps developers resolve conflicts between different CSS rules and ensures that the desired styles are consistently applied.

CSS specificity is calculated based on the type of selectors used.

The highest specificity is attributed to inline styles, which are applied directly to an element through the style attribute.[1 0 0 0]

The second highest is the id selector [0 1 0 0]

The third highest is the class selector [0 0 1 0]

The fourth is the type selector (p) [ 0 0 1]

The last is the universal selector (*) [0 0 0 0]

The !important keyword in CSS is used to give a style rule the highest priority, allowing it to override any other declarations for a property.

When used, it forces the browser to apply the specified style, regardless of the specificity of other selectors.

After filtering by origin and importance, the algorithm looks at specificity. When two rules from the same origin and importance level apply, the rule with the higher specificity will be applied.

Specificity is a measure of how targeted a selector is, with more specific selectors taking precedence over more general ones.

Finally, if everything else is equal, the order of appearance comes into play. When two rules have the same specificity, the one that appears last in the CSS will be applied.

This is why the order in which you write your styles can sometimes affect the outcome.

By considering relevance, origin and importance, specificity, scope, and order of appearance, the Cascade Algorithm ensures that your CSS behaves predictably, allowing you to design more complex and nuanced web pages.

The inherit keyword can be used to force inheritance of a property from a parent element, even if that property is not normally inherited.

For example, if you want a specific child element to have the same padding as its parent, you can set padding: inherit on the child element:

However, it’s important to remember that inheritance only works in one direction – from parent to child. If you override a style on a child element, it won’t affect the parent element.


The line height property

The line-height property adjusts the vertical spacing between lines of text within a single list item.

While it primarily affects the spacing between lines of text within each item, it can also indirectly influence the overall spacing between list items if the items contain only a single line of text.

If list items have multiple lines of text, the line-height will affect the spacing between those lines, but it does not directly adjust the spacing between separate list items themselves.

To control the spacing between individual list items, you would use margin or padding properties instead.

Using the same unordered list from earlier, here is an example of applying line-height to the list items:

<link rel="stylesheet" href="styles.css">

<ul>
  <li>Item 1</li>
<li>Item 2</li>
  <li>Item 3</li>
</ul>

li {
  line-height: 2;
}


Different list-style Properties

In CSS, the list-style property is used to control the appearance of lists on a webpage.

Whether you're working with ordered lists (ol) or unordered lists (ul), the list-style property allows you to customize how list items are displayed.

The list-style property is actually a shorthand for three other properties:

list-style-type
list-style-position
list-style-image

Each one plays a different role in defining the appearance of lists.

The list-style-type property allows you to define the type of bullet point or number used in a list.

For unordered lists, you can choose from several bullet styles, such as discs, circles, or squares.

For ordered lists, you can use different numbering systems, like decimal, Roman numerals, or even alphabetical characters.

The list-style-position property controls the position of the bullet or number in relation to the list item’s content. There are two values you can use: inside and outside.

When you use the value outside, the bullet or number appears outside the content, which is the default behavior.

And, when you use the value inside, the bullet or number appears inside the content, which may cause the text to wrap and align with the bullet or number.

The list-style-position property can be useful when you want to control the alignment of the list content, especially in situations where you have multiple lines of text in a single list item.

The list-style-image property allows you to use an image as the bullet point for your list items. This can be useful for adding a unique visual style to your lists.

When using list-style-image, make sure the image you choose is small and appropriate for the design of your webpage. If the image is too large or complex, it can make the list harder to read.


