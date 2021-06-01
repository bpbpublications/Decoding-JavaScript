async function eyeColor() {
    return "red";
}

function eyeColor() {
    return Promise.resolve("red");
}
