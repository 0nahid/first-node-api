const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
const users = require("./user.js");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/fruits", (req, res) => res.send(["apple", "banana", "orange"]));
app.get("/fruits/mango/fazli", (req, res) => res.send("Hello Fazli!"));

// Load the api files
app.get("/users", (req, res) => {
  // use search query params to filter the results
  const search = req.query.search;
  search
    ? res.send(users.filter((user) => user.name.toLowerCase().includes(search)))
    : res.sendFile(__dirname + "/users.json");
  // res.sendFile(__dirname + '/users.json')
});

// App.post
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log("hitting post", req.body);
  res.json(newUser);
});

// dynamic api
app.get("/users/:id", (req, res) => res.send(users[req.params.id]));

app.listen(port, (err, res) => {
  err ? console.log(err) : console.log(`Server is listening on port ${port}`);
});
