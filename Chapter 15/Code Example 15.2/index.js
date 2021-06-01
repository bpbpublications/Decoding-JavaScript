(async function() {
    for await (let num of asyncObj) {
        console.log(num);
    }
})