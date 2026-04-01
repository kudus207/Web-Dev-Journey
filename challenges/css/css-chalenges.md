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