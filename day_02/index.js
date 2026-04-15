console.log("day-02");

//variables: variables are used to store data in js

// - 'var' : Function-scoped, can be redeclared (not recommended)
// - 'let' : blocke-scoped, can be reassigned
// - 'const' : blocke-scoped, **can't** be reassigned

var address = "Gazipur";
console.log(address);

var address = "Istanbul";
console.log(address);





var address = "Chittagong";
console.log(address);

address = "Anatolia";
console.log(address);



/*
**error**
const address = "Koniya";
console.log(address);

address = "Aleppo";
console.log(address);
*/


let age;
age = 18;

age = 23;
age = 35;

let name, Id, department;



/*
- **Primitive Data Types:**
    - `String` - Text values ("Hello")
    - `Number` - Numeric values (25, 3.14)
    - `Boolean` - True/False (true, false)
    - `Undefined` - A variable declared but not assigned (let x;)
    - `Null` - Represents "nothing" (let y = null;)
    - `BigInt` - Large numbers (BigInt(12345678901234567890))
    - `Symbol` - Unique identifiers (Symbol("id"))
- **Non-Primitive (Reference) Data Types:**
    - `Object` - Collection of key-value pairs
    - `Array` - Ordered list of values
    - `Function` - Code that can be executed
  */




    salary = null;



    let student = {
      name: "Joshi",
      age: 22,
      isEnrolled: true
    };
    console.log(student.name); // Output: Joshi   

    let arr = [1,2,4,5]
    
    
let a = 26;
let b = a; // 26
b = 4; // 04
console.log(a); // 26 (original remains unchanged)