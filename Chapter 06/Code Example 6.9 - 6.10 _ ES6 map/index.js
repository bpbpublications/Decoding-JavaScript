var numbers = [2, 4, 6];
var double = [];

for(var i=0; i<numbers.length; i++) {
    let value = numbers[i]*2;
    double.push(value);
}

console.log("Double:   ", double);


let numbers = [2, 4, 6];
let double = numbers.map(number => number * 2);

console.log("Double:   ", double);

