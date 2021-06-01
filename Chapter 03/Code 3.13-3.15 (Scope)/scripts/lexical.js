// Now, let's look at another instance of scoping - Lexical Scoping.

// function func1() {
//     var i = 20;
//     func2();
// }

// function func2() {
//     console.log("Func2:   ", i);
// }

// func1();

// What do you think will be the answer????
// It's an error because the variable i simply does not exist for the func2!
// However, if they were a nested function, it would work!
// Since they are nested functions, every inner function has access to outer functions's variables!
// This is called as lexical scope!

function grandparent() {
    var g_age = 75;
    parent();

    function parent() {
        var p_age = 50;
        child();

        function child() {
            var c_age = 25;
            console.log("g_age:  ", g_age);
            console.log("p_age:  ", p_age);
            console.log("c_age:  ", c_age);
        }
    }
}

grandparent();

// The code is not working and the result is not showing, because JavaScript encountered an error and stopped execution. So, let's comment that out!