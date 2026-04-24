console.log("day_03");


// Operator - Symbols + - * /
// Operands - x+y, x and y are the operands.
// Expression x = 2 / 3 + 4


// ***Arithmetic Operators***
console.log("**** Arithmetic Operators ****")
let a = 25;
let b = 65;
console.log(a +b); //90
console.log(a - b); //-40
console.log(a * b); //1625
console.log(a / b); //0.38461538461538464

let f_name = "Shahedul Islam";
let l_name = " Joshi";
console.log(f_name + l_name); // don't do this!




// ***exponential operator***
console.log(a**b); // means a^b, output: 7.346839692639297e+90




// ***reminder operator***
let x = 12;
let y = 5;
console.log(x%y); // output: 2




// ***post increment and pre increment operator***
let count = 7;
console.log(count++);    // count = count+1, output: 7
console.log(count);     // output: 8
console.log(++count);  // output: 9 

console.log(count--);    // count = count+1, output: 9
console.log(count);     // output: 8
console.log(--count);  // output: 7



// ***Assignment Operators***
console.log("**** Assignment Operators ****")

let p = 10;
p = p+5; //output: 15
console.log(p);
p+=5; // same effect like p = p+5;
console.log(p); // output: 20
p-=5; // same effect like p = p-5;
console.log(p); // outout: 15
p*=2; // it's means that p = p*2
console.log(p); // output will be 30
p/=2; // it's means that p = p/2
console.log(p); // output will be 15



// Comparison Operators
console.log("**** Comparison Operators ****")

console.log(10==20); // output will be false
console.log(0==false); // output will be true
console.log(0==true); // output will be false
console.log(3 == '3') // output will be true, weird🤔
console.log(3 != '3') // output will be false
console.log(3 === '3') // output will be false, now ok!🙂



console.log(null === null) // output will be true
console.log(undefined === undefined) // output will be true

// NaN = Not a Number

let obj1 = {'name': 'Shahedul Islam'} // XX0011
let obj2 = {'name': 'Shahedul Islam'} // YY022

console.log(obj1 === obj2)
console.log(obj1 !== obj2)

4 > 3
2 > 1
1 > 7
2 >= 2

4 < 3
2 < 7
3 <= 9




// Logical operators
console.log("**** Logical operators ****")

// && || ?? !
// op1 && op2

console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("Cow" && "Horse"); // "Horse"

4 > 5 && 4 === 6

console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log("Cow" || "Horse"); // "Cow"

console.log(!false)

let a1 = null ?? 1; // 1
let a2 = undefined ?? 3 // 3
const a3 = false ?? "tapaScript" // false
const a4 = 0 ?? "tapas" // 0






// Conditional (ternary) operator
console.log("**** Conditional (ternary) operator ****")

// condition ? val1 : val2

let age = 23;
age >= 60 ? "Senior Citizen" : "Non Senior Citizen";


// Bitwise operators
console.log("**** Bitwise operators ****")

// 10 in decimal
// 10 in 32 bits representation of 0, 1

// & | ^ ~ << >>



/*
15 & 9 = 9
1111 & 1001 = 1001 = 1 * (2 ** 0) + 0 * (2 ** 1) + 0 * (2 ** 2) + 1 * (2 ** 3)

15 / 2 = 7 (1)
7 / 2 = 3 (1)
3 / 2 = 1 (1)

9/2 = 4 (1)
4/2 = 2 (0)
2/2 = 1 (0)

15 | 9 = 15

1111 | 1001 = 1111

15 ^ 9 = 6
1111 ^ 1001 = 0110

9 << 2 = 36

1001 << 2 = 100100

9 >> 2 = 2
1001 >> 2 = 0010


// Grouiping
console.log("**** Grouping ****")

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r) // 1 + 2 * 3 = 1 + 6 = 7
p + (q * r) // 7

(p + q) * r // (1 + 2) * 3 = 3 * 3 = 9

p * r + q * r = 1 * 3 + 2 * 3 = 3 + 6 = 9

p * (r + q) * r


// typeof
console.log("**** typeof ****")


typeof "tapas"; // "string"
typeof false; // "boolean"

let size = 100;
typeof size; // "number"

const numbers = [1,2,3,4]
typeof numbers; // "object"

typeof null; // "object"


// instanceof
console.log("**** instanceof ****")

// object instanceof objectType
*/