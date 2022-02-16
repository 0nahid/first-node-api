const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Server is listening on port ${port}`)
    }
});