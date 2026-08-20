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