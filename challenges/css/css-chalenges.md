<!--  % (Percentage) -->
🔹 % (Percentage)
Relative to parent element
Flexible

✅ Use for:
Widths, layouts
👉 Think: “Follow my parent”

<!-- vw / vh -->
🔹 vw / vh
vw → % of viewport width
vh → % of viewport height
Based on screen size, not parent

✅ Use for:
Full-screen sections
👉 Think: “Follow the screen”

<!-- px (Pixels) -->
🔹 px (Pixels)
Fixed, absolute unit
Does NOT scale

✅ Use for:
Borders, shadows, small precise values
👉 Think: “Exact size”

<!-- em -->
🔹 em
Relative to parent font-size
Can compound (multiply)

✅ Use for:
Component-level spacing (padding, buttons)
👉 Think: “Follow my parent (can stack)”

<!-- rem -->
🔹 rem
Relative to root (html) font-size
Consistent, does NOT compound

✅ Use for:
Fonts, spacing, layout
👉 Think: “Follow the root (stable)”

⚡ Golden Rule
Use rem → for most sizing
Use em → inside components
Use % → for layout
Use vw/vh → for screen-based sizing
Use px → for precision


<!-- flexbox axis -->
📘 FLEXBOX AXES (Quick Note)
🔹 Axes Basics
Main axis → direction items are laid out
Cross axis → opposite direction

🔹 Default behavior
display: flex; /* same as flex-direction: row */
Main axis → horizontal (left → right)
Cross axis → vertical (top → bottom)

🔹 If direction changes
flex-direction: column;
Main axis → vertical (top → bottom)
Cross axis → horizontal (left → right)

🔹 Key Properties
justify-content → controls main axis
align-items → controls cross axis
🔹 Memory Trick 🧠

Main axis follows flex-direction
Cross axis is always opposite

🔹 Extra Tip
row → main = horizontal
column → main = vertical
🔥 One-line summary:

justify = main axis | align = cross axis

<!-- flexbox sizing -->
📘 FLEXBOX SIZING (Quick Note)
🔹 The flex shorthand
flex: grow shrink basis;

Example:

flex: 1 1 100px;
🔍 Parts explained
🔸 1. flex-grow
Controls how items expand
Takes extra space

👉 Example:

flex-grow: 1 → grows normally
flex-grow: 2 → grows twice as much
🔸 2. flex-shrink
Controls how items shrink
When space is not enough

👉 Example:

flex-shrink: 1 → can shrink
flex-shrink: 0 → won’t shrink
🔸 3. flex-basis
The starting size before grow/shrink
Like a default width (or height in column)

👉 Example:

flex-basis: 100px → starts at 100px
📦 How it works together
flex: 1 1 100px;

👉 Means:

Start at 100px
Grow if space is available
Shrink if space is tight
⚖️ Common shortcuts
🔹 flex: 1
flex: 1; /* = 1 1 0 */
Starts from 0
Fills space equally
🔹 flex: 0 0 100px
Fixed size
No grow ❌
No shrink ❌
🔹 flex: 2
Grows twice as fast as others
🧠 Memory Trick
grow → take space
shrink → lose space
basis → starting size
🔥 One-line summary:

flex = grow (expand) + shrink (compress) + basis (start size)