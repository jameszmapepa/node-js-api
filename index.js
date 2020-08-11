const express = require('express');
const app = express();

app.get('/', async(req, res) => {
  res.send("Hello nyika");
});

const port = 3000;
app.listen(port);
console.log(`API is running on port ${port}`);
