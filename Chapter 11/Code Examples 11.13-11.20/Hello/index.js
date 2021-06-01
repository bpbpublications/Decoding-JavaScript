// document.cookie =  "username=john.doe; theme=dark; expires=Fri, 27 Nov 2020 20:08:00 GMT; path: /";

// console.log(document.cookie);
// console.log(document.cookie.split(";"));

// sessionStorage.setItem("username", "john.doe");
// console.log(sessionStorage.getItem("username"));
// console.log(sessionStorage.removeItem("username"));
// console.log(sessionStorage.getItem("username"));
// console.log(sessionStorage.getItem("password"));

// localStorage.setItem("isLogin", true);
// console.log(localStorage.getItem("isLogin"));

let idb = window.indexedDB;

if(!idb) window.alert("Your browser doesn't support IndexedDB!");

const data = [{id: "01", name: "John Doe", age: 27}, {id: "02", name: "Jane Doe", age: 27}];

let db;
let request = idb.open("newDB", 1);

request.onerror = function(event) { console.log(event); }
request.onsuccess = function(event) { db = request.result; console.log(db); add(); read(); }

request.onupgradeneeded = function(event) {
    let db = event.target.result;
    let objectStore = db.createObjectStore("employee", {keyPath: "id", autoIncrement: true});
    // debugger;
    objectStore.add(data[0]);
}

console.log(db);

function read() {
    let transaction = db.transaction(["employee"]);
    let objectStore = transaction.objectStore("employee");
    console.log(transaction, objectStore);
    let request = objectStore.get("02");
    request.onerror = function(event) { alert("Unable to retrieve!"); };
    request.onsuccess = function(event) { console.log(request.result); }
}

function add() {
    let request = db.transaction(["employee"], "readwrite");
    request.oncomplete = function(event) { console.log("Request created for readwrite on employee"); };
    let objectStore = request.objectStore("employee")
    let storeRequest = objectStore.add(data[1]);

    storeRequest.onsuccess = function(event) { console.log(`New value has been added with the id ${event.target.result}`); }
}

if('serviceWorker' in navigator) {
    navigator.serviceWorker
            .register('sw.js')
            .then(function() { console.log("Service Worker registered"); })
}
