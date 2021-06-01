// Here, we will be creating Classes. 

class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    getFullName = () => {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let father = new Person('John', 'Doe');
father.getFullName();
