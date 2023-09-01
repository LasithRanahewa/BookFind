const express = require("express");
const router = express.Router();

const book = require("../models/book.js");

router.post("/new", async (req, res) => {
    const { name, author, publisher } = req.body;

    const newBook = new book({
        name,
        author,
        publisher,
    });

    try {
        await newBook.save();
        res.send({
            data: "Add successfull",
        });
    } catch (e) {
        console.log(e);
    }
    console.log("New book added to DB");
});

router.post("/", async (req, res) => {
    const { name } = req.body;

    try {
        const regex = new RegExp(name, "i");
        book.find({ name: { $regex: regex } }).then((data) => {
            res.send(data);
        });
    } catch (e) {
        res.send({
            data: "No books are available by that name",
        });
    }
});

module.exports = router;
