async function error() {
    await Promise.reject(new Error("This is an error!"));
}

async function error() {
    throw new Error("This is an error!");
}
