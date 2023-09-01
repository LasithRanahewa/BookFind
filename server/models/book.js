const mongoose = require("mongoose");

// Define the book schema
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
});

// Create the Book model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
