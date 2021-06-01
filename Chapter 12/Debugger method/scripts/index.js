const add = (num1, num2) => {
    debugger;
    return +num1 + +num2;
}

let number1 = "20";
let number2 = (Math.random()*100).toFixed(2);

let sum = add(number1, number2);

document.getElementById("result").innerText = `The result of ${number1} and ${number2} is ${sum}.`

// >> Once again, we are taking the old erroneous code and we will try to modify it.
// >> This time, we will make use of the debugger keyword.