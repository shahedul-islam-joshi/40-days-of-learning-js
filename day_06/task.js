function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212
console.log(celsiusToFahrenheit(-40));  // -40






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








function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5));  // 120  (5*4*3*2*1)
console.log(factorial(3));  // 6
console.log(factorial(0));  // 1 (by definition, the factorial of 0 is 1)







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









(function(language) {
    console.log("Hello, " + language + "!");
})("JavaScript");






function greet(name, callback) {
    callback(name);
}

greet("Shahedul", function(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript.");
});