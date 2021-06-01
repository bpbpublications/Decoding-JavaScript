// Here, we will look at a traditional JavaScript methods

class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    getFullName = () => {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    addNationality() {
        this.nationality = "French";
    }
}

let father = new Person('John', 'Doe');
father.getFullName();
father.addNationality();
console.log(father);
