
// Import express and create a new express app
const express = require('express');
// Define a new Router object
const router = new express.Router();
const app = express();


// Export the router
module.exports = router;

// Define some dummy book data, courtesy of https://gist.github.com/nanotaboada/6396437
let books = [{
    "id": 1,
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "subtitle": "A Modern Introduction to Programming",
    "author": "Marijn Haverbeke",
    "published": "2014-12-14T00:00:00.000Z",
    "publisher": "No Starch Press",
    "pages": 472,
    "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    "website": "http://eloquentjavascript.net/"
  },
  {
    "id": 2,
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "subtitle": "A JavaScript and jQuery Developer's Guide",
    "author": "Addy Osmani",
    "published": "2012-07-01T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 254,
    "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
  },
  {
    "id": 3,
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "subtitle": "An In-Depth Guide for Programmers",
    "author": "Axel Rauschmayer",
    "published": "2014-02-01T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 460,
    "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    "website": "http://speakingjs.com/"
  }
];

// Define another get with a route afterwards
router.get('/', async (req, res) => {
  // Use res.json() instead of res.send() to tell express we're returning JSON
  res.json(books);
});

