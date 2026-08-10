JavaScript for Loops — Simple Notes
1. What is a Loop?

A loop is used to repeat instructions.

Instead of writing:

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

we can tell JavaScript to repeat the instruction for us.

A loop has 3 main questions:
Where do I start?
When do I stop?
How do I move?
2. Basic for Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

This prints:

1
2
3
4
5
Break it down:
let i = 1

Start at 1.

i <= 5

Keep going while i is 5 or less.

i++

Add 1 after each loop.

console.log(i)

Print the current value of i.

3. The Three Parts of a for Loop
for (let i = 1; i <= 5; i++) {
    // code to repeat
}
Part	Meaning
let i = 1	Starting point
i <= 5	Condition / when to stop
i++	How i changes

Think:

Start → Check → Do → Change → Check again

4. i++
i++

means:

Add 1 to i.

Example:

1 → 2 → 3 → 4 → 5

So:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

prints:

1
2
3
4
5
5. Counting Backwards

Use:

i--

i-- means:

Subtract 1 from i.

Example:

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

Output:

5
4
3
2
1

Think:

5 → 4 → 3 → 2 → 1 → 0

When i becomes 0:

0 >= 1 ❌

The loop stops.

6. Increasing by More Than 1

Instead of:

i++

we can use:

i += 2

This means:

Add 2 to i.

Example:

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

Output:

1
3
5
7
9

Movement:

1 → 3 → 5 → 7 → 9 → 11

At 11:

11 <= 10 ❌

Stop.

7. Increasing by 5
for (let i = 5; i <= 25; i += 5) {
    console.log(i);
}

Output:

5
10
15
20
25

Movement:

5 → 10 → 15 → 20 → 25 → 30
8. Decreasing by More Than 1

Use:

i -= 2

This means:

Subtract 2 from i.

Example:

for (let i = 10; i >= 1; i -= 2) {
    console.log(i);
}

Output:

10
8
6
4
2

Movement:

10 → 8 → 6 → 4 → 2 → 0

At 0:

0 >= 1 ❌

Stop.

9. Useful Increment/Decrement Operators
Code	Meaning
i++	Add 1
i--	Subtract 1
i += 2	Add 2
i -= 2	Subtract 2
i += 5	Add 5
i -= 5	Subtract 5
10. How to Read Any for Loop

Whenever you see:

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

ask yourself:

① Where do I start?
2
② When do I stop?
i <= 10
③ How do I move?
+2
④ What do I do?
console.log(i)

Then trace it:

2 → 4 → 6 → 8 → 10 → 12

Check 12:

12 <= 10 ❌

So the output is:

2
4
6
8
10
11. Important: Last Printed Number vs. Stopping Number

This is one of the most important things we've learned.

Consider:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

The last number printed is:

5

But after printing 5:

i++ 

makes i:

6

Then JavaScript checks:

6 <= 5 ❌

So:

5 is the last number printed.
6 is the number that causes the loop to stop.

12. Simple Mental Model

Whenever you see a loop, think:

START
  ↓
CHECK CONDITION
  ↓
TRUE? → DO THE CODE
  ↓
CHANGE i
  ↓
CHECK AGAIN
  ↓
FALSE? → STOP

For example:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Think:

Start: 1

Check: Is 1 <= 5? YES
Print 1
Add 1

Check: Is 2 <= 5? YES
Print 2
Add 1

Check: Is 3 <= 5? YES
Print 3
Add 1

...

Check: Is 6 <= 5? NO
STOP
13. The Most Important Rule

When you're confused by a loop, don't try to understand everything at once.

Ask these three questions:

Where does i start?

What is the condition?

How does i change?

Then write the sequence:

START → next → next → next → ...

until the condition becomes false.

Quick Cheat Sheet
// Count up by 1
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
1 2 3 4 5
// Count down by 1
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
5 4 3 2 1
// Count up by 2
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
2 4 6 8 10
// Count down by 2
for (let i = 10; i >= 2; i -= 2) {
    console.log(i);
}
10 8 6 4 2
// Count up by 5
for (let i = 5; i <= 25; i += 5) {
    console.log(i);
}
5 10 15 20 25
⭐ Remember:

Start → Condition → Action → Change → Repeat

That's everything we've learned so far. You can use this as your Loop Module 1 reference note while we continue into arrays and loops.