function add(n1, n2) {
    var num1 = +n1;
    var num2 = +n2;
    var total = num1 + num2;
    document.getElementById("total").innerHTML = total;
}

add("5", "4");

// In the previous code, we used a "debugger" to pause code execution.
// Now, we will use Google Chrome's breakpoints to pause code execution.

// To use that, we first need to remove the debugger here. Also, as you might have seen, I have reverted the changes made to the variables num1 and num2.

// Now, let's remove the debugger!

// Now, we will pause execution by adding a breakpoint. We will do this by clicking next to the line number where we want to pause code execution. Now, let's refresh the page!

// And this is how we successfully debugged and solved our problem!