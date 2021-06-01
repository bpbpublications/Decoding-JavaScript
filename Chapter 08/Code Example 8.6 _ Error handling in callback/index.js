const view = url => {
    console.log(`Loading ${url}`);
}

const errorHandler = error => {
    console.log(`The error is ${error}.`);
}

const download = (url, success, error) => {
    setTimeout(() => {
        console.log(`Downloading ${url}...`);
        if(!url || url.length === 0) {
            error(`URL is not provided`);
        } else {
            success(url);
        }
    }, 2000);
}

download("https://cdn.shopify.com/s/files/1/0329/9547/5515/files/350X240_55x.png?v=1603344594", view, errorHandler);
download("", view, errorHandler);
