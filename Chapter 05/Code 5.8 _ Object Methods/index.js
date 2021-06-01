var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    fullName: function() {
        return this.firstName + "  " + this.lastName;
    }
}
