let num = 7;
num % 2 === 0 ? console.log(num + " is Even") : console.log(num + " is Odd");
// uses % operator + ternary
// 7 is Odd


let Age = 20;
Age >= 18 ? console.log("Eligible for a driving licence")
          : console.log("Not eligible. Must be 18+");
// Eligible for a driving licence


let monthlySalary = 12300;
let annualSalary  = monthlySalary * 12;   // 147600
let bonus         = annualSalary * 20 / 100;  // 20%
let ctc           = annualSalary + bonus;
console.log("CTC: $" + ctc);
// CTC: $177120


let color = "Red";
color === "Red"   ? console.log("STOP")
: color === "Green" ? console.log("GO")
: console.log("SLOW DOWN");
// STOP



let units         = 5;
let monthlyBill   = units * 30 * 150;      // per day * 30 days * ₹150
let annualBill    = monthlyBill * 12;
let discount      = annualBill * 20 / 100; // 20% off
let annualPayable = annualBill - discount;
console.log("Monthly: $" + monthlyBill);
console.log("Annual (after 20% off): $" + annualPayable);
// Monthly: $22500
// Annual (after 20% off): $216000



let year = 2025;
// Leap year: divisible by 4, but not 100, unless also by 400
(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  ? console.log(year + " is a Leap Year")
  : console.log(year + " is NOT a Leap Year");
// 2025 is NOT a Leap Year



let pp = 42, q = 17, r = 99;
let max = pp > q && pp > r ? pp
        : q > r          ? q
        : r;
console.log("Max:" + max);
// Max: 99



let counts = 5;
let doubled = counts << 1; // left shift by 1 = multiply by 2
// 5  → 0101 in binary
// << 1 → 1010 = 10 in decimal
console.log(doubled);
// 10