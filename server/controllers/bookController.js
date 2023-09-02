const express = require("express");
const router = express.Router();
const Book = require("../models/book.js");


// New book
router.post("/new", async (req, res) => {
  try {
    const { name, author, publisher } = req.body;
    if (!name || !author || !publisher) {
      return res.status(400).json({ error: "Incomplete book data" });
    }

    const newBook = new Book({ name, author, publisher });
    await newBook.save();
    res.status(201).json({ message: "Book added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Search book by name
router.post("/search", async (req, res) => {
  try {
    const { name } = req.body;
    const regex = new RegExp(name, "i");
    const books = await Book.find({ name: { $regex: regex } });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get specific book
router.post("/get", async (req, res) => {
  try {
    const { id } = req.body; 
    const bookData = await Book.findById(id);
    if (!bookData) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(bookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all books
router.get("/all", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
