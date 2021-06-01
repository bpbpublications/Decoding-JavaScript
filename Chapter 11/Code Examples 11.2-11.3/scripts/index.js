// Here, we will learn how to create cookies in JavaScript

document.cookie = "username=john.doe; expires=Sun, 31 Jan 2021 20:00:00 GMT; path: /";

// To read cookie data, you need to do the following:

console.log(document.cookie);
console.log(document.cookie.split(";"));

// To delete a cookie, you can change its expiration time