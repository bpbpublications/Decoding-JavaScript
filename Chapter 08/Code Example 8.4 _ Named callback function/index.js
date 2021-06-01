function greet(name) {
    console.log(`A very good day to you, ${name}.`);
}

function initialize(firstName, lastName, callback) {
    let fullName = `${firstName} ${lastName}`;

    callback(fullName);
}

initialize('John', 'Doe', greet);
