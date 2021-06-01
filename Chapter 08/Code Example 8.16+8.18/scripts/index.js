async function setName() {
    try{
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Error!");
            }, 2000);
        })
    
        let result = await promise;
    }
    catch(error) {
        console.log(error);
    }

    console.log(result);
}

setName();
// It is how you handle errors using async and await
