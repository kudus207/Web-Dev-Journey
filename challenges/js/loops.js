// The Five Loop Rules

// 1. for
// Use when you know how many times you'll loop.

for (let i = 0; i < array.length; i++) {}

// 2. for...of
// Gives you the values.

for (const item of array) {}

// 3. for...in
// Gives you the keys.

for (const key in object) {
  object[key];
}

// 4. while
// Checks the condition before each iteration.

while (condition) {}

// 5. do...while
// Runs once first, then checks the condition.

do {} while (condition);

// The Three Memory Tricks

break //→ Stop the loop completely.

continue //→ Skip only the current iteration.

// ! // → Flip true and false.