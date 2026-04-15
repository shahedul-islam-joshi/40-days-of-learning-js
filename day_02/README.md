# Day 02 — JavaScript Variables & Data Types

A practice session covering the fundamentals of variables, scoping rules, and data types in JavaScript.

---

## 📁 File Structure

```
day-02/
├── index.html       # HTML entry point, links to index.js
└── index.js         # JavaScript practice file
```

---

## 📌 Topics Covered

### 1. Variable Declarations

JavaScript provides three ways to declare variables:

| Keyword | Scope | Redeclarable | Reassignable |
|---------|-------|-------------|--------------|
| `var` | Function | ✅ Yes | ✅ Yes |
| `let` | Block | ❌ No | ✅ Yes |
| `const` | Block | ❌ No | ❌ No |

```js
var address = "Gazipur";
var address = "Istanbul";   // ✅ var allows redeclaration

let age = 18;
age = 23;                   // ✅ let allows reassignment

const city = "Dhaka";
// city = "Chittagong";     // ❌ TypeError: Assignment to constant variable
```

> **Best Practice:** Prefer `const` by default. Use `let` when reassignment is needed. Avoid `var`.

---

### 2. Primitive Data Types

| Type | Example | Description |
|------|---------|-------------|
| `String` | `"Hello"` | Text values |
| `Number` | `25`, `3.14` | Numeric values |
| `Boolean` | `true`, `false` | Logical values |
| `Undefined` | `let x;` | Declared but not assigned |
| `Null` | `let y = null;` | Intentional absence of value |
| `BigInt` | `BigInt(12345678901234567890)` | Very large integers |
| `Symbol` | `Symbol("id")` | Unique identifiers |

---

### 3. Non-Primitive (Reference) Data Types

| Type | Example |
|------|---------|
| `Object` | `{ name: "Joshi", age: 22 }` |
| `Array` | `[1, 2, 4, 5]` |
| `Function` | `function greet() {}` |

```js
let student = {
  name: "Joshi",
  age: 22,
  isEnrolled: true
};
console.log(student.name); // "Joshi"

let arr = [1, 2, 4, 5];
```

---

### 4. Value vs. Reference (Primitives are Copied)

Primitives are copied **by value**, meaning changes to the copy don't affect the original:

```js
let a = 26;
let b = a;  // b gets a copy of 26
b = 4;

console.log(a); // 26 — unchanged
console.log(b); // 4
```

> Reference types (objects, arrays) behave differently — they are copied **by reference**.

---

## 🔑 Key Takeaways

- Use `let` and `const` instead of `var` for predictable scoping.
- `undefined` is automatic (unassigned variable); `null` is explicit (intentional empty value).
- Primitive values are independent copies when assigned — mutating one doesn't affect the other.
- Objects and arrays hold references, not direct values.

---

## 🚀 How to Run

1. Open `index.html` in a browser.
2. Open **DevTools → Console** (`F12`) to see the output.

Or run directly with Node.js:

```bash
node index.js
```