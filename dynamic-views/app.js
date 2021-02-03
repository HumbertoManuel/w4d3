const express = require('express');
const app = express();

const movies = require('./movies.json');
console.log(movies);
// $ npm install hbs
// this line allows us to use handlebars as the templating engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    const todoList = ['learn node', 'learn react', 'play nintendo', 'watch devs'];
    // this renders an hbs view file - two parameters: <name of the view file>, {} with 
    // the data
    res.render('index', { name: 'Felix', list: todoList })
})

app.get('/movies', (req, res) => {
    res.render('movies', { moviesList: movies });
})

app.listen(3000, () => {
    console.log('Server listening');
})