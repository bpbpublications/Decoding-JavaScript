function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Person.prototype.getFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
}
