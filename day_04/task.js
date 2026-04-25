
//Task: 01 — switch case sensitivity
let days = "Monday";

switch (days) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
/* 
   output: It's a normal day. Why? — "Monday" has capital M, but the case checks "monday" (lowercase). 
   Switch uses strict equality (===), so they don't match. The default block runs instead.
*/






//Task: 02 — ATM cash withdrawal
let amount = 450; // change this to test

if (amount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

// amount = 500  → Withdrawal successful
// amount = 450  → Invalid amount






//Task: 03 — calculator with switch-case
let num1 = 10;
let num2 = 3;
let operator = "+"; // change to -, *, /, %

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
  default:
    console.log("Invalid operator");
}





//Task: 04 — movie ticket price
let Age = 25; // change this to test

if (Age < 18) {
  console.log("Ticket price: $3");
} else if (Age <= 60) {
  console.log("Ticket price: $10");
} else {
  console.log("Ticket price: $8");
}

// age = 10  → $3
// age = 25  → $10
// age = 65  → $8






//Task: 05 — horoscope sign (no if-else)
let month = 3; // 1=Jan, 2=Feb ... 12=Dec

switch (month) {
  case 3:
  case 4:
    console.log("Aries");
    break;
  case 5:
    console.log("Taurus");
    break;
  case 6:
    console.log("Gemini");
    break;
  case 7:
    console.log("Cancer");
    break;
  case 8:
    console.log("Leo");
    break;
  case 9:
    console.log("Virgo");
    break;
  case 10:
    console.log("Libra");
    break;
  case 11:
    console.log("Scorpio");
    break;
  case 12:
    console.log("Sagittarius");
    break;
  case 1:
    console.log("Capricorn");
    break;
  case 2:
    console.log("Aquarius");
    break;
  default:
    console.log("Invalid month");
}





//Task: 06  — which triangle?
let side1 = 5;
let side2 = 5;
let side3 = 8; // change all 3 manually to test

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}

// 5,5,5  → Equilateral Triangle
// 5,5,8  → Isosceles Triangle
// 3,5,7  → Scalene Triangle



