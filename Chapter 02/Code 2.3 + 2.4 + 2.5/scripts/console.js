function add(n1, n2) {
    var num1 = +n1;
    var num2 = +n2;
    var total = num1 + num2;
    debugger;
    document.getElementById("total").innerHTML = total;
}

add("5", "4");

// Now we add a debugger in our code. 
// But before that, we will open the Developer Tools on Google Chrome

// Before we place the debugger, we will check the answer rendered.

// 5+4 should be 9, but we get 54, which is completely WRONG
// To test where we went wrong, let's add aa debugger to the code
// We need to understand why the addition went wrong. 
// So, let's place a debugger right after the addition.

// Adding the debugger will ensure the code execution stops at the line where it is placed.
// Of course, you need to ensure the Developer tools is open to activate debugger.
// Now, let's go back to the web page.


// WE SUCCESSFULLY USED DEBUGGER TO DEBUG THE PROBLEM IN OUR CODE AND RESOLVE IT!