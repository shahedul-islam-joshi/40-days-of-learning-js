console.log("Day 06");


//                     *****Function declaration*****
function printThis(){
    // code goes here
    console.log("This is a simple function.");
}
// Call or invoke the function
printThis();








//                             *****Function with parameter*****
function printThisWithParameter(name){
    // code goes here
    console.log(`This is a simple function with parameter ${name}.`);
}

printThisWithParameter("John");









//                             *****Function with multiple parameters*****
function printThisWithMultipleParameters(name, age){
    // code goes here
    console.log(`This is a simple function with multiple parameters ${name} and ${age}.`);
}

printThisWithMultipleParameters("John", 30);










//                             *****Function with default parameter*****
function printThisWithDefaultParameter(name = "John"){
    // code goes here
    console.log(`This is a simple function with default parameter ${name}.`);
}

printThisWithDefaultParameter();
printThisWithDefaultParameter("Jane");








//                             *****Function as expression*****
const printThisAsExpression = function(name){
    // code goes here
    console.log(`This is a simple function as expression with parameter ${name}.`);
}
printThisAsExpression("John");



let printMe = function(){
    console.log("This is a function expression.");
}
console.log(printMe);
printMe();





//                              *****parameter & argument*****
function sumA (a, b){
    return a + b;
}
console.log(sumA(5, 10));



let result = sumB;
function sumB (a, b){
    let resultA = a + b;
    return resultA;
}
console.log(sumB(25, 10) );


function sumC (a, b){
    const resultB = a + b;
    console.log(resultB);
}
sumC(25, 25);



function sumD (a, b){
    const resultD = a + b;
    //console.log(result);
        return resultD;
}
let resultD = sumD(25, 25);
console.log(resultD);



function double (a){
    return 2 * a;
}
console.log(double(15));



function double (a){
    return 2 * a;
}
console.log(double(resultD));



function calculate (a, b) {
    return (2 * (a + b));
}
calculate(45, 90);
console.log(calculate(45, 90));



function Calculate (a, b) {
    return (3 * (a + b));
}
const resultC = Calculate(45)
console.log(resultC);         // NaN, because b is not defined. We need to pass two arguments to the function.
// 2 + 3 * (45 + undefined) => 2 + 3 * NaN => 2 + NaN => NaN





function Calculate (a, b = 0) { // we can set a default value for b, so that if we don't pass a value for b, it will be 0.
    return (3 * (a + b));
}
const resultE = Calculate(45);
console.log(resultE);      // default value for b is 0, so if we don't pass a value for b, 
// it will be 0. 3 * (45 + 0) => 3 * 45 => 135





// Rest parameters
function calculateSum (m, n, p, q, r, x, y, z, ...rest){ // we can use rest parameters to pass any number of arguments to the function.
console.log(m, n, p, q, x, y, z, rest);
}
calculateSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20); // we need to pass 20 arguments to the 
// function, but we can use rest parameters to pass any number of arguments to the function.




//                              *****Nested function*****
function outerFunction(){
    console.log("This is the outer function.");
    function innerFunction(){
        console.log("This is the inner function.");
    }
    innerFunction();
}
outerFunction();


function _outerFunction(){
    console.log("This is the second outer function.");
    return function _innerFunction(){
        console.log("This is the second inner function.");
        console.log("Joshi");
        return "Joshi";
    }
    // ***innerFunction();***
    // we cannot call the inner function here, because it is returned by the outer function. 
    // We need to call the inner function after calling the outer function.
}
// _outerFunction();
let _innerFunc = _outerFunction(); // we need to store the returned function in a variable, so that we can call it later.
_innerFunc(); // we can call the inner function using the variable that stores the returned function.
console.log(_innerFunc); // we can also log the variable that stores the returned function, to see the function definition.
console.log(_innerFunc()); // we can also call the inner function directly, without storing it in a variable, 
// but it is not recommended, because it is not reusable.





//                              *****Callback function*****
function callbackFunction(parameter){
    console.log("First callbackFunction");
    parameter();
}
callbackFunction(function(){
    console.log("This is a second callback function.");
});



function _callbackFunction(_parameter){
    console.log("Third callbackFunction");
    _parameter();
}
const _secondCallbackFunction = function(){
    console.log("This is a fourth callback function.");
}
_callbackFunction(_secondCallbackFunction);

// based on condition, we can call the callback function or not.
const toCallbackFunction = true;
function CallBackFunction(parameter){
    console.log("Fifth callbackFunction");
    if(toCallbackFunction){
        parameter();
    }
}
CallBackFunction(function(){
    console.log("This is a sixth callback function."); // this will be called, because the condition is true.
});


const _toCallbackFunction = false;
function _CallBackFunction(parameter){
    console.log("Seventh callbackFunction");
    if(_toCallbackFunction){
        parameter();
    }
}
_CallBackFunction(function(){
    console.log("This is a Eighth callback function."); // this will not be called, because the condition is false.
});


function anotherFunction(functionParameter){
    console.log("This is ninth callback function.");
    functionParameter();
}

const anotherCallbackFunction = function(){
    console.log("This is a tenth callback function.");
}
anotherFunction(anotherCallbackFunction); // this will be called, because we are passing the function as an argument to 
// another function.




//                                 *****pure function*****

function _pureFunction(name){
    return "Hello, " + name + "!";
}
console.log(_pureFunction("Joshi")); // this will always return the same output for the same input, because it 
// does not have any side effects.
console.log(_pureFunction("Joshi"));
console.log(_pureFunction("Joshi"));
console.log(_pureFunction("Joshi"));
console.log(_pureFunction("Joshi"));
console.log(_pureFunction("Joshi"));
console.log(_pureFunction("Joshi"));
console.log(_pureFunction("Joshi")); // this will always return the same output for the same input, because it does not
// have any side effects.


// made it impure by using a global variable
let greetingMsg =  "Hello, ";
function pureFunction(name){
    return greetingMsg + name + "!";
}
console.log(pureFunction("Joshi")); 
console.log(pureFunction("Joshi"));
console.log(pureFunction("Joshi"));
console.log(pureFunction("Joshi"));
console.log(pureFunction("Joshi"));
greetingMsg = "Hola, "; // this will change the output of the pure function, because it is using a global
// variable, which is a side effect.
console.log(pureFunction("Joshi"));
console.log(pureFunction("Joshi"));
console.log(pureFunction("Joshi"));



//                              *****Higher order function*****

function getCar(car) {
    car();
}

getCar(function() {
    console.log("Audi");
});

function returnsFunction() {
    return function() {
        console.log("BMW");
    }
}
returnsFunction()(); // we can call the returned function directly, without storing it in a variable,
// but it is not recommended, because it is not reusable.

const retunsFunction2 = returnsFunction();
retunsFunction2(); // we can also call the returned function using the variable that stores the returned function.




//                                *****Arrow function*****

const greetMe = () => {
    console.log("Hello, World!");
};
greetMe();



const _greetMe = () => console.log("Hello, again!");
_greetMe();




const greetMeWithParameter = name => console.log(`Hello, ${name}!`);
greetMeWithParameter("Joshi");




const greetMeWithMultipleParameters = (name, age) => console.log(`Hello, ${name}! You are ${age} years old.`);
greetMeWithMultipleParameters("Joshi", 23);




const greetMeWithDefaultParameter = (name = "Joshi") => console.log(`Hello, ${name}!`);
greetMeWithDefaultParameter();
greetMeWithDefaultParameter("Jane");



let GreetMe = (GreetingMSG) => GreetingMSG + " Joshi!";
console.log(GreetMe("What's up,"));





//                                *****IIFE (Immediately Invoked Function Expression)*****
(function(){
    console.log("This is an IIFE.");
})(); // this will be executed immediately, because it is an IIFE. We can also pass arguments to the IIFE, if needed.






