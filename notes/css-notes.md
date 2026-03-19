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

How Do Background Image Size, Repeat, Position, and Attachment Work?

When working with background images in CSS, you have several properties at your disposal to control how these images are displayed.

The main properties we'll focus on are background-size, background-repeat, background-position, and background-attachment.

<style>
 body {
 background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
 }
</style>
The above CSS sets a cat background image for the body element.

If you want to set the size for the background image, you can use the background-size property.

You can use contain to scale the image as large as possible without cropping or stretching.

<style>
 body {
background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
background-size: contain;
min-height: 100px;
}

We are setting the min-height to 100px so the background image is visible and the layout maintains a baseline height, ensuring that even with minimal content, the design appears balanced and visually appealing.

If we change the background-size property to use the cover value, then the background image will scale to cover the entire body element while maintaining its aspect ratio.

<style>
body {

background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
background-size: cover;
min-height: 100px;
}

In the previous examples, you probably noticed that the background image would continuously repeat.

By default, background images repeat both horizontally and vertically to fill the entire element. However, you can control this behavior.

You can use the background-repeat property with the value set to no-repeat.

<style>
body {
background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
background-size: contain;
background-repeat: no-repeat;
min-height: 100px;
}

With the background-size set to contain and the background-repeat set to no-repeat, the image will no longer repeat on the screen.

If you wanted to repeat the background image horizontally, you can use the repeat-x value for the background-repeat property.

<style>
body {
background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
background-size: contain;
background-repeat: repeat-x;
min-height: 100px;
}

If you wanted to repeat the background image vertically, you can use the repeat-y value for the background-repeat property.

<style>
body {
background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
background-size: contain;
background-repeat: repeat-y;
min-height: 100px;
}

To position a background image on the screen, you can use the background-position property.

The background-position property allows you to set where in the element the background image appears. You can use keywords like top, bottom, left, right, and center, or specific pixel or percentage values.

<style>
body {
background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
background-size: contain;
background-repeat: no-repeat;
background-position: center top;
min-height: 100px;
}


This CSS code positions the background image at the center of the element horizontally and at the top vertically.

Lastly, background-attachment determines whether the background image scrolls with the content or remains fixed when the page is scrolled.

The main values are scroll (default), where the background image scrolls with the content, and fixed, where the background image stays in the same position on the screen.

<style>
body {
background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
background-position: center top;
background-attachment: fixed;
}

This CSS code sets the background image to remain fixed in place even when the page is scrolled.

If you wanted to combine a few of the properties into one line, you can do that by using the shorthand background property.

<style>
body {
background: center top fixed
url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
}

The above example combines the background-image, background-position, and background-attachment into a single line.

By mastering these properties, you'll have great control over how background images are displayed in your web designs, allowing for more visually appealing and functional layouts.

What Is a Background Gradient, and How Does It Work?

A background gradient in CSS is a smooth transition between two or more colors that can be applied to the background of an element. Gradients allow you to create visually appealing backgrounds without needing images.

There are two main types of gradients in CSS: linear gradients and radial gradients.

A linear gradient transitions colors along a straight line. You can define the direction and the colors involved.

Here is the basic syntax:

background: linear-gradient(direction, color-stop1, color-stop2, ...);

In this example, we are using the background CSS property with a value of the linear gradient.

The direction specifies the direction of the gradient. It can be an angle (such as 45deg), a keyword (such as to right, to bottom), or a side/corner.

color-stop specifies the colors and positions where the gradient transitions occur.

To better understand how linear gradients work, let's take a look at the following example:

.linear-gradient{
  background: linear-gradient(to right, red, yellow);
  height: 40vh;
}

This CSS creates a linear gradient that transitions from red on the left to yellow on the right. The gradient is applied to an element with a height of 40% of the viewport height.

The to right direction means the gradient runs horizontally from left to right.

Another type of gradient would be the radial gradient.

A radial gradient transitions colors radiating from an origin (usually the center) outward in a circular or elliptical shape.

Here is the basic syntax:

background: radial-gradient(shape size at position, color-stop1, color-stop2, ...)

On the syntax, the shape specifies the shape of gradient which could be circle or ellipse.

The size determines the size of the gradient's ending shape which could be closest-side, closest-corner, farthest-side or farthest-corner.

position determines the position of the gradient's center which could be specified using keywords (such as center, top left, bottom right) or precise values (such as 50% 50%, 10px 20px).

Lastly, color stops are a list of colors that the gradient transitions through. Each color stop can optionally include a position value (percentage or length) indicating where the color should be placed.

An example would be:

.radial-gradient{
  background: radial-gradient(circle closest-side at center, red, yellow 50%, green);
  height: 60vh;
}

This CSS creates a circular radial gradient centered in the element. It starts with red at the center, transitions to yellow at 50% of the radius, and ends with green.

The closest-side keyword makes the gradient's ending shape fit the closest side of the element. The gradient is applied to an element with a height of 60% of the viewport height.

Understanding how to work with CSS gradients can significantly enhance your designs by providing visually appealing backgrounds without the need for images.

With options like linear gradients for smooth transitions and radial gradients for circular effects, they offer both flexibility and creativity in web design.

Absolute Units in CSS

	•	CSS uses length units to define sizes like width, height, margin, and padding.
	•	There are two types of units:
	•	Absolute units
	•	Relative units

Absolute Units

Absolute units have a fixed size and do not change based on screen size or parent elements.

Pixels (px)

The most common absolute unit is pixels (px).
	•	1px = 1/96 of an inch
	•	Pixels give precise control over element sizes.

Example:

.box {
  width: 100px;
  height: 100px;
}

This box will always remain 100px wide and high on any screen.

Common Uses of Pixels

Pixels are often used for:
	•	width
	•	height
	•	margin
	•	padding
	•	borders

Other Absolute Units

Other absolute units include:
	•	in (inches)
	•	cm (centimeters)
	•	mm (millimeters)
	•	q (quarter-millimeters)
	•	pc (picas)
	•	pt (points)

These are mostly used for printing, not web screens.


em and rem in CSS 

em

em is a relative unit based on the font size of the element (or its parent).

Example:
	•	If font-size = 20px
	•	margin-bottom: 1.5em
	•	Then 1.5em = 30px

Use em when building components like buttons, cards, or modules so their spacing and sizes scale with the text.

⸻

rem

rem is a relative unit based on the root element (html) font size.
	•	Default root size = 16px
	•	1.2rem = 1.2 × 16px = 19.2px

Use rem for font sizes and layout spacing because it scales with the user’s browser settings, making websites more accessible.

⸻

✅ Simple difference
	•	em → relative to parent element font size
	•	rem → relative to root (html) font size


vh and vw in CSS 

vh (Viewport Height)

vh is a unit based on the height of the browser window.
	•	1vh = 1% of the viewport height

Example:
	•	height: 100vh → element fills the entire screen height.

⸻

vw (Viewport Width)

vw is a unit based on the width of the browser window.
	•	1vw = 1% of the viewport width

Example:
h1 {
  font-size: 5vw;
}

This makes the text size scale with the screen width.

⸻

When to Use vh and vw

Use them for:
	•	Full-screen sections (like hero sections)
	•	Responsive layouts
	•	Text that scales with screen size

⸻

✅ Summary
	•	vh → relative to viewport height
	•	vw → relative to viewport width
	•	Useful for responsive design and full-screen layouts.

