const express = require("express");
const app = express();
const bookRoutes = require("./routes/books");

app.get("/", async(req, res) => {
  res.send("Hello nyika");
});

app.use("/books", bookRoutes);

const port = 30000;
app.listen(port);
console.log(`API is running on port ${port}`);
