// Here, we will try the concert example for promises

let ready = true;

// Now, we have converted the ready value to false

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

promise.then((details) => {
    console.log("Hooray! The concert is happening!");
    console.log(details);
})
.catch((error) => {
    console.log(error);
})
