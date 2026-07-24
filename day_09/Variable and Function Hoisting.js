// Variable hoisting (var)
console.log(city); // undefined — declaration is hoisted, the value isn't
var city = "Dhaka";
console.log(city); // Dhaka

// Function hoisting (function declaration)
greet(); // "Hello!" — the whole function is hoisted, so this works
function greet() {
  console.log("Hello!");
}

// Function expressions are NOT hoisted the same way
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi!");
};