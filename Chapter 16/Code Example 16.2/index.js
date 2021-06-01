// Always add spaces between operators, including assignment operators.
let name = "John Doe";
let sum = number1 + number2;

// Add spaces after semicolon (";") inside for loops
for(let i=0; i<20; i++) { /*code*/ }

// Before any curly braces ("{") except when you are using template literals
let person = {
    name: "John Doe",
    address: {
        city: "New York",
        country: "United States"
    }
}

let speech = `His name is ${firstName}.`;

// All new declarations should be on new line:
let firstName,
    lastName,
    age;

// More than one arguments should be on a new line
function getRole (
    name,
    id,
    department,
    manager
) { /*code*/ }