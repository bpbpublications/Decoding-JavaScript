var person = {
    firstName: "John",
    lastName: "Doe",
    age: 24
}

// This way of creating objects is called using object literals. It is the preferred way of writing objects.

// There are two ways to access properties of an object:
// 1. Dot notation

console.log("person.firstName:   ", person.firstName);

// 2. Square bracket notation

console.log('person["firstName"]:   ', person["firstName"]);

// Always remember to put the words inside the square brackets in quotes, unless you have a variable with the same name. If you do not put the keyword/text inside the brackets with quotes, JavaScript will consider that as a variable.

// console.log('person[firstName]:    ', person[firstName]);

// As we can see, JavaScript is looking for a variable named 'firstName' since you didn't wrap the text inside square brackets with quotes.

// To change properties of an object, you can simply fetch the value using dot or square notation and then assign a new value.

console.log("Before changing the value of the firstname:  ", person.firstName);
person.firstName = "Dave";
console.log("After changing the value of the firstname:  ", person.firstName);

