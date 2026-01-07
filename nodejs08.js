function printHello() {
    console.log("Hello, Worls!");
    console.log(__filename,__dirname);
}

var t = setTimeout(printHello, 3000);
clearTimeout(t);
