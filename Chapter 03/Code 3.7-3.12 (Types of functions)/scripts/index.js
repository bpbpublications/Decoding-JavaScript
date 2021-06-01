// 1. Named functions - These functions have a name assigned.
function add(number1, number2) {
    return number1+number2;
}
var result = add(2, 3);
console.log("Result of named function add:  ", result);


// ------------------------------------------------------------------------

// 2. IIF - Immediately invoked functions. They do not pollute the global space.
(function(number1, number2) {
    console.log("Result of IIF:  ", number1+number2);
})(2, 3);

// ------------------------------------------------------------------------

// 3. Anonymous functions - They do not have any name.
var sum = function(number1, number2) {
    return number1 + number2;
}
console.log("Result of the anonymous function:   ", sum(2, 3));

// ------------------------------------------------------------------------

// 4. Recursive functions - They call itself multiple times.
function countdown(number) {
    console.log("It's ", number);
    var nextNum = number - 1;
    if(nextNum > 0) {
        countdown(nextNum);
    }
}
console.log("The countdown begins!");
countdown(5);

// ------------------------------------------------------------------------

// 5. Methods are functions inside objects.

var person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        console.log(this.firstName + "  " + this.lastName);
    }
}

person.getFullName();

// NOTE: Always remember to add () to execute a method!

