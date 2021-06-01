// Conditionals in JavaScript are used when you want to execute only certain code based on a condition. If the condition returns true, the statements inside that condition will be excuted.

// let result,
//     number = 21;

// if(number % 2 === 0) {
//     result = "The number is even";
// } else {
//     result = "The number is odd";
// }

// console.log("The result is ", result);

// Based on the result of the statement number%2===0, we are then printing certain statements or executing some code.

// ES6 proposes a shorter way of doing this when only one line of code execution is involved (e.g. the code above) and when you need to return some value.

let number = 20;
let result = number % 2 === 0 ? "The number is even" : "The number is odd";
// If the condition is satisfied the code between "?" and ":" will be returned/executed or else the code after ":" will be executed.

console.log("The result is ", result);
