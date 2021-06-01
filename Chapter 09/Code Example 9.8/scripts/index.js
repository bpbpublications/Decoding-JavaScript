// Here, we will be creating an AJAX request
// AJAX request requires 4 steps:
/*
1. Create a request
2. Open the request
3. Send the request
4. Wait for response
*/

let request = new XMLHttpRequest(); // 1. Create a request

request.open('GET', 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', true); // 2. Open the request

request.send(); // 3. Send the request

request.onreadystatechange = function() {
    // 4. Wait for response
    if(this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
}