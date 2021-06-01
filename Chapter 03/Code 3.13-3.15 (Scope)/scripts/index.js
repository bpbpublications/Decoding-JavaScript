// 1. Global scope - accessible throughout the file
// 2. Local Scope - accessible only inside the function

var number = 25;
console.log("Call 1 | Before and outside the function. Number:  ", number);

// Now let's create a function!
// Now, we will re-initalise the variable number!
// The earlier number in Call 2 becomes undefined, because now the variable number has been created fresh inside the function with a new value 40. 
// It means, when the first console.log statement is written INSIDE THE FUNCION and now that we have created a new variable altogether, the first console.log statement will have no memory of any variable by the name number. This is called "Local Scope".

// PLOT TWIST: Although, we have created the function BEFORE the Call 4 console statement, technically, we are calling or asking the function to execute itself AFTER the Call4 statement. It means, Call 4 will be printed first. And since the value of number is 25 before the function is executed, 25 is printed.

function displayNumber() {
    console.log("Call 2 | Inside the function before re-initializing. Number:  ", number);
    var number = 40;
    console.log("Call 3 | Inside the function after re-initializing. Number:  ", number);
}

console.log("Call 4 | After the function declaration BUT before calling the function. Number: ", number);

displayNumber();

console.log("Call 5 | After the function declaration AND the function invocation aka calling the function. Number:  ", number);

// So, as you can see, variables declared inside the function will not be accessible outside!


