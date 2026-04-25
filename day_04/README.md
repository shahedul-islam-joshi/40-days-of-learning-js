# Day 04 — Conditionals & Control Flow

## What I Learned

Day 04 covered how JavaScript makes decisions using conditional statements and control flow tools.

### Topics Covered

- `if`, `if-else`, and `if-else if` chains
- Ternary operator as a shorthand for `if-else`
- `switch-case` with `break`
- Fall-through behavior in `switch` (multiple cases sharing one block)
- Nested `if-else` statements
- `default` case in `switch`

---

## Concepts in Practice

### if / else

Used to run a block of code only when a condition is true.

```js
let catchingBus = false;

if (catchingBus) {
    console.log("I will reach home on time");
} else {
    console.log("I will be late to reach");
}
```

### Ternary Operator

A shorter way to write a simple `if-else`.

```js
catchingBus
    ? console.log("I will reach home on time")
    : console.log("I will be late to reach");
```

### if-else if Chain

Used when there are multiple conditions to check in order.

```js
let score = 76;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

### switch-case

Cleaner than a long `if-else if` chain when matching a single value.

```js
let position = 10;

switch (position) {
    case 1:
        console.log("Print 1");
        break;
    case 2:
        console.log("Print 2");
        break;
    default:
        console.log("Nothing matched");
}
```

### Fall-through in switch

When multiple cases share the same output, `break` is omitted intentionally.

```js
const city = "Bangalore";

switch (city) {
    case "Bangalore":
    case "Kolkata":
    case "Agra":
        console.log("All these are in India");
        break;
    default:
        console.log("It is in USA");
}
```

---

## Tasks Completed

| # | Task | Concept Used |
|---|------|-------------|
| 1 | Explained output of a case-sensitive switch | `switch`, strict equality |
| 2 | ATM withdrawal — check multiples of 100 | `if-else`, modulus `%` |
| 3 | Calculator with operator input | `switch-case` |
| 4 | Movie ticket price by age | `if-else if` |
| 5 | Horoscope sign by birth month | `switch` fall-through, no `if-else` |
| 6 | Triangle type from 3 sides | `if-else if`, `&&`, `\|\|` |

---

## Key Takeaways

- `switch` uses strict equality (`===`), so `"Monday"` and `"monday"` are not the same.
- Always add `break` after each `case` unless fall-through is intentional.
- The order of conditions in `if-else if` matters — more specific checks go first.
- Modulus `%` checks divisibility — useful for ATM, even/odd, and similar problems.
- `&&` means both conditions must be true; `||` means at least one must be true.