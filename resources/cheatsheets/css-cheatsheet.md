.menu {
    <!-- use margin auto with with % width or height -->
  width: 80%; 
  margin-left: auto;
  margin-right: auto;
}

<!-- a element properties -->
a {
  text-decoration: none;
}

a:visited {
  color: black;
}

a:hover {
  color: brown;
}

a:active {
  color: brown;
}

a:focus {
  outline: 2px solid blue;
} 

em
rem
vh
vw
<!-- box-shadow -->
The box-shadow property lets you apply one or more shadows around an element. Here is basic syntax:
              Example Code
              box-shadow: offsetX offsetY color;
              Here's how the offsetX and offsetY values work:
              both offsetX and offsetY accept number values in px and other CSS units
              a positive offsetX value moves the shadow right and a negative value moves it left
              a positive offsetY value moves the shadow down and a negative value moves it up
              if you want a value of zero (0) for any or both offsetX and offsetY, you don't need to add a unit. Every browser understands that zero means no change.
              The height and width of the shadow is determined by the height and width of the element it's applied to. You can also use an optional spreadRadius value to spread out the reach of the shadow. More on that later.

              This adds a shadow effect around the container. The values control the horizontal offset, vertical offset, blur radius, and color respectively.

  box-shadow: offsetX offsetY blurRadius color;
              If a blurRadius value isn't included, it defaults to 0 and produces sharp edges. The higher the value of blurRadius, the greater the blurring effect is.

But what if you wanted to expand the shadow out further? You can do that with the optional spreadRadius value:
Example Code
box-shadow: offsetX offsetY blurRadius spreadRadius color;
            Like blurRadius, spreadRadius defaults to 0 if it isn't included.

  <!-- transform -->
📝 CSS transform (Quick Note)

Definition:
Used to move, rotate, scale, or skew an element.

🔹 Common Transform Functions
translate(x, y) → move element
scale(x) → resize element
rotate(deg) → rotate element
skew(deg) → tilt element
🔹 Examples
Move
transform: translate(50px, 20px);

👉 Moves right 50px, down 20px

Scale
transform: scale(1.5);

👉 Makes element 1.5× bigger

Rotate
transform: rotate(45deg);

👉 Rotates element 45°

Skew
transform: skew(20deg);

👉 Tilts the element

🔹 Multiple Transforms
transform: scale(1.2) rotate(10deg);

👉 Combines effects

🔥 Memory Tip

transform = change shape or position (without affecting layout)

💡 Important
Doesn’t push other elements (no layout shift)
Works great with transition for animations

<!-- transition -->
transition: transform 0.3s, background-color 0.3s ease;
            When the a elements are hovered, the color of the background makes a transition to a different color. You can regulate how that transition happens with the transition property:
            a {
            transition: color 1s linear;
            }
            The values that the transition property accepts are, in order, the property that the transition is applied to, the duration of the transition, and then the timing.

            If there are multiple properties that have a transition, you can write the values for each separated by a comma:

            Example Code
            p {
            transition: property1 0.1s, property2 0.6s linear;
            }
            If a value is omitted, like the timing for the first property, a default value is applied.

<!-- outlined -->
.card-links a:focus {
            outline: 2px solid yellow
            }  

<!-- STYLING RADIO BUTTON -->
.contact-method-radio-btn {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid gray;
  vertical-align: bottom;
}
.contact-method-radio-btn::before {  A pseudo-element like <!-- ::before --> lets you insert extra content 
                                     before the actual element. This is often used for decorative purposes.
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate(3px, 3px) scale(0); The translate function moves the circle slightly, shrinks it to zero 
                                           size so it’s hidden by default.
  transition: all 0.3s ease-in; create a smooth animation when it appears. This means any style change will 
                                animate over 0.3 seconds, starting slowly and speeding up.
}

<!-- box-sizzing -->
  box-sizing: Specifies the behavior of the 'width' and 'height' properties.

<!-- WIDTH -->
 width: unset; This will remove the earlier rule which set all the input elements to width: 100%.

 <!-- Float -->
 float: right; to move items like checkbox  
               from left to right.

<!-- Overflow -->
📝 CSS overflow (Quick Note)

Definition:
Controls what happens when content is too big for its container.

🔹 Common Values
overflow: visible; (default)
Content spills outside the box
overflow: hidden;
Extra content is cut off (not visible)
overflow: scroll;
Always shows scrollbars (even if not needed)
overflow: auto;
Adds scrollbars only when needed
🔹 Direction-specific
overflow-x → horizontal
overflow-y → vertical

Example:

overflow-y: auto;
🔹 Example
.box {
  width: 200px;
  height: 100px;
  overflow: auto;
}

👉 If content is bigger → scroll appears
👉 If not → no scroll

🔥 Memory Tip

Overflow = “What should I do with extra content?”

<!-- Filter -->
📝 CSS filter (Quick Note)

Definition:
Applies visual effects to an element (like images or divs).

🔹 Common Filter Functions
blur(px) → makes it blurry
brightness(%) → lighter or darker
contrast(%) → increases difference
grayscale(%) → removes color
sepia(%) → brown vintage look
invert(%) → reverses colors
saturate(%) → boosts color intensity
drop-shadow() → adds shadow
🔹 Example
img {
  filter: grayscale(100%);
}

👉 Image becomes black and white

🔹 Multiple Filters
img {
  filter: blur(2px) brightness(120%);
}

👉 Effects are applied together

🔥 Memory Tip

filter = “add visual effects like Photoshop”

💡 Where it’s used
Images
Backgrounds
Hover effects
UI design polish

<!-- Text Transform -->
text-transform: uppercase;

<!-- Flexbox -->
display: flex; Flexbox is a one-dimensional CSS layout that can control the way items 
               are spaced out and aligned within a container.
               This will make the element a flex container. Any direct children of a flex container are called flex items.

flex-direction: Flexbox has a main and cross axis. The main axis is defined by the 
                flex-direction property, which has four possible values:
    row (default): horizontal axis with flex items from left to right.
    row-reverse: horizontal axis with flex items from right to left.
    column: vertical axis with flex items from top to bottom.
    column-reverse: vertical axis with flex items from bottom to top.
Note: The axes and directions will be different depending on the text direction. The 
      values shown are for a left-to-right text direction.

flex-wrap: The flex-wrap property determines how your flex items behave when the flex 
           container is too small. 
           Setting it to <!--wrap--> will allow the items to wrap to the next row or column. <!--nowrap (default)--> will prevent your items from wrapping and shrink them if needed.

justify-content: The justify-content property determines how the items inside a flex 
                 container are positioned along the main axis, affecting their position and the space around them.

align-items: The align-items property positions the flex content along the cross axis.

gap: 10px; The gap CSS shorthand property sets the gaps, also known as gutters, between 
           rows and columns. <!-- The gap property and its row-gap and column-gap sub-properties provide this functionality for flex, grid, and multi-column layout. --> You apply the property to the container element.

flex: 1 1 100px; The flex property controls the size and behavior of the items inside a 
                 flexible container. It is composed by three properties: <!-- flex-grow, flex-shrink, and flex-basis. -->
                 This will make each box start at 100px, allowing them to grow to fill available space, or shrink when needed.

align-content: This property controls the arrangement of items along the cross axis. 
               While the default value of <!--align-content is stretch-->, the most relevant options you can use for align-content are: <!--space-between, start, center, end, space-around and space-evenly.-->

order: The order property specifies the order of a flex item relative to other flex 
       items inside the same container. By default, all flex items have an order value of 0, meaning they appear in the order they're written in the HTML. Items with lower order values appear first, while items with higher values appear last.

flex: 1; is shorthand for:
         flex-grow: 1;
         flex-shrink: 1;
         flex-basis: 0;
         In simple terms:
         👉 It tells the element:
         “Take up all the available space inside the container.”
                  
<!-- ::after -->
The ::after pseudo-element creates an element that is the last child of the selected 
           element. You can use it to add an empty element after the last image. If you give it the same width as the images it will push the last image to the left when the gallery is in a two-column layout. Right now, it is in the center because you set justify-content: center on the flex container.
           Example
           .container::after {
            content: "";
            width: 860px;
            }

<!-- object fit -->
object-fit: cover; used to determine how images should behave.

<!-- border-radius -->
border-radius: <!-- One value --> to apply to all four corners.
               <!-- Two values -->, with the first value for top-left/bottom-right, and second for top-right/bottom-left.
               <!-- Three values -->, corresponding to top-left, top-right/bottom-left, bottom-right.
               <!-- Four values -->, which set the border radius clockwise starting from top-left corner.
               
<!-- letter spacing -->
letter-spacing: 0.15px; The letter-spacing property can be used to adjust the space 
                        between each character of text in an element.

<!-- img max and min width -->
max(250px, 25vw)

👉 This means:
“Use whichever value is bigger.”

So CSS compares:

250px (fixed size)
25vw (25% of the viewport width)
Example:
If screen is 1000px wide → 25vw = 250px → same → result = 250px
If screen is 600px wide → 25vw = 150px → smaller → result = 250px
If screen is 1400px wide → 25vw = 350px → bigger → result = 350px

✅ So this ensures:

The width will never go below 250px, but can grow on bigger screens.
<!-- min -->
min(5vw, 1.2em)

👉 This means:
“Use whichever value is smaller.”

So CSS compares:

5vw (5% of screen width)
1.2em (relative to font size)
Example:
If 5vw = 50px and 1.2em = 19px → result = 19px
If 5vw = 15px and 1.2em = 19px → result = 15px

✅ So this ensures:

The value will never exceed 1.2em, but can shrink on smaller screens.

<!-- aspect-ratio -->
aspect-ratio: 35 / 4; The aspect ratio of 35 / 4 can be interpreted as a width-to-height 
                      ratio. To calculate the aspect ratio, you can use the formula:
                      Aspect Ratio = Width / Height.
                      For an aspect ratio of 35 / 4, this means that for every 35 units of width, there are 4 units of height.
                      Width = Height x 35 / 4.
                      This ratio is often used in various media formats, such as video and image dimensions, to ensure proper scaling and display across different devices. 
