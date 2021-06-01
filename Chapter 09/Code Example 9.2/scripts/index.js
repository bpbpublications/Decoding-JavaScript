let obj = {
    firstName: "John",
    lastName: "Doe",
    address: {
        building: "River View Apartments",
        apartment: 12,
        road: "York Road",
        city: "London",
        country: "England"
    },
    cars: ["BMW", "Audi", "Jaguar"]
};

let objJSON = JSON.stringify(obj);
console.log(objJSON);
console.log(typeof objJSON);
