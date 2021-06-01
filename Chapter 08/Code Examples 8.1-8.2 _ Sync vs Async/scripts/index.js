// console.log("Wake Up"); //1
// console.log("Brush your teeth"); //2
// console.log("Take a shower"); //3

// This was synchronous JavaScript, i.e. a waterfall concept, 
// where the next line of code will be executed only when the previous line of code is complete.

// -----------------------------------------------------------------------------------------------

// ASYNCHROUS JAVASCRIPT

console.log("1. Wake Up");

setTimeout(() => {
    console.log("2. Brush your teeth");
}, 2000);

console.log("3. Take a shower");

// As you can see in the output, the statement "2. Brush your teeth" is printed after "3. Take a shower".
// This happens because JavaScript does not wait for the second statement to complete its timer of 2 seconds.
// The setTimeout function is used for executing any code mentioned its first argument after waiting for the
// number of milliseconds added in the second argument.
// Hence, 1 and 3 are executed first, and after 2 seconds 2 is executed.
// This concept of not waiting for code is called asynchronous JavaScript.