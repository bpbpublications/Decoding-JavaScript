var person1 = {
    name: 'Mark Zuckerberg',
    age: 36,
    nationality: "American"
}

var person2 = person1;
console.log("Person1:   ", person1);
console.log("Person2:   ", person2);

person1.name = 'Elon Musk';
console.log("Person1:   ", person1);
console.log("Person2:   ", person2);
