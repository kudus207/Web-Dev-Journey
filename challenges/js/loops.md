JavaScript Loops – Quick Notes
for Loop Formula
for (let i = start; condition; change) {
  // code
}

Ask 3 questions:

Start?

Stop?

Change?

Example:

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
Common Patterns

Count up:

for (let i = 1; i <= 5; i++)

Count down:

for (let i = 5; i >= 1; i--)

Skip numbers:

i += 2;
i -= 2;
Arrays + Loops
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

i = index

array[i] = current item

array.length - 1 = last index

The 4 Loop Patterns

Goal

Pattern

Count

count++

Total

total += value

Search

found = true; break;

New Array

result.push(item)

Find Largest
let largest = array[0];


for (let i = 1; i < array.length; i++) {
  if (array[i] > largest) largest = array[i];
}
Reverse an Array
const result = [];


for (let i = array.length - 1; i >= 0; i--) {
  result.push(array[i]);
}
Nested Loops

Outer loop = rows

Inner loop = items inside each row

Golden Rules

Use i < array.length, not <=.

break stops the loop immediately.

When confused, trace i step by step.
