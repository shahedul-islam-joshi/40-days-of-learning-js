# 📘 Day 07 — Execution Context Deep Dive

**Challenge:** 40 Days of JavaScript by [tapaScript](https://tapasadhikary.com/)
**Topic:** JavaScript Execution Context — GEC, FEC, Call Stack & Heap

---

## 📌 The Code

```js
const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}

function calc(a, b) {
    return (sum(a, b) + mul(a, b)) / 2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);
```

> **Note:** The original prompt has a typo — `fucntion` instead of `function`. The diagrams below use the corrected spelling.

---

## 🧠 Diagram 1 — Global & Function Execution Contexts (GEC + FEC)

Each execution context has two phases:
- **Creation Phase (CP):** Variables are hoisted as `undefined`; function declarations get their full reference stored.
- **Execution Phase (EP):** Code runs line by line; values are assigned and functions are called.

```
┌──────────────────────────────────────────────────────────────────────┐
│                  GLOBAL EXECUTION CONTEXT (GEC)                      │
├─────────────────────────────────┬────────────────────────────────────┤
│       Creation Phase (CP)       │        Execution Phase (EP)        │
├─────────────────────────────────┼────────────────────────────────────┤
│ message    → undefined          │ message    = "I can do it"         │
│ sum        → fn reference       │ sum, mul, calc, getResult defined  │
│ mul        → fn reference       │ getResult(8, 5) called             │
│ calc       → fn reference       │ returns (8+5 + 8*5) / 2 = 26.5    │
│ getResult  → fn reference       │ GEC pops off call stack            │
└─────────────────────────────────┴────────────────────────────────────┘
                        │ invokes
                        ▼
┌──────────────────────────────────────────────────────────────────────┐
│              FEC — getResult(a=8, b=5)                               │
├─────────────────────────────────┬────────────────────────────────────┤
│       Creation Phase (CP)       │        Execution Phase (EP)        │
├─────────────────────────────────┼────────────────────────────────────┤
│ a          → undefined          │ a = 8, b = 5                       │
│ b          → undefined          │ calls calc(8, 5)                   │
│ scope chain → GEC               │                                    │
└─────────────────────────────────┴────────────────────────────────────┘
                        │ invokes
                        ▼
┌──────────────────────────────────────────────────────────────────────┐
│              FEC — calc(a=8, b=5)                                    │
├─────────────────────────────────┬────────────────────────────────────┤
│       Creation Phase (CP)       │        Execution Phase (EP)        │
├─────────────────────────────────┼────────────────────────────────────┤
│ a          → undefined          │ a = 8, b = 5                       │
│ b          → undefined          │ calls sum(8, 5) and mul(8, 5)      │
│ scope chain → GEC               │ returns (13 + 40) / 2 = 26.5      │
└─────────────────────────────────┴────────────────────────────────────┘
              ┌──────────────────┴──────────────────┐
              ▼                                     ▼
┌───────────────────────────┐         ┌───────────────────────────┐
│  FEC — sum(a=8, b=5)      │         │  FEC — mul(a=8, b=5)      │
├─────────────┬─────────────┤         ├─────────────┬─────────────┤
│   CP        │   EP        │         │   CP        │   EP        │
├─────────────┼─────────────┤         ├─────────────┼─────────────┤
│ a → undef   │ a = 8       │         │ a → undef   │ a = 8       │
│ b → undef   │ b = 5       │         │ b → undef   │ b = 5       │
│ result→undef│ result = 13 │         │ result→undef│ result = 40 │
│             │ return 13   │         │             │ return 40   │
└─────────────┴─────────────┘         └─────────────┴─────────────┘
        returns 13 ──────────────────────────── returns 40
                        calc: (13 + 40) / 2 = 26.5
```

### Key observations
- `const` variables (like `result` and `message`) are hoisted to `undefined` during CP but are **TDZ-protected** — accessing them before assignment throws a `ReferenceError`.
- Function declarations (`function sum() {}`) are **fully hoisted** — their reference is available from the start of CP.
- Every function call creates a **brand new execution context** with its own Variable Environment and scope chain.

---

## 📦 Diagram 2 — Stack and Heap Memory Flow

```
┌─────────────────────────────────────┐   ┌──────────────────────────────────────┐
│        CALL STACK (LIFO)            │   │        HEAP (Reference Types)        │
│  Primitives stored by value         │   │  Objects stored by reference         │
├─────────────────────────────────────┤   ├──────────────────────────────────────┤
│                                     │   │                                      │
│  ┌─────────────────────────────┐    │   │  ┌────────────────────────────────┐  │
│  │  sum FEC                    │    │   │  │  fn sum  { a+b; return result } │  │
│  │  a=8 · b=5 · result=13      │    │   │  └────────────────────────────────┘  │
│  └─────────────────────────────┘    │   │                                      │
│  ┌─────────────────────────────┐    │   │  ┌────────────────────────────────┐  │
│  │  mul FEC                    │    │   │  │  fn mul  { a*b; return result } │  │
│  │  a=8 · b=5 · result=40      │    │   │  └────────────────────────────────┘  │
│  └─────────────────────────────┘    │   │                                      │
│  ┌─────────────────────────────┐    │   │  ┌────────────────────────────────┐  │
│  │  calc FEC                   │    │   │  │  fn calc { (sum+mul)/2 }        │  │
│  │  a=8 · b=5                  │    │   │  └────────────────────────────────┘  │
│  └─────────────────────────────┘    │   │                                      │
│  ┌─────────────────────────────┐    │   │  ┌────────────────────────────────┐  │
│  │  getResult FEC              │    │   │  │  fn getResult { calc(a,b) }     │  │
│  │  a=8 · b=5                  │    │   │  └────────────────────────────────┘  │
│  └─────────────────────────────┘    │   │                                      │
│  ┌─────────────────────────────┐    │   │  References (pointers) ─────────────→│
│  │  GEC  (base frame)          │────┼──→│  message: "I can do it" (primitive)  │
│  │  message: "I can do it"     │    │   │  sum, mul, calc, getResult → ↑ objs  │
│  │  sum, mul, calc, getResult  │    │   │                                      │
│  └─────────────────────────────┘    │   │                                      │
└─────────────────────────────────────┘   └──────────────────────────────────────┘

  Note: `message` is a primitive string → stored BY VALUE on the Stack
        Function objects → stored BY REFERENCE on the Heap
        GEC holds pointers (memory addresses) to each fn object in the Heap
```

### What lives where?

| Type | Storage | How passed |
|---|---|---|
| Primitive (`string`, `number`, `boolean`, `null`, `undefined`) | Stack | By **value** (copy) |
| Objects, Arrays, Functions | Heap | By **reference** (pointer) |
| Execution context frames | Stack | Pushed on call, popped on return |

---

## 🗂️ Diagram 3 — Call Stack Diagram (Push/Pop Sequence)

```
Stack grows UP. Time flows RIGHT →

                ┌──────────┐
                │  sum     │  ← pushed when calc calls sum()
                │ a=8,b=5  │    returns 13, then POPPED
 ┌──────────┐   ├──────────┤   ┌──────────┐
 │  calc    │   │  calc    │   │  mul     │  ← pushed when calc calls mul()
 │ a=8,b=5  │   │ a=8,b=5  │   │ a=8,b=5  │    returns 40, then POPPED
 ├──────────┤   ├──────────┤   ├──────────┤
 │getResult │   │getResult │   │getResult │
 │ a=8,b=5  │   │ a=8,b=5  │   │ a=8,b=5  │
 ├──────────┤   ├──────────┤   ├──────────┤   ┌──────────┐
 │  GEC     │   │  GEC     │   │  GEC     │   │  GEC     │
 │ message  │   │ message  │   │ message  │   │ →26.5    │
 └──────────┘   └──────────┘   └──────────┘   └──────────┘
  ② getResult   ③ + calc       ④/⑤ sum/mul    ⑥ all popped
    pushed        pushed          called         result: 26.5


 ① Start      ② PUSH         ③ PUSH       ④ PUSH sum    ⑤ POP sum    ⑥ POP mul,
              getResult       calc         → returns 13  PUSH mul     calc,
                                           sum POPPED   → returns 40  getResult
                                                         mul POPPED   → 26.5

PUSH order:  GEC → getResult → calc → sum → (sum pops) → mul → (mul pops)
POP  order:  sum → mul → calc → getResult → GEC (cleared when script ends)
```

### Call Stack Rules
1. **LIFO** — Last In, First Out. The most recently pushed frame is always executed first.
2. Each function call **pushes** a new FEC. Each `return` **pops** it.
3. JavaScript is **single-threaded** — only one frame executes at a time.
4. `sum` and `mul` do NOT run simultaneously. `calc` calls `sum` first (waits for it to return 13), then calls `mul` (waits for it to return 40), then computes `(13 + 40) / 2 = 26.5`.
5. If the stack grows too deep (infinite recursion), you get a **Stack Overflow** error.

---

## ✅ Final Output

```js
getResult(8, 5);
// → calc(8, 5)
// →→ sum(8, 5) = 13
// →→ mul(8, 5) = 40
// → (13 + 40) / 2 = 26.5
```

**Console output: `26.5`**

---

## 💡 Key Concepts Recap

| Concept | What it means |
|---|---|
| **GEC** | Created when the script first runs. One per script. |
| **FEC** | Created each time a function is called. Can be many. |
| **Creation Phase** | Memory allocated; `var` hoisted as `undefined`; `function` declarations fully hoisted; `const`/`let` in TDZ |
| **Execution Phase** | Code runs line by line; values assigned; functions invoked |
| **Call Stack** | Tracks which EC is currently running (LIFO order) |
| **Heap** | Stores function objects; GEC holds references (pointers) to them |
| **Scope Chain** | Each FEC can access variables from its parent EC (lexical scoping) |

---

*Day 07 of [#40DaysOfJavaScript](https://github.com/tapascript) · tapaScript Discord · by Shahedul Islam Joshi*
