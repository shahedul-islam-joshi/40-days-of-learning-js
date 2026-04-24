# Day 03 — JavaScript Operators

Part of the **40 Days of JavaScript** challenge by [tapaScript](https://tapasadhikary.com/).

---

## Topics Covered

### 1. Arithmetic Operators
Basic math operations: `+`, `-`, `*`, `/`
- String concatenation with `+` (and why you should avoid it with variables)
- Exponential operator `**` — equivalent to `Math.pow(a, b)`
- Remainder/modulo operator `%`

### 2. Increment & Decrement Operators
- **Post-increment** `count++` — returns current value, then increments
- **Pre-increment** `++count` — increments first, then returns value
- Same behaviour applies for `--`

### 3. Assignment Operators
Shorthand forms: `+=`, `-=`, `*=`, `/=`

### 4. Comparison Operators
| Operator | Behaviour |
|----------|-----------|
| `==` | Loose equality — does type coercion |
| `===` | Strict equality — no type coercion |
| `!=` | Loose inequality |
| `!==` | Strict inequality |
| `>`, `<`, `>=`, `<=` | Relational comparisons |

> **Key insight:** `3 == '3'` is `true` but `3 === '3'` is `false`. Always prefer `===`.

Object comparison: two objects with the same content are **not** equal (`===`) because they point to different memory addresses.

### 5. Logical Operators
| Operator | Name | Behaviour |
|----------|------|-----------|
| `&&` | AND | Returns the first falsy value, or the last value |
| `\|\|` | OR | Returns the first truthy value |
| `??` | Nullish Coalescing | Returns right-hand side only if left is `null` or `undefined` |
| `!` | NOT | Inverts the boolean |

> `??` differs from `\|\|` — it does **not** treat `0` or `false` as nullish.

### 6. Conditional (Ternary) Operator
```js
condition ? valueIfTrue : valueIfFalse
```
A concise alternative to `if/else` for simple conditions.

### 7. Bitwise Operators
Operate on 32-bit integer representations of numbers.

| Operator | Name | Example |
|----------|------|---------|
| `&` | AND | `15 & 9 = 9` |
| `\|` | OR | `15 \| 9 = 15` |
| `^` | XOR | `15 ^ 9 = 6` |
| `<<` | Left shift | `9 << 2 = 36` |
| `>>` | Right shift | `9 >> 2 = 2` |

### 8. Grouping Operator
`()` controls evaluation order and overrides default precedence.

### 9. `typeof` & `instanceof`
- `typeof` returns the type of a value as a string
- `instanceof` checks if an object was created from a specific constructor
- Note: `typeof null` returns `"object"` — a known JavaScript quirk

---

## Practice Tasks

| # | Task | Concept Used |
|---|------|--------------|
| 1 | Odd or Even checker | `%`, ternary |
| 2 | Driving licence eligibility | `>=`, ternary |
| 3 | CTC with 20% bonus | Arithmetic operators |
| 4 | Traffic light simulation | `===`, chained ternary |
| 5 | Electricity bill calculator | Arithmetic, `%` discount |
| 6 | Leap year checker | `%`, `&&`, `\|\|`, ternary |
| 7 | Max of three numbers | Comparison, nested ternary |
| 8 | Bitwise doubling | `<<` left shift |

---

## Key Takeaways

- Always use `===` over `==` to avoid unexpected type coercion.
- Post vs pre increment matter when the value is used inline.
- `??` is safer than `||` when `0` or `false` are valid values.
- Left shift `<< 1` is a fast way to double a number.
- Objects are compared by reference, not by value.

---

## How to Run

Open `day_03.js` in any browser's developer console or run with Node.js:

```bash
node day_03.js
```

---

## Challenge
[40 Days of JavaScript — tapaScript Discord](https://discord.gg/tapasadhikary)