const express = require('express');
const app = express();
const user = require('./user.js');

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

// Load the api files
app.get('/users', (req, res) => res.sendFile(__dirname + '/users.json'))

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const people = user[id]
    res.send(people);
})

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Server is listening on port ${port}`)
    }
});