// Changing Array Element With a Loop
const numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}

console.log(numbers) // [2, 4, 6, 8]



// Building a New Array With a Loop
const numbers = [1, 2, 3, 4];
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4]
console.log(doubledNumbers); // [2, 4, 6, 8]

// Counting Things With a Loop
const numbers = [2, 5, 8, 3, 10];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        count++;
    }
}

console.log(count); // 2


// Adding Values With a Loop
const numbers = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log(total); // 100


// Searching With a Loop
const numbers = [10, 20, 30, 40, 50];

let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 30) {
        found = true;
    }
}

console.log(found); // true


// Finding the Position (Index) of an Item
const names = ["John", "Mary", "David", "Sarah"];

let index = -1;
              // Why We Start With -1
              // We'll create a variable:
              // let index = -1;
              // You might wonder:
              // Why not 0?
              // Because 0 is already a real index.
              // Look at this array:
              // 0  1  2  3
              // If we started with:
              // let index = 0;
              // we wouldn't know whether:
              // we actually found the first item, or
              // we never found anything.
              // So programmers use:
              // let index = -1;
              // because -1 is not a valid array index.
              // Think of it as:
              // -1 = "Not found yet."
for (let i = 0; i < names.length; i++) {
    if (names[i] === "David") {
        index = i;
        break;
    }
}

console.log(index); // 2


// Nested Loops (A Loop Inside Another Loop)
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }

    }   // The outer loop runs.
        // Inside each outer loop, the inner loop runs from beginning to end.
        // Final output:
        // 1 1
        // 1 2
        // 2 1
        // 2 2
        // 3 1
        // 3 2

for (let i = 1; i <= 3; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row); // *
                      // **
                      // ***
 }    

for (let i = 1; i <= 4; i++) {

    let row = "";

    for (let j = 1; j <= 4; j++) {
        row += "#";
    }

    console.log(row); // ####
                      // ####
                      // ####
                      // ####
}

// Trace a Loop Like a Programmer

  // Example 1: Counting Up
  for (let i = 1; i <= 3; i++) {
      console.log(i);
  }

  // Example 2: A Running Total
  let total = 0;


  for (let i = 1; i <= 4; i++) {
      total += i;
  }

  // Example 3: Working With an Array
  const numbers = [5, 10, 15];


  for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
  }

  // Example 4: Count Detective
  const numbers = [2, 7, 4, 9];


  let count = 0;


  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 5) {
          count++;
      }
  }

  // Example 5: Total Detective
  const prices = [100, 50, 200];


  let total = 0;


  for (let i = 0; i < prices.length; i++) {
      total += prices[i];
  }

  // Example 6: Search Detective
  const names = ["John", "Mary", "David"];


  let found = false;


  for (let i = 0; i < names.length; i++) {
      if (names[i] === "Mary") {
          found = true;
          break;
      }
  }

  // Example 7: Nested Loop Detective

  // This is where tracing really helps.

  for (let i = 1; i <= 2; i++) {


      for (let j = 1; j <= 3; j++) {
          console.log(i, j);
      }


  }

  // Instead of getting overwhelmed, remember:

  // i changes slowly.

  // j restarts every time.


// Find the Largest Number (Maximum)
const numbers = [12, 7, 25, 3, 18];

 let largest = numbers[0];    // Why not 0?

                              // Because what if the array is:

                              // [-10, -5, -20]

                              // The largest is -5.

                              // If we started with:

                              // let largest = 0;

                              // we'd get the wrong answer.

                              // So we start with the first number in the array.

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];  
    }
}

console.log(largest); // 25

// Find the Smallest Number
const numbers = [45, 72, 18, 91, 66];
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log(smallest); // 18


// Find the Highest Score and Its Position
const scores = [55, 88, 91, 73, 99, 84];

let largest = scores[0]; //We already know the first score is our starting "champion." So its index is already known: largest = 55
                         // index = 0
                         // let index = 0;

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > largest) {
        largest = scores[i];
        index = i;
    }
}

console.log(largest); // 99 
console.log(index); // 4

// Reverse an Array (Manually)
const numbers = [10, 20, 30, 40, 50];
let result = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    result.push(numbers[i]);
}

console.log(result); // [50, 40, 30, 20, 10]

// Counting Vowels in a String
const word = "javascript";
const vowels = "aeiou";

let count = 0;

for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
        count++;
    }
}

console.log(count); // 3

// Count Words in a Sentence (Using a Loop)
const sentence = "I love JavaScript";

let count = 0;

for (let i = 0; i < sentence.length; i++) {
    if (
        sentence[i] !== " " &&
        (i === 0 || sentence[i - 1] === " ")
    ) {
        count++;
    }
}

console.log(count); // 3

// Count Consonants in a Sentence
const sentence = "I love JavaScript";
const lowerSentence = sentence.toLowerCase();
const vowels = "aeiou";

let count = 0;

for (let i = 0; i < lowerSentence.length; i++) {
    if (
        lowerSentence[i] !== " " &&
        !vowels.includes(lowerSentence[i])
    ) {
        count++;
    }
}

console.log(count); // 9

// Remove Duplicates Using Nested Loops
const numbers = [2, 4, 2, 7, 4, 9];
const result = [];

for (let i = 0; i < numbers.length; i++) {

    let found = false;

    for (let j = 0; j < result.length; j++) {
        if (numbers[i] === result[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        result.push(numbers[i]);
    }

}

console.log(result); // [2, 4, 7, 9]

// Finding Common Elements Between Two Arrays
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

const result = [];

for (let i = 0; i < first.length; i++) {

    for (let j = 0; j < second.length; j++) {

        if (first[i] === second[j]) {
            result.push(first[i]);
            break;
        }

    }

}

console.log(result); // [3, 4]

// Filtering an Array With a Loop
const numbers = [5, 12, 8, 20, 3];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        result.push(numbers[i]);
    }
}

console.log(result); // [12, 20]

// Transforming an Array With a Loop
const numbers = [2, 4, 6, 8];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 3);
}

console.log(result); // [6, 12, 18, 24]

// Filter + Tansform
const numbers = [2, 5, 8, 11, 14, 17];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        result.push(numbers[i] * 3);
    }
}

console.log(result); // [ 6, 24, 42 ]

// break vs continue
//break
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        break;
    }

    console.log(numbers[i]); // 1 2
} 

//continue
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        continue;
    }

    console.log(numbers[i]); // 1 2 4 5
}

// The for...of Loop
// for...of useful when you need only the value, compared to for loop when you want the index and position
const scores = [70, 85, 90, 60];

for (const score of scores) {
  if (score >= 70) {
    console.log(score);
  }
} 

// The for...in Loop
//for...in gives you the keys/property names.
//And this becomes especially useful with objects.
const person = {
  name: "John",
  age: 25,
  country: "Nigeria"
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}

// while Loops
//A while loop checks the condition before every iteration.
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// Remember the three steps

// Start with a variable.

// Check the condition before every iteration.

// Update the variable inside the loop.

// for vs while

// for
// Known number of repetitions
// Counter built into the loop
// Great for arrays

	
// while
// Unknown number of repetitions
// Counter managed by you
// Great for "keep going until..." situations


// Biggest danger

// Forget to update the variable:

while (i <= 5) {
  console.log(i);
}

// Result:

// Infinite loop.
// Always ask:
// "What changes so the condition eventually becomes false?"


// do...while loop
//A do...while loop always runs the code once before checking the condition.

let i = 3;

do {
  console.log(i);
  i--;
} while (i >= 1);