const express = require("express");
const router = express.Router();
const vendor = require("../models/vendor.js");
const Book = require("../models/book.js");

// Get specific book
router.post("/", async (req, res) => {
  try {
    const { id } = req.body;
    await vendor
      .find({ availableBooks: { $in: id } })
      .then((data) => res.send(data))
      .catch((e) => res.status(500).json({ error: "Internal server error" }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
