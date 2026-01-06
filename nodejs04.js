const { Socket } = require("dgram");
var fs = require("fs");
const { createServer } = require("http");
var data = '';

// var readerStream = fs.createReadStream('readme.md');
// readerStream.setEncoding('utf8');

// readerStream.on('data',function(chuck) {
//     data += chuck;
// });

// readerStream.on('end',function(){
//     console.log(data);
// });

// readerStream.on('error',function(err){
//     console.log(err.stack);
// });

// console.log("Program end");


const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected.');

    socket.on('data', (data) => {
        console.log('Received data:', data.toString());
    });

    socket.write('Hello, Client!\n');

    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

server.listen(3000, () =>{
    console.log('Server listening on port 3000');
});