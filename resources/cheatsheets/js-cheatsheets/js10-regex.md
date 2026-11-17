# JavaScript Regular Expressions (Regex) Cheatsheet

## 1. What Is a Regular Expression (Regex)?

A **Regular Expression (Regex)** is a pattern used to search, match, validate, or replace text.

Regex is useful when working with:
- Email addresses.
- Phone numbers.
- Password validation.
- Usernames.
- Finding specific words or characters.
- Replacing unwanted text.
- Checking whether a string follows a particular format.

Example:

```js
const text = "I love JavaScript";

const pattern = /JavaScript/;

console.log(pattern.test(text)); // true
```

The regex `/JavaScript/` searches for the word `JavaScript` inside the string.

**Remember:** Regex describes what you want to find, not necessarily the exact string you want to compare.

---

## 2. Creating Regular Expressions

There are two common ways to create a regex in JavaScript.

### Regex literal

Write the pattern between forward slashes.

```js
const pattern = /hello/;
```

This is the most common and convenient way.

### RegExp constructor

Create a regex using `new RegExp()`.

```js
const pattern = new RegExp("hello");
```

Useful when the pattern needs to be created dynamically from a variable.

Example:

```js
const word = "hello";

const pattern = new RegExp(word);

console.log(pattern.test("hello world")); // true
```

### Difference

| Method | Example |
|---|---|
| Regex literal | `/hello/` |
| RegExp constructor | `new RegExp("hello")` |

---

## 3. Regex Literal Characters

A regex pattern is written between two forward slashes.

```js
const pattern = /hello/;
```

The forward slashes mark the beginning and end of the regex pattern.

Some characters have special meanings in regex, such as:

```text
. * + ? ^ $ { } [ ] ( ) | \
```

These are called **special characters** or **metacharacters**.

If you want to search for one of these characters literally, you usually need to escape it using a backslash.

Example:

```js
const pattern = /\./;

console.log(pattern.test("file.txt")); // true
```

Here, `\.` searches for an actual period rather than any character.

---

## 4. Character Classes

Character classes allow you to match specific characters or ranges of characters.

### `[abc]`

Matches any one character inside the brackets.

```js
/[abc]/
```

Matches:
- `a`
- `b`
- `c`

Example:

```js
console.log(/[abc]/.test("apple")); // true
console.log(/[abc]/.test("dog"));   // false
```

### `[a-z]`

Matches any lowercase letter from `a` to `z`.

```js
/[a-z]/
```

### `[A-Z]`

Matches any uppercase letter from `A` to `Z`.

```js
/[A-Z]/
```

### `[0-9]`

Matches any digit from `0` to `9`.

```js
/[0-9]/
```

### Combining ranges

```js
/[a-zA-Z0-9]/
```

Matches any one lowercase letter, uppercase letter, or digit.

### Negated character class `[^...]`

A caret (`^`) at the beginning of a character class means match anything except the listed characters.

```js
/[^0-9]/
```

Matches any character that is not a digit.

Example:

```js
console.log(/[^0-9]/.test("123a")); // true
console.log(/[^0-9]/.test("123"));  // false
```

**Remember:**
- `[abc]` → match one of these characters.
- `[^abc]` → match one character that is not among these characters.

---

## 5. Character Shorthand Classes

Regex provides shortcuts for commonly used character classes.

| Pattern | Meaning |
|---|---|
| `\d` | Any digit (`0-9`) |
| `\D` | Any non-digit |
| `\w` | Word character: letters, digits, underscore |
| `\W` | Any non-word character |
| `\s` | Whitespace character |
| `\S` | Any non-whitespace character |
| `.` | Any character except line terminators by default |

Examples:

```js
/\d/     // Contains a digit
/\D/     // Contains a non-digit
/\w/     // Contains a word character
/\W/     // Contains a non-word character
/\s/     // Contains whitespace
/\S/     // Contains non-whitespace
```

### Practical examples

```js
console.log(/\d/.test("hello5"));    // true
console.log(/\D/.test("123"));       // false
console.log(/\w/.test("hello"));     // true
console.log(/\s/.test("hello world")); // true
```

**Important:** `\w` is mainly ASCII letters, digits, and underscore. It does not represent every letter from every language.

---

## 6. The Dot `.`

The dot matches almost any single character except line terminators, unless the dotAll (`s`) flag is used.

```js
/a.c/
```

Matches:
- `abc`
- `a1c`
- `a-c`

Does not match:
- `ac` because there is no character between `a` and `c`.

Example:

```js
console.log(/a.c/.test("abc")); // true
console.log(/a.c/.test("a1c")); // true
console.log(/a.c/.test("ac"));  // false
```

To match an actual period, escape it:

```js
/\./
```

---

## 7. Quantifiers

Quantifiers specify how many times a character or group should appear.

| Quantifier | Meaning |
|---|---|
| `*` | Zero or more |
| `+` | One or more |
| `?` | Zero or one |
| `{n}` | Exactly n times |
| `{n,}` | At least n times |
| `{n,m}` | Between n and m times |

### `*` Zero or more

```js
/ab*/
```

Matches:
- `a`
- `ab`
- `abb`
- `abbb`

The `b` can appear zero or more times.

### `+` One or more

```js
/ab+/
```

Matches:
- `ab`
- `abb`
- `abbb`

Does not match `a` because at least one `b` is required.

### `?` Zero or one

```js
/colou?r/
```

Matches:
- `color`
- `colour`

The `u` is optional.

### `{n}` Exactly n times

```js
/\d{4}/
```

Matches four consecutive digits.

### `{n,}` At least n times

```js
/\d{3,}/
```

Matches three or more consecutive digits.

### `{n,m}` Between n and m times

```js
/\d{2,4}/
```

Matches between two and four consecutive digits.

**Remember:**
- `*` → optional, any number of times.
- `+` → must appear at least once.
- `?` → optional, at most once.
- `{n}` → exact number.
- `{n,m}` → minimum and maximum.

---

## 8. Greedy and Lazy Quantifiers

By default, quantifiers are **greedy**. They try to match as much text as possible while still allowing the overall pattern to match.

Example:

```js
const text = "<h1>Hello</h1><h1>World</h1>";

console.log(text.match(/<h1>.*<\/h1>/));
```

The greedy `.*` can match from the first opening tag to the last closing tag.

### Lazy quantifiers

Add `?` after a quantifier to make it lazy.

```js
const text = "<h1>Hello</h1><h1>World</h1>";

console.log(text.match(/<h1>.*?<\/h1>/g));
```

Output:

```js
["<h1>Hello</h1>", "<h1>World</h1>"]
```

The lazy quantifier matches as little as possible while still satisfying the pattern.

Examples:

| Greedy | Lazy |
|---|---|
| `.*` | `.*?` |
| `.+` | `.+?` |
| `a{2,}` | `a{2,}?` |

---

## 9. Anchors

Anchors specify where a match must occur.

### `^` Start of string or line

```js
/^hello/
```

Matches `hello` only when it appears at the beginning of the string or line.

### `$` End of string or line

```js
/world$/
```

Matches `world` only when it appears at the end of the string or line.

Example:

```js
console.log(/^hello/.test("hello world")); // true
console.log(/world$/.test("hello world")); // true
```

### Combining `^` and `$`

```js
/^hello$/
```

Requires the entire string to be exactly `hello`.

```js
console.log(/^hello$/.test("hello"));       // true
console.log(/^hello$/.test("hello world")); // false
```

**Remember:**
- `^` → beginning.
- `$` → end.
- `^...$` → match the entire string.

---

## 10. Word Boundaries `\b` and `\B`

### `\b`

Matches a position at the boundary between a word character and a non-word character.

```js
/\bcat\b/
```

Matches `cat` as a separate word.

```js
console.log(/\bcat\b/.test("The cat is sleeping")); // true
console.log(/\bcat\b/.test("category"));             // false
```

### `\B`

Matches a position that is not a word boundary.

```js
/\Bcat/
```

Can match `cat` when it appears inside a larger word.

**Remember:**
- `\b` → word boundary.
- `\B` → not a word boundary.

---

## 11. Alternation `|`

The pipe character means OR.

It allows you to match one pattern or another.

```js
/cat|dog/
```

Matches either `cat` or `dog`.

Example:

```js
console.log(/cat|dog/.test("I have a dog")); // true
console.log(/cat|dog/.test("I have a bird")); // false
```

You can combine alternation with groups:

```js
/^(cat|dog)$/
```

Matches only the complete string `cat` or `dog`.

---

## 12. Groups `()`

Parentheses group parts of a regex together.

Groups are useful when:
- Applying quantifiers to multiple characters.
- Creating capturing groups.
- Using alternation.
- Reusing matched text.

Example:

```js
/(ab)+/
```

Matches:
- `ab`
- `abab`
- `ababab`

The `+` applies to the entire group `ab`.

### Capturing groups

A capturing group remembers the text matched inside its parentheses.

```js
const pattern = /(hello) (world)/;

const result = "hello world".match(pattern);

console.log(result[0]); // hello world
console.log(result[1]); // hello
console.log(result[2]); // world
```

Explanation:
- `result[0]` → the entire match.
- `result[1]` → first captured group.
- `result[2]` → second captured group.

### Non-capturing groups `(?:...)`

Sometimes you need parentheses to group a pattern but do not need to capture its contents.

Use `(?:...)`.

```js
const pattern = /(?:hello|hi) world/;

console.log(pattern.test("hello world")); // true
```

The group affects matching but is not stored as a capturing group.

**Remember:**
- `(abc)` → capturing group.
- `(?:abc)` → non-capturing group.

---

## 13. Backreferences

A backreference allows you to refer to text already matched by a capturing group.

Use `\1` for the first capturing group, `\2` for the second, and so on.

Example:

```js
const pattern = /(\w+)\s+\1/;

console.log(pattern.test("hello hello")); // true
console.log(pattern.test("hello world")); // false
```

Explanation:

- `(\w+)` captures a word.
- `\s+` matches one or more spaces.
- `\1` requires the same word captured by the first group.

This finds repeated words.

### Practical example: repeated characters

```js
const pattern = /(.)\1/;

console.log(pattern.test("book")); // true
console.log(pattern.test("cat"));  // false
```

The pattern looks for two consecutive occurrences of the same character.

---

## 14. Lookahead Assertions

Lookaheads check what comes after a match without including that following text in the match.

### Positive lookahead `(?=...)`

Requires something to appear after the current position.

```js
/\d(?=px)/
```

Matches a digit only when it is followed by `px`.

Example:

```js
const result = "20px".match(/\d(?=px)/);

console.log(result[0]); // 0
```

The matched digit is `0`, because it is the digit immediately before `px`.

### Negative lookahead `(?!...)`

Requires something NOT to appear after the current position.

```js
/\d(?!px)/
```

Matches a digit that is not immediately followed by `px`.

**Remember:**
- `(?=...)` → what follows must match.
- `(?!...)` → what follows must not match.

Lookaheads do not consume the text they inspect.

---

## 15. Lookbehind Assertions

Lookbehinds check what appears before a match without including that preceding text in the match.

### Positive lookbehind `(?<=...)`

Requires a particular pattern before the match.

```js
/(?<=\$)\d+/
```

Matches digits that come after a dollar sign.

```js
const result = "$250".match(/(?<=\$)\d+/);

console.log(result[0]); // 250
```

### Negative lookbehind `(?<!...)`

Requires a particular pattern not to appear before the match.

```js
/(?<!\$)\d+/
```

Matches digits that are not immediately preceded by a dollar sign.

**Remember:**
- `(?<=...)` → must appear before.
- `(?<!...)` → must not appear before.

---

## 16. Regex Flags

Flags change how a regular expression behaves.

Flags are written after the closing slash.

Example:

```js
/hello/gi
```

### Common flags

| Flag | Meaning |
|---|---|
| `g` | Global: find all matches |
| `i` | Case-insensitive matching |
| `m` | Multiline: `^` and `$` work with line boundaries |
| `s` | DotAll: `.` also matches line terminators |
| `u` | Unicode-aware matching |
| `y` | Sticky: match at the current `lastIndex` position |
| `d` | Include match indices in the result |

### Global `g`

Finds all matches instead of stopping at the first match.

```js
const text = "cat dog cat";

console.log(text.match(/cat/g));
```

Output:

```js
["cat", "cat"]
```

### Case-insensitive `i`

Matches without considering uppercase or lowercase differences.

```js
console.log(/hello/i.test("HELLO")); // true
```

### Multiline `m`

Makes `^` and `$` match the beginning and end of individual lines.

```js
const text = "Hello\nWorld";

console.log(/^World/m.test(text)); // true
```

### DotAll `s`

Allows `.` to match line terminators.

```js
const text = "Hello\nWorld";

console.log(/Hello.World/s.test(text)); // true
```

### Unicode `u`

Enables Unicode-aware regex behavior.

```js
console.log(/\u{1F600}/u.test("😀")); // true
```

### Sticky `y`

Requires the next match to start exactly at the regex's `lastIndex` position.

```js
const pattern = /cat/y;

pattern.lastIndex = 4;

console.log(pattern.test("dog cat")); // true
```

### Indices `d`

Adds information about the start and end positions of matches and capturing groups.

```js
const result = /cat/d.exec("a cat");

console.log(result.indices);
```

---

## 17. JavaScript Regex Methods

JavaScript provides several methods for working with regular expressions.

### `test()`

Checks whether a string contains a match.

Returns `true` or `false`.

```js
const pattern = /hello/;

console.log(pattern.test("hello world")); // true
console.log(pattern.test("goodbye"));     // false
```

### `exec()`

Searches for a match and returns detailed match information.

```js
const pattern = /hello/;

const result = pattern.exec("hello world");

console.log(result[0]);    // hello
console.log(result.index); // 0
```

Returns `null` if no match is found.

### `match()`

Searches a string for matches.

```js
const text = "I love JavaScript";

console.log(text.match(/JavaScript/));
```

Without the global flag, it returns a match array containing information about the match.

With the global flag:

```js
const text = "cat dog cat";

console.log(text.match(/cat/g));
```

Output:

```js
["cat", "cat"]
```

With `g`, `match()` returns an array of matched strings or `null`, rather than the usual detailed single-match array.

### `matchAll()`

Returns an iterator containing detailed information about all matches.

It requires a global regex.

```js
const text = "cat dog cat";

const matches = text.matchAll(/cat/g);

for (const match of matches) {
    console.log(match[0], match.index);
}
```

Output:

```text
cat 0
cat 8
```

### `replace()`

Replaces matched text.

```js
const text = "I love cats";

console.log(text.replace(/cats/, "dogs"));
// I love dogs
```

### `replaceAll()`

Replaces all occurrences of matching text.

```js
const text = "cat cat cat";

console.log(text.replaceAll("cat", "dog"));
// dog dog dog
```

You can also use a global regex with `replace()`:

```js
console.log(text.replace(/cat/g, "dog"));
// dog dog dog
```

### `search()`

Returns the index of the first match.

```js
const text = "I love JavaScript";

console.log(text.search(/JavaScript/)); // 7
```

Returns `-1` if no match is found.

### `split()`

Splits a string using a regex pattern.

```js
const text = "apple,banana orange";

console.log(text.split(/[,\s]+/));
```

Output:

```js
["apple", "banana", "orange"]
```

### Quick comparison

| Method | Purpose |
|---|---|
| `test()` | Check whether a match exists |
| `exec()` | Get detailed match information |
| `match()` | Get matching text |
| `matchAll()` | Get details for all matches |
| `replace()` | Replace matched text |
| `replaceAll()` | Replace all occurrences |
| `search()` | Get the position of the first match |
| `split()` | Split a string using a pattern |

---

## 18. Escaping Special Characters

Some characters have special meanings in regex.

To search for them literally, escape them using `\`.

Examples:

| Character | Escaped version |
|---|---|
| `.` | `\.` |
| `*` | `\*` |
| `+` | `\+` |
| `?` | `\?` |
| `(` | `\(` |
| `)` | `\)` |
| `[` | `\[` |
| `]` | `\]` |
| `{` | `\{` |
| `}` | `\}` |
| `^` | `\^` |
| `$` | `\$` |
| `\` | `\\` |

Example: matching a price containing a dollar sign.

```js
const pattern = /\$\d+/;

console.log(pattern.test("$100")); // true
```

The `\$` matches the actual dollar sign.

---

## 19. Practical Regex Examples

### Check for digits

```js
const pattern = /\d/;

console.log(pattern.test("Hello123")); // true
```

### Check for at least one uppercase letter

```js
const pattern = /[A-Z]/;

console.log(pattern.test("Hello")); // true
```

### Check for at least one lowercase letter

```js
const pattern = /[a-z]/;

console.log(pattern.test("HELLO")); // false
```

### Check for at least one digit

```js
const pattern = /\d/;

console.log(pattern.test("password123")); // true
```

### Check for a string containing only digits

```js
const pattern = /^\d+$/;

console.log(pattern.test("12345")); // true
console.log(pattern.test("123abc")); // false
```

### Check for a username between 3 and 16 characters

```js
const pattern = /^[a-zA-Z0-9_]{3,16}$/;

console.log(pattern.test("kudus_207")); // true
console.log(pattern.test("ab"));       // false
```

### Check for a simple email-like format

```js
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(pattern.test("john@example.com")); // true
```

This is a basic format check, not a complete email validation solution.

### Replace multiple spaces with one space

```js
const text = "Hello     World";

console.log(text.replace(/\s+/g, " "));
// Hello World
```

### Remove all digits

```js
const text = "Hello123World456";

console.log(text.replace(/\d/g, ""));
// HelloWorld
```

### Extract all numbers

```js
const text = "I have 12 apples and 5 oranges";

console.log(text.match(/\d+/g));
// ["12", "5"]
```

### Remove whitespace from the beginning and end

```js
const text = "   Hello World   ";

console.log(text.replace(/^\s+|\s+$/g, ""));
// Hello World
```

You can also use the built-in string method:

```js
text.trim();
```

---

## 20. Common Regex Mistakes

### Mistake 1: Forgetting the global flag

```js
const text = "cat cat cat";

console.log(text.match(/cat/));
```

This returns only the first match.

Use:

```js
console.log(text.match(/cat/g));
```

### Mistake 2: Confusing `*` and `+`

- `*` means zero or more.
- `+` means one or more.

```js
/a*/  // Can match zero or more a characters
/a+/  // Requires at least one a
```

### Mistake 3: Forgetting anchors

```js
/\d+/
```

Checks whether the string contains one or more consecutive digits.

```js
/^\d+$/
```

Checks whether the entire string consists only of digits.

### Mistake 4: Forgetting to escape special characters

Incorrect:

```js
/./
```

Matches almost any character.

Correct:

```js
/\./
```

Matches an actual period.

### Mistake 5: Using capturing groups unnecessarily

If you only need to group a pattern, use a non-capturing group.

```js
/(?:cat|dog)/
```

Instead of:

```js
/(cat|dog)/
```

Use a capturing group when you actually need the captured text.

### Mistake 6: Forgetting that `test()` returns a Boolean

```js
const result = /\d/.test("hello5");

console.log(result); // true
```

It does not return the matched digit. Use `match()` or `exec()` when you need the matched text.

### Mistake 7: Reusing global regexes with `test()`

Global and sticky regexes maintain a `lastIndex` position.

```js
const pattern = /cat/g;

console.log(pattern.test("cat")); // true
console.log(pattern.test("cat")); // false
```

The second result may surprise you because the regex remembers where the previous search ended.

Reset it when needed:

```js
pattern.lastIndex = 0;

console.log(pattern.test("cat")); // true
```

For simple Boolean checks, avoid `g` and `y` unless you specifically need their behavior.

---

# Quick Reference Table

## Character patterns

| Pattern | Meaning |
|---|---|
| `.` | Any character except line terminators by default |
| `\d` | Digit |
| `\D` | Non-digit |
| `\w` | Word character |
| `\W` | Non-word character |
| `\s` | Whitespace |
| `\S` | Non-whitespace |
| `[abc]` | Any one of a, b, or c |
| `[^abc]` | Any one character except a, b, or c |
| `[a-z]` | Lowercase letter |
| `[A-Z]` | Uppercase letter |
| `[0-9]` | Digit |

## Quantifiers

| Pattern | Meaning |
|---|---|
| `*` | Zero or more |
| `+` | One or more |
| `?` | Zero or one |
| `{n}` | Exactly n |
| `{n,}` | At least n |
| `{n,m}` | Between n and m |
| `*?`, `+?`, `??` | Lazy versions of quantifiers |

## Anchors and boundaries

| Pattern | Meaning |
|---|---|
| `^` | Start of string or line |
| `$` | End of string or line |
| `\b` | Word boundary |
| `\B` | Not a word boundary |

## Groups and assertions

| Pattern | Meaning |
|---|---|
| `(abc)` | Capturing group |
| `(?:abc)` | Non-capturing group |
| `\1` | Backreference to first capturing group |
| `\2` | Backreference to second capturing group |
| `a\|b` | Match a or b |
| `(?=abc)` | Positive lookahead |
| `(?!abc)` | Negative lookahead |
| `(?<=abc)` | Positive lookbehind |
| `(?<!abc)` | Negative lookbehind |

## Flags

| Flag | Meaning |
|---|---|
| `g` | Global |
| `i` | Case-insensitive |
| `m` | Multiline |
| `s` | DotAll |
| `u` | Unicode-aware |
| `y` | Sticky |
| `d` | Match indices |

## JavaScript methods

| Method | Purpose |
|---|---|
| `test()` | Check for a match |
| `exec()` | Return detailed match information |
| `match()` | Find matching text |
| `matchAll()` | Find all matches with details |
| `replace()` | Replace matches |
| `replaceAll()` | Replace all occurrences |
| `search()` | Find the first match position |
| `split()` | Split text using a pattern |

---

# Final Mental Model

**Regex:** A pattern used to find, match, validate, or replace text.

**Character classes:** Define which characters can match.

**Quantifiers:** Define how many times something can appear.

**Anchors:** Define where a match must occur.

**Groups:** Combine patterns and optionally capture matched text.

**Backreferences:** Reuse text captured by an earlier group.

**Lookaheads and lookbehinds:** Check surrounding text without including it in the match.

**Flags:** Change how a regex searches.

**`test()`:** Ask whether a match exists.

**`match()` and `exec()`:** Retrieve matched text and information.

**`replace()`:** Change matched text.

**Most important habit:** Break a complicated regex into smaller parts. Understand what each character, group, quantifier, and flag does before trying to understand the entire pattern.