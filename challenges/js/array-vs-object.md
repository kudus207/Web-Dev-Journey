##### Array vs Object

# Array []                                    Object {}
Stores a list of items                      Stores details about one thing
Ordered                                     Uses key-value pairs
Access with index arr[0]                    Access with key obj.name
	

# Array
const fruits = ["apple", "banana", "orange"];

# Object
const user = {
  name: "Kudus",
  age: 25
};

### Memory trick:
[] = "Many things."                 {} = "One thing with many details."



### When to use each
# Situation                           Use
List of products                      Array
Student's information                 Object
List of students                      Array of Objects
Product with colors and sizes         Object with Arrays
	

# Array of Objects (Most Common)
const students = [
  { name: "Ada", score: 90 },
  { name: "John", score: 75 }
];
##### Think: Many students, each student has details.

# Object with Arrays
const product = {
  name: "Shoe",
  colors: ["Black", "White"],
  sizes: [40, 41, 42]
};
##### Think: One product, some properties are lists.