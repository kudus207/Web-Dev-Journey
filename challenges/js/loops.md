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

JavaScript Loops + Arrays — Lesson 2.2
1. Loop Through an Array
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
Remember:
i = index
fruits[i] = value at that index

Example:

i = 0 → fruits[0] → apple
i = 1 → fruits[1] → banana
i = 2 → fruits[2] → orange
2. array.length

.length gives the number of items.

const fruits = ["apple", "banana", "orange"];

console.log(fruits.length);

Output:

3

Because there are 3 items.

Important:
length = 3
last index = 2

Therefore, when looping:

i < fruits.length

not:

i <= fruits.length
3. Do Something With Each Item

You can perform an operation on each value.

const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

Output:

2
4
6

The loop gets each value and performs the calculation.

4. Use an if Inside a Loop

You can check each array item.

const numbers = [2, 5, 8, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    }
}

Output:

8
10

Think:

Loop → get item → check item → do something

5. The Main Pattern

This is the pattern you should recognize:

for (let i = 0; i < array.length; i++) {
    // work with array[i]
}

Read it as:

Start at index 0, visit every item, and use array[i] to access the current item.

⭐ Most Important Things From Today
i              → index/position
array[i]       → current value
array.length   → number of items
i < length     → visit every valid index
if             → make a decision about the current value
Example:
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    }
}

Loop + Array + Condition = Powerful programming logic.


1. Counting With a Loop

Use a counter when you want to know how many items meet a condition.

let count = 0;

for (let i = 0; i < array.length; i++) {
    if (condition) {
        count++;
    }
}

console.log(count);
Example
const numbers = [2, 5, 8, 3, 10];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        count++;
    }
}

console.log(count); // 2

Remember:

count++ → add 1 to the counter
2. Calculating a Total

Use a total when you want to know how much altogether.

let total = 0;

for (let i = 0; i < array.length; i++) {
    total += array[i];
}

console.log(total);
Example
const numbers = [10, 20, 30];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log(total); // 60

These mean the same thing:

total = total + numbers[i];

and

total += numbers[i];

Remember:

count → HOW MANY?
total → HOW MUCH?
3. Total With a Condition

You can combine total with if.

let total = 0;

for (let i = 0; i < array.length; i++) {
    if (condition) {
        total += array[i];
    }
}
Example
const numbers = [5, 15, 20, 8, 25];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        total += numbers[i];
    }
}

console.log(total); // 60

Only:

15 + 20 + 25

are added.

4. Searching With a Loop

Use a boolean variable when you want to know:

Does something exist?

Start with:

let found = false;

Then change it to true when you find the item.

let found = false;

for (let i = 0; i < array.length; i++) {
    if (condition) {
        found = true;
    }
}
Example
const names = ["John", "Mary", "David"];

let found = false;

for (let i = 0; i < names.length; i++) {
    if (names[i] === "David") {
        found = true;
    }
}

console.log(found); // true
5. break

break immediately stops the loop.

It's useful when searching because once you've found what you're looking for, you don't need to continue.

let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 20) {
        found = true;
        break;
    }
}

Think:

Found it → I'm done → break.

6. Count vs Search

These look similar but answer different questions.

Count

How many?

let count = 0;

for (let i = 0; i < array.length; i++) {
    if (condition) {
        count++;
    }
}

Example result:

3
Search

Does it exist?

let found = false;

for (let i = 0; i < array.length; i++) {
    if (condition) {
        found = true;
        break;
    }
}

Example result:

true
7. Build a New Array

From the previous lesson, remember:

const result = [];

for (let i = 0; i < array.length; i++) {
    if (condition) {
        result.push(array[i]);
    }
}

push() adds an item to the new array.

🧠 The 4 Patterns We've Learned
Goal	Variable	What happens
Count	count	count++
Total	total	total += array[i]
Search	found	found = true
New array	result	result.push(...)
Quick memory trick:
COUNT  → How many?
TOTAL  → How much?
FOUND  → Does it exist?
RESULT → What are the items?

And:

break → Stop the loop immediately

1. Find the Largest Number

Use a variable that remembers the largest value so far.

let largest = array[0];


for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}


console.log(largest);
Example
const numbers = [12, 7, 25, 3, 18];

Output:

25

Remember:

Start with array[0].

Loop starts at 1.

Replace largest when you find a bigger number.

2. Find the Smallest Number

This is the opposite of finding the largest.

let smallest = array[0];


for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
        smallest = array[i];
    }
}
Example
const numbers = [12, 7, 25, 3, 18];

Output:

3

Memory trick:

> → Bigger

< → Smaller

3. Find the Largest Value and Its Index

Sometimes you need both the value and where it is.

let largest = array[0];
let index = 0;


for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
        index = i;
    }
}
Example
const scores = [55, 88, 91, 73, 99];

Output:

Largest: 99
Index: 4
Important

When the largest changes:

largest = array[i];
index = i;

Both variables change together.

4. Find the Smallest Value and Its Index

Same idea, but use <.

let smallest = array[0];
let index = 0;


for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
        smallest = array[i];
        index = i;
    }
}

Example:

const lapTimes = [82, 76, 79, 71, 85];

Output:

Fastest: 71
Index: 3
5. Reverse an Array (Without .reverse())

Create a new array and read the original backwards.

const result = [];


for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
}


console.log(result);
Example
const numbers = [1, 2, 3, 4];

Output:

[4, 3, 2, 1]
Why array.length - 1?

Array
length
Last Index
[1,2,3]

3

	

2




[10,20,30,40]

	

4

	

3




["A","B"]

	

2

	

1

The last index is always:

array.length - 1
6. Reading Loops Like a Programmer (Loop Detective)

Instead of guessing, trace the variables.

Example:

let total = 0;


for (let i = 1; i <= 4; i++) {
    total += i;
}

Trace:

i

	

total




1

	

1




2

	

3




3

	

6




4

	

10

Final:

10
Detective Checklist

Whenever you see a loop:

What variables exist?

What is the loop condition?

What changes each iteration?

Trace the values in a small table.

7. Nested Loops

A nested loop is a loop inside another loop.

for (let i = 1; i <= 3; i++) {
    let row = "";


    for (let j = 1; j <= i; j++) {
        row += "*";
    }


    console.log(row);
}

Output:

*
**
***
The Golden Rule

Outer Loop (i)

	

Inner Loop (j)




Creates each row

	

Fills the row

Think:

i changes slowly, j changes quickly.

🧠 Your Complete Loop Toolbox

Goal

	

Variable/Pattern




Print every item

	

console.log(array[i])




Modify values

	

array[i] = ...




Build a new array

	

result.push(...)




Count

	

count++




Total

	

total += value




Search

	

found = true




Find index

	

index = i




Largest

	

largest = array[0]




Smallest

	

smallest = array[0]




Largest + Index

	

largest + index




Smallest + Index

	

smallest + index




Reverse array

	

for (i = length - 1; i >= 0; i--)




Stop early

	

break




Nested loops

	

i = rows, j = inside the row




Debug loops

	

Trace variables in a table

Quick Memory Tricks

count++ → How many?

total += value → How much?

found = true → Does it exist?

index = i → Where is it?

largest → Biggest so far

smallest → Smallest so far

array.length - 1 → Last index

break → Stop the loop immediately