The easiest way to understand them is to think of them as asking questions.

&& (AND)

Both conditions must be true.

Example:

age >= 18 && hasID

This means:

Is the person 18 or older AND do they have an ID?

Let's test it:

age >= 18	hasID	Result
true	true	true ✅
true	false	false ❌
false	true	false ❌
false	false	false ❌

Only one combination passes:

true && true


|| (OR)

At least one condition must be true.

Example:

age >= 18 || withParent

This means:

Is the person 18 or older OR with a parent?

Let's test it:

age >= 18	withParent	Result
true	true	true ✅
true	false	true ✅
false	true	true ✅
false	false	false ❌

Only one combination fails:

false || false
Combining Them

Suppose you have:

(age >= 18 || withParent) && !isBanned

Read it like English:

The person must be:

18 or older OR with a parent

AND

not banned

Example 1

age = 20
withParent = false
isBanned = false

Becomes:

(true || false) && true
true && true
true

Access granted. ✅

Example 2

age = 15
withParent = true
isBanned = false

Becomes:

(false || true) && true
true && true
true

Access granted. ✅

Example 3

age = 25
withParent = false
isBanned = true

Becomes:

(true || false) && false
true && false
false

Access denied. ❌

A good memory trick:

&&  = BOTH must be true

||  = AT LEAST ONE must be true

!   = NOT (flips true ↔ false)

When you see a condition, try replacing:

&& with AND
|| with OR
! with NOT

and read it as an English sentence. That's how experienced programmers mentally parse these expressions.