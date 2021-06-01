function add(number1, number2) {
    return number1+number2;
}

var result1 = add(2, 3);
console.log("result1:  ", result1);

var result2 = add(12, 10);
console.log("result2:  ", result2);

document.getElementById("result1").innerHTML = result1;
document.getElementById("result2").innerHTML = result2;