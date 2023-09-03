const express = require("express");
const router = express.Router();
const Book = require("../models/book.js");
const vendor = require("../models/vendor.js");

router.post("/", async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: "Incomplete book data" });
    }
    const book = await Book.findById(id);
    if (!book) {
      res.send("Book not found");
    }
    const vendors = await vendor.find({ availableBooks: book._id });
    res.send(vendors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
