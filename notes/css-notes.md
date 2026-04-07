CSS QUICK NOTES
Viewport
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Makes layout responsive and properly scaled.
Combinators
A > B → direct child
A + B → next sibling
A ~ B → all following siblings
Display Types
Block → full width, new line (div, p)
Inline → content width, same line (span, a)
Inline-block → inline + can set width/height
Spacing
Margin → outside space
Padding → inside space
Shorthand:
1 value → all sides
2 → top/bottom, left/right
3 → top, sides, bottom
4 → top, right, bottom, left
Specificity (priority)
Inline [1,0,0,0]
ID [0,1,0,0]
Class [0,0,1,0]
Element [0,0,0,1]
*
!important overrides all
Text & Lists
line-height → space between lines
list-style → type, position, image
Background
background-size → cover / contain
background-repeat → no-repeat, repeat-x/y
background-position → e.g. center top
background-attachment → scroll / fixed
Shorthand: background: ...
Gradients
Linear → linear-gradient(direction, colors)
Radial → radial-gradient(shape, colors)
Units
px → fixed
em → parent font
rem → root font
vh/vw → viewport size
Pseudo-classes
:hover, :active, :focus
:first-child, :last-child
:checked, :disabled
Colors
Hex → #RRGGBB
RGB → rgb(255,0,0)
RGBA → with opacity
HSL → hue, saturation, lightness
Box Shadow
box-shadow: x y blur spread color;
inset → inner shadow
Key Idea

CSS = Layout + Spacing + Styling + Responsiveness

📌 Text Inputs (Best Practices)
Use readable font (≥ 1rem) & good contrast
Add padding, borders, border-radius
Don’t rely on placeholders as labels
Always show focus styles
Use box-sizing: border-box
Show clear error states
Keep interactions smooth (transitions)
📌 appearance: none
Removes default browser styles
Use for full custom design (checkbox, radio, search)
⚠️ Must rebuild focus, accessibility, and states manually
📌 Special Inputs (Issues)
Inconsistent across browsers
Hard to fully style
Risk of breaking UI & accessibility
👉 Keep styling simple
📌 Overflow
Controls extra content
hidden (cut), scroll (always), auto (when needed)
✅ Vertical scroll OK, ❌ avoid horizontal
📌 Transform
Changes appearance (move, rotate, scale)
Doesn’t affect layout
Don’t overuse (UX + readability)
📌 Box Model
Content → Padding → Border → Margin
Total size = all combined
📌 Margin Collapsing
Vertical margins merge
Bigger value wins
Prevent with padding/border/overflow
📌 box-sizing
content-box: size grows
border-box: fixed size (best)
📌 CSS Reset
Removes browser defaults
Use simple reset or tools like Normalize
📌 Filter
Visual effects (blur, brightness, etc.)
Don’t overuse (performance + readability)
📌 Flexbox
1D layout (row/column)
Easy alignment & spacing

Key:

justify-content → main axis
align-items → cross axis
flex-wrap → wrapping

Text-shadow (CSS)

Adds shadow to text.

Syntax:

text-shadow: x-offset y-offset blur color;

Key Points:

x-offset → left/right (required)
y-offset → up/down (required)
blur → softness (optional)
color → shadow color (optional)

Behavior:

Positive → right & down
Negative → left & up
Default blur = 0 (sharp)

Example:

text-shadow: 3px 2px 3px #00ffc3;

Multiple shadows:

text-shadow: 2px 2px red, -2px -2px blue;

Summary:
Adds depth, glow, or layered effects to text.