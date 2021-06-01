const add = (num1, num2) => {
    return +num1 + +num2;
}

try {
    let number1 = "20";
    let number2 = (Math.random()*100).tosFixed(2);

    let sum = add(number1, number2);

    document.getElementById("result").innerText = `The result of ${number1} and ${number2} is ${sum}.`;
}
catch(error) {
    document.getElementById("result").innerText = `Sorry, it looks like we have encountered an error.`;
}


// >> The final method or practice that we will follow is the try...catch...finally method
// >> If you notice, we have introduced a characted "s" in the method toFixed on line number 6. It is causing the error shown in the console.
// >> Let's use try...catch...finally

// The code that you wish to test should go inside the try block
// If there is a code failure, it will now be caught inside the catch block.