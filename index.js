const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => res.sendFile(__dirname + '/users.json'))


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.sendFile(`${__dirname}/users[${id}].json`);
})

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Server is listening on port ${port}`)
    }
});