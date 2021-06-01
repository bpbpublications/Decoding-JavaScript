const view = url => {
    console.log(`Loading ${url}`);
}
	
const errorHandler = error => {
    console.log(`The error is ${error}`);
}
	
const download = (url, callback) => {
    console.log(`Downloading ${url}...`);
    callback();
}
	
let url1 = "https://images.freeimages.com/images/large-previews/4ab/fruits-and-vegetables-1-1324165.jpg";
let url2 = "https://images.freeimages.com/images/large-previews/d42/vegetables-4-1189021.jpg"
let url3 = "https://images.freeimages.com/images/large-previews/360/banana-1-1330048.jpg"
	
download(url1, function() {
    setTimeout(() => {
    if(url1.length !== 0) {
        view(url1);
        download(url2, function() {
        setTimeout(() => {
        if(url2.length !== 0) {
                view(url2);
                    download(url3, function() {
                    setTimeout(() => {
                        if(url3.length !== 0) {
                        view(url3);
                        } else {
                        errorHandler("URL is not provided");
                        }
                    }, 2000)
                    })
                } else {
                errorHandler("URL is not provided");
                }
        }, 2000)
        })
    } else {
        errorHandler("URL is not provided");
        }
    }, 2000)
});
    