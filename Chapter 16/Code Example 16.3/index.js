//The following line contains 91 characters
let affordableFruits = foodItems.filter(item => item.type === "fruit" && item.price < 100);

//To maintain the rule of 80, you can instead change it to:
let affordableFruits = foodItems.filter(item =>
item.type === "fruit" && item.price < 100);