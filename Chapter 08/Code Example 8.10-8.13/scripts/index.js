// Here, we will try the concert example for promises

let ready = true;

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(ready) {
            // If ready is true, then resolve will be called with the details object.
            let details = {
                location: 'Manchester Arena',
                city: 'Manchester, UK',
                date: '21/12/2020',
                time: '17:00 CST'
            };
            resolve(details);
        } else {
            // If ready is false, then reject will be called with the mentioned message.
            reject("Sorry, we will not be hosting any concerts this year.");
        }
    }, 2000);
});

const bookTicket = date => {
    return new Promise((resolve, reject) => {
        let message = `Book ticket for ${date}.`;
        resolve(message);
    })
}

// ------------------------------------------------------------------------------------------------------------

// The first promise resolution (stored in variable response) is related to the first promise. 
// We call the second promise bookTicket here.
let response = promise.then((details) => {
    console.log("Hooray! The concert is happening!");
    console.log("Details:  ", details);
    return bookTicket(details.date);
})
.catch((error) => {
    console.log(error);
})

// The second promise is handled here.
response.then((details) => {
    console.log(details);
}).catch(error => {
    console.log(error);
})

// We also wish to call another handler to the original promise number 1.
promise.then(details => {
    console.log(`The concert is happening at ${details.location} in the city of ${details.city} on ${details.date} at ${details.time}.`);
})

// In the previous example, we simply print the details object.
// Now, we will move a step ahead and add a function for booking a ticket.
// And this will also be a promise.

