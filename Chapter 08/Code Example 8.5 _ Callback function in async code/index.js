const view = url => {
    console.log(`Loading ${url}`);
}

const download = (url, callback) => {
    setTimeout(() => {
        console.log(`Downloading ${url}`);
        callback(url);
    }, 2000);
}

download("https://cdn.shopify.com/s/files/1/0329/9547/5515/files/350X240_55x.png?v=1603344594", view);
