# Temporal Dead Zone & Hoisting

40 Days of JavaScript — tapaScript Challenge

## 1. Temporal Dead Zone (TDZ)

`let` and `const` variables are hoisted to the top of their block, but they stay uninitialized until their declaration line actually runs. Accessing them before that point throws a `ReferenceError` — that gap is called the Temporal Dead Zone.

```javascript
{
  console.log(fruit); // ❌ ReferenceError: Cannot access 'fruit' before initialization

  let fruit = "Mango";
  const price = 120;
  let isAvailable = true;

  console.log(fruit, price, isAvailable); // ✅ Mango 120 true
}
```

## 2. Variable and Function Hoisting

`var` and function declarations are both hoisted, but differently. `var` is hoisted and set to `undefined` right away, while a `function` declaration is hoisted with its entire body — so it can be called before it appears in the code. A function stored in a variable doesn't get that same treatment.

```javascript
console.log(city); // undefined — declaration is hoisted, the value isn't
var city = "Dhaka";
console.log(city); // Dhaka

greet(); // "Hello!" — the whole function is hoisted
function greet() {
  console.log("Hello!");
}

sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi!");
};
```

## Reference

- [Lesson video](https://youtu.be/OqMxh1QdYEg?si=9Sv13BX5D6VQRBLa)