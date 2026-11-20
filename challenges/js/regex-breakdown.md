# Understanding basic regex patterns
A regular expression is simply a pattern used to find particular text.

For example, imagine you have this sentence:
const sentence = "I love learning JavaScript";

You want to check whether the word JavaScript exists in that sentence.
const pattern = /JavaScript/;
console.log(pattern.test(sentence)); //true

Let's understand the important parts.
- /JavaScript/ is our regular expression.
- JavaScript is the pattern we're searching for.
- .test() checks whether the text contains something matching that pattern.
- true means a match was found.

# Regex is case-sensitive by default
const pattern = /hello/;
console.log(pattern.test("hello world")); //true
console.log(pattern.test("Hello world")); //false

Why?
Because lowercase hello and uppercase Hello are different.
We can solve this using the i flag:
const pattern = /hello/i;
console.log(pattern.test("hello world")); //true
console.log(pattern.test("Hello world")); //true
console.log(pattern.test("HELLO WORLD")); //true

# Character boundaries and anchors
Two important symbols are:
- ^ — matches the beginning of a string.
- $ — matches the end of a string.

const regex = /^dog$/;
console.log(regex.test("dog"));      // true
console.log(regex.test("doghouse")); // false
console.log(regex.test("hotdog"));   // false
console.log(regex.test("Dog"));      // false

Let's understand /^dog$/:
- ^ says the match must start at the beginning.
- dog is the text we're looking for.
- $ says the match must finish at the end.
Together, they mean: the entire string must be exactly dog.

# Character classes [ ]
Imagine you want to find a word, but you don't care whether it contains a, e, or i in a particular position.
const regex = /c[aei]t/;
console.log(regex.test("cat")); // true
console.log(regex.test("cet")); // true
console.log(regex.test("cit")); // true
console.log(regex.test("cot")); // false

What does [aei] mean?
It means match any ONE character from the characters inside the brackets.
Let's break down /c[aei]t/:
- c means the letter c must appear.
- [aei] means the next character can be a, e, or i.
- t means the next character must be t.
Therefore, it matches:
- cat
- cet
- cit
But not cot.
# Important: [aei] matches one character, not all three.

# Character ranges
You don't always have to list every character individually.
For example:
/[abcde]/
Can be shortened to:
/[a-e]/
Both mean match one character between a and e.
Other examples:
Pattern	Meaning
[a-z]	Any lowercase letter
[A-Z]	Any uppercase letter
[0-9]	Any digit
[a-zA-Z]	Any uppercase or lowercase letter
[a-zA-Z0-9]	Any letter or digit
Notice that the hyphen - represents a range when used between characters inside a character class.

# Negated character classes [^ ]
So far, we've used square brackets to specify which characters we want to match.
But what if we want the opposite?
For example, imagine you want to match any character except a, b, or c.
You can write:
/[^abc]/
The ^ inside the square brackets means something different from the ^ we learned earlier.
Compare:
Regex	  Meaning
/^cat/	  Match cat at the beginning of a string
/[^abc]/  Match any character except a, b, or c

# Important: The position of ^ matters.
- Outside square brackets, ^ means beginning of the string.
- At the beginning inside square brackets, ^ means NOT these characters.
const regex = /[^abc]/;
console.log(regex.test("abc"));  // false
console.log(regex.test("abd"));  // true
console.log(regex.test("hello")); // true
console.log(regex.test("123"));  // true
Why?
- "abc" contains only excluded characters. No match.
- "abd" contains d, which is allowed. Match.
- "hello" contains characters other than a, b, and c. Match.
- "123" contains numbers, which are allowed. Match.
Notice that .test() only needs to find one allowed character to return true.

# Shorthand character classes
JavaScript regex provides shorthand patterns for commonly used character groups.
Shorthand	Meaning	Equivalent
\d	Any digit	[0-9]
\D	Any non-digit	[^0-9]
\w	Word character	[A-Za-z0-9_]
\W	Non-word character	[^A-Za-z0-9_]
\s	Whitespace	Spaces, tabs, newlines
\S	Non-whitespace	Anything except whitespace

Let's understand them individually.
1. \d and \D
const digitRegex = /\d/;
const nonDigitRegex = /\D/;

console.log(digitRegex.test("hello"));  // false
console.log(digitRegex.test("hello5")); // true

console.log(nonDigitRegex.test("123"));  // false
console.log(nonDigitRegex.test("12a3")); // true

Remember:
- \d finds a digit.
- \D finds something that isn't a digit.

2. \w and \W
const wordRegex = /\w/;
const nonWordRegex = /\W/;

console.log(wordRegex.test("hello")); // true
console.log(wordRegex.test("@@@"));   // false

console.log(nonWordRegex.test("hello")); // false
console.log(nonWordRegex.test("hello!")); // true

# One thing to remember: \w includes letters, digits and underscores (_). It doesn't mean every character that might appear in a human language word.

3. \s and \S
const spaceRegex = /\s/;
const nonSpaceRegex = /\S/;

console.log(spaceRegex.test("hello world")); // true
console.log(spaceRegex.test("hello"));       // false

console.log(nonSpaceRegex.test("   "));      // false
console.log(nonSpaceRegex.test("hello"));    // true

\s matches whitespace, including spaces, tabs and line breaks.

# Quantifiers
So far, we've learned how to specify the characters we want to find.
But what if we want to specify how many times a character should appear?
That's where quantifiers come in.
Let's start with three important ones.
1. The plus sign +
+ means one or more occurrences of the preceding character or pattern.
Example:
const regex = /a+/;
console.log(regex.test("a"));       // true
console.log(regex.test("aa"));      // true
console.log(regex.test("aaaa"));    // true
console.log(regex.test("banana"));  // true
console.log(regex.test("hello"));   // false
Notice that "banana" returns true because it contains a.
The important thing is that + requires at least one occurrence.

2. The asterisk *
* means zero or more occurrences of the preceding character or pattern.
Example:
const regex = /a*/;
console.log(regex.test("a"));      // true
console.log(regex.test("aaa"));    // true
console.log(regex.test("hello"));  // true
console.log(regex.test(""));       // true
Notice something interesting: even "hello" and an empty string return true.
Why?
Because * allows zero occurrences. The regex can match an empty string.

3. The question mark ?
? means zero or one occurrence of the preceding character or pattern.
Example:
const regex = /colou?r/;
console.log(regex.test("color"));  // true
console.log(regex.test("colour")); // true
console.log(regex.test("colouur")); // false
Here, u? means the letter u is optional.
It can appear once or not appear at all.

# Exact number of occurrences {}
What if you want exactly three digits?
Or between two and five letters?
Instead of repeatedly writing characters, we can use curly braces {}.
There are three common ways to use them.
1. Exactly a certain number
/a{3}/
Means match exactly three consecutive a characters.
const regex = /a{3}/;
console.log(regex.test("aaa"));  // true
console.log(regex.test("aa"));   // false
console.log(regex.test("aaaa")); // true
# Notice that "aaaa" returns true because the regex finds three consecutive a characters within it. It doesn't require the entire string to contain exactly three.

2. At least a certain number
/a{2,}/
Means two or more consecutive a characters.
const regex = /a{2,}/;
console.log(regex.test("a"));     // false
console.log(regex.test("aa"));    // true
console.log(regex.test("aaaa"));  // true

3. A range of occurrences
/a{2,4}/
Means between two and four consecutive a characters.
const regex = /a{2,4}/;
console.log(regex.test("a"));    // false
console.log(regex.test("aa"));   // true
console.log(regex.test("aaa"));  // true
console.log(regex.test("aaaa")); // true
console.log(regex.test("aaaaa")); // true
# Again, five a characters return true because the regex can find a sequence of four within the string.
Quick reference
Pattern	Meaning
a{3}	Exactly 3 consecutive a characters
a{2,}	At least 2 consecutive a characters
a{2,4}	Between 2 and 4 consecutive a characters

# Combining quantifiers with character classes
Imagine you're checking whether a string contains a number with at least three digits.
You could write:
const regex = /\d{3,}/;
console.log(regex.test("12"));      // false
console.log(regex.test("123"));     // true
console.log(regex.test("12345"));   // true
console.log(regex.test("abc123"));  // true
Let's break it down:
- \d means any digit.
- {3,} means at least three occurrences.
- Together, \d{3,} means at least three consecutive digits.
Notice how much shorter this is than writing [0-9]{3,}. They mean the same thing.

Another practical example: A four-digit PIN
Suppose you want to check whether someone entered exactly four digits.
You can write:
const pinRegex = /^\d{4}$/;
console.log(pinRegex.test("1234"));  // true
console.log(pinRegex.test("123"));   // false
console.log(pinRegex.test("12345")); // false
console.log(pinRegex.test("12a4"));  // false
Remember what we learned?
- ^ means beginning.
- \d means digit.
- {4} means exactly four consecutive digits.
- $ means end.
Together, they require the entire string to contain exactly four digits.
This is where everything starts coming together.

# Alternation | (OR)
Now let's learn how to match different alternatives.
Imagine you want to find either cat or dog.
You could write:
const regex = /cat|dog/;
console.log(regex.test("I have a cat")); // true
console.log(regex.test("I have a dog")); // true
console.log(regex.test("I have a bird")); // false
The vertical bar | means OR.
So /cat|dog/ means:
- Match cat, OR
- Match dog.
You can have more than two alternatives:
const regex = /cat|dog|bird/;
This matches any one of those three words.
Combining alternation with flags
Remember the i flag?
We can combine it with alternation:
const regex = /cat|dog/i;
console.log(regex.test("CAT")); // true
console.log(regex.test("Dog")); // true
console.log(regex.test("bird")); // false

# One important detail: Grouping ()
Consider this pattern:
const regex = /cat|dog123/;
It means:
- Match cat, OR
- Match dog123.
But what if you want to match cat123 or dog123?
You can use parentheses:
const regex = /(cat|dog)123/;
The parentheses group the alternatives together.
Now the pattern means:
- Match cat or dog.
- Then match 123.

# Grouping with parentheses ()
We've already briefly used parentheses with alternation. Now let's understand them properly.
Parentheses allow us to group parts of a regex together.
Think of them like grouping expressions in mathematics.
For example:
const regex = /(cat|dog)123/;
The parentheses group cat|dog together.
This means:
- Match either cat or dog.
- Then match 123.
console.log(regex.test("cat123")); // true
console.log(regex.test("dog123")); // true
console.log(regex.test("bird123")); // false
console.log(regex.test("cat")); // false
# Why is grouping useful?
Remember our quantifiers?
We can combine them with groups.
Consider:
const regex = /(ha)+/;
This means one or more repetitions of the entire group ha.
console.log(regex.test("ha"));     // true
console.log(regex.test("haha"));   // true
console.log(regex.test("hahaha")); // true
console.log(regex.test("h"));      // false
Notice the difference:
- /ha+/ means h followed by one or more a characters.
- /(ha)+/ means one or more repetitions of ha.
Those are two different patterns!