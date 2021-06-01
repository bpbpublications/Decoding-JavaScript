let request = new XMLHttpRequest();

// ------------------------------------------

// open(method, url, async, username, password);

// ------------------------------------------

request.open('GET', 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', true);

// ------------------------------------------

request.send()

// ------------------------------------------

request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
}
