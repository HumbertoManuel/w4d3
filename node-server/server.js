
// First Node Server
const http = require('http');
const port = 3000;

const server = http.createServer(function (request, response) {
    console.log(request.url);
    if (request.url === '/') {
        response.write('<h1>Hello from the Home Page</h1>');
    }
    if (request.url === '/about') {
        response.end('<h1>Hello from the About Page</h1>');
    } else {
        response.end('<h1>404 - Not Found</h1>');
    }
});

server.listen(port, function () {
    console.log(`Server listening on port ${port}`);
})