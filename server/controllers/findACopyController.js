// import models
const Book = require("../models/book");
const Vendor = require("../models/vendor");

const findACopy = async(req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ error: "Incomplete book data" });
        }
        const book = await Book.find({ book: id });
        if (!book) {
            res.send("Book not found");
        }
        const vendors = await Vendor.find({ availableBooks: book._id });
        res.send(vendors);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
};

module.exports = {
    findACopy
};