console.log("Task 1: Pyramid Pattern");

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + "* ";
    }
    console.log(row);
}




console.log("Task 2: Multiplication Table");
let N = 3;
let i = 1;

for ( i = 1; i <= 10; i++) {
    console.log(N + " x " + i + " = " + (N * i));
}



console.log("Task 3: Sum of Odd Numbers (1–500)");

let sum = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0) {  // if remainder is NOT 0, it's odd
        sum += i;
    }
}

console.log("Sum of all odd numbers from 1 to 500:", sum);




console.log("Task 4: Numbers 1 – 20, skipping multiples of 3");

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;  // skip this iteration
    }
    console.log(i);
}



console.log("Task 5: Reverse a Number");

let num = 6789;
let reversed = 0;

// Step 1: get the last digit using %
// Step 2: add it to reversed
// Step 3: remove the last digit by dividing by 10

// num = 6789 → last digit = 9  → reversed = 9    → num = 678
// num = 678  → last digit = 8  → reversed = 98   → num = 67
// num = 67   → last digit = 7  → reversed = 987  → num = 6
// num = 6    → last digit = 6  → reversed = 9876 → num = 0 → stop

while (num > 0) {
    let lastDigit = num % 10;         // same % you used for even/odd check
    reversed = (reversed * 10) + lastDigit;  // shift left, add new digit
    num = parseInt(num / 10);         // chop off the last digit
}

console.log("Reversed:", reversed);











/*

A for loop is best when you know exactly how many times to loop. 
You write the initialization, condition, and update all in one 
line — it's compact and readable for counters.


A while loop is best when you don't know the count in advance and 
want to keep looping as long as something is true. The condition 
is checked before the code runs, so if it starts false, the code never 
runs at all.


A do-while loop is the same as while, but the condition is checked after the code runs. 
This means the code always runs at least once, no matter what. Good example: asking a 
user for input — you want to ask at least once before deciding whether to ask again.


*/