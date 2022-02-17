const express = require('express');
const app = express();
const user = require('./user.js');

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

// Load the api files
app.get('/users', (req, res) => res.sendFile(__dirname + '/users.json'))

// dynamic api
app.get('/users/:id', (req, res) => res.send(user[req.params.id]))

app.listen(port, (err, res) => {
    (err) ? console.log(err) : console.log(`Server is listening on port ${port}`)
});