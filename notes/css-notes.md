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