var cars = ['BMW', 'Audi', 'Mercedes'];
console.log(cars);
document.getElementById('text1').innerHTML = cars;

// Now, we will change the elements inside the cars array
cars[1] = 'Jaguar';
console.log(cars);

cars[7] = 'Rolls Royce';
console.log(cars);