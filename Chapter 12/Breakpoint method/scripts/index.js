const add = (num1, num2) => {
    return +num1 + +num2;
}

let number1 = "20";
let number2 = (Math.random()*100).toFixed(2);

let sum = add(number1, number2);

document.getElementById("result").innerText = `The result of ${number1} and ${number2} is ${sum}.`


// >> Taking the same erroneous code as before, we will now try to use another method to solve the problem.
// >> To set a breakpoint, you need to go to the Sources Panel of the Chrome Developer Tools

