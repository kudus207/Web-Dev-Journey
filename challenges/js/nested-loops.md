# Nested Loops — When to use

## Rule: One loop handles the outer group, the other handles the items inside it.

### Scenario 1: Classroom
const classes = [
  ["Ada", "John"],
  ["Mike", "Sarah"]
];

Outer loop → each class
Inner loop → each student

#### Scenario 2: Product Catalog
const products = [
  { name: "Shirt", colors: ["Red", "Blue"] },
  { name: "Shoe", colors: ["Black", "White"] }
];

Outer loop → each product
Inner loop → each color

##### Scenario 3: Grid/Game Board
const board = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "", "O"]
];

Outer loop → each row
Inner loop → each cell
