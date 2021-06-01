// The very first method for debugging is using the console.log statement
//  We will introduce an erroneous code here:

const add = (num1, num2) => {
    return num1 + num2;
}

let number1 = "20";
let number2 = (Math.random()*100).toFixed(2);

let sum = add(number1, number2);

document.getElementById("result").innerText = `The result of ${number1} and ${number2} is ${sum}.`