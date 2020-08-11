const express = require("express");
let books = require("./books.json");

const app = express();

app.get("/", async(req, res) => {
  res.send("Hello nyika");
});

app.get("/books", async(req, res) => {
  res.json(books.books);
});

const port = 3000;
app.listen(port);
console.log(`API is running on port ${port}`);
