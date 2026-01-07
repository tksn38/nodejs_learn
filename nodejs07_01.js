//server
const http = require('http');
const path = require('path');
const { URL } = require('url');

function start(route) {
    function onRequest(request, response) {
        const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;
        console.log(`Reuest for ${pathname} received.`);

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World.");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started on :8888");
}

module.exports.start = start;

