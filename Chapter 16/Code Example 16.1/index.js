// Example 1
let c = "main";
let x = f(c);
let a = [],
    i;
for(i=0;i<x.length;i++) {
    if(x[i].id.includes("box")) a.push(x[i]);
}
function f(a) { return document.getElementsByClassName(a); }

// ------------------------------------------------------------------------------------------------

// Example 2
let boxElements = [];
let className = "main";
let elements = findElements(className);

for(let index = 0; index < elements.length; index++) {
    if(elements[index].id.includes("box")) {
        boxElements.push(elements[index]);
    }
}

function findElements(className) {
    return document.getElementsByClassName(className);
}
