📘 JavaScript String Methods Cheat Sheet
🧵 Creating Strings
let single = 'Hello';
let double = "World";
let template = `Hello World`;
🔒 String Immutability

Strings cannot be changed directly.

let name = "John";

name[0] = "M"; // ❌ Doesn't work

name = "Mike"; // ✅ Create new string
➕ String Concatenation
Using +
let first = "John";
let last = "Doe";

let full = first + " " + last;
Using +=
let greeting = "Hello";
greeting += ", John!";
Using .concat()
let result = "Hello".concat(" ", "World");
🖨 console.log()

Used to display output in the console.

console.log("Hello");
console.log(5);
console.log("Age:", 25);
🔍 typeof

Checks data types.

typeof "Hello"; // "string"
typeof 42;      // "number"
typeof true;    // "boolean"

⚠️ Weird bug:

typeof null; // "object"
🔢 Bracket Notation

Access characters using indexes.

let text = "hello";

text[0]; // "h"
text[1]; // "e"
Last Character
let text = "hello";

text[text.length - 1]; // "o"
📏 .length

Returns string length.

let word = "JavaScript";

console.log(word.length); // 10
↩️ Escape Characters
Escape	Meaning
\n	New line
\"	Double quote
\'	Single quote
\\	Backslash

Example:

console.log("Hello\nWorld");
✨ Template Literals

Use backticks ` `

let name = "Alice";

console.log(`Hello, ${name}!`);
Multiline Strings
let poem = `Roses are red,
Violets are blue`;
🔎 .indexOf()

Finds substring position.

let text = "JavaScript";

text.indexOf("Script"); // 4

Returns:

index if found
-1 if not found
❓ .includes()

Checks if substring exists.

let text = "JavaScript";

text.includes("Java"); // true

⚠️ Case-sensitive

✂️ .slice()

Extracts part of a string.

let text = "JavaScript";

text.slice(0, 4); // "Java"
Negative Indexes
let text = "JavaScript";

text.slice(-6); // "Script"
🔠 .toUpperCase()

Converts to uppercase.

"hello".toUpperCase(); // "HELLO"
🔡 .toLowerCase()

Converts to lowercase.

"HELLO".toLowerCase(); // "hello"
🔄 .replace()

Replaces part of a string.

let text = "I love JavaScript";

text.replace("JavaScript", "coding");
// "I love coding"

⚠️ Replaces first match only.

🔁 .repeat()

Repeats a string.

"Hi ".repeat(3);

// "Hi Hi Hi "
👨‍💻 prompt()

Gets user input.

let name = prompt("Enter your name");

console.log(name);

Returns:

user input as string
null if canceled
🔢 ASCII Methods
.charCodeAt()

Character → Number

"A".charCodeAt(0); // 65
String.fromCharCode()

Number → Character

String.fromCharCode(65); // "A"
🧠 Common String Patterns
Check if text exists
if (text.includes("JavaScript")) {
  console.log("Found!");
}
Case-insensitive comparison
if (input.toLowerCase() === "yes") {
  console.log("Confirmed");
}
Get initials
let name = "John Doe";

let initials = name[0] + name[5];
Repeat characters
console.log("*".repeat(10));
⚠️ Important Notes

✅ Strings are immutable
✅ Most string methods return NEW strings
✅ String indexes start at 0
✅ Many string methods are case-sensitive

🚀 Most Important Methods to Memorize
Method	Purpose
.length	Get length
[]	Access characters
.slice()	Extract text
.includes()	Check existence
.indexOf()	Find position
.replace()	Replace text
.toUpperCase()	Uppercase
.toLowerCase()	Lowercase
.repeat()	Repeat string
🧠 Golden Rule

👉 Modern JavaScript heavily uses:

Template literals
.includes()
.slice()
.replace()
.toLowerCase()


📘 JavaScript null vs undefined in Comparisons – Quick Notes
🔹 What are null and undefined?
🔹 undefined

Means a value was never assigned.

let x;
console.log(x); // undefined

Also happens when:

function parameters are missing
variables are declared but not set
🔹 null

Means intentional empty value

let x = null;
console.log(x); // null

👉 You manually assign it

🔹 Key Difference
Type	Meaning
undefined	not assigned
null	intentionally empty
🔹 Equality (==) Comparison

With ==, JavaScript does type coercion.

console.log(null == undefined); // true

Because JavaScript treats them as “loosely equal”.

Important rule:

null==undefined=true

🔹 Strict Equality (===)

No type conversion happens.

console.log(null === undefined); // false

Because:

different types
different meanings
🔹 null with other values
console.log(null == 0);   // false
console.log(null == "");   // false

So:

null

=0andnull

=""

🔹 Strange behavior of null in comparisons
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

Why this happens:

null becomes 0 in numeric comparison
but NOT in equality comparison

So:

null→0 (in numeric comparisons)

🔹 undefined in comparisons

undefined becomes NaN in math operations.

console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false

Because:

undefined→NaN

And:

NaN is never equal or comparable

🔹 Summary of Behavior
Expression	Result
null == undefined	true
null === undefined	false
null > 0	false
null >= 0	true
undefined > 0	false
undefined < 0	false
🔹 Key Insight
⚠️ Dangerous part:

null behaves inconsistently in comparisons.

⚠️ undefined:

always becomes invalid in numeric operations (NaN).

🔹 Best Practice

Always use:

===

and

!==

Because:

No type coercion
More predictable
Prevents hidden bugs
🔹 Simple Rule to Remember
null = intentional empty value
undefined = missing value
== → loose and unpredictable
=== → safe and recommended
🔹 Final Takeaway

👉 Always prefer strict comparison:

null === undefined // false (clear and safe)

This helps you avoid confusing JavaScript type coercion bugs in real applications.

What Are Switch Statements and How Do They Differ from If/Else Chains?
switch statements and if/else if/else chains are both control flow structures in programming that allow us to execute different code blocks based on certain conditions. However, they have distinct characteristics and use cases.

A switch statement evaluates an expression and matches its value against a series of case clauses. When a match is found, the code block associated with that case is executed. Here's a basic structure of a switch statement:

switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression doesn't match any case
}
The break statement at the end of each case is crucial. It tells the program to exit the switch block once a matching case has been executed. Without it, the program would continue executing subsequent cases, a behavior known as "fall-through".

switch statements are typically used when you're comparing a single variable against multiple possible values. They're especially useful when you have many potential conditions to check against a single variable. Here is an example using a switch statement for the days of the week:

let dayOfWeek = 3; 

switch (dayOfWeek) {
    case 1:
        console.log("It's Monday! Time to start the week strong.");
        break;
    case 2:
        console.log("It's Tuesday! Keep the momentum going.");
        break;
    case 3:
        console.log("It's Wednesday! We're halfway there.");
        break;
    case 4:
        console.log("It's Thursday! Almost the weekend.");
        break;
    case 5:
        console.log("It's Friday! The weekend is near.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    case 7:
        console.log("It's Sunday! Rest and recharge.");
        break;
    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");
}
switch statements can be more readable and concise when dealing with many possible values for a single variable.

if/else if statements on the other hand are more flexible. They can evaluate complex conditions and different variables in each clause. This makes them suitable for a wider range of scenarios. Here is an example of when you might use an if/else statement over a switch statement:

let creditScore = 720; 
let annualIncome = 60000; 
let loanAmount = 200000; 

let eligibilityStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
    eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && annualIncome >= 50000) {
    eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
    eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
    eligibilityStatus = "Not eligible due to low credit score.";
} else {
    eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);
In this example, we have a person’s annual income and credit score and checking what types of loan they would qualify for. Since we are dealing with more complex logical evaluations and multiple variables, it is better to use an if/else statement here versus a switch statement.

It's worth noting that switch statements in JavaScript use strict comparison (===), which means they don't perform type coercion. This can be an advantage in terms of predictability and avoiding subtle bugs.

In summary, while both switch statements and if/else if chains allow for multiple-branch logic in your code, they have different strengths. switch statements excel at handling multiple possible values for a single variable, while if/else if chains offer more flexibility for complex conditions. The choice between them often comes down to the specific requirements of your code and personal or team coding style preferences.
📘 Switch Statements vs If/Else Chains in JavaScript – Quick Notes
🔹 What is a switch statement?

A switch statement is a control structure that:

Checks one value
Compares it against multiple possible cases
Runs matching code block
🔹 Basic Syntax
switch (expression) {
  case value1:
    // code
    break;

  case value2:
    // code
    break;

  default:
    // fallback code
}
🔹 Example
let dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

Output:

Wednesday
🔹 Why break is important ⚠️

Without break, JavaScript continues running the next cases.

This is called fall-through.

let num = 2;

switch (num) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}

Output:

Two
Three
🔹 How switch works

expression===case value

👉 It uses strict equality (===)

So:

no type conversion
very predictable
🔹 What is if/else?

Used for flexible conditions

It can check:

multiple variables
complex logic
ranges and comparisons
🔹 Example
let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
🔹 Key Difference
Feature	switch	if/else
Best for	one variable	complex logic
Comparison	strict ===	flexible
Readability	many fixed values	conditions & ranges
🔹 When to use switch

Use when:

comparing one variable
many fixed values
cleaner structure needed

Example:

days of week
menu options
status codes
🔹 When to use if/else

Use when:

multiple conditions
comparisons (>, <, &&, ||)
different variables involved

Example:

loan approval logic
login validation
grading systems
🔹 Real Comparison Example
switch (simple matching)
let role = "admin";
switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
}
if/else (complex logic)
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed");
} else {
  console.log("Denied");
}
🔹 Important Insight
switch = clean for exact matches
if/else = powerful for logic decisions
🔹 Final Takeaway

👉 Use switch when checking one value against many options

👉 Use if/else when dealing with:

ranges
multiple conditions
complex logic

If you want, I can next turn everything you’ve learned into a 
full JavaScript Operators + Conditions cheat sheet for revision or give you 
real practice challenges (like exams).

Branched from JavaScript Number Types

Turn everything I’ve learned into a full JavaScript Operators + Conditions cheat sheet for revision
📘 JavaScript Operators + Conditions Cheat Sheet
🔹 JavaScript Number Types

JavaScript uses one main numeric type:

number

Examples:

const integer = 10;
const float = 4.5;
const negative = -7;
Special Number Values
Infinity
console.log(1 / 0); // Infinity
NaN (Not a Number)
console.log("hello" / 2); // NaN
🔹 Arithmetic Operators
Operator	Meaning
+	Addition
-	Subtraction
*	Multiplication
/	Division
%	Remainder
**	Exponent
Examples
10 + 5   // 15
10 - 5   // 5
10 * 5   // 50
10 / 5   // 2
10 % 3   // 1
2 ** 3   // 8
🔹 Operator Precedence

JavaScript follows math order rules.

Example:

2 + 3 * 4 // 14

Because:

2+(3×4)=14

Use parentheses to control order:

(2 + 3) * 4 // 20

(2+3)×4=20

🔹 Increment & Decrement
Operator	Meaning
++	Add 1
--	Subtract 1
Prefix
let x = 5;
console.log(++x); // 6
Postfix
let y = 5;
console.log(y++); // 5
console.log(y);   // 6
🔹 Compound Assignment Operators
Operator	Equivalent
+=	x = x + y
-=	x = x - y
*=	x = x * y
/=	x = x / y
%=	x = x % y
**=	x = x ** y

Example:

let num = 5;
num += 2;

console.log(num); // 7
🔹 Type Coercion

JavaScript automatically converts types.

Number + String
5 + "10" // "510"

String concatenation happens.

Other Operations
"10" - 5 // 5
"10" * 2 // 20
"20" / 2 // 10

Strings become numbers.

Invalid Numeric String
"abc" - 5 // NaN
🔹 Boolean Values

Booleans have only two values:

true
false

Example:

let isLoggedIn = true;
🔹 Equality Operators
Operator	Meaning
==	Loose equality
===	Strict equality
!=	Loose inequality
!==	Strict inequality
Loose Equality
5 == "5" // true

Type coercion occurs.

Strict Equality
5 === "5" // false

No type coercion.

🔹 Comparison Operators
Operator	Meaning
>	Greater than
<	Less than
>=	Greater or equal
<=	Less or equal

Example:

10 > 5 // true
🔹 Unary Operators
Operator	Purpose
+	Convert to number
-	Negate value
!	Logical NOT
typeof	Get type
Examples
+"42" // 42
-"42" // -42
!true // false
typeof "hello" // string
🔹 Logical Operators
Operator	Meaning
&&	AND
`	
??	Nullish coalescing
AND (&&)

Returns first falsy value.

true && "hello" // "hello"
0 && 5 // 0
OR (||)

Returns first truthy value.

0 || "Guest" // "Guest"
Nullish Coalescing (??)

Only checks null and undefined.

null ?? "default" // "default"
🔹 Truthy & Falsy Values
Falsy Values
false
0
""
null
undefined
NaN

Everything else is truthy.

🔹 If Statements
if (condition) {
  // code
}

Example:

if (5 > 2) {
  console.log("True");
}
🔹 if / else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
🔹 else if
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
🔹 Ternary Operator

Short form of if/else.

Syntax:

condition ? trueValue : falseValue

Example:

const result = age >= 18 ? "Adult" : "Minor";
🔹 Switch Statements

Best for checking one value against many options.

switch(day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid");
}
🔹 Important About break

Without break, switch continues running other cases.

This is called:

fall-through
🔹 Null vs Undefined
Type	Meaning
null	intentional empty value
undefined	value not assigned
Comparisons
null == undefined // true
null === undefined // false
🔹 isNaN() vs Number.isNaN()
isNaN()

Converts values first.

isNaN("37") // false
Number.isNaN()

Strict check.

Number.isNaN(NaN) // true

✅ Recommended.

🔹 parseFloat() & parseInt()
parseFloat()
parseFloat("3.14px") // 3.14
parseInt()
parseInt("42px") // 42
🔹 toFixed()

Formats decimal places.

let num = 3.14159;

console.log(num.toFixed(2)); // "3.14"

Returns a string.

🔹 Math Object
Method	Purpose
Math.random()	Random number
Math.min()	Smallest value
Math.max()	Largest value
Math.ceil()	Round up
Math.floor()	Round down
Math.round()	Nearest integer
Math.trunc()	Remove decimals
Math.sqrt()	Square root
Math.cbrt()	Cube root
Math.abs()	Absolute value
Math.pow()	Power
Examples
Math.floor(4.9) // 4
Math.ceil(4.1) // 5
Math.round(4.5) // 5
Random Number Example
Math.floor(Math.random() * 10) + 1

Generates:

1≤x≤10

🔹 Bitwise Operators
Operator	Meaning
&	AND
`	`
^	XOR
~	NOT
<<	Left shift
>>	Right shift

Example:

5 & 3 // 1
5 | 3 // 7
🔹 Most Important Best Practices

✅ Prefer:

===
!==

Instead of:

==
!=

✅ Use:

Number.isNaN()

instead of isNaN().

✅ Use parentheses for clear math:

(2 + 3) * 4

✅ Use ternary only for simple conditions.

🔹 Final Revision Summary
Operators
Arithmetic
Comparison
Logical
Unary
Bitwise
Assignment
Conditions
if
else if
else
ternary
switch
Important Concepts
Truthy/Falsy
Type coercion
NaN
null vs undefined
Operator precedence
🚀 Core Rule to Remember

JavaScript often performs automatic type conversion, so:

use strict operators
write clear conditions
avoid relying on coercion unless intentional

📘 JavaScript Functions, Arrow Functions & Scope — Cheat Sheet
🔹 1. FUNCTIONS
What is a function?

A reusable block of code that performs a task or returns a value.

Declaring a function
function greet() {
  console.log("Hello!");
}
Calling a function
greet();
Parameters vs Arguments
Parameters = placeholders in function definition
Arguments = actual values passed in
function greet(name) {
  console.log("Hello " + name);
}

greet("Alice");
Return value
Functions return undefined by default
Use return to output a value
function add(a, b) {
  return a + b;
}

let result = add(2, 3); // 5
Anonymous function

Function without a name

const sum = function (a, b) {
  return a + b;
};
Default parameters
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet(); // Guest
🔹 2. ARROW FUNCTIONS (=>)
Basic syntax

Shorter way to write functions

const greet = (name) => {
  console.log("Hello " + name);
};
Rules
One parameter (parentheses optional)
const greet = name => console.log(name);
No parameters (parentheses required)
const hello = () => console.log("Hello");
One-line function (implicit return)
const add = (a, b) => a + b;
Arrow function vs regular function
Feature	Regular Function	Arrow Function
Syntax length	Longer	Shorter
function keyword	Yes	No
return needed	Yes (usually)	Optional (implicit)
🔹 3. SCOPE
What is scope?

Scope = where variables can be accessed in code.

1. Global Scope 🌍

Declared outside functions → accessible everywhere

let globalVar = "I am global";

function test() {
  console.log(globalVar);
}
2. Local Scope (Function Scope) 🔒

Declared inside a function → only usable inside it

function test() {
  let localVar = "I am local";
  console.log(localVar);
}

❌ Outside access causes error:

console.log(localVar); // error
3. Block Scope { }

Applies to let and const inside { }

if (true) {
  let blockVar = "inside block";
  console.log(blockVar);
}

❌ Outside block:

console.log(blockVar); // error
Scope summary table
Scope	Where it works
Global	Anywhere
Local (function)	Inside function only
Block	Inside { } only
🔹 KEY TAKEAWAYS
Functions = reusable code blocks
Parameters receive input, arguments provide it
return sends output from a function
Arrow functions = shorter function syntax
Scope controls where variables can be accessed
let and const follow block scope
Global variables should be used carefully



JavaScript Arrays 

A compact study sheet covering array basics, indexing, updates, push/pop/shift/unshift, 1D vs 2D arrays, destructuring, reversing strings with arrays, indexOf, splice, includes, and shallow copies.

1. What Is an Array?

An array is an ordered collection of values stored in a single variable.

Arrays can contain different data types: numbers, strings, booleans, objects, and even other arrays.

2. Zero-Based Indexing & Accessing Elements

Arrays start counting at 0.

Index

	

Value




0

	

apple




1

	

banana




2

	

orange

Accessing a missing index returns undefined.

3. Updating Elements & Adding by Index

Avoid assigning far beyond the current length, or you create empty/undefined slots.

4. Array length Property
5. Adding/Removing at the Beginning & End

Method

	

Where

	

Action

	

Returns


push()	

End

	

Add element(s)

	

New length


pop()	

End

	

Remove last element

	

Removed element


unshift()	

Beginning

	

Add element(s)

	

New length


shift()	

Beginning

	

Remove first element

	

Removed element

const arrays can still be mutated (push/pop/etc.), but you cannot reassign the variable.

6. One-Dimensional vs Two-Dimensional Arrays
1D Array (single list)
2D Array (array of arrays / grid)

Use array[row][column] for 2D access.

7. Array Destructuring
Basic destructuring
Skipping elements
Default values
Rest syntax (...rest)

Rule: ...rest must be the last item in the pattern.

8. Reversing a String with split() + reverse() + join()

Strings are immutable, so convert to an array, reverse, then join.

Remember: split → reverse → join.

9. Finding an Index with indexOf()

indexOf(value, fromIndex) starts searching at fromIndex.

Returns: first matching index, or -1 if not found.

10. Adding/Removing in the Middle with splice()

splice() mutates the original array and returns an array of removed items.

Remove from the middle
Insert into the middle
Replace elements
Remove by value using indexOf() + splice()
Clear an array

Cheat sheet:

Action

	

Example




Remove 1 item

	splice(i, 1)


Insert item

	splice(i, 0, item)


Replace item

	splice(i, 1, item)


Clear array

	splice(0)
11. Checking for Existence with includes()

includes(value, fromIndex) starts searching at fromIndex.

Important:

Case-sensitive for strings.

Uses strict equality (===), so 2 and "2" are different.

Difference from indexOf:

Method

	

Returns

	

Purpose


includes()	true / false	

Check existence


indexOf()	

Index or -1

	

Find position

12. Shallow Copies of Arrays

A shallow copy creates a new outer array, but nested arrays/objects are still shared references.

Common shallow-copy methods

All three create a new top-level array object.

Memory trick: Shallow = surface only — the outer array is copied; nested structures are shared.

13. Common Patterns to Memorize

Task

	

Pattern




Access element

	arr[i]


Update element

	arr[i] = value


Add to end

	arr.push(value)


Remove from end

	arr.pop()


Add to start

	arr.unshift(value)


Remove from start

	arr.shift()


Find index

	arr.indexOf(value)


Check existence

	arr.includes(value)


Insert/remove in middle

	arr.splice(start, deleteCount, ...items)


Shallow copy

	

[...arr] or arr.slice()




Reverse a string

	str.split("").reverse().join("")


Destructure array

	const [a, b, ...rest] = arr
14. Mini Flashcards (Prompt → Answer)

Prompt

	

Answer




What index does the first array element have?

	0


What does arr[missingIndex] return?

	undefined


Which method adds to the end and returns the new length?

	push()


Which method removes the last element and returns it?

	pop()


Which method adds to the beginning and returns the new length?

	unshift()


Which method removes the first element and returns it?

	shift()


What does indexOf() return when a value is not found?

	-1


What does includes() return?

	

true or false




Which method can insert, remove, or replace elements anywhere in an array?

	splice()


What is the reverse-string one-liner?

	str.split("").reverse().join("")


What does const [a, b] = arr do?

	

Array destructuring: assigns the first two elements to a and b.




What is a shallow copy?

	

A new outer array with the same top-level elements; nested arrays/objects remain shared references.




Give one shallow-copy method.

	

[...arr], arr.slice(), or [].concat(arr).




What is the difference between 1D and 2D arrays?

	

1D uses one index (arr[i]); 2D uses row and column indices (arr[r][c]).




Can a const array be mutated?

	

Yes (push/pop/splice/etc.); the variable cannot be reassigned.

Final memory anchors

Arrays start at 0.
push/pop = end, unshift/shift = beginning.
indexOf = position, includes = existence.
splice = cut/insert/replace in the middle.
Destructuring = unpack array values into variables.
Reverse string = split → reverse → join.
Shallow copy copies the outer array, not nested structures.
2D arrays are arrays of arrays: use array[row][column].