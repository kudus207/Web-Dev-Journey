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

🔹 Accessibility (Hiding Content)
❌ display: none / visibility: hidden → hides from everyone (including screen readers)
✅ Use .sr-only → hidden visually, still accessible
✅ hidden attribute → hides from both UI & assistive tech
⚠️ Hide only when necessary

<!-- 🔹 Floats -->
Used for text wrapping around images
Removed from normal flow → parent may collapse
Fix with clearfix (::after { clear: both; })

<!-- 🔹 Positioning -->
static → default (normal flow)
relative → move without breaking flow
absolute → removed, positioned relative to nearest parent
fixed → sticks to viewport
sticky → acts relative → then sticks on scroll

<!-- 🔹 z-index -->
Controls stacking order
Works only on positioned elements
Higher value = on top
z-index is a property you can use to define the order of overlapping HTML elements. Any element with a higher z-index will always be positioned over an element with a lower z-index.

<!-- 🔹 Attribute Selectors -->
a[href] → elements with attribute
a[href^="https"] → starts with
a[href$=".com"] → ends with
[attr~=value] → contains word
Can target lang, data-*, type, etc.

Media Queries

Apply CSS based on device conditions.

@media (min-width: 768px) { ... }

Types: all, screen, print
Features: width, height, orientation, resolution, hover, prefers-color-scheme

Breakpoints

Points where layout changes.

Mobile: ≤ 640px
Tablet: 641–1024px
Desktop: ≥ 1025px
Mobile-First

Design for mobile first, then scale up with min-width.

CSS Custom Properties

Reusable variables:

--color: blue;
color: var(--color, fallback);
@property Rule

Defines typed, animatable variables with defaults and fallbacks.

CSS Grid vs Flexbox
Grid: 2D (rows + columns)
Flexbox: 1D (row or column)
fr Unit

Flexible space sharing in Grid:

grid-template-columns: 1fr 1fr;
Grid Gaps

Spacing between rows/columns:

gap: 20px;
repeat()

Shortcut for repeating tracks:

repeat(3, 1fr);
Implicit vs Explicit Grid
Explicit: defined by you
Implicit: auto-created by browser
minmax()

Sets flexible size range:

minmax(150px, 300px);
grid-template-areas

Named layout structure:

"header header"
"main sidebar"
grid-row & grid-column

Control item placement:

grid-column: 1 / 3;
CSS Animations

Animate styles over time:

@keyframes move { ... }
animation: move 2s;
Summary

These concepts work together to build responsive, flexible, and dynamic layouts using modern CSS.