// sets up express
const express = require('express');
const app = express();

// this line is needed to register the public folder so that the content (all the public assets)
// is accessible in the browser
app.use(express.static(__dirname + '/public'));

// this is the route for the home page - a request to 'localhost:3000' executes the callback
// function
app.get('/', function (request, response) {
    // __dirname is a node internal variable that gives us the full absolute path
    // to this directory
    console.log(__dirname);
    // response.send('<h1>Home Page</h1>')
    // we send the file from the views folder as a response
    response.sendFile(__dirname + '/views/home-page.html')
})

// this is the route for the dog page
app.get('/dog', function (req, res) {
    res.sendFile(__dirname + '/views/dog.html')
})

// starts the server
app.listen(3000, () => {
    console.log('Server listening');
})