// There are two types of Web Storage APIs
// 1. Local Storage
// 2. Session Storage

// Local Storage is persistent, i.e., it will not get deleted until you manually delete it.
// Session Storage is deleted right after you close the particular tab or the window

// ------------------------------------------------------------------------------------------------------------

// SESSION STORAGE

// Setting session storage items
// sessionStorage.setItem("username", "john.doe");

// // Fetching value from sessions storage
// console.log(sessionStorage.getItem("username"));

// sessionStorage.setItem("id", "0012");
// sessionStorage.removeItem("username"); // Removing a particular value from session storage

// setTimeout(() => {
//     sessionStorage.clear(); // Clearing a session storage
// }, 2000)

// --------------------------------------------------------------------------------------------------------------

// LOCAL STORAGE

// Setting local storage items
// localStorage.setItem("isLogin", true);

// // Fetching value from local storage
// console.log(localStorage.getItem("isLogin"));

// // Removing a single particular value from local storage
// localStorage.removeItem("isLogin");

// localStorage.setItem("theme", "dark");

// //Clearing the entire local storage
// setTimeout(() => {
//     localStorage.clear();
// }, 2000);


// NOTE: THE REASON WHY WE ARE INTRODUCING THE SETTIMEOUT IS TO WAIT FOR SOMETIME BEFORE THE STORAGE IS CLEARED. IN THIS WAY, YOU CAN SEE THE DATE BEFORE IT GETS REMOVED. IT IS NOT A PART OF THE CLEAR SYNTAX FOR BOTH THE STORAGE APIS.


// Difference between local storage and session storage


// sessionStorage.setItem("username", "John Doe");
// localStorage.setItem("theme", "dark");


