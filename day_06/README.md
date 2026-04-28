# Day 06 — JavaScript Functions

**40 Days of JavaScript** | tapaScript

---

## What I Learned

Day 06 focused entirely on **functions** — the building blocks of JavaScript logic. Key concepts covered:

- Function declarations and expressions
- Parameters, arguments, and default values
- Rest parameters (`...rest`)
- Nested functions and returning functions
- Callback functions and higher-order functions
- Pure vs impure functions
- Arrow functions
- IIFE (Immediately Invoked Function Expressions)
- Call stack execution flow

---

## Tasks

### Task 1 — Celsius to Fahrenheit
Converts a temperature using the formula `(celsius * 9/5) + 32`.

```js
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212
console.log(celsiusToFahrenheit(-40));  // -40
```

---

### Task 2 — Find Maximum of Two Numbers
Returns the larger of two numbers, including negatives.

```js
function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(findMax(5, 10));    // 10
console.log(findMax(-3, -7));   // -3
console.log(findMax(4, 4));     // 4
```

---

### Task 3 — Palindrome Checker
Reverses a string manually using a `for` loop (no built-in reverse method) and compares it to the original.

```js
function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    if (str === reversed) {
        return true;
    }
    return false;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("madam"));   // true
```

---

### Task 4 — Factorial
Multiplies all integers from 1 to `n` using a loop. By definition, `0! = 1`.

```js
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5));  // 120
console.log(factorial(3));  // 6
console.log(factorial(0));  // 1
```

---

### Task 5 — Count Vowels
Uses a nested loop to check each character of the string against a vowel list (both upper and lower case).

```js
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count = count + 1;
            }
        }
    }
    return count;
}
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript"));  // 3
```

---

### Task 6 — Capitalize First Letter of Each Word
Uses a boolean flag `capitalizeNext` to track word boundaries and applies `.toUpperCase()` only at the start of each word.

```js
function capitalizeWords(sentence) {
    let result = "";
    let capitalizeNext = true;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            result = result + " ";
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result = result + sentence[i].toUpperCase();
            capitalizeNext = false;
        } else {
            result = result + sentence[i];
        }
    }
    return result;
}
console.log(capitalizeWords("hello world from javascript"));
// "Hello World From Javascript"
```

---

### Task 7 — IIFE with Parameter
An Immediately Invoked Function Expression that prints `"Hello, JavaScript!"` — the second word is passed as an argument.

```js
(function(language) {
    console.log("Hello, " + language + "!");
})("JavaScript");
```

---

### Task 8 — Callback Function
A `greet` function that accepts a name and a callback. The callback receives the name and prints the message.

```js
function greet(name, callback) {
    callback(name);
}

greet("Shahedul", function(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript.");
});
```

---

### Task 9 — Call Stack: `f2()` calls `f1()`

```
function f1() {}
function f2() { f1(); }
f2();
```

| Step | Stack (top → bottom) | Event |
|------|----------------------|-------|
| 1 | `f2` → `main` | `f2()` is called |
| 2 | `f1` → `f2` → `main` | `f1()` is called inside `f2` |
| 3 | `f2` → `main` | `f1()` returns |
| 4 | `main` | `f2()` returns |
| 5 | _(empty)_ | Program ends |

---

### Task 10 — Call Stack: `f2()`, `f3()` calls `f1()`, then `f1()` standalone

```
function f1() {}
function f2() {}
function f3() { f1(); }
f2();
f3();
f1();
```

| Step | Stack (top → bottom) | Event |
|------|----------------------|-------|
| 1 | `f2` → `main` | `f2()` is called |
| 2 | `main` | `f2()` returns |
| 3 | `f3` → `main` | `f3()` is called |
| 4 | `f1` → `f3` → `main` | `f1()` called inside `f3` |
| 5 | `f3` → `main` | `f1()` returns |
| 6 | `main` | `f3()` returns |
| 7 | `f1` → `main` | standalone `f1()` is called |
| 8 | `main` | `f1()` returns |
| 9 | _(empty)_ | Program ends |

---

## Key Takeaways

- A **function declaration** is hoisted; a **function expression** is not.
- **Default parameters** prevent `NaN` when an argument is missing.
- A **callback** is just a function passed as an argument to another function.
- A **pure function** always returns the same output for the same input — no side effects.
- The **call stack** is LIFO (Last In, First Out) — the most recently called function is always resolved first.
- An **IIFE** runs immediately and does not pollute the global scope.